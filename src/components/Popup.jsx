import React from "react";
import classNames from "classnames";

export default function Popup({ show, popupName, msg, onClose, reward }) {
  const popupClassName = classNames("popup", popupName, show); //클래스 명 merge
  return (
    <>
      {popupName === "popAlert" && (
        <>
          <div className={popupClassName}>
            <div className="cont">{msg}</div>
            <p>{reward}</p>
            <button type="button" className="btn-confirm" onClick={onClose} data-lang="Btn_Close">
              닫기
            </button>
          </div>
          <div className="dimmedBg"></div>
        </>
      )}

      {popupName === "popYoutube" && (
        <>
          <div className={popupClassName}>
            <div className="cont">{msg}</div>
            <button type="button" className="btn-confirm" onClick={onClose} data-lang="Btn_Close">
              닫기
            </button>
          </div>
          <div className="dimmedBg"></div>
        </>
      )}
    </>
  );
}
