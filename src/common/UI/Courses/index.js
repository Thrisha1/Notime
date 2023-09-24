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
    <div>
      <Navbar />
      <p className=" bg-clip-text  text-white   font-bold text-2xl md:text-3xl my-10 tracking-widest ml-[42px] mt-[50px]">
            our Courses 
      </p>
      <div className="flex flex-row ml-[45px] gap-7">
       <Link href="/registration"> 
      <Courselist name="HTML/CSS/JS" img={htmlcssjs} para="Introduction to HTML,CSS,JS, main languages to build website" />
      </Link>
      <Link href="/registration">
      <Courselist name="REACT JS" img={reactimg} para="Introduction to React JS, a library for building UI components" />
      </Link>
        </div>
        <div className="flex flex-row ml-[45px] gap-7">
      <Link href="/registration">   
      <Courselist name="NEXT JS" img={next} para="Introduction to Next JS, a framework of React" />
      </Link>
      <Link href="/registration">
      <Courselist name="DJANGO"  img={django} para="Indroduction to django , a high-level Python web framework that enables rapid development of secure and maintainable websites  "/>
      </Link>
      </div> 
      <Footer/>
    </div>
  );
};

export default index;
