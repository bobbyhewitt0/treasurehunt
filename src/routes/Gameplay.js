import React , {useState, useEffect }  from 'react'
import allColors from '../data/colors.js'
import allAnswers from '../data/answers'
import styled from 'styled-components'
import Input from '../components/Input'
import Button from '../components/Button'
import standardise from '../helpers/standardise'
import api from '../helpers/api'
import Validation from '../components/Validation'
import firstClues from '../data/firstClues'
import { getDatabase, ref, set, onValue } from "firebase/database";
import Scores from '../components/Scores'
import Overlay from '../components/Overlay'
import CallForHelp from '../components/CallForHelp'
import ClueAndResponse from '../components/ClueAndResponse'

const Container = styled.div`
  width:100%;
  height:100%;
  padding:24px;
  box-sizing:border-box;
`

const Heading = styled.h1`
  text-align:center;
  
`

const SubHeading = styled.p`
  text-align:center;
  margin-bottom:24px;
`

const Background = styled.div`
  position:absolute;
  z-index:-1;
  opacity:0.9;
  top:0;
  left:0;
  right:0;
  bottom:0;
`

function Gameplay({team, database}) {


  const colors = allColors[team]
  const answers = allAnswers[team]
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isIncorrect, setIsIncorrect ] = useState(false)
  const [overlay, setOverlay] = useState(false)
  const [scores, setScores] = useState(null)
  const [myScore, setMyScore] = useState(null)
  const [time, setTime] = useState(Date.now());
  // Ensures refresh of page when not showing clue
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const scoresRef = ref(database, 'scores');
    const myScoreRef = ref(database, `scores/${team}`);
    onValue(scoresRef, (snapshot) => {
      const data = snapshot.val();
      setScores(data)
    });
    onValue(myScoreRef, (snapshot) => {
      const data = snapshot.val();
      setMyScore(data)
      if (data && data.complete){
        setOverlay({header: "Congratulations", body: "You've finished!"})
      }
    });
    return () => {
      // scoresRef.off()
      // myScoreRef.off()
    }
  },[])


  const updateScore = (key) => {
    const correct = key === 'correct' ? myScore.correct + 1 : myScore.correct
    const incorrect = key === 'incorrect' ? myScore.incorrect + 1 : myScore.incorrect
    const complete = correct === answers.length
    let myNewScore = {
      incorrect,
      correct,
      complete,
      totalTime: key === 'incorrect' ? myScore.totalTime + (1000*60) :  myScore.totalTime,
      startTime: myScore.startTime
    }
    const myScoreRef = ref(database, `scores/${team}`);
    set(myScoreRef, myNewScore)
  }

  const updateScoreAtCheckpoint = (nextStartTime) => {
    let myNewScore = {
      incorrect: myScore.incorrect,
      correct: myScore.correct +1,
      complete: false,
      totalTime: myScore.totalTime + (time - myScore.startTime),
      startTime: nextStartTime
    }
    const myScoreRef = ref(database, `scores/${team}`);
    set(myScoreRef, myNewScore)
  }


  const checkIfAtCheckpoint = () => {
    console.log('checking')
    const nextAnswer = answers[myScore.correct +1]
console.log(nextAnswer, nextAnswer.revealAtDate , nextAnswer.revealAtDate > time)
    if (nextAnswer && nextAnswer.revealAtDate && nextAnswer.revealAtDate > time){
      console.log('meets')
      return nextAnswer.revealAtDate
    } else {
      return false
    }
  }

  const checkAnswer = () => {
    const input = standardise(inputValue)
    let answerIndex = myScore ? myScore.correct : 0
    let answer = answers[answerIndex]
    if (!answer) return 
    let standardisedAnswer = standardise(answer.answer)
    if (standardisedAnswer === input){
      setOverlay({header: "Correct!", body: answer.response})
      setIsIncorrect(false)
      const nextStartTime = checkIfAtCheckpoint()
      if (nextStartTime){
        updateScoreAtCheckpoint(nextStartTime)
      } else {
        updateScore('correct')
      }
      return true 
    }  
    setInputValue('')
    setIsIncorrect(true)
    updateScore('incorrect')
    return false
  }

  const onSubmit = () => {
    console.log('submitting')
    if (inputValue.length > 0){
      // api()
      setIsLoading(true)
      let isCorrect = checkAnswer()
    }
  }

  const onCloseOverlay = () => {
    setOverlay(false)
    setInputValue('')
  }


  return (
    <Container >
      <Background style={{background: 'white'}}/>
      <Heading>Santa Santos</Heading>
      <SubHeading>searching for sips</SubHeading>
      {myScore && (!answers[myScore.correct].revealAtDate || (answers[myScore.correct].revealAtDate < time)) &&
        <ClueAndResponse 
          {...{
            firstClues,
            myScore,
            team, 
            time,
            inputValue, 
            setInputValue, 
            database,
            answers,
            colors,
            scores,
            onSubmit,
            overlay,
            onCloseOverlay
          }}
        />
      }

      
      
      <Scores scores={scores} time={time} myTeam={team}/>
      <CallForHelp />
      {overlay && 
        <Overlay {...overlay} colors={colors} onClose={onCloseOverlay}/>
      }


    </Container>
  );
}

export default Gameplay;
