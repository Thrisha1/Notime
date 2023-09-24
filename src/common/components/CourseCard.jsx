import React from "react";
import Image from "next/image";
import Link from "next/link";
import StarsCollect from "./StarsCollect";
const CourseCard = ({name,img,prize}) => {
  return (
    <div className="w-full max-w-sm h-80 border  rounded-lg shadow bg-gradient-to-r from-gray-600  to-blue-300 border-gray-700 text-white">
      <a href="#">
      <Image
          width={100}
          height={100}
          className="object-cover p-8 rounded-t-lg w-60 h-44"
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
            href="/courses"
            class="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-r from-purple-900  to-blue-500"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;