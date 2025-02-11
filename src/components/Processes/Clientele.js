import React from 'react'
import comingSoon from './../../assets/images/logo-coming-soon.jpg';
// import clientel from '../../assets/images/banner-clients.jpg';
import clientel from '../../assets/images/NewImages/clintel.jpg';

import { Helmet } from 'react-helmet';

const Clientele = () => {
  return (
    <div>
      <Helmet>
      <title>Angel Gulf Jobs | Client List, Overseas Recruitment Agency, Mumbai, India</title>
      <meta name="keywords" content="client list, overseas clients, Gulf clients, construction clients, oil & gas clients, hospitality clients, banks & financial institutions"/>
      <meta name="description" content="Angel Gulf Jobs is a full-service overseas recruitment agency serving a large no. of clients across different industry Verticals. Here is a listing of our clients served by us across different industries."/>
      <link rel="canonical" href="https://www.angelgulfjobs.com/clientele"/> 
      <meta name="revisit-after" content="7 days"/>
      <meta name="robots" content="index, follow"/>
      </Helmet>
    <div className="page-content">
      {/* INNER PAGE BANNER */}
      <div
        className="wt-bnr-inr overlay-wraper bg-center"
        style={{ backgroundImage: `url(${clientel})` }}
      >
        <div className="overlay-main site-bg-white opacity-01" />
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name background-heading p-3">
                <h2 className="wt-title darkblueTxt">Client Listing</h2>
              </div>
            </div>
            {/* BREADCRUMB ROW */}
            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Client Listing</li>
              </ul>
            </div>
            {/* BREADCRUMB ROW END */}
          </div>
        </div>
      </div>
      {/* INNER PAGE BANNER END */}
      {/* Employer Detail START */}
      <div className="section-full  p-t30 p-b30 bg-white">
        <div className="container">
          <div className="section-content">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10 col-md-12">
                {/* Candidate detail START */}
                <div className="cabdidate-de-info">
                  {/* <h4 className="twm-s-title">About Company</h4> */}
                  <p>
                  Angel Gulf Jobs is a full-service overseas recruitment agency serving a large no. of clients across different industry Verticals. Here is a listing of clients served by us across different industries. The listing spans across entire Gulf region & more.
                  </p>
                  <img src={comingSoon} alt='coming soon' className='img-fluid'/>
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

export default Clientele;
