'use client';
import { useState } from 'react';
import styles from '../styles/NewsletterSignup.module.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email cadastrado:', email);
  };

  return (
    <section className={styles.signupSection}>
      <h2>Cadastro</h2>
      <p>Ganhe 10% de desconto em sua primeira compra ao se inscrever no nosso boletim informativo!</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>Inscrever-se</button>
      </form>
    </section>
  );
};

export default NewsletterSignup;