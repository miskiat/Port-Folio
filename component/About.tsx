import React from "react";
import styles from "./../styles/Home.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <p>ABOUT ME</p>
      <h1>A bit about me.</h1>
      <p className={styles.summary}>
        I am Miskiat,a Frontend Software Engineer experienced in designing,
        developing, and managing apps and internal frameworks. I am a deep
        creative thinker with a keen eye for details.I specialize in ReactJS,
        Typescript, Next.js and responsive design.
      </p>
      <div className={styles.skills}>
        <div className={styles.language}>
          Languages
          <div className={styles.languages}>
            <p>
              {" "}
              <img src="right.svg" /> HTML
            </p>
            <p>
              {" "}
              <img src="right.svg" /> CSS
            </p>
            <p>
              {" "}
              <img src="right.svg" /> JAVASCRIPT
            </p>
            <p>
              {" "}
              <img src="right.svg" /> TYPESCRIPT
            </p>
          </div>
        </div>
        <div className={styles.technology}>
          Technologies
          <div className={styles.technologys}>
            <p>
              {" "}
              <img src="right.svg" /> REACT NATIVE
            </p>
            <p>
              {" "}
              <img src="right.svg" /> REACT
            </p>
            <p>
              {" "}
              <img src="right.svg" /> TAILWIND
            </p>
            <p>
              {" "}
              <img src="right.svg" /> GIT
            </p>
            <p>
              {" "}
              <img src="right.svg" /> NETLIFY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
