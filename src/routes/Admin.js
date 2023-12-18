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

  const onEmptyScores = () => {
    const rootRef = ref(database, `/scores`);
    const startingData = getDefaultData()
    set(rootRef, null)
  }

  return (
    <Container>
      <Button text="Start game" onSubmit={onClick}/>     
      <div style={{marginTop:'24px'}} >
        <Button text="Stop game" onSubmit={onEmptyScores}/>      
      </div>
    </Container>
  );
}

export default StarterPage;
