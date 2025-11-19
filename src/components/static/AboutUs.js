import React from "react";
import IndustriesImage from '../../assets/images/about-us-banner.png'
import RecruitmentImage from '../../assets/images/USP-of-Angel-Gulf-Jobs.png'
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
      <title>Angel Gulf Jobs | Overseas Manpower Consultancy for Gulf Jobs</title>
<meta name="keywords" content="Angel Gulf Jobs, overseas manpower consultancy, Gulf job consultancy, Gulf recruitment agency, jobs in UAE, jobs in Saudi Arabia, jobs in Qatar, jobs in Oman, jobs in Bahrain, overseas jobs from India" />
<meta name="description" content="Angel Gulf Jobs is a trusted overseas manpower consultancy connecting skilled professionals from India, South Asia and Southeast Asia with leading employers across the Gulf region."/>
<link rel="canonical" href="https://www.angelgulfjobs.com/about-us"/>
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${IndustriesImage})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">About Angel Gulf Jobs</h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <NavLink to='/' >Home</NavLink>
                  </li>
                  <li>About Us</li>
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
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10 col-md-11">
                <div className="section-content mt-4 mt-md-5">
                  <h3 className="blueuText mb-3 mb-md-4">
                    Angel Gulf Jobs: A Leader in Overseas Manpower Recruitment
                  </h3>

                  <p>
                    Angel Gulf Jobs is India’s one of most trusted overseas manpower consultancies, specialising in Gulf job placements and international recruitment services. We connect skilled professionals from India, South Asia, and Southeast Asia with top employers in Gulf countries, including Bahrain, Kuwait, Qatar, Oman, Saudi Arabia, and the United Arab Emirates (UAE).
                  </p>
                  <p>
                    With over 15 years of recruitment expertise, Angel Gulf Jobs has become a leader in Gulf employment solutions, offering end-to-end overseas recruitment, staffing, and employability training services. Our mission is to empower individuals with the right skills and opportunities while helping Gulf employers find the most qualified and reliable talent.
                  </p>
                  <p>
                    Angel Gulf Jobs operates under the official approval of the Government of India, Ministry of Labour, with Registration No. B-0866/MUM/PER/1000+/5/9186/2016 (Valid till 04/04/2027), which makes us a legitimate overseas manpower consultancy in India. We are based in Mumbai and have branch offices in India and other countries. We have created a strong global network. This network helps us respond quickly to different recruitment needs. We can find skilled and semi-skilled workers, as well as professional and executive-level placements in many industries.
                  </p>

                  <h4>How Can You Find Gulf Jobs in Angel Portal</h4>
                  <p>
                    Angel Gulf Job is a leading manpower consultancy in India. It connects overseas recruiters with job seekers. It effectively fills critical talent gaps across the Gulf region. Our recruitment services cover many industries. These include Hospitality and Tourism, Retail and E-Commerce, and Healthcare. We serve several industries. These include:
                  </p>
                  <ul className="description-list-2">
                    <li>
                      <i className="feather-check" />
                      Banking, Financial Services, and Insurance (BFSI)
                    </li>
                    <li>
                      <i className="feather-check" />
                      Information Technology (IT) and IT-enabled Services (ITeS)
                    </li>
                    <li>
                      <i className="feather-check" />
                      Oil and Gas
                    </li>
                    <li>
                      <i className="feather-check" />
                      Logistics
                    </li>
                    <li>
                      <i className="feather-check" />
                      Construction
                    </li>
                    <li>
                      <i className="feather-check" />
                      Manufacturing
                    </li>
                  </ul>
                  <p>
                    Our Gulf recruitment experts understand the unique workforce needs of each industry. They make sure every placement fits the employer’s goals and the candidate’s career dreams.
                  </p>
                  <p>
                    We accept applications on our website. You can upload your latest resume on our website. We also accept applications from channel partners and job ads on various job portals. Further, you can connect with our team through social media or over a call.
                  </p>
                  <p>
                    Angel Gulf Jobs is part of Angel Portal Pvt. Ltd., which is a diversified corporate group with a strong presence in employment, education, and food sectors across India and overseas. It benefits from a robust organisational foundation and global reach. This association allows us to deliver high-quality Gulf job placement services with a commitment to professionalism and trust.
                  </p>
                  <p>
                    Our dedicated team continuously maintains and enhances an up-to-date database of manpower eager to work in the Gulf region. By combining technology with human insight, we ensure that our talent pool remains relevant, diverse, and ready to meet urgent or large-scale overseas recruitment needs. This enables us to respond swiftly and effectively to employer demands across multiple industries in the Gulf region.
                  </p>

                  <div className="text-center mb-4">
                    <img
                      src={RecruitmentImage}
                      alt="Angel Gulf Jobs overview"
                      style={{ width: '100%', maxWidth: '100%', height: 'auto' }}
                    />
                  </div>

                  <p>
                    The entire Angel Gulf Jobs team is driven by a vision to be recognised as the most trusted Gulf job consultancy and the preferred recruitment partner for overseas employers and job seekers alike. We are committed to providing top-tier overseas recruitment services that help Gulf-based companies find the right people while fulfilling the dreams of skilled professionals from India and other regions who aspire to build successful careers and secure suitable Gulf jobs.
                  </p>

                  <div className="bg-light p-4 p-md-5 rounded mt-3">
                    <h4 className="mb-3">Our Mission, Vision & Values</h4>
                    <h5>Mission</h5>
                    <p>
                      At Angel Gulf Jobs, we serve as a trusted global bridge connecting skilled job seekers from India, South Asia, and Southeast Asia with leading employers in the UAE, Saudi Arabia, Qatar, Oman, Bahrain, and the Middle East. We are committed to delivering ethical, transparent, and result-driven overseas recruitment services that empower individuals and strengthen organisations through:
                    </p>
                    <ul className="description-list-2">
                      <li>
                        <i className="feather-check" />
                        Empowering job seekers to build rewarding international careers.
                      </li>
                      <li>
                        <i className="feather-check" />
                        Facilitating smooth transitions from application to employment across Gulf countries.
                      </li>
                      <li>
                        <i className="feather-check" />
                        Delivering end-to-end recruitment support that ensures trust, compliance, and long-term success.
                      </li>
                      <li>
                        <i className="feather-check" />
                        Providing personalised guidance to match every candidate’s skills with the right opportunity.
                      </li>
                    </ul>
                    <p>
                      Our goal is to make the process of overseas employment simple, reliable, and result-oriented, helping both individuals and organisations grow together.
                    </p>

                    <h5>Vision</h5>
                    <p>
                      Our vision at Angel Gulf Jobs is to build a trusted global ecosystem of opportunity, where skilled professionals from India, South Asia, and Southeast Asia seamlessly connect with leading employers across the Gulf region and the Middle East. We envision a future where overseas employment is ethical, transparent, and empowering, enabling individuals to achieve their career aspirations while helping businesses across the UAE, Saudi Arabia, Qatar, Oman, and Bahrain thrive with the right talent. At Angel Gulf Jobs, we aim to redefine international recruitment through trust, professionalism, and innovation, creating a world where every career journey leads to growth, success, and mutual prosperity.
                    </p>

                    <h5>Values</h5>
                    <p>
                      Our work is guided by the highest standards of professional ethics:
                    </p>
                    <ul className="description-list-2">
                      <li>
                        <i className="feather-check" />
                        Integrity: We act with honesty and fairness in every process.
                      </li>
                      <li>
                        <i className="feather-check" />
                        Excellence – We strive to deliver the highest quality services, ensuring satisfaction for both employers and job seekers.
                      </li>
                      <li>
                        <i className="feather-check" />
                        Commitment – We are dedicated to building long-term relationships through reliability, responsiveness, and professionalism.
                      </li>
                      <li>
                        <i className="feather-check" />
                        Innovation: We evolve with technology and market trends to serve smarter.
                      </li>
                      <li>
                        <i className="feather-check" />
                        Empowerment – We create opportunities that enable individuals to achieve career growth and organisations to reach new levels of success.
                      </li>
                      <li>
                        <i className="feather-check" />
                        Global Reach – We embrace diversity and continuously expand our network to connect talent and employers worldwide.
                      </li>
                    </ul>
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

export default AboutUs;
