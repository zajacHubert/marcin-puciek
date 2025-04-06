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
