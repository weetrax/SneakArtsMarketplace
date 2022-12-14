import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

type CarouselCoverflowProps = {
  items?: React.ReactNode[];
};

const CarouselCoverflow: React.FC<CarouselCoverflowProps> = ({ items }) => {
  return (
    <Swiper
      loop={true}
      speed={1000}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      breakpoints={{
        316: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        700: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
      }}
      coverflowEffect={{
        rotate: 10,
        stretch: 20,
        depth: 350,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{
        clickable: true,
      }}
      slideToClickedSlide
      modules={[EffectCoverflow, Pagination, Autoplay]}
    >
      {items?.map((x, i) => {
        return <SwiperSlide key={`s${i}`}>{x}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default CarouselCoverflow;
