import Image from "next/image";
import React from "react";
import Reactimg from "../.././../../public/assets/reactimg.png";
import Weprovide from "../../components/We_provide";
import Intership from "../../../../public/assets/internship.png";
import Jobs from "../../../../public/assets/jobs.png";

function Test() {
  return (
    <div className="text-center text-5xl tracking-widest font-bold">
      <h1 className="text-white">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-indigo-800 to-blue-800">WE PRO</span>VIDE
      </h1>
      <div className="flex w-full justify-between">
        <Weprovide name="COURSES" img={Reactimg} />
        <Weprovide name="INTERNSHIP" img={Intership} />
        <Weprovide name="JOBS" img={Jobs} />
      </div>
    </div>
  );
}

export default Test;
