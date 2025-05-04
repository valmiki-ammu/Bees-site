import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import './ImageSlider.css';
import './App.css';

const images = [
  '/images/mirchi.jpg',
  '/images/chapati.jpg',
  '/images/breakfast.jpg',
  '/images/mirchi.jpg',
  '/images/chapati.jpg',
  '/images/breakfast.jpg',
];

function ImageSlider() {
  const swiperRef = useRef(null);

  const updateScales = () => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current;
    swiper.slides.forEach((slide, index) => {
      const diff = Math.abs(swiper.activeIndex - index);
      const scale = 1 - Math.min(diff * 0.15, 0.45);
      slide.style.transform = `scale(${scale})`;
      slide.style.transition = 'transform 0.4s ease';
      slide.style.zIndex = 999 - diff;
    });
  };

  useEffect(() => {
    if (!swiperRef.current) return;
    updateScales();

    swiperRef.current.on('slideChangeTransitionEnd', updateScales);

    return () => {
      if (swiperRef.current) {
        swiperRef.current.off('slideChangeTransitionEnd', updateScales);
      }
    };
  }, []);

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={5}
        centeredSlides={true}
        loop={true}
        navigation
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          updateScales(); // call on init
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="image-wrapper">
              <img src={src} alt={`Slide ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
