import React from "react";
import List from "./List";

export default function Props({ endPointNum }) {
  return (
    <>
      <p>-------------------------------------------------------------- props.1</p>
      <h2>Props</h2>
      <p>{endPointNum}</p>
      {/* <List totalNum={endPointNum} /> */}
    </>
  );
}
