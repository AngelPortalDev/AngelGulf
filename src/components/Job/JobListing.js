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
      <div className="page-content">
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
        <div className="section-full p-t90  p-b90 site-bg-white">
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
                          <li key={index}>
                            <div className="twm-jobs-list-style1 mb-5">
                              <div className="twm-media">
                                {/* <img
                                  src={
                                    job.company_logo
                                      ? `${process.env.REACT_APP_API_BASE_URL}php/uploads/company_logo/${job.company_logo}`
                                      : "/images/jobs-company/pic1.jpg"
                                  }
                                  alt="img not found"
                                /> */}
                                <img
                                    src={
                                      job.company_logo
                                        ? `${process.env.REACT_APP_API_BASE_URL}php/uploads/company_logo/${job.company_logo}`
                                        : "/images/jobs-company/pic1.jpg"
                                    }
                                    alt="img not found"
                                    style={{ cursor: "pointer" }}
                                    loading="lazy"
                                    onClick={() =>
                                      handleImageClick(
                                        job.company_logo
                                          ? `${process.env.REACT_APP_API_BASE_URL}php/uploads/company_logo/${job.company_logo}`
                                          : "/images/jobs-company/pic1.jpg"
                                      )
                                    }
                                  />

                              </div>
                              <div className="twm-mid-content">
                                <NavLink
                                  to={`/job-details/${job.id}`}
                                  className="twm-job-title"
                                  target="_blank"
                                >
                                  <h4>{job.job_title}</h4>
                                </NavLink>
                                <p 
                                  className="twm-job-address" 
                                  style={{ maxWidth: "100%", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }} 
                                  title={job.company_name}
                                >
                                  {job.company_name.length > 100 ? job.company_name.substring(0, 100) + "..." : job.company_name}
                              </p>
                              </div>
                              <div className="twm-right-content">
                                {/* <div className="twm-jobs-category green">
                                  <span className="twm-bg-brown">
                                    Intership
                                  </span>
                                </div> */}
                                <div className="twm-jobs-amount">
                                  {job.salary} <span>/ Month</span>
                                </div>
                                <button
                                  className="twm-jobs-browse btn btn-primary text-decoration-none"
                                  onClick={() => window.open(`/apply-job/${job.id}`, "_blank")}
                                >
                                  Apply Now
                                </button>
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
