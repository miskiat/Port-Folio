import React from "react";
import styles from "./../styles/Home.module.scss";

const Contact = () => {
  return (
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
      <section>
        <p>SOCIALS</p>
        <section className={styles.app}>
          <button className={styles.github}>
            <div>
              <img src="github.png" />
              <p>Github</p>
            </div>
            <img src="pink-arrow.png" />
          </button>
          <button className={styles.github}>
            <div>
              <img src="linkedin.png" />
              <p>Linkedin</p>
            </div>

            <img src="pink-arrow.png" />
          </button>
          <button className={styles.github}>
            <div>
              <img src="codepen.png" />
              <p>Codepen</p>
            </div>

            <img src="pink-arrow.png" />
          </button>
          <button className={styles.github}>
            <div>
              <img src="twitter.png" />
              <p>Twitter</p>
            </div>

            <img src="pink-arrow.png" />
          </button>
        </section>
      </section>
    </section>
  );
};

export default Contact;
