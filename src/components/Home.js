import React from "react";
import video1 from "../assets/video/new.mp4";
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
