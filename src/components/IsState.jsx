import React, { useState } from "react";
import Props from "./Props";

export default function IsState() {
  const [num, setNum] = useState(0);
  // useState 상태값을 제어하는 Hook
  // 현재 0으로 되어있는 초기값 영역에, 실제로 받아오는 데이터를 넣고 DOM의 상호작용 시에 제어 하거나
  // 컴포넌트 내부에서 form 태그 등으로 생성 받은 데이터 상태값을 설정하고, 그 데이터를 서버로 전송할때도 활용 될수도 있다.
  // 리액트의 핵심 hook api중 하나.

  const addCount = () => {
    setNum((prev) => prev + 1); //상태 갱신
  };

  const handleChange = (e) => {
    let value = e.target.value;
    value = Number(value);
    setNum(value); //상태 갱신
  };

  const handleSubmit = (e) => {
    e.preventDefault;
    //데이터 통신 로직//
  };

  return (
    <>
      <h1 className="title">3. useState</h1>
      <h3>{`현재 상태(값): ${num}`}</h3>
      <button type="button" onClick={addCount}>
        증가
      </button>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="number" onChange={handleChange} />
        <button type="button">전송</button>
      </form>

      {/* <Props endPointNum={num} /> */}
    </>
  );
}
