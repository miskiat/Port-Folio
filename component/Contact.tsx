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
        <div className={styles.github}>
          <div>
            <img src="github.png" />
            <p>Github</p>
          </div>
          <img src="pink-arrow.png" />
        </div>
        <div>
          <div>
            <img src="linkedin.png" />
            <h1>Linkedin</h1>
          </div>

          <img src="pink-arrow.png" />
        </div>
        <div>
          <div>
            <img src="codepen.png" />
            <h1>Codepen</h1>
          </div>

          <img src="pink-arrow.png" />
        </div>
        <div>
          <div>
            <img src="twitter.png" />
            <h1>Twitter</h1>
          </div>

          <img src="pink-arrow.png" />
        </div>
      </section>
    </section>
  );
};

export default Contact;
