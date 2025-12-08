import React from 'react';
import styles from './Ministries.module.css';

const Ministries = () => {
  const ministries = [
    { id: 1, name: 'Youth Ministry', description: 'Empowering the next generation.' },
    { id: 2, name: 'Music Ministry', description: 'Worship through song and praise.' },
    { id: 3, name: 'Outreach', description: 'Helping those in need in our city.' },
  ];

  return (
    <div className={styles.container}>
      <h1>Our Ministries</h1>
      <ul className={styles.list}>
        {ministries.map((m) => (
          <li key={m.id} className={styles.item}>
            <h2>{m.name}</h2>
            <p>{m.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ministries;
