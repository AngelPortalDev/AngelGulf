import React from "react";
import { NavLink } from "react-router-dom";
// import Quatar from '../../assets/images/countries/qatar-1.jpg';
import Quatar from '../../assets/images/NewImages/qatar.jpg';

import { Helmet } from "react-helmet";

const QuatarJobs = () => {
  return (
    <div>
      <Helmet>
      <title>Jobs in Qatar, Jobs in Qatar for Indians, Job Opportunities in Qatar</title>
<meta name="keywords" content="Jobs in Qatar, Jobs in Qatar for Indians, Job Opportunities in Qatar, Job Vacancies in Qatar for Freshers"/>
<meta name="description" content="Find the latest jobs in Qatar for Indians. Check out the job opportunities in Qatar like various industries like oil & gas, civil, banking, IT etc. and many more."/>
<link rel="canonical" href="https://www.angelgulfjobs.com/jobs-in-qatar"/> 
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${Quatar})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">Jobs In Qatar</h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>Jobs In Qatar</li>
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
                      Scope of Employment for Foreign Citizens in Qatar
                    </h2>

                    <p>
                      Qatar is the richest nation in the Gulf country, and it
                      ranks fourth in the world’s rich nation list. Being a
                      tax-free country, it provides excellent living conditions
                      to its citizens and expats. The land is home to some of
                      the most renowned multinational companies’ branch offices
                      and head offices presenting excellent <strong>job opportunities in
                      Qatar </strong> for citizens and overseas people. All these
                      favouring factors make Qatar the most sought-after
                      destination for working professionals. Therefore, in
                      recent years the country has become the second home for
                      many expats.
                    </p>
                    <p>
                      Talking about the life of expats in Qatar, it lies
                      somewhere between traditional and modern. Although the
                      country is conservative, it does not impose its cultural
                      beliefs and rules on expats (except a few related to
                      clothing and behaviour in public places).
                    </p>
                    <h4 className="twm-s-title">
                      Labour Law in Qatar Countries
                    </h4>
                    <p>
                      Qatar has a well-laid labour law which most organizations
                      there follow stringently. To ensure its inescapable
                      implementation, organizations remain under the monitoring
                      of authorities. The work hour varies between 40-48 hours a
                      week, i.e., 8-9 hours/day. Friday remains the day off in
                      Qatar, however, most international companies give off on
                      Sunday as well. The regulations for <strong>jobs in Qatar for
                      Indians </strong> and countries of different religious origins are
                      the same, and the country attracts many Indian expats (of
                      all religions).
                    </p>
                    <h4 className="twm-s-title">
                      Getting a Work Visa in Qatar
                    </h4>
                    <p>
                      The first and most important document for an aspirant to
                      work in Qatar is the Work Residence Permit. One cannot
                      engage in employment without the same. However, it is not
                      a worrisome reason for an aspirant, as the WRP is the
                      employer’s responsibility.
                    </p>
                    <h4 className="twm-s-title">The Average Salary in Qatar</h4>
                    <p>
                      The salary structure in Qatar varies according to the
                      nature of work. The minimum wage in Qatar is QAR1,800.00
                      per month from 2023 onwards. However, the average salary
                      differs according to the work profile and rank. You can
                      check the salary range for different job profiles on our
                      portal.
                    </p>
                    <p>
                      If you are looking for <strong>job opportunities in Qatar,</strong> the
                      team of Angel Gulf Jobs is with you. Drop your resume to
                      get our professional service.
                    </p>
                    <p>
                      For recruiters, we have an eclectic database of candidates
                      aspiring to work in Qatar and other Gulf countries.
                    </p>
                    <p>
                      Register here for suitable job opportunities:{" "}
                      <NavLink to="" className="textlinkstyle">Register</NavLink>
                    </p>
                    <p>
                      Courtesy: <NavLink to="/" className="textlinkstyle"> Gulf Job Consultants</NavLink>
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

export default QuatarJobs;
