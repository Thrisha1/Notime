import React, { useState, useEffect } from "react";
import Image from "next/image";
import Threed from "../../../../public/assets/3d1.png";
import tilter from "../../../../public/assets/3d3.png";
import { motion } from "framer-motion";

const Hero = () => {
  const [change, setchange] = useState(false);
  const [contentIndex, setContentIndex] = useState(0);
  const contents = [
    "Become a Front End developer",
    "Become a Back End developer",
    "Become a UI/UX designer",
  ];

  useEffect(() => {
    if (change) {
      document.getElementById("tilted").style = "display: block";
      document.getElementById("before_tilt").style = "display: none";
    } else {
      document.getElementById("tilted").style = "display: none";
      document.getElementById("before_tilt").style = "display: block";
    }
  }, [change]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateContent();
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const updateContent = () => {
    setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
  };

  return (
    <div className="md:flex-row flex flex-col-reverse items-center">
      <div className="w-full md:w-1/2  flex flex-col justify-center items-center h-full">
        <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
          <h1 className=" text-4xl md:text-7xl font-black text-gray-300">
            {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-indigo-800 to-blue-800 ">
              NO
            </span>
            TIME
          </h1>
          <p className=" bg-clip-text  text-transparent bg-gradient-to-r from-indigo-800 via-pink-500 to-teal-400  font-bold text-2xl md:text-3xl my-10 tracking-widest">
            COURSES TO <br className="hidden md:flex" /> LEARN
          </p>
          <div className="flex gap-x-2 w-full">
            <span
              className={`text-xl font-bold text-teal-400 animated-text ${
                change ? "typing" : ""
              }`}
            >
              {contents[contentIndex]}
            </span>
          </div>
          <button className="bg-gray-300 py-6 md:py-3  text-dark tracking-widest font-bold  px-7 rounded-lg my-10 md:my-7">
            KNOW MORE
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <div
          className="animate-bouncer"
        >
          <motion.div
            className=""
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              id="before_tilt"
              onMouseEnter={() => setchange(!change)}
              className="md:w-3/4 duration-500"
              priority
              src={Threed}
              alt="..."
            />
          </motion.div>
          <motion.div
            className=""
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              id="tilted"
              onMouseLeave={() => setchange(!change)}
              className="hidden md:w-3/4 duration-500"
              priority
              src={tilter}
              alt="..."
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
