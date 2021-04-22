import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function NavigationBar() {
  const [show, setShow] = useState(false);
  const handleToggleClick = () => setShow(!show);
  const handleLinkClick = () => setShow(false);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className="navigation" expanded={show}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleLinkClick}>
          Home
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleToggleClick} />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/about" onClick={handleLinkClick}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/project" onClick={handleLinkClick}>
              Project
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
