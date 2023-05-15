import React from "react";
import classNames from "classnames";

export default function Popup({ show, popupName, msg, onClose, reward, videoId }) {
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
            <div className="frame">
              
              <iframe src={`https://www.youtube.com/embed/${videoId}?controls=1`} frameborder="0" allow="autoplay; encrypted-media;" allowfullscreen></iframe></div>

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
