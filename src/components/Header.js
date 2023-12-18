import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  text-align:center;
  color:white;
  font-size:28px;
`
const Container = styled.div`
z-index:100;
  position:fixed;
  border-radius:0 0 20px 20px;
  top:0;
  left:0;
  width:100vw;
  background:#275653;
  height:84px;
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
`

const SubHeading = styled.p`
color:white;
  text-align:center;
  font-size:12px;
`

function Header({colors}) {


  return (
    <Container style={{background:colors.dark}}>
      <Heading style={{color:colors.text}}>Santa Santos</Heading>
      <SubHeading style={{color:colors.text}}>Making Christmas great again</SubHeading>
     
      
    </Container>
  );
}

export default Header;
