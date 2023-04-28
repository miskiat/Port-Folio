import React from "react";

import styles from "./../styles/Home.module.scss";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <section className={styles.intro}>
        <div>
          <div className={styles.name}>
            <h1>Hi 👋</h1>
            <h1>I'm Miskiat Badmus</h1>
          </div>

          <p className={styles.summary}>
            I am a Web Developer I develop and build a responsive web design
          </p>
          <button className={styles.dark}>
            <a href="mailto:badmusmiskiat@gmail.com" target="_blank">
              Let's work together
              <img src="/up-arrow.svg" />
            </a>
          </button>
          <button className={styles.light}>
            <a href="#work">
              See some of my work
              <img src="/down-arrow.svg" />
            </a>
          </button>
        </div>

        <div>
          <img className={styles.mko} src="/mko.jpg" />
        </div>
      </section>
    </section>
  );
};

export default Hero;
