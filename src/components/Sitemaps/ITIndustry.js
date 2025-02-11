<<<<<<< HEAD
import React from "react";
import { NavLink } from "react-router-dom";
import itImg from "../../assets/images/sitemap/it.jpg";
import webDesignersImg from "../../assets/images/sitemap/it/it-industry-web-designers.jpg";
import phpDevelopersImg from "../../assets/images/sitemap/it/it-industry-php-developers.jpg";
import netDevelopersImg from "../../assets/images/sitemap/it/it-industry-net-developers.jpg";
import networkingProfessionalsImg from "../../assets/images/sitemap/it/it-industry-networking-professionals.jpg";
import softwareTestersImg from "../../assets/images/sitemap/it/it-industry-software-testers.jpg";
import projectManagersImg from "../../assets/images/sitemap/it/it-industry-project-managers.jpg";
import sapSpecialistsImg from "../../assets/images/sitemap/it/it-industry-sap-specialists.jpg";
import digitalMarketingImg from "../../assets/images/sitemap/it/it-industry-digital-marketing.jpg";
import contentWritersImg from "../../assets/images/sitemap/it/it-industry-content-writers.jpg";
import graphicDesignerImg from "../../assets/images/sitemap/it/it-industry-graphic-designer.jpg";
import teamLeaderImg from "../../assets/images/sitemap/it/it-industry-team-leader.jpg";
import businessAnalyticsImg from "../../assets/images/sitemap/it/it-industry-business-analytics.jpg";
import CarouselItems from "../common/CarouselItems";
import { Helmet } from "react-helmet";

