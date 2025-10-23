import React from 'react'

const Member = ({name, member}) => {
    let boxStyle={
        backgroundcolor : 'whitesmoke',
        border : '1px solid black',
        padding : '30px',
        borderRadius : '30px',
        textAligh : 'center',
        marginTop : '10px',
        width : '500px'
        //color : 'white'
    }
  return (
    <div style ={boxStyle}>
        <h1>{name} {member}</h1>
    </div>
  )
}

export default Member