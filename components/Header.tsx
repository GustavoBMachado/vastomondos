'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/1.png" alt="Image 1" className={styles.slideImage} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/2.jpg" alt="Image 2" className={styles.slideImage} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/3.jpg" alt="Image 3" className={styles.slideImage} />
      </SwiperSlide>
    </Swiper>
  </header>
);

export default Header;