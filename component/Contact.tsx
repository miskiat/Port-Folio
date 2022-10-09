import React from "react";
import styles from "./../styles/Home.module.scss";

const Contact = () => {
  return (
    <>
      <section className={styles.contact}>
        <div className={styles.mail}>
          <div>
            <p>CONTACT</p>
            <h1>Let's work together</h1>
            <button>Message</button>
          </div>
          <div>
            <img src="email-box.png" />
          </div>
        </div>
      </section>
      <section className={styles.socials}>
        <p>SOCIALS</p>
        <section className={styles.app}>
          <a
            href="https://github.com/miskiat"
            target="_blank"
            className={styles.github}
          >
            <img src="github.png" />
            <h3 className={styles.socialname}>Github</h3>

            <img src="pink-arrow.png" />
          </a>
          <a
            href="https://linkedin.com/in/www/miskiat-badmus"
            target="_blank"
            className={styles.github}
          >
            <img src="linkedin.png" />
            <h3 className={styles.socialname}>Linkedin</h3>

            <img src="pink-arrow.png" />
          </a>
          <a
            href="https://codepen.io/miskiat"
            target="_blank"
            className={styles.github}
          >
            <img src="codepen.png" />
            <h3 className={styles.socialname}>Codepen</h3>

            <img src="pink-arrow.png" />
          </a>
          <a
            href="https://twitter.com/MiskiatB"
            target="_blank"
            className={styles.github}
          >
            <img src="twitter.png" />
            <h3 className={styles.socialname}>Twitter</h3>

            <img src="pink-arrow.png" />
          </a>
        </section>
      </section>
    </>
  );
};

export default Contact;
