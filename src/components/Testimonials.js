import React, { useState } from "react";
import "./Testimonials.css";
import TestimonialsStats from "./shared/TestimonialsStats";
import Akash from "../assets/images/candidates-testimonials/akash-achari.png";
import Farhan from "../assets/images/candidates-testimonials/farhan-hasan.png";
import Garuda from "../assets/images/candidates-testimonials/garuda-gamer.png";
import Ksrinivasan from "../assets/images/candidates-testimonials/krinivasan-nair.png";
import Mohd from "../assets/images/candidates-testimonials/mohd-ashar.png";
import Risalat from "../assets/images/candidates-testimonials/risalat-khan.png";
import Thiru from "../assets/images/candidates-testimonials/thriu-pathi.png";
import placeholder from "../assets/images/candidates-testimonials/profile-placeholder.png";

const testimonials = [
  {
    id: 10,
    name: "Garuda Gamer",
    review:
      "Best office I found for my work...staff was very helpful and polite ...and the process is smooth and clear...at very less time i got a job with good pay... And also they are genuine ..overall experience was good.... Thanks Angel Gulf Jobs Team and sanjana mam.",
    image: Garuda,
    date: "January 15, 2025",
  },
  {
    id: 9,
    name: "Ksrinivasan Nair",
    review:
      "Good service thank you rameshwari and binomol mam for smooth process 9f my bharain work visa thank you once again.",
    image: Ksrinivasan,
    date: "December 05, 2025",
  },
  {
    id: 8,
    name: "Murshitha AK",
    review:
      "The platform is remarkably transparent, providing clear information about their services and processes. I truly appreciated their commitment to candidates satisfaction. Highly recommend for anyone looking to connect in the Gulf region.",
    image: placeholder,
    date: "November 20, 2025",
  },
  {
    id: 7,
    name: "Nithin Mathew",
    review:
      "I had a wonderful experience with them especially saroja helped me a lot.",
    image: placeholder,
    date: "October 01, 2025",
  },
  {
    id: 6,
    name: "Israr",
    review:
      "ماشاء اللہ.. Good Agency Reasonable Service Charge Quick Departure. Special Mention to Aashna Khan Who Facilitated All process so Hassle Free. Thank You Aashna Khan.",
    image: placeholder,
    date: "September 12, 2025",
  },
  {
    id: 5,
    name: "Farhan Hasan",
    review:
      "I highly recommend Angel Gulf Jobs for their exceptional visa consultancy services. My visa advisor, Ashna, was extremely professional and guided me through the entire process with ease.",
    image: Farhan,
    date: "August 05, 2025",
  },
  {
    id: 4,
    name: "Mohd Ashar",
    review:
      "Had a great experience with angel gulf consultancy, received offer letter from Qatar within 2 weeks. Everything is transparent and the process is so smooth, Special thanks to Aashna mam. Highly recommended to anyone who was looking for a job in gulf countries.",
    image: Mohd,
    date: "July 10, 2025",
  },
  {
    id: 1,
    name: "Akash Achari",
    review:
      "Hello everyone this is Akash great experience working with Angel Gulf Jobs. They guided me through every step of the hiring process and kept communication clear and fast. Thanks to them, I secured an opportunity that matches my skills perfectly. Highly recommend their services!",
    image: Akash,
    date: "June 01, 2025",
  },
  {
    id: 2,
    name: "Risalat Khan",
    review:
      "Angel Gulf Jobs really good option for your career in gulf countries. I got a job in Behrain within a week and that's amazing. Without any doubt you can contact them. This is a genuine office in Mumbai.",
    image: Risalat,
    date: "May 15, 2025",
  },
  {
    id: 3,
    name: "Thiru Pathi",
    review:
      "Am thiruppathi Madurai tamilnadu, have a great experiance in angel gulf jobs.com consultancy Mumbai, am selected from dubai within 3 weeks, Aashna in HR angel gulf jobs.com very responsible handle with updation time to time inform to me.",
    image: Thiru,
    date: "April 22, 2025",
  },
];

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="star-icon"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
);

const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="google-icon"
  >
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.333.533 12S5.867 24 12.48 24c3.44 0 6.053-1.147 8.213-3.387 2.187-2.187 2.853-5.413 2.853-8.053 0-.8-.08-1.573-.24-2.293h-10.827z" />
  </svg>
);

const ArrowLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="nav-icon"
  >
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="nav-icon"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300); // Duration matches CSS transition
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  // Get 3 items starting from startIndex, wrapping around
  const visibleTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ];

  // Calculate progress percentage
  const progress = ((startIndex + 1) / testimonials.length) * 100;

  return (
    <section className="testimonials-section">
      {/* Header Content */}
      <div className="testimonials-header">
        <p className="testimonials-subtitle">Thousands Trust Angel Gulf Jobs</p>
        <h2 className="testimonials-title">
          Don’t take our word for it,
          <br className="d-none d-md-block" />
          see what our candidates say
        </h2>
        <p className="testimonials-description">
          We’re honored by the feedback, and it fuels our commitment to delivering
          exceptional recruitment services. Read the reviews to hear firsthand
          how Angel Gulf Jobs is making a positive impact on people’s careers.
          Your trust is our greatest achievement.
        </p>
      </div>

      {/* Testimonials Row */}
      <div className={`testimonials-grid ${isAnimating ? "animating" : ""}`}>
        {/* Decorative background line hint */}
        <div className="testimonials-decoration">
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
            <circle cx="300" cy="0" r="299.5" stroke="#E5E7EB" />
            <circle cx="300" cy="0" r="220" stroke="#E5E7EB" />
          </svg>
        </div>

        {visibleTestimonials.map((t, index) => (
          <div key={`${t.id}-${index}`} className="testimonial-card fade-in">
            {/* Stars */}
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="star-box">
                  <StarIcon />
                </div>
              ))}
            </div>

            {/* Review Text */}
            <p className="testimonial-text">{t.review}</p>

            {/* Author */}
            <div className="testimonial-author">
              <img src={t.image} alt={t.name} className="author-image" />
              <div className="author-info">
                <h4>{t.name}</h4>
                <p>{t.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="testimonials-progress-container">
        <div
          className="testimonials-progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Footer / Google Reviews Section */}
      <div className="testimonials-footer">
        {/* Google Info */}
        <div className="trustpilot-container">
          <div className="trustpilot-logo">
            <GoogleIcon />
            <span className="trustpilot-text">Google Reviews</span>
          </div>

          <div className="trustpilot-divider"></div>

          <div className="trustpilot-rating">
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="star-box google-star-box">
                  <StarIcon />
                </div>
              ))}
            </div>
            <div className="rating-text">
              <span className="rating-score">Excellent</span>
              <span className="rating-count">4.9 Rating based on 10,000+ reviews</span>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="testimonials-nav">
          <button className="nav-btn" onClick={handlePrev} aria-label="Previous">
            <ArrowLeft />
          </button>
          <button className="nav-btn" onClick={handleNext} aria-label="Next">
            <ArrowRight />
          </button>
        </div>
      </div>

      <TestimonialsStats />
    </section>
  );
};

export default Testimonials;
