import React from "react";

//공통 컴퍼넌트
function ParentComponent({ children }) {
  return (
    <div style={{padding:"3rem", border:"1px solid #f00", margin:"1rem"}}>
      <h3>웹개발1팀</h3>
      {children}
    </div>
  );
}

//자식 컴포넌트 1
function Child1() {
  return (
    <div>
      <p>최만억</p>
    </div>
  );
}

//자식 컴포넌트 2
function Child2() {
  return (
    <div>
      <p>김성민</p>
    </div>
  );
}

// children 을 props로 선언 후 내부에서 children을 받는다.
// children을 품고 있는 부모 컴포넌트(ParentComponent)로 공통적인 부분을 담당할 수 있다.
// 컴포넌트를 반복적으로 사용 하면서 내부의 일부분만 다른 내용을 보여줘야 할 때 사용함.
// 예시는 아래 코드

export default function Children() {
  return (
    <>
      <h1 className="title">2. Children</h1>

      <ParentComponent>
        <Child1 />
      </ParentComponent>

      <ParentComponent>
        <Child2 />
      </ParentComponent>

    </>
  );
}
