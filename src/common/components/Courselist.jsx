import React from "react";
import Image from 'next/image';

function Courselist({ name, img ,para }) {
  return (
    <div>
    <div id="coursebg" className="flex flex-col justify-center items-center sm:w-[200px] rounded-3xl ">
    
      <Image src={img} className="w-[233px] h-[211px] absolute  mt-[16px] mr-[23rem] rounded-3xl" alt={name}  />
     <p class="font-montserrat text-[24px] font-semibold leading-29 tracking-wider ml-[4rem]  text-white  mb-[1rem]">{name}</p>
      <p className="font-sans text-base font-semibold leading-tight tracking-tight ml-[18rem] text-[#64748b] ">{para}</p>
      <button className="text-blue text-[20px] sm:text-2xl  sm:tracking-[10px]  ml-[9rem] mt-[3rem] text-[#1e40af] ">REGISTER
          </button>
    </div>
    </div>
  );
}

export default Courselist;
