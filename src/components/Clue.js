import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  background:#e0c9a6;
  border-radius:8px;
  margin-bottom:64px;
  padding:48px 12px;
  text-align:center;
  margin:0 -8px 48px -8px; 
`

const ClueText = styled.div`
 line-height:1.4em; 
 letter-spacing:0.5px;
`

function Clue({answers, myScore, colors, firstClues, team}) {
  let clue = myScore.correct === 0 ? firstClues[team] : 
  answers[myScore.correct].response

  return (
    <Container style={{background: '#e5e5e5'}}>
    <ClueText>{clue}</ClueText>
      
    </Container>
    
  );
}

export default Clue;
