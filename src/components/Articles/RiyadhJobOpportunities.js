import React from "react";
import { NavLink } from "react-router-dom";
import Riyadhimg from '../../assets/images/articles/jobs-in-riyadh-1.jpg';
import { Helmet } from "react-helmet";

const RiyadhJobOpportunities = () => {
  return (
    <div>
      <Helmet>
      <title>Jobs in Riyadh, Job Vacancy in Riyadh | Angel Gul Jobs</title>
<meta name="keywords" content="Jobs in Riyadh, Job Vacancy in Riyadh, oil & gas jobs in Riyadh, civil jobs in Riyadh, medical jobs in Saudi Arabia, banking jobs in Saudi Arabia, IT jobs in Saudi Arabia, hospitality jobs in Saudi Arabia"/>
<meta name="description" content="Apply for latest jobs in Riyadh. As Riyadh is the main financial hub has enormous job vacancy in Riyadh, in industries like oil & gas, civil, banking, IT etc."/>
<link rel="canonical" href="https://www.angelgulfjobs.com/jobs-in-riyadh"/>   
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${Riyadhimg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">Jobs In Riyadh
                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>Jobs In Riyadh
                  </li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}
        {/* Employer Detail START */}
        <div className="section-full  p-t20 p-b40 bg-white">
          <div className="container">
            <div className="section-content">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-10 col-md-12">
                  {/* Candidate detail START */}
                  <div className="cabdidate-de-info">
                    {/* <h4 className="twm-s-title">About Company</h4> */}
                    <h2 className="twm-s-title blueuText">
                    Find the Best Jobs in Riyadh with Angel Gulf Jobs.
                    </h2>

                    <p>
                    Riyadh is the capital of Saudi Arabia, and also the most developed city. It underwent a massive and once-in-lifetime transformation in recent years that has left a lasting effect on it. The crusade has created many <strong> jobs in Riyadh </strong> for the young population of Saudi as well as foreign expats.
                    </p>
                    <p>
                    If you are aspiring to work in Riyadh, and looking for job opportunities, the team of Angel Gulf Jobs will help you with the same. We are a professionally managed overseas manpower agency having years of experience in the field. We help aspirants find jobs that match their profile and skills across sectors in Riyadh/Gulf region. You can use this platform to search latest jobs in Riyadh and also to get complete guidance with regard to the openings, like salary, location, skills required, etc.
                    </p>
                    <p>Driven by the vision of 2030, the country is transforming its whole structure to circumvent over-dependency on the oil industry. As a part of the move, it is promoting private sector investment, and nurturing an entrepreneurial environment to boost youth participation in the development of country’s economy.

</p>
                   
                    <p>
                    Although finding a job in Saudi Arabia is not as easy as it was, with the assistance of a consultant, it is achievable. Connect with the team of Angle Gulf Jobs for further assistance. You can find with us the latest <strong> job vacancy in Riyadh, </strong> high-paying job vacancies, etc.
                    </p>
                   
                    <p>
                      Register here for suitable job opportunities:{" "}
                      <NavLink href="#">Register</NavLink>
                    </p>
                    <p>
                      Courtesy: <NavLink to="/"> Gulf Job Consultants</NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Employer Detail END */}
      </div>
      {/* CONTENT END */}
    </div>
  );
};

export default RiyadhJobOpportunities;
