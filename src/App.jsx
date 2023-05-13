import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Popup from "./components/Popup";
import { usePopupContext } from "./context/PopupContext";

export default function App() {
  const { show, isPopupOpen, popupName, msg, reward, openPopup, closePopup } = usePopupContext(); //팝업 컨텍스트 호출
  return (
    <div id="wrapper">
      <Nav />
      <Outlet />
      {isPopupOpen && <Popup show={show} reward={reward} popupName={popupName} msg={msg} onClose={closePopup} />}
    </div>
  );
}
