import React from 'react'
import styled from 'styled-components'
import Mapbox from './Mapbox'

const Container = styled.div`
position:relative;

  background:#e0c9a6;
  border-radius:8px;
  margin-bottom:64px;
  padding:32px 12px;
  text-align:center;
  margin:0 0px 32px 0px; 
`

const ClueText = styled.p`
 line-height:1.4em; 
 letter-spacing:0.5px;
 margin-bottom:16px;
`
const QuestionText = styled.p`
 line-height:1.4em; 
 // font-weight:bold;

 letter-spacing:0.5px;
`



const ClueNumber = styled.p`
  font-size:24px;
  margin: 0 0 24px 0 ;

`

function Clue({answers, myScore, setOverlay, displayMap, displayClue, getClue, colors, firstClues, team}) {
  let clue = answers[myScore.correct]
  return (
    <React.Fragment>
    <Container style={{background: '#E7EFEF'}}>
    {clue &&
    <React.Fragment>
      <ClueNumber>Question {myScore.correct + 1}</ClueNumber>
      <ClueText>{clue.directions}</ClueText>    
      <ClueText>{clue.question}</ClueText>
    </React.Fragment>
    }
    
      
    
    </Container>

    {displayClue && 
 <Container style={{background: '#E7EFEF', marginTop:'32px'}}>
  
      <QuestionText>Clue</QuestionText>
      <ClueText>{clue.clue}</ClueText>
  
 </Container>
  }
    {((clue.coords && displayMap) || clue.isPub) &&
      <Mapbox {...clue.coords}/>
    }
    
    </React.Fragment>
    
  );
}

export default Clue;
