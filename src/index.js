import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { robot_list } from "./components/robots";
import App from "./components/App";
import Add from "./components/Add";

ReactDOM.render(
  <div>
    <App robots={robot_list} />
  </div>,
  document.getElementById("root")
);
