import React from 'react'
import Button from '../components/Button'
import styled from 'styled-components'
import { getDefaultData } from '../helpers/gameplay'
import { getDatabase, ref, set, onValue } from "firebase/database";

const Container = styled.div`
  width:100%;
  height:100%;
  padding:24px;
  box-sizing:border-box;
`

function StarterPage({database}) {

  const onClick = () => {
    const rootRef = ref(database, `/scores`);
    const startingData = getDefaultData()
    set(rootRef, startingData)
    
  }

  return (
    <Container>
      <Button text="Reset game" color="red" onSubmit={onClick}/>      
    </Container>
  );
}

export default StarterPage;
