import React, { useState, useEffect } from 'react'
import { InfoDiv,
UserName, 
Icon,
IconContain } from './MapStyles'

export default function Filter(props) {
  const [selected, setSelected] = useState('v')
  useEffect(() => {
    setSelected(props.selected)
  }, [props])
  return (
    <InfoDiv>
      <h1>{selected.id}</h1>
      <IconContain><Icon src={require('./mapicons/Vector.png')} /><UserName>{selected.name}</UserName></IconContain>
      <IconContain><h3>{selected.type}</h3></IconContain>
      <IconContain><Icon src={require('./mapicons/home-building.png')} /><h1>{selected.address}</h1></IconContain>
      <IconContain><Icon src={require('./mapicons/email.png')} /><h1>{selected.email}</h1></IconContain>
      <IconContain><Icon src={require('./mapicons/phone.png')} /><h1>{selected.phone}</h1></IconContain>
    </InfoDiv>
  )
}
