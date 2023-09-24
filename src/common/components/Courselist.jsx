import React from "react";
import Image from 'next/image';

function Courselist({ name, img, para }) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center  rounded-3xl bg-transparent bg-white w-full h-60 bg-opacity-[20%] ">

        <Image src={img} className="w-[233px] h-[211px] absolute  mt-[3px]  lg:mr-[27rem] sm:mr-[22rem] rounded-3xl  " alt={name} />
        <div className="flex flex-col ml-3 mt-5 lg:gap-0 ">
          <p className="font-montserrat text-[24px] font-semibold leading-29 tracking-wider ml-[18rem]  text-white  mb-[1rem]">{name}</p>
          <p className="font-sans text-base font-semibold leading-tight tracking-tight ml-[18rem] text-[#94a3b8] ">{para}</p>
          <button className=" text-[20px] sm:text-2xl  sm:tracking-[10px] ml-[290px]  w-[200px] bg-gray-300 py-6 md:py-3  text-dark  font-bold rounded-lg my-10 md:my-7  ">REGISTER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Courselist;
