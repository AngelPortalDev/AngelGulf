import React from "react";
import { Link } from "react-router-dom";
import video1 from "../assets/video/new.mp4";
import video2 from "../assets/video/bg-video.mp4";
import poster from "../assets/video/poster.jpg";
import BeAwareModal from "./static/BeAwareModal.js";
import Testimonials from "./Testimonials";
import ClientTestimonials from "./ClientTestimonials";
import IntroSection from "./home/IntroSection";
import HighlightsSection from "./home/HighlightsSection";
import WhyChooseSection from "./home/WhyChooseSection";
import JobsByLocationSection from "./home/JobsByLocationSection";
import IndustriesSection from "./home/IndustriesSection";
import ServicesSection from "./home/ServicesSection";
import ClientsSection from "./home/ClientsSection";
import HomeFaqSection from "./home/HomeFaqSection";
import HomeBlogSection from "./home/HomeBlogSection";
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
import { Helmet } from "react-helmet-async";


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
];

const Home = () => {

  return (
    <div>
      <Helmet>
           <title>Angel Gulf Jobs | Leading Overseas & Gulf Job Consultants India</title>
            <meta name="keywords" content="abroad job consultants, overseas job consultants, Gulf job consultants, overseas recruitment agency, Indian overseas job consultants, Gulf recruitment agency, manpower consultancy for Gulf, overseas job placement agency, best Gulf job consultancy, Gulf job consultancy in India, Gulf recruitment consultants in Mumbai"/>
            <meta name="description" content="Angel Gulf Jobs is India’s trusted overseas job consultants and Gulf recruitment agency, offering verified job opportunities, skilled hiring, and ethical recruitment solutions."/>
             <link
              rel="canonical"
              href="https://www.angelgulfjobs.com/"
            />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <BeAwareModal />
      <div className="page-content" style={{ overflowX: 'hidden' }}>
        {/*Banner Start*/}
        <div className="hero-section" style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          maxHeight: '800px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: '#000'
        }}>
          <video
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              zIndex: 1
            }}
            loop
            autoPlay
            muted
            playsInline
            preload="auto"
            poster={poster}
          >
            <source src={video2} type="video/mp4" />
          </video>
          
          {/* Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 100%)',
            zIndex: 2
          }}></div>
          
          {/* Content */}
          <div style={{
            position: 'relative',
            zIndex: 3,
            color: '#ffffff',
            padding: '0 5%',
            maxWidth: '1400px',
            width: '100%',
            margin: '0 auto'
          }}>
            <div style={{
              maxWidth: '700px'
            }}>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: '700',
                marginBottom: '1.5rem',
                lineHeight: '1.2',
                color: '#ffffff',
                textShadow: '2px 2px 12px rgba(0, 0, 0, 0.7)',
                letterSpacing: '-0.02em'
              }}>
                Gateway to Gulf
              </h1>
              <p style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                fontWeight: '400',
                lineHeight: '1.6',
                color: '#ffffff',
                textShadow: '1px 1px 8px rgba(0, 0, 0, 0.7)',
                marginBottom: '2.5rem'
              }}>
                Your trusted manpower consultancy for secure, <br/> well-matched Gulf jobs for Indians.
              </p>
              
              {/* Buttons */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}>
                <Link 
                  to="/job-list" 
                  style={{
                    display: 'inline-block',
                    padding: '14px 32px',
                    backgroundColor: '#009BD4',
                    color: '#ffffff',
                    fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                    fontWeight: '600',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0, 155, 212, 0.3)',
                    border: '2px solid #009BD4',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#0579ad';
                    e.target.style.borderColor = '#0579ad';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 16px rgba(0, 155, 212, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#009BD4';
                    e.target.style.borderColor = '#009BD4';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 155, 212, 0.3)';
                  }}
                >
                  Browse Jobs
                </Link>
                
                <Link 
                  to="/registration" 
                  style={{
                    display: 'inline-block',
                    padding: '14px 32px',
                    backgroundColor: 'transparent',
                    color: '#ffffff',
                    fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                    fontWeight: '600',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    border: '2px solid #ffffff',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#ffffff';
                    e.target.style.color = '#009BD4';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 16px rgba(255, 255, 255, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Register & Apply
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*Banner End*/}
        <ClientsSection clientImages={clientImages} />
        <IntroSection />
        {/* <HighlightsSection /> */}
        <WhyChooseSection />
        <ClientTestimonials />
        <JobsByLocationSection />
        <IndustriesSection />
        <ServicesSection />
        {/* <ClientsSection clientImages={clientImages} /> */}
        <Testimonials />
        <HomeFaqSection />
        <HomeBlogSection />
      </div>
    </div>
  );
};

export default Home;
