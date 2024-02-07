import React from "react";
import "./aboutus.scss";
import AboutusB from "./AboutusB";
import AboutusA from "./AboutusA";
// import Navbar from "../../constants/Navbar/Navbar";
import Footer from "../../homepage/footer/Footer";
const Aboutus = () => {
  return (
    <div>
       <AboutusB/>
      {/* <Navbar/> */}
     
      <AboutusA/>
      <Footer/>
    </div>
    

  );
};

export default Aboutus;
