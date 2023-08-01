/*
 * @Author: ccj
 * @Date: 2023-07-18 16:22:13
 * @LastEditors: ccj
 * @LastEditTime: 2023-07-19 09:18:08
 * @Description: useDeferredValue 降低更新操作的优先级
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
