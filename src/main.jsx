import React from "react";
import { createRoot } from "react-dom/client"; // import from react-dom/client
import ReactDOM from "react-dom/client";

import "./index.css"; // Stil dosyasını içe aktar

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
