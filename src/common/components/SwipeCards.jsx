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

//import required images
import img from "../../../public/swiper-img/nextjs.png";

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
          <CourseCard num="1" img={img} name="React JS" prize="₹499"/>
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard num="2" img={img} name="Next JS" prize="₹499" />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard num="3" img={img} name="Django" prize="₹499"/>
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard num="4" img={img} name="HTML/CSS/JavaScript" prize="₹499" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}