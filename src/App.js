import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

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

  const handleClickBlog = () => {
    setNavState("blog");
  };

  const handleClick = () => {
    setNavState("")
  }

  return (
    <Container fluid>
      <NavBar navState={navState} setNavState={setNavState} handleClickBlog={handleClickBlog} handleClick={handleClick} />
      <div>{navState === "blog" ? <Blog /> : <Home />}</div>
      <Footer />
    </Container>
  );
}

export default App;
