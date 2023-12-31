import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./assets/styles/heliotrope.css";
import "./assets/styles/styles.css";
import "./assets/styles/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
