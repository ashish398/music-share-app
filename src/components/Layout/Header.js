import React from "react";
import { NavLink } from "react-router-dom";
//import classes from "./Header.module.css";
import { Navbar,Nav } from 'react-bootstrap';

const Header = () => {
  //<Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand >Pockets</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={NavLink} to='/' exact>
              Add Song
            </Nav.Link>
            <Nav.Link as={NavLink} to='/search' exact>
              Search Song
            </Nav.Link>
            <Nav.Link as={NavLink} to='/about' exact>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
