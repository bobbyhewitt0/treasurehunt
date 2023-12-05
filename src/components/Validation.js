import React from 'react'
import styled from 'styled-components'

const ValidationText = styled.p`
  color:red;
`


function Validation({}) {


  return (
    <div>
     <ValidationText>Wrong!</ValidationText>
    </div>
  );
}

export default Validation;
