import { useState } from "react";

export default function usePopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupName, setPopupName] = useState("");
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState("");

  const openPopup = (obj, msg) => {
    setPopupName(obj);
    setMsg(msg);
    setShow("show");
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return { show, isPopupOpen, popupName, msg, openPopup, closePopup };
}
