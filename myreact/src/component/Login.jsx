import React from 'react'
import {Link, useNavigate} from 'react-router-dom' 
import { useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Login = () => {

  // 사용자가 입력한 ID : smhrd, PW : 123
  // 일때만 Home으로 이동
  // 둘 중 하나라도 다르다면 '잘못 입력했습니다' 알림 출력
  const nav = useNavigate();
  const [inputId, setId] = useState('')
  const [inputPw, setInputPw] = useState('')

  const [query, setQuery] = useSearchParams();

  console.log(query.get('id'))
  console.log(query.get('pw'))
  console.log(query.get('nick'))

  let id = query.get('id')
  let pw = query.get('pw')
  let nick = query.get('nick')

  const btnJoin=()=>{
    inputPw
    inputId

    if(inputId==id && inputPw==pw){
      // 홈페이지로 이동
      nav(`/?nick=${nick}`)
    }
    else{
      alert("잘못 입력했습니다")
    }
  }
  return (
    <div>
        <h1>즐거운 React수업</h1>
        <p>ID:<input onChange={(e)=>setId(e.target.value)}></input></p>
        <p>PW:<input onChange={(e)=>setInputPw(e.target.value)}></input><button onClick={btnJoin}>로그인</button></p>
        
    </div>
  )
}

export default Login