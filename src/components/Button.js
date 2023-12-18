import React, {useState, useEffect } from 'react'
import styled from 'styled-components'

const ButtonComponent = styled.button`
  height:56px;
  width:100%;
  background:white;
  outline: none;
  
  border:none;
  border-radius:20px;
  font-size:16px;
  padding:12px;
  box-sizing:border-box;
  color: white;
  margin-top:16px;
`

const ButtonText = styled.p`
  color: white;
`


function Button({color, textColor, text, team, secondary, isDisabled, onSubmit}) {


  return (
    
     <ButtonComponent placeholder="Type your answer" style={{
        background: secondary ? 'white' : isDisabled ? "#EAEAEA" : color ? color.dark : '#CA4035', 
        color: secondary? '#CA4035' :  isDisabled ? "#717171" : color ? color.text : 'white',
        border: secondary ? color ? `1ps solid ${color.dark}` : '1px solid #CA4035' : 'none'
      }} onClick={() => onSubmit(team)}>
      {text || 'Submit'}
     </ButtonComponent>
      
    
  );
}

export default Button;
