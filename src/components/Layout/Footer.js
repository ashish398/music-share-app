import React from "react";
import classes from "./Footer.module.css";
import Pockets from "../../assets/Pockets_main_font.png";

const Footer = () => {
  return (
    <div
      style={{
        paddingTop: 100,
        paddingBottom: 100,
        marginTop: 50,
        backgroundColor: "#f1decc",
      }}
    >
      <div
        style={{
          fontFamily: "Avenir Next Condensed",
          letterSpacing: 3,
          fontWeight: 500,
        }}
      >
        <h7 style={{ color: "grey" }}>
          All suggestions and feedback are welcome
        </h7>
        <h2 style={{ color: "#faaf92" }}>CONTACT US</h2>
        <h3 style={{ color: "#a64ac9" }}>email@here</h3>
      </div>
    </div>
  );
};

export default Footer;
