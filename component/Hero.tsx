import React from "react";
import Navbar from "./Navbar";
import styles from "./../styles/Home.module.css";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <Navbar />
      <section>
        <h1>Hi 👋</h1>
        <h1>I'm Miskiat Badmus</h1>
        <p>Passionate about coding</p>
        <button>
          Let's work together
          <img src="/public/up-arrow.svg" />
        </button>
        <button>
          See some of my work <img src="/public/down-arrow.svg" />
        </button>
      </section>
    </section>
  );
};

export default Hero;
