import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoStore from "./TodoStore.js";

ReactDOM.render(
  <React.StrictMode>
    <TodoStore />
  </React.StrictMode>,
  document.getElementById("root")
);
