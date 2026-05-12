import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SpiderSolitaire from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SpiderSolitaire />
  </React.StrictMode>
);
