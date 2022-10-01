import React from "react";
import styles from "./../styles/Home.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>MISKIAT BADMUS</div>
      <div>
        <span>About</span>
        <span>Work</span>
        <span>Contact</span>
      </div>

      <img src="/public/moon-icon.svg" />
    </div>
  );
};

export default Navbar;
