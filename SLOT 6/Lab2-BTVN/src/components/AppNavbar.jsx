import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { navLinks } from '../data/pizzaData';

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
  </svg>
);

const AppNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="md" sticky="top" className="app-navbar">
    <Container>
      <Navbar.Brand href="#home" className="brand">
        Pizza House
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-nav" />
      <Navbar.Collapse id="main-nav">
        <Nav className="me-auto">
          {navLinks.map(({ label, href }, index) => (
            <Nav.Link key={href} href={href} active={index === 0}>
              {label}
            </Nav.Link>
          ))}
        </Nav>
        <Form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
          <Form.Control
            type="search"
            placeholder="Search"
            size="sm"
            className="rounded-0 rounded-start"
            aria-label="Search"
          />
          <Button type="submit" variant="danger" size="sm" className="rounded-0 rounded-end">
            <SearchIcon />
          </Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default AppNavbar;
