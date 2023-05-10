import React from "react";
import classNames from "classnames";

export default function Popup({ show, popupName, msg, onClose }) {
  const popupClassName = classNames("popup", popupName, show);
  return (
    <>
      {popupName === "popAlert" && (
        <div className={popupClassName}>
          <div className="cont">{msg}</div>
          <button type="button" className="btn-confirm" onClick={onClose} data-lang="Btn_Close">
            닫기
          </button>
        </div>
      )}

      {popupName === "popYoutube" && (
        <div className={popupClassName}>
          <div className="cont">{msg}</div>
          <button type="button" className="btn-confirm" onClick={onClose} data-lang="Btn_Close">
            닫기
          </button>
        </div>
      )}
    </>
  );
}
