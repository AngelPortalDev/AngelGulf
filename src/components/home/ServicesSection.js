import React from "react";
import { serviceCards } from "./sectionsData";
import "./HomeLayout.css";

const ServicesSection = () => (
  <section className="home-section">
    <div className="container">
      <div className="row align-items-center mb-4">
        <div className="col-lg-8">
          <div className="home-section-title text-start">
            <h2 className="home-section-heading">Overseas Job Services</h2>
            <p style={{ color: "#5f6a7c" }}>
              Our comprehensive range of services ensures employers and job seekers get the right support—from guidance
              and recruitment to documentation and onboarding.
            </p>
          </div>
        </div>
      </div>
      <div className="row g-4">
        {serviceCards.map(({ id, title, description, image }) => (
          <div className="col-lg-4 col-md-6" key={id}>
            <div className="home-service-card">
              <img src={image} alt={title} title={title} loading="lazy" />
              <div className="body">
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

