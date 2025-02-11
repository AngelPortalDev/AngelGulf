import React from "react";
import { NavLink } from "react-router-dom";
import hospitalImg from '../../assets/images/sitemap/Hospitality-Industry.jpg';
import hospitalityImg from "../../assets/images/sitemap/hospitality//hospitality-industry-food-&-beverage-manager.jpg";
import restaurantManagerImg from "../../assets/images/sitemap/hospitality//hospitality-industry-restaurant-manager.jpg";
import assistantManagerImg from "../../assets/images/sitemap/hospitality/hospitality-industry-assistant-manager.jpg";
import butlerImg from "../../assets/images/sitemap/hospitality/hospitality-industry-butler.jpg";
import stewardImg from "../../assets/images/sitemap/hospitality/hospitality-industry-steward.jpg";
import captainImg from "../../assets/images/sitemap/hospitality/hospitality-industry-captain.jpg";
import headWaiterImg from "../../assets/images/sitemap/hospitality/hospitality-industry-head-waiter.jpg";
import waiterWaitressImg from "../../assets/images/sitemap/hospitality/hospitality-industry-waiter-waitress.jpg";
import barWaiterWaitressImg from "../../assets/images/sitemap/hospitality/hospitality-industry-bar-waiter-waitress.jpg";
import bartenderImg from "../../assets/images/sitemap/hospitality/hospitality-industry-bartender.jpg";
import assistantBartenderImg from "../../assets/images/sitemap/hospitality/hospitality-industry-assistant-bartender.jpg";
import hostHostessImg from "../../assets/images/sitemap/hospitality/hospitality-industry-host-hostess.jpg";
import executiveSousChefImg from "../../assets/images/sitemap/hospitality/hospitality-industry-executive-sous-chef.jpg";
import generalManagerImg from "../../assets/images/sitemap/hospitality/hospitality-industry-general-manager.jpg";
import receptionistImg from "../../assets/images/sitemap/hospitality/hospitality-industry-receptionist.jpg";
import reservationsManagerImg from "../../assets/images/sitemap/hospitality/hospitality-industry-reservations-manager.jpg";
import travelDeskManagerImg from "../../assets/images/sitemap/hospitality/hospitality-industry-travel-desk-manager.jpg";
import cashierImg from "../../assets/images/sitemap/hospitality/hospitality-industry-cashier.jpg";
import guestRelationsExecImg from "../../assets/images/sitemap/hospitality/hospitality-industry-guest-relations-exec.jpg";
import lobbyDutyManagerImg from "../../assets/images/sitemap/hospitality/hospitality-industry-lobby-duty-manager.jpg";
import CarouselItems from "../common/CarouselItems";
import { Helmet } from "react-helmet";

