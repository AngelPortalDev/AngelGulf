<<<<<<< HEAD
import React from "react";
import { NavLink } from "react-router-dom";
import shoppingImg from "../../assets/images/sitemap/malls.jpg";
import purchaseStaffImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-purchase-staff.jpg";
import supplyChainLogisticsImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-supply-chain-logistics.jpg";
import storesManagerImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-stores-manager.jpg";
import visualDisplayStaffImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-visual-display-staff.jpg";
import customerServiceImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-customer-service.jpg";
import salesStaffImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-sales-staff.jpg";
import accountsAsstsImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-accounts-assts.jpg";
import adminAsstsImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-administration-assts.jpg";
import systemsAdminImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-systems-admin.jpg";
import dataOperatorsImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-data-operators.jpg";
import billingStaffImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-billing-staff.jpg";
import itProfessionalsImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-it-professionals.jpg";
import CarouselItems from "../common/CarouselItems";
import { Helmet } from "react-helmet";

const ShoppingMalls = () => {
    const images = [
        purchaseStaffImg, supplyChainLogisticsImg, storesManagerImg, visualDisplayStaffImg,
        customerServiceImg, salesStaffImg, accountsAsstsImg, adminAsstsImg, 
        systemsAdminImg, dataOperatorsImg, billingStaffImg, itProfessionalsImg
    ];

    const titles = [
        "Purchase Staff", "Supply Chain/Logistics", "Stores Manager", "Visual Display Staff",
        "Customer Service", "Sales Staff", "Accounts Assts", "Administration Assts", 
        "Systems Admin", "Data Operators", "Billing Staff", "IT Professionals"
    ];

    const altTexts = [
        "Shopping Malls in Dubai", "Shopping Malls Jobs in Dubai", "Stores Manager Jobs In Gulf",
        "Visual Display Staff Jobs In Gulf", "Customer Service Jobs In Gulf", "Sales Staff Jobs In Gulf",
        "Accounts Assts Jobs In Gulf", "Administration Assts Jobs In Gulf", "Systems Admin Jobs In Gulf",
        "Data Operators Jobs In Gulf", "Billing Staff Jobs In Gulf", "IT Professionals Jobs In Gulf"
    ];

  return (
    <div>
      <Helmet>
      <title>Shopping Malls in Dubai, Shopping Malls Jobs in Dubai</title>
<meta name="keywords" content="Shopping Malls Jobs in Dubai, Shopping Malls in Dubai, shopping malls in Dubai, Dubai shopping mall jobs, jobs in Dubai shopping malls"/>
<meta name="description" content="Search 100+ shopping mall jobs in Dubai available for male and female both. Here is the list of best shopping malls in Dubai with jobs vacancies available."/>
<link rel="canonical" href="https://www.angelgulfjobs.com/shopping-malls-in-dubai"/>  
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${shoppingImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">Shopping Malls In Dubai

                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Shopping Malls In Dubai

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
                    Angel Gulf Jobs is a full-service overseas manpower agency promoted by highly experienced professionals having worked across different sectors in the Gulf region. Search 100+ shopping mall jobs in Dubai available for male and female both. Here is the list of best shopping malls in Dubai with jobs vacancies available. The exposure derived by promoters in their work life across different sectors has helped them to provide services across a wide range of industries. As far as Gulf region is concerned, Angel Gulf Jobs serves all the top sectors including construction, oil & gas, hospitality, banking, shipping and more. Above all, the biggest strength of Angel Gulf Jobs lies in its database of candidates which is spread across different work categories making it possible to serve almost all the important industries across entire Gulf & other regions.


                    </p>
                  </div>
                  {/* Carousel in col-lg-3 */}
                  <div className="col-lg-6 col-md-12">
                    <div className="carousel-wrapper p-3">
                      <div className="carouselbackground">
                        <h5 className="text-center fw-semibold text-white py-2 px-1">
                        Here is a listing of the job functions for
                        Malls & Supermarkets we source candidates for
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
                    Shopping Malls In Dubai


                    </h4>
                    <p>
                    Operations Manager, Floor Manager, Merchandiser, Visual Merchandiser, Stores Manager, Operations Assistant, Assistant Merchandiser, Stores Assistant, Sales Manager, Sales Assistant, House Keeping Manager, Housing Keeping Staff, Administration Manager, Administration Assistant, Accounts Manager, Accounts Assistant, IT Manager, IT Assistant, Data Entry Staff, Billing Staff, Packaging & Delivery Staff.


                    </p>
                  </div>
                  <p className="mt-2">
                  It is rightly said that Dubai is a city of shopping malls. There are over 70 huge shopping malls and numerous small & under construction malls in the city of Dubai. Dubai mall is world’s largest shopping mall attracting over 2,00,000 shoppers per day. Dubai Mall attracted 75 million visitors in 2013, making it the most visited retail destination in the world for the third consecutive year. Dubai Mall surpassed Mall of America and Bullring Birmingham in the UK (with 40 million visitors each), Intu Trafford Centre, UK (30 million visitors), Part Dieu Lyon, France (29.4 million visitors), and West Edmonton Mall, Canada (28 million visitors), according to Emaar Properties. There is equal attraction for entertainment, food & beverages offered by Dubai mall & other malls. Dubai Mall features a variety of attractions, such as KidZania and Dubai Aquarium and Underwater Zoo.


                  </p>

                  <p>
                  There are various important malls in the city of Dubai namely: Dubai Mall, Mall of the Emirates, BurJuman, City Centre, Festival City Mall, Ibn Battuta Mall, Mercato Shopping Mall, Wafi Mall, Al Ghurair Mall & so on. Shopping in Dubai is finding new dimensions due to growing economy & population, spending power of people and events like Dubai shopping festival.


                  </p>
                  <p>
                  Dubai Shopping Festival (DSF) started on 16 February 1996 as a retail event intended to benefit retail trade in Dubai, United Arab Emirates. It has since been promoted as a tourist attraction.[citation needed It is an annual month-long event, usually scheduled during the first quarter of the year, and attracts about 3 million people to Dubai. During the Festival, shops offer discounts on their merchandise, daily car raffles are drawn, and there is a fireworks display. Kicking off every January, the Dubai Shopping Festival (DSF) is a retail celebration that is a shoppers' paradise and renowned the world-over for its amazing deals and promotions. The event takes place every year 1st January to 1st February.


                  </p>
                  
                  <h5>Dubai Shopping Malls, Jobs In Dubai Shopping Malls:

</h5>
                  <p>
                  Dubai mall alone hosts over 1200 shops having generated more than 25,000 jobs. More & more job openings are created year-on-year basis. These are the statistics related to only one shopping mall in Dubai… huge job opportunities exist when shopping malls in Dubai are considered in totality. Jobs in Dubai shopping malls exist for all the jobs functions & at each job level - Operations Manager, Floor Manager, Merchandiser, Visual Merchandiser, Stores Manager, Operations Assistant, Assistant Merchandiser, Stores Keeper, Sales Manager, Sales Assistant, House Keeping Manager, Housing Keeping Staff, Administration Manager, Administration Assistant, Accounts Manager, Accounts Assistant, IT Manager, IT Assistant, Data Entry Staff, Billing Staff, Packaging & Delivery Staff.


                  </p>

                  <p>
                  Shopping malls in Dubai may send in their enquiry for our retail manpower recruitment services
                    <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>

                  <p>
                  As far as job seekers are concerned we take utmost care that we only keep the latest Dubai shopping mall jobs in our database and help them with the most rewarding career in the retail industry. Job seekers may register with us for FREE
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

export default ShoppingMalls;
=======
import React from "react";
import { NavLink } from "react-router-dom";
import shoppingImg from "../../assets/images/sitemap/malls.jpg";
import purchaseStaffImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-purchase-staff.jpg";
import supplyChainLogisticsImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-supply-chain-logistics.jpg";
import storesManagerImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-stores-manager.jpg";
import visualDisplayStaffImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-visual-display-staff.jpg";
import customerServiceImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-customer-service.jpg";
import salesStaffImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-sales-staff.jpg";
import accountsAsstsImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-accounts-assts.jpg";
import adminAsstsImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-administration-assts.jpg";
import systemsAdminImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-systems-admin.jpg";
import dataOperatorsImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-data-operators.jpg";
import billingStaffImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-billing-staff.jpg";
import itProfessionalsImg from "../../assets/images/sitemap/shopping/shopping-malls-in-dubai-it-professionals.jpg";
import CarouselItems from "../common/CarouselItems";
import { Helmet } from "react-helmet";

const ShoppingMalls = () => {
    const images = [
        purchaseStaffImg, supplyChainLogisticsImg, storesManagerImg, visualDisplayStaffImg,
        customerServiceImg, salesStaffImg, accountsAsstsImg, adminAsstsImg, 
        systemsAdminImg, dataOperatorsImg, billingStaffImg, itProfessionalsImg
    ];

    const titles = [
        "Purchase Staff", "Supply Chain/Logistics", "Stores Manager", "Visual Display Staff",
        "Customer Service", "Sales Staff", "Accounts Assts", "Administration Assts", 
        "Systems Admin", "Data Operators", "Billing Staff", "IT Professionals"
    ];

    const altTexts = [
        "Shopping Malls in Dubai", "Shopping Malls Jobs in Dubai", "Stores Manager Jobs In Gulf",
        "Visual Display Staff Jobs In Gulf", "Customer Service Jobs In Gulf", "Sales Staff Jobs In Gulf",
        "Accounts Assts Jobs In Gulf", "Administration Assts Jobs In Gulf", "Systems Admin Jobs In Gulf",
        "Data Operators Jobs In Gulf", "Billing Staff Jobs In Gulf", "IT Professionals Jobs In Gulf"
    ];

  return (
    <div>
      <Helmet>
      <title>Shopping Malls in Dubai, Shopping Malls Jobs in Dubai</title>
<meta name="keywords" content="Shopping Malls Jobs in Dubai, Shopping Malls in Dubai, shopping malls in Dubai, Dubai shopping mall jobs, jobs in Dubai shopping malls"/>
<meta name="description" content="Search 100+ shopping mall jobs in Dubai available for male and female both. Here is the list of best shopping malls in Dubai with jobs vacancies available."/>
<link rel="canonical" href="https://www.angelgulfjobs.com/shopping-malls-in-dubai"/>  
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${shoppingImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">Shopping Malls In Dubai

                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Shopping Malls In Dubai

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
                    Angel Gulf Jobs is a full-service overseas manpower agency promoted by highly experienced professionals having worked across different sectors in the Gulf region. Search 100+ shopping mall jobs in Dubai available for male and female both. Here is the list of best shopping malls in Dubai with jobs vacancies available. The exposure derived by promoters in their work life across different sectors has helped them to provide services across a wide range of industries. As far as Gulf region is concerned, Angel Gulf Jobs serves all the top sectors including construction, oil & gas, hospitality, banking, shipping and more. Above all, the biggest strength of Angel Gulf Jobs lies in its database of candidates which is spread across different work categories making it possible to serve almost all the important industries across entire Gulf & other regions.


                    </p>
                  </div>
                  {/* Carousel in col-lg-3 */}
                  <div className="col-lg-6 col-md-12">
                    <div className="carousel-wrapper p-3">
                      <div className="carouselbackground">
                        <h5 className="text-center fw-semibold text-white py-2 px-1">
                        Here is a listing of the job functions for
                        Malls & Supermarkets we source candidates for
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
                    Shopping Malls In Dubai


                    </h4>
                    <p>
                    Operations Manager, Floor Manager, Merchandiser, Visual Merchandiser, Stores Manager, Operations Assistant, Assistant Merchandiser, Stores Assistant, Sales Manager, Sales Assistant, House Keeping Manager, Housing Keeping Staff, Administration Manager, Administration Assistant, Accounts Manager, Accounts Assistant, IT Manager, IT Assistant, Data Entry Staff, Billing Staff, Packaging & Delivery Staff.


                    </p>
                  </div>
                  <p className="mt-2">
                  It is rightly said that Dubai is a city of shopping malls. There are over 70 huge shopping malls and numerous small & under construction malls in the city of Dubai. Dubai mall is world’s largest shopping mall attracting over 2,00,000 shoppers per day. Dubai Mall attracted 75 million visitors in 2013, making it the most visited retail destination in the world for the third consecutive year. Dubai Mall surpassed Mall of America and Bullring Birmingham in the UK (with 40 million visitors each), Intu Trafford Centre, UK (30 million visitors), Part Dieu Lyon, France (29.4 million visitors), and West Edmonton Mall, Canada (28 million visitors), according to Emaar Properties. There is equal attraction for entertainment, food & beverages offered by Dubai mall & other malls. Dubai Mall features a variety of attractions, such as KidZania and Dubai Aquarium and Underwater Zoo.


                  </p>

                  <p>
                  There are various important malls in the city of Dubai namely: Dubai Mall, Mall of the Emirates, BurJuman, City Centre, Festival City Mall, Ibn Battuta Mall, Mercato Shopping Mall, Wafi Mall, Al Ghurair Mall & so on. Shopping in Dubai is finding new dimensions due to growing economy & population, spending power of people and events like Dubai shopping festival.


                  </p>
                  <p>
                  Dubai Shopping Festival (DSF) started on 16 February 1996 as a retail event intended to benefit retail trade in Dubai, United Arab Emirates. It has since been promoted as a tourist attraction.[citation needed It is an annual month-long event, usually scheduled during the first quarter of the year, and attracts about 3 million people to Dubai. During the Festival, shops offer discounts on their merchandise, daily car raffles are drawn, and there is a fireworks display. Kicking off every January, the Dubai Shopping Festival (DSF) is a retail celebration that is a shoppers' paradise and renowned the world-over for its amazing deals and promotions. The event takes place every year 1st January to 1st February.


                  </p>
                  
                  <h5>Dubai Shopping Malls, Jobs In Dubai Shopping Malls:

</h5>
                  <p>
                  Dubai mall alone hosts over 1200 shops having generated more than 25,000 jobs. More & more job openings are created year-on-year basis. These are the statistics related to only one shopping mall in Dubai… huge job opportunities exist when shopping malls in Dubai are considered in totality. Jobs in Dubai shopping malls exist for all the jobs functions & at each job level - Operations Manager, Floor Manager, Merchandiser, Visual Merchandiser, Stores Manager, Operations Assistant, Assistant Merchandiser, Stores Keeper, Sales Manager, Sales Assistant, House Keeping Manager, Housing Keeping Staff, Administration Manager, Administration Assistant, Accounts Manager, Accounts Assistant, IT Manager, IT Assistant, Data Entry Staff, Billing Staff, Packaging & Delivery Staff.


                  </p>

                  <p>
                  Shopping malls in Dubai may send in their enquiry for our retail manpower recruitment services
                    <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>

                  <p>
                  As far as job seekers are concerned we take utmost care that we only keep the latest Dubai shopping mall jobs in our database and help them with the most rewarding career in the retail industry. Job seekers may register with us for FREE
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

export default ShoppingMalls;
>>>>>>> 576083a43a265cea2d0cde471ab1fc556cb1d182
