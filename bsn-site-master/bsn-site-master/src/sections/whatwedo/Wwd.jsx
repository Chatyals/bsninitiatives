import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import "./wwd.scss";
import publication from "../../../src/assets/publication.png";
import sensors from "../../../src/assets/sensors.png";
import webmap from "../../../src/assets/webmap.png";
import access from "../../../src/assets/access.png";
import map from "../../../src/assets/map.png";
import Footer from "../../homepage/footer/Footer";

const Wwd = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <div className="whatwd">
        <div className="icons2">
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

        <div className="page2">
          <h3>WHAT WE DO</h3>
        </div>
      </div>

      <div class="expertise">
        <div className="line6"></div>
        <div class="row">
          <div class="col">
            <h3 className="heading4">EXPERTISE</h3>
          </div>
          <div class="col">
            <div>
              <div class="col">
                <h3 className="heading12">DATA COLLECTION & ANALYSIS</h3>
                <div class="row ">
                  <div class="col">
                    <img
                      src={access}
                      alt=""
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                  <div class="col">
                    <h4>Inter-agency assessments</h4>
                    <p>
                      BSN conducts and facilitates field-based assessments in
                      its 36 + FCT Abuja of operation. All assessments are a
                      collaborative effort led by dedicated teams of data
                      collectors, encoders and analysers.
                    </p>
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <img
                      src={sensors}
                      alt=""
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                  <div class="col">
                    <h4>Remote sensing</h4>
                    <p>
                      BSN uses remote-sensing and satellite imagery analysis as
                      complementary tools for rapid primary data collection,
                      damage assessments and the mapping of the impact of
                      disasters and crises.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <h3 className="heading12">DATA DISSEMINATION</h3>
                <div class="row ">
                  <div class="col">
                    <img
                      src={publication}
                      alt=""
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                  <div class="col">
                    <h4>Publication</h4>
                    <p>
                      BSN teams analyse and disseminate information to aid
                      actors in the form of tailor-made products such as
                      reports, context profiles, situation overviews and
                      factsheet.
                    </p>
                  </div>
                </div>

                <div class="row align-items-start">
                  <div class="col">
                    <img
                      src={map}
                      alt=""
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                  <div className="col">
                    <h4>Maps</h4>
                    <p>
                      BSN produces maps that visualize information ranging from
                      the scale of damage due to conflict to the location of
                      critical infrastructure or displacement sites.
                    </p>
                  </div>
                </div>

                <div class="row align-items-start">
                  <div className="col">
                    <img
                      src={webmap}
                      alt=""
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                  <div className="col">
                    <h4>Web-maps & online dashboards</h4>
                    <p>
                      BSN develops interactive web-maps and online dashboards to
                      allow aid actors to access and utilise information in
                      their programming. Open and transparent, the information
                      can be used by actors to design an effective response.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="heading5">STRATEGIC FRAMEWORK</h3>
        <h3 className="heading11">MULTI-SECTORAL PLANNING</h3>
        <p className="note">
          BSN conducts independent multi-sector and sectoral assessments that
          inform humanitarian decision-making. We also facilitate:
        </p>
        <div
          class="accordion"
          id="accordionExample"
          style={{ width: "70%", marginLeft: "20%" }}
        >
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                MULTI-SECTOR ASSESSMENTS
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>BSN</strong> also support multi-sectoral assessments
                support specific humanitarian milestones such as the
                Humanitarian Needs and Response Plans on Crisis-wide and
                inter-agency
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                HUMANITARIAN SITUATION MONITORING
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>Regular humanitarian </strong> situation monitoring
                provides multi-sectoral, granular and up-to-date information on
                the humanitarian needs of crisis affected populations, including
                in hard to reach areas.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                RAPID ASSESSMENTS
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>Rapid assessments</strong> inform immediate
                decision-making and aid responses following sudden shifts in
                conditions, changes in dynamics and rapid developments in
                humanitarian situations.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                CLUSTER SUPPORT
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>
                  BSN partners with the Clusters to support assessments
                </strong>{" "}
                , information management and planning. We serve as local hub for
                assessment on Global WASH and Shelter Clusters.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                CASH
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>BSN supports humanitarian actors</strong> to plan and
                monitor the use of cash as a response modality.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingSix">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                DISPLACEMENT AND MIGRATION
              </button>
            </h2>
            <div
              id="collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>Displacement and migration </strong> are at
                unprecedented levels across the world. BSN informs policy-makers
                and response planning by providing information on:
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingSeven">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                CAMP & HOST
              </button>
            </h2>
            <div
              id="collapseSeven"
              class="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong> Assessments on needs and vulnerabilities</strong> of
                internally displaced people, refugees and migrants as well as
                host communities across camps, villages and cities impacted by
                displacement and migration.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingEight">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                MOVEMENTS AND INTENTIONS
              </button>
            </h2>
            <div
              id="collapseEight"
              class="accordion-collapse collapse"
              aria-labelledby="headingEight"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong> Tracking movements and numbers</strong> of internally
                displaced people and returnees, while shedding light on movement
                and return intentions and vulnerabilities.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingNine">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNine"
                aria-expanded="false"
                aria-controls="collapseNine"
              >
                MIXED MIGRATION
              </button>
            </h2>
            <div
              id="collapseNine"
              class="accordion-collapse collapse"
              aria-labelledby="headingNine"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>
                  {" "}
                  Understanding push and pull factors, intentions and
                  vulnerabilities{" "}
                </strong>
                of migrants in their countries of origin, along the migration
                routes and in their countries of destination.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Wwd;
