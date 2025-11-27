import React from "react";
import { highlightCards } from "./sectionsData";
import "./HomeLayout.css";

const HighlightsSection = () => (
  <section className="home-section">
    <div className="container">
      <div className="row g-4">
        {highlightCards.map(({ id, title, description, icon }) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={id}>
            <div className="home-highlight-card">
              <div className="home-highlight-icon">
                <img src={icon} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HighlightsSection;

