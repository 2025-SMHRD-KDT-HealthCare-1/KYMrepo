import React from 'react'
import About from './About'
import {Link} from 'react-router-dom' 
import { useSearchParams } from 'react-router-dom'

//쿼리스트링 : 주소값에 데이터를 담아서 요청보내는 방법
//            주소값에 Key=Value 구조로 데이터를 담아서 요청을 보낸다!
//            & 기호를 통해 Key=Value 쌍을 구분할 수 있다!
const Home = () => {

  const [query, setQuery] = useSearchParams();

  let id = query.get('id')
  let pw = query.get('pw')
  let nick = query.get('nick')

  return (
    <div>
        <h1>Home Page입니다.</h1>
        <h1>{nick}님 환영합니다.</h1>
        {/* <a href='/about'>about</a> */}
        <br></br>
        {/* 리액트에서는 a태그보다 Link 컴포넌트를 사용하는 거를 권장한다. */}
        <Link to= "/login"><button>로그인</button></Link>
        <Link to= "/join"><button>회원가입</button></Link>
        <br></br>
        <Link to= "/about?num=2">about 이동 Link</Link>
    </div>
  )
}

export default Home