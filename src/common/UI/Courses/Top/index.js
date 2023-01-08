import React from "react";
import Reactimg from "../../../../../public/assets/Courses/images/Reactjs.svg";
import python from "../../../../../public/assets/Courses/images/python.svg";
import css from "../../../../../public/assets/Courses/images/Reactjs.svg";
import TopCard from "./TopCard";
const index = () => {
  const data = [
    {
      image: Reactimg,
      coursename: "React JS",
      desc: "Learn React JS from scratch",
      no_of_people: "1000",
    },
    {
      image: Reactimg,
      coursename: "React JS",
      desc: "Learn React JS from scratch",
      no_of_people: "1000",
    },
    {
      image: Reactimg,
      coursename: "React JS",
      desc: "Learn React JS from scratch",
      no_of_people: "1000",
    },
    {
      image: Reactimg,
      coursename: "React JS",
      desc: "Learn React JS from scratch",
      no_of_people: "1000",
    },
  ];
  return (
    <div className="mx-8">
      <div className="flex flex-col gap-y-3">
        <div className="flex-start ">
          <h1 className="text-[1rem] text-[#fff] font-extrabold">
            Our Courses
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 col-auto  gap-4 ">
          {data.map((item, index) => (
            <TopCard
              key={index}
              image={item.image}
              coursename={item.coursename}
              desc={item.desc}
              no_of_people={item.no_of_people}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
