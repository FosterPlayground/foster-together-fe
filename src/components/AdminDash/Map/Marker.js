import React from 'react'
import F from './f.png'

export default function Marker(props) {
  const { color, name, id } = props
  return (
    <div
      className='marker'
      style={{
        backgroundImage: 'url(' + { F } + ')',
        cursor: 'pointer',
        height: '20px',
        width: '20px',
      }}
      onClick={() => {}}
    >
      <img
        style={{ width: '100%' }}
        src='https://i.pinimg.com/originals/5f/99/f2/5f99f21f4612118074d38d6a619a0a78.jpg'
        alt='neighbor'
      />
    </div>
  )
}
