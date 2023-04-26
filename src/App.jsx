import React, { useRef } from "react";

// Components
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Pages from "./Pages/Pages";

// Context
import WindowSizeProvider from "./context/WindowSizeContext";
import AboutMeContext from "./context/AboutMeContext";
import ExperiencesContext from "./context/ExperiencesContext";

// Styles
import "./scss/main.scss";

export default function App() {
  const aboutMeRef = useRef(null);
  const experiencesRef = useRef(null);

  return (
    <WindowSizeProvider>
      <AboutMeContext.Provider value={aboutMeRef}>
        <ExperiencesContext.Provider value={experiencesRef}>
          <div className="App">
            <Router>
              <Navbar />
              <Pages />
            </Router>
          </div>
        </ExperiencesContext.Provider>
      </AboutMeContext.Provider>
    </WindowSizeProvider>
  );
}
