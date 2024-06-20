'use client';
import { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = [
    'Sozinha sim, desecompanhada jamais.',
    'Vamos planejar juntos!',
    'Venha conhecer o que temos para você!'
  ];

  const titles = [
    'Programa TPM',
    'Roteiros Personalizados',
    'Pacotes'
  ];

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <header className={`${styles.header} ${styles.customizableHeader}`}>
      <div className={styles.topBar}>
        <Link href="/programatpm" legacyBehavior>
          <a className={styles.navLink}>Programa TPM</a>
        </Link>
        <div className={styles.logoContainer}>
          <Link href="/" legacyBehavior>
            <a>
              <img src="/vastologo.png" alt="Site Logo" className={styles.logo} />
            </a>
          </Link>
        </div>
        <Link href="/roteiros" legacyBehavior>
          <a className={styles.navLink}>Roteiros</a>
        </Link>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet ${styles.swiperBullet}`,
          bulletActiveClass: `swiper-pagination-bullet-active ${styles.swiperBulletActive}`
        }}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`
        }}
        onSlideChange={handleSlideChange}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className={`mySwiper ${styles.swiperContainer}`}
      >
        <SwiperSlide>
          <img src="/4.jpg" alt="Image 1" className={styles.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/5.jpg" alt="Image 2" className={styles.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/6.jpg" alt="Image 3" className={styles.image} />
        </SwiperSlide>
      </Swiper>
      <div className={`swiper-button-next ${styles.swiperButtonNext}`}></div>
      <div className={`swiper-button-prev ${styles.swiperButtonPrev}`}></div>
      <div className={`${styles.centerBar} ${styles.customizableCenterBar}`}>
        <h2 className={styles.centerTitle}>{titles[currentIndex]}</h2>
        <p className={styles.centerText}>{texts[currentIndex]}</p>
      </div>
    </header>
  );
};

export default Header;