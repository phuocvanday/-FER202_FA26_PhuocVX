import { Link, NavLink } from 'react-router-dom';
import BsNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Navbar = () => (
  <BsNavbar bg="dark" data-bs-theme="dark" expand="md">
    <Container>
      <BsNavbar.Brand as={Link} to="/">
        Lab5
      </BsNavbar.Brand>
      <BsNavbar.Toggle aria-controls="main-nav" />
      <BsNavbar.Collapse id="main-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/" end>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products">
            Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/new">
            New
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </BsNavbar.Collapse>
    </Container>
  </BsNavbar>
);

export default Navbar;
