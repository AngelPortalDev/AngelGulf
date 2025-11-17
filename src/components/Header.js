/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/images/ange_gulf_logo.png';

const Header = () => {

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 992 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    maltaBun:{
      backgroundColor:'#009BD4',
      color:'#fff',
      borderRadius:'4px',
      padding:'6px 12px',
      height:'fit-content',
      textAlign:'center',
      whiteSpace:'nowrap'
    }
  }

  const navLinkStyle = {
    color: isMobile ? '#111' : '#fff',
    background: 'transparent',
    padding: '6px 10px'
  };

  const mainBarStyle = {
    backgroundColor: isMobile ? '#ffffff' : '#009BD4',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    borderBottom: isMobile ? '1px solid #eef2f6' : '1px solid #009BD4',
    padding: '2px 0'
  };

  return (
    <div>
      <header className="site-header header-style-3 mobile-sider-drawer-menu">
        <div style={{ background:'#ffffff', borderBottom:'1px solid #eef2f6' }}>
        <div className="container py-2 d-flex align-items-center justify-content-between gap-3 flex-column flex-lg-row mobileViewHide">
          {/* Logo */}
          <div className="logo-header mb-3 mb-md-0">
            <div className="logo-header-inner logo-header-one">
              <NavLink to="/">
                <img
                  src={Logo}
                  alt="Angel gulf"
                  title="angel gulf jobs logo"
                  style={{ maxWidth: "100%", height: "90px" }} 
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
        {/* <div className="" style={{display:'flex',alignItems:'center'}}>
            <h5 className="text-white mb-0" style={{padding:'5px', backgroundColor:'#009BD4',borderRadius:'4px',height:'fit-content'}}><a className="text-white" style={{display:'flex',textAlign:'center'}} href='https://whatsapp.com/channel/0029Va9inuu6xCSXEKgRio1A' target='blank'>Join our WhatsApp channel</a></h5>
        </div> */}

        

          {/* Social Media Icons */}
          <div className="d-flex flex-column flex-lg-row align-items-center mt-0 mt-md-2">
            <h5 className="text-center text-md-start ms-md-4 mb-2 mb-md-0" style={{ fontSize: '0.9rem', color: '#6b7280' }}>
              Follow us
            </h5>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a
                href="https://www.facebook.com/angelgulfjobs/"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-5 ms-3"
                style={{ color: "#009BD4" }}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/angelgulfjobs/"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-5 ms-3"
                style={{ color: "#009BD4" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://x.com/angelgulfjobs"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-5 ms-3"
                style={{ color: "#009BD4" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UC2ywUMh9xqwpimGEQ-UMgcQ?view_as=subscriber"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-5 ms-3"
                style={{ color: "#009BD4" }}
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/angel-gulf-jobs/"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-5 ms-3"
                style={{ color: "#009BD4" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
               href="https://whatsapp.com/channel/0029Va9inuu6xCSXEKgRio1A"
               target="_blank"
               rel="noopener noreferrer"
               className="fs-5 ms-3"
               style={{ color: "#009BD4" }}>
              <i class="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
              <a href="https://www.angel-jobs.mt/" target="_blank" className="maltabtn1 ms-3" style={styles.maltaBun}>Work in Malta</a>
            </div>
          </div>
        </div>
        </div>

        <div className="sticky-header main-bar-wraper  navbar-expand-lg">
          <div className="main-bar" style={mainBarStyle}>
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
                      style={{ maxWidth: "100%", height: "56px" }} 
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
                <ul className=" nav navbar-nav" style={{ gap: '8px' }}>
                  <li className="has-mega-menu">
                    <NavLink to="/" style={navLinkStyle}>Home</NavLink>
                  </li>
                  <li className="has-child">
                    <NavLink style={navLinkStyle}>Our Services</NavLink>
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
                    <NavLink to="/industries" target="_blank" style={navLinkStyle}>
                      Industries
                    </NavLink>
                  </li>
                  <li className="has-child">
                    <NavLink style={navLinkStyle}>Process</NavLink>
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
                    <NavLink style={navLinkStyle}>Current Opening</NavLink>
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
                    <NavLink to="/partner-with-us" target="_blank" style={navLinkStyle}>
                      Partner With Us
                    </NavLink>
                  </li>
                  <li className="has-child">
                    <Link style={navLinkStyle}>Contact</Link>
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
                    <NavLink to="/job-list" target="_blank" style={navLinkStyle}>
                      Browse Jobs
                    </NavLink>
                  </li>
                  <li className="has-child removearrowicon">
                    <NavLink to="/registration" target="_blank" style={navLinkStyle}>
                      Registration
                    </NavLink>
                  </li>
                  {/* <li className="has-child removearrowicon d-lg-none d-block">
                    <a href="https://whatsapp.com/channel/0029Va9inuu6xCSXEKgRio1A" target="_blank" rel="noopener noreferrer">
                     Join Our WhatsApp Channel
                     </a>
                  </li> */}
                   <li className="has-child removearrowicon d-lg-none d-block" style={{ color:'#fff !important', padding:'0px 10px 10px', width:'fit-content' }}>
                    <a href="https://www.angel-jobs.mt/" id="maltabtn1mobile" target="_blank" rel="noopener noreferrer" style={{ color:'fff !important',backgroundColor:'#009BD4',padding:'6px 12px',borderRadius:'4px' }}>
                     Work in Malta
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
      <a
        href="https://whatsapp.com/channel/0029Va9inuu6xCSXEKgRio1A"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join our WhatsApp Channel"
        style={{
          position: 'fixed',
          right: '8px',
          bottom: '70px',
          width: '58px',
          height: '58px',
          backgroundColor: '#25D366',
          color: '#fff',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          zIndex: 1000
        }}
      >
        <i className="fa-brands fa-whatsapp" style={{ fontSize: '32px', lineHeight: 1 }}></i>
      </a>
    </div>
  );
};

export default Header;
