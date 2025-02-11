<<<<<<< HEAD
import React from "react";
import { NavLink } from "react-router-dom";
import retailImg from "../../assets/images/sitemap/RetailIndustrybanner.png";
import fashionDesignersImg from "../../assets/images/sitemap/retail/retail-indu-fashion-designers.jpg";
import graphicDesignersImg from "../../assets/images/sitemap/retail/retail-indu-graphic-designers.jpg";
import merchandisersImg from "../../assets/images/sitemap/retail/retail-indu-merchandisers.jpg";
import visualMerchandisersImg from "../../assets/images/sitemap/retail/retail-indu-visual-merchandisers.jpg";
import supplyChainLogisticsImg from "../../assets/images/sitemap/retail/retail-indu-supply-chain-logistics.jpg";
import purchaseManagerImg from "../../assets/images/sitemap/retail/retail-indu-purchase-manager.jpg";
import storesManagerImg from "../../assets/images/sitemap/retail/retail-indu-stores-manager.jpg";
import salesManagersImg from "../../assets/images/sitemap/retail/retail-indu-sales-managers.jpg";
import salesStaffImg from "../../assets/images/sitemap/retail/retail-indu-sales-staff.jpg";
import accountsStaffImg from "../../assets/images/sitemap/retail/retail-indu-accounts-staff.jpg";
import adminStaffImg from "../../assets/images/sitemap/retail/retail-indu-admin-staff.jpg";
import housekeepingImg from "../../assets/images/sitemap/retail/retail-indu-housekeeping.jpg";
import CarouselItems from "../common/CarouselItems";
import { Helmet } from "react-helmet";

