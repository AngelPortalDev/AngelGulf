import React from "react";
import indiaFlag from "./../../assets/images/network.jpg";
import { Helmet } from "react-helmet";

const OurNetwork = () => {
  return (
    <>
    <Helmet>
      <title>Our Network</title>
    <link rel="canonical" href="https://www.angelgulfjobs.com/our-network"/>
    </Helmet>
     <div className="container bg-light py-4">
      <div className="row mt-2">
        <div className="col-lg-8">
          <img src={indiaFlag} className="img-fluid" alt="RecruitmentProcess" />
        </div>
        <div className="col-lg-4">
          <h2 className="blueuText">Our Network</h2>
          <h4 className="twm-s-title">An Extensive Reach:</h4>
          <p>
            Angel Gulf Jobs is Asia's leading Government recognized Overseas
            Placement Consultant. We have our own well-equipped modern offices
            in Mumbai, Delhi, Ahmedabad, Kochi etc and with partner offices in
            all the major cities of Asia.
          </p>
          <ul className="description-list-2">
          <h4 className="twm-s-title">Our Recruitment Network:</h4>
            <li>
              <i className="feather-check" />
              Mumbai
            </li>
            <li>
              <i className="feather-check" />
              Delhi
            </li>
            <li>
              <i className="feather-check" />Chennai
            </li>
            <li>
              <i className="feather-check" />
              Kochi
            </li>
            <li>
              <i className="feather-check" />
              Ahmedabad
            </li>
            <li>
              <i className="feather-check" />
              Rajasthan
            </li>
            <li>
              <i className="feather-check" />
              Odisha
            </li>
            <li>
              <i className="feather-check" />
              Hyderabad
            </li>
            <li>
              <i className="feather-check" />
              Jammu & Kashmir
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default OurNetwork;