const ITIndustry = () => {
    const images = [
        webDesignersImg, phpDevelopersImg, netDevelopersImg, networkingProfessionalsImg,
        softwareTestersImg, projectManagersImg, sapSpecialistsImg, digitalMarketingImg, 
        contentWritersImg, graphicDesignerImg, teamLeaderImg, businessAnalyticsImg
    ];

    const titles = [
        "Web Designers", "PHP Developers", "Net Developers", "Networking Professionals", 
        "Software Testers", "Project Managers", "SAP Specialists", "Digital Marketing", 
        "Content Writers", "Graphic Designer", "Team Leader", "Business Analytics"
    ];

    const altTexts = [
        "IT Jobs in Gulf", "Software Testing Jobs", "Net Developers Jobs In Gulf", 
        "Networking Professionals Jobs In Gulf", "Software Testers Jobs In Gulf", 
        "Project Managers Jobs In Gulf", "SAP Specialists Jobs In Gulf", 
        "Digital Marketing Jobs In Gulf", "Content Writers Jobs In Gulf", 
        "Graphic Designer Jobs In Gulf", "Team Leader Jobs In Gulf", 
        "Business Analytics Jobs In Gulf"
    ];

  return (
    <div>
      <Helmet>
      <title>IT Jobs in Gulf, Software Testing Jobs in Dubai, Qatar, Kuwait</title>
<meta name="keywords" content="IT Jobs in Gulf, Software Testing Jobs in Dubai, Qatar, Kuwait, IT industry, IT jobs, information technology jobs, web design jobs, software programmer jobs, networking jobs, jobs in Dubai, jobs in Abu Dhabi, jobs in Oman, jobs in Gulf"/>
<meta name="description" content="Find and apply for your perfect IT jobs in gulf. Discover exciting career opportunities in software testing jobs in Dubai, Qatar, Kuwait, Oman etc."/>
<link rel="canonical" href="https://www.angelgulfjobs.com/it-industry"/>
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${itImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">
                  IT Jobs in Gulf

                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Security Officers Jobs</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}
        <div>
          <div className="section-full p-t30 p-b50 bg-white">
            <div className="container">
              <div className="section-content">
                <div className="row">
                  <div>
                    <h4>
                    Industries We Serve

                    </h4>
                    <p>
                    Angel Gulf Jobs is a full-service overseas manpower agency promoted by highly experienced professionals having worked across different sectors in the Gulf region. Find and apply for your perfect IT jobs in gulf. Discover exciting career opportunities in software testing jobs in Dubai, Qatar, Kuwait, Oman etc. The exposure derived by promoters in their work life across different sectors has helped them to provide services across a wide range of industries. As far as Gulf region is concerned, Angel Gulf Jobs serves all the top sectors including construction, oil & gas, hospitality, banking, shipping and more. Above all, the biggest strength of Angel Gulf Jobs lies in its database of candidates which is spread across different work categories making it possible to serve almost all the important industries across entire Gulf & other regions.


                    </p>
                    
                  </div>
                  {/* Carousel in col-lg-3 */}
                  <div className="col-lg-6 col-md-12">
                    <div className="carousel-wrapper p-3">
                      <div className="carouselbackground">
                        <h5 className="text-center fw-semibold text-white py-2 px-1">
                        Here is a listing of major job categories
                        in the IT industry that we recruit for
                        </h5>
                      </div>

                      <CarouselItems
                        images={images}
                        titles={titles}
                        altTexts={altTexts}
                      />
                      {/*  */}
                    </div>
                  </div>
                  {/* Empty col-lg-9 */}
                  <div className="col-lg-6 col-md-12">
                    {/* This section is empty for now */}
                    <h4 className="mt-3 mt-md-0">
                    IT Industry

                    </h4>
                    <p>
                    IT (information technology) has taken the world by storm; practically there is no industry which hasn’t been touched by information technology. Industries in the Gulf region are not an exception to the rule; IT is being implemented across all the sectors creating huge number of IT jobs across different job functions. There is huge demand for IT professionals – web designers, PHP developers, .Net developers, other programmers, project managers, networking professionals, software testers, SAP consultants (functional, technical), digital marketing specialists, content writers & so on.


                    </p>
                    
                  </div>
                  <p className="mt-2">
                  In 2015, the IT sector in the UAE is forecast to grow to Dh18.68 billion in 2015 from Dh17.17bn last year. The software sales will increase to Dh3.549bn in 2015 from Dh3bn in 2014, registering 18.1 per cent increase in local currency terms, according to BMI forecast. The UAE is one of the region’s fastest growing Enterprise Resource Planning (ERP) markets as modernization initiatives continue in an effort to increase international competitiveness.


                  </p>

                  <p>
                  The demand for IT professionals to fill up various IT job functions is consistently on the rise throughout the Gulf region. Many universities, colleges and IT institutes have been shaping individuals to fit into various IT jobs, however, the space is so huge that external assistance is often sought to full-fill the requirement. IT professionals have started migrating to various Gulf countries to fit into various IT job functions, however, lack of proper guidance & channel has been creating difficulties for both candidates as well as employers. It has been observed that the overseas agents are still working heavily towards the core sectors like construction, oil gas & so on. Very few overseas agents have a readily available database of IT professionals that can be delivered in a short notice of time.


                  </p>
                  <p>
                  We, at Angel Gulf Jobs are fully equipped to provide the best of qualified & trained IT professionals within the stipulated time limits. We primarily source candidates through our own comprehensive job portal equipped with a large size updated database of IT professionals. We also make the best use of our external contacts to source the required candidates. In short, we, at Angel Gulf Jobs act as a trustworthy referral agent and enable the clients throughout the Gulf region to have an access to the best of IT talent across different technologies and job functions.


                  </p>
                 
                  <p>
                  IT & other companies in Gulf may send in their enquiry for our IT recruitment services  <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>
                  

                  <p>
                    As far as job seekers are concerned we take utmost care that
                    we only keep the latest jobs in the security industry in our
                    database and help them with the most rewarding career in the
                    industry. Job seekers may register with us for FREE
                    <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITIndustry;
=======
import React from "react";
import { NavLink } from "react-router-dom";
import itImg from "../../assets/images/sitemap/it.jpg";
import webDesignersImg from "../../assets/images/sitemap/it/it-industry-web-designers.jpg";
import phpDevelopersImg from "../../assets/images/sitemap/it/it-industry-php-developers.jpg";
import netDevelopersImg from "../../assets/images/sitemap/it/it-industry-net-developers.jpg";
import networkingProfessionalsImg from "../../assets/images/sitemap/it/it-industry-networking-professionals.jpg";
import softwareTestersImg from "../../assets/images/sitemap/it/it-industry-software-testers.jpg";
import projectManagersImg from "../../assets/images/sitemap/it/it-industry-project-managers.jpg";
import sapSpecialistsImg from "../../assets/images/sitemap/it/it-industry-sap-specialists.jpg";
import digitalMarketingImg from "../../assets/images/sitemap/it/it-industry-digital-marketing.jpg";
import contentWritersImg from "../../assets/images/sitemap/it/it-industry-content-writers.jpg";
import graphicDesignerImg from "../../assets/images/sitemap/it/it-industry-graphic-designer.jpg";
import teamLeaderImg from "../../assets/images/sitemap/it/it-industry-team-leader.jpg";
import businessAnalyticsImg from "../../assets/images/sitemap/it/it-industry-business-analytics.jpg";
import CarouselItems from "../common/CarouselItems";
import { Helmet } from "react-helmet";

const ITIndustry = () => {
    const images = [
        webDesignersImg, phpDevelopersImg, netDevelopersImg, networkingProfessionalsImg,
        softwareTestersImg, projectManagersImg, sapSpecialistsImg, digitalMarketingImg, 
        contentWritersImg, graphicDesignerImg, teamLeaderImg, businessAnalyticsImg
    ];

    const titles = [
        "Web Designers", "PHP Developers", "Net Developers", "Networking Professionals", 
        "Software Testers", "Project Managers", "SAP Specialists", "Digital Marketing", 
        "Content Writers", "Graphic Designer", "Team Leader", "Business Analytics"
    ];

    const altTexts = [
        "IT Jobs in Gulf", "Software Testing Jobs", "Net Developers Jobs In Gulf", 
        "Networking Professionals Jobs In Gulf", "Software Testers Jobs In Gulf", 
        "Project Managers Jobs In Gulf", "SAP Specialists Jobs In Gulf", 
        "Digital Marketing Jobs In Gulf", "Content Writers Jobs In Gulf", 
        "Graphic Designer Jobs In Gulf", "Team Leader Jobs In Gulf", 
        "Business Analytics Jobs In Gulf"
    ];

  return (
    <div>
      <Helmet>
      <title>IT Jobs in Gulf, Software Testing Jobs in Dubai, Qatar, Kuwait</title>
<meta name="keywords" content="IT Jobs in Gulf, Software Testing Jobs in Dubai, Qatar, Kuwait, IT industry, IT jobs, information technology jobs, web design jobs, software programmer jobs, networking jobs, jobs in Dubai, jobs in Abu Dhabi, jobs in Oman, jobs in Gulf"/>
<meta name="description" content="Find and apply for your perfect IT jobs in gulf. Discover exciting career opportunities in software testing jobs in Dubai, Qatar, Kuwait, Oman etc."/>
<link rel="canonical" href="https://www.angelgulfjobs.com/it-industry"/>
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${itImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">
                  IT Jobs in Gulf

                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Security Officers Jobs</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}
        <div>
          <div className="section-full p-t30 p-b50 bg-white">
            <div className="container">
              <div className="section-content">
                <div className="row">
                  <div>
                    <h4>
                    Industries We Serve

                    </h4>
                    <p>
                    Angel Gulf Jobs is a full-service overseas manpower agency promoted by highly experienced professionals having worked across different sectors in the Gulf region. Find and apply for your perfect IT jobs in gulf. Discover exciting career opportunities in software testing jobs in Dubai, Qatar, Kuwait, Oman etc. The exposure derived by promoters in their work life across different sectors has helped them to provide services across a wide range of industries. As far as Gulf region is concerned, Angel Gulf Jobs serves all the top sectors including construction, oil & gas, hospitality, banking, shipping and more. Above all, the biggest strength of Angel Gulf Jobs lies in its database of candidates which is spread across different work categories making it possible to serve almost all the important industries across entire Gulf & other regions.


                    </p>
                    
                  </div>
                  {/* Carousel in col-lg-3 */}
                  <div className="col-lg-6 col-md-12">
                    <div className="carousel-wrapper p-3">
                      <div className="carouselbackground">
                        <h5 className="text-center fw-semibold text-white py-2 px-1">
                        Here is a listing of major job categories
                        in the IT industry that we recruit for
                        </h5>
                      </div>

                      <CarouselItems
                        images={images}
                        titles={titles}
                        altTexts={altTexts}
                      />
                      {/*  */}
                    </div>
                  </div>
                  {/* Empty col-lg-9 */}
                  <div className="col-lg-6 col-md-12">
                    {/* This section is empty for now */}
                    <h4 className="mt-3 mt-md-0">
                    IT Industry

                    </h4>
                    <p>
                    IT (information technology) has taken the world by storm; practically there is no industry which hasn’t been touched by information technology. Industries in the Gulf region are not an exception to the rule; IT is being implemented across all the sectors creating huge number of IT jobs across different job functions. There is huge demand for IT professionals – web designers, PHP developers, .Net developers, other programmers, project managers, networking professionals, software testers, SAP consultants (functional, technical), digital marketing specialists, content writers & so on.


                    </p>
                    
                  </div>
                  <p className="mt-2">
                  In 2015, the IT sector in the UAE is forecast to grow to Dh18.68 billion in 2015 from Dh17.17bn last year. The software sales will increase to Dh3.549bn in 2015 from Dh3bn in 2014, registering 18.1 per cent increase in local currency terms, according to BMI forecast. The UAE is one of the region’s fastest growing Enterprise Resource Planning (ERP) markets as modernization initiatives continue in an effort to increase international competitiveness.


                  </p>

                  <p>
                  The demand for IT professionals to fill up various IT job functions is consistently on the rise throughout the Gulf region. Many universities, colleges and IT institutes have been shaping individuals to fit into various IT jobs, however, the space is so huge that external assistance is often sought to full-fill the requirement. IT professionals have started migrating to various Gulf countries to fit into various IT job functions, however, lack of proper guidance & channel has been creating difficulties for both candidates as well as employers. It has been observed that the overseas agents are still working heavily towards the core sectors like construction, oil gas & so on. Very few overseas agents have a readily available database of IT professionals that can be delivered in a short notice of time.


                  </p>
                  <p>
                  We, at Angel Gulf Jobs are fully equipped to provide the best of qualified & trained IT professionals within the stipulated time limits. We primarily source candidates through our own comprehensive job portal equipped with a large size updated database of IT professionals. We also make the best use of our external contacts to source the required candidates. In short, we, at Angel Gulf Jobs act as a trustworthy referral agent and enable the clients throughout the Gulf region to have an access to the best of IT talent across different technologies and job functions.


                  </p>
                 
                  <p>
                  IT & other companies in Gulf may send in their enquiry for our IT recruitment services  <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>
                  

                  <p>
                    As far as job seekers are concerned we take utmost care that
                    we only keep the latest jobs in the security industry in our
                    database and help them with the most rewarding career in the
                    industry. Job seekers may register with us for FREE
                    <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITIndustry;
>>>>>>> 576083a43a265cea2d0cde471ab1fc556cb1d182
