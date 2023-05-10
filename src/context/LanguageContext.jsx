import React, { createContext, useContext, useEffect, useState } from "react";

import { popupLang, setLanguage } from "../commonJs/language";

const LanguageContext = createContext();

export function LanguageContextProvider({ children }) {
  const [msgTxt, setMsgTxt] = useState([]);

  useEffect(() => {
    setLanguage();
    setMsgTxt(popupLang());
  }, []);

  return <LanguageContext.Provider value={{ msgTxt }}>{children}</LanguageContext.Provider>;
}

export function useLanguageContext() {
  return useContext(LanguageContext);
}
