import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { Nav } from "react-bootstrap";

const HeaderLoggedOut = (props) => {
  const { onLinkClickHandler } = props;
  return (
    <>
      <Nav>
        <Nav.Link
          className={classes.addSong}
          activeStyle={{ textDecoration: "underline" }}
          onClick={onLinkClickHandler}
          as={NavLink}
          to="/signin"
          exact
        >
          LOG IN
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
    </>
  );
};

export default HeaderLoggedOut;
