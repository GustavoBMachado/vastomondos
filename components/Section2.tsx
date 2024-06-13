import styles from '../styles/Section2.module.css';

const Section2 = () => (
  <section className={styles.about}>
    <h2>Sobre nós</h2>
    <div className={styles.cards}>
      <div className={styles.card}>
        <img src="/image1.png" alt="Viajar é oxigênio" />
        <h3>Viajar é oxigênio</h3>
        <p>Essa aqui sou eu, uma carioca que mora em Porto Alegre há 25 anos e que é louca por turismo. Pra mim, viajar é oxigênio, conhecer diferentes lugares, culturas, comidas e pessoas. Vamos juntos explorar o mundo!</p>
      </div>
      <div className={styles.card}>
        <img src="/image2.png" alt="Fora do comum" />
        <h3>Fora do comum</h3>
        <p>Sabe aquela viagem dos seus sonhos? A Vasto Mondo tem tudo pra te ajudar a realizá-la e muito mais. Nós estamos aqui para te ajudar a montar o roteiro dos seus sonhos, planejar tudo nos mínimos detalhes e garantir uma experiência inesquecível.</p>
      </div>
      <div className={styles.card}>
        <img src="/image3.png" alt="Programa TPM" />
        <h3>Programa TPM</h3>
        <p>Programa TPM - Turismo Para Mulheres: Este programa foi pensado e elaborado para você que quer viajar sozinha, mas não quer abrir mão da segurança e da companhia. Junte-se a outras mulheres incríveis e explore o mundo de uma maneira totalmente nova.</p>
      </div>
    </div>
  </section>
);

export default Section2;