import React from "react";
import Image from 'next/image';

function Courselist({ name, img, para }) {
  return (
      <div className="w-full px-6 flex justify-center items-center  rounded-3xl bg-transparent bg-white w-full h-44 md:h-60 bg-opacity-[20%] ">

        <Image src={img} className=" w-32 md:w-44 rounded-3xl " alt={name} />
        <div className="flex flex-col ml-3 text-sm text-white font-monospace">
          <p className=" font-semibold">{name}</p>
          <p className="">{para}</p>
          <button className="  ">REGISTER
          </button>
        </div>
    </div>
  );
}

export default Courselist;
