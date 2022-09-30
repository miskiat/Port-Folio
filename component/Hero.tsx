import React from "react";
import Navbar from "./Navbar";
import styles from "./../styles/Home.module.css";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <Navbar />
      <section>
        <h1>👋</h1>
      </section>
    </section>
  );
};

export default Hero;
