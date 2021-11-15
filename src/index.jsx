import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ons from "onsenui";
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
import "./styles/style.css";
import "./styles/markdown.css";

ons.ready(function () {
  ons.platform.select("android");
  var mountNode = document.getElementById("app");
  ReactDOM.render(<App />, mountNode);
});
