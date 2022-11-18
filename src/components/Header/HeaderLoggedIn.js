import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { Nav } from "react-bootstrap";

const HeaderLoggedIn = (props) => {
  const { onLinkClickHandler, handleSignOut } = props;

  return (
    <>
      <Nav>
        <Nav.Link
          className={classes.about}
          activeStyle={{ textDecoration: "underline" }}
          onClick={onLinkClickHandler}
          as={NavLink}
          to="/groups"
          exact
        >
          MY GROUPS
        </Nav.Link>
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
        <Nav.Link
          className={classes.searchSong}
          activeStyle={{ textDecoration: "underline" }}
          onClick={handleSignOut}
          as={NavLink}
          to="/"
          exact
        >
          LOG OUT
        </Nav.Link>
      </Nav>
    </>
  );
};

export default HeaderLoggedIn;
