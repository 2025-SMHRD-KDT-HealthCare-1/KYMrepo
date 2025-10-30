import React from 'react'
import {Link, useNavigate} from 'react-router-dom' 
//useNavigate : 주소값을 바꿔서 다른 컴포넌트를 띄울 수 있는 기능
import { useRef, useState } from 'react'

const Join = () => {
  //const inputIdRef = useRef();

  // nav : 주소값을 바꿀 수 있는 변수로 사용 가능
  const nav = useNavigate();
  const [inputPw, setInputPw] = useState('')
  const [inputNick, setInputNick] = useState('')
  const [inputId, setId] = useState('')


  // ID, PW, NICK 값을 전부 입력했을 때만 페이지 이동하고 싶어요!
  const btnJoin=()=>{
    // 사용자가 입력한 ID, PW, NICK 값을 가져와주세요!
    //inputIdRef.current.value
    inputPw
    inputNick
    inputId

    if(inputId!='' && inputPw!='' && inputNick!=''){
      // Login 페이지로 이동
      nav(`/login?id=${inputId}&pw=${inputPw}&nick=${inputNick}`)
    }
    else{
      alert("빠진 값이 있습니다")
    }
  }
  return (
    <div>
        <h1>Join</h1>
        <h1>즐거운 React수업</h1>
        <h1>회원가입 페이지 입니다</h1>
        {/* e : 이벤트 객체
          --> 이벤트에 따른 모든 정보가 담겨있다(어떤 태그로 발생 됐는지, 
              어떤 이벤트로 발생됐는지)
          e.target : 이벤트를 발생시킨 주체(태그)
        */}
        {/* <p>ID:<input ref={inputIdRef}></input></p> */}
        <p>ID:<input onChange={(e)=>setId(e.target.value)}></input></p>
        <p>PW:<input onChange={(e)=>setInputPw(e.target.value)}></input></p>
        <p>NICK:<input onChange={(e)=>setInputNick(e.target.value)}></input></p>
        {/* <Link to= "/about?num=2">about 이동 Link</Link> */}
        {/* <Link to= "/login"><button >JOIN</button></Link> */}
        <button onClick={btnJoin}>Join</button>
        <button>초기화</button>
    </div>
  )
}

export default Join