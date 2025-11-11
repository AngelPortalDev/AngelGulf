import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation,Autoplay } from "swiper/modules";
// Banners

// import homeBanner from "../assets/images/home_banner.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Iocns
import SearchIcon from "../assets/icons/searchicon.svg";
import BriefCase from "../assets/icons/briefcase.svg";
import OurTeam from "../assets/icons/ourteam.svg";

// locations

import Oman from "../assets/images/locations/oman.webp";
import Dubai from "../assets/images/locations/dubai.webp";
import Kuwait from "../assets/images/locations/kuwait.webp";
import Saudi from "../assets/images/locations/saudi.webp";
import Singapore from "../assets/images/locations/singapore.webp";
import Behrain from "../assets/images/locations/bahrain.webp";
import Quatar from "../assets/images/locations/qatar.webp";
import Malesia from "../assets/images/locations/malaysia.webp";

// Our Clients

import Client1 from "../assets/images/clients/our-client-1.webp";
import Client2 from "../assets/images/clients/our-client-2.webp";
import Client3 from "../assets/images/clients/our-client-3.webp";
import Client4 from "../assets/images/clients/our-client-4.webp";
import Client5 from "../assets/images/clients/our-client-5.webp";
import Client6 from "../assets/images/clients/our-client-6.webp";
import Client7 from "../assets/images/clients/our-client-7.webp";
import Client8 from "../assets/images/clients/our-client-8.webp";
import Client9 from "../assets/images/clients/our-client-9.webp";
import Client10 from "../assets/images/clients/our-client-10.webp";
import Client11 from "../assets/images/clients/our-client-11.webp";
import Client12 from "../assets/images/clients/our-client-12.webp";
import Client13 from "../assets/images/clients/our-client-13.webp";
import Client14 from "../assets/images/clients/our-client-14.webp";
import Client15 from "../assets/images/clients/our-client-15.webp";
import Client16 from "../assets/images/clients/our-client-16.webp";
import Client17 from "../assets/images/clients/our-client-17.webp";
import Client18 from "../assets/images/clients/our-client-18.webp";
import video1 from "../assets/video/new.mp4";
import poster from "../assets/video/poster.jpg";
import BeAwareModal from './static/BeAwareModal.js';

import { NavLink } from "react-router-dom";


const clientImages = [
  { src: Client1, alt: "Al Masraf", title: "Al Masraf" },
  { src: Client2, alt: "Bahrain Specialist Hospital", title: "Bahrain Specialist Hospital" },
  { src: Client3, alt: "MPH", title: "MPH" },
  { src: Client4, alt: "Zulekha Hospita", title: "Zulekha Hospita" },
  { src: Client5, alt: "DULSCO", title: "DULSCO" },
  { src: Client6, alt: "Aster", title: "Aster" },
  { src: Client7, alt: "Swiss Arabian", title: "Swiss Arabian" },
  { src: Client8, alt: "Management Solution International", title: "Management Solution International" },
  { src: Client9, alt: "Spie", title: "Spie" },
  { src: Client10, alt: "QAFAM", title: "QAFAM" },
  { src: Client11, alt: "RSTAD", title: "RSTAD" },
  { src: Client12, alt: "Client 12", title: "Client 12" },
  { src: Client13, alt: "Raqmiyat", title: "Raqmiyat" },
  { src: Client14, alt: "WSP", title: "WSP" },
  { src: Client15, alt: "nmc", title: "nmc" },
  { src: Client16, alt: "Brunel", title: "Brunel" },
  { src: Client17, alt: "Kimmco is over", title: "Kimmco is over" },
  { src: Client18, alt: "ZAHRAWI", title: "ZAHRAWI" },
]

