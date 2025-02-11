import React from "react";
import { NavLink } from "react-router-dom";
import AutomotiveJobImg from "../../assets/images/sitemap/Automotive-Industry.jpg";
import automotiveTechnicianImg from "../../assets/images/sitemap/automotive/automotive-industry-automotive-technician.jpg";
import automotiveMechanicImg from "../../assets/images/sitemap/automotive/automotive-industry-automotive-mechanic.jpg";
import midLevelTechnicianImg from "../../assets/images/sitemap/automotive/automotive-industry-mid-level-technician.jpg";
import automotiveSupervisorImg from "../../assets/images/sitemap/automotive/automotive-industry-automotive-supervisor.jpg";
import motorTechniciansImg from "../../assets/images/sitemap/automotive/automotive-industry-motor-technicians.jpg";
import serviceTechniciansImg from "../../assets/images/sitemap/automotive/automotive-industry-service-technicians.jpg";
import industryApprovedPanelImg from "../../assets/images/sitemap/automotive/automotive-industry-industry-approved-panel.jpg";
import petrolDieselTechniciansImg from "../../assets/images/sitemap/automotive/automotive-industry-petrol--diesel-technicians.jpg";
import driversImg from "../../assets/images/sitemap/automotive/automotive-industry-drivers.jpg";
import mechanicsImg from "../../assets/images/sitemap/automotive/automotive-industry-mechanics.jpg";
import paintersImg from "../../assets/images/sitemap/automotive/automotive-industry-painters.jpg";
import autoElectriciansImg from "../../assets/images/sitemap/automotive/automotive-industry-auto-electricians.jpg";
import dentorsImg from "../../assets/images/sitemap/automotive/automotive-industry-dentors.jpg";
import electricianImg from "../../assets/images/sitemap/automotive/automotive-industry-electrician.jpg";
import radiatorMechanicsImg from "../../assets/images/sitemap/automotive/automotive-industry-radiator-mechanics.jpg";
import salesPersonImg from "../../assets/images/sitemap/automotive/automotive-industry-sales-person.jpg";
import customerServiceImg from "../../assets/images/sitemap/automotive/automotive-industry-customer-service.jpg";
import vehicleLoansManagerImg from "../../assets/images/sitemap/automotive/automotive-industry-vehicle-loans-manager.jpg";
import billingAccountantImg from "../../assets/images/sitemap/automotive/automotive-industry-billing-accountant.jpg";
import { Helmet } from "react-helmet";
import CarouselItems from "../common/CarouselItems";

