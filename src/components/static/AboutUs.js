import React from "react";
import abouUs from '../../assets/images/backgroundImages/banner_about_us.jpg'
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
      <title>Overseas Manpower Consultancy, Overseas Manpower Consultants, Gulf Jobs Abroad</title>
<meta name="keywords" content="Overseas Manpower Consultancy, Overseas Manpower Consultants, Gulf Jobs Abroad, overseas manpower consultancy, gulf job consultants, overseas jobs, overseas employment, gulf job vacancies, overseas consultancy in Mumbai" />
<meta name="description" content="We are service provider of Overseas Manpower Consultancy Services in Mumbai. We have latest gulf jobs abroad vacancies in our huge database. Connect with our Overseas Manpower Consultants."/>
<link rel="canonical" href="https://www.angelgulfjobs.com/about-us"/>
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${abouUs})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">Overseas Manpower Consultancy</h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <NavLink to='/' >Home</NavLink>
                  </li>
                  <li>Overseas Manpower Consultancy</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}

        {/* Employer Detail START */}
        <div className="section-full  p-t30 p-b50 bg-white">
          <div className="container">
            <div className="section-content">
              <h3 className="blueuText">
                Angel Gulf Jobs: A Leader in Overseas Manpower Recruitment
              </h3>
              <p>
                Angel Gulf Jobs is an overseas manpower consultancy that
                specializes in connecting individuals with employment
                opportunities in Gulf countries, Bahrain, Kuwait, Qatar, Oman,
                Saudi Arabia, and the United Arab Emirates. Our comprehensive HR
                services include recruitment, staffing and employability
                training, and other recruitment and selection process support.
              </p>

              <p>
                We work as a bridge between overseas recruiters and aspirants to
                fill the employment gap in Gulf countries for the following
                sectors: Hospitality & Tourism, Retail, Healthcare, BFSI, IT &
                ITeS, Oil & Gas, Logistics, E-Commerce, Construction and
                Manufacturing. With 11+ years of expertise in the field, we
                proudly call ourselves the connoisseurs of the Gulf jobs
                industry. To undertake the work, we have approvals from Govt. Of
                India Ministry of Labour REG. NO.
                B-0866/MUM/PER/1000+/5/9186/2016 (Valid Till 04/04/2027). It
                makes us the legitimate{" "}
                <strong>overseas manpower consultancy </strong> in India.
              </p>
              <p>
                Our head office is in Mumbai, and our branch offices are spread
                across India and overseas. Our extensive expertise in the field
                has enabled us to assist countless individuals in securing
                employment, specific to skills in Gulf countries and
                facilitating them to settle in a new land comfortably.
              </p>
              <h4>How Can You Find Gulf Jobs in Angel Portal</h4>
              <p>
                <strong>Angel Gulf jobs recruitment agency</strong> is a
                credible Gulf job consultant. We work as a vital bridge between
                job seekers and recruiters, helping both to meet their needs. We
                accept applications through our website (you can upload the
                latest resume on the website), channel partners, and
                advertisements on diverse job portals. Further, you can connect
                with our team through a call.
              </p>
              <h4>Our USP</h4>
              <ul className="description-list-2">
                <li>
                  <i className="feather-check" />
                  Supported by a Strong Group of Individuals
                </li>
                <li>
                  <i className="feather-check" />
                  Vast Overseas Experience of Promoters
                </li>

                <li>
                  <i className="feather-check" />
                  Large & Up-To-Date Candidate Database
                </li>
              </ul>
              <p>
                Angel Gulf Jobs is part of Angel Portal Pvt Ltd. (A corporate
                having a significant presence in employment, education and food
                sectors in India and overseas locations). The promoters of Angel
                Gulf Jobs have extensive overseas experience, including in the
                Gulf region.AGJ maintains a database of job seekers yearning to
                work abroad (Gulf region). Our passionate and professional team
                constantly work on the data pool and enriches it with righteous
                resources. Our large and eclectic database helps us cater to
                diverse requirements on short notice.
              </p>
              <p>
                The entire team of Angle Gulf Jobs aims to become the preferred
                recruitment partner & trusted Gulf job consultants for overseas
                recruiters and all job seekers. We are committed to providing
                top-of-the-class services to our clients and fulfilling the
                dreams of Indian and other location aspirants of securing a
                suitable Gulf job.
              </p>
            </div>
          </div>
        </div>
        {/* Employer Detail END */}
      </div>
      {/* CONTENT END */}
    </div>
  );
};

export default AboutUs;
