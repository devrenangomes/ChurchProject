import React from 'react';
import { PlayCircle } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.section}>
      {/* Overlay */}
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <span className={styles.subtitle}>Bem-vindo à Catedral</span>
        <h1 className={styles.title}>
          Um lugar de adoração,<br />cura e salvação.
        </h1>
        <p className={styles.description}>
          Jesus Cristo é o Salvador, Batizador com o Espírito Santo, Curador e Rei que Breve Virá.
        </p>
        <div className={styles.buttonGroup}>
          <a href="#horarios" className={styles.primaryButton}>
            Planeje sua Visita
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
