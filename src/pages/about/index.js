import React from "react";
import HomePage from '../../common/UI/homepage/about/About.jsx';
import About from "../../common/UI/homepage/about/About.jsx";
import Navbar from "../../common/components/Navbar.jsx";

const Index = () => {
  return (
    <div className="h-screen overflow-y-hidden">
      <Navbar/>
      <About />
    </div>
  );
};

export default Index;
