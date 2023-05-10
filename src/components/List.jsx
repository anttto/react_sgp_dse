import React from "react";

export default function List({ totalNum }) {
  return (
    <>
      <p>-------------------------------------------------------------- props.2</p>
      <ul>
        <li>무조건 2배 드려요 : {totalNum * 2}</li>
        <li>1개에 천원입니다 : {totalNum * 1000}</li>
      </ul>
    </>
  );
}
