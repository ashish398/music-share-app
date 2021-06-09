import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { Navbar, Nav } from "react-bootstrap";
import Pockets from "../../assets/Pockets_main_font.png";
import banner from "../../assets/homescreen_banner.png";

const Header = () => {
  return (
    <>
      <Navbar expand='lg' className={classes.header}>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
            <Nav.Link
              as={NavLink}
              to='/'
              activeClassName={classes.activelink}
              exact
              className={classes.navlink}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to='/search'
              className={classes.navlink}
              activeClassName={classes.activelink}
              exact
            >
              SEARCH
            </Nav.Link>
            <Navbar.Brand>
              <span className={classes.pockets}>
                <p>Pockets</p>{" "}
              </span>
            </Navbar.Brand>
            <Nav.Link
              as={NavLink}
              to='/about'
              className={classes.navlink}
              activeClassName={classes.activelink}
              exact
            >
              ABOUT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className={classes["main-image"]}>
        <img src={banner} alt='banner' />
      </div>
    </>
  );
};

export default Header;
