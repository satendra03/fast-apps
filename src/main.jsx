import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TypeProvider } from "./context/typeContext";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TypeProvider>
        <App />
        <Toaster />
      </TypeProvider>
    </BrowserRouter>
  </StrictMode>
);
