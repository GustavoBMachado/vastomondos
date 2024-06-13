import styles from '../styles/Section3.module.css';

const Section3 = () => (
  <section className={styles.contact}>
    <h2>Contato</h2>
    <p>Junte-se a nós neste Vasto Mondo!</p>
    <button>Envie uma mensagem</button>
    <address>
      Avenida Plínio Brasil Milano, 812/606 Higienópolis, Porto Alegre - Rio Grande do Sul, 90520-002, Brazil
      <br />
      +51 981128755
    </address>
  </section>
);

export default Section3;