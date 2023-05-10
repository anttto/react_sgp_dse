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
          <Link to="/state">State(상태)</Link>
        </li>
        <li>
          <Link to="/children">Children(컴포넌트의 재사용 개념)</Link>
        </li>
        <li>
          <Link to="/hook">Hooks(React Hook API)</Link>
        </li>
        <li>
          <Link to="/sample">Sample(적용 사례)</Link>
        </li>
      </ul>
    </nav>
  );
}
