"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useState } from 'react';

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full overflow-hidden mt-10 flex items-center justify-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Add your modules
        spaceBetween={0}
        slidesPerView={3}
        centeredSlides={true} // Centers the active slide
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }} // Auto play
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Set the active index on slide change
        className="min-w-[130vw] h-[35rem] flex items-end justify-center overflow-visible"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="aspect-video w-[48rem]">
            <SlideContent
              image={image}
              index={index}
              activeIndex={activeIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// Helper component for each slide
const SlideContent = ({ image, index, activeIndex }) => {
  // Calculate whether this is the centered slide when showing 3 slides
  const isCenterSlide = index === activeIndex 
//   || index === (activeIndex + 1) % 3;

  return (
    <div className="flex justify-center items-end w-full">
      <Image
        src={image} // Make sure "image" is a valid URL
        alt={`Slide ${index + 1}`}
        className={`object-cover rounded-lg ${isCenterSlide ? "w-full z-10" : "w-[80%] mt-20"} transition-transform duration-500 ease-in-out`}
      />
    </div>
  );
};

export default Carousel;