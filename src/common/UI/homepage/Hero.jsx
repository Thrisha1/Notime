import React from "react";
import Image from "next/image"
import Threed from '../../../../public/assets/3d_character.png'

const Hero = () => {
  return (
    <div className="h-screen flex">
      <div className="w-1/2   flex flex-col justify-center items-center h-full">
        <div className="">
          <h1 className="text-7xl font-black text-gray-300">
            {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-indigo-800 to-blue-800 ">NO</span>TIME
          </h1>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 via-pink-500 to-teal-400  font-bold text-3xl my-10 tracking-widest">
            GAMIFIED <br /> LEARNING COURSES.
          </p>
          <p className="text-lg font-bold text-teal-400">
            An Interesting play for a better tomorrow
          </p>
          <button className="bg-gray-300  text-dark tracking-widest font-bold  px-7 py-3 rounded-lg my-10">
            KNOW MORE
          </button>
        </div>
      </div>
        <div className="w-1/2">
            <Image className="w-3/4" priority  src={Threed}  alt="..." />
        </div>
    </div>
  );
};

export default Hero;
