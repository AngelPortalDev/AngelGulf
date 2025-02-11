import React from "react";
import latestArticleImg from "../../assets/images/backgroundImages/banner-articles.jpg";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const LatestNews = () => {
  return (
    <div>
      <Helmet>
      <title>Latest Gulf Employment News, Gulf News Jobs  | Angel Gulf Jobs</title>
<meta name="keywords" content="Gulf News Jobs, Latest Gulf Employment News, latest gulf news, gulf employment news, current news"/>
<meta name="description" content="Get daily updates on guld news about jobs. Read latest news and articles covering wide range of latest gulf employment news on our website."/>
<link rel="canonical" href="https://www.angelgulfjobs.com/latest-gulf-news"/>
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
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
                  <h2 className="wt-title darkblueTxt">
                    Latest Gulf Employment News
                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>Latest Gulf Employment News</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}

        <div className="section-full  p-t30 p-b50 bg-white">
          <div className="container">
            <div className="section-content">
              <div className="tw-faq-section">
                <div className="accordion tw-faq" id="sf-faq-accordion">
                  {/*One*/}
                  <div className="accordion-item">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      data-bs-target="#FAQ1"
                    >
                      March'16
                    </button>
                    <div
                      id="FAQ1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#sf-faq-accordion"
                    >
                      <div className="accordion-body">
                        <ul style={{ marginLeft: "24px" }}>
                          <li>
                            <NavLink
                              to="/pay-hike-or-keeping-your-job"
                              target="_blank"
                              className="linkstyle"
                            >
                              Pay hike or keeping your job? What your priority
                              should be
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/indian-budget-spoils-uae-expat-remitters-party"
                              target="_blank"
                              className="linkstyle"
                            >
                              Indian Budget Euphoria Spoils UAE Expat Remitters’
                              Party As Rupee Rallies
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/uae-signs-defence-deals"
                              target="_blank"
                              className="linkstyle"
                            >
                              UAE Signs Defence Deals Worth Dh767m On UMEX
                              Opening Day
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/centerpoint-to-add-25-outlets-in-2016"
                              target="_blank"
                              className="linkstyle"
                            >
                              Centrepoint To Add 25 Outlets This Year, Recruit
                              2,500 Staff
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CONTENT END */}
    </div>
  );
};

export default LatestNews;
