import React from "react";
import Navbar from "../../components/Navbar"
import Link from "next/link";
import Courselist from "../../components/Courselist"
import htmlcssjs from  "../../../../public/assets/htmlcssjs1.png"
import reactimg from "../../../../public/assets/react-img.png"
import django from "../../../../public/assets/django.png"
import next from "../../../../public/assets/next.png"
import Footer from '../../components/Footer.jsx'

const index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <p className=" bg-clip-text  text-white   font-bold text-2xl md:text-3xl my-10 tracking-widest ml-[42px] mt-[50px] ">
            Our Courses
      </p>
     
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-7 mx-10  gap-5 ">

        <Courselist state={0} name="HTML/CSS/JS" img={htmlcssjs} para="Introduction to HTML,CSS,JS, main languages to build website" />
        <Courselist state={1} name="REACT JS" img={reactimg} para="Introduction to React JS, a library for building UI components" />
        <Courselist state={0} name="NEXT JS" img={next} para="Introduction to Next JS, a framework of React" />
        <Courselist state={0} name="DJANGO"  img={django} para="Introduction to django, a Python web framework that enables rapid development of secure and maintainable websites  "/>
      </div> 
      
      <Footer/>
    </div>
    
    
  );
};

export default index;
