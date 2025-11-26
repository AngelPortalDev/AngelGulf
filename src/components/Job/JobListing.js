import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import JobApplicationForm from "./JobApplicationForm";
import axios from "axios";

const JobListing = () => {
  const [jobList, setJobList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  const fetchJobListing = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}php/joblist.php`
      );
      setJobList(res.data.jobs || []);
    } catch (err) {
      console.error(err);
      setJobList([]);
    }
  };

  useEffect(() => {
    fetchJobListing();
  }, []);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobList
    .filter((job) => job.is_deleted === "No")
    .slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(
    jobList.filter((job) => job.is_deleted === "No").length / jobsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleImageClick = (imageUrl) => {
    const modalImage = document.getElementById("modalImage");
    modalImage.src = imageUrl;
    const modal = new window.bootstrap.Modal(
      document.getElementById("imagePreviewModal")
    );
    modal.show();
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pageNumbers;
  };

  return (
    <div>
      <style>{`
        
         body {
  background: #F8F8F8;
}
        /* Added max-width and margin auto for better alignment */
        .job-listing-container {
          padding: 40px 0;
          max-width: 1200px;
          margin: 0 auto;
        }

        .job-listing-header {
          margin-bottom: 32px;
          padding: 0 40px;
        }

        /* Changed font-weight from 700 to 500 */
        .job-listing-header h2 {
          font-size: 32px;
          font-weight: 500;
          color: #1a202c;
          margin-bottom: 12px;
        }

        /* Changed font-weight from 600 to 500 */
        .job-count-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #009BD4;
          color: white;
          padding: 8px 20px;
          border-radius: 50px;
          font-weight: 500;
          font-size: 14px;
        }

        /* Increased padding from 20px to 40px */
        .jobs-list-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 0 40px;
        }

        .job-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .job-card:hover {
          border-color: #009BD4;
          box-shadow: 0 4px 16px rgba(0, 155, 212, 0.12);
        }

        .job-card-content {
          padding: 24px;
        }

        .job-card-header {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          align-items: flex-start;
        }

        .job-logo-wrapper {
          flex-shrink: 0;
          width: 80px;
          height: 80px;
          border-radius: 12px;
          overflow: hidden;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #e2e8f0;
        }

        .job-logo-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .job-main-info {
          flex: 1;
          min-width: 0;
        }

        .job-title-link {
          text-decoration: none;
          color: #1a202c;
          display: block;
          margin-bottom: 12px;
        }

        /* Changed font-weight from 700 to 500, font-size from 22px to 20px */
        .job-title {
          font-size: 20px;
          font-weight: 500;
          color: #1a202c;
          line-height: 1.3;
          margin: 0;
          transition: color 0.2s ease;
        }

        .job-title-link:hover .job-title {
          color: #009BD4;
        }

        /* Changed font-weight from 600 to 500, font-size from 15px to 14px */
        .job-company-name {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #009BD4;
          background: #e6f7fc;
          padding: 6px 14px;
          border-radius: 6px;
          margin-bottom: 16px;
          border: 1px solid #b3e5f5;
        }

        .job-meta-info {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          align-items: center;
        }

        /* Changed font-weight to 400 */
        .job-meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #64748b;
          font-weight: 400;
        }

        .job-meta-item i {
          color: #009BD4;
          font-size: 16px;
        }

        .job-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          flex-wrap: wrap;
          gap: 16px;
        }

        .job-salary-info {
          flex: 1;
        }

        /* Changed font-weight from 600 to 500 */
        .job-salary-label {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }

        /* Changed font-weight from 700 to 500, font-size from 20px to 18px */
        .job-salary-value {
          font-size: 18px;
          font-weight: 500;
          color: #1a202c;
          line-height: 1.2;
        }

        /* Changed font-weight from 500 to 400 */
        .job-salary-period {
          font-size: 14px;
          color: #64748b;
          font-weight: 400;
        }

        /* Changed font-weight from 600 to 500 */
        .job-apply-btn {
          background: #009BD4;
          color: white;
          border: none;
          padding: 12px 32px;
          border-radius: 50px;
          font-weight: 500;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .job-apply-btn:hover {
          background: #0088bb;
        }

        .job-apply-btn:active {
          background: #007aa8;
        }

        /* Increased padding from 20px to 40px */
        .pagination-wrapper {
          margin-top: 48px;
          display: flex;
          justify-content: center;
          padding: 0 40px;
        }

        .pagination-list {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
          gap: 8px;
          align-items: center;
        }

        .pagination-list li {
          margin: 0;
        }

        /* Changed to outline style - transparent background, border visible */
        .pagination-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 44px;
          height: 44px;
          padding: 0 12px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          color: #64748b;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s ease;
          background: transparent;
          font-size: 15px;
          cursor: pointer;
        }

        .pagination-link:hover:not(.disabled):not(.active) {
          border-color: #009BD4;
          color: #009BD4;
          background: transparent;
        }

        /* Active state now outline style with primary color border */
        .pagination-link.active {
          background: transparent;
          color: #009BD4;
          border-color: #009BD4;
          font-weight: 600;
        }

        .pagination-link.disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .pagination-ellipsis {
          display: inline-flex;
          align-items: center;
          padding: 0 8px;
          color: #64748b;
        }

        /* Increased margin from 20px to 40px */
        .no-jobs-message {
          text-align: center;
          padding: 80px 20px;
          background: white;
          border-radius: 12px;
          border: 2px dashed #e2e8f0;
          margin: 0 40px;
        }

        .no-jobs-icon {
          font-size: 64px;
          margin-bottom: 20px;
          opacity: 0.5;
        }

        /* Changed font-weight to 500 */
        .no-jobs-message h3 {
          font-size: 24px;
          color: #1a202c;
          margin-bottom: 8px;
          font-weight: 500;
        }

        /* Changed font-weight to 400 */
        .no-jobs-message p {
          color: #64748b;
          font-size: 16px;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .job-listing-container {
            padding: 24px 0;
          }

          .job-listing-header {
            padding: 0 20px;
          }

          .job-listing-header h2 {
            font-size: 24px;
          }

          .jobs-list-container {
            padding: 0 20px;
          }

          .job-card-header {
            flex-direction: column;
            gap: 16px;
          }

          .job-logo-wrapper {
            width: 70px;
            height: 70px;
          }

          .job-title {
            font-size: 18px;
          }

          .job-meta-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .job-card-footer {
            flex-direction: column;
            align-items: stretch;
          }

          .job-apply-btn {
            width: 100%;
            justify-content: center;
          }

          .job-salary-value {
            font-size: 16px;
          }

          .pagination-wrapper {
            padding: 0 20px;
          }

          .no-jobs-message {
            margin: 0 20px;
          }
        }

        @media (max-width: 576px) {
          .job-card-content {
            padding: 16px;
          }

          .job-card-footer {
            padding: 16px;
          }

          .pagination-link {
            min-width: 40px;
            height: 40px;
            font-size: 14px;
          }
        }
      `}</style>

      <div className="job-listing-container">
        <div className="job-listing-header">
          <h2>Available Job Positions</h2>
          <div style={{ marginTop: "12px" }}>
            <span className="job-count-badge">
              <i className="fas fa-briefcase"></i>
              {jobList.filter((job) => job.is_deleted === "No").length} Open Positions
            </span>
          </div>
        </div>

        {currentJobs.length === 0 ? (
          <div className="no-jobs-message">
            <div className="no-jobs-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <h3>No Jobs Available</h3>
            <p>Check back soon for new opportunities!</p>
          </div>
        ) : (
          <>
            <div className="jobs-list-container">
              {currentJobs.map((job, index) => (
                <NavLink to={`/job-details/${job.id}`} className="job-card-link" key={job.id ?? index} target="_blank">
                  <div className="job-card">
                    <div className="job-card-content">
                      <div className="job-card-header">
                        <div className="job-logo-wrapper">
                          <img
                            src={
                              job.company_logo
                                ? `${process.env.REACT_APP_API_BASE_URL}php/uploads/company_logo/${job.company_logo}`
                                : "/images/jobs-company/pic1.jpg"
                            }
                            alt="Company Logo"
                            loading="lazy"
                          />
                        </div>
                        <div className="job-main-info">
                          <h3 className="job-title" onClick={(e) => e.stopPropagation()}>
                            {job.job_title}
                          </h3>
                        <div className="job-company-name">
                          <i className="fa-regular fa-building"></i>
                          <span>{job.company_name}</span>
                        </div>
                        <div className="job-meta-info">
                          <div className="job-meta-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>
                              {job.location_hiring}
                              {job.name ? `, ${job.name}` : ""}
                            </span>
                          </div>
                          <div className="job-meta-item">
                            <i className="fas fa-calendar-alt"></i>
                            <span>
                              Posted:{" "}
                              {new Date(job.update_at).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="job-card-footer">
                    <div className="job-salary-info">
                      <div className="job-salary-label">Salary Package</div>
                      <div className="job-salary-value">
                        {(() => {
                          const raw = String(job.salary || "").trim()
                          const hasNumber = /\d/.test(raw)
                          if (!raw) return "Depend on Interview"
                          return (
                            <>
                              {raw}
                              {hasNumber && <span className="job-salary-period"> / Month</span>}
                            </>
                          )
                        })()}
                      </div>
                    </div>
                    <button className="job-apply-btn" onClick={() => window.open(`/apply-job/${job.id}`, "_blank")}>
                      <span>Apply Now</span>
                      <i className="fas fa-arrow-right"></i>
                    </button>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>

            <div className="pagination-wrapper">
              <ul className="pagination-list">
                <li>
                  <button
                    className={`pagination-link ${currentPage === 1 ? "disabled" : ""}`}
                    onClick={() => {
                      if (currentPage > 1) {
                        handlePageChange(currentPage - 1)
                      }
                    }}
                    disabled={currentPage === 1}
                  >
                    <i className="fa fa-angle-left" />
                  </button>
                </li>

                {renderPageNumbers().map((page, index) => (
                  <li key={index}>
                    {page === "..." ? (
                      <span className="pagination-ellipsis">...</span>
                    ) : (
                      <button
                        onClick={() => handlePageChange(page)}
                        className={`pagination-link ${currentPage === page ? "active" : ""}`}
                      >
                        {page}
                      </button>
                    )}
                  </li>
                ))}

                <li>
                  <button
                    className={`pagination-link ${currentPage === totalPages ? "disabled" : ""}`}
                    onClick={() => {
                      if (currentPage < totalPages) {
                        handlePageChange(currentPage + 1)
                      }
                    }}
                    disabled={currentPage === totalPages}
                  >
                    <i className="fa fa-angle-right" />
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>

      {/* Image Preview Modal */}
      <div
        className="modal fade"
        id="imagePreviewModal"
        tabIndex="-1"
        aria-labelledby="imagePreviewModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-body position-relative p-0">
              <button
                type="button"
                className="btn-close position-absolute end-0 m-3"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ border: "1px solid black" }}
              ></button>
              <img src="/placeholder.svg" alt="Preview" id="modalImage" style={{ width: "100%", height: "auto" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;