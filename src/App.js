import React from "react";
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
  return (
    <Container fluid>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
      <Footer />
    </Container>
  );
}

export default App;
