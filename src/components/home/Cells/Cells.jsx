import React from 'react';
import { Users, Cross } from 'lucide-react';
import styles from './Cells.module.css';
import CellForm from './CellForm';

const Cells = () => {
  return (
    <section id="celulas" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Células</span>
          <h2 className={styles.title}>Comunhão e Crescimento.</h2>
          <p className={styles.description}>
            Nossas células são a extensão da igreja nos lares. Um lugar para compartilhar a palavra, orar e fortalecer a fé na doutrina quadrangular.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={`${styles.iconWrapper} ${styles.redWrapper}`}>
                <Users size={24} />
              </div>
              <div>
                <h4 className={`${styles.featureTitle} ${styles.redText}`}>Família de Deus</h4>
                <p className={styles.featureDesc}>Conecte-se com irmãos em Cristo perto de sua casa.</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={`${styles.iconWrapper} ${styles.blueWrapper}`}>
                <Cross size={24} />
              </div>
              <div>
                <h4 className={`${styles.featureTitle} ${styles.blueText}`}>Discipulado</h4>
                <p className={styles.featureDesc}>Aprofunde-se no conhecimento bíblico e espiritual.</p>
              </div>
            </div>
          </div>

          <CellForm />
        </div>
        <div className={styles.imageSection}>
          {/* Círculo decorativo Azul (Cura) */}
          <div className={styles.circleBlue}></div>
          {/* Círculo decorativo Amarelo (Batismo) */}
          <div className={styles.circleYellow}></div>

          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Grupo de amigos conversando" className={styles.image} />

          {/* Círculo decorativo Roxo (Rei) */}
          <div className={styles.circlePurple}></div>
        </div>
      </div>
    </section>
  );
};

export default Cells;
