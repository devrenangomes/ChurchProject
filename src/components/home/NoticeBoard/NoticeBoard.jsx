import React, { useState } from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import styles from './NoticeBoard.module.css';

const NoticeBoard = () => {
  const [filter, setFilter] = useState('Todos');

  const notices = [
    { id: 1, tag: 'Geral', title: 'Culto de Santa Ceia', date: 'Dom, 05 Dez - 19h', img: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=500&q=80' },
    { id: 2, tag: 'Jovens', title: 'Acampamento de Verão', date: '15-18 Jan', img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&q=80' },
    { id: 3, tag: 'Crianças', title: 'Escola Bíblica Quadrangular', date: 'Todo Sábado - 14h', img: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=500&q=80' },
    { id: 4, tag: 'Mulheres', title: 'Chá das Mulheres', date: 'Sex, 10 Dez - 20h', img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&q=80' },
    { id: 5, tag: 'Ação Social', title: 'Entrega de Cestas', date: 'Sáb, 11 Dez - 08h', img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&q=80' },
    { id: 6, tag: 'Ensino', title: 'Curso de Batismo', date: 'Inscrições Abertas', img: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=500&q=80' },
  ];

  const filteredNotices = filter === 'Todos' ? notices : notices.filter(n => n.tag === filter);
  const categories = ['Todos', 'Geral', 'Jovens', 'Mulheres', 'Crianças', 'Ensino'];

  return (
    <section id="avisos" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Fique por dentro</span>
        <h2 className={styles.title}>Mural da Catedral</h2>
        <p className={styles.subtitle}>Acompanhe a agenda e as novidades do Reino.</p>
      </div>

      {/* Filters */}
      <div className={styles.filters}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`${styles.filterButton} ${filter === cat ? styles.filterButtonActive : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {filteredNotices.map((notice) => (
          <div key={notice.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <div className={styles.tag}>
                {notice.tag}
              </div>
              <img src={notice.img} alt={notice.title} className={styles.image} />
            </div>
            <div className={styles.content}>
              <div className={styles.dateRow}>
                <Calendar size={14} />
                <span>{notice.date}</span>
              </div>
              <h3 className={styles.cardTitle}>{notice.title}</h3>
              <div className={styles.readMore}>
                Saiba mais <ChevronRight size={16} style={{ marginLeft: '4px' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NoticeBoard;
