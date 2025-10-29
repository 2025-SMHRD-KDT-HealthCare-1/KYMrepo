import React from 'react'
import About from './About'
import {Link} from 'react-router-dom' 

const Home = () => {
  return (
    <div>
        <h1>Home Page입니다</h1>
        <a href='/about'>about</a>
        <br></br>
        {/* 리액트에서는 a태그보다 Link 컴포넌트를 사용하는 거를 권장한다. */}
        <Link to= "/login"><button>로그인</button></Link>
        <Link to= "/join"><button>회원가입</button></Link>
    </div>
  )
}

export default Home