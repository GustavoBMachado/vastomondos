'use client';
import styles from '../styles/SocialLinks.module.css';

const SocialLinks = () => {
  return (
    <section className={`${styles.socialSection} ${styles.customizableTitle}`}>
      <h2 className={styles.socialTitle}>Siga nossas redes sociais</h2>
      <hr className={styles.separator} />
      <div className={styles.icons}>
        <a href="https://facebook.com/VastoMondo" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <img src="/facebook.png" alt="Facebook" />
        </a>
        <a href="https://instagram.com/vastomondo_turismo" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <img src="/instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/gisele-corrêa-51a79311a/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=br" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <img src="/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://www.tiktok.com/@vasto.mondo.turis" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <img src="/tiktok.png" alt="TikTok" />
        </a>
        <a href="https://twitter.com/VastoMondo" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <img src="/Twitter.png" alt="Twitter" />
        </a>
        <a href="https://www.youtube.com/channel/UC1DNtj0tg98CX-UN_-fJ6Wg" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <img src="/youtube.png" alt="YouTube" />
        </a>
      </div>
    </section>
  );
};

export default SocialLinks;