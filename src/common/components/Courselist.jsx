import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { courseNameAdd } from "../../../redux/slices/courseRegister";

function Courselist({ courseData }) {
  const router = useRouter();
  const imageUrl = courseData.courseImage.asset.url;
  const data = useSelector((state) => state.register.value);
  const dispatch = useDispatch();

  const [courseName, setCourseName] = useState("");
  const arryobj = [
    {
      courseName: "courseName",
      price: "500",
      courseImage: "url",
    },
    {
      courseName: "courseName",
      price: "500",
      courseImage: "url",
    },
  ];
  return (
    <div className="w-full overflow-x-hidden px-6 flex flex-col gap-5 xs:gap-0 xs:flex-row justify-start py-4  items-center  rounded-3xl bg-transparent bg-white xs:h-52 md:h-60 bg-opacity-[20%] ">
      <Image
        width={100}
        height={100}
        src={imageUrl}
        className=" w-32 h-28 md:h-44 md:w-44 rounded-3xl "
        alt={"image"}
      />
      <div className="flex text-wrap xs:h-32 md:h-44 justify-around items-center xs:items-start flex-col xs:ml-5 md:ml-10 text-sm text-white font-monospace gap-4 xs:gap-y-2">
        <p className="text-lg md:text-xl font-semibold tracking-widest text-wrap">
          {courseData.title}
        </p>
        <p className="text-xs md:text-sm xs:text-left text-center text-wrap">
          {courseData.description}
        </p>
        {courseData.commingsoon ? (
          <button className="className={` bg-white text-center text-black w-24 text-xs md:text-normal md:w-32  py-2 rounded-lg tracking-widest`}">
            Coming Soon
          </button>
        ) : (
          <div className="flex xs:flex-row flex-col gap-4">
            <button
              onClick={() => {
                dispatch(courseNameAdd(courseData.title));
                localStorage.setItem("courseName", courseData.title);
                router.push("/registration");
              }}
              className={` bg-white text-center text-black w-24 text-xs md:text-normal md:w-32  py-2 rounded-lg tracking-widest`}
            >
              REGISTER
            </button>
            <button
              onClick={() => {
                router.push(`/courses/${courseData.slug.current}`);
              }}
              className={` bg-white text-center text-black w-24 text-xs md:text-normal md:w-32  py-2 rounded-lg tracking-widest`}
            >
              Know More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Courselist;
