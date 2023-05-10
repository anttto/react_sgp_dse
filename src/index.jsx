import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/index.css";
import "./assets/css/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import P_component from "./pages/P_component";
import P_state from "./pages/P_State";
import P_children from "./pages/P_children";
import P_hook from "./pages/P_hook";
import Sample from "./pages/Sample";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <P_component /> },
      { path: "/state", element: <P_state /> },
      { path: "/children", element: <P_children /> },
      { path: "/hook", element: <P_hook /> },
      { path: "/sample", element: <Sample /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  // </React.StrictMode>
);
