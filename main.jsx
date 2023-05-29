import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import Apps from "./Apps";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Apps/>
  </React.StrictMode>
);
