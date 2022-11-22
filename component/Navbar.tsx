import React from "react";
import styles from "./../styles/Home.module.scss";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>MISKIAT BADMUS</div>
      <div className={styles.links}>
        <span>
          <a href="#about">About</a>
        </span>
        <span>
          <a href="#work">Work</a>
        </span>
        <span>
          <a href="#contact">Contact</a>
        </span>
        <img className="moon" src="/moon-icon.svg" />
      </div>
    </div>
  );
};

export default Navbar;
