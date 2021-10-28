import React from "react";
import ReactDOM from "react-dom";
import Context from "./Context.js/Context";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Context>
    <App />
  </Context>,
  document.getElementById("root")
);
