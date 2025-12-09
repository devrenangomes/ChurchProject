
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../../assets/logo.jpg';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);

    if (isHome) {
      scrollToSection(targetId);
    } else {
      navigate('/');
      setTimeout(() => {
        scrollToSection(targetId);
      }, 100);
    }
  };

  const handleGalleryClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    navigate('/gallery');
    window.scrollTo(0, 0);
  };

  const scrollToSection = (id) => {
    if (!id || id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 60;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled || !isHome ? styles.scrolled : ''} `}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo Catedral da Adoração" className={styles.logoImage} />
          <div className={styles.logoText}>
            <span className={styles.logoSubtitle}>CATEDRAL DA</span>
            <span className={styles.logoTitle}>ADORAÇÃO</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <a href="/" onClick={(e) => handleNavigation(e, 'home')} className={styles.navLink}>Início</a>
          <a href="#avisos" onClick={(e) => handleNavigation(e, 'avisos')} className={styles.navLink}>Avisos</a>
          <a href="#celulas" onClick={(e) => handleNavigation(e, 'celulas')} className={styles.navLink}>Células</a>
          <a href="#horarios" onClick={(e) => handleNavigation(e, 'horarios')} className={styles.navLink}>Agenda</a>
          <a href="/gallery" onClick={handleGalleryClick} className={styles.navLink}>Galeria</a>

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
          <a href="/" onClick={(e) => handleNavigation(e, 'home')} className={styles.mobileLink}>Início</a>
          <a href="#avisos" onClick={(e) => handleNavigation(e, 'avisos')} className={styles.mobileLink}>Avisos</a>
          <a href="#celulas" onClick={(e) => handleNavigation(e, 'celulas')} className={styles.mobileLink}>Células</a>
          <a href="#horarios" onClick={(e) => handleNavigation(e, 'horarios')} className={styles.mobileLink}>Agenda</a>
          <a href="/gallery" onClick={handleGalleryClick} className={styles.mobileLink}>Galeria</a>
          <button className={styles.mobileDonateButton}>
            Quero Contribuir
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
