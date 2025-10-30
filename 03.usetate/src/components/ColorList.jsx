import React, {useContext} from 'react'
import ColorContext from '../context/colorContext';

const ColorList = () => {
    const {setColor} = useContext(ColorContext);

    const ColorList = ["red","orange","yellow","green","blue"];

  return (
    <div>
        <h1>색상 변경하기</h1>
        <div style={{display: "flex"}}>
            {ColorList.map((item, index) =>(
             <div style={{
                width: "100px",
                height: "100px",
                backgroundColor: item,
                cursor: "pointer"
             }} 
             key={index}  
             onClick={()=>setColor(item)}
            ></div>
            ))}
        </div>
    </div>
  )
}

export default ColorList