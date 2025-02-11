import React from "react";
import latestArticleImg from '../../assets/images/backgroundImages/banner-articles.jpg'
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";


const PressRelease = () => {
  return (
    <div>
      <Helmet>
      <title>Angel Gulf Jobs - Press Release, Company News, Announcements</title>
<meta name="keywords" content="press release, news, company news, angel gulf jobs news, angel gulf jobs pr"/>
<meta name="description" content="Angel Gulf Jobs is a comprehensive Gulf Jobs platform. Here is a listing of company press releases, news & announcements."/>
<link rel="canonical" href="https://www.angelgulfjobs.com/press-release"/>
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div>
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <div
            className="wt-bnr-inr overlay-wraper bg-center"
            style={{ backgroundImage: `url(${latestArticleImg})` }}
          >
            <div className="overlay-main site-bg-white opacity-01" />
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name background-heading p-3">
                    <h2 className="wt-title darkblueTxt">Gulf Visa Services</h2>
                  </div>
                </div>
                {/* BREADCRUMB ROW */}
                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>Gulf Visa Services</li>
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
                <h6 className="text-center">
                  <NavLink to='/pr-gulf-portal-launch' className="textlinkstyle">
                    Complete Gulf Job Portal, AngelGulfJobs.com Launched In
                    India
                  </NavLink>
                </h6>
              </div>
            </div>
          </div>
          {/* Employer Detail END */}
        </div>
        {/* CONTENT END */}
      </div>
    </div>
  );
};

export default PressRelease;
