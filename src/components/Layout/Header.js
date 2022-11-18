import React, { useState } from "react";
import classes from "./Header.module.css";
import { Navbar } from "react-bootstrap";
import Pockets from "../../assets/images/Pockets_main_font.png";
import HamBurgIcon from "../UI/HamBurgIcon";
import { UserAuth } from "../../context/AuthContext";
import HeaderLoggedIn from "../Header/HeaderLoggedIn";
import HeaderLoggedOut from "../Header/HeaderLoggedOut";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const { logOut, user } = UserAuth();

  const toggleHandler = () => {
    setExpanded(expanded ? false : true);
  };

  const onLinkClickHandler = () => {
    setExpanded(false);
  };

  const handleSignOut = async () => {
    setExpanded(false);
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
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
          {user?.displayName ? (
            <HeaderLoggedIn
              onLinkClickHandler={onLinkClickHandler}
              handleSignOut={handleSignOut}
            />
          ) : (
            <HeaderLoggedOut onLinkClickHandler={onLinkClickHandler} />
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
