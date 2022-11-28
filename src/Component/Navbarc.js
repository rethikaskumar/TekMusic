import { Nav, Navbar} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import '../index.css';
import { Link } from "react-router-dom";

export default function Navbarc(){

    const [header, setHeader] = useState("navc")
    
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setHeader("navc") : setHeader("navd")
    }

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
      });
      
    return(
        <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed='top' className={header}>
            <Nav className='fonttm'><Link to="/" className="tm" >Tek Music</Link></Nav>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav " className='tognav'/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link><Link to="/Shows" className='fontnav'>Shows</Link></Nav.Link>
                    <Nav.Link><Link to="/Achievements" className='fontnav'>Achievements</Link></Nav.Link> 
                    <Nav.Link><Link to="/Shows" className='fontnav'>Members</Link></Nav.Link> 
                </Nav>
            </Navbar.Collapse> */}
        </Navbar>
        </div>


    )
}

