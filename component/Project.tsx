import React from "react";
import styles from "./../styles/Home.module.scss";

const Project = () => {
  return (
    <section id="work" className={styles.project}>
      <div>
        <p className={styles.featured}>FEATURED PROJECTS</p>
        <h1 className={styles.workedon}>Projects I've Worked On 📁</h1>
        <section className={styles.card}>
          <div className={styles.projectcard}>
            <img src="thelookbymis.b.png" />
            <h3>ThelookbyMis.B</h3>
            <p>
              A fashion website to order and book for appointment and training
            </p>
            <button>
              <a href="https://thelookbymis-b.netlify.app" target="_blank">
                Javascript
              </a>
            </button>
            <button>
              <a href="https://thelookbymis-b.netlify.app" target="_blank">
                React
              </a>
            </button>

            <button>
              {" "}
              <a href="https://thelookbymis-b.netlify.app" target="_blank">
                CSS
              </a>
            </button>
          </div>
          <div className={styles.projectcard}>
            <img src="codevilageclone.png" />
            <h3>Code Village Cloned</h3>
            <p>
              A fashion website to order and book for appointment and training
            </p>
            <button>
              <a href="https://codevillageclone.netlify.app" target="_blank">
                Javascript
              </a>
            </button>
            <button>
              <a href="https://codevillageclone.netlify.app" target="_blank">
                React
              </a>
            </button>

            <button>
              {" "}
              <a href="https://codevillageclone.netlify.app" target="_blank">
                CSS
              </a>
            </button>
          </div>
          {/* <div className={styles.projectcard}>
            <img src="thelookbymis.b.png" />
            <h3>ThelookbyMis.B</h3>
            <p>
              A fashion website to order and book for appointment and training
            </p>
            <button>
              <a href="https://thelookbymis-b.netlify.app" target="_blank">
                Javascript
              </a>
            </button>
            <button>
              <a href="https://thelookbymis-b.netlify.app" target="_blank">
                React
              </a>
            </button>

            <button>
              {" "}
              <a href="https://thelookbymis-b.netlify.app" target="_blank">
                CSS
              </a>
            </button>
          </div> */}
        </section>
      </div>
    </section>
  );
};

export default Project;