const RetailJob = () => {
  const images = [
    fashionDesignersImg,
    graphicDesignersImg,
    merchandisersImg,
    visualMerchandisersImg,
    supplyChainLogisticsImg,
    purchaseManagerImg,
    storesManagerImg,
    salesManagersImg,
    salesStaffImg,
    accountsStaffImg,
    adminStaffImg,
    housekeepingImg,
  ];

  const titles = [
    "Fashion Designers",
    "Graphic Designers",
    "Merchandisers",
    "Visual Merchandisers",
    "Supply Chain / Logistics",
    "Purchase Manager",
    "Stores Manager",
    "Sales Managers",
    "Sales Staff",
    "Accounts Staff",
    "Admin Staff",
    "Housekeeping",
  ];

  const altTexts = [
    "Retail Jobs in Gulf",
    "Retail Jobs in Dubai",
    "Store Manager Jobs in Dubai",
    "Visual Merchandisers Jobs In Gulf",
    "Supply Chain / Logistics Jobs In Gulf",
    "Purchase Manager Jobs In Gulf",
    "Stores Manager Jobs In Gulf",
    "Sales Managers Jobs In Gulf",
    "Sales Staff Jobs In Gulf",
    "Accounts Staff Jobs In Gulf",
    "Admin Staff Jobs In Gulf",
    "Housekeeping Jobs In Gulf",
  ];

  return (
    <div>
      <Helmet>
      <title>Retail Jobs in Gulf, Retail Jobs in Dubai, Store Manager Jobs in Dubai</title>
<meta name="keywords" content="Retail Jobs in Gulf, Retail Jobs in Dubai, Store Manager Jobs in Dubai, retail jobs, sales jobs, jobs in Dubai, jobs in Abu Dhabi, jobs in Oman, jobs in Gulf"/>
<meta name="description" content="Check out latest retail jobs in gulf. Retail Jobs in Dubai, Kuwait, Oman etc. Read the job description & apply for store manager jobs in Dubai."/>
<link rel="canonical" href="https://www.angelgulfjobs.com/retail-jobs-gulf"/>
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${retailImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">Retail Jobs in Gulf
                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Retail Jobs in Gulf
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
                      across different sectors in the Gulf region. The exposure
                      derived by promoters in their work life across different
                      sectors has helped them to provide services across a wide
                      range of industries. Check out latest retail jobs in gulf.
                      Retail Jobs in Dubai, Kuwait, Oman etc. Read the job
                      description & apply for store manager jobs in Dubai. As
                      far as Gulf region is concerned, Angel Gulf Jobs serves
                      all the top sectors including construction, oil & gas,
                      hospitality, banking, shipping and more. Above all, the
                      biggest strength of Angel Gulf Jobs lies in its database
                      of candidates which is spread across different work
                      categories making it possible to serve almost all the
                      important industries across entire Gulf & other regions.
                    </p>
                  </div>
                  {/* Carousel in col-lg-3 */}
                  <div className="col-lg-6 col-md-12">
                    <div className="carousel-wrapper p-3">
                      <div className="carouselbackground">
                        <h5 className="text-center fw-semibold text-white py-2 px-1">
                          Here is a listing of major job categories in the IT
                          industry that we recruit for
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
                      Retail Industry | Retail Jobs In Gulf
                    </h4>
                    <p>
                      The role of oil & gas and construction industry in the
                      development of Gulf economies cannot be denied. However,
                      now that the population has gone up to a large extent due
                      to migration of people from all over the world in search
                      of livelihood & growth; the demand for consumer goods has
                      also risen considerably. According to Alpen Capital's
                      report "GCC Retail Industry, released in January 2015, GCC
                      retail sales are forecasted to grow at a compound annual
                      growth rate (CAGR) of 7.3 per cent between 2013 and 2018
                      to reach $285 billion. Governments across the GCC are
                      currently shifting their focus to the growth of non-oil
                      sectors such as retail and tourism in order to achieve
                      economic diversification. Despite the drop in oil prices,
                      the GCC retail market and sales are expected to continue
                      growing steadily.
                    </p>
                  </div>
                  <h5 className="mt-2">Here are certain facts & figs:</h5>
                  <p>
                    UAE: Its retail space grew by 7 per cent in 2014 to reach
                    1.6 million square metres, and sales grew 6 per cent to
                    $70.9bn (AT Kearney's estimates). Many retailers anticipate
                    growth in 2015 also.
                  </p>

                  <p>
                    Qatar: Qatar registered total retail sales as high as
                    $12.4bn with a 9.7 per cent annual growth over the past four
                    years. Saudi Arabia: It is the biggest retail market in the
                    GCC region. The country's retail space grew 5.6 per cent to
                    2.1 million square metres in 2014 and sales increased 6.4
                    per cent to reach $96.3bn (AT Kearney's estimates).
                  </p>
                  <p>
                    Oman: The retail sector in Oman is forecast to register
                    significant opportunities between 2015 and 2019. Retail
                    sales are likely to grow at 6 percent per year through 2020.
                    Kuwait: Retail sales are expected to grow at 6 percent
                    annually through 2020 due to the ongoing urbanisation,
                    rising population of young and affluent, and increase in
                    expatriate workforce
                  </p>
                  <p>
                    There are $28bn worth of standalone shopping mall projects
                    at various stages of development â€“ under construction,
                    planned, design, or at tender stages. This is excluding
                    retail elements within mixed use projects.
                  </p>
                  <h5>Sales Jobs, Retail Jobs In Gulf (GCC):</h5>
                  <p>
                    The above figures make it clear that the retail industry in
                    the Gulf region is all set to grow at a tremendous pace. The
                    magical growth that retail industry has seen in the Gulf has
                    also given rise to sales & retail jobs in the entire Gulf
                    region. There is huge demand coming up for sales & retail
                    professionals from malls, departmental & other local stores.
                    The requirement for trained retail professionals is on the
                    rise for all the job functions as well as experience level.
                  </p>

                  <p>
                    Retail companies in Gulf may send in their enquiry for our
                    retail manpower recruitment services
                    <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>

                  <p>
                    As far as job seekers are concerned we take utmost care that
                    we only keep the latest retail industry jobs in our database
                    and help them with the most rewarding career in the retail
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

export default RetailJob;
=======
import React from "react";
import { NavLink } from "react-router-dom";
import retailImg from "../../assets/images/sitemap/RetailIndustrybanner.png";
import fashionDesignersImg from "../../assets/images/sitemap/retail/retail-indu-fashion-designers.jpg";
import graphicDesignersImg from "../../assets/images/sitemap/retail/retail-indu-graphic-designers.jpg";
import merchandisersImg from "../../assets/images/sitemap/retail/retail-indu-merchandisers.jpg";
import visualMerchandisersImg from "../../assets/images/sitemap/retail/retail-indu-visual-merchandisers.jpg";
import supplyChainLogisticsImg from "../../assets/images/sitemap/retail/retail-indu-supply-chain-logistics.jpg";
import purchaseManagerImg from "../../assets/images/sitemap/retail/retail-indu-purchase-manager.jpg";
import storesManagerImg from "../../assets/images/sitemap/retail/retail-indu-stores-manager.jpg";
import salesManagersImg from "../../assets/images/sitemap/retail/retail-indu-sales-managers.jpg";
import salesStaffImg from "../../assets/images/sitemap/retail/retail-indu-sales-staff.jpg";
import accountsStaffImg from "../../assets/images/sitemap/retail/retail-indu-accounts-staff.jpg";
import adminStaffImg from "../../assets/images/sitemap/retail/retail-indu-admin-staff.jpg";
import housekeepingImg from "../../assets/images/sitemap/retail/retail-indu-housekeeping.jpg";
import CarouselItems from "../common/CarouselItems";
import { Helmet } from "react-helmet";

const RetailJob = () => {
  const images = [
    fashionDesignersImg,
    graphicDesignersImg,
    merchandisersImg,
    visualMerchandisersImg,
    supplyChainLogisticsImg,
    purchaseManagerImg,
    storesManagerImg,
    salesManagersImg,
    salesStaffImg,
    accountsStaffImg,
    adminStaffImg,
    housekeepingImg,
  ];

  const titles = [
    "Fashion Designers",
    "Graphic Designers",
    "Merchandisers",
    "Visual Merchandisers",
    "Supply Chain / Logistics",
    "Purchase Manager",
    "Stores Manager",
    "Sales Managers",
    "Sales Staff",
    "Accounts Staff",
    "Admin Staff",
    "Housekeeping",
  ];

  const altTexts = [
    "Retail Jobs in Gulf",
    "Retail Jobs in Dubai",
    "Store Manager Jobs in Dubai",
    "Visual Merchandisers Jobs In Gulf",
    "Supply Chain / Logistics Jobs In Gulf",
    "Purchase Manager Jobs In Gulf",
    "Stores Manager Jobs In Gulf",
    "Sales Managers Jobs In Gulf",
    "Sales Staff Jobs In Gulf",
    "Accounts Staff Jobs In Gulf",
    "Admin Staff Jobs In Gulf",
    "Housekeeping Jobs In Gulf",
  ];

  return (
    <div>
      <Helmet>
      <title>Retail Jobs in Gulf, Retail Jobs in Dubai, Store Manager Jobs in Dubai</title>
<meta name="keywords" content="Retail Jobs in Gulf, Retail Jobs in Dubai, Store Manager Jobs in Dubai, retail jobs, sales jobs, jobs in Dubai, jobs in Abu Dhabi, jobs in Oman, jobs in Gulf"/>
<meta name="description" content="Check out latest retail jobs in gulf. Retail Jobs in Dubai, Kuwait, Oman etc. Read the job description & apply for store manager jobs in Dubai."/>
<link rel="canonical" href="https://www.angelgulfjobs.com/retail-jobs-gulf"/>
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${retailImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">Retail Jobs in Gulf
                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Retail Jobs in Gulf
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
                      across different sectors in the Gulf region. The exposure
                      derived by promoters in their work life across different
                      sectors has helped them to provide services across a wide
                      range of industries. Check out latest retail jobs in gulf.
                      Retail Jobs in Dubai, Kuwait, Oman etc. Read the job
                      description & apply for store manager jobs in Dubai. As
                      far as Gulf region is concerned, Angel Gulf Jobs serves
                      all the top sectors including construction, oil & gas,
                      hospitality, banking, shipping and more. Above all, the
                      biggest strength of Angel Gulf Jobs lies in its database
                      of candidates which is spread across different work
                      categories making it possible to serve almost all the
                      important industries across entire Gulf & other regions.
                    </p>
                  </div>
                  {/* Carousel in col-lg-3 */}
                  <div className="col-lg-6 col-md-12">
                    <div className="carousel-wrapper p-3">
                      <div className="carouselbackground">
                        <h5 className="text-center fw-semibold text-white py-2 px-1">
                          Here is a listing of major job categories in the IT
                          industry that we recruit for
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
                      Retail Industry | Retail Jobs In Gulf
                    </h4>
                    <p>
                      The role of oil & gas and construction industry in the
                      development of Gulf economies cannot be denied. However,
                      now that the population has gone up to a large extent due
                      to migration of people from all over the world in search
                      of livelihood & growth; the demand for consumer goods has
                      also risen considerably. According to Alpen Capital's
                      report "GCC Retail Industry, released in January 2015, GCC
                      retail sales are forecasted to grow at a compound annual
                      growth rate (CAGR) of 7.3 per cent between 2013 and 2018
                      to reach $285 billion. Governments across the GCC are
                      currently shifting their focus to the growth of non-oil
                      sectors such as retail and tourism in order to achieve
                      economic diversification. Despite the drop in oil prices,
                      the GCC retail market and sales are expected to continue
                      growing steadily.
                    </p>
                  </div>
                  <h5 className="mt-2">Here are certain facts & figs:</h5>
                  <p>
                    UAE: Its retail space grew by 7 per cent in 2014 to reach
                    1.6 million square metres, and sales grew 6 per cent to
                    $70.9bn (AT Kearney's estimates). Many retailers anticipate
                    growth in 2015 also.
                  </p>

                  <p>
                    Qatar: Qatar registered total retail sales as high as
                    $12.4bn with a 9.7 per cent annual growth over the past four
                    years. Saudi Arabia: It is the biggest retail market in the
                    GCC region. The country's retail space grew 5.6 per cent to
                    2.1 million square metres in 2014 and sales increased 6.4
                    per cent to reach $96.3bn (AT Kearney's estimates).
                  </p>
                  <p>
                    Oman: The retail sector in Oman is forecast to register
                    significant opportunities between 2015 and 2019. Retail
                    sales are likely to grow at 6 percent per year through 2020.
                    Kuwait: Retail sales are expected to grow at 6 percent
                    annually through 2020 due to the ongoing urbanisation,
                    rising population of young and affluent, and increase in
                    expatriate workforce
                  </p>
                  <p>
                    There are $28bn worth of standalone shopping mall projects
                    at various stages of development â€“ under construction,
                    planned, design, or at tender stages. This is excluding
                    retail elements within mixed use projects.
                  </p>
                  <h5>Sales Jobs, Retail Jobs In Gulf (GCC):</h5>
                  <p>
                    The above figures make it clear that the retail industry in
                    the Gulf region is all set to grow at a tremendous pace. The
                    magical growth that retail industry has seen in the Gulf has
                    also given rise to sales & retail jobs in the entire Gulf
                    region. There is huge demand coming up for sales & retail
                    professionals from malls, departmental & other local stores.
                    The requirement for trained retail professionals is on the
                    rise for all the job functions as well as experience level.
                  </p>

                  <p>
                    Retail companies in Gulf may send in their enquiry for our
                    retail manpower recruitment services
                    <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>

                  <p>
                    As far as job seekers are concerned we take utmost care that
                    we only keep the latest retail industry jobs in our database
                    and help them with the most rewarding career in the retail
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

export default RetailJob;
>>>>>>> 576083a43a265cea2d0cde471ab1fc556cb1d182
