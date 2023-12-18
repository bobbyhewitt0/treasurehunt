import React, {useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from './Button'
import CallForHelp from './CallForHelp'

const Container = styled.div`
  position:fixed;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:0 24px;
  box-sizing:border-box;
  background:#00000099;
  z-index:100000000000000000;
`

const OverlayContainer = styled.div`
  background:white;
  width:100%;
  border-radius:8px;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  align-items:center;

  

`

const CloseButton = styled.div`
  position:absolute;
  right:12px;

  display:flex;
  align-items:center;
  justify-content: center;
  width:44px;
  height:44px;
`

const CloseImage = styled.img`
  width:40px;
  height:40px;
  position:absolute;
  top:12px;
  right:0px;
`

const Header= styled.div`

  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  padding:24px 12px;
  box-sizing:border-box;
`

const Title = styled.h2`
text-align:center;
font-size:52px;
color:#275653;
`

const Eyebrow = styled.p`
text-align:center;
font-size:16px;
color:#275653;

`

const Body = styled.div`
  align-items:center;
  justify-content:center;
  padding:24px 12px;
`

const Response = styled.div`
  text-align:center;
`

const Image = styled.img`
  
  max-width:100%;
`

const ButtonContainer = styled.div`
  padding:32px;
  box-sizing:border-box;
`

function Overlay({colors, textColor, smallImage, imageSource, eyebrow, getClue, getMap, body, header, onClose, displayClue, displayMap, isClueOverlay}) {
  const [isLoaded, setIsLoaded ] = useState(false)
  useEffect(() => {
    setIsLoaded(true)
  },[])

  return (
    <Container>
      <OverlayContainer style={isLoaded ? {opacity:1, transform:`scale(1)`, transition: 'all 0.33s ease'} : {opacity:0, transform:`scale(0.85)`}}>
      <CloseButton onClick={onClose}>
            <CloseImage src={require('../assets/add.png')} />
          </CloseButton>
        {
          <Image style={{width: smallImage ? '25%' : '100%', marginTop: smallImage ? '24px' : 0}}src={imageSource} />
        }
        
        <Header >
        {eyebrow && 
          <Eyebrow>{eyebrow}</Eyebrow>
        }
        {header &&
          <Title>{header}</Title>
        }
        {body && 
          <Eyebrow>{body}</Eyebrow>
        }


        </Header>
        {isClueOverlay &&
       <ButtonContainer>
        {!displayClue && 
          <Button text="Give me clue (+3mins)" onSubmit={getClue}/>
        }
        {!displayMap &&
          <Button secondary={!displayClue} text="Show me a map (+5mins)" onSubmit={getMap}/>
        }
          <CallForHelp />
         </ButtonContainer> 
       }
      </OverlayContainer>
    </Container>
      
    
  );
}

export default Overlay;
