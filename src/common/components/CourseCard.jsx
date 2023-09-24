import React from "react";
import StarsCollect from "./StarsCollect";
const CourseCard = ({name,img,prize}) => {
  return (
    <div class="w-full max-w-sm  border  rounded-lg shadow bg-gray-800 border-gray-700">
      <a href="#">
      <img
          class="p-8 rounded-t-lg"
          src={img}
          alt="product image"
        />
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-white">
          {name}  
          </h5>
        </a>
        <StarsCollect />
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-white">
          {prize}
          </span>
          <a
            href="#"
            class="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          >
            Know More
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;