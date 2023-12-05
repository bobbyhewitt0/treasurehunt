import React from 'react'
import styled from 'styled-components'

const InputComponent = styled.input`
  height:64px;
  width:100%;
  background:white;
  outline: none;
  box-shadow:2px 2px 30px #00000033 ;
  border:none;
  border-radius:8px;
  font-size:20px;
  padding:16px;
  box-sizing:border-box;
  
`


function Input({background, textColor, value, onChange, }) {


  return (
    <div>
     <InputComponent value={value} onChange={onChange} placeholder="Type your answer" style={{background:background, color: textColor}}/>
      
    </div>
  );
}

export default Input;
