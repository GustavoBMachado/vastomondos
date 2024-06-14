'use client';
import styles from '../styles/SocialLinks.module.css';

const SocialLinks = () => {
  return (
    <section className={styles.socialSection}>
      <h2>Siga nossas redes sociais</h2>
      <div className={styles.icons}>
        <a href="https://facebook.com/VastoMondo" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <img src="/icons/facebook.png" alt="Facebook" />
        </a>
        <a href="https://instagram.com/vastomondo_turismo" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <img src="/icons/instagram.png" alt="Instagram" />
        </a>
        <a href="https://linkedin.com/vastomondo_turismo" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <img src="/icons/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://www.tiktok.com/@vasto.mondo.turis" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <img src="/icons/tiktok.png" alt="TikTok" />
        </a>
        <a href="https://twitter.com/VastoMondo" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <img src="/icons/Twitter.png" alt="Twitter" />
        </a>
        <a href="https://www.youtube.com/channel/UC1DNtj0tg98CX-UN_-fJ6Wg" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <img src="/icons/youtube.png" alt="YouTube" />
        </a>
      </div>
    </section>
  );
};

export default SocialLinks;