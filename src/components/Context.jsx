import React from "react";
import context from "../assets/images/common/context.jpg";
import pd from "../assets/images/common/props_dr.jpg";

export default function Context() {
  return (
    <div>
      <h1 className="title">5. 전역 상태 관리 : useContext</h1>
      <p style={{width:"100%", maxWidth:"15rem"}}><img style={{width:"100%"}} src={pd}/>Props Drilling</p>
      <p style={{width:"100%", maxWidth:"50rem"}}><img style={{width:"100%"}} src={context}/>Context Api</p>
    </div>
  );
}
