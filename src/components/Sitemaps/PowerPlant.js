import React from "react";
import { NavLink } from "react-router-dom";
import oilandGas from "../../assets/images/sitemap/power-plant-industries.jpg";
import plantPersonnelImg from "../../assets/images/sitemap/powerplant/power-plant-plant-personnel.jpg";
import maintenanceManagementImg from "../../assets/images/sitemap/powerplant/power-plant-maintenance-management.jpg";
import juniorElectricalImg from "../../assets/images/sitemap/powerplant/power-plant-junior-electrical.jpg";
import electricalEngineersImg from "../../assets/images/sitemap/powerplant/power-plant-electrical-engineers.jpg";
import nuclearStructuralImg from "../../assets/images/sitemap/powerplant/power-plant-nuclear-structural.jpg";
import mechanicalDesignImg from "../../assets/images/sitemap/powerplant/power-plant-mechanical-design.jpg";
import projectManagersImg from "../../assets/images/sitemap/powerplant/power-plant-project-managers.jpg";
import businessSalesManagerImg from "../../assets/images/sitemap/powerplant/power-plant-business-sales-manager.jpg";
import contractManagersImg from "../../assets/images/sitemap/powerplant/power-plant-contract-managers.jpg";
import technicalConsultantsImg from "../../assets/images/sitemap/powerplant/power-plant-technical-consultants.jpg";
import technicalAuthorImg from "../../assets/images/sitemap/powerplant/power-plant-technical-author.jpg";
import constructionManagersImg from "../../assets/images/sitemap/powerplant/power-plant-construction-managers.jpg";
import { Helmet } from "react-helmet-async";
import CarouselItems from "../common/CarouselItems";

const PowerPlant = () => {
  const images = [
    plantPersonnelImg,
    maintenanceManagementImg,
    juniorElectricalImg,
    electricalEngineersImg,
    nuclearStructuralImg,
    mechanicalDesignImg,
    projectManagersImg,
    businessSalesManagerImg,
    contractManagersImg,
    technicalConsultantsImg,
    technicalAuthorImg,
    constructionManagersImg,
  ];

  const titles = [
    "Plant Personnel",
    "Maintenance Management",
    "Junior Electrical",
    "Electrical Engineers",
    "Nuclear Structural",
    "Mechanical Design",
    "Project Managers",
    "Business Sales Manager",
    "Contract Managers",
    "Technical Consultants",
    "Technical Author",
    "Construction Managers",
  ];

  const altTexts = [
    "Power Plant Jobs Abroad",
    "Power Plant Gulf Jobs",
    "Junior Electrical Jobs In Gulf",
    "Electrical Engineers Jobs In Gulf",
    "Nuclear Structural Jobs In Gulf",
    "Mechanical Design Jobs In Gulf",
    "Project Managers Jobs In Gulf",
    "Business Sales Manager Jobs In Gulf",
    "Contract Managers Jobs In Gulf",
    "Technical Consultants Jobs In Gulf",
    "Technical Author Jobs In Gulf",
    "Construction Managers Jobs In Gulf",
  ];

  return (
    <div>
      <Helmet>
      <title>Power Plant Jobs Abroad, Power Plant Gulf Jobs | Angel Gulf Jobs</title>
<meta name="keywords" content="Power Plant Jobs Abroad, Power Plant Gulf Jobs, Power Plant jobs in Dubai, power plant industry jobs, power plant jobs in Bahrain, jobs in Kuwait, jobs in Oman, jobs in Qatar, jobs in Gulf"/>
<meta name="description" content="Apply for power plant jobs abroad and gulf countries. Check out latest Power Plant Gulf Jobs and get details on salary, company and location."/>
<link rel="canonical" href="https://www.angelgulfjobs.com/power-plant-industry"/>
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${oilandGas})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">Power Plant Jobs Abroad
                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Power Plant Jobs Abroad
                  </li>
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
                    <h4>Industries We Serve</h4>
                    <p>
                      Angel Gulf Jobs is a full-service overseas manpower agency
                      promoted by highly experienced professionals having worked
                      across different sectors in the Gulf region. Apply for oil
                      and gas jobs for freshers in gulf region. With a wide
                      range of Gulf Oil and Gas Jobs vacancies, we can help you
                      find the right type of work for you. Apply for oil and gas
                      jobs for freshers in gulf region. With a wide range of
                      Gulf Oil and Gas Jobs vacancies, we can help you find the
                      right type of work for you. The exposure derived by
                      promoters in their work life across different sectors has
                      helped them to provide services across a wide range of
                      industries. As far as Gulf region is concerned, Angel Gulf
                      Jobs serves all the top sectors including construction,
                      oil & gas, hospitality, banking, shipping and more. Above
                      all, the biggest strength of Angel Gulf Jobs lies in its
                      database of candidates which is spread across different
                      work categories making it possible to serve almost all the
                      important industries across entire Gulf & other regions.
                    </p>
                  </div>
                  {/* Carousel in col-lg-3 */}
                  <div className="col-lg-6 col-md-12">
                    <div className="carousel-wrapper p-3">
                      <div className="carouselbackground">
                        <h5 className="text-center fw-semibold text-white py-2 px-1">
                          Here is a listing of major job categories in the Power Plant Industry that we recruit for
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
                    <h4 className="mt-3 mt-md-0">Power Plant Industry</h4>
                    <p>
                      Gulf countries have achieved remarkable economic growth
                      since the start of the century. GCC economies have grown
                      five-fold to reach $1.6 trillion over the past 15 years,
                      while the population has risen nearly 80 per cent due to
                      rapid domestic population expansion and influx of
                      expatriates. The remarkable growth has made huge demands
                      on infrastructure from roads to rail, healthcare services
                      to education, with virtually every segment of the
                      supporting industries being stretched to their limits
                      including power and energy sector. This has resulted into
                      generation of huge number of power & energy plant jobs
                      attracting masses from different parts of the world. Truly
                      speaking, power is one of the core sectors of any economy
                      and is the major driving force behind industrialization
                      and infrastructure development. Lack of ample power
                      generation and related facilities cause not only
                      inconvenience, but also economic loss due to reduced
                      industrial production. The smooth functioning of the above
                      sectors and continuous economic growth can be achieved if
                      and only if power is generated in ample and is managed
                      professionally.
                    </p>
                  </div>
                  <p>
                    The tremendous growth seen in the industry has resulted into
                    huge demand for qualified professionals at various levels
                    with extensive experience and complete understanding of
                    industry requirements. Any hiccup in the regular and timely
                    supply of above professionals at various levels and job
                    functions would ultimately affect the overall economic
                    development. We at Angel Gulf Jobs are fully equipped to
                    provide the best of talented work force to the clients even
                    at shorter notice to fit into various power & energy plant
                    job functions. We primarily source candidates through our
                    own comprehensive job portal equipped with a large size
                    updated database of candidates. We also make the best use of
                    our external contacts to source the required candidates. In
                    short, we, at Angel Gulf Jobs act as trustworthy referral
                    agent and enable the clients throughout the Gulf region to
                    have an access to the best talented work force.
                  </p>

                  <p>
                    Power & energy plant companies in Gulf may send in their
                    enquiry for our recruitment services
                    <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>
                  <p>
                    As far as job seekers are concerned we take utmost care that
                    we only keep the latest power & energy jobs in our database
                    and help them with the most rewarding career in the power &
                    energy plant industry. Job seekers may register with us for
                    FREE
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

export default PowerPlant;
