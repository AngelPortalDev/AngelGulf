import React from "react";
import family_visa from './../../assets/images/family-visa.jpg';
import resident_visa from './../../assets/images/resident-visa.jpg';
import visaServiceImage from '../../assets/images/backgroundImages/visaServices.jpg'
import { Helmet } from 'react-helmet';


const VisaService = () => {
  return (
    <div>

     {/* Heading & MetaTags  */}

     <Helmet>
     <title>Gulf Visa services, Gulf Visa, Gulf Free Visa Jobs | Angel Gulf Jobs</title>
      <meta name="keywords" content="Gulf Visa services, Gulf Visa, Gulf Free Visa Jobs, manpower consultancy, passport services, visa services, ticketing services, emigration services"/>
      <meta name="description" content="Get insights on Gulf Visa Services based in Mumbai, Angel Gulf Jobs is a best consultancy providing complete overseas gulf free visa jobs."/>
      <link rel="canonical" href="https://www.angelgulfjobs.com/visa"/>   
      <meta name="revisit-after" content="7 days"/>
      <meta name="robots" content="index, follow"/>
      </Helmet>

      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${visaServiceImage})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">Gulf Visa Services</h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Gulf Visa Services</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}
        {/* Employer Detail START */}
        <div className="section-full  p-t20 p-b40 bg-white">
          <div className="container">
            <div className="section-content">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-10 col-md-12">
                  {/* Candidate detail START */}
                  <div className="cabdidate-de-info">
                    {/* <h4 className="twm-s-title">About Company</h4> */}
                    <p>
                      Angel Gulf Jobs is a full-service overseas manpower
                      consultancy based in Mumbai providing complete services to
                      clients and job seekers. The work starts right from
                      searching for candidates to selection process to visa
                      services to emigration & successfully placing them.
                    </p>
                    <h4 className="twm-s-title">
                      Requirements for Ministry Approval Business Visa
                    </h4>
                    <ul className="description-list-2">
                      <li>
                        <i className="feather-check" />
                        Online Business Invitation from Saudi Company
                      </li>
                      <li>
                        <i className="feather-check" />
                        Certificate of Registration of Saudi Company
                      </li>
                      <li>
                        <i className="feather-check" />
                        Indian Company covering letter with seal and sign
                      </li>
                      <li>
                        <i className="feather-check" />
                        Original Chamber of Commerce letter with seal and sign
                      </li>
                      <li>
                        <i className="feather-check" />
                        Company visiting card showing designation as per the
                        online invitation.
                      </li>
                    </ul>
                    <h4 className="twm-s-title">
                      Requirements for Ministry Approval Temporary Work Visit
                      Visa
                    </h4>
                    <ul className="description-list-2">
                      <li>
                        <i className="feather-check" />
                        Copy of Ministry approval visa of Saudi company
                      </li>
                      <li>
                        <i className="feather-check" />
                        Indian company covering letter with seal and sign
                      </li>
                      <li>
                        <i className="feather-check" />
                        Original Chamber of Commerce letter with seal and sign
                      </li>
                      <li>
                        <i className="feather-check" />
                        Certificate of Registration of Saudi Company (C.R Copy)
                      </li>
                      <li>
                        <i className="feather-check" />
                        Original agreement between Saudi and Indian company with
                        both company seal and sign, Attested by Ministry of
                        foreign affairs Saudi
                      </li>
                      <li>
                        <i className="feather-check" />
                        Original Degree or Diploma Certificate as per Visa
                        Category
                      </li>
                    </ul>
                  </div>

                  <div className="row mt-5">
                    <div className="col">
                      <h3>Family Visa</h3>
                      <img
                        src={family_visa}
                        className="img-fluid rounded-3"
                        alt="Gulf Visa" title="Gulf Visa" 
                      />
                      <h4 className="twm-s-title">
                      Requirements for Ministry Approval Business Visa
                    </h4>
                    <ul className="description-list-2">
                      <li>
                        <i className="feather-check" />
                        Copy of Ministry approval visa
                      </li>
                      <li>
                        <i className="feather-check" />
                        Passport Copy of sponsor
                      </li>
                      <li>
                        <i className="feather-check" />
                        Iqama Copy of sponsor
                      </li>
                    </ul>
                    </div>
                    <div className="col">
                      <h3>Resident Visa</h3>
                      <img
                        src={resident_visa}
                        className="img-fluid rounded-3"
                        alt="Resident Visa" title="Resident Visa"
                      />
                         <ul className="description-list-2">
                      <li>
                        <i className="feather-check" />
                        Copy of Ministry approval visa
                      </li>
                      <li>
                        <i className="feather-check" />
                        Medical Report
                      </li>
                      <li>
                        <i className="feather-check" />
                        Passport Copy of Sponsor
                      </li>
                      <li>
                        <i className="feather-check" />
                        Iqama Copy of sponsor
                      </li>
                      <li>
                        <i className="feather-check" />
                        Polio Certificate for Child
                      </li>
                    </ul>
                    </div>
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

export default VisaService;
