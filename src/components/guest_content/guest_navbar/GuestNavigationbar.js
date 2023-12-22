import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { guestNavigationSettings } from '../../../Navigation';

export default function GuestNavigationbar() {
  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container>
        {/* Logo and Home link */}
        <LinkContainer to="/">
          <Navbar.Brand>
            {/* Add your logo or icon here */}
            <img
              src="\vector-justice-lawyer-logo-and-symbols-template-icons-app.jpg" // Update with the path to your logo
              alt="Logo"
              height="30"
              className="d-inline-block align-top"
            />
            {' EASY-LEGAL'}
          </Navbar.Brand>
        </LinkContainer>

        {/* Navbar toggle button */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Navbar content when collapsed */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* Navigation links */}
            <LinkContainer to="/aboutus">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>

            {/* Dropdown menu */}
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <LinkContainer to="/action/3.1">
                <NavDropdown.Item>Action</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/action/3.2">
                <NavDropdown.Item>Another action</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/action/3.3">
                <NavDropdown.Item>Something</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/action/3.4">
                <NavDropdown.Item>Separated link</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>

          {/* Right-aligned links */}
          <Nav>
            {
              guestNavigationSettings.map((setting, index) => (
                <LinkContainer key={index}  to={setting.path}>
                  <Nav.Link>{setting.title}</Nav.Link>
                </LinkContainer>
              ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}