import React from 'react';
// Import Swiper React components
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFlip, EffectFade, EffectCube, EffectCoverflow, EffectCards, EffectCreative} from 'swiper/modules';

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFlip, EffectFade, EffectCube, EffectCoverflow, EffectCards, EffectCreative]}
      spaceBetween={0}
      effect="fade"
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide><img src="/public/image/d1.jpg" alt="" className='object-cover w-full h-screen'/></SwiperSlide>
      <SwiperSlide><img src="/public/image/d2.jpg" alt="" className='object-cover w-full h-screen'/></SwiperSlide>
      <SwiperSlide><img src="/public/image/d3.jpg" alt="" className='object-cover w-full h-screen'/></SwiperSlide>
      <SwiperSlide><img src="/public/image/d4.jpg" alt="" className='object-cover w-full h-screen'/></SwiperSlide>
    </Swiper>
  )
}

export default Slider
