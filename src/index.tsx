import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/presentation/App";
import "./presentation/styling/loading.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.module.scss";
import "./presentation/styling/overrides.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
