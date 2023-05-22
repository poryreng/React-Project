import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" style={{ padding: '15px' }}>
      <Navbar.Brand href="/">University App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/degree">Degrees</Nav.Link>
          <Nav.Link href="/cohort">Cohorts</Nav.Link>
          <Nav.Link href="/module">Modules</Nav.Link>
          <Nav.Link href="/create">Create</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
