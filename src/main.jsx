import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ToasterProvider from "./providers/ToasterProvider";
import App from "./App.jsx";
import "@/Assets/css/style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToasterProvider />
  </StrictMode>
);
