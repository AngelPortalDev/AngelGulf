import React from 'react';
import { NavLink } from 'react-router-dom';
// import UAE from '../../assets/images/countries/UAE.jpg';
import UAE from '../../assets/images/NewImages/UAE.jpg';

import { Helmet } from 'react-helmet';

const DubaiJobs = () => {
  return (
    <div>
      <Helmet>
      <title>Jobs in UAE, Jobs in UAE for Indian, Jobs in Dubai for Indians</title>
      <meta name="keywords" content="Jobs in UAE, Jobs in UAE for Indian, Jobs in Dubai for Indians, jobs in Dubai, oil & gas jobs in UAE, civil jobs in UAE, medical jobs in UAE, banking jobs in UAE, IT jobs in UAE, hospitality jobs in UAE"/>
      <meta name="description" content="Apply for latest jobs in UAE. Search from 400+ jobs in UAE for Indians in various industries like oil & gas, civil, banking, IT, hospitality, medical & more."/>
      <link rel="canonical" href="https://www.angelgulfjobs.com/jobs-in-uae"/> 
      <meta name="revisit-after" content="7 days"/>
      <meta name="robots" content="index, follow"/>
      </Helmet>
    <div className="page-content">
      {/* INNER PAGE BANNER */}
      <div
        className="wt-bnr-inr overlay-wraper bg-center"
        style={{ backgroundImage: `url(${UAE})` }}
      >
        <div className="overlay-main site-bg-white opacity-01" />
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name background-heading p-3">
                <h2 className="wt-title darkblueTxt">Jobs In UAE</h2>
              </div>
            </div>
            {/* BREADCRUMB ROW */}
            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <NavLink to="/">Home </NavLink>
                </li>
                <li>Jobs In UAE</li>
              </ul>
            </div>
            {/* BREADCRUMB ROW END */}
          </div>
        </div>
      </div>
      {/* INNER PAGE BANNER END */}
      {/* Employer Detail START */}
      <div className="section-full  p-t20 p-b50 bg-white">
        <div className="container">
          <div className="section-content">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10 col-md-12">
                {/* Candidate detail START */}
                <div className="cabdidate-de-info">
                  {/* <h4 className="twm-s-title">About Company</h4> */}
                  <h2 className="twm-s-title blueuText">
                  Angel Gulf Jobs Helps You Find the Best Jobs in UAE
                  </h2>

                  <p>Dubai is one of the most sought-after work destinations for Indians because of the easy availability of jobs, work culture, international work environment, great perks, etc. However, finding jobs in UAE is no easier than in any Western country. There is tough competition along with strict labour law (to protect immigrants’ work rights in UAE.)</p>
                  <p>Furthermore, the authorities in UAE are promoting nationalization at workplaces making finding jobs a bit more time taking; nevertheless, there is always a demand for skilled and experienced professionals in UAE. The country welcomes foreign workers for different work profiles in a large number. They primarily hire people through online job portals or consultants.</p>
                  <p>So, if you are aspiring to work in UAE, use both mediums to find openings. There are many consultants present that render finding <strong>jobs in UAE for Indian</strong> aspirants easy. Angel Gulf Jobs is one among many. We bridge the gap between job-seekers in Dubai and employers.</p>
                  <p>Angel Gulf Jobs is a professionally managed overseas recruitment agency with years of work experience in the field. We help aspirants find jobs that match their profile and skills across sectors in the Gulf region. If you aspire to work in UAE or in any other Gulf country, check Angel Gulf Jobs for the latest openings. You can use the platform to search latest jobs in the industry and get complete guidance about the vacancy, like salary, location, skills required and more.</p>
                  <p>UAE welcomes talented individuals from all over the world. The current net migration rate in UAE is 0.433/1000. Dubai is the major contributor to it with a 90 per cent migrant workforce.</p>
                  <p>Out of about 3.4 million expatriates in UAE, 30% population is Indian. This makes referencing and finding <strong>jobs in UAE</strong> a little easier for Indian aspirants.</p>
                  <p>Register here for suitable job opportunities: <NavLink to='/registration' className="textlinkstyle" target='_blank'>Register</NavLink></p>
                  <p>Courtesy: <NavLink to='/' className="textlinkstyle"> Gulf Job Consultants</NavLink></p>
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

export default DubaiJobs;
