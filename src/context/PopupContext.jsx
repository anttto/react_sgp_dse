import React, { createContext, useContext, useEffect, useState } from "react";

const PopupContext = createContext();

export function PopupContextProvider({ children }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false); //팝업 오픈 여부
  const [popupName, setPopupName] = useState(""); //팝업 종류
  const [msg, setMsg] = useState(""); //팝업 메시지 내용
  const [reward, setReward] = useState(""); //보상 아이템
  const [videoId, setVideoId] = useState(""); //비디오 아이디
  const [show, setShow] = useState(""); //팝업 show 클래스 추가

  const openPopup = (obj, msg, rewardId) => {
    setPopupName(obj);
    setMsg(msg);
    setShow("show");
    setIsPopupOpen(true);
    setReward(rewardId);
    document.body.classList.add("dimmed");
  };

  const openYoutubePopup = (obj, videoID) => {
    setPopupName(obj);
    setVideoId(videoID);
    setShow("show");
    setIsPopupOpen(true);
    document.body.classList.add("dimmed");
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.classList.remove("dimmed");
  };

  return <PopupContext.Provider value={{ show, isPopupOpen, popupName, msg, reward, openPopup, openYoutubePopup, closePopup, videoId}}>{children}</PopupContext.Provider>;
}

export function usePopupContext() {
  return useContext(PopupContext);
}
