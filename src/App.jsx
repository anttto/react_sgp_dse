import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import { LanguageContextProvider } from "./context/LanguageContext";

import Home from "./pages/Home";
import Sample from "./pages/Sample";

export default function App() {
  return (
    <LanguageContextProvider>
      <Nav />
      <div className="wrap">
        <Outlet />
      </div>
    </LanguageContextProvider>
  );
}
