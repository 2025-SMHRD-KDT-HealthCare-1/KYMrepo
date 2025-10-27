import React, { useRef, useState} from 'react'

let comScore = 0;
let userScore = 0;

const ExDiceGame = () => {

    // 1. 버튼 클릭 시 주사위 이미지 랜덤하게 변경 (둘 다)
    // 2. 주사위의 숫자를 비교 -> 더 큰 score값 +1
    // 3. score 값이 먼저 10에 도달한 결과를 출력
    // >> "USER 승리" or "COM 승리"

    const [ran1, setRan1] = useState(1);
    const [ran2, setRan2] = useState(1);

    const [user, setUser] = useState(0);
    const [com, setCom] = useState(0);

    const [result, setResult] = useState("")

    const startClick = () => {
        let comRan = parseInt(Math.random() * 6) +1
        let userRan = parseInt(Math.random() * 6) +1
        setRan1(comRan)
        setRan2(userRan)

        if(comRan > userRan){
            setCom(com + 1);
            comScore = com + 1;
        }
        else if (userRan > comRan){
            setUser(user + 1);
            userScore = user + 1;
        };

        if (comScore === 10){
            setResult("COM 승리")
        }
        else if (userScore === 10){
            setResult("USER 승리")
        };
    };

  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={startClick}>Start</button>

      <div >
        <img src={`./src/img/dice${ran1}.png`}></img>
        <h1>Com Score : {com}</h1>
      </div>
      <div >
        <img src={`./src/img/dice${ran2}.png`}></img>
        <h1>User Score : {user}</h1>
      </div>

      <h1>결과 : {result}</h1>
    </div>
  )
}

export default ExDiceGame