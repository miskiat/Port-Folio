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
            Let's work together
            <img src="/up-arrow.svg" />
          </button>
          <button className={styles.light}>
            See some of my work
            <img src="/down-arrow.svg" />
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
