import React from 'react'
import ColorContext from '../context/colorContext'
import { useState } from 'react'

const ColorProvider = ({children}) => {
    const [color,setColor] = useState("red");
    
  return (
    <ColorContext.Provider value = {{color, setColor}}>
        {children}
    </ColorContext.Provider>
  )
}

export default ColorProvider