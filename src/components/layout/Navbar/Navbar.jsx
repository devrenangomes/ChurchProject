import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ChristianCross } from '../../common/Icons';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>
            <ChristianCross size={20} />
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoSubtitle}>CATEDRAL DA</span>
            <span className={styles.logoTitle}>ADORAÇÃO</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <a href="#home" className={styles.navLink}>Início</a>
          <a href="#avisos" className={styles.navLink}>Avisos</a>
          <a href="#celulas" className={styles.navLink}>Células</a>
          <a href="#horarios" className={styles.navLink}>Agenda</a>

          <button className={styles.donateButton}>
            Contribua
          </button>
        </div>

        {/* Mobile Button */}
        <button className={styles.mobileButton} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <a href="#home" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Início</a>
          <a href="#avisos" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Avisos</a>
          <a href="#celulas" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Células</a>
          <a href="#horarios" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Agenda</a>
          <button className={styles.mobileDonateButton}>
            Quero Contribuir
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
