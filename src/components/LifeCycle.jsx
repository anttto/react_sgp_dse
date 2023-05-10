import React, { useState, useEffect } from "react";
import lifecycle from "../assets/images/common/life_cycle.jpg";

export default function lifeCycle() {
  const [count, setCount] = useState(0);

  // 컴포넌트가 마운트될 때 실행되는 useEffect
  useEffect(() => {
    console.log("컴포넌트 마운트!");
  }, []);

  // count가 변경될 때마다 실행되는 useEffect
  useEffect(() => {
    console.log(`컴포넌트 업데이트! : ${count}`);
  }, [count]);

  return (
    <div>
      <h1 className="title">4. 생명주기(Life Cycle) : useEffect</h1>
      
      <p style={{width:"100%", maxWidth:"50rem"}}><img style={{width:"100%"}} src={lifecycle}/></p>
      <p style={{fontSize:"3rem"}}>👇👇👇</p>
      <h2>useEffect Hook 로 해결!!</h2>
      <p>클릭 횟수 : {count}</p>
      <button onClick={() => setCount(count + 1)}>버튼</button>
    </div>
  );
}

// 컴포넌트가 마운트 된다는것은 전체적으로 100%의 경우는 아니겠지만 - 쉽게 말해서 대부분 자신이 페이지에 노출될 때를 의미한다.
// 컴포넌트가 노출 되는 시점에만 요청하는 통신을 진행하거나, 필요한 데이터를 받아오고 아니면 갱신할 수도 있다.
// 단순하게 ui적인 스타트 모션을 넣을 수도 있을 것이다.

// useEffect에 사용되는 [] 디펜던시 영역은 useEffect 내부의 코드를 갱신 해주는 트리거를 지정해주는 기능이다.
// 어떠한 데이터가 변화될 때, 예를들어 [data] 라는 지정은 data의 상태 변화를 감지한 후 코드를 재 실행해준다.
