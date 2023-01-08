import Image from "next/image";
import React from "react";
import Reactimg from "../../../../../public/assets/reactimg.png";
import Weprovide from "./image_cards";
import Intership from "../../../../../public/assets/internship.png";
import Jobs from "../../../../../public/assets/jobs.png";

function Test() {
  return (
    <div className="my-40 text-center text-5xl tracking-[15px] font-bold">
      <h1 className="text-white my-20">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-indigo-800 to-blue-800">WE PRO</span>VIDE
      </h1>
      <div className="flex w-full justify-around">
        <Weprovide name="COURSES" img={Reactimg} />
        <Weprovide name="INTERNSHIP" img={Intership} />
        <Weprovide name="JOBS" img={Jobs} />
      </div>
    </div>
  );
}

export default Test;
