import React from "react";
import { NavLink } from "react-router-dom";
import AviationImg from "../../assets/images/sitemap/Aviation-Airline-Industry.jpg";
import airlineCargoStaffImg from "../../assets/images/sitemap/aviation/aviation-airline-ind-airline-cargo-staff.jpg";
import airlinesGroundStaffImg from "../../assets/images/sitemap/aviation/aviation-airline-ind-airlines-ground-staff.jpg";
import airHostessImg from "../../assets/images/sitemap/aviation/aviation-airline-ind-air-hostess.jpg";
import airTrafficControllerImg from "../../assets/images/sitemap/aviation/aviation-airline-ind-air-traffic-controller.jpg";
import flightOperatorImg from "../../assets/images/sitemap/aviation/aviation-airline-ind-flight-operator.jpg";
import maintenancePersonnelImg from "../../assets/images/sitemap/aviation/aviation-airline-ind-maintenance-personnel.jpg";
import psychologistImg from "../../assets/images/sitemap/aviation/aviation-airline-ind-psychologist.jpg";
import captainsImg from "../../assets/images/sitemap/aviation/aviation-airline-ind-captains.jpg";
import trainingCaptainsImg from "../../assets/images/sitemap/aviation/aviation-airline-ind-training-captains.jpg";
import simulatorInstructorsImg from "../../assets/images/sitemap/aviation/aviation-airline-ind-air-traffic-simulator-instructors.jpg";
import flightEngineersImg from "../../assets/images/sitemap/aviation/aviation-airline-ind-flight-engineers.jpg";
import sheetMetalWorkersImg from "../../assets/images/sitemap/aviation/aviation-airline-ind-air-traffic-sheet-metal-workers.jpg";
import licensedEngineersImg from "../../assets/images/sitemap/aviation/Scaffolder.jpg"; // Adjusted to correct file name
import fittersImg from "../../assets/images/sitemap/aviation/aviation-airline-ind-fitters.jpg";
import mechanicsImg from "../../assets/images/sitemap/aviation/aviation-airline-ind-air-traffic-mechanics.jpg";
import plannersImg from "../../assets/images/sitemap/aviation/aviation-airline-ind-planners.jpg";
import CarouselItems from "../common/CarouselItems";
import { Helmet } from "react-helmet";

