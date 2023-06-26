import React from "react";
import "./styles/styles.scss";
import App from "./App";
import { createRoot } from "react-dom/client";

// the below commented file added to project as:
// @ yarn add node-sass react-helmet react-router-dom @mdi/font materialze-css classnames
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
