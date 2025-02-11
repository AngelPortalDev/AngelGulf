import React from "react";
import { NavLink } from "react-router-dom";
// import bannerArticle from '../../assets/images/backgroundImages/banner-articles.jpg'
import bannerArticle from '../../assets/images/articles/articles.jpg';


import { Helmet } from "react-helmet";

const AreaOfInterest = () => {
  return (
    <div>
      <Helmet>
      <title>Angel Gulf Jobs | Articles Of Interest</title>
<meta name="keywords" content="articles, news, construction articles, oil & gas articles, hospitality articles"/>
<meta name="description" content="Angel Gulf Jobs - Here is a listing of Gulf news, information articles, construction, hospitality & more."/>
<link rel="canonical" href="https://www.angelgulfjobs.com/articles"/> 
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${bannerArticle})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">Articles of Interest
                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>Articles of Interest
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
                            <NavLink to="/uae-online-law-social-media" target="_blank" className="linkstyle">
                              UAE Online Law: Post On SM Without Consent Could
                              Get You Jail
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/uae-retirement-age" target="_blank" className="linkstyle">
                              UAE Retirement Age Set To Go Up By One Yr Frm Feb
                              End 2016
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/dubai-jobseeker-alert-top-questions-employers-ask" target="_blank" className="linkstyle">
                              Dubai Jobseekers: Top Questions Employers Ask
                              During Interviews
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/nakheel-plans-new-hotel-at-dubais-ibn-battuta-mall" target="_blank" className="linkstyle">
                              Nakheel Plans New Hotel At IBN Battuta Mall, Dubai
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/kuwait-to-deport-1170-illegal-migrants" target="_blank" className="linkstyle">
                              Kuwait To Deport 1170 Illegal Migrants From
                              Country
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*Two*/}
                  <div className="accordion-item">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#FAQ2"
                      aria-expanded="true"
                    >
                      February'16
                    </button>
                    <div
                      id="FAQ2"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#sf-faq-accordion"
                    >
                      <div className="accordion-body">
                        <ul style={{ marginLeft: "24px" }}>
                          <li>
                            <NavLink to='/dh20-3-billion-sharjah-budget-to-create-2500-jobs-2016' target="_blank" className="linkstyle">
                              Sharjah Budget 2016 To Create New Job
                              Opportunities
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/jobs-in-qatar' target="_blank" className="linkstyle">
                              Jobs In Qatar, Civil Jobs In Qatar, Banking Jobs
                              In Qatar
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/jobs-in-doha" target="_blank" className="linkstyle">
                              Jobs In Doha, Civil Jobs In Doha, Retail Jobs In
                              Doha
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/jobs-in-oman" target="_blank" className="linkstyle">
                              Jobs In Oman, Civil Jobs In Oman, Banking Jobs In
                              Oman
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/jobs-in-muscat' target="_blank" className="linkstyle">
                              Jobs In Muscat, Civil Jobs In Muscat, Banking Jobs
                              In Muscat
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*Three*/}
                  <div className="accordion-item">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#FAQ3"
                      aria-expanded="true"
                    >
                      January'16
                    </button>
                    <div
                      id="FAQ3"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#sf-faq-accordion"
                    >
                      <div className="accordion-body">
                        <ul style={{ marginLeft: "24px" }}>
                          <li>
                            <NavLink to='/jobs-in-saudi-arabia' target="_blank" className="linkstyle">
                              Jobs In Saudi Arabia, Civil Jobs, Medical Jobs In
                              SA
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/jobs-in-riyadh" target="_blank" className="linkstyle">
                              Jobs In Riyadh, Oil & Gas Jobs In Riyadh, Civil
                              Jobs In Riyadh
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/jobs-in-uae' target="_blank" className="linkstyle">
                              Jobs In UAE, Oil & Gas Jobs In UAE, Civil Jobs In
                              UAE
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/jobs-in-manama' target="_blank" className="linkstyle">
                              Jobs In Manama, Banking Jobs In Manama, Civil Jobs
                              In Manama
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/jobs-in-dubai' target="_blank" className="linkstyle">
                              Jobs In Dubai, Retail Jobs In Dubai, Banking Jobs
                              In Dubai
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*Four*/}
                  <div className="accordion-item">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#FAQ4"
                      aria-expanded="true"
                    >
                      December'15
                    </button>
                    <div
                      id="FAQ4"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#sf-faq-accordion"
                    >
                      <div className="accordion-body">
                        <ol style={{ marginLeft: "24px" }}>
                          <li>
                            <NavLink to='/jobs-in-abu-dhabi' target="_blank" className="linkstyle">
                              Jobs In Abu Dhabi, Retail Jobs In Abu Dhabi,
                              Banking Jobs
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/jobs-in-bahrain' target="_blank" className="linkstyle">
                            Jobs In Bahrain, Oil & Gas Jobs In Bahrain, Civil Jobs In Bahrain
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/indian-rupee-18.56-vs-dh1' target="_blank" className="linkstyle">
                            Indian Rupee @ 18.56 vs Dh1: 5 Ways To Make A Killing Today’s
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/alfuttiam-chalhoub-group-sign-deal' target="_blank" className="linkstyle">Al-Futtaim, Chalhoub Group Sign Deal</NavLink>
                          </li>
                          <li>
                            <NavLink to='/phone-drivers-could-lose-car-for-one-month-dubai' target="_blank" className="linkstyle">
                              Using Phone While Driving In Dubai? You Could Lose
                              Your Car For 1 Month
                            </NavLink>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  {/*Five*/}
                  <div className="accordion-item">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#FAQ5"
                      aria-expanded="true"
                    >
                      Novermbr'15
                    </button>
                    <div
                      id="FAQ5"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#sf-faq-accordion"
                    >
                      <div className="accordion-body">
                        <ul style={{ marginLeft: "24px" }}>
                          <li>
                            <NavLink to='/employer-can-sack-worker-if-assaulted' target="_blank" className="linkstyle">
                              UAE, Employer Can Sack Worker If Assaulted
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/dubai-pedestrian-felled-dh50k-snatched' target="_blank" className="linkstyle">
                              Dubai Pedestrian Felled, Dh50,000 Snatched
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/barclays-slash-100s-of-jobs' target="_blank" className="linkstyle">
                              Barclays Slashes Hundreds of Jobs Worldwide
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/emirates-id-bank-account-freeze' target="_blank" className="linkstyle">
                              Emirates ID Can Freeze Your UAE Bank Account, Cut
                              Phone
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/jobs-in-uae-2016' target="_blank" className="linkstyle">
                              Looking for a UAE job? These sectors are hiring
                              right now…
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*Six*/}
                  <div className="accordion-item">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#FAQ6"
                      aria-expanded="true"
                    >
                      Octomber'15
                    </button>
                    <div
                      id="FAQ6"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#sf-faq-accordion"
                    >
                      <div className="accordion-body">
                        <ul style={{ marginLeft: "24px" }}>
                          <li>
                            <NavLink to='/dubai-chambers-16k-new-firms-on-board' target="_blank" className="linkstyle">
                              16,000 New Firms Came On Board At Dubai Chamber In
                              2015
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/uae-central-bank-hiring-jobs-open-to-expats' target="_blank" className="linkstyle">
                              UAE Central Bank Hiring: Jobs Open To Expats
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/uae-rules-when-resigning-your-job' target="_blank" className="linkstyle">
                              New UAE Labour Law: Rules To Follow When Resigning
                              Your Job
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/emirates-id-number-cannot-be-changed' target="_blank" className="linkstyle">
                              Emirates ID Number Allocated For Life – Can Not Be
                              Changed
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/rakbank-to-cut-250-jobs' target="_blank" className="linkstyle">
                              RAKBank To Cut 250 Jobs As Part of Review
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*Seven*/}
                  <div className="accordion-item">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#FAQ7"
                      aria-expanded="true"
                    >
                      September'15
                    </button>
                    <div
                      id="FAQ7"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#sf-faq-accordion"
                    >
                      <div className="accordion-body">
                        <ul style={{ marginLeft: "24px" }}>
                          <li>
                            <NavLink to='/uae-jobs-dafza-linkedin-tieup' target="_blank" className="linkstyle"> 
                              Your UAE Job Hunt Just Got Easier: Dafza, LinkedIn
                              Tie-Up
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/nri-alert-rupee-exchange-rate-to-dirham' target="_blank" className="linkstyle">
                              NRI Alert: Indian Rupee @ 18.50 Vs Dh1; Why IT’s
                              Likely To Hit 20 This Year
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/11-languages-approved-for-new-uae-labour-contracts' target="_blank" className="linkstyle">
                              11 Languages Approved For New UAE Labour Contracts
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/gulf-jobs-life-experience' target="_blank" className="linkstyle">
                              Gulf Jobs – Life Experience Of Indian Expats In
                              Gulf
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/govt-job-in-sharjah' target="_blank" className="linkstyle">
                              Law On How To Get A Government Job In Sharjah
                              Amended
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*Eight*/}
                  <div className="accordion-item">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#FAQ8"
                      aria-expanded="true"
                    >
                      August'15
                    </button>
                    <div
                      id="FAQ8"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#sf-faq-accordion"
                    >
                      <div className="accordion-body">
                        <ul style={{ marginLeft: "24px" }}>
                          <li>
                            <NavLink to='/new-uae-labour-rules' target="_blank" className="linkstyle">
                              Know The Law: How New UAE Labour Rules on Job
                              Offers Will Impact You
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/driving-licence-exchange-dubai' target="_blank" className="linkstyle">
                              33 Nationalities Can Exchange Driving Licences
                              From Home Country In Dubai
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/gulf-jobs-gcc' target="_blank" className="linkstyle">
                              Gulf Jobs – A Miracle Term for Many Job Seekers
                              Around the World
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/good-times-uaejobs' target="_blank" className="linkstyle">
                              Good Times For UAE Job Seekers For The Next Three
                              Months
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/hospitality-jobs-uae' target="_blank" className="linkstyle">
                              Hundreds of Hospitality Jobs for UAE Job Seekers
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*Nine*/}
                  <div className="accordion-item">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#FAQ9"
                      aria-expanded="true"
                    >
                      July'15
                    </button>
                    <div
                      id="FAQ9"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#sf-faq-accordion"
                    >
                      <div className="accordion-body">
                        <ul style={{ marginLeft: "24px" }}>
                          <li>
                            <NavLink to='/uae-labour-laws' target="_blank" className="linkstyle">
                              10 Cases May Get You Fired From The Job Without
                              Notice
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/gulf-job-interviews' target="_blank" className="linkstyle">
                              Gulf Job Interviews / Walk-In-Interviews For Gulf
                              Jobs
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/new-jobs-dubai' target="_blank" className="linkstyle">
                              5,000 to 7,000 New Jobs Coming Up In Dubai
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/uae-jobsearch-trends2016' target="_blank" className="linkstyle">
                              Top 10 Trends To Influence Your UAE Job Search
                              2016
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/hr-skills-hired-uae' target="_blank" className="linkstyle">
                              HR Skills That Can Get You Hired In UAE
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/*RTen*/}
                  <div className="accordion-item">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#FAQ10"
                      aria-expanded="true"
                    >
                      June'15
                    </button>
                    <div
                      id="FAQ10"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#sf-faq-accordion"
                    >
                      <div className="accordion-body">
                        <ul style={{ marginLeft: "24px" }}>
                          <li>
                            <NavLink to='/court-firm-extra-pay' target="_blank" className="linkstyle">
                              UAE Labour Laws: Court Forces Firm To Pay Worker
                              For His Dues
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/employment-contract-native-language' target="_blank" className="linkstyle">
                              New UAE Labour Rule: Contract Must Be In Native
                              Language of Worker
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/lulu-to-open-10-hypermarkets-egypt' target="_blank" className="linkstyle">
                              UAE Based Lulu Group To Open 10 Hypermarkets In
                              Egypt
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/jobs-in-dubai-parks' target="_blank" className="linkstyle">
                              Dubai Parks Shortlists Over 200 UAE Nationals For
                              Jobs
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to='/uae-cancels-6-months-work-ban' target="_blank" className="linkstyle">
                              UAE Labour Laws: UAE Cancels 6 Months Work Ban
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
        {/* Employer Detail END */}
      </div>
      {/* CONTENT END */}
    </div>
  );
};

export default AreaOfInterest;
