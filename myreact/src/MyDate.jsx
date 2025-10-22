import React from 'react'

const MyDate = () => {

  // 현재 시간 가져오기
  let day = new Date();
  console.log(day)

  let myYear = day.getFullYear();
  let myMonth = day.getMonth() + 1;
  let MyDay = day.getDate();

  console.log(myYear, myMonth, MyDay)
  let name = prompt("이름을 입력해주세요")
  let text = '';
  

  if(3<=myMonth && myMonth<=5){
     text = '봄';
  }
  else if(6<=myMonth && myMonth<=8){
     text = '여름';
  }
  else if(9<=myMonth && myMonth<=11){
     text = '가을';
  }
  else{
     text = '겨울';
  }
  
  return (
    <div>
    <h1>{myYear}년 {myMonth}월 {MyDay}일</h1>
    <hr></hr>
    <p>{name}님 지금은 {text}계절입니다. 좋은 하루 보내세요!</p>
    </div>
  )
}

export default MyDate