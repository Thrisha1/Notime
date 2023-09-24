import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import CourseCard from "./CourseCard";
import img1 from "../../../public/assets/react-img.png";
import img2 from "../../../public/assets/next.png";
import img3 from "../../../public/assets/django.png";
import img4 from "../../../public/assets/htmlcssjs1.png";
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
          <CourseCard num="4" img={img4} name="HTML/CSS/JavaScript" prize="₹499" />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard num="1" img={img1} name="React JS" prize="₹499"/>
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard num="2" img={img2} name="Next JS" prize="₹499" />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard num="3" img={img3} name="Django" prize="₹499"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}