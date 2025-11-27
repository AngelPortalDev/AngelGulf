import React from "react";
import { NavLink } from "react-router-dom";
import { locations } from "./sectionsData";
import "./HomeLayout.css";

const JobsByLocationSection = () => (
  <section className="home-section">
    <div className="container">
      <div className="home-section-title">
        <h2 className="home-section-heading">Jobs By Location</h2>
      </div>
      <div className="home-locations-grid">
        {locations.map(({ id, label, image }) => (
          <div className="home-location-card" key={id}>
            <NavLink to="/job-list">
              <img src={image} alt={label} title={label} loading="lazy" />
            </NavLink>
            <p className="mt-2">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default JobsByLocationSection;