const Home = () => {

  return (
    <div>
       <BeAwareModal/>
      <div className="page-content">
        {/*Banner Start*/}
        <div className="">
          <video
            width="100%"
            loop
            autoPlay
            muted
            preload="auto"
            poster={poster}
          >
            <source src={video1} type="video/mp4" />
          </video>
        </div>
        {/*Banner End*/}

        <div className="section-head center wt-small-separator-outer">
          <div className="wt-small-separator site-text-primary">
            {/* <div>Welcome to Angel Gulf Jobs</div> */}
          </div>
          <h2 className="wt-title blueuText mb-0 mt-4">
            Welcome to Angel Gulf Jobs
          </h2>
        </div>
        <div className="container">
          <p>
            Angel Gulf Jobs is a fastest-growing, professionally managed Gulf
            job consultants (abroad / overseas job consultants) based in Mumbai,
            India, registered with Government of India Ministry of Labour. The
            organization is a part of the “Angel” group having offices in
            Mumbai, Paris, & expanding into other parts of the World. Angel Gulf
            Jobs has been founded by professionals with years of Gulf experience
            (overseas experience) capable of providing the best of recruitment
            services to employers and job seekers. Being a specialist Gulf job
            consultant, it provides its services across UAE, Qatar, Bahrain,
            Oman, Saudi Arabia & the entire Gulf. The organization is equipped
            with the necessary infrastructure in Mumbai & the Gulf region.
          </p>
          <p>
            The organization primarily does its sourcing through its own job &
            educational portal Angel-Jobs.Com. The portal maintains a large
            database of job seekers interested in working abroad (Gulf region).
            The job seeker database is updated regularly through various
            sources, thus, in a position to meet up small to large requirements
            of candidates from clients in a short notice. The database is spread
            across different work categories including mechanical, electrical,
            electronics, civil, hospitality, IT & more. Over the years, Angel
            Gulf Jobs has established itself as one of the trust-worthy Gulf job
            consultant (abroad / overseas job consultant) providing top of the
            class recruitment solutions to clients through out the Gulf region.
            Due to its professional approach, Angel Gulf Jobs in a short span of
            time has become a preferred recruitment partner & a trusted Gulf job
            consultant for clients throughout the Gulf region.
          </p>
          <div className="row mt-4">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <div
                  class="circle-img d-flex align-items-center justify-content-center mt-2"
                  style={{
                    height: "120px",
                    width: "120px",
                    background: "#3498db",
                    border: "none",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={SearchIcon}
                    alt="not found"
                    className="img-fluid searchIcon"
                  />
                </div>
                <h3 className="mt-2">Our Search Methods</h3>
                <p>
                  Our methods of handling the search for a candidate are
                  tailored to specific circumstances. Keeping in mind the
                  considerations like industry-specific skills and the location
                  of such talent, we shortlist the candidates. The geographic
                  scope of the search is agreed upon with our client, based on
                  their work values.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <div
                  class="circle-img d-flex align-items-center justify-content-center mt-2"
                  style={{
                    height: "120px",
                    width: "120px",
                    background: "#3498db",
                    border: "none",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={BriefCase}
                    alt="not found"
                    className="img-fluid searchIcon"
                  />
                </div>
                <h3 className="mt-2">Our Work Process</h3>
                <p>
                  We proactively tap the market for excellent candidates. Once
                  the candidates have been identified, we conduct in-depth
                  interviews with each individual, and obtain detailed
                  information (on topics such as educational background,
                  experience, job history, career goals, personality traits,
                  compensation etc).
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <div
                  class="circle-img d-flex align-items-center justify-content-center mt-2"
                  style={{
                    height: "120px",
                    width: "120px",
                    background: "#3498db",
                    border: "none",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={OurTeam}
                    alt="not found"
                    className="img-fluid searchIcon"
                  />
                </div>
                <h3 className="mt-2">Our Team</h3>
                <p>
                  We are equipped with powerful integrated recruitment
                  technologies and have a team of seasoned expert recruiters. We
                  have all the latest facilities in the are of communication,
                  frequent transport etc, leading to expedition of the entire
                  process.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* JOBS CATEGORIES SECTION START */}
        <div className="section-full p-t50 p-b40 site-bg-white twm-job-categories-hpage-6-area">
          {/* TITLE START*/}
          <div className="section-head center wt-small-separator-outer">
            <div className="wt-small-separator site-text-primary">
              <h2 className="wt-title blueuText">Jobs By Industries</h2>
            </div>
            {/* <h2 className="wt-title">Top Functional Area</h2> */}
          </div>
          {/* TITLE END*/}
          <div className="container">
            <div className="twm-job-cat-hpage-6-wrap">
              <div className="job-cat-block-hpage-6-section m-b30">
                <div className="row">
                  {/* COLUMNS 1 */}
                  <div className="col">
                    <div className="job-cat-block-hpage-6 m-b30">
                    <div className="twm-media">
                        <div className="flaticon-computer">
                        <i class="fa-solid fa-oil-well"></i>
                        </div>
                      </div>
                      <div className="twm-content pe-none">
                        <NavLink> Oil & Gas </NavLink>
                        <div className="twm-jobs-available">
                          <span>100+</span> Openings
                        </div>
                        <div className="circle-line-wrap ">
                          <NavLink className="circle-line-btn" to="">
                            <i className="fa fa-arrow-right " />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* COLUMNS 2 */}
                  <div className="col">
                    <div className="job-cat-block-hpage-6 m-b30">
                      <div className="twm-media">
                        <div className="flaticon-project-management" />
                      </div>
                      <div className="twm-content pe-none">
                        <NavLink>Constructions</NavLink>
                        <div className="twm-jobs-available">
                          <span>19</span> Openings
                        </div>
                        <div className="circle-line-wrap">
                          <NavLink className="circle-line-btn">
                            <i className="fa fa-arrow-right" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* COLUMNS 3 */}
                  <div className="col">
                    <div className="job-cat-block-hpage-6 m-b30">
                      <div className="twm-media">
                      <div className="flaticon-computer">
                      <i class="fa-solid fa-shop"></i>
                      </div>
                      </div>
                      <div className="twm-content pe-none">
                        <NavLink>FMCG</NavLink>
                        <div className="twm-jobs-available">
                          <span>4</span> Openings
                        </div>
                        <div className="circle-line-wrap">
                          <NavLink className="circle-line-btn">
                            <i className="fa fa-arrow-right" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* COLUMNS 4 */}
                  <div className="col">
                    <div className="job-cat-block-hpage-6 m-b30">
                      <div className="twm-media">
                        <div className="flaticon-customer-support" />
                      </div>
                      <div className="twm-content pe-none">
                        <NavLink>Hospitality</NavLink>
                        <div className="twm-jobs-available">
                          <span>50+</span> Openings
                        </div>
                        <div className="circle-line-wrap">
                          <NavLink className="circle-line-btn">
                            <i className="fa fa-arrow-right" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* COLUMNS 5 */}
                  <div className="col">
                    <div className="job-cat-block-hpage-6 m-b30">
                      <div className="twm-media">
                        <div className="flaticon-bars" />
                      </div>
                      <div className="twm-content pe-none">
                        <NavLink>IT</NavLink>
                        <div className="twm-jobs-available">
                          <span>10+</span> Openings
                        </div>
                        <div className="circle-line-wrap">
                          <NavLink className="circle-line-btn">
                            <i className="fa fa-arrow-right" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* COLUMNS 6 */}
                  <div className="col">
                    <div className="job-cat-block-hpage-6 m-b30">
                      <div className="twm-media">
                        <div className="flaticon-user">
                          <i class="fa-solid fa-utensils"></i>
                        </div>
                      </div>
                      <div className="twm-content pe-none">
                        <NavLink>Catering</NavLink>
                        <div className="twm-jobs-available">
                          <span>67+</span> Openings
                        </div>
                        <div className="circle-line-wrap">
                          <NavLink className="circle-line-btn">
                            <i className="fa fa-arrow-right" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* COLUMNS 7 */}
                  <div className="col">
                    <div className="job-cat-block-hpage-6 m-b30">
                      <div className="twm-media">
                        <div className="flaticon-computer">
                          {/* <i class="fas fa-ad"></i> */}
                          <i class="fa-solid fa-suitcase-medical"></i>
                        </div>
                      </div>
                      <div className="twm-content pe-none">
                        <NavLink>Healthcare</NavLink>
                        <div className="twm-jobs-available">
                          <span>21</span> Openings
                        </div>
                        <div className="circle-line-wrap">
                          <NavLink className="circle-line-btn">
                            <i className="fa fa-arrow-right" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* COLUMNS 8 */}
                  <div className="col">
                    <div className="job-cat-block-hpage-6 m-b30">
                      <div className="twm-media">
                        <div className="flaticon-coding">
                          <i class="fas fa-tools"></i>
                        </div>
                      </div>
                      <div className="twm-content pe-none">
                        <NavLink>Engineering</NavLink>
                        <div className="twm-jobs-available">
                          <span>92+</span> Openings
                        </div>
                        <div className="circle-line-wrap">
                          <NavLink className="circle-line-btn">
                            <i className="fa fa-arrow-right" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* COLUMNS 9 */}
                  <div className="col">
                    <div className="job-cat-block-hpage-6 m-b30">
                      <div className="twm-media">
                        <div className="flaticon-computer">
                          <i class="fa-solid fa-truck-fast"></i>
                        </div>
                      </div>
                      <div className="twm-content pe-none">
                        <NavLink>Logistics</NavLink>
                        <div className="twm-jobs-available">
                          <span>70+</span> Openings
                        </div>
                        <div className="circle-line-wrap">
                          <NavLink className="circle-line-btn">
                            <i className="fa fa-arrow-right" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* COLUMNS 10 */}
                  <div className="col">
                    <div className="job-cat-block-hpage-6 m-b30">
                      <div className="twm-media">
                        <div className="flaticon-coding">
                          <i class="fa-solid fa-prescription-bottle-medical"></i>
                        </div>
                      </div>
                      <div className="twm-content pe-none">
                        <NavLink>Pharma</NavLink>
                        <div className="twm-jobs-available">
                          <span>32</span> Openings
                        </div>
                        <div className="circle-line-wrap">
                          <NavLink
                            className="circle-line-btn"
                            href="job-detail-v2.html"
                          >
                            <i className="fa fa-arrow-right" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center job-categories-btn d-none">
                <a href="job-list.html" className=" site-button">
                  All Functional Area
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* JOBS CATEGORIES SECTION END */}

        {/* JOBS BY LOCATION SECTION */}
        <div className="section-head center wt-small-separator-outer">
          <div className="wt-small-separator site-text-primary">
            <h2 className="wt-title blueuText">Jobs By Location</h2>
          </div>
          {/* <h2 className="wt-title">Jobs By Location</h2> */}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <NavLink to="/job-list">
                  <img
                    src={Dubai}
                    className="img-fluid"
                    alt="Jobs in Dubai"
                    title="Jobs in Dubai"
                    style={{ borderRadius: "50%", border: "5px solid #3498DB" }}
                  />
                </NavLink>

                <p className="text-center mt-2">Jobs in Dubai</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <NavLink to="/job-list">
                  <img
                    src={Saudi}
                    className="img-fluid"
                    alt="Jobs in Saudi Arabia"
                    title="Jobs in Saudi Arabia"
                    style={{ borderRadius: "50%", border: "5px solid #3498DB" }}
                  />
                </NavLink>
                <p className="text-center mt-2">Jobs in Saudi</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <NavLink to="/job-list">
                  <img
                    src={Oman}
                    className="img-fluid"
                    alt="Jobs in Oman"
                    title="Jobs in Oman"
                    loading="lazy"
                    style={{ borderRadius: "50%", border: "5px solid #3498DB" }}
                  />
                </NavLink>
                <p className="text-center mt-2">Jobs in Oman</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <NavLink to="/job-list">
                  <img
                    src={Quatar}
                    className="img-fluid"
                    alt="Jobs in Qatar"
                    title="Jobs in Qatar"
                    loading="lazy"
                    style={{ borderRadius: "50%", border: "5px solid #3498DB" }}
                  />
                </NavLink>
                <p className="text-center mt-2">Jobs in Qatar</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <NavLink to="/job-list">
                  <img
                    src={Kuwait}
                    className="img-fluid"
                    alt="Jobs in Kuwait"
                    title="Jobs in Kuwait"
                    loading="lazy"
                    style={{ borderRadius: "50%", border: "5px solid #3498DB" }}
                  />
                </NavLink>
                <p className="text-center mt-2">Jobs in Kuwait</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <NavLink to="/job-list">
                  <img
                    src={Behrain}
                    className="img-fluid"
                    alt="Jobs in Bahrain"
                    title="Jobs in Bahrain"
                    loading="lazy"
                    style={{ borderRadius: "50%", border: "5px solid #3498DB" }}
                  />
                </NavLink>
                <p className="text-center mt-2">Jobs in Bahrain</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <NavLink to="/job-list">
                  <img
                    src={Singapore}
                    className="img-fluid"
                    alt="Jobs in Singapore"
                    title="Jobs in Singapore"
                    loading="lazy"
                    style={{ borderRadius: "50%", border: "5px solid #3498DB" }}
                  />
                </NavLink>
                <p className="text-center mt-2">Jobs in Singapore</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <NavLink to="/job-list">
                  <img
                    src={Malesia}
                    className="img-fluid"
                    alt="Jobs in Malaysia"
                    title="Jobs in Malaysia"
                    loading="lazy"
                    style={{ borderRadius: "50%", border: "5px solid #3498DB" }}
                  />
                </NavLink>
                <p className="text-center mt-2">Jobs in Malaysia</p>
              </div>
            </div>
          </div>
        </div>

        {/* END JOBS BY LOCATIONS */}

        {/* OUR Services */}
        <div className="section-full p-t50 p-b40 twm-blog-post-h-page6-wrap">
          <div className="container">
            <div className="wt-separator-two-part">
              <div className="row wt-separator-two-part-row">
                <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-left">
                  {/* TITLE START*/}
                  <div className="section-head left wt-small-separator-outer">
                    <div className="wt-small-separator site-text-primary">
                      <h2 className="wt-title blueuText">
                        Overseas Job Services
                      </h2>
                    </div>
                    {/* <h2 className="wt-title">Overseas Job Services</h2> */}
                  </div>
                  {/* TITLE END*/}
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-right text-right d-none">
                  <a href="job-list.html" className=" site-button">
                    Explore All Services
                  </a>
                </div>
              </div>
            </div>
            <div className="section-content">
              <div className="twm-jobs-grid-wrap">
                <div className="row masonry-wrap">
                  <div className="masonry-item col-lg-4 col-md-6 m-b30"></div>
                  <div className="masonry-item col-lg-8 col-md-6 m-b30"></div>
                  <div className="masonry-item col-lg-4 col-md-6 m-b30">
                    {/*Block three*/}
                    <div className="blog-post twm-blog-post-h-page6">
                      <div className="wt-post-media">
                        <img
                          src="images/home-6/blog/latest/bg3.jpg"
                          alt="Recruitment Consultancy Services"
                          title="Recruitment Consultancy Services"
                          loading="lazy"
                        />
                      </div>
                      <div className="wt-post-info">
                        <div className="wt-post-meta ">
                          <ul>
                            {/* <li className="post-date">16-02-2023</li> */}
                          </ul>
                        </div>
                        <div className="wt-post-title ">
                          <h4 className="post-title">
                            Recruitment Consultancy Services
                          </h4>
                          <p>
                            {" "}
                            We provide entire gamut of recruitment consultancy
                            services to clients across different industry
                            verticals.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="masonry-item col-lg-4 col-md-6 m-b30">
                    {/*Block Four*/}
                    <div className="blog-post twm-blog-post-h-page6">
                      <div className="wt-post-media">
                        <img
                          src="images/home-6/blog/latest/bg4.jpg"
                          alt="Overseas Job Counselling"
                          title="Overseas Job Counselling"
                          loading="lazy"
                        />
                      </div>
                      <div className="wt-post-info">
                        <div className="wt-post-meta ">
                          <ul>
                            {/* <li className="post-date">18-02-2023</li> */}
                          </ul>
                        </div>
                        <div className="wt-post-title ">
                          <h4 className="post-title">
                            Overseas Job Counselling
                          </h4>
                          <p>
                            We provide free counselling to candidates as regards
                            job opportunities in Gulf, recruitment process.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="masonry-item col-lg-4 col-md-6 m-b30">
                    {/*Block five*/}
                    <div className="blog-post twm-blog-post-h-page6">
                      <div className="wt-post-media">
                        <img
                          src="images/home-6/blog/latest/bg5.jpg"
                          alt="Immigration Clearance Services"
                          title="Immigration Clearance Services"
                          loading="lazy"
                        />
                      </div>
                      <div className="wt-post-info">
                        <div className="wt-post-meta ">
                          <ul>
                            {/* <li className="post-date">22-02-2023</li> */}
                          </ul>
                        </div>
                        <div className="wt-post-title ">
                          <h4 className="post-title">
                            Immigration and Clearance Services
                          </h4>
                          <p>
                            We take care of Visa & all other procedures required
                            for successful immigration of candidates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* OUR Services END */}

        {/* GET JOBS SECTION START */}
        <div className="section-full site-bg-white h-page6-getjobs-wrap">
          <div className="h-page6-client-slider-outer d-none">
            <div className="container">
              <div className="h-page6-client-slider">
                <div className="row">
                  {/* <div className="col-xl-4 col-lg-12">
                    <div className="h-page-6-client-slide-title">
                      <h2 className="site-text-primary blueuText">
                        Our Clients
                      </h2>
                    </div>
                  </div> */}
                  {/* <div className="col-xl-8 col-lg-12">
                    <div className="owl-carousel home-client-carousel6 owl-btn-vertical-center">
                      <div className="item">
                        <div className="ow-client-logo">
                          <div className="client-logo client-logo-media">
                            <img
                              src={Client1}
                              alt="Al Masraf"
                              title="Al Masraf"
                              className="img-fluid"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ow-client-logo">
                          <div className="client-logo client-logo-media">
                            <img
                              src={Client2}
                              alt="Bahrain Specialist Hospital"
                              title="Bahrain Specialist Hospital"
                              className="img-fluid"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ow-client-logo">
                          <div className="client-logo client-logo-media">
                            <img
                              src={Client3}
                              alt="MPH"
                              title="MPH"
                              className="img-fluid"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ow-client-logo">
                          <div className="client-logo client-logo-media">
                            <img
                              src={Client4}
                              alt="Zulekha Hospital"
                              title="Zulekha Hospital"
                              className="img-fluid"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ow-client-logo">
                          <div className="client-logo client-logo-media">
                            <img
                              src={Client5}
                              alt="DULSCO"
                              title="DULSCO"
                              className="img-fluid"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ow-client-logo">
                          <div className="client-logo client-logo-media">
                            <img
                              src={Client6}
                              alt="Aster"
                              title="Aster"
                              className="img-fluid"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ow-client-logo">
                          <div className="client-logo client-logo-media">
                            <img
                              src={Client7}
                              alt="Swiss Arabian"
                              title="Swiss Arabian"
                              className="img-fluid"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ow-client-logo">
                          <div className="client-logo client-logo-media">
                            <img
                              src={Client8}
                              alt="Management Solution International"
                              title="Management Solution International"
                              className="img-fluid"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ow-client-logo">
                          <div className="client-logo client-logo-media">
                            <img
                              src={Client9}
                              alt="Spie"
                              title="Spie"
                              className="img-fluid"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ow-client-logo">
                          <div className="client-logo client-logo-media">
                            <img
                              src={Client10}
                              alt="QAFAM"
                              title="QAFAM"
                              className="img-fluid"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="ow-client-logo">
                          <div className="client-logo client-logo-media">
                            <img
                              src={Client11}
                              alt="RSTAD"
                              title="RSTAD"
                              className="img-fluid"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ow-client-logo">
                          <div className="client-logo client-logo-media">
                            <img
                              src={Client12}
                              alt=""
                              className="img-fluid"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ow-client-logo">
                          <div className="client-logo client-logo-media">
                            <img
                              src={Client13}
                              alt="Raqmiyat"
                              className="img-fluid"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ow-client-logo">
                          <div className="client-logo client-logo-media">
                            <img
                              src={Client14}
                              alt="WSP"
                              className="img-fluid"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ow-client-logo">
                          <div className="client-logo client-logo-media">
                            <img
                              src={Client15}
                              alt="nmc"
                              className="img-fluid"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ow-client-logo">
                          <div className="client-logo client-logo-media">
                            <img
                              src={Client16}
                              alt="Brunel"
                              className="img-fluid"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ow-client-logo">
                          <div className="client-logo client-logo-media">
                            <img
                              src={Client17}
                              alt="Kimmco is over"
                              className="img-fluid"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ow-client-logo">
                          <div className="client-logo client-logo-media">
                            <img
                              src={Client18}
                              alt="ZAHRAWI"
                              className="img-fluid"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="h-page-6-getjobs-wrap">
              <div className="row">
                <div className="col-lg-7 col-md-12">
                  <div className="h-page-6-getjobs-left">
                    <div className="twm-media">
                      <img
                        src="images/get-job-pic.png"
                        alt="angel gulf consultant"
                        style={{ width: "350px", height: "auto" }}
                      />
                      <div className="twm-media-bg-circle" />
                      <div className="twm-media-bg-circle2" />
                      <div className="twm-media-bg-circle3">
                        {/* <div className="rotate-center">
                          <span className="ring1" />
                          <span className="ring2" />
                          <span className="ring3" />
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="h-page-6-getjobs-right">
                    {/* TITLE START*/}
                    <div className="section-head left wt-small-separator-outer">
                      <div className="wt-small-separator site-text-primary">
                        <h2 className="wt-title blueuText">
                          Gulf Job Consultants
                        </h2>
                      </div>
                      {/* <h2 className="wt-title">
                        Gulf Job Consultants
                        <span className="site-text-primary"></span>
                      </h2> */}
                      <p>
                        Gulf Jobs - for people from around the world, Gulf jobs
                        are some of the best paying jobs. If right skills are
                        acquired and proper planning is initiated then for sure
                        Gulf jobs could be a very rewarding & full-filling
                        career option.
                      </p>
                      <p>
                        Angel Gulf Jobs is a specialized Gulf Job Consultants
                        (abroad / overseas job consultant) based in Mumbai -
                        India, with years of Gulf experience; we are rigorously
                        recruiting for the Gulf countries from India, Sri Lanka,
                        Bangladesh, Nepal & Philippines. Full-filling the
                        requirement of clients in the Gulf & candidates across
                        different work categories is synchronized in the best
                        possible manner.
                      </p>
                    </div>
                    {/* TITLE END*/}
                    <div className="twm-read-more d-none">
                      <a href="about-1.html" className="site-button">
                        About More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-full p-t50 p-b40 twm-blog-post-h-page6-wrap bg-white">
       
      <div className="container">
      <h2 className="wt-title blueuText mb-5 mt-4 text-center"> Our Clients</h2>
        <div className="clients-carousel position-relative" style={{ padding: '0 56px' }}>
        {clientImages && clientImages.length > 1 && (
          <>
            <button
              className="clients-prev site-bg-primary"
              type="button"
              aria-label="Previous clients"
              style={{
                position: 'absolute',
                left: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 5,
                border: 'none',
                cursor: 'pointer',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
              }}
            >
              <span style={{ fontSize: '22px', lineHeight: 1 }}>&lt;</span>
            </button>
            <button
              className="clients-next site-bg-primary"
              type="button"
              aria-label="Next clients"
              style={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 5,
                border: 'none',
                cursor: 'pointer',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
              }}
            >
              <span style={{ fontSize: '22px', lineHeight: 1 }}>&gt;</span>
            </button>
          </>
        )}
        <Swiper
          slidesPerView={5} 
          spaceBetween={20} 
          loop={true} 
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false, 
          }}
          modules={[Navigation, Autoplay]}
          navigation={{ prevEl: '.clients-prev', nextEl: '.clients-next' }}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1 },  
            480: { slidesPerView: 2 },  
            768: { slidesPerView: 3 },  
            1024: { slidesPerView: 4 }, 
            1200: { slidesPerView: 5 }, 
          }}
        >
          {clientImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="ow-client-logo d-flex justify-content-center">
                <div className="client-logo client-logo-media">
                  <img
                   src={image.src}
                   alt={`Client ${index + 1}`}
                   title={`Client ${index + 1}`}
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </div>

        {/* GET JOBS SECTION SECTION END */}
        {/* Featured Jobs SECTION START */}
        <div className="section-full p-t50 p-b40 site-bg-white twm-hpage-6-featured-outer d-none">
          {/* TITLE START*/}
          <div className="section-head center wt-small-separator-outer">
            <div className="wt-small-separator site-text-primary">
              <h2 className="wt-title">Jobs By Location</h2>
            </div>
            <h2 className="wt-title">Jobs By Location</h2>
          </div>
          {/* TITLE END*/}
          <div className="twm-hpage-6-featured-area">
            <div className="twm-hpage-6-featured-bg-warp"></div>
            <div className="container">
              <div className="twm-hpage-6-featured-content-warp m-b30">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <img
                          src="https://www.angelgulfjobs.com/images/img-dubai.webp"
                          className="img-fluid"
                          alt="angel gulf consultant"
                          style={{
                            borderRadius: "50%",
                            border: "5px solid #3498DB",
                          }}
                        />
                        <p className="text-center">Jobs in Dubai</p>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <img
                          src="https://www.angelgulfjobs.com/images/img-dubai.webp"
                          className="img-fluid"
                          alt="angel gulf consultant"
                          style={{
                            borderRadius: "50%",
                            border: "5px solid #3498DB",
                          }}
                        />
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <img
                          src="https://www.angelgulfjobs.com/images/img-dubai.webp"
                          className="img-fluid"
                          alt="not found"
                          style={{
                            borderRadius: "50%",
                            border: "5px solid #3498DB",
                          }}
                        />
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <img
                          src="https://www.angelgulfjobs.com/images/img-dubai.webp"
                          className="img-fluid"
                          alt="not found"
                          style={{
                            borderRadius: "50%",
                            border: "5px solid #3498DB",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Featured Jobs SECTION END */}

        {/* Our Comunity SECTION START */}
        <div
          className="section-full p-t120 site-bg-white twm-our-comu-hpage-6-area d-none"
          style={{ backgroundImage: "url(images/home-6/our-com-bg.jpg)" }}
        >
          <div className="container">
            {/* TITLE START*/}
            <div className="wt-separator-two-part content-white">
              <div className="row wt-separator-two-part-row">
                <div className="col-xl-8 col-lg-8 col-md-12 wt-separator-two-part-left">
                  <div className="row"></div>
                </div>
              </div>
            </div>
            {/* TITLE END*/}
          </div>
          <div className="hpage-6-comunity-counter-wrap">
            <div className="container">
              <div className="twm-company-approch6-outer">
                <div className="twm-company-approch6">
                  <div className="row">
                    {/*block 1*/}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="counter-outer-two">
                        <div className="icon-media-wrap">
                          <div className="icon-media site-text-white">
                            <i className="flaticon-resume" />
                          </div>
                        </div>
                        <div className="icon-content">
                          <div className="tw-count-number site-text-white">
                            <span className="counter text-clr-green">1590</span>
                          </div>
                          <p className="icon-content-info">Completed Cases</p>
                        </div>
                      </div>
                    </div>
                    {/*block 2*/}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="counter-outer-two">
                        <div className="icon-media-wrap">
                          <div className="icon-media site-text-white">
                            <i className="flaticon-user" />
                          </div>
                        </div>
                        <div className="icon-content">
                          <div className="tw-count-number site-text-white">
                            <span className="counter text-clr-pink">1740</span>
                          </div>
                          <p className="icon-content-info">Our Office</p>
                        </div>
                      </div>
                    </div>
                    {/*block 3*/}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="counter-outer-two">
                        <div className="icon-media-wrap">
                          <div className="icon-media site-text-white">
                            <i className="flaticon-hr" />
                          </div>
                        </div>
                        <div className="icon-content">
                          <div className="tw-count-number site-text-white">
                            <span className="counter text-clr-yellow-2">
                              800
                            </span>
                          </div>
                          <p className="icon-content-info">Skilled People</p>
                        </div>
                      </div>
                    </div>
                    {/*block 4*/}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="counter-outer-two">
                        <div className="icon-media-wrap">
                          <div className="icon-media site-text-white">
                            <i className="flaticon-note" />
                          </div>
                        </div>
                        <div className="icon-content">
                          <div className="tw-count-number site-text-white">
                            <span className="counter text-clr-purple">16</span>
                          </div>
                          <p className="icon-content-info">Happy Client</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Comunity SECTION SECTION END */}
        {/* TESTIMONIAL SECTION START */}
        <div className="section-full p-t50 p-b40 site-bg-white twm-testimonial-v-area d-none">
          <div className="container">
            <div className="section-content">
              <div className="twm-testimonial-v-section">
                <div className="row">
                  <div className="col-xl-5 col-lg-12 col-md-12">
                    <div className="twm-explore-content-outer2">
                      <div className="twm-explore-top-section">
                        {/* TITLE START*/}
                        <div className="section-head left wt-small-separator-outer">
                          <div className="wt-small-separator site-text-primary">
                            <div>Testimonials </div>
                          </div>
                          <h2>Quotes from our customer about us</h2>
                          <p>
                            You need to create an account to find the best and
                            preferred job. lorem Ipsum is simply dummy text of
                            the printing and typesetting the standard dummy text
                            ever since the when an printer took.
                          </p>
                        </div>
                        {/* TITLE END*/}
                        <div className="twm-read-more">
                          <a href="about-1.html" className="site-button">
                            Show All Quotes
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-12 col-md-12">
                    <div className="v-testimonial-wrap">
                      <div className="v-testi-dotted-pic">
                        <img
                          src="images/home-6/testimonial/dotted-block.png"
                          alt="#"
                        />
                      </div>
                      {/* Swiper */}
                      <div className="swiper-container v-testimonial-slider">
                        <div className="swiper-wrapper">
                          {/*block 1*/}
                          <div className="swiper-slide">
                            <div className="testimonials-v">
                              <div className="twm-testi-media">
                                <img
                                  src="images/home-6/testimonial/pic1.jpg"
                                  alt="#"
                                />
                              </div>
                              <div className="testimonial-v-content">
                                <div className="t-testimonial-top">
                                  <div className="t-quote">
                                    <i className="fa fa-quote-left" />
                                  </div>
                                  <div className="t-rating">
                                    <span>
                                      <i className="fa fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa fa-star" />
                                    </span>
                                  </div>
                                </div>
                                <div className="t-discription">
                                  I have minim mollit non deserunt ullamco est
                                  sit aliqua dolor do Eam et sint. Velit officia
                                  consequat.
                                </div>
                                <div className="twm-testi-detail">
                                  <div className="twm-testi-name">
                                    Guy Hawkins
                                  </div>
                                  <div className="twm-testi-position">
                                    UI/UX Designer
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*block 2*/}
                          <div className="swiper-slide">
                            <div className="testimonials-v">
                              <div className="twm-testi-media">
                                <img
                                  src="images/home-6/testimonial/pic2.jpg"
                                  alt="#"
                                />
                              </div>
                              <div className="testimonial-v-content">
                                <div className="t-testimonial-top">
                                  <div className="t-quote">
                                    <i className="fa fa-quote-left" />
                                  </div>
                                  <div className="t-rating">
                                    <span>
                                      <i className="fa fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa fa-star" />
                                    </span>
                                  </div>
                                </div>
                                <div className="t-discription">
                                  I have minim mollit non deserunt ullamco est
                                  sit aliqua dolor do Eam et sint. Velit officia
                                  consequat.
                                </div>
                                <div className="twm-testi-detail">
                                  <div className="twm-testi-name">
                                    Guy Hawkins
                                  </div>
                                  <div className="twm-testi-position">
                                    UI/UX Designer
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*block 3*/}
                          <div className="swiper-slide">
                            <div className="testimonials-v">
                              <div className="twm-testi-media">
                                <img
                                  src="images/home-6/testimonial/pic3.jpg"
                                  alt="#"
                                />
                              </div>
                              <div className="testimonial-v-content">
                                <div className="t-testimonial-top">
                                  <div className="t-quote">
                                    <i className="fa fa-quote-left" />
                                  </div>
                                  <div className="t-rating">
                                    <span>
                                      <i className="fa fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa fa-star" />
                                    </span>
                                  </div>
                                </div>
                                <div className="t-discription">
                                  I have minim mollit non deserunt ullamco est
                                  sit aliqua dolor do Eam et sint. Velit officia
                                  consequat.
                                </div>
                                <div className="twm-testi-detail">
                                  <div className="twm-testi-name">
                                    Guy Hawkins
                                  </div>
                                  <div className="twm-testi-position">
                                    UI/UX Designer
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*block 4*/}
                          <div className="swiper-slide">
                            <div className="testimonials-v">
                              <div className="twm-testi-media">
                                <img
                                  src="images/home-6/testimonial/pic1.jpg"
                                  alt="#"
                                />
                              </div>
                              <div className="testimonial-v-content">
                                <div className="t-testimonial-top">
                                  <div className="t-quote">
                                    <i className="fa fa-quote-left" />
                                  </div>
                                  <div className="t-rating">
                                    <span>
                                      <i className="fa fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa fa-star" />
                                    </span>
                                  </div>
                                </div>
                                <div className="t-discription">
                                  I have minim mollit non deserunt ullamco est
                                  sit aliqua dolor do Eam et sint. Velit officia
                                  consequat.
                                </div>
                                <div className="twm-testi-detail">
                                  <div className="twm-testi-name">
                                    Guy Hawkins
                                  </div>
                                  <div className="twm-testi-position">
                                    UI/UX Designer
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Add Pagination */}
                        <div className="swiper-pagination" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* TESTIMONIAL SECTION END */}

        {/* SUBSCRIBE SECTION START */}
        <div
          className="section-full twm-hpage-6-subs-wrap bg-cover d-none"
          style={{ backgroundImage: "url(images/home-6/subscribe-bg.jpg)" }}
        >
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-lg-7 col-md-12">
                  <div className="twm-hpage-6-getintouch">
                    <div className="callus-bg-box">
                      <div className="callus-bg-box-shadow" />
                    </div>
                    <div className="twm-hpage-6-getintouch-title">
                      <div className="wt-title-small">Latest Blog</div>
                      <h2 className="wt-title">
                        Get your <span>Free</span>
                        web consultation
                      </h2>
                    </div>
                    <div className="twm-hpage-6-callus">
                      <div className="callus-icon">
                        <i className="flaticon-phone" />
                      </div>
                      <div className="callus-content">
                        <div className="callus-number">555-281-5426</div>
                        <div className="callus-email">Info@jobzilla.com</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="twm-hpage-6-subscribe-wrap">
                    <div className="hpage-6-nw-form-corner-wrap">
                      <div className="twm-hpage-6-subscribe">
                        <h3 className="twm-sub-title">Subscribe for free</h3>
                        <div className="twm-sub-discription">
                          Join our email subscription now to get updates on new
                          jobs and notifications.
                        </div>
                        <form>
                          <div className="hpage-6-nw-form">
                            <input
                              name="news-letter"
                              className="form-control"
                              placeholder="Enter Your Email"
                              type="text"
                            />
                            <button className="hpage-6-nw-form-btn">
                              <i className="fa fa-paper-plane" />
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="hpage-6-nw-form-corner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SUBSCRIBE SECTION END */}
      </div>
    </div>
  );
};

export default Home;
