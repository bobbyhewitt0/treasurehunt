import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const InputComponent = styled.input`
  height:64px;
  width:100%;
  background:white;
  outline: none;
  border:1px solid #E1E6EF;
  transition:all 0.3s ease;
  border-radius:20px;
  font-size:20px;
  padding:16px;
  box-sizing:border-box;
  
`


function Input({background, textColor, value, type, onChange, incorrectValue}) {
  const [isWrong, setIsWrong ] = useState(false)
  useEffect(() => {
    
    let timeout;
      
      setIsWrong(true)
      timeout = setTimeout(() => {
        
        setIsWrong(false)
      },500)
    
    return () => {
      clearTimeout(timeout)
    }
  },[incorrectValue])

  return (
    <div>
     <InputComponent type={type ? type : 'text'}value={value} onChange={onChange} placeholder="Type your answer" style={isWrong ? {border: '1px solid red'} : {background:background, color: textColor}}/>
      
    </div>
  );
}

export default Input;
