import React from 'react'
import { useState, useRef} from 'react'

const Ex07 = () => {

    const [inputText, setInputText] = useState();
    const inputRef = useRef();
    const [comNum, setComNum] = useState();
    const [Result, setResult] = useState();
    const[ranNum, setRanNum] = useState(parseInt(Math.random()*50)+1)

        const btnClick = () =>{
            // 1. input 태그에 적은 값 가져오기
            // DOM : 태그 객체로 변환된 문서
            //let text = document.querySelector('input').value

            let text = parseInt(inputRef.current.value)
            setComNum(ranNum)
            console.log(ranNum)
            // 2. 가져온 값으로 inputText 값 바꿔주기
            setInputText(text)

            if(ranNum<text){
                setResult('더 작은 수입니다')
            }
            else if(ranNum>text){
                setResult('더 큰 수입니다')
            }
            else{
                setResult('정답입니다!')
            }
        }


  return (
    <div>
        <h1>1~50사이 랜덤수 맞추기</h1>
        <input ref = {inputRef}></input>
        <button onClick={btnClick}>추측</button>
        <p>Hint : {Result}</p>
    </div>

  )
}

export default Ex07

