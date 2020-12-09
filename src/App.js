import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

// local
import "./App.css";

// Initializing the Animate on Scroll functionality
AOS.init();

function App() {
  return (
    <Container fluid>
      {/* Nav Bar */}
      <Row>
        <Col>
          <Navbar bg="dark" variant="dark" expand="md" fixed="top">
            <Navbar.Brand href="/">KB</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="mr-auto">
                <Nav.Link href="/#about">About Me</Nav.Link>
                <Nav.Link href="/#codingPortfolio">Coding Portfolio</Nav.Link>
                <Nav.Link href="/#contact">Contact</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
      </Router>

      {/* Footer */}
      <footer className="openSans">
        <ul className="social">
          <li className="whiteText">External Links:</li>
          <li>
            <a href="http://www.github.com/KeithBillings">My Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/KeithBillings/">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.instagram.com/cowboykeithbop/">Instagram</a>
          </li>
        </ul>
      </footer>
    </Container>
  );
}

export default App;
