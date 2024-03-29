import React from "react";
import styles from "./HamBurgIcon.module.css";

const HamBurgIcon = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bar1}></div>
      <div className={styles.bar2}></div>
      <div className={styles.bar3}></div>
    </div>
  );
};

export default HamBurgIcon;
