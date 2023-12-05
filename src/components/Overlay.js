import React, {useState, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:24px;
  background:#00000099;
`

const OverlayContainer = styled.div`
  background:white;
  width:100%;
  border-radius:8px;
  overflow:hidden;
  height:100%;

`

const CloseButton = styled.div`
  position:absolute;
  right:36px;

  display:flex;
  align-items:center;
  justify-content: center;
  width:44px;
  height:44px;
`

const CloseImage = styled.img`
  width:24px;
  height:24px;
`

const Header= styled.div`

  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:24px 12px;
  box-sizing:border-box;
`

const Body = styled.div`
  align-items:center;
  justify-content:center;
  padding:24px 12px;

`

const Response = styled.div`
  text-align:center;
`

function Overlay({colors, textColor, body, header, onClose}) {
  

  return (
    <Container>
      <OverlayContainer>
        <Header style={{background:colors.background}}>
          <h2 style={{color:colors.text}}>{header}</h2>
          <CloseButton onClick={onClose}>
            <CloseImage src={require('../assets/close.png')} />
          </CloseButton>
        </Header>
        <Body>
          <Response>{body}</Response>
        </Body>
      </OverlayContainer>
    </Container>
      
    
  );
}

export default Overlay;
