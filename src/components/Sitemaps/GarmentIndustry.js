import React from "react";
import { NavLink } from "react-router-dom";
import garmentImg from "../../assets/images/sitemap/Garments-&-FMCG-Sector.jpg";
import merchandisersImg from "../../assets/images/sitemap/garment/garments-&-fmcg-sector-merchandisers.jpg";
import rndPersonnelImg from "../../assets/images/sitemap/garment/garments-&-fmcg-sector-r-&-d-personnel.jpg";
import qualityControllersImg from "../../assets/images/sitemap/garment/garments-&-fmcg-sector-quality-controllers.jpg";
import patternMastersImg from "../../assets/images/sitemap/garment/garments-&-fmcg-sector-pattern-masters.jpg";
import productionManagersImg from "../../assets/images/sitemap/garment/garments-&-fmcg-sector-production-managers.jpg";
import industrialEngineersImg from "../../assets/images/sitemap/garment/garments-&-fmcg-sector-industrial-engineers.jpg";
import floorSupervisorsImg from "../../assets/images/sitemap/garment/garments-&-fmcg-sector-floor-supervisors.jpg";
import designersImg from "../../assets/images/sitemap/garment/garments-&-fmcg-sector-designers.jpg";
import textileDesignersImg from "../../assets/images/sitemap/garment/garments-&-fmcg-sector-textile-designers.jpg";
import fashionDesignersImg from "../../assets/images/sitemap/garment/garments-&-fmcg-sector-fashion-designers.jpg";
import cadTechnologistsImg from "../../assets/images/sitemap/garment/garments-&-fmcg-sector-cad-technologists.jpg";
import complianceExecutivesImg from "../../assets/images/sitemap/garment/garments-&-fmcg-sector-compliance-executives.jpg";
import skilledUnskilledLabourImg from "../../assets/images/sitemap/garment/garments-&-fmcg-sector-skilled-unskilled-labour.jpg";
import processingLaboursImg from "../../assets/images/sitemap/garment/garments-&-fmcg-sector-production-supervisors.jpg";
import storeManagerImg from "../../assets/images/sitemap/garment/garments-&-fmcg-sector-store-manager.jpg";
import purchaseOfficersImg from "../../assets/images/sitemap/garment/garments-&-fmcg-sector-purchase-officers.jpg";
import marketingExecutivesImg from "../../assets/images/sitemap/garment/garments-&-fmcg-sector-marketing-executives.jpg";
import CarouselItems from "../common/CarouselItems";
import { Helmet } from "react-helmet-async";

