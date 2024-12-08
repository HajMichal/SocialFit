import React from "react";
import ReactDOM from "react-dom/client";
import { TrpcProvider } from "./api/TrpcProvider";
import App from "./App";
import { BrowserRouter } from "react-router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TrpcProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TrpcProvider>
);
