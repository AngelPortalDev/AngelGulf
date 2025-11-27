import React from "react";
import jobConsultance from '../../assets/images/Gulf-work-visafor-Indians.png';
import whyChoose from '../../assets/images/Role-of-Angel-Gulf-Jobs.png';
import visaServiceImage from '../../assets/images/backgroundImages/visaServices.jpg'
import { Helmet } from 'react-helmet';
import { NavLink } from "react-router-dom";


const VisaService = () => {
  return (
    <div>

      {/* Heading & MetaTags  */}

      <Helmet>
        <title>Gulf Employment Visa for Indians | Angel Gulf Jobs Mumbai</title>
        <meta name="keywords" content="Gulf work visa process, Gulf jobs for Indians, Work visa for Saudi Arabia, Overseas job consultancy in Mumbai, Angel Gulf Jobs, Gulf recruitment agencies in India" />
        <meta name="description" content="Get a Gulf employment visa easily with Angel Gulf Jobs, a trusted overseas job consultancy in Mumbai. Step-by-step guide for Saudi work visas, documents, and approvals." />
        <link rel="canonical" href="https://www.angelgulfjobs.com/visa" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index, follow" />
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
                    <NavLink to='/'>Home</NavLink>
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
                    <p className="mt-5">
                      Angel Gulf Jobs is a full-service overseas job consultancy in Mumbai, providing end-to-end recruitment services for employers and job seekers. Our work includes candidate sourcing, the recruitment process, visa services, emigration support, and final placement of manpower from India. As part of our commitment to guiding Indian overseas job seekers looking for Gulf jobs for Indians, we at Angel Gulf Jobs have outlined the complete Gulf employment visa process below.
                    </p>

                    <h4 className="twm-s-title">
                      Step-by-Step Guide to the Gulf Work Visa for Indians
                    </h4>

                    <div className="my-4">
                      <img
                        src={jobConsultance}
                        alt="Gulf work visa for Indians"
                        className="img-fluid w-100 rounded-4 shadow-sm"
                        style={{ objectFit: "contain" }}
                      />
                    </div>

                    <h5 className="twm-s-title">Step 1: Secure a Valid Job Offer and Verify Employer Legitimacy</h5>
                    <ul className="ps-4 mb-3" style={{ listStyleType: "disc" }}>
                      <li>
                        Angel Gulf Jobs is a verified recruitment agency, and we help you find genuine job offers from Gulf employers. Only verified Gulf employers post vacancies on our job portal.
                        <ul className="ps-4 mt-2" style={{ listStyleType: "circle" }}>
                          <li>Angel Gulf Jobs is also a licensed overseas recruitment agency with a valid RA number and registered on the eMigrate portal of the Indian Government.</li>
                        </ul>
                      </li>
                      <li><strong>Saudi Arabia:</strong> A Saudi company hiring manpower from India must issue a Wakala. This authorises a recruitment agent in India, such as Angel Gulf Jobs, to manage the Saudi recruitment and Saudi work visa formalities.</li>
                    </ul>
                    <p>For more details on Waqala System, visit: <a href="#" className="site-text-primary">Waqala System in Saudi Arabia</a></p>

                    <h5 className="twm-s-title">Step 2: Gather Required Documents</h5>
                    <ul className="ps-4 mb-3" style={{ listStyleType: "disc" }}>
                      <li>Valid passport with at least six months’ validity</li>
                      <li>Signed employment contract or offer letter</li>
                      <li>Educational and years of experience prove</li>
                      <li>Recent passport-size photographs</li>
                      <li>Police Clearance Certificate (PCC)</li>
                      <li>Medical report from authorised Wafid (formerly GAMCA) centres</li>
                    </ul>
                    <p>For more details, visit: <NavLink to="/gamca-medical-centre" className="site-text-primary">medical test</NavLink></p>

                    <ul className="ps-4 mb-3" style={{ listStyleType: "disc" }}>
                      <li>
                        Certificate attestation (if required):
                        <ul className="ps-4 mt-2" style={{ listStyleType: "circle" }}>
                          <li>State HRD</li>
                          <li>MEA India</li>
                          <li>Destination country embassy</li>
                        </ul>
                      </li>
                    </ul>
                    <p>For more information on the certificate attestation procedure, visit: <NavLink to="/authentication" className="site-text-primary">Document Attestation for Gulf Jobs</NavLink>.</p>

                    <div className="my-4">
                      <img
                        src={whyChoose}
                        alt="Role of Angel Gulf Jobs"
                        className="img-fluid w-100 rounded-4 shadow-sm"
                        style={{ objectFit: "contain" }}
                      />
                    </div>

                    <h5 className="twm-s-title">Step 3: Employer Arranges Work Permit & Entry Visa</h5>
                    <ul className="ps-4 mb-3" style={{ listStyleType: "disc" }}>
                      <li>When applying through trusted Gulf recruitment agencies in India like Angel Gulf Jobs, the employer sends the approved employment visa to us.</li>
                      <li>We then forward the employment visa to the candidate for travel and residency procedures.</li>
                    </ul>
                    <p>For detailed information on the work permit of each GCC country, visit: <NavLink to="/visa" className="site-text-primary">Work Permit process</NavLink>.</p>

                    <h5 className="twm-s-title">Step 4: Flight Booking Services</h5>
                    <ul className="ps-4 mb-3" style={{ listStyleType: "disc" }}>
                      <li>Angel Gulf Jobs will arrange flight tickets for the candidate. In some cases, employers from GCC countries may also provide travel tickets.</li>
                    </ul>
                    <p>For more details on Flight booking services, visit: <NavLink to="/flight-booking" className="site-text-primary">Flight Services</NavLink></p>

                    <h5 className="twm-s-title">Step 5: Emigration Clearance and Insurance (for ECR Passport Holders)</h5>
                    <ul className="ps-4 mb-3" style={{ listStyleType: "disc" }}>
                      <li>ECR passport holders must secure Emigration Clearance via the eMigrate portal. ECNR passport holders do not require this step.</li>
                      <li>Whether you are applying for a short-term 90-day work visa or a long-term role, this step is crucial for safe overseas employment.</li>
                    </ul>
                    <p>Also read: <NavLink to="/blogs/ecr-and-non-ecr-passports" className="site-text-primary">Difference Between ECR and ECNR Passports</NavLink>.</p>

                    <div className="tw-faq-section mt-5">
                      <h3 className="twm-s-title mb-4">FAQs</h3>
                      <div className="accordion tw-faq" id="sf-faq-accordion">
                        {/*One*/}
                        <div className="accordion-item">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                            data-bs-target="#FAQ1"
                          >
                            1. How can Indian nationals apply for a Gulf work visa?
                          </button>
                          <div
                            id="FAQ1"
                            className="accordion-collapse collapse"
                            data-bs-parent="#sf-faq-accordion"
                          >
                            <div className="accordion-body">
                              Indians can apply for a Gulf work visa by securing a valid job offer and completing the visa process through a verified recruitment agency like Angel Gulf Jobs.
                            </div>
                          </div>
                        </div>
                        {/*Two*/}
                        <div className="accordion-item">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#FAQ2"
                            aria-expanded="false"
                          >
                            2. What documents are required for a Saudi work visa?
                          </button>
                          <div
                            id="FAQ2"
                            className="accordion-collapse collapse"
                            data-bs-parent="#sf-faq-accordion"
                          >
                            <div className="accordion-body">
                              A Saudi work visa requires a passport, employment contract, medical report, experience certificates, PCC, and attested documents.
                            </div>
                          </div>
                        </div>
                        {/*Three*/}
                        <div className="accordion-item">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#FAQ3"
                            aria-expanded="false"
                          >
                            3. Is Emigration Clearance mandatory for individuals seeking employment in Gulf countries?
                          </button>
                          <div
                            id="FAQ3"
                            className="accordion-collapse collapse"
                            data-bs-parent="#sf-faq-accordion"
                          >
                            <div className="accordion-body">
                              Emigration Clearance is required only for ECR passport holders applying for Gulf employment.
                            </div>
                          </div>
                        </div>
                      </div>
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
