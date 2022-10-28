import React from 'react';
import './NavBar.styles.css';

import { Link } from 'react-router-dom';

// import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () =>{

    return (
      <div>

        <nav className="navbar navbar-expand-lg navbar-light mask-custom shadow-0" id="navMain">
          <div className="container-fluid">
          
            <button className="navbar-toggler hamburger-icon hamburger-mobile" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation" >
                <i className="fas fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse right-nav" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto nav-links-a">
                    <li className="nav-item px-3">
                        <Link to="#" className="nav-link archware-nav-title" >Products</Link>
                    </li>

                    <li className="nav-item px-3">
                        <Link to="#" className="nav-link archware-nav-title">Pricing</Link>
                    </li>

                    <li className="nav-item px-3">
                        <Link to="#" className="nav-link archware-nav-title">Support</Link>
                    </li>

                    <li className="nav-item px-3">
                        <Link to="#" className="nav-link archware-nav-title">Documentation</Link>
                    </li>
                  
                    <li className="nav-item px-3">
                        <Link to="#" className="nav-link archware-nav-title">Login</Link>
                    </li>

                    <li className="nav-item px-3">
                        <Link to="#" className="nav-link archware-nav-title">Create Account</Link>
                    </li>

                    {/* <li className="button-wrapper">
                        <a>
                            <button type="button" className="buy-button">
                                Get In Touch
                            </button>
                        </a>
                    </li> */}
                </ul>

            </div>
        </div>
    </nav>
    <hr className="nav_line"></hr>
      </div>

    )
}

export default NavBar;