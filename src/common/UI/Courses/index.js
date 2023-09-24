import React from "react";
import Navbar from "../../components/Navbar"
import Courselist from "../../components/Courselist"
import htmlcssjs from  "../../../../public/assets/htmlcssjs1.png"
import reactimg from "../../../../public/assets/react-img.png"
import Footer from '../../components/Footer.jsx'

const index = () => {
  return (
    <div>
      <Navbar />
      <p className=" bg-clip-text  text-white   font-bold text-2xl md:text-3xl my-10 tracking-widest ml-[42px] mt-[50px]">
            our Courses 
      </p>
      <div className="flex flex-row ml-[45px] gap-7">
      <Courselist name="HTML/CSS/JS" img={htmlcssjs} para="Introduction to React JS, a library for building UI components" />
      <Courselist name="REACT JS" img={reactimg} para="Introduction to React JS, a library for building UI components" />
        </div>
        <div className="flex flex-row ml-[45px] gap-7">
      <Courselist name="next JS" />
      <Courselist name="Django" />
      </div> 
      <Footer/>
    </div>
  );
};

export default index;
