import React, { useRef } from "react";

// Context
import WindowSizeProvider from "./context/WindowSizeContext";
import AboutMeContext from "./context/AboutMeContext";
import ExperiencesContext from "./context/ExperiencesContext";
import ContactMeContext from "./context/ContactMeContext";

// Components
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Pages from "./Pages/Pages";
import Footer from "./components/Footer/Footer";

// Styles
import "./scss/main.scss";
import MobileNavMenu from "./components/MobileNavMenu/MobileNavMenu";

export default function App() {
  const aboutMeRef = useRef(null);
  const experiencesRef = useRef(null);
  const contactMeRef = useRef(null);

  return (
    <WindowSizeProvider>
      <AboutMeContext.Provider value={aboutMeRef}>
        <ExperiencesContext.Provider value={experiencesRef}>
          <ContactMeContext.Provider value={contactMeRef}>
            <div className="App">
              <Router>
                <Navbar />
                <MobileNavMenu />
                <Pages />
                <Footer />
              </Router>
            </div>
          </ContactMeContext.Provider>
        </ExperiencesContext.Provider>
      </AboutMeContext.Provider>
    </WindowSizeProvider>
  );
}
