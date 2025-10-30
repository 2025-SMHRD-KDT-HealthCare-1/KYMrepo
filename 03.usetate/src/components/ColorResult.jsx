import React from 'react'
import { useContext } from 'react'
import ColorContext from '../context/colorContext'
const ColorResult = () => {
    const{color} = useContext(ColorContext);

  return (
    <div>
        <div style={{
            width: "100px",
            height: "100px",
            backgroundColor: color,
        }}></div>
    </div>
  )
}

export default ColorResult