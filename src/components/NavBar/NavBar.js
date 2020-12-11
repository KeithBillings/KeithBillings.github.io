import React from "react";

// Bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Navbar, Nav } from "react-bootstrap";

function NavBar({navState, setNavState, handleClick, handleClickBlog}) {
  return (
    /* Nav Bar */
    <Row>
      <Col>
        <Navbar bg="dark" variant="dark" expand="md" fixed="top">
          <Navbar.Brand onClick={handleClick} href="/">KB</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="mr-auto">
              <Nav.Link onClick={handleClick} href="/#about">About Me</Nav.Link>
              <Nav.Link onClick={handleClick} href="/#codingPortfolio">Coding Portfolio</Nav.Link>
              <Nav.Link onClick={handleClick} href="/#contact">Contact</Nav.Link>
              <Nav.Link onClick={handleClickBlog} href="/#blog" >Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
}

export default NavBar;
