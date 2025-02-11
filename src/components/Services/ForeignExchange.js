import React from "react";
// import foreignExchangeimg from '../../assets/images/backgroundImages/foreign-exchange.jpg';
import foreignExchangeimg from '../../assets/images/NewImages/foreignExchange.jpg';

import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet";

const ForeignExchange = () => {
  return (
    <div>
      <Helmet>
        <title>Foreign Exchange (Forex) Online, Gulf Currency Converter, Live UAE Exchange Rates</title>
        <meta name="keywords" content="foreign exchange (Forex) online, Gulf currency converter, live currency rates, UAE exchange rates, currency exchange rates"/>
        <meta name="description" content="Foreign exchange (forex) services from Angel Gulf Jobs. Get the latest news & info on Gulf foreign exchange; try out simple-to-use currency converter and other resources."/>
        <link rel="canonical" href="https://www.angelgulfjobs.com/foreign-exchange"/>
        <meta name="revisit-after" content="7 days"/>
        <meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${foreignExchangeimg})`}}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">Foreign Exchange (Forex)</h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <NavLink to='/'>Home</NavLink>
                  </li>
                  <li>Foreign Exchange (Forex)</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}
        {/* Employer Detail START */}
        <div className="container-fluid d-none" style={{ background: "#3498db" }}>
          <div className="container ">
            {/* <div className="row">
              <div className="col-lg-2">
                <div class="form-group">
                  <label for="amount" class="mb-0 text-light">
                    Amount
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    name=""
                    value=""
                    id="amount"
                    placeholder="Enter Amount"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div class="form-group">
                  <label for="amount" class="mb-0 text-light">
                    Amount
                  </label>
                  <div class="dropdown">
                    <button
                      class="btn btn-outline-primary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Select State
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Select State
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="form-group">
                  <label for="amount" class="mb-0 text-light">
                    Amount
                  </label>
                  <div class="dropdown">
                    <button
                      class="btn btn-outline-primary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Select City
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Select City
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <button className="btn btn-primary">Go</button>
              </div>
            </div> */}

            <div className="row pt-2">
              <div className="col-lg-12">
                <h3 className="text-light">
                  <strong>Currency Converter</strong>
                </h3>
              </div>
              <div className="col-lg-2">
                {/* <div className="form-group">
                  <label htmlFor="amount" className="mb-0 text-light">
                    Amount
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name
                    defaultValue
                    id="amount"
                    placeholder="Enter Amount"
                  />
                </div> */}

                <div className="form-group mb-3">
                  <label htmlFor="amount" className="mb-0 text-light">
                    Amount
                  </label>
                  <input
                    name="phone"
                    type="number"
                    className="form-control"
                    required
                    placeholder="Enter Phone Number *"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                {/* <label htmlFor="from-amount" className="mb-0 text-light">
                  From
                </label>
                <div className="form-group">
                  <select className="form-control">
                    <option>USD</option>
                  </select>
                </div> */}

                <div className="form-group mb-3">
                  <label htmlFor="from-amount" className="mb-0 text-light">
                    From
                  </label>
                  <select
                    class="form-select form-control"
                    aria-label="Default select example"
                  >
                    <option >Select currency</option>
                    <option value="1">USD</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4">
              <div className="form-group mb-3">
                  <label htmlFor="from-amount" className="mb-0 text-light">
                    To
                  </label>
                  <select
                    class="form-select form-control"
                    aria-label="Default select example"
                  >
                    <option >Select currency</option>
                    <option value="1">USD</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2 align-self-end">
                <div className="form-group" style={{marginBottom:'28px'}}>
                  <button type="button" className="btn btn-light" name="button" style={{height:'50px'}}>
                    Convert
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full  p-t50 p-b50 bg-white">
          <div className="container">
            <div className="section-content">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-10 col-md-12">
                  {/* Candidate detail START */}
                  <div className="cabdidate-de-info">
                    {/* <h4 className="twm-s-title">About Company</h4> */}
                    <p>
                      Angel Gulf Jobs is a full-service Gulf job consultant
                      providing end to end Gulf recruitment services. The
                      services include counselling, job search, skills tests,
                      interview preparation, visa assistance, other
                      documentation, and travel arrangement to foreign exchange
                      (forex) services. As far as foreign exchange is concerned,
                      Angel Gulf Jobs provides latest news & info on GCC / Gulf
                      foreign currency exchange, UAE currency exchange and more.
                      It also provides simple-to-use currency converter and live
                      Gulf currency exchange rates for the convenience of job
                      seekers and candidates.
                    </p>
                    <p>Point To Remember When Purchasing Foreign Exchange:</p>

                    <h4 className="twm-s-title">
                      What documents are required to purchase foreign exchange?
                    </h4>
                    <p>
                      At first, in-order to purchase foreign exchange you will
                      need copies of the passport, pan card, employment visa,
                      work permit and letter from the overseas employer.
                    </p>

                    <h4>
                      How much foreign exchange is available to a person going
                      abroad on employment?
                    </h4>
                    <p>
                      Person going abroad for employment can draw foreign
                      exchange up-to USD 100,000 from any authorised dealer in
                      India on the basis of self-declaration.
                    </p>
                    <p>
                      Source:  &nbsp;
                      <NavLink
                        to="https://rbi.org.in"
                        target="_blank"
                        rel="noreferrer"
                        className="textlinkstyle"
                      >
                        https://rbi.org.in
                      </NavLink>
                    </p>

                    <h4>What is the best source to buy foreign exchange?</h4>
                    <p>
                      There are various players in the market who sell foreign
                      exchange. They include authorised full-fledged money
                      changers, banks, travel agents and the unregulated grey
                      market. However, forex dealers charge the lowest
                      commission as compared to banks or travel agents. If the
                      rupee is trading at 67.59 per euro, a bank will charge you
                      around 70-72. This rate varies from bank to bank. A money
                      changer may charge a rate of 68-70, which again varies
                      from dealer to dealer. The unregulated grey market may
                      offer even "lower" rates, but it comes with a host of risk
                      factors. "A traveller may benefit by way of 10 paise to 25
                      paise, but it is always advisable to avoid going to the
                      grey market as the risks are counterfeit notes,
                      non-issuance of receipt for the foreign exchange. It is
                      most expensive to exchange currency at international
                      airports. There will be loading of 2-5% depending upon the
                      location.
                    </p>
                    <h4>How do I carry foreign exchange?</h4>
                    <p>
                      Up to a maximum of US $5000 can be withdrawn in the form
                      of foreign currency notes and coins. Instead of carrying
                      cash a traveller can get a prepaid forex card and load the
                      card with the required amount. Rest amount can be carried
                      through traveller’s cheque, bank draft or through bank
                      deposits. An international debit or credit card issued by
                      respective bank can be utilized at the destination
                      country.
                    </p>

                    <h4>
                      What are the different methods for sending money to India?
                    </h4>
                    <p>
                      Bank transfers, money exchange services and express money
                      transfers (like western union money transfer). When
                      sending money to India watch out for “transaction fee”,
                      “exchange rate margins” and other “backend charges”. The
                      transaction charges differ from medium to medium and also
                      from bank / agency to agency.
                    </p>
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

export default ForeignExchange;
