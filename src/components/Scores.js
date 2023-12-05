import React, { useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import colors from '../data/colors'
import Timer from './Timer'
import TeamLineItem from './TeamLineItem'
import { formatTime } from '../helpers/gameplay'

const ValidationText = styled.p`
  color:red;
`

const Container = styled.div`
  display:flex;
  width:100%;
  flex-direction:column;
  align-items:flex-start;
  flex:1;
  margin-top:12px;

`
const HeaderContainer = styled.div`
  display:flex;
  width:100%;
  flex-direction:row;
  align-items:flex-start;
  flex:1;
  margin-top:12px;

`
const OuterContainer = styled.div`
margin-top:48px;
width:100%;

`
const Column = styled.div`
  display:flex;
  flex:1;
`

const Position = styled.p`
// font-weight:bold;
text-align:left;
width:100%;
opacity:0.4;
`

const Time = styled.p`
// font-weight:bold;
text-align:center;
width:100%;
opacity:0.4;
`

const Penalties = styled.p`
  // font-weight:bold;
  text-align:right;
  width:100%;
  opacity:0.4;

`

const Heading = styled.h2`
margin-bottom:24px;
  text-align:center;
  
`



function OtherScores({scores, time, myTeam}) {
  const [currentTime, setCurrentTime ] = useState()
  const [augmentedScores, setAugmentedScores] = useState()

  function calculateScores(){
    if (!scores) return
    
    let currentTime = (new Date()).getTime()
    let teams = scores ? Object.keys(scores) : []
    let newScores = []
    for (var i = 0; i < teams.length; i++){
      let score = scores[teams[i]]
      let totalGameTime = score.startTime < currentTime ? 
        score.totalTime + (currentTime - score.startTime) :
        score.totalTime
      let timeString = formatTime(totalGameTime)
      newScores.push({
        ...score,
        totalGameTime,
        formattedTime: timeString,
        team: teams[i]
      })
    }
    newScores = newScores.sort((a,b) => a.totalGameTime - b.totalGameTime)
    setAugmentedScores(newScores)
  }

  useEffect(() => {
    calculateScores()
  },[scores])



  const intervalRef = useRef(null)
  useEffect(() => {
   
   
   
      
      calculateScores()
      
   
  },[time])

  // let teams = augmentedScores ? Object.keys(augmentedScores) : []

  return (
    <OuterContainer>
    {/*<Heading>Leaderboard</Heading>*/}
    <HeaderContainer>
      <Column>
        <Position>Position</Position>
      </Column>
      <Column>
        <Time>Time</Time>
      </Column>
      <Column>
        <Penalties>Penalties</Penalties>
      </Column>
    </HeaderContainer>
    <Container>

     {augmentedScores && augmentedScores.map((score, i) => {
      
      const color = colors[score.team]
      if (score){
        return(
          <TeamLineItem key={i} position={i+1} color={color} score={score} currentTime={time}/>
        )
      } else {
        return <div key={i}/>
      }
     })}
    </Container>
    </OuterContainer>
  );
}

export default OtherScores;
