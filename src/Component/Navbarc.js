import { Nav, Navbar } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import '../index.css';
import { Link } from "react-router-dom";

export default function Navbarc() {
  const [header, setHeader] = useState("navd"); // default at top

  const listenScrollEvent = () => {
    if (window.scrollY > 10) {
      setHeader("navc"); // scrolled style
    } else {
      setHeader("navd"); // top style
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent); // cleanup
    };
  }, []); // run once

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
        className={header}
      >
        <Nav className="fonttm">
          <Link to="/" className="tm">
            Tek Music
          </Link>
        </Nav>

        {/* If you want togglable nav, uncomment this */}
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
