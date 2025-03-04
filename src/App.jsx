import React, { useRef } from "react";

// Context
import WindowSizeProvider from "./context/WindowSizeContext";

// Components
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Pages from "./Pages/Pages";
import Footer from "./components/Footer/Footer";

// Styles
import "./scss/main.scss";
import MobileNavMenu from "./components/MobileNavMenu/MobileNavMenu";

export default function App() {
  return (
    <WindowSizeProvider>
      <div className="App">
        <Router>
          <Navbar />
          <MobileNavMenu />
          <Pages />
          <Footer />
        </Router>
      </div>
    </WindowSizeProvider>
  );
}