const HospitalityJobs = () => {
    const images = [
        hospitalityImg, restaurantManagerImg, assistantManagerImg, butlerImg, 
        stewardImg, captainImg, headWaiterImg, waiterWaitressImg, 
        barWaiterWaitressImg, bartenderImg, assistantBartenderImg, hostHostessImg, 
        executiveSousChefImg, generalManagerImg, receptionistImg, reservationsManagerImg, 
        travelDeskManagerImg, cashierImg, guestRelationsExecImg, lobbyDutyManagerImg
    ];

    const titles = [
        "Food & Beverage Manager", "Restaurant Manager", "Assistant Manager", "Butler", 
        "Steward", "Captain", "Head Waiter", "Waiter/Waitress", 
        "Bar Waiter/Waitress", "Bartender", "Assistant Bartender", "Host / Hostess", 
        "Executive Sous Chef", "General Manager", "Receptionist", "Reservations Manager", 
        "Travel Desk Manager", "Cashier", "Guest Relations Exec", "Lobby / Duty Manager"
    ];

    const altTexts = [
        "Hospitality Industry Jobs", "Restaurant Manager Jobs In Gulf", "Assistant Manager Jobs In Gulf", 
        "Butler Jobs In Gulf", "Steward Jobs In Gulf", "Captain Jobs In Gulf", "Head Waiter Jobs In Gulf", 
        "Waiter/Waitress Jobs In Gulf", "Bar Waiter/Waitress Jobs In Gulf", "Bartender Jobs In Gulf", 
        "Assistant Bartender Jobs In Gulf", "Host / Hostess Jobs In Gulf", "Executive Sous Chef Jobs In Gulf", 
        "General Manager Jobs In Gulf", "Receptionist Jobs In Gulf", "Reservations Manager Jobs In Gulf", 
        "Travel Desk Manager Jobs In Gulf", "Cashier Jobs In Gulf", "Guest Relations Exec Jobs In Gulf", 
        "Lobby / Duty Manager Jobs In Gulf"
    ];

  return (
    <div>
      <Helmet>
      <title>Hospitality Industry Jobs, Hospitality Jobs in Gulf Countries</title>
<meta name="keywords" content="Hospitality Industry Jobs, Hospitality Jobs in Gulf Countries, Hospitality Jobs in Dubai, Hospitality industry, hotel jobs, jobs in Dubai, jobs in Abu Dhabi, jobs in Oman, jobs in Gulf" />
<meta name="description" content="Want to learn more about hospitality industry jobs? We are capable of providing the best of professionals hospitality jobs in gulf countries openings in the entire gulf region." />
<link rel="canonical" href="https://www.angelgulfjobs.com/hospitality-industry"/>
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${hospitalImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">
                    Hospitality Industry Jobs

                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Hospitality Industry Jobs
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
                    Angel Gulf Jobs is a full-service overseas manpower agency promoted by highly experienced professionals having worked across different sectors in the Gulf region. Want to learn more about hospitality industry jobs? We are capable of providing the best of professionals hospitality jobs in gulf countries openings in the entire gulf region. The exposure derived by promoters in their work life across different sectors has helped them to provide services across a wide range of industries. As far as Gulf region is concerned, Angel Gulf Jobs serves all the top sectors including construction, oil & gas, hospitality, banking, shipping and more. Above all, the biggest strength of Angel Gulf Jobs lies in its database of candidates which is spread across different work categories making it possible to serve almost all the important industries across entire Gulf & other regions.


                    </p>
                  </div>
                  {/* Carousel in col-lg-3 */}
                  <div className="col-lg-6 col-md-12">
                    <div className="carousel-wrapper p-3">
                      <div className="carouselbackground">
                        <h5 className="text-center fw-semibold text-white py-2 px-1">
                        Here is a listing of major job categories
                        in the hospitality industry that we recruit for
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
                    <h4 className="mt-3 mt-md-0">Hospitality Industry
                    </h4>
                    <p>
                    There are various economies across the globe that has seen tremendous growth over the last couple of years. Boom in IT industry, other sectors & large disposable income among youth have given rise to the world tourism. When we talk about tourism, there is no reason to skip GCC countries. People from all over the world travel to GCC countries to spend holidays & also for commercial reasons resulting into huge demand for hotels within the entire Gulf region thereby creating large number of hospitality hotel jobs in the region. The GCC hotel market is traditionally dominated by luxury and up-market deluxe establishments. But now more than ever, the regional trends are turning towards the travellers seeking a comfortable accommodation for reasonable price. Recent Alpen Capital report reveals that the GCC hospitality market is set to grow from USD 22.8 billion in 2013 to USD 35.9 billion by 2018 with a predicted annual growth rate of 9.5 percent.
                    </p>
                  </div>
                  <p className="mt-2">
                  The region is also preparing for a so called, “golden decade” of events – Expo2020 in Dubai and FIFA World Cup in Qatar, which is set to accommodate 3.7 million tourists in 2022. Qatar is planning to spend USD 200bn on tourism infrastructure ahead of 2022 World Cup, but the government objective is to increase the room number to 62,000 by 2030, and by that time to achieve seven million visitors to the country. Dubai is set to add 20,000-35,000 mid-market rooms by 2020 to its hotel offering (nearly 30 per cent of hotels will be in the mid-market category), now dominated by five-star hotels, which have a market share exceeding 60 percent. Dubai currently has 634 hotels and hotel apartments with 88,680 rooms, and just 10 percent of those are in the upper mid-scale and mid-scale segments. It is estimated that 25 million people will visit Expo 2020 in just six months, of which 70 per cent will come from outside the UAE, which is going to generate enormous amount of hospitality hotel job openings in the entire gulf region.
                  </p>
                  <p>A huge demand for trained work force has been created by the growing hospitality industry throughout the Gulf region. A regular demand for trained professionals is seen to be routed to countries like India, Philippines, Singapore & Nepal to meet the growing demand. We, Angel Gulf Jobs, being specialized hospitality hotel industry recruitment consultants for the entire Gulf region, are capable of providing the best of professionals at all the hospitality hotel job levels within the stipulated timelines from our clients. We source candidates from our own job portal along with our contacts and networks in countries like Philippines, Nepal & so on.

</p>

                  <p>
                  Hospitality Hotel companies in Gulf may send in their enquiry for our recruitment services
                    <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>

                  <p>
                  As far as job seekers are concerned we take utmost care that we only keep latest hospitality jobs, hotel jobs in our database and help them with the most rewarding career in the shipping industry. Job seekers may register with us for FREE
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

export default HospitalityJobs;
