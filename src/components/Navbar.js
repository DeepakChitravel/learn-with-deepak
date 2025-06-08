import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar as BSNavbar } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BSNavbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <BSNavbar.Brand as={Link} to="/">Learn With Deepak</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/html">HTML</Nav.Link>
            <Nav.Link as={Link} to="/css">CSS</Nav.Link>
            <Nav.Link as={Link} to="/course">Course</Nav.Link>
            <Nav.Link as={Link} to="/fundamentals">Fundamentals of Computer</Nav.Link>
            <Nav.Link as={Link} to="/msword">MS Office</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
