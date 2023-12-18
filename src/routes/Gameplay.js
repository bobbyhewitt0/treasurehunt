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
import Header from '../components/Header'
import { updateScore } from '../helpers/gameplay'

const Container = styled.div`
  width:100%;
  height:100%;
  padding:100px 24px 64px 24px;
  box-sizing:border-box;

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

const ImageContainer = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
`

const BeerImage = styled.img`
  margin:auto;
  max-width:75%;
`
const NextClueContainer = styled.div`
background:#E7EFEF;
padding:24px;
border-radius:20px;
`
const NextClueTime = styled.h2`
  font-size:52px;
  color:#275653;
  margin:0;
  text-align:center;
`

const NextClueEyebrow = styled.p`
// margin-bottom:12px;
margin:0;
  font-size:16px;
  color:#275653;
  text-align:center;
`

const NextClueHelp = styled.p`
  color: #717171;
  font-size:12px;
  margin-top:12px;
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
  const [displayClue, setDisplayClue] = useState(false)
  const [displayMap, setDisplayMap] = useState(false)
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
        setOverlay({header: "Congrats", body: "You've finished!"})
      }
    });
    return () => {
      // scoresRef.off()
      // myScoreRef.off()
    }
  },[])

  const getClue = () => {
    updateScore(database, myScore, team, 'incorrect', 3)
    setDisplayClue(true)
    setOverlay(false)
  }

   const getMap = () => {
    updateScore(database, myScore, team, 'incorrect', 5)
    setDisplayMap(true)
    setOverlay(false)
  }

// let d = new Date()
// d.setYear(2050)
// d= d.getTime()
// console.log(d)


  const updateScoreAtCheckpoint = (nextStartTime) => {
    console.log('updaing', nextStartTime > time)
    let myNewScore = {
      incorrect: myScore.incorrect,
      correct: myScore.correct +1,
      complete: false,
      bonus: myScore.bonus,
      totalTime: myScore.totalTime + (time - myScore.startTime),
      startTime: nextStartTime
    }
    const myScoreRef = ref(database, `scores/${team}`);
    set(myScoreRef, myNewScore)
  }


  const checkIfAtCheckpoint = () => {
    const nextAnswer = answers[myScore.correct +1]
    if (nextAnswer && nextAnswer.revealAtDate && nextAnswer.revealAtDate > time){
      return nextAnswer.revealAtDate
    } else if (!nextAnswer){

      let future = new Date()
      future.setFullYear(2024)
      future = future.getTime()
      return future  
    } else {
      return false

    }
  }

  const checkAnswer = () => {
    
    const input = standardise(inputValue)
    let answerIndex = myScore ? myScore.correct : 0

    let answer = answers[answerIndex]


    if (!answer) {
      console.log('got no next answer')
      // updateScoreAtCheckpoint(15073825000) 
      return 
    }
    let standardisedAnswer = standardise(answer.answer)
    if (input.indexOf(standardisedAnswer) > -1){
      if (answer.rewardsWithPub){
        setOverlay({header: "Correct!", body: "Your reward is a trip to the pub", imageSource: require('../assets/confetti.png')})
      } else if (answerIndex === 14){
        setOverlay({header: "Congrats!", smallImage: true, body: "You've made it to Santa Santos (except he's gone home to look after his kid, so you'll have to settle for the rest of us instead).", imageSource: require('../assets/confetti.png')})
      } else if (answer.isPub){
        setOverlay({header: "Correct!", smallImage: true, body: "Ask the bar lad or lady for your gift from Santa Santos. Tell them your team colour.", imageSource: require('../assets/letter2.png')})
      } else {
        setOverlay({header: "Correct!", smallImage: true, eyebrow: "Nice one!", imageSource: require('../assets/check.png')})

      }
      setIsIncorrect(false)
      const nextStartTime = checkIfAtCheckpoint()
      if (nextStartTime){
        updateScoreAtCheckpoint(nextStartTime)
      } else {
        setDisplayClue(false)
        setDisplayMap(false)
        updateScore(database, myScore, team, 'correct')
      }
      return true 
    }  
    setInputValue('')
    setIsIncorrect(true)
    updateScore(database, myScore, team, 'incorrect')
    return false
  }

  const onSubmit = () => {
    
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
    <React.Fragment>
    <Header colors={colors}/>
    <div style={scores ? {opacity:1, transform:`translateY(0)`, transition: 'all 0.66s ease'} : {opacity:0, transform:`translateY(25px)`}}>
    <Container >
      
    
      <Background style={{background: 'white'}}/>

      {myScore && answers[myScore.correct] && (!answers[myScore.correct].revealAtDate || (answers[myScore.correct].revealAtDate < time)) ?
        <ClueAndResponse 
          {...{
           
            myScore,
            team, 
            getClue, 
            time,
            inputValue, 
            setInputValue, 
            setOverlay,
            database,
            answers,
            displayClue,
            displayMap,
            setDisplayMap,
            colors,
            scores,
            onSubmit,
            overlay,
            onCloseOverlay
          }}
        /> :

        <div style={{paddingTop:'80px'}}>
          {myScore && answers[myScore.correct] && answers[myScore.correct].revealAtDate && 
          <React.Fragment>
            <ImageContainer>
            <BeerImage src={require('../assets/santa.png')} />
            </ImageContainer>
            <NextClueContainer>
            <NextClueEyebrow>Your next clue will be available at:</NextClueEyebrow> 
            <NextClueTime>{answers[myScore.correct].revealAtHour.toString().padStart(2, "0")}:{answers[myScore.correct].revealAtMinute.toString().padStart(2, "0")}</NextClueTime> 
            </NextClueContainer>
            <NextClueHelp style={{textAlign:'center'}}>Your clock will restart then too. Have a drink</NextClueHelp> 
            <NextClueHelp style={{textAlign:'center'}}>Remember to ask for your gift from Santa Santos at the bar. Tell them your team colour.</NextClueHelp> 
            
          </React.Fragment>
          }
          {myScore && !answers[myScore.correct] && 
           <React.Fragment>
            <h1 style={{textAlign:'center', marginTop:'-64px'}}>Congratulations, you made it!</h1>
            <ImageContainer>
            <BeerImage src={require('../assets/confetti.png')} />
            </ImageContainer>
            <NextClueContainer>
            <NextClueEyebrow>Where on earth is Santa Santos you ask? He's gone home to look after his kid. We knew he had to do that when we started all this. Hard to say why we pursued this storyline. </NextClueEyebrow> 
            <NextClueEyebrow style={{marginTop:'12px'}}>His elves (who seem to have been around all along after all that) will be conducting the prize ceremony.</NextClueEyebrow> 
            <NextClueEyebrow style={{marginTop:'12px'}}>In the meantime. Have a seat (if there's space) and grab youself a drink!</NextClueEyebrow> 
            
            </NextClueContainer>
            
          </React.Fragment>
          } 

        </div>

      }

      
      {scores &&
        <Scores scores={scores} time={time} myTeam={team}/>
      }
      
      
      
      
    </Container>
    </div>

      {overlay && 
        <Overlay {...overlay} colors={colors} onClose={onCloseOverlay} getClue={getClue} displayClue={displayClue} displayMap={displayMap} getMap={getMap}/>
      }
      {!scores && 
      <div>
      <h1 style={{textAlign:'center', marginTop:'-64px'}}>Waiting for Xmas</h1>
        <ImageContainer>

            <BeerImage src={require('../assets/confetti.png')} />
            </ImageContainer>
            </div>
      }
    </React.Fragment>
  );
}

export default Gameplay;