const GarmentIndustry = () => {
    const images = [
         merchandisersImg, rndPersonnelImg, qualityControllersImg,
        patternMastersImg, productionManagersImg, industrialEngineersImg, floorSupervisorsImg,
        designersImg, textileDesignersImg, fashionDesignersImg, cadTechnologistsImg, 
        complianceExecutivesImg, skilledUnskilledLabourImg, processingLaboursImg, storeManagerImg,
        purchaseOfficersImg, marketingExecutivesImg
    ];

    const titles = [
        "Mngt Professionals", "Merchandisers", "R&D Personnel", "Quality Controllers", 
        "Pattern Masters", "Production Managers", "Industrial Engineers", "Floor Supervisors", 
        "Designers", "Textile Designers", "Fashion Designers", "CAD Technologists", 
        "Compliance Executives", "Skilled Unskilled Labour", "Processing Labours", "Store Manager",
        "Purchase Officers", "Marketing Executives"
    ];

    const altTexts = [
        "Jobs in Garment Industry", "Jobs in FMCG Companies", "R&D Personnel Jobs In Gulf", 
        "Quality Controllers Jobs In Gulf", "Pattern Masters Jobs In Gulf", "Production Managers Jobs In Gulf", 
        "Industrial Engineers Jobs In Gulf", "Floor Supervisors Jobs In Gulf", "Designers Jobs In Gulf", 
        "Textile Designers Jobs In Gulf", "Fashion Designers Jobs In Gulf", "CAD Technologists Jobs In Gulf", 
        "Compliance Executives Jobs In Gulf", "Skilled Unskilled Labour Jobs In Gulf", 
        "Processing Labours Jobs In Gulf", "Store Manager Jobs In Gulf", "Purchase Officers Jobs In Gulf",
        "Marketing Executives Jobs In Gulf"
    ];


  return (
    <div>
      <Helmet>
      <title>Jobs in Garment Industry, Jobs in FMCG Companies | Angel Gulf Jobs</title>
<meta name="keywords" content="Jobs in Garment Industry, Jobs in FMCG Companies, garment job vacancy, garment factory jobs near me, garment industry, fmcg jobs, jobs in Dubai, jobs in Abu Dhabi, jobs in Oman, jobs in Gulf"/>
<meta name="description" content="Find and apply jobs in garment industry in entire gulf region. Angel Gulf Jobs offers latest jobs in FMCG companies in Dubai, Qatar, Kuwait, Oman etc."/>
<link rel="canonical" href="https://www.angelgulfjobs.com/garments-fmcg-sector"/>
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${garmentImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">
                  Jobs in Garment Industry


                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Jobs in Garment Industry

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
                    <h4>Industries We Serve

                    </h4>
                    <p>
                    Angel Gulf Jobs is a professionally managed overseas manpower agency having years of experience in the field. We help aspirants find jobs that match their profile and skills across sectors in the Gulf region. If you are aspiring for <strong> jobs in garment industry </strong> in the Gulf countries and have a degree and experience in the same field, apply for the latest industry jobs through us. You can use this platform to search latest jobs in the garment and FMCG industry and get complete guidance with regard to the openings, like salary, location, skills required, etc.



                    </p>
                   
                  </div>
                  {/* Carousel in col-lg-3 */}
                  <div className="col-lg-6 col-md-12">
                    <div className="carousel-wrapper p-3">
                      <div className="carouselbackground">
                        <h5 className="text-center fw-semibold text-white py-2 px-1">
                        Here is a listing of major job categories
                        in the Garment & FMCG industry that we recruit for
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
                    Garment Industry in Gulf Countries

                    </h4>
                    <p>
                    Are you looking for a job in the garment industry or fast-moving consumer goods in the Gulf countries? It is important to understand the scope of employment in the industry before applying.

</p>
<h4>Scope of Employment in the Garment Industry
</h4>
                    <p>
                    Dubai is well-known as the world’s fashion capital of the middle east, but it is not the only Gulf country exploiting the garment industry, making money and generating jobs. Saudi Arabia is also taking the lead. It has acquired 23 per cent of the whole GCC region market share. The annual fashion sales in the GCC market amount to 50 billion dollars. Other countries in the Gulf region are also following the footsteps of Dubai and Saudi Arabia which is generating plenty of jobs in the whole GCC region in the garment industry.



                    </p>
                  </div>
                  <h4 className="mt-2">Scope of Employment in the FMCG Industry
                  </h4>
                  <p >
                  The fast-moving consumer goods (FMCG) market is also a growing market in the Gulf region contributing significantly to its economy. Further, many countries in the region are endeavouring to exploit the market and boost revenue. The move is creating many jobs in FMCG companies and pulling talented people from all over the world.




                  </p>
               
                  <p>
                  Angel Gulf Jobs has professionals who deeply understand the garments and FMCG industry in the Gulf region and help professionals find jobs matching their skills.We help recruiters by assisting them with hiring rightly skilled human resources for Garment and FMCG industry.To job seekers we provide service for free. We maintain a database of job seekers and help them find relevant jobs according to their skill set.If you are looking for jobs in FMCG companies in the Gulf countries, drop your resume.




                  </p>

                

                  <p>
                  As far as job seekers are concerned we take utmost care that we only keep latest garment jobs, FMCG jobs in our database and help them with the most rewarding career in the garment / FMCG industry. Job seekers may register with us for FREE
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

export default GarmentIndustry;
