import React from "react";
import { NavLink } from "react-router-dom";
import ShippingJobImg from "../../assets/images/sitemap/Shipping-&-Marine-Industry.jpg";
import chiefEngineerImg from "../../assets/images/sitemap/shipping/shipping-&-marine-chief-engineer.jpg";
import secondEngineerImg from "../../assets/images/sitemap/shipping/shipping-&-marine-second-engineer.jpg";
import thirdEngineerImg from "../../assets/images/sitemap/shipping/shipping-&-marine-third-engineer.jpg";
import fourthEngineerImg from "../../assets/images/sitemap/shipping/shipping-&-marine-fourth-engineer.jpg";
import engineeringCadetImg from "../../assets/images/sitemap/shipping/shipping-&-marine-engineering-cadet.jpg";
import qualifiedMemberImg from "../../assets/images/sitemap/shipping/shipping-&-marine-qualified-member.jpg";
import pumpManImg from "../../assets/images/sitemap/shipping/shipping-&-marine-pump-man.jpg";
import wiperImg from "../../assets/images/sitemap/shipping/shipping-&-marine-wiper.jpg";
import chiefOfficerImg from "../../assets/images/sitemap/shipping/shipping-&-marine-chief-officer.jpg";
import secondOfficerImg from "../../assets/images/sitemap/shipping/shipping-&-marine-second-officer.jpg";
import thirdOfficerImg from "../../assets/images/sitemap/shipping/shipping-&-marine-third-officer.jpg";
import deckCadetImg from "../../assets/images/sitemap/shipping/shipping-&-marine-deck-cadet.jpg";
import boatswainImg from "../../assets/images/sitemap/shipping/shipping-&-marine-boatswain.jpg";
import carpenterImg from "../../assets/images/sitemap/shipping/shipping-&-marine-carpenter.jpg";
import ableSeamanImg from "../../assets/images/sitemap/shipping/shipping-&-marine-able-seaman.jpg";
import ordinarySeamanImg from "../../assets/images/sitemap/shipping/shipping-&-marine-ordinary-seaman.jpg";
import CarouselItems from "../common/CarouselItems";
import { Helmet } from "react-helmet-async";

