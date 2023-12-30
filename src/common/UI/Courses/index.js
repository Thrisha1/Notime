import React from "react";
import Navbar from "../../components/Navbar"
import Courselist from "../../components/Courselist"
import htmlcssjs from "../../../../public/assets/htmlcssjs1.png"
import reactimg from "../../../../public/assets/react-img.png"
import django from "../../../../public/assets/django.png"
import next from "../../../../public/assets/next.png"
import Footer from '../../components/Footer.jsx'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { client } from "../../../../sanity/lib/client";

const index = () => {
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const query = `*[_type == "course"] {
      title,
      slug,
      description,
      courseImage {
        asset -> {
          _id,
          url
        }
      },
      learningObjectives,
      topics,
      prerequisites,
      mentors
    }`;


  useEffect(() => {
    client.fetch(query)
      .then((data) => {
        console.log('Fetched data:', data);
        setCourses(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <p className=" bg-clip-text  text-white   font-bold text-2xl md:text-3xl my-10 tracking-widest ml-[42px] mt-[50px] ">
        Our Courses
      </p>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-7 mx-10  gap-5 ">

        {courses?.map((course, index) => (

          <Courselist key={index} courseData={course} />
        ))}


      </div>

      <Footer />
    </div>


  );
};

export default index;
