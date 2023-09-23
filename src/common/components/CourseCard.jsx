import React from "react";
import StarsCollect from "./StarsCollect";

const CourseCard = ({num}) => {
  return (
    <div class="w-full max-w-sm  border  rounded-lg shadow bg-gray-800 border-gray-700">
      <a href="#">
        <img
          class="p-8 rounded-t-lg"
          src="https://imgs.search.brave.com/NM6wLqFI67ami13vM2Y4rABXihpEGRQJ9hdmvi3bcCg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMCphVGJiNWhI/THpnSHdRQlpu"
          alt="product image"
        />
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-white">
            React Developer {num}
          </h5>
        </a>
        <StarsCollect />
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-white">
            $599
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