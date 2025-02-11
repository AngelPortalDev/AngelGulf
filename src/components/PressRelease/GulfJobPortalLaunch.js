import React from "react";
import gulfjobImg from "../../assets/images/pressrelease/gulf-job-portal.jpg";
import { NavLink } from "react-router-dom";

const VisaService = () => {
  return (
    <div>
      {/* Heading & MetaTags  */}

      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${gulfjobImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">
                    Complete Gulf Job Portal: AngelGulfJobs.com Launched In
                    India
                  </h2>
                  <p>
                    AngelGulfJobs.com Is A comprehensive Gulf Job Portal, A One
                    Stop Destination For Gulf Jobs In India
                  </p>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    Complete Gulf Job Portal: AngelGulfJobs.com Launched In
                    India
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
                    <p>
                      Mumbai, India - December 23, 2015 – AngelGulfJobs.com, a
                      comprehensive Gulf job portal in its totality has been
                      launched in India today. The service has been launched
                      with the objective of providing the best of Gulf jobs
                      services to the “Gulf job seekers” at one place. The
                      service has been backed by promoters with years of Gulf
                      experience, having direct “recruitment” contracts with a
                      large number of companies in the Gulf region across
                      sectors like construction, oil & gas, banking, IT
                      services, hotels, medical centres, automobiles, security
                      staffing, travels, retail & more. Regular job openings for
                      employees at all the levels have been posted on the site
                      including senior posts in engineering, banking and IT
                      sectors.
                    </p>
                    <h4 className="twm-s-title">
                      Here is the listing of main features & services on
                      AngelGulfJobs.com
                    </h4>
                    <p>
                      Services – Angel Gulf Jobs being a full-service Gulf jobs
                      consultancy aims at providing complete Gulf job services
                      including free career counselling, identification of job
                      opportunities, arranging for medical tests, skill tests,
                      documentation, visa services, foreign exchange, flight
                      bookings and so on. The services cover the entire Gulf job
                      recruitment cycle right from counselling to placement of a
                      candidate on the job.
                    </p>
                    <p>
                      Current openings – The direct contracts with a large
                      number of corporate in the Gulf region result into regular
                      requirements for workers / employees across all the levels
                      in different industry segments. The job postings are
                      regularly updated on the website with latest job vacancies
                      across different job functions. It’s an easy to use
                      feature helping job seekers to quickly go through the
                      available job openings in the Gulf region: Dubai, Abu
                      Dhabi, other UAE, Qatar, Bahrain, Oman, Saudi Arabia & the
                      entire Gulf.
                    </p>
                    <p>
                      Industry articles – There is a dedicated section on
                      industry articles providing information, research data,
                      and other insights across different industry verticals.
                      These articles help job seekers in the Gulf region to
                      understand the overall scenario prevailing in the industry
                      of their interest. A pre-hand understanding of the
                      conditions in the respective industry helps job seekers to
                      take a right decision with a short to long term career
                      planning.
                    </p>
                    <p>
                      General articles – This dedicated section on the site
                      boasts a number of informative news articles like UAE
                      labour laws, job market news, hiring trends, job search
                      tips, interview advice and more. These general news
                      articles keep job seekers updated with the latest news &
                      happenings in the Gulf job market. A current understanding
                      of the job market situations in the Gulf region helps job
                      seekers to take timely decision.
                    </p>
                    <p>
                      Press releases - This is a dedicated section on company
                      news and press releases keeping job seekers updated with
                      the latest happenings in the company. It boasts various
                      announcements as regards launch of a service, new features
                      introduced on the website, lucrative job openings,
                      contracts earned by the company, rewards & accreditations
                      and much more.
                    </p>
                    <p>
                      To search for latest Gulf job openings:{" "}
                      <NavLink to="/" className="textlinkstyle">Click here </NavLink>
                    </p>
                    <p>
                      To post your resume on AngelGulfJobs.com:{" "}
                      <NavLink to="/" className="textlinkstyle">Click here </NavLink>
                    </p>

                    <h4>About Angel Gulf Jobs</h4>
                    <p>
                      Angel Gulf Jobs is a fastest growing, professionally
                      managed Gulf job consultants (overseas job consultants)
                      based in Mumbai, India, registered with Government of
                      India Ministry of Labour. The organization is a part of
                      the “Angel” group having offices in Mumbai, Paris, &
                      expanding into other parts of the World. Angel Gulf Jobs
                      has been founded by professionals with years of Gulf
                      experience (overseas experience) capable of providing the
                      best of recruitment services to employers and job seekers.
                      Being a specialist Gulf job consultant, it provides its
                      services across UAE, Qatar, Bahrain, Oman, Saudi Arabia &
                      the entire Gulf. The organization is equipped with the
                      necessary infrastructure in Mumbai & the Gulf region. To
                      know more about Angel Gulf Jobs, please call
                    < a href="tel:+91-22-69001020" className="textlinkstyle"> +91-22-69001020</a>   or log into <NavLink to='/' className="textlinkstyle">Angel Gulf Jobs</NavLink> 
                    </p>
                    <h4>Media Contact</h4>
                    <p className="mb-0">Mr. Sunil Goyal</p>
                    <p>info@angelgulfjobs.com</p>
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

export default VisaService;
