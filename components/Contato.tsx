'use client';
import styles from '../styles/Contato.module.css';

const Contato = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContent}>
        <h2>Contato</h2>
        <hr className={styles.separator} />
        <p>Junte-se a nós neste <strong>Vasto Mondo!</strong></p>
        <a href="https://wa.me/5551981128755" target="_blank" rel="noopener noreferrer" className={styles.button}>
          <img src="/whatsapp.png" alt="WhatsApp" className={styles.icon} />
          Envie uma mensagem
        </a>
        <p><em>Avenida Plínio Brasil Milano, 812/606 Higienópolis, Porto Alegre - Rio Grande do Sul, 90520-002, Brazil</em></p>
        <p><em>+51 981128755</em></p>
      </div>
    </section>
  );
};

export default Contato;