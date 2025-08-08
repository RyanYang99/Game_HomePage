import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter 불러오기
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* App을 BrowserRouter로 감싸줍니다 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
