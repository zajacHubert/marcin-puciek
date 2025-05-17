'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { mainSlides } from '@/data/mainSlides';
import Image from 'next/image';

const MainSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.60': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.20': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.60': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {mainSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image src={slide.img} alt='picture' fill />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainSlider;
