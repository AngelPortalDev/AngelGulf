import React from 'react';
import { NavLink } from 'react-router-dom';
// import SaudiJob from '../../assets/images/countries/saudi.jpg';
import SaudiJob from '../../assets/images/NewImages/saudi.jpg';
import whyWorkImage from '../../assets/images/countries/Why-Work-In-Saudi-Arabia.png';

import { Helmet } from 'react-helmet';

const SaudiJobs = () => {
  return (
    <div>
      <Helmet>
      <title>Find the Best Jobs in Saudi Arabia | Angel Gulf Jobs</title>
      <meta
        name="description"
        content="Find the best jobs in Saudi Arabia for Indians with Angel Gulf Jobs. Explore telecom, tourism, healthcare, IT, engineering, construction, and FMCG roles with trusted recruitment support."
      />
      <meta
        name="keywords"
        content="Jobs in Saudi Arabia for Indians, Jobs in Saudi Arabia, Overseas job consultants, Saudi Arabia job vacancy, jobs in Saudi Arabia for freshers, apply for job in Saudi Arabia, Overseas job consultancy, Gulf jobs for Indians, Overseas recruitment agency, Work in Saudi Arabia"
      />
      <link rel="canonical" href="https://www.angelgulfjobs.com/work-in-saudi-arabia"/> 
      <meta name="revisit-after" content="7 days"/>
      <meta name="robots" content="index, follow"/>
      </Helmet>
    <div className="page-content">
      {/* INNER PAGE BANNER */}
      <div
        className="wt-bnr-inr overlay-wraper bg-center"
        style={{ backgroundImage: `url(${SaudiJob})` }}
      >
        <div className="overlay-main site-bg-white opacity-01" />
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name background-heading p-3">
                <h2 className="wt-title darkblueTxt">Work In Saudi Arabia</h2>
              </div>
            </div>
            {/* BREADCRUMB ROW */}
            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li className='text-white'>Work In Saudi Arabia</li>
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
                  Find the Best Jobs in Saudi Arabia with Angel Gulf Jobs
                  </h2>

                  <p>If you are dreaming to work in one of the wealthiest countries in the World, Saudi Arabia, Angel Gulf Jobs is your trusted overseas recruitment partner. We specialise in connecting Indian professionals with the best jobs in Saudi Arabia, helping you explore opportunities across top industries such as telecom, tourism, healthcare, engineering, IT, construction, and FMCG.</p>
                  <p>As a leading overseas job consultancy, the expert team of Angel Gulf Jobs supports you throughout the hiring process—offering guidance on salaries, locations, skill requirements, visa rules, and every detail needed to secure the right job.</p>

                  <h3 className="twm-s-title mt-4 text-dark">Why Work in Saudi Arabia?</h3>

                  <figure className="mb-4">
                    <img
                      src={whyWorkImage}
                      alt="Why Work In Saudi Arabia"
                      className="img-fluid rounded-3 shadow-sm"
                    />
                  </figure>

                  

                  <ul style={{ listStylePosition: 'inside', paddingLeft: '1rem' }}>
                    <li><strong>Tax-Free Income:</strong> Salaries are fully tax-free, allowing higher real savings.</li>
                    <li><strong>Attractive Salary Packages:</strong> Competitive pay with allowances for housing, transport, and food.</li>
                    <li><strong>Strong Job Demand:</strong> High demand for foreign workers across construction, healthcare, engineering, IT, hospitality, and services.</li>
                    <li><strong>Modern Work Environment:</strong> World-class infrastructure, safe cities, and rapidly growing industries under Vision 2030.</li>
                    <li><strong>Long-Term Career Opportunities:</strong> Stable employment, contract renewals, and chances to grow professionally in a fast-developing economy.</li>
                  </ul>

                  <h3 className="twm-s-title mt-4 text-dark">Opportunities for Indians in Saudi Arabia</h3>
                  <p>While there are plenty of jobs in Saudi Arabia for Indians, the implementation of Saudization has made it challenging for foreign nationals to secure jobs after entering the country. Today, expats are advised to apply for jobs in Saudi Arabia through trusted recruitment partners while still in their home country.</p>
                  <p>At Angel Gulf Jobs, we make the process easier. Whether you're looking for Saudi Arabia jobs for Indian professionals, entry-level positions, or jobs in Saudi Arabia for freshers, our team ensures a transparent, reliable, and smooth recruitment journey.</p>

                  <h3 className="twm-s-title mt-4 text-dark">Why Choose Angel Gulf Jobs?</h3>
                  <p>Angel Gulf Jobs is a pioneer overseas recruitment agency for Saudi Arabia and the Gulf. We help candidates find authentic, high-quality jobs through verified employers.</p>

                  <p><strong>What We Offer:</strong></p>
                  <ul style={{ listStylePosition: 'inside', paddingLeft: '1rem' }}>
                    <li>Latest Saudi Arabia job vacancies</li>
                    <li>End-to-end assistance from application to placement</li>
                    <li>Expertise in Gulf jobs for Indians</li>
                    <li>Support for skilled, semi-skilled, and fresher candidates</li>
                    <li>Guidance from trusted overseas job consultants for the Gulf</li>
                  </ul>

                  <p>Whether you are beginning your Saudi Arabia job search or exploring new career options, Angel Gulf Jobs gives you access to the most reliable job openings in the Gulf.</p>

                  <h3 className="twm-s-title mt-4 text-dark">How to get Job in Saudi Arabia from India</h3>
                  <p>Angle Gulf Jobs is a pioneer recruitment agency for Gulf and Saudi Arabia jobs. For the latest Saudi Arabia job vacancy, you can contact the team at Angel Gulf Jobs.</p>

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

export default SaudiJobs;
