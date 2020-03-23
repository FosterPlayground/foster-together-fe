import React, { useState } from 'react'
import Map from './Map'
import PersonInfo from './PersonInfo'
import MapFilters from './MapFilters'
import { PageContain } from './MapStyles'
import {locations} from './Locations'

export default function MapThing() {
  const [points, setPoints] = useState(locations)
  const [selected, setSelected] = useState({})
  
  return (
    <PageContain>
      <MapFilters filter={setPoints} />
      <Map locations={points} selected={selected} setSelected={setSelected} />
      <PersonInfo selected={selected}/>
    </PageContain>
  )
}
