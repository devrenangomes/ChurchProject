import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ year }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>&copy; {year} Church Project. All rights reserved.</p>
        <div className={styles.links}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