const AutomotiveJob = () => {
  const images = [
    automotiveTechnicianImg,
    automotiveMechanicImg,
    midLevelTechnicianImg,
    automotiveSupervisorImg,
    motorTechniciansImg,
    serviceTechniciansImg,
    industryApprovedPanelImg,
    petrolDieselTechniciansImg,
    driversImg,
    mechanicsImg,
    paintersImg,
    autoElectriciansImg,
    dentorsImg,
    electricianImg,
    radiatorMechanicsImg,
    salesPersonImg,
    customerServiceImg,
    vehicleLoansManagerImg,
    billingAccountantImg,
  ];

  const titles = [
    "Automotive Technician",
    "Automotive Mechanic",
    "Mid Level Technician",
    "Automotive Supervisor",
    "Motor Technicians",
    "Service Technicians",
    "Industry Approved Panel",
    "Petrol / Diesel Technicians",
    "Drivers",
    "Mechanics",
    "Painters",
    "Auto Electricians",
    "Dentors",
    "Electrician",
    "Radiator Mechanics",
    "Sales Person",
    "Customer Service",
    "Vehicle Loans Manager",
    "Billing / Accountant",
  ];

  const altTexts = [
    "Automotive Technician Jobs In Gulf",
    "Automotive Mechanic Jobs In Gulf",
    "Mid Level Technician Jobs In Gulf",
    "Automotive Supervisor Jobs In Gulf",
    "Motor Technicians Jobs In Gulf",
    "Service Technicians Jobs In Gulf",
    "Industry Approved Panel Jobs In Gulf",
    "Petrol / Diesel Technicians Jobs In Gulf",
    "Drivers Jobs In Gulf",
    "Mechanics Jobs In Gulf",
    "Painters Jobs In Gulf",
    "Auto Electricians Jobs In Gulf",
    "Dentors Jobs In Gulf",
    "Electrician Jobs In Gulf",
    "Radiator Mechanics Jobs In Gulf",
    "Sales Person Jobs In Gulf",
    "Customer Service Jobs In Gulf",
    "Vehicle Loans Manager Jobs In Gulf",
    "Billing / Accountant Jobs In Gulf",
  ];

  return (
    <div>
      <Helmet>
      <title>Automotive Gulf Jobs, Automotive Jobs in Gulf Countries</title>
<meta name="keywords" content="Automotive Gulf Jobs, Automotive Jobs in Gulf Countries, Automotive Jobs in Dubai, automotive industry, automobile jobs, jobs in Dubai, jobs in Abu Dhabi, jobs in Oman, jobs in Gulf" />
<meta name="description" content="Apply for automotive gulf jobs as it has a huge demand for engineering and technical support. Angel Gulf Jobs offers latest Automotive Jobs in Gulf Countries and abroad. " />
<link rel="canonical" href="https://www.angelgulfjobs.com/automotive-industry"/>
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${AutomotiveJobImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">
                    Automotive Gulf Jobs

                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Automotive Gulf Jobs
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
                    Angel Gulf Jobs is a full-service overseas manpower agency promoted by highly experienced professionals having worked across different sectors in the Gulf region. The exposure derived by promoters in their work life across different sectors has helped them to provide services across a wide range of industries. As far as Gulf region is concerned, Angel Gulf Jobs serves all the top sectors including construction, oil & gas, hospitality, banking, shipping and more. Above all, the biggest strength of Angel Gulf Jobs lies in its database of candidates which is spread across different work categories making it possible to serve almost all the important industries across entire Gulf & other regions.


                    </p>
                   
                  </div>
                  {/* Carousel in col-lg-3 */}
                  <div className="col-lg-6 col-md-12">
                    <div className="carousel-wrapper p-3">
                      <div className="carouselbackground">
                        <h5 className="text-center fw-semibold text-white py-2 px-1">
                        The job categories that we serve in the
                        automotive industry are as follows
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
                    <h4 className="mt-3 mt-md-0">Automotive Industry</h4>
                    <p>
                      GCC is the biggest economic block in the entire Middle
                      East region. The countries in the GCC region have seen
                      tremendous growth in both passenger as well as commercial
                      vehicle segments throughout the beginning of the century &
                      till date. The countries in the GCC region have achieved
                      double digit sales growth year-on-year basis. The light
                      weight segment itself in the Gulf region has witnessed
                      strong growth of over 20% in 2012 to touch around 1.5
                      million units. The industry is expected to continue this
                      upward trend, although at a slower pace, over the medium
                      term. The demand has risen across all the automotive
                      sectors including luxury cars and commercial sector result
                      into massive rise in automotive jobs / automobile jobs in
                      the entire gulf region.
                    </p>
                  </div>
                  <p className="mt-2">
                    Most Gulf countries reported a surge in overall passenger
                    car sales, which act as an important indicator of business
                    activity, reflecting the region’s consumer spending boom.
                    Rapid industrialization, migration of people from all over
                    the world in the Gulf region for jobs & business and
                    increased government spending are the main reasons for the
                    growth in the automotive sector. The demand in passenger car
                    sales is also coming from consumer with high disposal income
                    looking for replacement of their cars into a new or luxury
                    model, the large affluent expatriate population and
                    ultra-low subsidized petrol prices are also the contributing
                    factors. The demand is expected to grow consistently
                    throughout the GCC region in coming years too.
                  </p>
                  <p>
                    The growth of Automotive industry throughout the Gulf region
                    (GCC region) has resulted into a huge demand for
                    engineering, technical & other support workforce across
                    different automotive factories that have been setup
                    throughout the region. Continuous supply of technical &
                    non-technical work force to fit into various automotive /
                    automobile job functions is required by these factories to
                    meet the growing demand. Any time lag between the demand for
                    workers and their supply would create an adverse effect on
                    the entire automotive industry including the GCC economy. It
                    is of utmost importance that the industry keeps getting
                    regular supply of workforce at all the levels as per the
                    desired traits and above all at the right time.
                  </p>
                  <p>
                    Angel Gulf Jobs, being a specialized automotive / automobile
                    recruitment agency is fully equipped to provide the best of
                    talented automotive industry work-force to the clients even
                    at shorter notice. We primarily source candidates for
                    various automotive / automobile jobs through our own
                    comprehensive job portal equipped with a large size updated
                    database of candidates from the automotive industry across a
                    wide range of job functions. We also make the best use of
                    our external contacts to source the required candidates. To
                    conclude, we, at Angel Gulf Jobs act as trustworthy referral
                    agent and enable the clients in the automotive industry
                    throughout the Gulf region to have an access to the best of
                    talented work force within the stipulated time limits.
                  </p>

                  <p>
                    Automotive / automobile companies in Gulf may send in their
                    enquiry for our recruitment services
                    <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>

                  <p>
                    As far as job seekers are concerned we take utmost care that
                    we only keep latest automotive jobs, automobile jobs in our
                    database and help them with the most rewarding career in the
                    automotive industry. Job seekers may register with us for
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

export default AutomotiveJob;
