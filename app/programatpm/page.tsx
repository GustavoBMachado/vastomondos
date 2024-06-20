import Header from '../../components/Header';
import styles from '../../styles/programatpm.module.css';

const Programatpm = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Programa TPM</h1>
        <p>Detalhes do programa TPM.</p>
      </main>
    </>
  );
};

export default Programatpm;