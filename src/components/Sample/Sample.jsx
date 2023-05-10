import React from "react";
import { useLanguageContext } from "../../context/LanguageContext";
import { usePopupContext } from "../../context/PopupContext";

import EventBox from "./EventBox";

export default function Sample() {
  const { msgTxt } = useLanguageContext();
  const { openPopup } = usePopupContext();

  return (
    <>
      <h1 className="title">5. Sample</h1>
      <span className="banner" onClick={() => {openPopup("popAlert", msgTxt[5])}}></span>
      <EventBox />
    </>
  );
}
