import React from "react";

// Bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    /* Nav Bar */
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
              {/* <Nav.Link href="/blog">Blog</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
}

export default NavBar;
