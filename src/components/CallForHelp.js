import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
  color:black;
  user-select:none;
  text-decoration:none;
`

const OuterContainer = styled.div`
  margin-top:48px;
  
  display:flex;
  align-items:center;
  justify-content:center;
`
const Container = styled.div`
  
  // height:44px;

`

const Link =  styled.a`
text-decoration: none!imporant


`


function Input({background, textColor, value, onChange, }) {


  return (
    <OuterContainer>
    <Link href="tel:07507144826">
    <Container>
    <Text>Call for help</Text>
    </Container>
    </Link>
    </OuterContainer>
  );
}

export default Input;
