<<<<<<< HEAD
import React from "react";
import { NavLink } from "react-router-dom";
import travelImg from "../../assets/images/sitemap/travel.jpg";
import driversImg from "../../assets/images/sitemap/travel/travel-&-tourism-indu-drivers.jpg";
import chauffeursImg from "../../assets/images/sitemap/travel/travel-&-tourism-indu-chauffeur’s.jpg";
import ticketingClerksImg from "../../assets/images/sitemap/travel/travel-&-tourism-indu-ticketing-clerks.jpg";
import tourOperatorsImg from "../../assets/images/sitemap/travel/travel-&-tourism-indu-tour-operators.jpg";
import passportVisaStaffImg from "../../assets/images/sitemap/travel/travel-&-tourism-indu-passport-visa-staff.jpg";
import administrationImg from "../../assets/images/sitemap/travel/travel-&-tourism-indu-administration.jpg";
import accountsImg from "../../assets/images/sitemap/travel/travel-&-tourism-indu-accounts.jpg";
import marketingImg from "../../assets/images/sitemap/travel/travel-&-tourism-indu-marketing.jpg";
import CarouselItems from "../common/CarouselItems";
import { Helmet } from "react-helmet";

const TravelJobs = () => {
    const images = [
        driversImg, chauffeursImg, ticketingClerksImg, tourOperatorsImg, 
        passportVisaStaffImg, administrationImg, accountsImg, marketingImg
    ];

    const titles = [
        "Drivers", "Chauffer’s", "Ticketing Clerks", "Tour Operators", 
        "Passport, Visa Staff", "Administration", "Accounts", "Marketing"
    ];

    const altTexts = [
        "Travel Industry Jobs", "Travel & Tourism Jobs", "Ticketing Clerks Jobs In Gulf", 
        "Tour Operators Jobs In Gulf", "Passport, Visa Staff Jobs In Gulf", 
        "Administration Jobs In Gulf", "Accounts Jobs In Gulf", "Marketing Jobs In Gulf"
    ];

  return (
    <div>
      <Helmet>
      <title>Travel Industry Jobs, Travel & Tourism Jobs | Angel Gulf Jobs</title>
      <meta name="keywords" content="Travel Industry Jobs, Travel & Tourism Jobs, tourism management jobs, travel industry, travels jobs, tourism jobs, driving jobs, ticketing jobs, tour operator jobs, jobs in Dubai, jobs in Abu Dhabi, jobs in Oman, jobs in Gulf"/>
      <meta name="description" content="Get hired in travel industry jobs in gulf and other abroad countries. Apply for latest travel & tourism jobs in Dubai, Qatar, Kuwait, Oman and entire gulf region."/>
      <link rel="canonical" href="https://www.angelgulfjobs.com/travel-industry"/>
      <meta name="revisit-after" content="7 days"/>
      <meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${travelImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">
                    Travel Industry Jobs

                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Travel Industry Jobs
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
                      range of industries. Get hired in travel industry jobs in
                      gulf and other abroad countries. Apply for latest travel &
                      tourism jobs in Dubai, Qatar, Kuwait, Oman and entire gulf
                      region. As far as Gulf region is concerned, Angel Gulf
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
                          Here is a listing of major job categories in the
                          travel & tourism industry that we recruit for
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
                    <h4 className="mt-3 mt-md-0">Travel & Tourism Industry</h4>
                    <p>
                      Travel & tourism industry is growing at an enormous pace
                      throughout the Gulf region. Many factors have contributed
                      to its growth – large scale industrialization, growth of
                      construction industry, oil & gas sector and so on. Due to
                      massive growth in the above sectors people from different
                      parts of the world have migrated to various Gulf countries
                      resulting into huge demand in the travel sector.
                      Ultimately, the growth of travel sector has created space
                      for more & more job opportunities within the industry.
                      Added to this, the demand is also triggered by the
                      upcoming mega-projects like World Expo 2020 in Dubai and
                      FIFA World Cup 2022 in Qatar (Source Press Trust of India
                      | Dubai April 8, 2015). Huge demand is seen for drivers,
                      chauffeur’s, ticketing clerks / executives, tour
                      operators, passport & visa specialists, travel office
                      administration staff, accounting & finance staff and so on
                      across other job functions within the travel industry in
                      the Gulf region.
                    </p>
                  </div>
                  <p className="mt-2">
                    Dubai alone welcomed a record 10 million plus visitors in
                    2012, according to the recent statistics released by the
                    Department of Commerce and Tourism Marketing (DTCM). Abu
                    Dhabi, meanwhile, received 2.3 million visitors last year
                    and targets to attract 2.5 million visitors this year,
                    according to the Abu Dhabi Tourism & Culture Authority (TCA
                    Abu Dhabi). The report further projects that the average
                    growth of the travel and tourism sector’s contribution to
                    the UAE’s gross domestic product (GDP) will be over 8.1 per
                    cent annually during the period from 2011 to 2020. And that
                    the demand for jobs in the tourism sector will grow by 5.7
                    per cent per year until 2020.
                  </p>

                  <p>
                    The local training institutes are unable to meet the growing
                    demand of the travel industry and the assistance of overseas
                    recruitment agents is often being sought to full fill the
                    gap. The biggest challenge faced by travel & tourism
                    companies in the Gulf region is delay in supply of travel
                    staff as per the stipulated time limits resulting into huge
                    loss of business, revenue & reputation of the businesses.
                    Most agents do not have a ready database of trained
                    candidates for the travel industry as their major focus is
                    construction and Oil gas sector. It is only after when the
                    demand is raised by these companies, the agents start
                    looking for trained & experienced personnel from the travel
                    & tourism industry. This creates huge time lag between
                    demand & supply resulting into disturbances within the
                    industry.
                  </p>
                  <p>
                    We, at Angel Gulf Jobs are fully equipped to provide the
                    best of qualified & trained travel industry personnel within
                    stipulated time limits. We primarily source candidates
                    through our own comprehensive job portal equipped with a
                    large size updated database of candidates. We also make the
                    best use of our external contacts to source the required
                    candidates. In short, we, at Angel Gulf Jobs act as a
                    trustworthy referral agent and enable the clients throughout
                    the Gulf region to have an access to the best talent from
                    the travel & tourism industry.
                  </p>

                  <p>
                    Travel & tourism companies in Gulf may send in their enquiry
                    for our recruitment services{" "}
                    <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>

                  <p>
                    As far as job seekers are concerned we take utmost care that
                    we only keep latest travel industry jobs in our database and
                    help them with the most rewarding career in the travel &
                    tourism industry. Job seekers may register with us for FREE
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

export default TravelJobs;
=======
import React from "react";
import { NavLink } from "react-router-dom";
import travelImg from "../../assets/images/sitemap/travel.jpg";
import driversImg from "../../assets/images/sitemap/travel/travel-&-tourism-indu-drivers.jpg";
import chauffeursImg from "../../assets/images/sitemap/travel/travel-&-tourism-indu-chauffeur’s.jpg";
import ticketingClerksImg from "../../assets/images/sitemap/travel/travel-&-tourism-indu-ticketing-clerks.jpg";
import tourOperatorsImg from "../../assets/images/sitemap/travel/travel-&-tourism-indu-tour-operators.jpg";
import passportVisaStaffImg from "../../assets/images/sitemap/travel/travel-&-tourism-indu-passport-visa-staff.jpg";
import administrationImg from "../../assets/images/sitemap/travel/travel-&-tourism-indu-administration.jpg";
import accountsImg from "../../assets/images/sitemap/travel/travel-&-tourism-indu-accounts.jpg";
import marketingImg from "../../assets/images/sitemap/travel/travel-&-tourism-indu-marketing.jpg";
import CarouselItems from "../common/CarouselItems";
import { Helmet } from "react-helmet";

const TravelJobs = () => {
    const images = [
        driversImg, chauffeursImg, ticketingClerksImg, tourOperatorsImg, 
        passportVisaStaffImg, administrationImg, accountsImg, marketingImg
    ];

    const titles = [
        "Drivers", "Chauffer’s", "Ticketing Clerks", "Tour Operators", 
        "Passport, Visa Staff", "Administration", "Accounts", "Marketing"
    ];

    const altTexts = [
        "Travel Industry Jobs", "Travel & Tourism Jobs", "Ticketing Clerks Jobs In Gulf", 
        "Tour Operators Jobs In Gulf", "Passport, Visa Staff Jobs In Gulf", 
        "Administration Jobs In Gulf", "Accounts Jobs In Gulf", "Marketing Jobs In Gulf"
    ];

  return (
    <div>
      <Helmet>
      <title>Travel Industry Jobs, Travel & Tourism Jobs | Angel Gulf Jobs</title>
      <meta name="keywords" content="Travel Industry Jobs, Travel & Tourism Jobs, tourism management jobs, travel industry, travels jobs, tourism jobs, driving jobs, ticketing jobs, tour operator jobs, jobs in Dubai, jobs in Abu Dhabi, jobs in Oman, jobs in Gulf"/>
      <meta name="description" content="Get hired in travel industry jobs in gulf and other abroad countries. Apply for latest travel & tourism jobs in Dubai, Qatar, Kuwait, Oman and entire gulf region."/>
      <link rel="canonical" href="https://www.angelgulfjobs.com/travel-industry"/>
      <meta name="revisit-after" content="7 days"/>
      <meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${travelImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">
                    Travel Industry Jobs

                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Travel Industry Jobs
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
                      range of industries. Get hired in travel industry jobs in
                      gulf and other abroad countries. Apply for latest travel &
                      tourism jobs in Dubai, Qatar, Kuwait, Oman and entire gulf
                      region. As far as Gulf region is concerned, Angel Gulf
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
                          Here is a listing of major job categories in the
                          travel & tourism industry that we recruit for
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
                    <h4 className="mt-3 mt-md-0">Travel & Tourism Industry</h4>
                    <p>
                      Travel & tourism industry is growing at an enormous pace
                      throughout the Gulf region. Many factors have contributed
                      to its growth – large scale industrialization, growth of
                      construction industry, oil & gas sector and so on. Due to
                      massive growth in the above sectors people from different
                      parts of the world have migrated to various Gulf countries
                      resulting into huge demand in the travel sector.
                      Ultimately, the growth of travel sector has created space
                      for more & more job opportunities within the industry.
                      Added to this, the demand is also triggered by the
                      upcoming mega-projects like World Expo 2020 in Dubai and
                      FIFA World Cup 2022 in Qatar (Source Press Trust of India
                      | Dubai April 8, 2015). Huge demand is seen for drivers,
                      chauffeur’s, ticketing clerks / executives, tour
                      operators, passport & visa specialists, travel office
                      administration staff, accounting & finance staff and so on
                      across other job functions within the travel industry in
                      the Gulf region.
                    </p>
                  </div>
                  <p className="mt-2">
                    Dubai alone welcomed a record 10 million plus visitors in
                    2012, according to the recent statistics released by the
                    Department of Commerce and Tourism Marketing (DTCM). Abu
                    Dhabi, meanwhile, received 2.3 million visitors last year
                    and targets to attract 2.5 million visitors this year,
                    according to the Abu Dhabi Tourism & Culture Authority (TCA
                    Abu Dhabi). The report further projects that the average
                    growth of the travel and tourism sector’s contribution to
                    the UAE’s gross domestic product (GDP) will be over 8.1 per
                    cent annually during the period from 2011 to 2020. And that
                    the demand for jobs in the tourism sector will grow by 5.7
                    per cent per year until 2020.
                  </p>

                  <p>
                    The local training institutes are unable to meet the growing
                    demand of the travel industry and the assistance of overseas
                    recruitment agents is often being sought to full fill the
                    gap. The biggest challenge faced by travel & tourism
                    companies in the Gulf region is delay in supply of travel
                    staff as per the stipulated time limits resulting into huge
                    loss of business, revenue & reputation of the businesses.
                    Most agents do not have a ready database of trained
                    candidates for the travel industry as their major focus is
                    construction and Oil gas sector. It is only after when the
                    demand is raised by these companies, the agents start
                    looking for trained & experienced personnel from the travel
                    & tourism industry. This creates huge time lag between
                    demand & supply resulting into disturbances within the
                    industry.
                  </p>
                  <p>
                    We, at Angel Gulf Jobs are fully equipped to provide the
                    best of qualified & trained travel industry personnel within
                    stipulated time limits. We primarily source candidates
                    through our own comprehensive job portal equipped with a
                    large size updated database of candidates. We also make the
                    best use of our external contacts to source the required
                    candidates. In short, we, at Angel Gulf Jobs act as a
                    trustworthy referral agent and enable the clients throughout
                    the Gulf region to have an access to the best talent from
                    the travel & tourism industry.
                  </p>

                  <p>
                    Travel & tourism companies in Gulf may send in their enquiry
                    for our recruitment services{" "}
                    <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>

                  <p>
                    As far as job seekers are concerned we take utmost care that
                    we only keep latest travel industry jobs in our database and
                    help them with the most rewarding career in the travel &
                    tourism industry. Job seekers may register with us for FREE
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

export default TravelJobs;
>>>>>>> 576083a43a265cea2d0cde471ab1fc556cb1d182
