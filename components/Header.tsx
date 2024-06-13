import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Image src="/logo.png" alt="Vasto Mondo" width={50} height={50} />
    <h1>Roteiros Personalizados</h1>
    <p>Vamos planejar juntos!</p>
    <button>Entre em Contato</button>
  </header>
);

export default Header;