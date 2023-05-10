import React from "react";
import Component from "../components/Component";
import IsState from "../components/IsState";
import IsChildren from "../components/IsChildren";
import UseEffectSample from "../components/UseEffectSample";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home" id="wrapper">
      <Component />
      <IsState />
      <IsChildren />
      <UseEffectSample />
    </div>
  );
}
