import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { Navbar, Nav } from "react-bootstrap";
import Pockets from "../../assets/Pockets_main_font.png";
import HamBurgIcon from "../UI/HamBurgIcon";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleHandler = () => {
    setExpanded(expanded ? false : true);
  };

  const onLinkClickHandler = () => {
    setExpanded(false);
  };

  return (
    <>
      <Navbar className={classes.navbar} expand="lg" expanded={expanded}>
        <Navbar.Brand>
          <img src={Pockets} alt="pockets" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleHandler}>
          <HamBurgIcon />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link
              className={classes.searchSong}
              activeStyle={{ textDecoration: "underline" }}
              onClick={onLinkClickHandler}
              as={NavLink}
              to="/search"
              exact
            >
              SEARCH SONG
            </Nav.Link>
            <Nav.Link
              className={classes.addSong}
              activeStyle={{ textDecoration: "underline" }}
              onClick={onLinkClickHandler}
              as={NavLink}
              to="/add"
              exact
            >
              ADD SONG
            </Nav.Link>
            <Nav.Link
              className={classes.about}
              activeStyle={{ textDecoration: "underline" }}
              onClick={onLinkClickHandler}
              as={NavLink}
              to="/about"
              exact
            >
              ABOUT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
