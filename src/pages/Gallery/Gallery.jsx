import React from 'react';
import { Image, ExternalLink } from 'lucide-react';
import styles from './Gallery.module.css';

const Gallery = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Galeria de Fotos</h1>
          <p className={styles.subtitle}>
            Relembre os melhores momentos de comunhão, adoração e serviço em nossa igreja.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Placeholder Cards */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className={styles.card}>
              <div className={styles.imagePlaceholder}>
                <Image size={48} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Evento Exemplo {item}</h3>
                <p className={styles.cardDate}>Domingo, 10 Dez 2024</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.driveIntegration}>
          <h2 className={styles.driveTitle}>Integração com Google Drive</h2>
          <p className={styles.driveText}>
            Em breve, esta galeria será conectada automaticamente com nossa pasta de eventos no Google Drive.
            Todas as fotos tiradas pela equipe de mídia aparecerão aqui em tempo real.
          </p>
          <button className={styles.driveButton}>
            <ExternalLink size={18} style={{ display: 'inline', marginRight: '8px' }} />
            Acessar Drive da Mídia
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
