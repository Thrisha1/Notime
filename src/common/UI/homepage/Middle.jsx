import React from "react";
import Image from "next/image";
import Standingboy from "../../../../public/assets/Standingboy.png";
import SwipeCards from "../../components/SwipeCards";

const Middle = () => {
  return (
    <div className="flex flex-col md:flex-row  w-full">
      <div className="md:flex hidden  md:w-1/2 items-center justify-center">
        <Image src={Standingboy} className="" alt="" />
      </div>
      <div className="md:w-1/2 w-full flex flex-col  md:px-20 text-white items-center justify-center md:justify-around  ">
        <h1 className="w-full items-center justify-center flex gap-3 self-start text-4xl text-center mb-10 md:mb-0 md:text-left md:text-7xl font-black text-gray-300">
          OUR
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-indigo-800 to-blue-800 ">
            COURSES
          </span>
        </h1>
        <SwipeCards/>
        {/*<button className="border-2 border-white self-start self-center my-10 bg-white hover:bg-blue-200 fond-bold rounded-lg text-black px-10 py-2.5 ml-0 w-max  hover:text-white hover:bg-gradient-to-r from-purple-900 via-purple-700 to-blue-500 font-semibold tracking-widest">*/}
        {/*  EXPLORE MORE*/}
        {/*</button>*/}
      </div>
    </div>
  );
};

export default Middle;
