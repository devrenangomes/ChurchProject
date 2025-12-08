import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Welcome to Our Church</h1>
        <p>A place of love, hope, and community.</p>
        <button className={styles.ctaButton}>Join Us</button>
      </section>
      <section className={styles.features}>
        <div className={styles.feature}>
          <h2>Worship</h2>
          <p>Join us for uplifting worship every Sunday.</p>
        </div>
        <div className={styles.feature}>
          <h2>Community</h2>
          <p>Connect with others in our life groups.</p>
        </div>
        <div className={styles.feature}>
          <h2>Service</h2>
          <p>Find opportunities to serve the community.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
