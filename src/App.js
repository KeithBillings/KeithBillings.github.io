import React, { useState, useEffect } from "react";

// Pages
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

// local
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Initializing the Animate on Scroll functionality
AOS.init();

function App() {
  const [navState, setNavState] = useState("");
  const [smallWindowTextShadow, setSmallWindowTextShadow] = useState("");

  const handleClickBlog = () => {
    setNavState("blog");
  };

  const handleClick = () => {
    setNavState("");
  };

  // Adding Shadow to JumboTron Text for Mobile
  const handleSmallWindowTextShadow = () => {
    if (window.innerWidth <= 375) {
      setSmallWindowTextShadow("0px 0px 5px white");
    } else setSmallWindowTextShadow("");
  };

  useEffect(() => {
    handleSmallWindowTextShadow();
  });
  // end of Adding Shadow to JumboTron Text for Mobile

  return (
    <Container fluid>
      <NavBar
        navState={navState}
        setNavState={setNavState}
        handleClickBlog={handleClickBlog}
        handleClick={handleClick}
      />
      <div>
        {navState === "blog" ? (
          <Blog smallWindowTextShadow={smallWindowTextShadow} />
        ) : (
          <Home smallWindowTextShadow={smallWindowTextShadow} />
        )}
      </div>
      <Footer />
    </Container>
  );
}

export default App;
