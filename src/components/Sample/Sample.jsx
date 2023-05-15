import React from "react";
import { useLanguageContext } from "../../context/LanguageContext";
import { usePopupContext } from "../../context/PopupContext";
import EventBox from "./EventBox";

export default function Sample() {
  const { msgTxt } = useLanguageContext();
  const { openPopup, openYoutubePopup } = usePopupContext();

  return (
    <>
      <h1 className="title">5. Sample</h1>
      <div className="popup-samples">
        <span className="banner" onClick={() => {openPopup("popAlert", msgTxt[5])}}></span>
        <span className="youtube-thumb" onClick={() => {openYoutubePopup("popYoutube", 'DpcJP-wQWGI')}}>영상 썸네일</span>
      </div>
      <EventBox />
    </>
  );
}
