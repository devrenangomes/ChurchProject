import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form className={styles.form}>
        <div className={styles.group}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" />
        </div>
        <div className={styles.group}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" />
        </div>
        <div className={styles.group}>
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="How can we help?"></textarea>
        </div>
        <button type="submit" className={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
