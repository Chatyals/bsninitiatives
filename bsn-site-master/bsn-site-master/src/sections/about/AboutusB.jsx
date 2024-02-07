import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
const AboutusB = () => {
  return (
    <div>
      <div className="About__us">
        <div className="icons1">
          <div className="one">
            <BsFacebook />
          </div>

          <div className="two">
            <BsTwitter />
          </div>

          <div className="three">
            <BsLinkedin />
          </div>
        </div>

        <div className="page1">
          <h3>ABOUT US</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutusB;
