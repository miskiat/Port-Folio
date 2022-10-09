import React from "react";
import styles from "./../styles/Home.module.scss";

const Project = () => {
  return (
    <section className={styles.project}>
      <div>
        <p className={styles.featured}>FEATURED PROJECTS</p>
        <h1>Projects I've Worked On 📁</h1>
        <section>
          <div className={styles.projectcard}>
            <img src="thelookbymis.b.png" />
            <h3>ThelookbyMis.B</h3>
            <p>
              A fashion website to order and book for appointment and training
            </p>
            <button>Javascript</button>
            <button>React</button>
            <button>CSS</button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Project;
