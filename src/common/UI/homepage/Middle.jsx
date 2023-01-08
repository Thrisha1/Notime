import React from "react";
import Image from "next/image";
import Standingboy from "../../../../public/assets/standingboy.png"

const Middle = () => {
  return (
    <div className="flex w-full">
      <div className="flex w-1/2 items-center justify-center">
        <Image src={Standingboy} className="" alt="" />
      </div>
      <div className="w-1/2 flex flex-col  px-20 text-white items-center justify-center ">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          placeat eveniet? Minima quae a pariatur nobis labore, provident amet
          harum consequatur ipsum voluptatum magnam eligendi expedita, earum
          libero itaque voluptas laboriosam molestias aliquid error eius
          officia. Sapiente provident vero ratione recusandae, rem facilis
          accusantium natus?
        </p>
        <button className=" border-2 border-white self-start my-10 bg-white hover:bg-blue-200 fond-bold rounded-lg text-black px-10 py-2.5 ml-0 w-max  hover:text-white hover:bg-gradient-to-r from-purple-900 via-purple-700 to-blue-500 font-semibold tracking-widest" >EXPLORE</button>
      </div>
    </div>
  );
};

export default Middle;
