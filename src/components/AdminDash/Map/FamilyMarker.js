import React, { useState, useEffect } from 'react'
import { set } from 'react-ga'

export default function FamMark(props) {
  const [open, setOpen] = useState(false)
  function clicked() {
    setOpen(true)
    if (open === false) {
      props.setSelected(props.location)
    }
  }

  useEffect(() => {
    if (props.location.id === props.selected.id) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [props.selected])

  return (
    <>
      {!open ? (
        <div
          onClick={() => {
            clicked()
          }}
          style={{
            width: `${props.zoom * 2}px`,
            height: `${props.zoom * 2}px`,
            borderRadius: '50%',
            backgroundColor: 'blue',
          }}
        />
      ) : (
        <div
          onClick={() => {
            clicked()
          }}
          style={{
            position: 'relative',
            top: '-22px',
            left: '-20px',
            width: `${props.zoom * 6}px`,
            height: `${props.zoom * 6}px`,
            borderRadius: '50%',
            backgroundColor: 'blue',
          }}
        ></div>
      )}
    </>
  )
}
