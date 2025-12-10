import React, { useState } from 'react';
import styles from './CellForm.module.css';

const CellForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    endereco: '',
    interesse: 'geral'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({
      nome: '',
      telefone: '',
      endereco: '',
      interesse: 'geral'
    });
  };

  if (submitted) {
    return (
      <div className={styles.successMessage}>
        Obrigado pelo interesse! <br />
        Entraremos em contato em breve para te conectar a uma célula.
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>Encontre uma célula perto de você</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="nome" className={styles.label}>Seu Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className={styles.input}
            placeholder="Ex: Maria Silva"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="telefone" className={styles.label}>WhatsApp / Telefone</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
            className={styles.input}
            placeholder="(00) 00000-0000"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="endereco" className={styles.label}>Bairro / Endereço</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            required
            className={styles.input}
            placeholder="Ex: Cidade Nova 4"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="interesse" className={styles.label}>Grupo de Interesse</label>
          <select
            id="interesse"
            name="interesse"
            value={formData.interesse}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="geral">Geral (Misto)</option>
            <option value="jovens">Jovens</option>
            <option value="mulheres">Mulheres</option>
            <option value="homens">Homens</option>
            <option value="casais">Casais</option>
            <option value="criancas">Crianças</option>
          </select>
        </div>

        <button type="submit" className={styles.submitButton}>
          Quero Participar
        </button>
      </form>
    </div>
  );
};

export default CellForm;
