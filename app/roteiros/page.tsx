'use client';
import Header from '../../components/Header';
import styles from '../../styles/Roteiros.module.css';
import Footer from '../../components/Footer';

const Roteiros = () => {
  const Canada = [
    { src: '/images/canada1.jpg', alt: 'Janeiro', title: 'Janeiro', whatsappMsg: 'Olá! Gostaria de mais informações sobre o pacote de Janeiro: Canadian Winter Adventure', hoverText: 'Canadian Winter Adventure' },
    { src: '/images/canada2.jpg', alt: 'Abril', title: 'Abril', whatsappMsg: 'Olá! Gostaria de mais informações sobre o pacote de abril: Canexpress', hoverText: 'Canexpress' },
    { src: '/images/canada3.jpg', alt: 'Julho', title: 'Julho', whatsappMsg: 'Olá! Gostaria de mais informações sobre o pacote de julho: Canadian Summer Adventure', hoverText: 'Canadian Summer Adventure' },
    { src: '/images/canadatpm.png', alt: 'Outubro', title: 'Outubro', whatsappMsg: 'Olá! Gostaria de mais informações sobre o pacote de outubro: Canexpres TPM', hoverText: 'Canexpress - TPM' },
  ];

  const primeiroSemestre = [
    { src: '/images/canada4.jpg', alt: 'Janeiro', title: 'Janeiro', whatsappMsg: 'Olá! Gostaria de mais informações sobre o pacote de Janeiro: Canadian Winter Adventure', hoverText: 'Canadian Winter Adventure' },
    { src: '/images/morretes.jpg', alt: 'Março', title: 'Março', whatsappMsg: 'Olá! Gostaria de mais informações sobre o pacote de março: Morretes TPM', hoverText: 'Morretes(TPM)' },
    { src: '/images/balonismo.jpg', alt: 'Abril', title: 'Abril', whatsappMsg: 'Olá! Gostaria de mais informações sobre o pacote de abril: Balonismo', hoverText: 'Balonismo' },
    { src: '/images/puntadeleste.jpg', alt: 'Maio', title: 'Maio', whatsappMsg: 'Olá! Gostaria de mais informações sobre o pacote de maio: Punta del Este', hoverText: 'Punta Del Este' },
    { src: '/images/aguastermais.jpg', alt: 'Junho', title: 'Junho', whatsappMsg: 'Olá! Gostaria de mais informações sobre o pacote de junho: Águas Termais - TPM', hoverText: 'Águas Termais (TPM)' }
  ];

  const segundoSemestre = [
    { src: '/images/paradourohampel.jpg', alt: 'Julho', title: 'Julho', whatsappMsg: 'Olá! Gostaria de mais informações sobre o pacote de julho: Paradouro Hampel', hoverText: 'Paradouro Hampel' },
    { src: '/images/estancia.jpg', alt: 'Agosto', title: 'Agosto', whatsappMsg: 'Olá! Gostaria de mais informações sobre o pacote de agosto: Estancia das Oliveiras', hoverText: 'Estância das Oliveiras' },
    { src: '/images/rafting.jpg', alt: 'Setembro', title: 'Setembro', whatsappMsg: 'Olá! Gostaria de mais informações sobre o pacote de setembro: Balonismo - TPM / rafting', hoverText: 'Balonismo  TPM/Rafting' },
    { src: '/images/vale dos vinhedos.jpg', alt: 'Outubro', title: 'Outubro', whatsappMsg: 'Olá! Gostaria de mais informações sobre o pacote de outubro: Vale dos Vinhedos - TPM', hoverText: 'Vale dos vinhedos(TPM)' },
    { src: '/images/aparecidanorte.jpg', alt: 'Novembro', title: 'Novembro', whatsappMsg: 'Olá! Gostaria de mais informações sobre o pacote de novembro: Morretes/Aparecida do Norte', hoverText: 'Morretes/Aparecida do Norte' },
    { src: '/images/estancia.jpg', alt: 'Dezembro', title: 'Dezembro', whatsappMsg: 'Olá! Gostaria de mais informações sobre o pacote de dezembro: Estancia dos Oliveiras TPM', hoverText: 'Estância das Oliveiras(TPM)' }
  ];

  return (
    <>
      <Header />
      <section className={styles.roteirosSection}>
        <h2 className={styles.semesterTitle}>Canadá</h2>
        <div className={styles.separator}></div>
        <div className={styles.imageGrid}>
          {Canada.map((item, index) => (
            <a
              key={index}
              href={`https://api.whatsapp.com/send/?phone=555181128755&text=${encodeURIComponent(item.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageContainer}
            >
              <img src={item.src} alt={item.alt} className={styles.image} />
              <div className={styles.imageOverlay}>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.hoverText}>{item.hoverText}</span>
              </div>
            </a>
          ))}
        </div>
        <h2 className={styles.semesterTitle}>Primeiro Semestre</h2>
        <div className={styles.separator}></div>
        <div className={styles.imageGrid}>
          {primeiroSemestre.map((item, index) => (
            <a
              key={index}
              href={`https://api.whatsapp.com/send/?phone=555181128755&text=${encodeURIComponent(item.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageContainer}
            >
              <img src={item.src} alt={item.alt} className={styles.image} />
              <div className={styles.imageOverlay}>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.hoverText}>{item.hoverText}</span>
              </div>
            </a>
          ))}
        </div>
        <h2 className={styles.semesterTitle}>Segundo Semestre</h2>
        <div className={styles.separator}></div>
        <div className={styles.imageGrid}>
          {segundoSemestre.map((item, index) => (
            <a
              key={index}
              href={`https://api.whatsapp.com/send/?phone=555181128755&text=${encodeURIComponent(item.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageContainer}
            >
              <img src={item.src} alt={item.alt} className={styles.image} />
              <div className={styles.imageOverlay}>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.hoverText}>{item.hoverText}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Roteiros;