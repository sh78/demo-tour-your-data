import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function HeaderBar() {
  return (
    <Navbar
      as="header"
      collapseOnSelect
      expand="lg"
      sticky="top"
      bg="dark"
      variant="dark"
    >
      <Container fluid="lg">
        <Navbar.Brand href="#home" as="header">
          TourYourData<sup>&reg;</sup>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav className="mr-right">
            <Nav.Link href="sign-up">Sign Up</Nav.Link>
            <Nav.Link href="log-in">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderBar;
