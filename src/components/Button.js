import React, {useState, useEffect } from 'react'
import styled from 'styled-components'

const ButtonComponent = styled.button`
  height:64px;
  width:100%;
  background:white;
  outline: none;
  box-shadow:2px 2px 30px #00000033 ;
  border:none;
  border-radius:8px;
  font-size:20px;
  padding:12px;
  box-sizing:border-box;
  color: white;
  margin-top:24px;
`

const ButtonText = styled.p`
  color: white;
`


function Button({color, textColor, text, isDisabled, onSubmit}) {


  return (
    
     <ButtonComponent placeholder="Type your answer" style={{background:color, opacity: isDisabled ? 0.33: 1, color: textColor}} onClick={onSubmit}>
      {text || 'Submit'}
     </ButtonComponent>
      
    
  );
}

export default Button;
