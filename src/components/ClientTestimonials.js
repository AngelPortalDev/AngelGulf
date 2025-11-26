import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./ClientTestimonials.css";
import { testimonials } from "../data/clientTestimonialsData";
import TestimonialsStats from "./shared/TestimonialsStats";

// Icons
const ArrowLeft = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
    </svg>
);

const ArrowRight = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

const ClientTestimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            setIsAnimating(false);
        }, 300);
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
            setIsAnimating(false);
        }, 300);
    };

    const handleDotClick = (index) => {
        if (index === currentIndex || isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsAnimating(false);
        }, 300);
    };

    // Auto-play
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const t = testimonials[currentIndex];

    return (
        <section className="ct-section">
            <div className="ct-container">
                {/* Header Section */}
                <div className="ct-header">
                    <span className="ct-subtitle">
                        Building Trust Through Excellence
                    </span>
                    <h2 className="ct-title">
                        Join the leading organisation that trust Angel Gulf Jobs
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="ct-carousel-wrapper">
                    {/* Ghost Cards (Visual Decoration) */}
                    <div className="ct-ghost-card-left"></div>
                    <div className="ct-ghost-card-right">
                        <div style={{ width: "100%", opacity: 0.2 }}>
                            <div style={{ width: "3rem", height: "3rem", border: "2px solid #cbd5e1", borderRadius: "50%", marginBottom: "1.5rem" }}></div>
                            <div style={{ height: "1rem", width: "8rem", backgroundColor: "#e2e8f0", borderRadius: "0.25rem", marginBottom: "0.5rem" }}></div>
                            <div style={{ height: "0.75rem", width: "5rem", backgroundColor: "#e2e8f0", borderRadius: "0.25rem" }}></div>
                        </div>
                    </div>

                    {/* Wrapper for Card and Floating Buttons */}
                    <div className="ct-card-wrapper">
                        {/* Navigation Buttons (Desktop) */}
                        <button
                            onClick={handlePrev}
                            className="ct-nav-btn ct-nav-btn-left group"
                            aria-label="Previous testimonial"
                        >
                            <ArrowLeft />
                        </button>

                        <button
                            onClick={handleNext}
                            className="ct-nav-btn ct-nav-btn-right group"
                            aria-label="Next testimonial"
                        >
                            <ArrowRight />
                        </button>

                        {/* Main Active Card */}
                        <div className="ct-card" style={{ opacity: isAnimating ? 0.8 : 1, transform: isAnimating ? 'scale(0.99)' : 'scale(1)' }}>
                            {/* Content Column (Full Width) */}
                            <div className="ct-content-col">
                                <div>
                                    {/* Logo Placeholder */}
                                    <div className="ct-logo-area">
                                        <img src={t.logo} alt={t.company} className="ct-logo-image" />
                                    </div>

                                    {/* Author Info */}
                                    <div className="ct-author-info">
                                        <h3 className="ct-author-name">{t.name}</h3>
                                        <p className="ct-author-role">{t.role}</p>
                                    </div>

                                    {/* Decorative Divider */}
                                    <div className="ct-divider"></div>
                                </div>

                                {/* Quote */}
                                <blockquote className="ct-quote">
                                    <p>"{t.quote}"</p>
                                </blockquote>

                                {/* Mobile Navigation Controls */}
                                <div className="ct-mobile-nav">
                                    <button onClick={handlePrev} className="ct-mobile-btn ct-mobile-btn-prev">
                                        <ArrowLeft />
                                    </button>
                                    <button onClick={handleNext} className="ct-mobile-btn ct-mobile-btn-next">
                                        <ArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="ct-pagination">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleDotClick(idx)}
                            className={`ct-dot ${idx === currentIndex ? "active" : ""}`}
                            aria-label={`Go to slide ${idx + 1}`}
                        ></button>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <NavLink
                        to="/clientele"
                        className="site-button"
                        style={{
                            padding: "12px 30px",
                            fontSize: "1rem",
                            borderRadius: "5px",
                            boxShadow: "0 4px 15px rgba(0, 155, 212, 0.3)"
                        }}
                    >
                        View All Clientele
                    </NavLink>
                </div>

                <TestimonialsStats />
            </div>
        </section>
    );
};

export default ClientTestimonials;
