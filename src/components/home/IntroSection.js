import React from "react";
import "./IntroSection.css";

const industriesLeft = [
  "Mechanical, Electrical, and Civil Engineering",
  "Construction and Infrastructure",
  "Hospitality and Tourism",
];

const industriesRight = [
  "Information Technology and Support Services",
  "Healthcare and Administration",
  "Skilled Trades and Household Staff",
];

const highlightBadges = [
  "Government of India (Ministry of Labour) Registered",
  "Specialised in Overseas Placements & International Hiring",
  "Verified Job Opportunities for Gulf Countries",
];

const introStats = [
  { label: "Global Offices", value: "Mumbai · Paris · Worldwide", icon: "globe" },
  { label: "Gulf Reach", value: "UAE | Qatar | Bahrain | Oman | Saudi", icon: "map-pin" },
  { label: "Recruitment Model", value: "End-to-end | Ethical | Transparent", icon: "shield-check" },
];

// SVG Icon Components
const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const LayersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
  </svg>
);

const ZapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const QuoteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const IntroSection = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'globe': return <GlobeIcon />;
      case 'map-pin': return <MapPinIcon />;
      case 'shield-check': return <ShieldCheckIcon />;
      default: return null;
    }
  };

  return (
    <main className="intro-main">
      {/* Decorative Grid Background */}
      <div className="intro-grid-bg"></div>

      <div className="intro-container">
        {/* Header Section */}
        <div className="intro-header-wrapper">
          <div className="intro-badge">
            Trusted Gulf Recruitment Partner
          </div>
          <h1 className="intro-main-title">
            Welcome to Angel Gulf Jobs – Leading Gulf Job Consultants
          </h1>
        </div>

        {/* Main Grid Layout */}
        <div className="intro-content-row">
          {/* Left: Narrative Content */}
          <div className="intro-content-left">
            <div className="intro-text-content">
              {/* Text Blocks */}
              <div className="intro-text-blocks">
                <p>
                  Angel Gulf Jobs is one of India's most trusted and professionally managed Gulf job consultants. We are
                  widely known as abroad job consultants and overseas job consultants based in Mumbai, India. Registered
                  with the Government of India, Ministry of Labour, we specialise in overseas job placements, international
                  hiring, and end-to-end recruitment services for all Gulf countries.
                </p>
                <p>
                  The organisation is a part of the "Angel" group, having offices in Mumbai, Paris, & expanding into
                  other parts of the World. Angel Gulf Jobs continues to expand its global presence as a respected overseas
                  recruitment agency.
                </p>

                {/* In-text Highlight Box */}
                <div className="intro-highlight-box">
                  <div className="intro-highlight-inner">
                    <div className="intro-highlight-icon">
                      <QuoteIcon />
                    </div>
                    <p className="intro-highlight-text">
                      Our mission is simple. Angel Gulf Jobs, as a leading Gulf job consultant, provides its services to employers and job seekers across the UAE, Qatar, Bahrain, Oman, Saudi Arabia, and Kuwait.
                    </p>
                  </div>
                </div>

                <p>
                  The organisation is equipped with the necessary infrastructure in Mumbai & the Gulf region. As one of the
                  most reputable Indian overseas job consultants, we ensure job seekers receive verified job opportunities and
                  safe, structured recruitment support.
                </p>
                <p>
                  Angel Gulf Jobs, a Gulf recruitment agency, was founded by professionals with extensive Gulf experience.
                  We focus on delivering reliable, efficient, and transparent recruitment solutions for both employers and job seekers. With many years of experience, our team ensures that Gulf employers get access to skilled professionals, and job seekers find genuine overseas job offers that match their skills and qualifications.
                </p>
                <p>
                  As a professional manpower consultancy for Gulf, we support recruitment across major industries such as:
                </p>

                {/* Industries List */}
                <div className="intro-industries-grid">
                  <ul className="intro-industries-list">
                    {industriesLeft.map((item, i) => (
                      <li key={i}>
                        <span className="intro-industries-dot"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="intro-industries-list">
                    {industriesRight.map((item, i) => (
                      <li key={i}>
                        <span className="intro-industries-dot"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  The organisation primarily does its sourcing through its own job portal, Angelgulfjobs.com. The portal maintains a large database of job seekers interested in working abroad (Gulf region). The job seeker database is updated regularly through various sources; thus, it is well-positioned to meet the small to large candidate requirements of clients on short notice.
                </p>
                <p>
                  With strong online visibility and an active, growing talent pool, the Angel Gulf Jobs Portal effectively caters to small, medium, and large-scale hiring needs across the Gulf region, including urgent recruitment drives and specialised manpower sourcing.
                </p>
              </div>

              {/* Verified Badges */}
              <div className="intro-verified-badges">
                {highlightBadges.map((badge, i) => (
                  <div key={i} className="intro-badge-item">
                    <CheckIcon />
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IntroSection;
