import React, { useRef, useState } from 'react'

const Ex09 = () => {
    // 1. input 태그에 적은 내용이 계획추가 버튼 클릭 시 배열에 저장(state)
    // 2. 저장된 배열을 map 함수를 통해서 ul에 출력
    // 3. li에 달려있는 삭제버튼 클릭 시 filter 함수를 사용해 해당 요소만 삭제 후 새롭게 배열 생성/저장

    const [state, setState] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const btnClick = () => {
        setState([...state, inputValue]);
        setInputValue("");
    }
    
    const removeState = (deleteIndex) => {
        const updateState = state.filter((item, index) => index !== deleteIndex);
        setState(updateState);
    }

  return (
    <div>
        <h1>2025 올해는 꼭!! 할 수 있다!</h1>
        {/* controlled input으로 input 태그 제어(useState 이용한 input 제어) */}
        <input onChange={(event) => setInputValue(event.target.value)} value={inputValue} type='text'/>
        <button onClick={btnClick}>계획 추가</button>

        <h1> ToDoList</h1>
        <ul>
            {/* 이곳에 todolist가 li의 형태로 들어간다. */}
            {state.map((item, index) => <li key={index}>{item}<button onClick={() => removeState(index)}>삭제</button></li>)}
            
        </ul>
    </div>
  )
}

export default Ex09