import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Jsx(문법)</Link>
        </li>
        <li>
          <Link to="/children">Children(컴포넌트의 재사용 개념)</Link>
        </li>
        <br/>
        <li>
          <Link to="/state">상태 관리(Props) : useState</Link>
        </li>
        <li>
          <Link to="/lifecycle">생명주기(Life Cycle) : useEffect</Link>
        </li>
        <li>
          <Link to="/context">전역 상태 관리 : useContext</Link>
        </li>
        <br/>
        <li>
          <Link to="/sample">Sample(적용 사례)</Link>
        </li>
      </ul>
    </nav>
  );
}
