import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Menu } from "lucide-react";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" sticky="top">
      <Container fluid className="container-lg">
        {/* 'as={Link}' allows the brand to act as a Router Link */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={`${import.meta.env.BASE_URL}images/logo.webp`}
            className="brand-logo d-inline-block align-top"
            alt="Wanted Minds Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        >
          <span>
            <Menu className="list" />
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {/* NavLink automatically adds an "active" class to the current page */}
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about" end>
              About
            </Nav.Link>

            <Nav.Link as={NavLink} to="/services" end>
              Services
            </Nav.Link>

          </Nav>
          <Link to="/file" className="btn btn-outline-light ms-lg-3">
            Open a Case
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;