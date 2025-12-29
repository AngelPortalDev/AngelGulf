import React from "react";
// import RecruitmentProcess from "./../../assets/images/recruitment-process.jpg";
import RecruitmentProcess from "./../../assets/images/NewImages/recruitment.jpg";
import RecruitmentProcess2 from "./../../assets/images/Recruitment-and-Selection-Process.png";


import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const RecruitmentProcedures = () => {
  return (
    <div>
      <Helmet>
        <title>Angel Gulf Jobs | Gulf Recruitment & Selection Process Explained</title>
        <meta
          name="keywords"
          content="Recruitment and Selection Process, Recruitment Process, Gulf Recruitment, Gulf Recruitment Agencies, Recruitment Agencies, Selection Process, Skilled Jobs, Unskilled Jobs, Gulf Job Agency, GCC Employment"
        />
        <meta
          name="description"
          content="Angel Gulf Jobs simplifies the Gulf recruitment and selection process with verified hiring for skilled, semi-skilled and unskilled GCC jobs."
        />
        <link rel="canonical" href="https://www.angelgulfjobs.com/recruitment-procedure" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${RecruitmentProcess})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">
                    Recruitment Process &amp; Selection Process
                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>Recruitment Process &amp; Selection Process</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}

        {/* CONTENT START */}
        <div className="section-full  p-t30 p-b50 bg-white">
          <div className="container">
            <div className="section-content">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-10 col-md-12">
                  <div className="cabdidate-de-info">
                    <h2 className="twm-s-title blueuText mt-2">
                      Angel Gulf Jobs: Recruitment Process and Selection Process
                    </h2>
                    <p className="mt-4">
                      At Angel Gulf Jobs, a trusted Gulf job consultant and one of
                      the leading Gulf recruitment agencies, we bring over 15 years
                      of specialised experience in the recruitment and selection
                      process for GCC employment. We help Gulf-based employers hire
                      qualified talent and support job seekers in India in securing
                      the right opportunities across the GCC region.
                    </p>
                    <p>
                      The Gulf recruitment process or hiring process often involves
                      detailed documentation, employer-specific requirements, and
                      strict government regulations. Our expertise allows us to
                      simplify your entire employment journey. We ensure every step
                      is handled with care, transparency, and professionalism, so
                      employers receive the right candidates and job seekers
                      receive genuine Gulf job opportunities.
                    </p>
                 
                    <h3 className="twm-s-title">
                      Recruitment Process and Selection Process at Angel Gulf Jobs
                    </h3>
                    <p>
                      To offer a seamless and transparent experience, Angel Gulf
                      Jobs follows a structured recruitment process and selection
                      process. Every potential candidate completes the following
                      steps in the selection process to ensure eligibility,
                      compliance, and readiness for GCC employment.
                    </p>

                       <div className="my-4">
                      <img
                        src={RecruitmentProcess2}
                        alt="Illustration of the recruitment and selection process"
                        title="Recruitment and Selection Process"
                        className="img-fluid w-100 rounded-4 shadow-sm"
                        style={{ objectFit: "contain" }}
                      />
                    </div>


                    <h5 className="twm-s-title mt-4">
                      Step 1: Receiving Job Requirements
                    </h5>
                    <p>
                      We receive the job requirements from our Gulf clients and
                      employers. Once we get the confirmation, we begin the
                      recruitment process of qualified candidates by:
                    </p>
                    <ul className="ps-4 mb-3" style={{ listStyleType: "disc" }}>
                      <li>Checking our existing candidate database for job openings</li>
                      <li>Advertising on our job portal about the job postings: Angel Gulf Jobs</li>
                    </ul>
                    <p>
                      This ensures maximum reach for both skilled jobs and unskilled
                      jobs, helping employers find the right talent efficiently for
                      the long term.
                    </p>

                    <h5 className="twm-s-title mt-4">Step 2: Shortlisting Candidates</h5>
                    <ul className="ps-4 mb-3" style={{ listStyleType: "disc" }}>
                      <li>
                        Our experienced HR recruitment team shortlists candidates
                        based on their profiles, experience, and job suitability.
                        These shortlisted profiles are then forwarded to the
                        employer for review.
                      </li>
                      <li>
                        It saves time and ensures only the most suitable candidates
                        move ahead in the selection process.
                      </li>
                    </ul>

                    <h5 className="twm-s-title mt-4">Step 3: Client Interviews</h5>
                    <ul className="ps-4 mb-3" style={{ listStyleType: "disc" }}>
                      <li>
                        The Gulf employer or hiring managers conduct the interview
                        process with shortlisted candidates.
                      </li>
                      <li>
                        Depending on the job role, job title, and requirements,
                        there may be a single or multiple interview rounds. This
                        ensures a transparent and efficient Gulf recruitment
                        experience.
                      </li>
                    </ul>

                    <h5 className="twm-s-title mt-4">Step 4: Medical Test &amp; Skill Test</h5>
                    <ul className="ps-4 mb-3" style={{ listStyleType: "disc" }}>
                      <li>
                        Once selected, the candidate undergoes the mandatory
                        medical fitness test as required for GCC employment.
                      </li>
                      <li>
                        A skill test is also required for some jobs, especially
                        technical and skilled categories.
                      </li>
                    </ul>
                    <p>
                      To know more about Medicat Test, visit:
                      {" "}
                      <NavLink to="/gamca-medical-centre" className="site-text-primary">
                        Medical Centres
                      </NavLink>
                      .
                    </p>

                    <h5 className="twm-s-title mt-4">Step 5: Visa Processing</h5>
                    <ul className="ps-4 mb-3" style={{ listStyleType: "disc" }}>
                      <li>
                        Candidates who meet the medical fitness requirements
                        receive their Gulf work visa.
                      </li>
                      <li>
                        Angel Gulf Jobs manages all follow-ups with employers and
                        authorised offices to ensure the visa process is completed
                        smoothly.
                      </li>
                    </ul>
                    <p>
                      To know more about visa processing, visit:
                      {" "}
                      <NavLink to="/visa" className="site-text-primary">
                        Visa Services
                      </NavLink>
                      .
                    </p>

                    <h5 className="twm-s-title mt-4">Step 6: Flight Ticket Booking</h5>
                    <p>
                      After the employment visa is approved, we proceed with flight
                      bookings. At Angel Gulf Jobs:
                    </p>
                    <ul className="ps-4 mb-3" style={{ listStyleType: "disc" }}>
                      <li>
                        We provide one-way booked flight tickets to candidates and
                        ensure they travel safely to their destination country.
                      </li>
                      <li>
                        In some cases, the Gulf employer provides the flight ticket
                        to us, and we forward it to candidates.
                      </li>
                    </ul>
                    <p>
                      To know more about flight booking services, visit:
                      {" "}
                      <NavLink to="/flight-booking" className="site-text-primary">
                        Flight Booking Services
                      </NavLink>
                      .
                    </p>

                    <p>
                      We support our candidates from start to finish, offering
                      complete guidance and assistance at every stage of the Gulf
                      recruitment and selection process.
                    </p>

                    <h3 className="twm-s-title mt-5">Employment Categories We Recruit For</h3>
                    <p>
                      Angel Gulf Jobs hires talent across Professional, Skilled,
                      Semi-Skilled, and Unskilled job categories. Our reach as one
                      of India’s trusted recruitment agencies allows us to source
                      diverse talent for GCC employment.
                    </p>

                    <h5 className="twm-s-title mt-4">Professional Jobs</h5>
                    <p>
                      Engineers, Managers, HR Executives, General Managers, Surgeons,
                      Doctors, Dentists, Chartered Accountants, Nurses, Hospitality
                      Professionals, IT Professionals, Aviation Professionals,
                      Retail Professionals, Soil Specialists, Geologists, Mineral
                      Specialists, Professors & Teachers (various fields).
                    </p>

                    <h5 className="twm-s-title mt-4">Skilled Jobs</h5>
                    <p>
                      Cooks, Beauticians, Security Guards, Light Vehicle Drivers
                      (GCC), Machine Operators, Store Keepers, Computer Operators,
                      Correspondents, Photographers, Medical Assistants, Sales
                      Executives, Front Office Staff, Secretaries, Clerks, Heavy
                      Vehicle Drivers (GCC), Administrative Staff, Translators,
                      Business Executives, Foremen, Plant Operators, Pharmacists,
                      Construction Supervisors, Lab Technicians, Equipment
                      Operators, Draughtsmen, Accountants, Physiotherapists.
                    </p>

                    <h5 className="twm-s-title mt-4">Semi-Skilled Jobs</h5>
                    <p>
                      Masons, Block Makers, Plaster Workers, Carpenters, Electrical
                      Helpers, Mechanical Helpers, Steel Fixers, Plumbers, Tile
                      Fixers, Pipe Fitters, Scaffolders, Welders, A/C Mechanics,
                      Tailors, Assistant Tailors, Laundry Staff, Barbers,
                      Messengers, Shop Assistants, Technicians, Ceramic Workers,
                      Painters, Gardeners, Receptionists, Cabling Technicians,
                      Designers, Cashiers, Salesmen, Telephone Operators, Typists,
                      Assistant Cooks, Bakers, Assistant Bakers, and more.
                    </p>

                    <h5 className="twm-s-title mt-4">Unskilled Jobs</h5>
                    <p>
                      Cleaners, Labourers, Helpers, Sweepers, Office Boys, Building
                      Workers, Washing Staff, Construction Workers, Room Attendants,
                      Bell Boys, Airport Loaders, Farmers/Agricultural Labourers,
                      Watchmen.
                    </p>

                    <h3 className="twm-s-title mt-5">
                      Documents Required for the Visa Process
                    </h3>
                    <p>
                      After the selection process is complete, shortlisted
                      candidates must submit the following documents to proceed
                      with visa processing through Angel Gulf Jobs:
                    </p>
                    <ul className="description-list-2">
                      <li>
                        <i className="feather-check" /> Agreement from Gulf Agency
                      </li>
                      <li>
                        <i className="feather-check" /> Power of Attorney
                      </li>
                      <li>
                        <i className="feather-check" /> Demand Letter
                      </li>
                      <li>
                        <i className="feather-check" /> Visa Utilisation Authorisation
                      </li>
                      <li>
                        <i className="feather-check" /> Employment Contract
                      </li>
                      <li>
                        <i className="feather-check" /> Job Description and Selection Criteria
                      </li>
                      <li>
                        <i className="feather-check" /> Deployment Schedule (Mobilisation &amp; Demobilisation Plan)
                      </li>
                      <li>
                        <i className="feather-check" /> Company’s Commercial Registration Copy
                      </li>
                      <li>
                        <i className="feather-check" /> Visa Details
                      </li>
                      <li>
                        <i className="feather-check" /> Any additional documents required by Gulf government regulations
                      </li>
                    </ul>

                    <div className="tw-faq-section mt-5">
                      <h3 className="twm-s-title mb-4">
                        Frequently Asked Questions (FAQ) – Angel Gulf Jobs
                      </h3>
                      <div className="accordion tw-faq" id="recruitment-faq">
                        <div className="accordion-item">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#recruitment-faq-1"
                            aria-expanded="false"
                            aria-controls="recruitment-faq-1"
                          >
                            1. How long does the Gulf recruitment process take?
                          </button>
                          <div
                            id="recruitment-faq-1"
                            className="accordion-collapse collapse"
                            data-bs-parent="#recruitment-faq"
                          >
                            <div className="accordion-body">
                              The recruitment process for GCC employment usually
                              takes 3–8 weeks, depending on the Gulf country, job
                              category, employer requirements, and visa approval
                              timelines.
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#recruitment-faq-2"
                            aria-expanded="false"
                            aria-controls="recruitment-faq-2"
                          >
                            2. Are the jobs provided by Angel Gulf Jobs genuine?
                          </button>
                          <div
                            id="recruitment-faq-2"
                            className="accordion-collapse collapse"
                            data-bs-parent="#recruitment-faq"
                          >
                            <div className="accordion-body">
                              Yes, Angel Gulf Jobs is a leading Gulf job consultant
                              and works only with verified Gulf employers, making us
                              a trusted Gulf job agency and one of the most reliable
                              licensed Gulf recruitment agencies in India.
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#recruitment-faq-3"
                            aria-expanded="false"
                            aria-controls="recruitment-faq-3"
                          >
                            3. Do Angel Gulf Jobs recruit for both skilled and
                            unskilled jobs?
                          </button>
                          <div
                            id="recruitment-faq-3"
                            className="accordion-collapse collapse"
                            data-bs-parent="#recruitment-faq"
                          >
                            <div className="accordion-body">
                              Yes, we offer opportunities across skilled jobs,
                              semi-skilled roles, and unskilled jobs, covering
                              multiple industries across the GCC.
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#recruitment-faq-4"
                            aria-expanded="false"
                            aria-controls="recruitment-faq-4"
                          >
                            4. Which GCC countries do Angel Gulf Jobs recruit for?
                          </button>
                          <div
                            id="recruitment-faq-4"
                            className="accordion-collapse collapse"
                            data-bs-parent="#recruitment-faq"
                          >
                            <div className="accordion-body">
                              We provide GCC employment opportunities in the UAE,
                              Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain.
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#recruitment-faq-5"
                            aria-expanded="false"
                            aria-controls="recruitment-faq-5"
                          >
                            5. What if I fail the Gulf medical test or GAMCA test?
                          </button>
                          <div
                            id="recruitment-faq-5"
                            className="accordion-collapse collapse"
                            data-bs-parent="#recruitment-faq"
                          >
                            <div className="accordion-body">
                              If a candidate fails the medical test, the visa cannot
                              be processed, but they may reapply once medically fit as
                              per Gulf recruitment rules.
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#recruitment-faq-6"
                            aria-expanded="false"
                            aria-controls="recruitment-faq-6"
                          >
                            6. Do Angel Gulf Jobs assist with flight tickets and travel?
                          </button>
                          <div
                            id="recruitment-faq-6"
                            className="accordion-collapse collapse"
                            data-bs-parent="#recruitment-faq"
                          >
                            <div className="accordion-body">
                              Yes, we arrange one-way flight bookings, and in a few
                              cases, employers provide tickets directly as part of
                              the recruitment process.
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#recruitment-faq-7"
                            aria-expanded="false"
                            aria-controls="recruitment-faq-7"
                          >
                            7. How can I apply for Gulf jobs through Angel Gulf Jobs?
                          </button>
                          <div
                            id="recruitment-faq-7"
                            className="accordion-collapse collapse"
                            data-bs-parent="#recruitment-faq"
                          >
                            <div className="accordion-body">
                              You can apply through our job portal or contact our
                              team—our recruitment agency handles everything from
                              shortlisting job seekers to deployment.
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
        {/* CONTENT END */}
      </div>
    </div>
  );
};

export default RecruitmentProcedures;
