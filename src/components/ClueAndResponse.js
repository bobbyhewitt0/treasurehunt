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
  margin-bottom:-60px;
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
  width:50%;
  z-index:-1;
  max-width:300px;

  margin:auto;
  
`

function ClueAndResponse({
  team, 
  time,
  inputValue, 
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
        <HeaderImage src={require('../assets/santa.png')} />
      </HeaderImageContainer>
      <Clue colors={colors} firstClues={firstClues} myScore={myScore} team={team}answers={answers}/>
      <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <Button isDisabled={inputValue.length === 0}color={colors.background} textColor={colors.text} onSubmit={onSubmit}/>
    </Container>
  );
}

export default ClueAndResponse;
