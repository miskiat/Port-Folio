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
        <div>
          <img src="github.png" />
          <h1>Github</h1>
        </div>
      </section>
    </section>
  );
};

export default Contact;
