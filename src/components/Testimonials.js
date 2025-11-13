import React, { useState } from "react";
import Akash from "../assets/images/candidates-testimonials/akash-achari.png"
import Farhan from "../assets/images/candidates-testimonials/farhan-hasan.png"
import Garuda from "../assets/images/candidates-testimonials/garuda-gamer.png"
import Ksrinivasan from "../assets/images/candidates-testimonials/krinivasan-nair.png"
import Mohd from "../assets/images/candidates-testimonials/mohd-ashar.png"
import Risalat from "../assets/images/candidates-testimonials/risalat-khan.png"
import Thiru from "../assets/images/candidates-testimonials/thriu-pathi.png"
import placeholder from '../assets/images/candidates-testimonials/profile-placeholder.png'


const testimonials = [
  {
    id: 1,
    name: "Akash Achari",
    review:
      "Hello everyone this is Akash great experience working with Angel Gulf Jobs. They guided me through every step of the hiring process and kept communication clear and fast. Thanks to them, I secured an opportunity that matches my skills perfectly. Highly recommend their services!",
    image:
      Akash,
  },
  {
    id: 2,
    name: "Risalat Khan",
    review:
      "Angel Gulf Jobs really good option for your career in gulf countries. I got a job in Behrain within a week and that's amazing. Without any doubt you can contact them. This is a genuine office in Mumbai.",
    image:
      Risalat,
  },
  {
    id: 3,
    name: "Thiru Pathi",
    review:
      "Am thiruppathi Madurai tamilnadu, have a great experiance in angel gulf jobs.com consultancy Mumbai, am selected from dubai within 3 weeks, Aashna in HR angel gulf jobs.com very responsible handle with updation time to time inform to me.",
    image:
      Thiru,
  },
  {
    id: 4,
    name: "Mohd Ashar",
    review:
      "Had a great experience with angel gulf consultancy, received offer letter from Qatar within 2 weeks. Everything is transparent and the process is so smooth, Special thanks to Aashna mam. Highly recommended to anyone who was looking for a job in gulf countries.",
    image:
      Mohd,
  },
  {
    id: 5,
    name: "Farhan Hasan",
    review:
      "I highly recommend Angel Gulf Jobs for their exceptional visa consultancy services. My visa advisor, Ashna, was extremely professional and guided me through the entire process with ease.",
    image:
      Farhan,
  },
  {
    id: 6,
    name: "Israr",
    review:
      "ماشاء اللہ.. Good Agency Reasonable Service Charge Quick Departure. Special Mention to Aashna Khan Who Facilitated All process so Hassle Free. Thank You Aashna Khan.",
    image:
      placeholder,
  },
  {
    id: 7,
    name: "Nithin Mathew",
    review:
      "I had a wonderful experience with them especially saroja helped me a lot.",
    image:
      placeholder,
  },
  {
    id: 8,
    name: "murshitha ak",
    review:
      "The platform is remarkably transparent, providing clear information about their services and processes. I truly appreciated their commitment to candidates satisfaction. Highly recommend for anyone looking to connect in the Gulf region.",
    image:
      placeholder,
  },
  {
    id: 9,
    name: "ksrinivasan nair",
    review:
      "Good service thank you rameshwari and binomol mam for smooth process 9f my bharain work visa thank you once again.",
    image:
      Ksrinivasan,
  },
  {
    id: 10,
    name: "GARUDA GAMER",
    review:
      "Best office I found for my work...staff was very helpful and polite ...and the process is smooth and clear...at very less time i got a job with good pay... And also they are genuine ..overall experience was good.... Thanks Angel Gulf Jobs Team and sanjana mam.",
    image:
      Garuda,
  },
];

function InitialBadge({ name, image }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className="rounded-circle"
        style={{
          width: 64,
          height: 64,
          objectFit: "cover",
          border: "4px solid #E6F6FD",
        }}
      />
    );
  }
  return (
    <div
      className="d-inline-flex align-items-center justify-content-center site-bg-primary rounded-circle"
      style={{
        width: 64,
        height: 64,
        color: "#fff",
        fontWeight: 700,
        fontSize: 20,
      }}
      aria-label={name}
      role="img"
    >
      {initials}
    </div>
  );
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => setCurrentIndex((p) => (p + 1) % testimonials.length);
  const handlePrev = () =>
    setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[currentIndex];

  return (
    <div className="section-full p-t50 p-b40 twm-blog-post-h-page6-wrap">
      <div className="container">
        <div className="section-head center wt-small-separator-outer">
          <div className="wt-small-separator site-text-primary">
            <h2 className="wt-title blueuText">Testimonials</h2>
          </div>
          <p>{`10,000+ successful placements | 15+ years of experience in Gulf recruitment | 3000+ corporate clients | Successful placements of freshers as well as experienced candidates`}</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11">
            <div className="p-a40 bg-white" style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.08)", borderRadius: 15, height: 400, display: 'flex', flexDirection: 'column' }}>
              <div className="d-flex justify-content-center">
                <InitialBadge name={t.name} image={t.image} />
              </div>

              <div className="d-flex align-items-center justify-content-between" style={{ flex: 1 }}>
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={handlePrev}
                  style={{ 
                    minWidth: 40, 
                    height: 40,
                    borderRadius: 50,
                    border: 'none',
                    backgroundColor: '#009BD4',
                    color: '#fff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '20px',
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#007BA3'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#009BD4'}
                >
                  <i className="fa fa-chevron-left" aria-hidden="true" />
                </button>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '200px' }}>
                  <div className="twm-testi-text m-b15 text-center" style={{ fontStyle: "italic", color: '#111827', overflow: 'hidden' }}>
                    "{t.review}"
                  </div>
                  <div className="twm-testi-info text-center">
                    <div className="twm-testi-name" style={{ fontWeight: 600 }}>{t.name}</div>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={handleNext}
                  style={{ 
                    minWidth: 40, 
                    height: 40,
                    borderRadius: 50,
                    border: 'none',
                    backgroundColor: '#009BD4',
                    color: '#fff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '20px',
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#007BA3'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#009BD4'}
                >
                  <i className="fa fa-chevron-right" aria-hidden="true" />
                </button>
              </div>

              <div className="d-flex justify-content-center">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    onClick={() => setCurrentIndex(idx)}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      margin: 4,
                      border: 0,
                      backgroundColor: idx === currentIndex ? "#009BD4" : "#D1D5DB",
                      cursor: "pointer",
                      padding: 0,
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
