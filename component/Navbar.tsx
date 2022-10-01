import React from "react";
import styles from "./../styles/Home.module.scss";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>MISKIAT BADMUS</div>
      <div className={styles.links}>
        <span>About</span>
        <span>Work</span>
        <span>Contact</span>
        <img className="moon" src="/moon-icon.svg" />
      </div>
    </div>
  );
};

export default Navbar;
