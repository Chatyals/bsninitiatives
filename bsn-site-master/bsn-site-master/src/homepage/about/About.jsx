import React from "react";
import "./about.scss";
import about from "../../assets/about.jpg";
import { useEffect } from "react";

const About = () => {
  return (
    <div>
      <div className="About">
        <div className="about__img">
          <img
            src={about}
            alt="about us"
            style={{ width: "560px", height: "600px" }}
            className="img"
          />
        </div>

        <div className="article">
          <h1>WHAT WE DO</h1>

          <h3>Providing Information for a more Desired Humanitarian Action</h3>
          <hr />

          <p>
            <span> Beacon Support For The Needy Initiative (BSN)</span> is a
            leading global humanitarian initiative that aims to strengthen
            evidence-based decision-making by Non-Governmental Organizations
            (NGOs), civil society organisations (CSOs) and decision-makers
            through regular and efficient data collection, management and timely
            information and in-depth analysis from contexts of disaster, crisis
            and displacement. The work of <span>BSN</span> directly feeds into
            aid response by providing accessible and precise information on the
            humanitarian situation of crisis-affected populations in which felt
            needs of the vulnerable women and children and excluded are
            addressed. Created in 2022, <span>BSN</span> will conduct activities
            in support of inter-agency coordination mechanisms in the field to
            enable more efficient aid planning and response.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
