import React from "react";
import videoUrl from "../assets/videos/samplevideo.mp4";
import sgpUrl from "../assets/images/common/sgp.png";

export default function Component() {
  return (
    <>
      <h1 className="title">1. JSX</h1>

      <span className="logo"></span>

      <p>{true ? 1 : 0}</p>
      <p>{true && "NICE"}</p>

      <img src={sgpUrl} alt="" width="100" />

      <video width="300" height="180" controls>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </>
  );
}

// JSX 문법에서는 자바스크립트는 중괄호{}에 작성한다.
// 'return()' 안에 꼭 하나의 묶음으로 구조를 작성한다. <div>...</div> / <>...</> 등
// 컴포넌트의 분할법에 정답은 없다. 의미적 & 기능적 으로 나눌수 있다.
// 의미적 컴포넌트 분기는 초기 레이아웃 설계시에 사용 된다.
// 기능적 컴포넌트 분기는 재사용성에 초점을 맞춘다.
// 아주 작은 단위까지 나눌수 있지만 유지 보수와 협업을 모두 고려하면서 합의점을 찾는것이 베스트라고 생각함.
