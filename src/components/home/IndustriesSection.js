import React from "react";
import { NavLink } from "react-router-dom";
import { industryCategories } from "./sectionsData";
import "./HomeLayout.css";

const IndustriesSection = () => (
  <section className="home-section twm-job-categories-hpage-6-area">
    <div className="container">
      <div className="home-section-title">
        <h2 className="home-section-heading">Jobs By Industries</h2>
        <p style={{ color: "#5f6a7c" }}>
          Explore the industries we actively support and discover current openings curated for Gulf talent.
        </p>
      </div>
      <div className="home-industries-grid">
        {industryCategories.map(({ id, title, openings, icon }) => {
          const isFontAwesome = icon.includes("fa-") || icon.includes("fas");
          return (
            <div className="home-industry-card" key={id}>
              <div className="home-industry-icon">
                {isFontAwesome ? <i className={`fa ${icon}`} /> : <span className={icon} />}
              </div>
              <div>
                <strong>{title}</strong>
                <div className="home-industry-openings">
                  <span>{openings}</span> Openings
                </div>
              </div>
              <NavLink className="home-circle-btn" to="/job-list">
                <i className="fa fa-arrow-right" />
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default IndustriesSection;

