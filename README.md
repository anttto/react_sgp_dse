# ✅ React 환경 세팅 & 기본 문법 소개 

⭐️ **DoSaEun** from **Team_WebDev_1** 

- React v18.2.0 
- css & scss 
- Babel : v7.21.0 
- Webpack v5

<br>

> ## 1. 기본 구조 

<img width="557" alt="image" src="https://user-images.githubusercontent.com/57241573/235106805-4ee65dcc-b0cb-4ab3-a879-423009f3d7c3.png">

### 2023-05-10 이미지화 추가

![리액트_프로젝트구조](https://github.com/anttto/react_sgp_dse/assets/57241573/dfea3021-62bc-4d26-b4bc-1d5e946fb36c)



> ## 2. JSX 문법

- JSX 문법에서는 자바스크립트는 중괄호{}에 작성한다.
- 'return()' 안에 꼭 하나의 묶음으로 구조를 작성한다.

```
<div>...</div> / <>...</> 등
```

```
import React from "react";
import videoUrl from "../assets/videos/samplevideo.mp4";
import sgpUrl from "../assets/images/common/sgp.png";

export default function Component() {
  return (
    <>
      <h1 className="title">1. JSX</h1> //클래스는 className 으로 표기함

      <span className="logo"></span>

      <p>{true ? 1 : 0}</p> //자바스크립트를 사용할 때는 { 중괄호 } 를 사용함
      <p>{true && "NICE"}</p>
      <p>{false && "NICE"}</p>

      <img src={sgpUrl} alt="" width="100" /> //이미지를 import 하고 그 변수명을 사용할 수 있음

      <video width="300" height="180" controls>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </>
  );
}
```

- 컴포넌트의 분할법에 정답은 없다. 의미적 & 기능적 으로 나눌수 있다.
- 의미적 컴포넌트 분기는 초기 레이아웃 설계시에 사용 된다.
- 기능적 컴포넌트 분기는 재사용성에 초점을 맞춘다.
- 아주 작은 단위까지 나눌수 있지만 유지 보수와 협업을 모두 고려하면서 합의점을 찾는것이 베스트라고 생각함.

<br><br>

> ## 3. Children

```
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
```

### View
![image](https://github.com/anttto/react_sgp_dse/assets/57241573/a532b62b-40ab-4af7-9942-bbee0c2698c5)

- children 을 props로 선언 후 내부에서 children을 받는다.
- children을 품고 있는 부모 컴포넌트(ParentComponent)로 공통적인 부분을 담당할 수 있다.
- 컴포넌트를 반복적으로 사용 하면서 내부의 일부분만 다른 내용을 보여줘야 할 때 사용함.

<br><br>

> ## 4. 상태관리 : useState

```
export default function IsState() {
  const [num, setNum] = useState(0);

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
    </>
  );
}
```

- 상태값.
- 초기값 영역에 실제로 받아오는 데이터를 넣고 DOM의 상호작용 시에 제어 하거나
- 내부 UI 변화를 상태값으로 제어할수 있다.
- 컴포넌트 내부에서 form 태그 등으로 생성 받은 데이터 상태값을 적용 하고, 해당 값을 서버로 전송할때도 활용 될수도 있다.
- 리액트의 핵심 api중 하나.

<br><br>

> ## 5. 생명주기(Life Cycle) : useEffect

![image](https://github.com/anttto/react_sgp_dse/assets/57241573/0523381f-fc13-4c03-91e9-c11b4213167b)


```
import React, { useState, useEffect } from "react";

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
      <p>클릭 횟수 : {count}</p>
      <button onClick={() => setCount(count + 1)}>버튼</button>
    </div>
  );
}
```

- 컴포넌트가 마운트 된다는것은 전체적으로 100%의 경우는 아니겠지만 - 쉽게 말해서 대부분 자신이 페이지에 노출될 때를 의미한다.
- 컴포넌트가 노출 되는 시점에만 요청하는 통신을 진행하거나, 필요한 데이터를 받아오고 아니면 갱신할 수도 있다.
- 단순하게 ui적인 스타트 모션을 넣을 수도 있을 것이다.
- useEffect에 사용되는 [] 디펜던시 영역은 useEffect 내부의 코드를 갱신 해주는 트리거를 지정해주는 기능이다.
- 어떠한 데이터가 변화될 때, 예를들어 [data] 라는 지정은 data의 상태 변화를 감지한 후 코드를 재 실행해준다.

<br><br>

> ## 6. 전역 상태 관리 : useContext

- 어느 컴포넌트 에서든 선언 후, 동일한 상태 값을 사용 (전역 관리 필요한 곳) - ex) 인증상태(로그인), 다크모드 기능 등
![image](https://github.com/anttto/react_sgp_dse/assets/57241573/be248dc7-37af-490a-84e2-d3cce86aac8e)

<br><br>

> ## 7. 그 외, 많이 사용하는 Hook API
 
- React Query(공식) : 데이터의 요청과 그 요청에 대한 캐쉬Key 등을 자동으로 관리하여 효율적인 앱의 데이터 흐름을 관리해준다.
- useReducer
- useMemo
  .
  .
