'use client';
import { useState } from 'react';
import styles from '../styles/CombinedSection.module.css';

const CombinedSection = () => {
  const texts = [
    'Essa aqui sou eu, uma carioca que mora em Porto Alegre há 25 anos e que é louca por turismo. Pra mim, viajar é oxigênio, conhecer diferentes lugares, culturas, comidas e tudo o que esse Vasto Mondo tem pra me mostrar, é demais! E ainda poder colocar tudo isso em prática em forma de roteiros que farão as suas viagens serem inesquecíveis para que você possa trazer memórias incríveis, é o que me move. Gisele Corrêa',
    'Sabe aquela viagem dos seus sonhos? A Vasto Mondo tem tudo pra te ajudar a realizá-la e muito mais, nós estamos aqui para te ajudar a montar o roteiro dos seus sonhos, planejar tudo nos mínimos detalhes e fazer você vibrar em cada lugar que passar. Nossa missão não é fazer mais uma viagem, e sim fazer aquela que ficará marcada em sua memória para sempre. Entre em contato conosco. Vamos planejar juntos!',
    'Este programa foi pensado e elaborado para você que quer viajar sozinha, mas não desacompanhada, ou seja, para você que quer curtir viagens extraordinárias e construir memórias únicas, mesmo que você não tenha alguém pra te acompanhar. A Vasto Mondo está aqui para te ajudar neste sentido, com nossos pequenos grupos para grandes experiências. Venha conversar conosco!',
    'Bem-vindo à Vasto Mondo, onde transformamos sonhos de viagem em realidade. Nossa missão é oferecer experiências de viagem personalizadas e inesquecíveis, adaptadas às suas preferências e necessidades.',
    'A Vasto Mondo oferece roteiros personalizados para todos os gostos e estilos de viagem. Seja uma aventura, um retiro relaxante ou uma viagem cultural, nós temos a expertise para planejar a viagem perfeita para você.'
  ];

  const titles = [
    'Viajar é oxigênio',
    'Fora do comum',
    'Programa TPM',
    'Roteiros Personalizados',
    'Pacotes'
  ];

  const charLimit = 181; // Ajuste o número de caracteres aqui

  const [expanded, setExpanded] = useState<boolean[]>(Array(texts.length).fill(false));

  const toggleExpand = (index: number) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <section className={`${styles.section} customizable-text`}>
      <h2 className={styles.mainTitle}>Sobre nós</h2>
      <hr className={styles.separator} />
      <div className={styles.imageContainer}>
        {texts.map((text, index) => (
          <div key={index} className={styles.content}>
            <img src={`/image${index + 1}.png`} alt={`Image ${index + 1}`} className={styles.image} />
            <div className={styles.text}>
              <h3><strong>{titles[index]}</strong></h3>
              <p dangerouslySetInnerHTML={{ __html: expanded[index] ? text.replace(/Vasto Mondo/g, '<strong>Vasto Mondo</strong>') : `${text.slice(0, charLimit).replace(/Vasto Mondo/g, '<strong>Vasto Mondo</strong>')}...` }}></p>
              <button className={styles.readMoreButton} onClick={() => toggleExpand(index)}>
                {expanded[index] ? '-Menos' : 'Mais+'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CombinedSection;