import React from 'react'
import pic from '../img/winter3.jpg'
import { useState } from 'react'

const Ex08 = () => {
    const[mySrc,setSrc] = useState('./src/img/DP.jpg')
    const[myNum,setMyNum] = useState(0)
    let imgArray = ['./src/img/DP.jpg','./src/img/PT.png','./src/img/GOD.jpg']

    const chImg = () =>{
        if(myNum==2){
            setMyNum(0)
        }
        else{
            setMyNum(myNum+1)
        }
    }

    const chImg2 = () =>{
        
        if(myNum==0){
            setMyNum(2)
        }
        else{
            setMyNum(myNum-1)
        }
    }
  return (
    <div>
        <img src={imgArray[myNum]}></img>
        <button onClick={chImg2}>이전</button>
        <button onClick={chImg}>다음</button>
        <p>{myNum}</p>
    </div>
  )
}

export default Ex08