const ShippingJob = () => {
    const images = [
        chiefEngineerImg, secondEngineerImg, thirdEngineerImg, fourthEngineerImg, 
        engineeringCadetImg, qualifiedMemberImg, pumpManImg, wiperImg, 
        chiefOfficerImg, secondOfficerImg, thirdOfficerImg, deckCadetImg, 
        boatswainImg, carpenterImg, ableSeamanImg, ordinarySeamanImg
      ];
    
      const titles = [
        "Chief Engineer", "Second Engineer", "Third Engineer", "Fourth Engineer", 
        "Engineering Cadet", "Qualified Member", "Pump-man", "Wiper", 
        "Chief Officer", "Second Officer", "Third Officer/Third Mate", "Deck Cadet", 
        "Boatswain", "Carpenter", "Able Seaman", "Ordinary Seaman"
      ];
    
      const altTexts = [
        "Shipping Industry Jobs", "Marine Industry Jobs", "Third Engineer Jobs In Gulf", 
        "Fourth Engineer Jobs In Gulf", "Engineering Cadet Jobs In Gulf", "Qualified Member Jobs In Gulf", 
        "Pump-man Jobs In Gulf", "Wiper Jobs In Gulf", "Chief Officer Jobs In Gulf", 
        "Second Officer Jobs In Gulf", "Third Officer/Third Mate Jobs In Gulf", "Deck Cadet Jobs In Gulf", 
        "Boatswain Jobs In Gulf", "Carpenter Jobs In Gulf", "Able Seaman Jobs In Gulf", 
        "Ordinary Seaman Jobs In Gulf"
      ];

  return (
    <div>
      <Helmet>
      <title>Shipping Industry Jobs, Marine Industry Jobs | Angel Gulf Jobs</title>
<meta name="keywords" content="Shipping Industry Jobs, Marine Industry Jobs, vacancies in shipping companies, shipping industry, marine jobs, jobs in Dubai, jobs in Abu Dhabi, jobs in Oman, jobs in Gulf" />
<meta name="description" content="Apply for shipping industry Jobs in gulf. Check out latest vacancies on marine industry jobs and get details on salary, company and location." />
<link rel="canonical" href="https://www.angelgulfjobs.com/shipping-marine-industry"/>
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${ShippingJobImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">
                  Shipping Industry Jobs


                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Shipping Industry Jobs

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
                    Angel Gulf Jobs is a full-service overseas manpower agency promoted by highly experienced professionals having worked across different sectors in the Gulf region. Apply for shipping industry Jobs in gulf. Check out latest vacancies on marine industry jobs and get details on salary, company and location. The exposure derived by promoters in their work life across different sectors has helped them to provide services across a wide range of industries. As far as Gulf region is concerned, Angel Gulf Jobs serves all the top sectors including construction, oil & gas, hospitality, banking, shipping and more. Above all, the biggest strength of Angel Gulf Jobs lies in its database of candidates which is spread across different work categories making it possible to serve almost all the important industries across entire Gulf & other regions.



                    </p>
                   
                  </div>
                  {/* Carousel in col-lg-3 */}
                  <div className="col-lg-6 col-md-12">
                    <div className="carousel-wrapper p-3">
                      <div className="carouselbackground">
                        <h5 className="text-center fw-semibold text-white py-2 px-1">
                        The job categories that we serve in the
                        Shipping & Marine Industry are as follows
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
                    <h4 className="mt-3 mt-md-0">Shipping & Marine Industry</h4>
                    <p>
                    The shipping / maritime industry in the Gulf Cooperation Council (GCC) region is witnessing a robust growth driven by increasing international trade, strong demand from governmental agencies (Civil and Defence), robust tourism segment, including the overall Oil & Gas sector. Despite slowdown in the economy globally & a slump in the shipping sector, the maritime industry in the Arab states is making a remarkable growth & the GCC is evolving as the new hub for the industry. Apart from the increase in number of local players and capacities, the region is attracting international players in the various aspects of the maritime industry including logistics, shipbuilding, transportation etc. The marine industry in the GCC region has achieved a double digit growth year-on-year basis in the current century and is expected to grow continuously thereby generating huge number of shipping / maritime jobs throughout the gulf region year on year basis.
                    </p>
                  </div>
                  <p className="mt-2">
                  Owing to the remarkable growth in the ship building, port & cruise activities there is huge demand for qualified & trained personnel at all the levels in the marine industry. Apart from financial resources, well-trained and able work force is the backbone of any industry. Qualified, well-trained & experienced staff needs to be procured as and when the need arises to fit into various shipping / maritime job functions failure to which it can have adverse effect on the over-all functioning of the organization and the long term effects can be seen on the entire industry and economy. In order to sustain the growth, it is of paramount importance that the marine industry in the GCC region gets an un-interrupted supply of desired work-force.
                  </p>
                  
                  <p>
                  Angel Gulf Jobs, being a specialized shipping / maritime recruitment agency is fully equipped to provide the best of talented work-force to clients in shipping & marine industry even at shorter notice. We primarily source candidates through our own comprehensive job portal equipped with a large size updated database of candidates from the shipping & marine industry across a wide range of shipping industry job functions. We also make the best use of our external contacts to source the required candidates. We, at Angel Gulf Jobs act as trustworthy referral agent and enable the clients in the shipping & marine industry throughout the Gulf region to have an access to the best of talented work force within the stipulated time limits. Last but not least, we always go with the slogan “with you till you don’t need us in any way”.
                  </p>

                  <p>
                  Shipping / maritime companies in Gulf may send in their enquiry for our recruitment services
                    <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>

                  <p>
                  As far as job seekers are concerned we take utmost care that we only keep latest shipping jobs, maritime jobs in our database and help them with the most rewarding career in the shipping industry. Job seekers may register with us for FREE
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

export default ShippingJob;
