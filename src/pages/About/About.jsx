import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1>About Us</h1>
      <p className={styles.intro}>
        We are a community dedicated to faith and good works. Our history dates back to...
      </p>
      <div className={styles.section}>
        <h2>Our Mission</h2>
        <p>To spread love and hope to everyone.</p>
      </div>
      <div className={styles.section}>
        <h2>Our Vision</h2>
        <p>A world united in peace and understanding.</p>
      </div>
    </div>
  );
};

export default About;
