import React from 'react'
import { useSearchParams } from 'react-router-dom'

// useSerachParams : 주소값에 있는 쿼리스트링 데이터를 꺼내 사용할 수 있는 기능

const About = () => {

  const [query, setQuery] = useSearchParams();
  //query : 쿼리스트링으로 보낸 데이터
  // .get('num')
  console.log(query.get('num'))
  return (
    <div>
        <h1>About N번째 Page입니다</h1>
    </div>
  )
}

export default About