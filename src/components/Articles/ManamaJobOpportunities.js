import React from 'react'
import { NavLink } from "react-router-dom";
import ManmamaImg from '../../assets/images/articles/jobs-in-manama-1.jpg'
import { Helmet } from 'react-helmet';

const ManamaJobOpportunities = () => {
  return (
    <div>
      <Helmet>
      <title>Jobs in Manama, Jobs in Manama Bahrain | Angel Gulf Jobs</title>
<meta name="keywords" content="Jobs in Manama, Jobs in Manama Bahrain, Manama jobs, oil & gas jobs in Manama, civil jobs in Manama, medical jobs in Manama, banking jobs in Manama, IT jobs in Manama, hospitality jobs in Manama"/>
<meta name="description" content="Find and apply for new Jobs in Manama. Search jobs in Manama for Indians. Get the right job in Manama, Bahrain with company ratings & salaries."/>
<link rel="canonical" href="https://www.angelgulfjobs.com/jobs-in-manama"/>   
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
    <div className="page-content">
      {/* INNER PAGE BANNER */}
      <div
        className="wt-bnr-inr overlay-wraper bg-center"
        style={{ backgroundImage: `url(${ManmamaImg})` }}
      >
        <div className="overlay-main site-bg-white opacity-01" />
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name background-heading p-3">
                <h2 className="wt-title darkblueTxt">Jobs In Manama
                </h2>
              </div>
            </div>
            {/* BREADCRUMB ROW */}
            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <NavLink to="/" className='text-white'>Home </NavLink>
                </li>
                <li>Jobs In Manama
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
                  Find the Best Jobs in Oman with Angel Gulf Jobs.

                  </h2>

                  <p>Manama is the financial hub and the capital city of Bahrain. It is a fast-growing city and offers umpteen job opportunities to expats in financial, banking, investment, information technology, oil & gas, civil construction, tourism, airlines and other industries. Finding <strong> jobs in Manama </strong> is easy for people with long-standing experience and qualifications.

</p>
                  <p>The city homes many multinational offices, and it is a base for numerous large commercial establishments, government offices, and small, mid organization which together generate plenty of  <strong>jobs in Manama </strong> across different sectors and at different levels.</p>
                  <p>The small population of Manama is unable to meet the workforce requirements of the fast-growing city creating a huge dependence on labourers and professionals from countries like India, Pakistan, Nepal, the Philippines and more. Huge job opportunities exist within the city of Manama at all levels; the need is to identify the best job opportunities across the area of interest.</p>

                  <p>UAE welcomes talented individuals from all over the world. The current net migration rate in UAE is 0.433/1000. Dubai is the major contributor to it with a 90 per cent migrant workforce.</p>
                  <h4 className="twm-s-title">How to Find a Job in Manama Bahrain</h4>

                  <p>Angel Gulf Jobs is a professionally managed overseas recruitment agency with years of work experience in the field. We help aspirants find jobs that match their profile and skills across sectors in the Gulf region. If you are looking for <strong>jobs in Manama,</strong>  or in any other Gulf country, check Angel Gulf Jobs for the latest openings. You can use the platform to search latest jobs in the industry and get complete guidance about the vacancy, like salary, location, skills required, etc.</p>
                  <p>Register here for suitable job opportunities: <NavLink to=''>Register</NavLink></p>
                  <p>Courtesy: <NavLink to='/'> Gulf Job Consultants</NavLink></p>
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
  )
}

export default ManamaJobOpportunities