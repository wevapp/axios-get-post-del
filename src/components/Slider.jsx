import React from 'react';
// Import Swiper React components
import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = () => {
  return (
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
    >
        <SwiperSlide><img src="image/d1.jpg" alt="" style={{width: '100%'}}/></SwiperSlide>
        <SwiperSlide><img src="image/d2.jpg" alt="" style={{width: '100%'}}/></SwiperSlide>
        <SwiperSlide><img src="image/d3.jpg" alt="" style={{width: '100%'}}/></SwiperSlide>
        <SwiperSlide><img src="image/d4.jpg" alt="" style={{width: '100%'}}/></SwiperSlide>
    </Swiper>
  )
}

export default Slider