import React from 'react'
import pic from '../img/winter3.jpg'
import { useState } from 'react'

const Ex02 = () => {
    // useState의 초기값은 다양한 데이터 자료형이 가능
    const [likeEmoji, setLikeEmoji] = useState("♡")
    const [likeNum, setLickNum] = useState(0)
    // 빈 하트 클릭 시, => 채워진 하트로 변경
    // 빈 하트 클릭 시, => 숫자 0을 1로 변경
    // 채워진 하트 클릭 시 => 빈 하트로 변경
    // 채워진 하트 클릭 시 => 숫자 1을 0으로 변경
    const handleLike = () =>{
        // 클릭했을 때 비어있는 하트라면 (조건)
        if(likeEmoji == "♡"){
            setLikeEmoji("♥")
            setLickNum("1")
        }
        else if(likeEmoji == "♥"){
            setLikeEmoji("♡")
            setLickNum("0")
        }
    }

    // 밑에 건 따로 따로
    // const handleLike2 = () =>{
    //     // 클릭했을 때 비어있는 하트라면 (조건)
    //     if(likeNum == 0){
    //         setLickNum("1")
    //     }
    //     else if(likeNum == 1){
    //         setLickNum("0")
    //     }
    // }
  return (
    <div>
        {/* src폴더 내 접근 */}
        {/* import 이미지변수 from '경로' */}
        <img width="300px" src={pic}></img>
        <br></br>

        {/* 외부주소값 접근 */}
        <img width="300px" src='https://sungyesa.com/new/data/file/secret/988486029_UV9Hq6Zt_IMG_8053.jpeg'></img>
        <br></br>
        {/* public 폴더에 이미지가 있다면? 
           http://localhost:5173/img/winter4.jpg
           public폴더는 서버와 통신 중 => 이곳에 저장하는 것만으로도 고유한 주소값이 생김        
        */}

        <img width= "300px" src= '/img/winter4.jpg'></img>
        <br></br>
        <p>
            <span onClick={handleLike}>{likeEmoji}</span>
            <span >{" "} 좋아요 {likeNum}개</span>
            
            {/* 밑에 건 따로따로 */}
            {/* <span onClick={handleLike2}>{" "} 좋아요 {likeNum}개</span> */}
        </p>
    </div>
  )
}

export default Ex02