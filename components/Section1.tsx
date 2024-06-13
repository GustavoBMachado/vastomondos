import styles from '../styles/Section1.module.css';

const Section1 = () => (
  <section className={styles.section}>
    <div className={styles.card}>
      <img src="/image1.png" alt="Viajar é oxigênio" />
      <h2>Viajar é oxigênio</h2>
      <p>Essa aqui sou eu, uma carioca que mora em Porto Alegre há 25 anos...</p>
    </div>
    <div className={styles.card}>
      <img src="/image2.png" alt="Fora do comum" />
      <h2>Fora do comum</h2>
      <p>Sabe aquela viagem dos seus sonhos? A Vasto Mondo tem tudo pra te ajudar...</p>
    </div>
    <div className={styles.card}>
      <img src="/image3.png" alt="Programa TPM" />
      <h2>Programa TPM</h2>
      <p>Este programa foi pensado e elaborado para você...</p>
    </div>
  </section>
);

export default Section1;