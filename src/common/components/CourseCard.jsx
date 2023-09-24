import React from "react";
import Image from "next/image";
import Link from "next/link";
import StarsCollect from "./StarsCollect";
const CourseCard = ({name,img,prize}) => {
  return (
    <div className="w-full max-w-sm  border  rounded-lg shadow bg-white border-gray-700 text-black">
      <a href="#">
      <Image
          width={100}
          height={100}
          className="object-cover p-8 rounded-t-lg w-32"
          src={img}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight ">
          {name}  
          </h5>
        </a>
        <StarsCollect />
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold ">
          {prize}
          </span>
          <Link
            href="#"
            class="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;