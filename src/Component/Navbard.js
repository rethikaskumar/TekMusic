import { Nav, Navbar } from 'react-bootstrap';
import '../shows.css';
import { Link } from "react-router-dom";

export default function Navbard() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="navd"
        fixed="top"
      >
        <Nav className="fonttm">
          <Link to="/" className="tm">
            Tek Music
          </Link>
        </Nav>

        {/* Uncomment below if you want toggle menu */}
        {/*
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="tognav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/Shows" className="fontnav">
              Shows
            </Nav.Link>
            <Nav.Link as={Link} to="/Achievements" className="fontnav">
              Achievements
            </Nav.Link>
            <Nav.Link as={Link} to="/Members" className="fontnav">
              Members
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        */}
      </Navbar>
    </div>
  );
}
