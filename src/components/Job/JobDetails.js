import React, { useState, useEffect } from "react";
import Axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import JobApplicationForm from "./JobApplicationForm";

const JobDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [jobDetails, setJobDetails] = useState("");
  const [job_Id, setJobId] = useState(null);
  const { jobId } = useParams();

  // const openModal = () => {
  //   setJobId(jobId);
  //   setIsModalOpen(true);
  // };
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  const fetchJobDetails = async (jobId) => {
    try {
      
      const res = await Axios.get(
        `${process.env.REACT_APP_API_BASE_URL}php/job_details.php?job_id=${jobId}`
      );
      console.log("Job details",jobDetails)
      setJobDetails(res.data.job);
    } catch (err) {
      console.error("Error fetching job list: ", err);
    }
  };

  useEffect(() => {
    if (jobId) {
      fetchJobDetails(jobId);
    }
  }, [jobId]);

  if (!jobDetails) {
    return <div className="loading-overlay">
    <div className="loading-text">Loading...</div>
  </div>
  }


  return (
    <div>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        {/* INNER PAGE BANNER END */}
        {/* OUR BLOG START */}
        <div className="section-full  p-t60 p-b90 bg-white">
          <div className="container">
            {/* BLOG SECTION START */}
            <div className="section-content">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8 col-md-12">
                  {/* Candidate detail START */}
                  <div className="cabdidate-de-info">
                    <div className="twm-job-self-wrap">
                      <div className="twm-job-self-info">
                        <div className="twm-job-self-top">
                          <div className="twm-media-bg">
                            {/* <img src="images/background/bg-3.jpg" alt="#" /> */}
                            <div className="twm-jobs-category green">
                              {/* <span className="twm-bg-green">New</span> */}
                            </div>
                          </div>
                          <div className="twm-mid-content">
                            <div className="twm-media">
                              <img
                                src={
                                  jobDetails.company_logo
                                    ? `${process.env.REACT_APP_API_BASE_URL}php/uploads/company_logo/${jobDetails.company_logo}`
                                    : "/images/jobs-company/pic1.jpg"
                                }
                                alt="img not found"
                                style={{ cursor: "pointer" }}
                                data-bs-toggle="modal"
                                data-bs-target="#logoModal"
                              />
                            </div>
                            <h4 className="twm-job-title">
                              {jobDetails.job_title}
                              <span className="twm-job-post-duration">
                                {/* / 1 days ago */}
                              </span>
                            </h4>
                            <p className="twm-job-address">
                              <i className="fa-regular fa-building" />
                              {jobDetails.company_name}
                            </p>
                            <div className="twm-job-self-bottom">
                              <button
                                className="twm-jobs-browse btn btn-primary text-decoration-none me-2"
                                onClick={() => window.open(`/apply-job/${jobId}`, "_blank")}
                              >
                                Apply Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 className="twm-s-title">Job Description:</h4>
                    <p style={{ whiteSpace:'pre-line' }}>{jobDetails.job_description}</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 rightSidebar">
                  <div className="side-bar mb-4">
                    <div className="twm-s-info2-wrap mb-5">
                      <div className="twm-s-info2">
                        <h4 className="section-head-small mb-4">
                          Job Information
                        </h4>
                        <ul className="twm-job-hilites2">
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-calendar-alt" />
                              <span className="twm-title">Date Posted</span>
                              <div className="twm-s-info-discription">
                                {new Date(
                                  jobDetails.update_at
                                ).toLocaleDateString("en-GB", {
                                  day: "2-digit",
                                  month: "long",
                                  year: "numeric",
                                })}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-map-marker-alt" />
                              <span className="twm-title">Location</span>
                              <div className="twm-s-info-discription">
                                {jobDetails.location_hiring},{" "}
                                {jobDetails.name}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-user-tie" />
                              <span className="twm-title">Job Title</span>
                              <div className="twm-s-info-discription">
                                {jobDetails.job_title}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-clock" />
                              <span className="twm-title">Experience</span>
                              <div className="twm-s-info-discription">
                                {jobDetails.experience}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-suitcase" />
                              <span className="twm-title">Qualification</span>
                              <div className="twm-s-info-discription">
                                {jobDetails.job_education}
                              </div>
                            </div>
                          </li>
                          {/* <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-venus-mars" />
                              <span className="twm-title">Gender</span>
                              <div className="twm-s-info-discription">{jobDetails.gender}</div>
                            </div>
                          </li> */}
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-money-bill-wave" />
                              <span className="twm-title">Offered Salary</span>
                              <div className="twm-s-info-discription">
                                {jobDetails.salary}
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="widget tw-sidebar-tags-wrap">
                      <h4 className="section-head-small mb-4">Job Skills</h4>
                      <div className="tagcloud">
                        {jobDetails.skill_keyword
                          .split(",")
                          .map((skill, index) => (
                            <NavLink to="" key={index}>
                              {skill.trim()}
                            </NavLink>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {isModalOpen && job_Id && (
                        <JobApplicationForm
                          closeModal={closeModal}
                          job_Id={job_Id}
                        />
                      )} */}
        {/* OUR BLOG END */}

        <div
  className="modal fade"
  id="logoModal"
  tabIndex="-1"
  aria-labelledby="logoModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content position-relative">
      {/* Close button */}
      <button
        type="button"
        className="btn-close position-absolute top-0 end-0 m-3 border-1"
        data-bs-dismiss="modal"
        aria-label="Close"
        style={{ zIndex: 1060, border:'1px solid black' }}
      >
      </button>

      {/* Modal body */}
      <div className="modal-body text-center p-0">
        <img
          src={
            jobDetails.company_logo
              ? `${process.env.REACT_APP_API_BASE_URL}php/uploads/company_logo/${jobDetails.company_logo}`
              : "/images/jobs-company/pic1.jpg"
          }
          alt="Large View"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default JobDetails;
