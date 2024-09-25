"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

const Carousel = ({ images }) => {
    const imageRef = useRef(null)
    const [ imageHeight, setImageHeight ] = useState(0);

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
          for (let entry of entries) {
            if (entry.contentRect) {
              setImageHeight(entry.contentRect.height);
            }
          }
        });
    
        if (imageRef.current) {
          observer.observe(imageRef.current);
        }
    
        return () => {
          if (imageRef.current) {
            observer.unobserve(imageRef.current);
          }
        };
      }, []);

  return (
    <div className="w-full overflow-hidden flex items-center justify-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Add your modules
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true} // Centers the active slide
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }} // Auto play
        loop={true}
        height={imageRef && (imageRef + 30)}
        style={{ height: `${imageHeight && imageHeight + 60}px`}}
        className={`min-w-[220vw] lg:min-w-[130vw] ${imageHeight? `h-[${imageHeight + 100}px]` : ""} flex items-end justify-center overflow-visible`}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="">
            <SlideContent
              image={image}
              index={index}
              imageRef={imageRef}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// Helper component for each slide
const SlideContent = ({ image, index, imageRef }) => {

  return (
    <div ref={imageRef} className="flex justify-center items-end w-full">
      <Image
        src={image}
        alt={`Slide ${index + 1}`}
        className={`object-cover rounded-lg w-full z-10 transition-transform duration-500 ease-in-out`}
      />
    </div>
  );
};

export default Carousel;