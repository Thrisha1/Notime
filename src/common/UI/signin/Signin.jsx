import React from "react";
import Navbar from "../../components/Navbar";
import SignSec from "./SignSec";
import Image from "next/image";

const Signin = () => {
  return (
    <div className="p-2 md:px-10">
      <Navbar />
      <div className="flex lg:mt-10 items-center justify-center">
        <div className="w-1/2  items-center justify-center hidden lg:flex">
          <Image
            src="https://www.droptica.com/sites/droptica.com/files/inline-images/wise-fintech-website.png"
            alt=""
            width={500}
            height={500}
            className=""
          />
        </div>
        <div className="w-100 lg:w-1/2">
          <SignSec />
        </div>
      </div>
    </div>
  );
};

export default Signin;
