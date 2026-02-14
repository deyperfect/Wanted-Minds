import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { List } from 'react-bootstrap-icons';


export default function AppNavbar() {
  return (
    <Navbar expand="lg" sticky="top">
      <Container fluid className="container-lg">
        {/* 'as={Link}' allows the brand to act as a Router Link */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            className="brand-logo d-inline-block align-top"
            alt="Wanted Minds Logo"

          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
          <List className="list" /> 
        </Navbar.Toggle>

        
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* NavLink automatically adds an "active" class to the current page */}
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/" end>
              About
            </Nav.Link>

            <Nav.Link as={NavLink} to="/team" end>
              Our Team
            </Nav.Link>
            
            <Nav.Link as={NavLink} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}