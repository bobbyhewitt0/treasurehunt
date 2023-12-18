import React , {useState, useEffect }  from 'react'
import styled from 'styled-components'
import Clue from './Clue'
import Input from './Input'
import Button from './Button'

const Container = styled.div`
  width:100%;
  height:100%;
  // padding:24px;
  box-sizing:border-box;
`


const HeaderImageContainer = styled.div`
  margin-bottom:-20px;
  display:flex;
  align-items:center;
  z-index:-1;
  jusify-content:center;
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

const HeaderImage = styled.img`
  width:70%;
  z-index:-1;
  max-width:400px;

  margin:auto;
  
`

const QuestionText = styled.p`
 line-height:1.4em; 
 // font-weight:bold;

 letter-spacing:0.5px;
`


const ClueButtonContainer = styled.div`
  
  opacity:0.5;
  
  margin:32px 0;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;

`

function ClueAndResponse({
  team, 
  time,
  displayClue,
  getClue,
  inputValue, 
  displayMap,
  setOverlay,
  setInputValue, 
  firstClues,
  colors,
  myScore,
  answers,
  onSubmit
}) {
  
  return (
    <Container >
      <HeaderImageContainer>
        <HeaderImage src={require('../assets/bg.png')} />
      </HeaderImageContainer>
      <Clue colors={colors} setOverlay={setOverlay} color={colors} getClue={getClue} displayClue={displayClue} displayMap={displayMap} myScore={myScore} team={team} answers={answers}/>
      <ClueButtonContainer onClick={ () => {
        setOverlay({eyebrow: "Santa Satos'",header:"strugglers support", isClueOverlay:true}) 
      }}>
        <QuestionText>Need help with the question?</QuestionText>
        <img style={{width:'24px', height: '24px'}}src={require('../assets/clue.png')} />
      </ClueButtonContainer>
      <Input incorrectValue={myScore.incorrect} value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <Button isDisabled={inputValue.length === 0} color={colors}  onSubmit={onSubmit}/>
      
    </Container>
  );
}

export default ClueAndResponse;
