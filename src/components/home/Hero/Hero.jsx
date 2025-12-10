import React from 'react';
import { Play, Instagram } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
    const scrollToSchedule = () => {
        const scheduleSection = document.getElementById('horarios');
        if (scheduleSection) {
            scheduleSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className={styles.section}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Bem-vindo à <span className={styles.highlight}>Catedral da Adoração</span>
                </h1>
                <p className={styles.subtitle}>
                    Um lugar de adoração, cura e salvação. Venha fazer parte desta família.
                </p>
                <div className={styles.buttonGroup}>
                    <button onClick={scrollToSchedule} className={styles.primaryButton}>
                        Planeje sua Visita
                    </button>
                    <a
                        href="https://www.instagram.com/ieqcatedraldaadoracao?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialButton}
                    >
                        <Instagram size={20} />
                        Siga no Instagram
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
