import React from "react";
import { createRoot } from "react-dom/client";

// Components
import App from "./App";

// Styles
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
