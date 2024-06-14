'use client';
import { useState, useRef, useEffect } from 'react';
import styles from '../styles/CombinedSection.module.css';

const CombinedSection = () => {
  const [expanded, setExpanded] = useState([false, false, false, false, false]);
  const [showButton, setShowButton] = useState([false, false, false, false, false]);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const toggleExpand = (index: number) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const texts = [
    'Essa aqui sou eu, uma carioca que mora em Porto Alegre há 25 anos e que é  louca por turismo. Pra mim, viajar é oxigênio, conhecer diferentes lugares, culturas, comidas e tudo o que esse Vasto Mondo tem pra me mostrar, é demais! E ainda poder colocar tudo isso em prática em forma de roteiros que farão as suas viagens serem inesquecíveis para que você possa trazer memórias incríveis, é o que me move. Gisele Corrêa',
    'Sabe aquela viagem dos seus sonhos? A Vasto Mondo tem tudo pra  te ajudar a realizá-la e muito mais, nós estamos aqui para te ajudar a montar o roteiro dos seus sonhos, planejar tudo nos mínimos detalhes e fazer você vibrar em cada lugar que passar. Nossa missão não é fazer mais uma viagem, e sim fazer aquela que ficará marcada em sua memória para sempre. Entre em contato conosco. Vamos planejar juntos.',
    'Este programa foi pensado e elaborado para você que quer viajar sozinha, mas não desacompanhada, ou seja, para você que quer curtir viagens extraordinárias e construir memórias únicas, mesmo que você não tenha alguém pra te acompanhar. A Vasto Mondo está aqui para te ajudar neste sentido, com nossos pequenos grupos para grandes experiências. Venha conversar conosco.',
    'Bem-vindo à Vasto Mondo, onde transformamos sonhos de viagem em realidade. Nossa missão é oferecer experiências de viagem personalizadas e inesquecíveis, adaptadas às suas preferências e necessidades.',
    'A Vasto Mondo oferece roteiros personalizados para todos os gostos e estilos de viagem. Seja uma aventura, um retiro relaxante ou uma viagem cultural, nós temos a expertise para planejar a viagem perfeita para você.'
  ];

  useEffect(() => {
    const newShowButton = textRefs.current.map((textRef) =>
      textRef ? textRef.scrollHeight > textRef.clientHeight : false
    );
    setShowButton(newShowButton as boolean[]);
  }, []);

  return (
    <section className={styles.section}>
      {texts.map((text, index) => (
        <div key={index} className={styles.content}>
          <img src={`/image${index + 1}.png`} alt={`Image ${index + 1}`} className={styles.image} />
          <div className={`${styles.text} ${expanded[index] ? styles.expanded : ''}`}>
            <h2>{index === 0 ? 'Viajar é oxigênio' : index === 1 ? 'Fora do comum' : index === 2 ? 'Programa TPM' : index === 3 ? 'Sobre nós' : 'Nossos Serviços'}</h2>
            <p ref={(el) => { textRefs.current[index] = el; }}>{text}</p>
            {showButton[index] && (
              <button className={styles.moreButton} onClick={() => toggleExpand(index)}>
                {expanded[index] ? '-Menos' : '+Mais'}
              </button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default CombinedSection;