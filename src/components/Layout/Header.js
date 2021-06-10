import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { Navbar, Nav } from "react-bootstrap";
import banner from "../../assets/homescreen_banner.png";
import Pockets from "../../assets/Pockets_main_font.png";
import HamBurgIcon from "../UI/HamBurgIcon";

const Header = () => {
  //<Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
  return (
    <>
      <Navbar className={classes.navbar} expand='lg'>
        <Navbar.Brand>
          <img src={Pockets} alt='pockets' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <HamBurgIcon />
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
            <Nav.Link
              className={classes.addSong}
              activeStyle={{ textDecoration: "underline" }}
              as={NavLink}
              to='/'
              exact
            >
              ADD SONG
            </Nav.Link>
            <Nav.Link
              className={classes.searchSong}
              activeStyle={{ textDecoration: "underline" }}
              as={NavLink}
              to='/search'
              exact
            >
              SEARCH SONG
            </Nav.Link>
            <Nav.Link
              className={classes.about}
              activeStyle={{ textDecoration: "underline" }}
              as={NavLink}
              to='/about'
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
