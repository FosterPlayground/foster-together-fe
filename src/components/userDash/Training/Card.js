import React, { useState } from 'react'
import { Header, MainContent, Cards, Arrow, Cards2 } from './TrainStyle'

export default function Card(props) {
  const [open, setOpen] = useState(false)

  return (
    <Cards style={!open? {'justifyContent': 'space-between'} : {'flex-direction': 'column'}} onClick={() => {setOpen(!open)}}>
      <Header > {props.title}</Header>
      {open ? null : <Arrow  className="img" src={require('./trainingIcons/arrow.png')} alt="arrow"/>}
      {open? <MainContent>{props.content}</MainContent> : null }
    </Cards>
  )
}
