import React from "react";

//공통 컴퍼넌트
function ParentComponent({ children }) {
  return (
    <div>
      <h3>공통내용</h3>
      {children}
    </div>
  );
}

//자식 컴포넌트 1
function Child1() {
  return (
    <div>
      <p>내용1</p>
    </div>
  );
}

//자식 컴포넌트 2
function Child2() {
  return (
    <div>
      <p>내용2</p>
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
      <h1 className="title">3. Children</h1>

      <ParentComponent>
        <Child1 />
      </ParentComponent>

      <p>------------------------</p>

      <ParentComponent>
        <Child2 />
      </ParentComponent>
    </>
  );
}
