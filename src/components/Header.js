import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/images/ange_gulf_logo.png';

const Header = () => {
  return (
    <div>
      <header className="site-header header-style-3 mobile-sider-drawer-menu">
        <div className="container-fluid mt-2 mb-2 d-flex justify-content-around flex-column flex-lg-row mobileViewHide">
          {/* Logo */}
          <div className="logo-header mb-3 mb-md-0">
            <div className="logo-header-inner logo-header-one">
              <NavLink to="/">
                <img
                  src={Logo}
                  alt="Angel gulf"
                  title="angel gulf jobs logo"
                  style={{ maxWidth: "100%", height: "auto" }} 
                />
              </NavLink>
            </div>
          </div>

          {/* Text Content (Company Info) */}
          <div className="d-flex flex-column align-items-center text-center mb-3 mb-md-0">
            <div className="mob-hide">
              <h4 className="blueuText mb-0">Angel Management Consultant</h4>
              <p className="font14 mb-0 pb-0">
                <strong>Approved By Govt. Of India Ministry Of Labour</strong>
              </p>
              <p className="font12 mb-0">
                <strong>
                  REG. NO. B-0866/MUM/PER/1000+/5/9186/2016 - Valid Till
                  04/04/2027
                </strong>
              </p>
            </div>
          </div>

        <div className="" style={{display:'flex',alignItems:'center'}}>
            <h5 className="text-white mb-0" style={{padding:'5px', backgroundColor:'#3498db',borderRadius:'4px',height:'fit-content'}}><a className="text-white" style={{display:'flex',textAlign:'center'}} href='https://whatsapp.com/channel/0029Va9inuu6xCSXEKgRio1A' target='blank'>Join our WhatsApp channel</a></h5>
        </div>

          {/* Social Media Icons */}
          <div className="d-flex flex-column flex-lg-row align-items-center mt-0 mt-md-2">
            <h5 className="text-center text-md-start ms-md-5 mb-3 mb-md-0">
              Follow us:
            </h5>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a
                href="https://www.facebook.com/angelgulfjobs/"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-5 ms-3"
                style={{ color: "#3598DB" }}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/angelgulfjobs/"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-5 ms-3"
                style={{ color: "#3598DB" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://x.com/angelgulfjobs"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-5 ms-3"
                style={{ color: "#3598DB" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UC2ywUMh9xqwpimGEQ-UMgcQ?view_as=subscriber"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-5 ms-3"
                style={{ color: "#3598DB" }}
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/angel-gulf-jobs/"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-5 ms-3"
                style={{ color: "#3598DB" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
               href="https://whatsapp.com/channel/0029Va9inuu6xCSXEKgRio1A"
               target="_blank"
               rel="noopener noreferrer"
               className="fs-5 ms-3"
               style={{ color: "#3598DB" }}>
              <i class="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="sticky-header main-bar-wraper  navbar-expand-lg">
          <div className="main-bar">
            <div className="container-fluid clearfix">
              {/* NAV Toggle Button */}
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
             {/* {
              showLogo && ( */}
                <span className="mobileLogo">
                  <Link to="/" className="logo-header-inner logo-header-one mobileViewheader">
                    <img
                      src={Logo}
                      alt="Angel gulf"
                      title="angel gulf jobs logo"
                      style={{ maxWidth: "100%", height: "40px" }} 
                    />
                  </Link>
                </span>
              {/* )
             }  */}
             <span>
              {/* <NavLink to="/">
                <img
                  src={Logo}
                  alt="Angel gulf"
                  title="angel gulf jobs logo"
                  style={{ maxWidth: "100%", height: "auto" }} 
                />
              </NavLink> */}
              </span>
              <button
                id="mobile-side-drawer"
                data-target=".header-nav"
                data-toggle="collapse"
                type="button"
                className="navbar-toggler collapsed"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar icon-bar-first" />
                <span className="icon-bar icon-bar-two" />
                <span className="icon-bar icon-bar-three" />
              </button>
              </div>
             
              {/* MAIN Vav */}
              <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">
                <ul className=" nav navbar-nav">
                  <li className="has-mega-menu">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="has-child">
                    <NavLink>Our Services</NavLink>
                    <ul className="sub-menu">
                      <li>
                        <NavLink to="/visa" target="_blank">
                          Visa Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/authentication" target="_blank">
                          Authentication
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/gamca-medical-centre" target="_blank">
                          Medical Centers
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/skill-test-centres" target="_blank">
                          Skill test centers
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/flight-booking" target="_blank">
                          Flight Booking
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/foreign-exchange" target="_blank">
                          Foreign Exchange
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child removearrowicon">
                    <NavLink to="/industries" target="_blank">
                      Industries
                    </NavLink>
                  </li>
                  <li className="has-child">
                    <NavLink>Process</NavLink>
                    <ul className="sub-menu">
                      <li>
                        <NavLink to="/recruitment-procedure" target="_blank">
                          Recruitment Procedures
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/organizational-chart" target="_blank">
                          Organizational Chart
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/our-network" target="_blank">
                          Our Network
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/clientele" target="_blank">
                          Clientele
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child">
                    <NavLink>Current Opening</NavLink>
                    <ul className="sub-menu">
                      <li>
                        <NavLink to="/jobs-in-uae" target="_blank">
                          Jobs in Dubai
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/jobs-in-saudi-arabia" target="_blank">
                          Jobs in Saudi
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/jobs-in-oman" target="_blank">
                          Jobs in Oman
                        </NavLink>
                      </li>
                      <li>
                        <NavLink>Jobs in Kuwait</NavLink>
                      </li>
                      <li>
                        <NavLink to="/jobs-in-qatar" target="_blank">
                          Jobs in Qatar
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/jobs-in-bahrain" target="_blank">
                          Jobs in Bahrain
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child removearrowicon">
                    <NavLink to="/partner-with-us" target="_blank">
                      Partner With Us
                    </NavLink>
                  </li>
                  <li className="has-child">
                    <Link>Contact</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/contact-us" target="_blank">
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/grievance-form" target="_blank">
                          Grievance Form
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child removearrowicon">
                    <NavLink to="/job-list" target="_blank">
                      Browse Jobs
                    </NavLink>
                  </li>
                  <li className="has-child removearrowicon">
                    <NavLink to="/registration" target="_blank">
                      Registration
                    </NavLink>
                  </li>
                  <li className="has-child removearrowicon d-lg-none d-block">
                    <a href="https://whatsapp.com/channel/0029Va9inuu6xCSXEKgRio1A" target="_blank" rel="noopener noreferrer">
                     Join Our WhatsApp Channel
                     </a>
                  </li>
                </ul>
              </div>
              {/* Header Right Section*/}
              <div className="extra-nav header-2-nav d-none">
                <div className="extra-cell">
                  <div className="header-search">
                    <a href="#search" className="header-search-icon">
                      <i className="feather-search" />
                    </a>
                  </div>
                </div>
                <div className="extra-cell">
                  <div className="header-nav-btn-section">
                    <div className="twm-nav-btn-left">
                      <a
                        className="twm-nav-sign-up"
                        data-bs-toggle="modal"
                        href="#sign_up_popup"
                        role="button"
                      >
                        <i className="feather-log-in" /> Sign Up
                      </a>
                    </div>
                    <div className="twm-nav-btn-right">
                      <a
                        href="dash-post-job.html"
                        className="twm-nav-post-a-job"
                      >
                        <i className="feather-briefcase" /> Post a job
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SITE Search */}
          <div id="search">
            <span className="close" />
            <form
              role="search"
              id="searchform"
              action="https://thewebmax.org/search"
              method="get"
              className="radius-xl"
            >
              <input
                className="form-control"
                defaultValue
                name="q"
                type="search"
                placeholder="Type to search"
              />
              <span className="input-group-append">
                <button type="button" className="search-btn">
                  <i className="fa fa-paper-plane" />
                </button>
              </span>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
