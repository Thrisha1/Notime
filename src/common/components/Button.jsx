import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <Link href="/" className="">
      <button className="text-p_red text-lg px-3 lg:px-8 py-3 rounded-lg bg-gradient-to-br from-p_back  via-p_back   to-p_back hover:-translate-y-3 ease-in-out duration-500 drop-shadow-3xl">
        Schedule a Demo
      </button>
    </Link>
  );
};

export default Button;
