import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import StarsCollect from "./StarsCollect";
import CourseCard from "./CourseCard";

export default function SwipeCards() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CourseCard num="1" />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard num="2" />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard num="3" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
