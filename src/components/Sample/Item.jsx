import React from "react";
import { useLanguageContext } from "../../context/LanguageContext";
import { usePopupContext } from "../../context/PopupContext";

export default function Item({ cont, reward }) {
  const { msgTxt } = useLanguageContext(); //다국어 컨텍스트 호출
  const { openPopup } = usePopupContext(); //팝업 컨텍스트 호출

  return (
    <li>
      <p>{cont.step}</p>
      <p>{`x ${cont.num}`}</p>
      <button
        onClick={() => {
          openPopup("popAlert", msgTxt[1], cont.rewardId);
        }}
      >
        받기
      </button>
    </li>
  );
}
