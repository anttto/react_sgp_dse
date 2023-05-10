import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/index.css";
import "./assets/css/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LanguageContextProvider } from "./context/LanguageContext";
import { PopupContextProvider } from "./context/PopupContext";

import P_component from "./pages/P_component";
import P_state from "./pages/P_State";
import P_children from "./pages/P_children";
import P_sample from "./pages/P_sample";
import P_lifeCycle from "./pages/P_lifecycle";
import P_context from "./pages/P_context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <P_component /> },
      { path: "/children", element: <P_children /> },
      { path: "/state", element: <P_state /> },
      { path: "/lifecycle", element: <P_lifeCycle /> },
      { path: "/context", element: <P_context /> },
      { path: "/sample", element: <P_sample /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageContextProvider>{/* 언어(다국어) 전역 설정 */}
      <PopupContextProvider>{/* 팝업 전역 설정 */}
        <RouterProvider router={router}></RouterProvider>{/* 라우터 설정 */}
      </PopupContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);
