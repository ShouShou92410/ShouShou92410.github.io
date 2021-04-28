import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function NavigationBar() {
  return (
    <Nav className="justify-content-center align-items-center">
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/about">
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/projects">
          Projects
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavigationBar;
