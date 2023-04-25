import React from "react";

// Components
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Pages from "./Pages/Pages";

// Context
import WindowSizeProvider from "./context/WindowSizeContext";

// Styles
import "./scss/main.scss";

export default function App() {
  return (
    <WindowSizeProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Pages />
        </Router>
      </div>
    </WindowSizeProvider>
  );
}
