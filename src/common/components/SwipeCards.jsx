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
import img1 from "../../../public/assest/react.png";
import img2 from "../../../public/swiper-img/nextjs.png";
import img3 from "../../../public/assets/python.png";
import img4 from "../../../public/assets/html.png";
export default function SwipeCards() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-white bg-opacity-50">
          <CourseCard num="1" img={img1} ame="React JS" prize="₹499"/>
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard num="2" img={img2} name="Next JS" prize="₹499" />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard num="3" img={img3} name="Django" prize="₹499"/>
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard num="4" img={img4} name="HTML/CSS/JavaScript" prize="₹499" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}