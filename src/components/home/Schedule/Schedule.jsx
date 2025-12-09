import React from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';
import styles from './Schedule.module.css';

const Schedule = () => {
  return (
    <section id="horarios" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nossos Cultos</h2>

        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Calendar size={40} />
            </div>
            <h3 className={styles.cardTitle}>Domingo</h3>
            <p className={styles.cardDesc}>Culto da Família</p>
            <div className={styles.time}>8h30 e 18h30</div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.badge}>CURA E LIBERTAÇÃO</div>
            <div className={styles.iconWrapper}>
              <Users size={40} />
            </div>
            <h3 className={styles.cardTitle}>Quarta-feira</h3>
            <p className={styles.cardDesc}>Busca pelo Espírito Santo</p>
            <div className={styles.time}>19h30</div>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Users size={40} />
            </div>
            <h3 className={styles.cardTitle}>Sábado</h3>
            <p className={styles.cardDesc}>Culto de Jovens</p>
            <div className={styles.time}>19h30</div>
          </div>
        </div>

        <div className={styles.locationSection}>
          <h3 className={styles.locationTitle}>Localização</h3>
          <div className={styles.locationRow}>
            <div className={styles.address}>
              <MapPin size={20} className={styles.mapPin} />
              <span>Av. Dom Vicente Zico, 821 - Cidade Nova, Ananindeua - PA, 67133-390</span>
            </div>
            <button className={styles.mapButton}>
              Ver no Mapa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
