import { getSession,useSession} from "next-auth/react";
import React, { useEffect } from "react";
import {useRouter} from "next/router";


export default function About() {
  const {data:session} = useSession()
  const router = useRouter()

  return (
    <>
      <div
        id="whynotime"
        className="flex flex-col-reverse justify-center items-center text-justify md:text-left md:flex-row w-full my-32 "
      >
        <div className="w-5/6 md:w-1/2 flex justify-center items-center text-white">
          <p className="w-100 md:w-5/6">
            NoTime is the ultimate destination for those who want to make the
            most of their time. Our platform provides a flexible and convenient
            learning experience, allowing individuals of all backgrounds and
            schedules to access practical skills that can be applied in real
            life. With NoTime, you wll not only learn but also earn rewards as
            you progress, keeping you motivated on your educational journey. Our
            vibrant learning community ensures you are never alone on this path,
            as you collaborate and grow together with fellow learners and expert
            instructors. Join us at NoTime, where you can unlock your true
            potential, advance your career, and seize every moment.
          </p>
        </div>
        <div className="w-100 md:w-1/2 flex justify-center items-center">
          <h1 className=" text-4xl text-center mb-10 md:mb-0 md:text-right md:text-7xl font-black text-gray-300">
            WHY <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-indigo-800 to-blue-800 ">
              NO
            </span>
            TIME?
          </h1>
        </div>
      </div>
    </>
  );
}

// cerate a server side prop and get teh session from get Session and then if session is not there the go to "/"
// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// }
