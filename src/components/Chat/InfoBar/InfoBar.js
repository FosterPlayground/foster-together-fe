import React from 'react'

import onlineIcon from '../icons/onlineIcon.png'
import closeIcon from '../icons/closeIcon.png'
import {Bar, LeftContain, RightContain,} from './InfoStyle'

const InfoBar = ({ room }) => (
  <Bar>
    <LeftContain>
      <img className='onlineIcon' src={onlineIcon} alt='online icon' />
      <h3>{room}</h3>
    </LeftContain>
    <RightContain>
      <a href='/userdash'>
        <img src={closeIcon} alt='close icon' />
      </a>
    </RightContain>
  </Bar>
)

export default InfoBar
