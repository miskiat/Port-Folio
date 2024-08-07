import React from "react";
import styles from "./../styles/Home.module.scss";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <p>ABOUT ME</p>
      <h1>A bit about me.</h1>
      <p className={styles.summary}>
        A Software Engineer with an M.sc in Artificial Intelligence and Data
        Science experienced in designing, developing, and managing apps and
        internal frameworks. I am a deep creative thinker with a keen eye for
        details.I specialize in React, Typescript, Next.js and responsive
        design.
      </p>
      <div className={styles.skills}>
        <div className={styles.language}>
          Languages
          <div className={styles.languages}>
            <p>
              {" "}
              <img src="rightt.svg" /> HTML
            </p>
            <p>
              {" "}
              <img src="rightt.svg" /> CSS
            </p>
            <p>
              {" "}
              <img src="rightt.svg" /> JAVASCRIPT
            </p>
            <p>
              {" "}
              <img src="rightt.svg" /> TYPESCRIPT
            </p>
          </div>
        </div>
        <div className={styles.technology}>
          Technologies
          <div className={styles.technologys}>
            <p>
              {" "}
              <img src="rightt.svg" /> REACT
            </p>
            <p>
              {" "}
              <img src="rightt.svg" /> NEXTJS
            </p>
            <p>
              {" "}
              <img src="rightt.svg" /> TAILWIND
            </p>
            <p>
              {" "}
              <img src="rightt.svg" /> GIT
            </p>
            <p>
              {" "}
              <img src="rightt.svg" /> NETLIFY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
