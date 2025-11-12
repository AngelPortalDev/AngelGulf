import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import JobApplicationForm from "./JobApplicationForm";
import axios from "axios";

const JobListing = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobList, setJobList] = useState([]);
  // const [job_Id, setJobId] = useState(null);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  // const openModal = (job_Id) => {
  //   setJobId(job_Id);
  //   setIsModalOpen(true);
  // };
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

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

  // Calculate jobs to display based on the current page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobList
    .filter((job) => job.is_deleted === "No")
    .slice(indexOfFirstJob, indexOfLastJob);

  // Pagination Logic
  const totalPages = Math.ceil(
    jobList.filter((job) => job.is_deleted === "No").length / jobsPerPage
  );

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleImageClick = (imageUrl) => {
    const modalImage = document.getElementById("modalImage");
    modalImage.src = imageUrl;
  
    const modal = new window.bootstrap.Modal(
      document.getElementById("imagePreviewModal")
    );
    console.log("modal",modal);
    modal.show();
  };
  

  return (
    <div>
      <style>{`
        @media (max-width: 768px) {
          .job-card-row { flex-wrap: wrap !important; align-items: flex-start !important; gap: 12px !important; }
          .job-card-main { padding-left: 12px !important; flex: 1 1 100% !important; min-width: 0 !important; text-align: left !important; }
          .job-card-main h4 { text-align: left !important; margin-bottom: 6px !important; }
          .job-card-actions { flex: 1 1 100% !important; margin-left: 0 !important; padding-left: 0 !important; align-items: flex-start !important; text-align: left !important; gap: 6px !important; margin-top: 6px !important; }
          .job-card-actions .job-salary { white-space: normal !important; line-height: 1.3 !important; }
          .job-card-actions .btn { align-self: flex-start !important; }
        }
        @media (max-width: 576px) {
          .job-card-logo { width: 56px !important; height: 56px !important; flex: 0 0 56px !important; }
        }
      `}</style>
      <div className="page-content" style={{ backgroundColor: '#F8F8F8' }}>
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center d-none"
          style={{ backgroundImage: "url(images/banner/1.jpg)" }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="wt-title">The Most Exciting Jobs</h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Jobs List</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}
        {/* OUR BLOG START */}
        <div className="section-full p-t90  p-b90 site-bg-white" style={{ backgroundColor: '#F8F8F8' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 rightSidebar d-none">
                <div className="side-bar">
                  <div className="sidebar-elements search-bx">
                    <form>
                      <div className="twm-sidebar-ele-filter">
                        <h4 className="section-head-small mb-4">Countries</h4>
                        <ul>
                          <li>
                            <div className=" form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck1"
                              >
                                Saudi
                              </label>
                            </div>
                            <span className="twm-job-type-count">09</span>
                          </li>
                          <li>
                            <div className=" form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck2"
                              >
                                Quatar
                              </label>
                            </div>
                            <span className="twm-job-type-count">07</span>
                          </li>
                          <li>
                            <div className=" form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck3"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck3"
                              >
                                Kuwait
                              </label>
                            </div>
                            <span className="twm-job-type-count">15</span>
                          </li>
                          <li>
                            <div className=" form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck4"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck4"
                              >
                                Oman
                              </label>
                            </div>
                            <span className="twm-job-type-count">20</span>
                          </li>
                          <li>
                            <div className=" form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck5"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck5"
                              >
                                Dubai
                              </label>
                            </div>
                            <span className="twm-job-type-count">22</span>
                          </li>
                          <li>
                            <div className=" form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck6"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck6"
                              >
                                Bahrain
                              </label>
                            </div>
                            <span className="twm-job-type-count">25</span>
                          </li>
                        </ul>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                {/*Filter Short By*/}
                <div className="product-filter-wrap d-flex justify-content-between align-items-center m-b30">
                  <span className="woocommerce-result-count-left">
                    Showing{" "}
                    {jobList.filter((job) => job.is_deleted === "No").length}{" "}
                    jobs
                  </span>
                </div>
                <div className="twm-jobs-list-wrap">
                  <div className="twm-jobs-list-wrap">
                    <ul>
                      {currentJobs.map((job, index) => {
                        return (
                          <li key={job.id ?? index}>
                            <div
                              className="twm-jobs-list-style1 mb-5"
                              style={{
                                background: '#fff',
                                border: '1px solid #e7eef5',
                                borderRadius: 16,
                                boxShadow: '0 8px 24px rgba(2,32,71,0.06)',
                                width: '100%'
                              }}
                            >
                              {/* Top Row */}
                              <div
                                className="job-card-row"
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  padding: '18px 22px',
                                  width: '100%',
                                  flexWrap: 'nowrap',
                                  gap: 16
                                }}
                              >
                                {/* Left: Logo */}
                                <div className="job-card-logo" style={{ width: 72, height: 72, flex: '0 0 72px', borderRadius: 12, overflow: 'hidden', background: '#f3f8fb', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 22px rgba(0,0,0,0.06)' }}>
                                  <img
                                    src={job.company_logo ? `${process.env.REACT_APP_API_BASE_URL}php/uploads/company_logo/${job.company_logo}` : '/images/jobs-company/pic1.jpg'}
                                    alt="Company Logo"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                    loading="lazy"
                                  />
                                </div>

                                {/* Middle: Main content */}
                                <div
                                  className="job-card-main"
                                  style={{
                                    flex: 1,
                                    minWidth: 0,
                                    paddingLeft: 18
                                  }}
                                >
                                  <NavLink to={`/job-details/${job.id}`} className="text-decoration-none" target="_blank" style={{ color: '#0f172a' }}>
                                    <h4 style={{ fontSize: 20, fontWeight: 700, margin: 0, lineHeight: 1.35, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                                      {job.job_title}
                                    </h4>
                                  </NavLink>
                                  <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', marginTop: 8, color: '#64748b', fontSize: 14 }}>
                                    <div className="d-flex align-items-center">
                                      <i className="fa-regular fa-building me-2" style={{ color: '#009BD4' }}></i>
                                      <span className="text-truncate" title={job.company_name} style={{ maxWidth: 280, overflow: 'hidden', textOverflow: 'ellipsis' }}>{job.company_name}</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <i className="fas fa-map-marker-alt me-2" style={{ color: '#009BD4' }}></i>
                                      <span>{job.location_hiring}{job.name ? `, ${job.name}` : ''}</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <i className="fas fa-calendar-alt me-2" style={{ color: '#009BD4' }}></i>
                                      <span>{new Date(job.update_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                                    </div>
                                  </div>
                                </div>

                                {/* Right: Actions */}
                                <div
                                  className="job-card-actions"
                                  style={{
                                    marginLeft: 'auto',
                                    paddingLeft: 12,
                                    flex: '0 0 220px',
                                    flexShrink: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    justifyContent: 'center',
                                    gap: 8,
                                    textAlign: 'right'
                                  }}
                                >
                                  <div
                                    className="job-salary"
                                    style={{
                                      fontWeight: 700,
                                      color: '#0f172a',
                                      lineHeight: 1.2,
                                      whiteSpace: 'nowrap',
                                      overflow: 'hidden',
                                      textOverflow: 'ellipsis',
                                      maxWidth: '100%'
                                    }}
                                    title={String(job.salary || '').trim() || 'Depend on Interview'}
                                  >
                                    {(() => {
                                      const raw = String(job.salary || '').trim();
                                      const hasNumber = /\d/.test(raw);
                                      if (!raw) return 'Depend on Interview';
                                      return (
                                        <>
                                          {raw}
                                          {hasNumber ? (
                                            <span style={{ color: '#64748b', fontWeight: 500 }}>{' '} / Month</span>
                                          ) : null}
                                        </>
                                      );
                                    })()}
                                  </div>
                                  <button
                                    className="btn"
                                    style={{
                                      backgroundColor: '#009BD4',
                                      color: '#fff',
                                      borderRadius: 999,
                                      padding: '8px 16px',
                                      border: 'none',
                                      fontWeight: 600,
                                      fontSize: 13
                                    }}
                                    onClick={() => window.open(`/apply-job/${job.id}`, '_blank')}
                                  >
                                    View job
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                      {/* {job_Id && (
                        <JobApplicationForm
                          job_Id={job_Id}
                        />
                      )} */}
                    </ul>
                  </div>
                </div>
                <div className="pagination-outer">
                  <div className="pagination-style1">
                    <ul className="clearfix">
                      <li
                        className={`prev ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
                      >
                        <NavLink
                          to="#"
                          onClick={(e) => {
                            if (currentPage > 1) {
                              handlePageChange(currentPage - 1);
                            } else {
                              e.preventDefault();
                            }
                          }}
                        >
                          <span>
                            <i className="fa fa-angle-left" />
                          </span>
                        </NavLink>
                      </li>
                      {Array.from(
                        { length: totalPages },
                        (_, index) => index + 1
                      ).map((pageNumber) => (
                        <li
                          key={pageNumber}
                          className={pageNumber === currentPage ? "active" : ""}
                        >
                          <NavLink
                            to="#"
                            onClick={() => handlePageChange(pageNumber)}
                          >
                            {pageNumber}
                          </NavLink>
                        </li>
                      ))}
                      {/* <li className="next">
                        <NavLink to="#" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                          <span>
                            {" "}
                            <i className="fa fa-angle-right" />{" "}
                          </span>
                        </NavLink>
                      </li> */}
                      <li
                        className={`next ${
                          currentPage === totalPages ? "disabled" : ""
                        }`}
                      >
                        <NavLink
                          to="#"
                          onClick={(e) => {
                            if (currentPage < totalPages) {
                              handlePageChange(currentPage + 1);
                            } else {
                              e.preventDefault(); // Prevent clicking if already on the last page
                            }
                          }}
                        >
                          <span>
                            <i className="fa fa-angle-right" />
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                style={{border:'1px solid black'}}
              ></button>
              <img
                src=""
                alt="Preview"
                id="modalImage"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
