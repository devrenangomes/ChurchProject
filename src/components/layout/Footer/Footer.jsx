import React from 'react';
import { Instagram } from 'lucide-react';
import logo from '../../../assets/logo.jpg';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>
              <img src={logo} alt="Logo IEQ" className={styles.brandLogo} />
              <span>CATEDRAL DA <span className={styles.brandHighlight}>ADORAÇÃO</span></span>
            </div>
            <p className={styles.description}>
              Filiada à Igreja do Evangelho Quadrangular. Levando a mensagem de Jesus Cristo aos quatro cantos da terra.
            </p>
            <div className={styles.dots}>
              {/* Simbologia visual das 4 cores */}
              <div className={styles.dot} style={{ backgroundColor: '#E30613' }} title="Jesus Salvador (Vermelho)"></div>
              <div className={styles.dot} style={{ backgroundColor: '#FEDE00' }} title="Jesus Batizador (Amarelo)"></div>
              <div className={styles.dot} style={{ backgroundColor: '#0075BF' }} title="Jesus Curador (Azul)"></div>
              <div className={styles.dot} style={{ backgroundColor: '#6F2C91' }} title="Jesus Rei (Roxo)"></div>
            </div>
          </div>

          <div>
            <h4 className={styles.title}>Links Rápidos</h4>
            <ul className={styles.links}>
              <li><a href="/" className={styles.link}>Início</a></li>
              <li><a href="/#avisos" className={styles.link}>Avisos</a></li>
              <li><a href="/#celulas" className={styles.link}>Encontrar Célula</a></li>
              <li><a href="#" className={styles.link}>Pedidos de Oração</a></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.title}>Grupos Missionários</h4>
            <ul className={styles.links}>
              <li><a href="#" className={styles.link}>GM de Crianças e Juniores</a></li>
              <li><a href="#" className={styles.link}>GM de Jovens</a></li>
              <li><a href="#" className={styles.link}>GM de Mulheres</a></li>
              <li><a href="#" className={styles.link}>GM de Homens</a></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.title}>Fique Conectado</h4>
            <div className={styles.socialIcons}>
              <a
                href="https://www.instagram.com/ieqcatedraldaadoracao?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <Instagram size={24} />
              </a>
            </div>
            <button className={styles.whatsappButton}>
              Fale no WhatsApp
            </button>
          </div>
        </div>
        <div className={styles.copyright}>
          &copy; 2025 Catedral da Adoração. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
