import React from "react";
import "./location.scss";

import bootstrap from "react-bootstrap";

const location = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d554051.910733324!2d8.632301261945313!3d10.14256973320528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1665525834276!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

  return (
    <div>
      <div>
        <div className="location">
          <div className="line"></div>

          <div className="text">
            <h1 className="heading">WHERE WE WORK</h1>
            <p className="para">
              BSN works in places affected by crisis, disaster and displacement
              across the 36 States of Nigeria and FCT Abuja. In addition to
              ongoing support to humanitarian actors in protracted crisis, BSN
              deploys to rapid-onset crises ranging from natural disasters to
              sudden escalations of conflict. BSN’s work directly supports
              evidence-based decision-making from the very early stages of
              humanitarian planning and delivery.
            </p>

            <iframe src={map}></iframe>

            <p className="para">
              In north-east Nigeria, approximately 10 million people are
              affected by the humanitarian crisis, and since the start of the
              conflict in 2009, more than 71,000 people have been killed and 2.7
              million displaced. Furthermore, banditry and farmer-herder
              violence has killed more than 21,000 people and displaced hundreds
              of thousands of people. In spite of the turmoil and the critical
              humanitarian conditions faced by the conflict-affected
              populations, significant proportions of the displaced have begun
              to return to their areas of origin with over 6 million of people
              still in various camps across the country. Humanitarian actors
              working in Nigeria continue to face significant information gaps
              lacking required granular and comprehensive evidence to
              efficiently inform their response planning. BSN will continues to
              provide up to date data to support actors working to address the
              humanitarian needs of vulnerable groups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default location;
