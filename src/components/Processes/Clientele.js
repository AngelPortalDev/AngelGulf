import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import comingSoon from './../../assets/images/logo-coming-soon.jpg';
// import clientel from '../../assets/images/banner-clients.jpg';
import clientel from '../../assets/images/NewImages/clintel.jpg';
import { testimonials } from '../../data/clientTestimonialsData';
import './Clientele.css';
import { Helmet } from 'react-helmet-async';

const ITEMS_PER_PAGE = 6;

const Clientele = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredItems, setFilteredItems] = useState(testimonials);

  // Get unique industries for filter buttons
  const industries = ["All", ...new Set(testimonials.map(t => t.industry).filter(Boolean))];

  useEffect(() => {
    const filtered = filter === "All"
      ? testimonials
      : testimonials.filter(t => t.industry === filter);
    setFilteredItems(filtered);
    setCurrentPage(1); // Reset to page 1 on filter change
  }, [filter]);

  // Pagination Logic
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Helmet>
        <title>Angel Gulf Jobs | Client List, Overseas Recruitment Agency, Mumbai, India</title>
        <meta name="keywords" content="client list, overseas clients, Gulf clients, construction clients, oil & gas clients, hospitality clients, banks & financial institutions" />
        <meta name="description" content="Angel Gulf Jobs is a full-service overseas recruitment agency serving a large no. of clients across different industry Verticals. Here is a listing of our clients served by us across different industries." />
        <link rel="canonical" href="https://www.angelgulfjobs.com/clientele" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${clientel})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">Client Listing</h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Client Listing</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}
        {/* Employer Detail START */}
        <div className="section-full  p-t30 p-b30 bg-white">
          <div className="container">
            <div className="section-content">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-10 col-md-12">
                  {/* Candidate detail START */}
                  <div className="section-head left wt-small-separator-outer">
                    <div className="wt-small-separator site-text-primary">
                      <h2 className="wt-title blueuText">Our Valued Clients</h2>
                    </div>
                    <p className="section-head-text">
                      Angel Gulf Jobs is a full-service overseas recruitment agency serving a large number of clients across different industry verticals. Here is a listing of some of the clients served by us across the Gulf region and beyond.
                    </p>
                  </div>

                  {/* Filter Bar */}
                  <div className="clientele-filter-bar">
                    {industries.map((ind) => (
                      <button
                        key={ind}
                        className={`clientele-filter-btn ${filter === ind ? 'active' : ''}`}
                        onClick={() => setFilter(ind)}
                      >
                        {ind}
                      </button>
                    ))}
                  </div>

                  {/* Grid */}
                  <div className="clientele-grid">
                    {currentItems.map((t) => (
                      <div key={t.id} className="clientele-card">
                        <div className="clientele-logo-area">
                          <img src={t.logo} alt={t.company} className="clientele-logo" />
                        </div>
                        <div className="clientele-quote">
                          <p>"{t.quote}"</p>
                        </div>
                        <div className="clientele-divider"></div>
                        <div className="clientele-author">
                          <span className="clientele-name">{t.name}</span>
                          <span className="clientele-role">{t.role}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="clientele-pagination">
                      <button
                        className="clientele-page-btn"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        Previous
                      </button>

                      {[...Array(totalPages)].map((_, i) => (
                        <button
                          key={i + 1}
                          className={`clientele-page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                          onClick={() => handlePageChange(i + 1)}
                        >
                          {i + 1}
                        </button>
                      ))}

                      <button
                        className="clientele-page-btn"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </button>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Employer Detail END */}
      </div>
      {/* CONTENT END */}
    </div>
  )
}

export default Clientele;
