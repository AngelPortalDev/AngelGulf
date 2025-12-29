import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Kuwait from '../../assets/images/countries/saudi.jpg'; // Placeholder
import whyWorkInKuwait from '../../assets/images/Why-Work-in-Kuwait.png'; // Placeholder
import jobsInKuwait from '../../assets/images/Jobs-in-Kuwait.png'; // Placeholder

const KuwaitJobs = () => {
  return (
    <div>
      <Helmet>
        <title>Jobs in Kuwait for Indians | Kuwait Job Opportunities 2025 | Angel Gulf Jobs</title>
        <meta
          name="description"
          content="Find the latest jobs in Kuwait for Indians across top sectors. Explore verified job opportunities in Kuwait, salaries, skills required, and visa guidance with Angel Gulf Jobs—your trusted overseas recruitment agency. Start your Gulf career today."
        />
        <meta
          name="keywords"
          content="Jobs in Kuwait, Indians in Kuwait jobs, Jobs in Kuwait for Indian freshers, job opportunities in Kuwait, how to get job in Kuwait, Angel Gulf Jobs, Overseas recruitment agency, overseas job consultants"
        />
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${Kuwait})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">Work In Kuwait</h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <NavLink to='/'>Home</NavLink>
                  </li>
                  <li>Work In Kuwait</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}
        <div className="section-full  p-t20 p-b40 bg-white">
          <div className="container">
            <div className="section-content">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-10 col-md-12">
                  <div className="cabdidate-de-info">
                    <h2 className="twm-s-title blueuText">
                    Jobs in Kuwait– Build Your Gulf Career with Angel Gulf Jobs
                    </h2>
                    <p>Kuwait, located at the tip of the Persian Gulf, is one of the region’s strongest and safest economies. Its wealth, modern infrastructure, and business-friendly environment make it an excellent destination for international professionals. Over the years, Kuwait has continued to attract talent from many countries, especially India, because of its stable job market and high earning potential.</p>
                    <p>At Angel Gulf Jobs, we are a professionally managed overseas recruitment agency that helps Indian job seekers in overseas placement and connects with verified employers in Kuwait and other Gulf countries. Whether you want to explore job opportunities in Kuwait or learn how to get a job in Kuwait, our experts from Angel Gulf Jobs provide accurate guidance on international jobs, salaries, visa rules, required skills, and current job trends in the entire Gulf region.</p>
                    <h3 className="twm-s-title text-dark mt-4">Scope of Jobs in Kuwait</h3>
                    <p>Kuwait offers positions in both blue-collar and white-collar categories. Foreign professionals must secure a valid Kuwait work permit before beginning employment. Industries that consistently hire include Oil & Gas, Construction & Infrastructure, Business Services, Healthcare, Retail & Hospitality, Education & Training, IT & Technical Services</p>
                    <p>These sectors provide long-term job opportunities in Kuwait for skilled professionals, semi-skilled, and entry-level candidates.</p>
                    <p>The Kuwait government frequently launches new development projects, which increase hiring needs across multiple industries. This creates a wide range of Jobs in Kuwait for blue-collar and white-collar workers, experienced professionals, and even Jobs in Kuwait for Indian freshers.</p>
                    <h3 className="twm-s-title text-dark mt-4">Why Work in Kuwait- by Angel Gulf Jobs</h3>
                    <figure className="mb-4">
                        <img 
                            src={whyWorkInKuwait} 
                            alt="Why Work in Kuwait" 
                            className="img-fluid rounded-3 shadow-sm" 
                        />
                    </figure>
                    <div className="mt-4">
                      <div className="mb-4">
                        <p className="fw-bold mb-2">1. Stable Economy Backed by Oil Wealth and Ongoing Development Plans</p>
                        <ul className="list-unstyled ps-4">
                            <li><span className="me-2 text-primary fw-bold">•</span>Kuwait has one of the most stable economies in the Gulf. With strong oil revenues and continuous national development projects, the country consistently generates Jobs in Kuwait for professionals across industries.</li>
                            <li><span className="me-2 text-primary fw-bold">•</span>This stability especially benefits those exploring Indians in Kuwait jobs and long-term employment options through Angel Gulf Jobs.</li>
                        </ul>
                      </div>
                      <div className="mb-4">
                        <p className="fw-bold mb-2">2. Clear Labour Laws and Strong Worker Protections</p>
                        <ul className="list-unstyled ps-4">
                            <li><span className="me-2 text-primary fw-bold">•</span>Kuwait follows transparent employment policies that protect workers through structured contracts, regulated working hours, paid leave, and workplace safety. These benefits are highly valuable for anyone seeking secure roles through overseas job consultants like Angel Gulf Jobs.</li>
                        </ul>
                      </div>
                      <div className="mb-4">
                        <p className="fw-bold mb-2">3. Large, Supportive Indian Community for Easy Adaptation</p>
                        <ul className="list-unstyled ps-4">
                            <li><span className="me-2 text-primary fw-bold">•</span>Kuwait has one of the largest Indian expat populations in the region. Indian food, cultural associations, and support networks are widely available. This makes jobs in Kuwait for Indian freshers ideal and supportive.</li>
                        </ul>
                      </div>
                      <div className="mb-4">
                        <p className="fw-bold mb-2">4. Higher Savings Potential with Lower Cost of Living Compared to Other Gulf Countries</p>
                        <ul className="list-unstyled ps-4">
                            <li><span className="me-2 text-primary fw-bold">•</span>While Kuwait offers competitive, tax-free salaries, the cost of living is generally lower than in the UAE or Qatar. This combination helps professionals save more and achieve long-term financial goals, making Kuwait a strong choice for those searching how to get job in Kuwait.</li>
                        </ul>
                      </div>
                    </div>
                    <h3 className="twm-s-title text-dark mt-4">How to Get a Job in Kuwait through Angel Gulf Jobs</h3>
                    <p>Finding a job in Kuwait is simple when you apply through a trusted overseas recruitment agency like Angel Gulf Jobs. Our process is designed to make your job search efficient and stress-free.</p>
                    <figure className="mb-4">
                        <img 
                            src={jobsInKuwait} 
                            alt="Jobs in Kuwait" 
                            className="img-fluid rounded-3 shadow-sm" 
                        />
                    </figure>
                    <p><span className="fw-bold">Step 1: Create Your Profile with Angel Gulf Jobs</span><br/>Share your CV, skills, and preferred job category so we can match you with the right opportunities.</p>
                    <p><span className="fw-bold">Step 2: Explore Verified Kuwait Job Vacancies</span><br/>Search across industries, job titles, or locations. Our listings include both fresh openings and long-term roles.</p>
                    <p><span className="fw-bold">Step 3: Apply Online or Get Expert Assistance</span><br/>We help you apply for suitable roles and guide you on interviews, expected salaries, and required documentation.</p>
                    <p><span className="fw-bold">Step 4: Visa Guidance and Offer Support</span><br/>Once selected, our team at Angel Gulf Jobs supports you with work visa details, offer verification, and travel assistance, thereby making your move to Kuwait smooth and safe.</p>
                    <h3 className="twm-s-title text-dark mt-4">Start Your Gulf Career with Angel Gulf Jobs</h3>
                    <p>Whether you want to find Indian in Kuwait jobs, explore job opportunities in Kuwait, or learn how to get job in Kuwait, Angel Gulf Jobs offers a trusted, transparent, and professional pathway to your Gulf career.</p>
                    <p>Start your journey today and explore verified jobs, receive expert advice, and move closer to achieving your Gulf career goals.</p>
                    <section className="blog-section mt-5">
                      <h3 className="twm-s-title text-dark mb-3">FAQs</h3>
                      <div className="accordion accordion-flush blog-faq" id="kuwaitJobsFaq">
                        <div className="accordion-item blog-faq-item">
                          <h4 className="accordion-header">
                            <button
                              className="accordion-button collapsed fw-semibold blog-faq-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#kuwaitFaqOne"
                            >
                              1. How can I find genuine Gulf jobs from India or other countries?
                            </button>
                          </h4>
                          <div
                            id="kuwaitFaqOne"
                            className="accordion-collapse collapse"
                            data-bs-parent="#kuwaitJobsFaq"
                          >
                            <div className="accordion-body blog-faq-body">
                              You can find verified and legitimate Gulf jobs on Angel Gulf Jobs, a leading overseas recruitment agency connecting skilled professionals with top employers across the region.
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item blog-faq-item">
                          <h4 className="accordion-header">
                            <button
                              className="accordion-button collapsed fw-semibold blog-faq-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#kuwaitFaqTwo"
                            >
                              2. Are there many jobs in Kuwait for foreign professionals?
                            </button>
                          </h4>
                          <div
                            id="kuwaitFaqTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#kuwaitJobsFaq"
                          >
                            <div className="accordion-body blog-faq-body">
                              Yes, jobs in Kuwait are steadily increasing due to business expansion and economic diversification. Expats can find roles in corporate, technical, and service sectors.
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item blog-faq-item">
                          <h4 className="accordion-header">
                            <button
                              className="accordion-button collapsed fw-semibold blog-faq-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#kuwaitFaqThree"
                            >
                              3. How does Angel Gulf Jobs help candidates work in Kuwait?
                            </button>
                          </h4>
                          <div
                            id="kuwaitFaqThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#kuwaitJobsFaq"
                          >
                            <div className="accordion-body blog-faq-body">
                              Angel Gulf Jobs provides updated listings of jobs in Kuwait, assists with shortlisting, supports CV preparation, and guides candidates through the hiring process for a smooth transition to work in Kuwait.
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KuwaitJobs;