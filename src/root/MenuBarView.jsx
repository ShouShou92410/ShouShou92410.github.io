import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

function MenuBarView({ currentUser, handleSignOut, handleSignInModalOpen }) {
  return (
    <div className="sticky-nav">
      <NavBar bg="dark" variant="dark">
        <NavBar.Brand as={Link} to="/">
          Home
        </NavBar.Brand>
        <NavBar.Collapse className="justify-content-end">
          <Nav>
            <Row>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/quiz">
                Quiz
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              {currentUser ? (
                <>
                  <Nav.Link as={Link} to="/management">
                    Management
                  </Nav.Link>
                  <Button variant="secondary" size="sm" className="m-1" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <Button
                  variant="secondary"
                  size="sm"
                  className="m-1"
                  onClick={handleSignInModalOpen}>
                  Sign In
                </Button>
              )}
            </Row>
          </Nav>
        </NavBar.Collapse>
      </NavBar>
    </div>
  );
}

export default MenuBarView;
