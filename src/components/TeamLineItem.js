import React, { useState, useEffect} from 'react'
import styled from 'styled-components'


const ItemContainer = styled.div`
  display:flex;
  flex-direction:row;
  // margin: 0 -24px;
position:relative;
  flex-grow;
 
  align-items:center;
  justify-content:center;
  width:100%;
  
  padding:12px 20px;
  border-radius:20px;
  box-sizing:border-box;
  position:relative;

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
const PenaltiesColumn = styled.div`
  display:flex;
  flex:0.3;
  text-align:right;
`

const TimeColumn = styled.div`
   display:flex;
  flex-direction:row;
  flex:1.5;
`
const Time = styled.p`
margin-left:12px;
  flex:1;
  // padding-left:4px;
  box-sizing:border-box;
  text-align:center;
`

const Penalties = styled.p`
width:100%;
// text-align:right;
  color:red;
`

const Bonuses = styled.p`
// width:100%;
margin-right:4px;
// text-align:right;
  // color:red;
`

const Column = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  flex:1;
`
const RightColumn = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:flex-end;
  flex:1;
`

const PauseIcon = styled.img`
  // position:absolute;
  // // top:50%;
  // // right:0;
  // transform: translate(-16px, -50%);
  width:24px;
  // opacity:0.25;
  height:24px;

`




function TeamLineItem({currentTime, score, incorrect, startTime, correct, formattedAdjustedGameTime, position, isMyTeam, color, bonus, formattedTime}) {
   const [count, setCount] = useState(0); 

   useEffect(() => {
    setCount(count+1)
   },[currentTime])

  return (
    
      <ItemContainer style={{background: isMyTeam ? '#EAEAEA' : 'white'}}>
         <Column>
        <Swatch style={{background:color.dark}}>
          <Score style={{color:color.text}}>{position}</Score>
        </Swatch>
        
      </Column>
      
      <Column>
        <Time style={{opacity:0.6, fontWeight: 'light'}}>{formattedAdjustedGameTime} <br/><span style={{opacity:1, fontSize:'12px'}}>({formattedTime} <span style={{color:'rgb(0, 183, 59)'}}>-{bonus}</span> <span style={{color:'red'}}> +{incorrect}</span>)</span></Time>

        
        </Column>
        
     
       
      
        <RightColumn>
          {
            correct >= 15 ? 
              <h1 style={{marginLeft:'4px', textAlign:'right'}}>🏁</h1> : 
              currentTime < startTime ?
                <h1 style={{marginLeft:'4px', textAlign:'right'}}>🍻</h1> : 
              <h1 style={{marginLeft:'4px',fontSize:'24px', textAlign:'right'}}>🔎</h1>
          }
        </RightColumn>
        <div style={{position:'absolute', bottom:'0px', left:'20px', right:'20px', background:'#EAEAEA', height:'1px'}} />
      </ItemContainer>
    
  );
}

export default TeamLineItem;
