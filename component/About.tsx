import React from "react";
import styles from "./../styles/Home.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <p>About Me</p>
      <h1>A bit about me.</h1>
      <p>
        I am Miskiat,a Frontend Software Engineer experienced in designing,
        developing, and managing apps and internal frameworks. I am a deep
        creative thinker with a keen eye for details.I specialize in ReactJS,
        Typescript, Next.js and responsive design.
      </p>
      <div className={styles.skills}>
        <div>
          Languages
          <p>HTML</p>
          <p>CSS</p>
          <p>JAVASCRIPT</p>
          <p>TYPESCRIPT</p>
        </div>
        <div>
          Technologies
          <p>REACT NATIVE</p>
          <p>REACT</p>
          <p>TAILWIND</p>
          <p>GIT</p>
          <p>NETLIFY</p>
        </div>
      </div>
    </section>
  );
};

export default About;
