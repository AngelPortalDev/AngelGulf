import React from "react";
import "./TestimonialsStats.css";

const defaultItems = [
  "10,000+ successful placements",
  "15+ years of experience in Gulf recruitment",
  "3000+ corporate clients",
  "Successful placements of freshers as well as experienced candidates",
];

const TestimonialsStats = ({ items = defaultItems }) => {
  return (
    <div className="testimonials-stats-ribbon" role="list" aria-label="Angel Gulf Jobs achievements">
      {items.map((item) => (
        <span key={item} className="testimonials-stats-pill" role="listitem">
          {item}
        </span>
      ))}
    </div>
  );
};

export default TestimonialsStats;

