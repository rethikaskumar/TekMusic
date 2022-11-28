import { Nav, Navbar} from 'react-bootstrap';
import '../shows.css';
import { Link } from "react-router-dom";

export default function Navbard(){
    return(
        <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" className='navd' fixed='top' >
            <Nav className='fonttm'><Link to="/" className="tm" >Tek Music</Link></Nav>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav " className='tognav' />
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

