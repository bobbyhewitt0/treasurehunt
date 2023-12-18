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
  padding: 0 12px;
  box-sizing:border-box;

`
const OuterContainer = styled.div`
margin-top:48px;
width:100%;

`
const Column = styled.div`
flex:1.5;
  display:flex;
  
`


const Penalties = styled.p`
  // font-weight:bold;
  // text-align:right;
font-size:0.75em;
  width:100%;
  opacity:0.4;
`

const RightColumn = styled.div`
width:50px:
  display:flex;
  
  
  align-items:flex-end;
  justify-content:flex-end;
`




const TableHeader = styled.p`
  // font-weight:bold;
  // text-align:right;
font-size:0.75em;
  width:100%;
  opacity:0.4;

`
const TableHeaderRight = styled.p`
  // font-weight:bold;
  text-align:right;
font-size:0.75em;
  width:100%;
  opacity:0.4;

`




function OtherScores({scores, time, myTeam}) {

  
  const [augmentedScores, setAugmentedScores] = useState()

  function calculateScores(){
    if (!scores) return 
    // delete scores.red
    
    let teams = scores ? Object.keys(scores) : []
    let newScores = []
    for (var i = 0; i < teams.length; i++){
      let score = scores[teams[i]]
      let totalGameTime = score.startTime < time ? 
        score.totalTime + (time - score.startTime) :
        score.totalTime 
      let adjustedGameTime = totalGameTime - (score.bonus * 1000 * 60) + (score.incorrect * 1000 * 60)
      let formattedTime = formatTime(totalGameTime)
      let formattedAdjustedGameTime = formatTime(adjustedGameTime)
      newScores.push({
        ...score,
        totalGameTime,
        adjustedGameTime,
        formattedTime: formattedTime,
        formattedAdjustedGameTime,
        team: teams[i]
      })
    }
    newScores = newScores.sort((a,b) => a.adjustedGameTime - b.adjustedGameTime)
    setAugmentedScores(newScores)
  }

  useEffect(() => {
    // console.log('scores', scores)
    calculateScores()
  },[scores, time])



  
  // let teams = augmentedScores ? Object.keys(augmentedScores) : []

  return (
    <OuterContainer>
    {/*<Heading>Leaderboard</Heading>*/}
    <HeaderContainer>
      
       
      
      <Column>
        <TableHeader>Position</TableHeader>
      </Column>
      <Column>
        <TableHeader>Total time</TableHeader>
      </Column>
      
      <RightColumn>
        <TableHeaderRight>Status</TableHeaderRight>
      </RightColumn>
    </HeaderContainer>
    <Container>

     {augmentedScores && augmentedScores.map((score, i) => {
      
      const color = colors[score.team]
      if (score){
        return(
          <TeamLineItem isMyTeam={myTeam === score.team} key={i} position={i+1} color={color} {...score} currentTime={time}/>
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
