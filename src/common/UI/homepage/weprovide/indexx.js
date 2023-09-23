import Image from "next/image";
import React from "react";
import Link from "next/link";
import Reactimg from "../../../../../public/assets/reactimg.png";
import Weprovide from "./image_cards";
import Intership from "../../../../../public/assets/internship.png";
import Jobs from "../../../../../public/assets/jobs.png";

function Test() {
  return (
    <div className="my-44 text-center tracking-[15px] font-bold">
      <div className="w-100 mb-16 flex justify-center items-center">
        <h1 className="text-4xl sm:text-7xl text-center mb-10 md:mb-0 md:text-7xl font-bold text-gray-300" >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-indigo-800 to-blue-800 ">
            WE PRO
          </span>
          VIDE
        </h1>
      </div>
      <div className="flex flex-col flex-wrap md:flex-row gap-10 px-8 w-full justify-center items-center">
          <Link href="/courses">
            <Weprovide link="/courses" name="COURSES" img={Reactimg} />
          </Link>
        <Weprovide name="INTERNSHIP" img={Intership} />
        <Weprovide name="JOBS" img={Jobs} />
      </div>
    </div>
  );
}

export default Test;
