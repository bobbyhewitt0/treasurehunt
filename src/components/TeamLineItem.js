import React, { useState, useEffect} from 'react'
import styled from 'styled-components'


const ItemContainer = styled.div`
  display:flex;
  flex-direction:row;
  flex-grow;
 
  align-items:center;
  justify-content:center;
  width:100%;
  border-bottom:1px solid #00000022;
  padding:12px 0;

`
const Swatch = styled.div`
  display:flex;
  flex-direction:row;
  width:32px;
  height:32px;
  border-radius:16px;
  align-items:center;
  justify-content:center;
  
`

const Score = styled.p`

  font-size:16px;
  font-weight:bold;
`

const Time = styled.p`
  flex:1;
  margin-left:12px;
  text-align:center;
`

const Penalties = styled.p`
width:100%;
text-align:right;
  color:red;
`

const Column = styled.div`
  display:flex;
  flex-direction:row;
  flex:1;
`

const PauseIcon = styled.img`
  position:absolute;
  top:50%;
  left:0;
  transform: translate(-16px, -50%);
  width:24px;
  // opacity:0.25;
  height:24px;

`




function TeamLineItem({currentTime, score,position, color}) {
 

  return (
    
      <ItemContainer>
        <Column>
        <Swatch style={{background:color.dark}}>
          <Score style={{color:color.text}}>{position}</Score>
        </Swatch>
        </Column>
        <Column>
        <div style={{margin:'auto', position:'relative'}}>
        {currentTime < score.startTime &&
          <PauseIcon src={require('../assets/pause.png')} />
        }
        <Time>{score.formattedTime}</Time>
        </div >
        </Column>

        <Column>
        <Penalties>{score.incorrect}</Penalties>
        </Column>
      </ItemContainer>
    
  );
}

export default TeamLineItem;
