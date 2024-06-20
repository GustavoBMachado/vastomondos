'use client';
import Header from '../../components/Header';
import styles from '../../styles/Roteiros.module.css';
import Footer from '../../components/Footer';

const Roteiros = () => {
  const Canada = [
    { src: '/images/canada1.jpg', alt: 'Janeiro', title: 'Janeiro', whatsappMsg: 'Olá, estou interessado no roteiro de Janeiro no Canadá!' },
    { src: '/images/canada2.jpg', alt: 'Abril', title: 'Abril', whatsappMsg: 'Olá, estou interessado no roteiro de Abril no Canadá!' },
    { src: '/images/canada3.jpg', alt: 'Julho', title: 'Julho', whatsappMsg: 'Olá, estou interessado no roteiro de Julho no Canadá!' },
    { src: '/images/canada4.jpg', alt: 'Outubro', title: 'Outubro', whatsappMsg: 'Olá, estou interessado no roteiro de Outubro no Canadá!' },
  ];

  const primeiroSemestre = [
    { src: '/images/canada4.jpg', alt: 'Janeiro', title: 'Janeiro', whatsappMsg: 'Olá, estou interessado no roteiro de Janeiro!' },
    { src: '/images/morretes.jpg', alt: 'Março', title: 'Março', whatsappMsg: 'Olá, estou interessado no roteiro de Março!' },
    { src: '/images/balonismo.jpg', alt: 'Abril', title: 'Abril', whatsappMsg: 'Olá, estou interessado no roteiro de Abril!' },
    { src: '/images/puntadeleste.jpg', alt: 'Maio', title: 'Maio', whatsappMsg: 'Olá, estou interessado no roteiro de Maio!' },
    { src: '/images/aguastermais.jpg', alt: 'Junho', title: 'Junho', whatsappMsg: 'Olá, estou interessado no roteiro de Junho!' }
  ];

  const segundoSemestre = [
    { src: '/images/paradourohampel.jpg', alt: 'Julho', title: 'Julho', whatsappMsg: 'Olá, estou interessado no roteiro de Julho!' },
    { src: '/images/estancia.jpg', alt: 'Agosto', title: 'Agosto', whatsappMsg: 'Olá, estou interessado no roteiro de Agosto!' },
    { src: '/images/rafting.jpg', alt: 'Setembro', title: 'Setembro', whatsappMsg: 'Olá, estou interessado no roteiro de Setembro!' },
    { src: '/images/vale dos vinhedos.jpg', alt: 'Outubro', title: 'Outubro', whatsappMsg: 'Olá, estou interessado no roteiro de Outubro!' },
    { src: '/images/aparecidanorte.jpg', alt: 'Novembro', title: 'Novembro', whatsappMsg: 'Olá, estou interessado no roteiro de Novembro!' },
    { src: '/images/estancia.jpg', alt: 'Dezembro', title: 'Dezembro', whatsappMsg: 'Olá, estou interessado no roteiro de Dezembro!' }
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
              href={`https://wa.me/5551981128755?text=${encodeURIComponent(item.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageContainer}
            >
              <img src={item.src} alt={item.alt} className={styles.image} />
              <div className={styles.imageOverlay}>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.hoverText}>Clique para mais detalhes!</span>
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
              href={`https://wa.me/5551981128755?text=${encodeURIComponent(item.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageContainer}
            >
              <img src={item.src} alt={item.alt} className={styles.image} />
              <div className={styles.imageOverlay}>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.hoverText}>Clique para mais detalhes!</span>
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
              href={`https://wa.me/5551981128755?text=${encodeURIComponent(item.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageContainer}
            >
              <img src={item.src} alt={item.alt} className={styles.image} />
              <div className={styles.imageOverlay}>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.hoverText}>Clique para mais detalhes!</span>
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