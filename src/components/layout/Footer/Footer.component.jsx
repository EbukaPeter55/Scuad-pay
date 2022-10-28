import React from "react";
import './Footer.styles.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import nigeria from '../../../assets/images/nigeria.png';

const Footer = () =>{

    return (
        <div>
        <hr className="footer_line"></hr>
        <Navbar bg="white" expand="lg">
        <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Nav className='nav_content'>
          <Nav.Link className='archware-nav-title' href="#">Products</Nav.Link>
          <Nav.Link className='archware-nav-title' href="#">Pricing</Nav.Link>
          <Nav.Link className='archware-nav-title' href="#">Support</Nav.Link>
          <Nav.Link className='archware-nav-title' href="#">Documentation</Nav.Link>
          <Nav.Link className='archware-nav-title' href="#">Login</Nav.Link>
          <Nav.Link className='archware-nav-title' href="#">Create Account</Nav.Link>

          <NavDropdown className='archware-nav-title' title="Ghana" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">
                <img className='img-fluid navDrop_logo' src={nigeria} alt="nigeria logo"/> Nigeria
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Senegal
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
      </div>
    )
}

export default Footer;