const AviationJob = () => {
  const images = [
    airlineCargoStaffImg,
    airlinesGroundStaffImg,
    airHostessImg,
    airTrafficControllerImg,
    flightOperatorImg,
    maintenancePersonnelImg,
    psychologistImg,
    captainsImg,
    trainingCaptainsImg,
    simulatorInstructorsImg,
    flightEngineersImg,
    sheetMetalWorkersImg,
    licensedEngineersImg,
    fittersImg,
    mechanicsImg,
    plannersImg,
  ];

  const titles = [
    "Airline Cargo Staff",
    "Airlines Ground Staff",
    "Air hostess",
    "Air Traffic Controller",
    "Flight Operator",
    "Maintenance Personnel",
    "Psychologist",
    "Captains",
    "Training Captains",
    "Simulator Instructors",
    "Flight Engineers",
    "Sheet Metal Workers",
    "Licensed Engineers",
    "Fitters",
    "Mechanics",
    "Planners",
  ];

  const altTexts = [
    "Aviation Management Jobs",
    "Aircraft Mechanic Jobs",
    "Air hostess Jobs In Gulf",
    "Air Traffic Controller Jobs In Gulf",
    "Flight Operator Jobs In Gulf",
    "Maintenance Personnel Jobs In Gulf",
    "Psychologist Jobs In Gulf",
    "Captains Jobs In Gulf",
    "Training Captains Jobs In Gulf",
    "Simulator Instructors Jobs In Gulf",
    "Flight Engineers Jobs In Gulf",
    "Sheet Metal Workers Jobs In Gulf",
    "Licensed Engineers Jobs In Gulf",
    "Fitters Jobs In Gulf",
    "Mechanics Jobs In Gulf",
    "Planners Jobs In Gulf",
  ];

  return (
    <div>
      <Helmet>
      <title>Aviation Management Jobs, Aircraft Mechanic Jobs | Angel Gulf Jobs</title>
<meta name="keywords" content="Aviation Management Jobs, Aircraft Mechanic Jobs, airport management jobs, aviation industry, airline jobs, jobs in Dubai, jobs in Abu Dhabi, jobs in Oman, jobs in Gulf" />
<meta name="description" content="Apply for aviation management jobs in entire gulf region. Get latest offers on aircraft mechanic jobs and airline jobs in Saudi, Dubai, Abu Dhabi." />
<link rel="canonical" href="https://www.angelgulfjobs.com/aviation-airline-industry"/>
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${AviationImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">
                    Aviation Management Jobs
                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Hospitality Industry Jobs</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}
        <div>
          <div className="section-full p-t30 p-b50 bg-white">
            <div className="container">
              <div className="section-content">
                <div className="row">
                  <div>
                    <h4>Industries We Serve</h4>
                    <p>
                      Angel Gulf Jobs is a full-service overseas manpower agency
                      promoted by highly experienced professionals having worked
                      across different sectors in the Gulf region. Apply for
                      aviation management jobs in entire gulf region. Get latest
                      offers on aircraft mechanic jobs and airline jobs in
                      Saudi, Dubai, Abu Dhabi. The exposure derived by promoters
                      in their work life across different sectors has helped
                      them to provide services across a wide range of
                      industries. As far as Gulf region is concerned, Angel Gulf
                      Jobs serves all the top sectors including construction,
                      oil & gas, hospitality, banking, shipping and more. Above
                      all, the biggest strength of Angel Gulf Jobs lies in its
                      database of candidates which is spread across different
                      work categories making it possible to serve almost all the
                      important industries across entire Gulf & other regions.
                    </p>
                  </div>
                  {/* Carousel in col-lg-3 */}
                  <div className="col-lg-6 col-md-12">
                    <div className="carousel-wrapper p-3">
                      <div className="carouselbackground">
                        <h5 className="text-center fw-semibold text-white py-2 px-1">
                          Here is a listing of major job categories in the
                          aviation & airline industry that we recruit for:
                        </h5>
                      </div>

                      <CarouselItems
                        images={images}
                        titles={titles}
                        altTexts={altTexts}
                      />
                      {/*  */}
                    </div>
                  </div>
                  {/* Empty col-lg-9 */}
                  <div className="col-lg-6 col-md-12">
                    {/* This section is empty for now */}
                    <h4 className="mt-3 mt-md-0">
                      Aviation / Airline Industry
                    </h4>
                    <p>
                      The GCC aviation / airline industry has grown steadily
                      over the past few decades and outpaced most other regional
                      markets owing to favourable demographics and strong
                      infrastructure. Additionally, the region capitalizes on
                      its strategic location (between the East and the West),
                      which connects nearly two-thirds of the global population
                      within eight hours. The number of passengers transported
                      by GCC-based airlines increased at a CAGR of 14% to about
                      150 million in 2014 from 42 million in 2004. Moreover, the
                      global market share of GCC airlines (based on the number
                      of passengers) increased from about 2% in 2004 to 4.6% in
                      2014, indicating the growing importance of the GCC
                      aviation sector. The passenger and cargo traffic has grown
                      significantly across all the GCC states contributing to a
                      great extent to the economic development of the entire
                      Gulf region by generating huge number of aviation airline
                      jobs.{" "}
                    </p>
                  </div>
                  <p className="mt-2">
                    Large scale industrialization and commercial activities
                    including tourism has resulted into very high growth of
                    aviation & airline industry within the GCC states. The Gulf
                    countries are spending heavily in expanding and modernizing
                    their aviation industry. Heavy investment is done towards
                    replacing the existing air-crafts, followed by wide-spread
                    addition to the fleet of their air-crafts. Investment is
                    also done heavily in modernizing and constructing new air
                    ports, maintenance facilities, cargo handling and more.
                    There is also huge investment done across the sector into
                    training new personnel at all the levels. Emirates, Etihad
                    and Qatar Airway are breaking all records and creating huge
                    demand for trained airline personnel across different
                    aviation airline job functions.{" "}
                  </p>
                  <p>
                    We at Angel Gulf Jobs, as a specialized aviation airline job
                    consultant understand our responsibility towards the
                    aviation industry in the Gulf and ensure to supply the best
                    of trained air-line personnel at all the levels within short
                    notice. We strongly believe in pre-preparation and hence do
                    maintain a large database of aviation / airline / cargo
                    professionals to best suit the job role in the industry. To
                    conclude, we, at Angel Gulf Jobs act as trustworthy referral
                    agent and enable the clients throughout the Gulf region to
                    have an access to the best talented aviation airline work
                    force from aviation airline industry.
                  </p>

                  <p>
                    Aviation airline companies in Gulf may send in their enquiry
                    for our recruitment services
                    <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>

                  <p>
                    As far as job seekers are concerned we take utmost care that
                    we only keep latest aviation jobs, airline jobs in our
                    database and help them with the most rewarding career in the
                    aviation airline industry. Job seekers may register with us
                    for FREE
                    <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AviationJob;
