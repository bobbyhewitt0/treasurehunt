import React, { useEffect, useRef, useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import colors from '../data/colors'
import styled from 'styled-components'
import { updateScore }from '../helpers/gameplay'
import { ref, set, onValue } from "firebase/database";

const Container = styled.div`
padding:12px;
`

const Row = styled.div`
  display:flex;
  flex-direction:row;
`

function BonusPoints({database}) {
  const [inputValue, setInputValue] = useState(0)
  const [scores, setScores ] = useState(null)
  const [team, setTeam ] = useState(null)
  const [bonusOrPenalty, setBonusOrPenalty ] = useState(null)

  const keys = useRef(Object.keys(colors))


   useEffect(() => {
    const scoresRef = ref(database, 'scores');
    
    onValue(scoresRef, (snapshot) => {
      const data = snapshot.val();
      setScores(data)
    });
    
    return () => {
      // scoresRef.off()
      // myScoreRef.off()
    }
  },[])
  const onSubmit = () => {
    
const v = parseInt(inputValue) 

    if ( isNaN(v)) return 
    if (!bonusOrPenalty) return
    if (!team) return
    if (!scores) return
    let key = bonusOrPenalty === 'Bonus' ? 'bonus' : 'incorrect'

      updateScore(database, scores[team], team, key, v)
      setTeam(null)
      setBonusOrPenalty(null)
      setInputValue(0)
  }


  const onSelectTeam = (team) => {
    setTeam(team)
  }
  return (
    <Container>
      <p style={{marginBottom:'12px'}}>Enter bonus point value and select team</p>
      <Input type="number" onChange={(e) => setInputValue(e.target.value)} placeholder="Enter value" value={inputValue}/>
      {keys.current.map((item, i) => {
        const color = colors[item]
        return (
          <Button secondary={team!== item} text={item} color={color} key={i} team={item} onSubmit={onSelectTeam}/>
        )
      })}
      

      <Row>
        <Button secondary={bonusOrPenalty !== 'Bonus'} text="Bonus" color={{dark:'black', text:'white'}} onSubmit={() => setBonusOrPenalty('Bonus')}/>
        <Button secondary={bonusOrPenalty !== 'Penalty'} text="Penalty" color={{dark:'black', text:'white'}}onSubmit={() => setBonusOrPenalty('Penalty')}/>
      </Row>
      <div style={{marginTop:'64px'}}>
      <Button  text="Submit" onSubmit={onSubmit}/>
      </div>
    </Container>
  );
}

export default BonusPoints;
