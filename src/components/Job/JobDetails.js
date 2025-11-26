// import React, { useState, useEffect } from "react";
// import Axios from "axios";
// import { NavLink, useParams } from "react-router-dom";
// import JobApplicationForm from "./JobApplicationForm";

// const JobDetails = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const [jobDetails, setJobDetails] = useState("");
//   const [job_Id, setJobId] = useState(null);
//   const { jobId } = useParams();

//   // const openModal = () => {
//   //   setJobId(jobId);
//   //   setIsModalOpen(true);
//   // };
//   // const closeModal = () => {
//   //   setIsModalOpen(false);
//   // };

//   const fetchJobDetails = async (jobId) => {
//     try {
      
//       const res = await Axios.get(
//         `${process.env.REACT_APP_API_BASE_URL}php/job_details.php?job_id=${jobId}`
//       );
//       console.log("Job details",jobDetails)
//       setJobDetails(res.data.job);
//     } catch (err) {
//       console.error("Error fetching job list: ", err);
//     }
//   };

//   useEffect(() => {
//     if (jobId) {
//       fetchJobDetails(jobId);
//     }
//   }, [jobId]);

//   if (!jobDetails) {
//     return <div className="loading-overlay">
//     <div className="loading-text">Loading...</div>
//   </div>
//   }


//   return (
//     <div>
//       <div className="page-content">
//         {/* INNER PAGE BANNER */}
//         {/* INNER PAGE BANNER END */}
//         {/* OUR BLOG START */}
//         <div className="section-full  p-t60 p-b90 bg-white">
//           <div className="container">
//             {/* BLOG SECTION START */}
//             <div className="section-content">
//               <div className="row d-flex justify-content-center">
//                 <div className="col-lg-8 col-md-12">
//                   {/* Candidate detail START */}
//                   <div className="cabdidate-de-info">
//                     <div className="twm-job-self-wrap">
//                       <div className="twm-job-self-info">
//                         <div className="twm-job-self-top">
//                           <div className="twm-media-bg">
//                             {/* <img src="images/background/bg-3.jpg" alt="#" /> */}
//                             <div className="twm-jobs-category green">
//                               {/* <span className="twm-bg-green">New</span> */}
//                             </div>
//                           </div>
//                           <div className="twm-mid-content">
//                             <div className="twm-media">
//                               <img
//                                 src={
//                                   jobDetails.company_logo
//                                     ? `${process.env.REACT_APP_API_BASE_URL}php/uploads/company_logo/${jobDetails.company_logo}`
//                                     : "/images/jobs-company/pic1.jpg"
//                                 }
//                                 alt="img not found"
//                                 style={{ cursor: "pointer" }}
//                                 data-bs-toggle="modal"
//                                 data-bs-target="#logoModal"
//                               />
//                             </div>
//                             <h4 className="twm-job-title">
//                               {jobDetails.job_title}
//                               <span className="twm-job-post-duration">
//                                 {/* / 1 days ago */}
//                               </span>
//                             </h4>
//                             <p className="twm-job-address">
//                               <i className="fa-regular fa-building" />
//                               {jobDetails.company_name}
//                             </p>
//                             <div className="twm-job-self-bottom">
//                               <button
//                                 className="twm-jobs-browse btn text-decoration-none me-2"
//                                 style={{ backgroundColor: '#009BD4', color: '#fff', border: 'none' }}
//                                 onClick={() => window.open(`/apply-job/${jobId}`, "_blank")}
//                               >
//                                 Apply Now
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <h4 className="twm-s-title">Job Description:</h4>
//                     <p style={{ whiteSpace:'pre-line' }}>{jobDetails.job_description}</p>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-12 rightSidebar">
//                   <div className="side-bar mb-4">
//                     <div className="twm-s-info2-wrap mb-5">
//                       <div className="twm-s-info2">
//                         <h4 className="section-head-small mb-4">
//                           Job Information
//                         </h4>
//                         <ul className="twm-job-hilites2">
//                           <li>
//                             <div className="twm-s-info-inner">
//                               <i className="fas fa-calendar-alt" />
//                               <span className="twm-title">Date Posted</span>
//                               <div className="twm-s-info-discription">
//                                 {new Date(
//                                   jobDetails.update_at
//                                 ).toLocaleDateString("en-GB", {
//                                   day: "2-digit",
//                                   month: "long",
//                                   year: "numeric",
//                                 })}
//                               </div>
//                             </div>
//                           </li>
//                           <li>
//                             <div className="twm-s-info-inner">
//                               <i className="fas fa-map-marker-alt" />
//                               <span className="twm-title">Location</span>
//                               <div className="twm-s-info-discription">
//                                 {jobDetails.location_hiring},{" "}
//                                 {jobDetails.name}
//                               </div>
//                             </div>
//                           </li>
//                           <li>
//                             <div className="twm-s-info-inner">
//                               <i className="fas fa-user-tie" />
//                               <span className="twm-title">Job Title</span>
//                               <div className="twm-s-info-discription">
//                                 {jobDetails.job_title}
//                               </div>
//                             </div>
//                           </li>
//                           <li>
//                             <div className="twm-s-info-inner">
//                               <i className="fas fa-clock" />
//                               <span className="twm-title">Experience</span>
//                               <div className="twm-s-info-discription">
//                                 {jobDetails.experience}
//                               </div>
//                             </div>
//                           </li>
//                           <li>
//                             <div className="twm-s-info-inner">
//                               <i className="fas fa-suitcase" />
//                               <span className="twm-title">Qualification</span>
//                               <div className="twm-s-info-discription">
//                                 {jobDetails.job_education}
//                               </div>
//                             </div>
//                           </li>
//                           {/* <li>
//                             <div className="twm-s-info-inner">
//                               <i className="fas fa-venus-mars" />
//                               <span className="twm-title">Gender</span>
//                               <div className="twm-s-info-discription">{jobDetails.gender}</div>
//                             </div>
//                           </li> */}
//                           <li>
//                             <div className="twm-s-info-inner">
//                               <i className="fas fa-money-bill-wave" />
//                               <span className="twm-title">Offered Salary</span>
//                               <div className="twm-s-info-discription">
//                                 {jobDetails.salary}
//                               </div>
//                             </div>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <div className="widget tw-sidebar-tags-wrap">
//                       <h4 className="section-head-small mb-4">Job Skills</h4>
//                       <div className="tagcloud">
//                         {jobDetails.skill_keyword
//                           .split(",")
//                           .map((skill, index) => (
//                             <NavLink to="" key={index}>
//                               {skill.trim()}
//                             </NavLink>
//                           ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* {isModalOpen && job_Id && (
//                         <JobApplicationForm
//                           closeModal={closeModal}
//                           job_Id={job_Id}
//                         />
//                       )} */}
//         {/* OUR BLOG END */}

//         <div
//   className="modal fade"
//   id="logoModal"
//   tabIndex="-1"
//   aria-labelledby="logoModalLabel"
//   aria-hidden="true"
// >
//   <div className="modal-dialog modal-dialog-centered modal-lg">
//     <div className="modal-content position-relative">
//       {/* Close button */}
//       <button
//         type="button"
//         className="btn-close position-absolute top-0 end-0 m-3 border-1"
//         data-bs-dismiss="modal"
//         aria-label="Close"
//         style={{ zIndex: 1060, border:'1px solid black' }}
//       >
//       </button>

//       {/* Modal body */}
//       <div className="modal-body text-center p-0">
//         <img
//           src={
//             jobDetails.company_logo
//               ? `${process.env.REACT_APP_API_BASE_URL}php/uploads/company_logo/${jobDetails.company_logo}`
//               : "/images/jobs-company/pic1.jpg"
//           }
//           alt="Large View"
//           style={{ width: "100%", height: "auto" }}
//         />
//       </div>
//     </div>
//   </div>
// </div>

//       </div>
//     </div>
//   );
// };

// export default JobDetails;



// responsive layout 

import { useState, useEffect } from "react"
import Axios from "axios"
import { NavLink, useParams } from "react-router-dom"

const JobDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [jobDetails, setJobDetails] = useState("")
  const [job_Id, setJobId] = useState(null)
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200)
  const { jobId } = useParams()

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const fetchJobDetails = async (jobId) => {
    try {
      const res = await Axios.get(`${process.env.REACT_APP_API_BASE_URL}php/job_details.php?job_id=${jobId}`)
      console.log("Job details", jobDetails)
      setJobDetails(res.data.job)
    } catch (err) {
      console.error("Error fetching job list: ", err)
    }
  }

  useEffect(() => {
    if (jobId) {
      fetchJobDetails(jobId)
    }
  }, [jobId])

  const isMobile = windowWidth < 768
  const isTablet = windowWidth >= 768 && windowWidth < 1024

  if (!jobDetails) {
    return (
      <div style={styles.loadingOverlay}>
        <div style={styles.spinner}></div>
        <div style={styles.loadingText}>Loading job details...</div>
      </div>
    )
  }

  return (
    <div style={styles.pageWrapper}>
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <div
        style={{
          ...styles.pageContent,
          padding: isMobile ? "20px 0 40px" : "40px 0 80px",
        }}
      >
        <div
          style={{
            ...styles.container,
            padding: isMobile ? "0 16px" : "0 24px",
          }}
        >
          <div
            style={{
              ...styles.row,
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "20px" : "28px",
            }}
          >
            {/* Left Column - Job Details */}
            <div
              style={{
                ...styles.leftColumn,
                flex: isMobile ? "1 1 100%" : "1 1 65%",
                width: isMobile ? "100%" : "auto",
              }}
            >
              {/* Job Header Card */}
              <div
                style={{
                  ...styles.headerCard,
                  padding: isMobile ? "20px" : "28px",
                }}
              >
                <div
                  style={{
                    ...styles.headerTop,
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: isMobile ? "flex-start" : "flex-start",
                    gap: isMobile ? "16px" : "20px",
                  }}
                >
                  <div
                    style={{
                      ...styles.companyLogoWrap,
                      width: isMobile ? "60px" : "72px",
                      height: isMobile ? "60px" : "72px",
                    }}
                  >
                    <img
                      src={
                        jobDetails.company_logo
                          ? `${process.env.REACT_APP_API_BASE_URL}php/uploads/company_logo/${jobDetails.company_logo}`
                          : "/images/jobs-company/pic1.jpg"
                      }
                      alt="Company Logo"
                      style={styles.companyLogo}
                      data-bs-toggle="modal"
                      data-bs-target="#logoModal"
                    />
                  </div>
                  <div
                    style={{
                      ...styles.headerInfo,
                      width: isMobile ? "100%" : "auto",
                    }}
                  >
                    <h1
                      style={{
                        ...styles.jobTitle,
                        fontSize: isMobile ? "18px" : "22px",
                      }}
                    >
                      {jobDetails.job_title}
                    </h1>
                    <p style={styles.companyName}>
                      <i className="fa-regular fa-building" style={styles.iconSmall}></i>
                      {jobDetails.company_name}
                    </p>
                    <div style={styles.locationBadge}>
                      <i className="fas fa-map-marker-alt" style={styles.badgeIcon}></i>
                      {jobDetails.location_hiring}, {jobDetails.name}
                    </div>
                  </div>
                  <div
                    style={{
                      ...styles.headerAction,
                      width: isMobile ? "100%" : "auto",
                    }}
                  >
                    <button
                      style={{
                        ...styles.applyButton,
                        width: isMobile ? "100%" : "auto",
                        padding: isMobile ? "14px 28px" : "12px 28px",
                      }}
                      onClick={() => window.open(`/apply-job/${jobId}`, "_blank")}
                      onMouseEnter={(e) => (e.target.style.backgroundColor = "#0088bb")}
                      onMouseLeave={(e) => (e.target.style.backgroundColor = "#009BD4")}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Job Description Card */}
              <div
                style={{
                  ...styles.descriptionCard,
                  padding: isMobile ? "20px" : "28px",
                }}
              >
                <h2
                  style={{
                    ...styles.sectionTitle,
                    fontSize: isMobile ? "16px" : "18px",
                  }}
                >
                  <span style={styles.titleBar}></span>
                  Job Description
                </h2>
                <div
                  style={{
                    ...styles.jobDescription,
                    fontSize: isMobile ? "14px" : "15px",
                  }}
                >
                  {jobDetails.job_description}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div
              style={{
                ...styles.rightColumn,
                flex: isMobile ? "1 1 100%" : "0 0 320px",
                maxWidth: isMobile ? "100%" : "320px",
                width: isMobile ? "100%" : "auto",
              }}
            >
              <div
                style={{
                  ...styles.sideBar,
                  position: isMobile ? "relative" : "sticky",
                  top: isMobile ? "auto" : "24px",
                }}
              >
                {/* Job Information Card */}
                <div
                  style={{
                    ...styles.infoCard,
                    padding: isMobile ? "20px" : "24px",
                  }}
                >
                  <h3 style={styles.infoHeading}>Job Information</h3>
                  <ul style={styles.infoList}>
                    <li style={styles.infoItem}>
                      <div style={styles.infoIconWrap}>
                        <i className="fas fa-calendar-alt" style={styles.infoIcon}></i>
                      </div>
                      <div style={styles.infoContent}>
                        <span style={styles.infoLabel}>Date Posted</span>
                        <span style={styles.infoValue}>
                          {new Date(jobDetails.update_at).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </li>
                    <li style={styles.infoItem}>
                      <div style={styles.infoIconWrap}>
                        <i className="fas fa-map-marker-alt" style={styles.infoIcon}></i>
                      </div>
                      <div style={styles.infoContent}>
                        <span style={styles.infoLabel}>Location</span>
                        <span style={styles.infoValue}>
                          {jobDetails.location_hiring}, {jobDetails.name}
                        </span>
                      </div>
                    </li>
                    <li style={styles.infoItem}>
                      <div style={styles.infoIconWrap}>
                        <i className="fas fa-briefcase" style={styles.infoIcon}></i>
                      </div>
                      <div style={styles.infoContent}>
                        <span style={styles.infoLabel}>Job Title</span>
                        <span style={styles.infoValue}>{jobDetails.job_title}</span>
                      </div>
                    </li>
                    <li style={styles.infoItem}>
                      <div style={styles.infoIconWrap}>
                        <i className="fas fa-clock" style={styles.infoIcon}></i>
                      </div>
                      <div style={styles.infoContent}>
                        <span style={styles.infoLabel}>Experience</span>
                        <span style={styles.infoValue}>{jobDetails.experience}</span>
                      </div>
                    </li>
                    <li style={styles.infoItem}>
                      <div style={styles.infoIconWrap}>
                        <i className="fas fa-graduation-cap" style={styles.infoIcon}></i>
                      </div>
                      <div style={styles.infoContent}>
                        <span style={styles.infoLabel}>Qualification</span>
                        <span style={styles.infoValue}>{jobDetails.job_education}</span>
                      </div>
                    </li>
                    <li style={styles.infoItem}>
                      <div style={styles.infoIconWrap}>
                        <i className="fas fa-money-bill-wave" style={styles.infoIcon}></i>
                      </div>
                      <div style={styles.infoContent}>
                        <span style={styles.infoLabel}>Offered Salary</span>
                        <span style={styles.infoValue}>{jobDetails.salary}</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Job Skills Card */}
                <div
                  style={{
                    ...styles.skillsCard,
                    padding: isMobile ? "20px" : "24px",
                  }}
                >
                  <h3 style={styles.skillsHeading}>Job Skills</h3>
                  <div style={styles.tagCloud}>
                    {jobDetails.skill_keyword.split(",").map((skill, index) => (
                      <NavLink to="" key={index} style={styles.skillTag}>
                        {skill.trim()}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Modal */}
        <div className="modal fade" id="logoModal" tabIndex="-1" aria-labelledby="logoModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content position-relative">
              <button
                type="button"
                className="btn-close position-absolute top-0 end-0 m-3 border-1"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ zIndex: 1060, border: "1px solid black" }}
              ></button>
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
  )
}

const styles = {
  pageWrapper: {
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
  },
  pageContent: {
    padding: "40px 0 80px",
  },
  container: {
    maxWidth: "1140px",
    margin: "0 auto",
    padding: "0 24px",
  },
  row: {
    display: "flex",
    gap: "28px",
    alignItems: "flex-start",
  },
  leftColumn: {
    flex: "1 1 65%",
    minWidth: 0,
  },
  rightColumn: {
    flex: "0 0 320px",
    maxWidth: "320px",
  },
  headerCard: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "28px",
    marginBottom: "24px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
    border: "1px solid #e8ecf1",
  },
  headerTop: {
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
  },
  companyLogoWrap: {
    width: "72px",
    height: "72px",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#f8fafc",
    border: "1px solid #e8ecf1",
    flexShrink: 0,
  },
  companyLogo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    cursor: "pointer",
  },
  headerInfo: {
    flex: 1,
    minWidth: 0,
  },
  jobTitle: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#1e293b",
    margin: "0 0 8px",
    lineHeight: "1.3",
  },
  companyName: {
    fontSize: "15px",
    color: "#64748b",
    margin: "0 0 12px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  iconSmall: {
    color: "#009BD4",
    fontSize: "14px",
  },
  locationBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 12px",
    backgroundColor: "#e6f7fc",
    color: "#009BD4",
    borderRadius: "6px",
    fontSize: "13px",
    fontWeight: "500",
  },
  badgeIcon: {
    fontSize: "12px",
  },
  headerAction: {
    flexShrink: 0,
  },
  applyButton: {
    backgroundColor: "#009BD4",
    color: "#fff",
    border: "none",
    padding: "12px 28px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxShadow: "0 2px 4px rgba(0,155,212,0.2)",
  },
  descriptionCard: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "28px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
    border: "1px solid #e8ecf1",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1e293b",
    margin: "0 0 20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  titleBar: {
    width: "4px",
    height: "20px",
    backgroundColor: "#009BD4",
    borderRadius: "2px",
  },
  jobDescription: {
    fontSize: "15px",
    color: "#475569",
    lineHeight: "1.75",
    whiteSpace: "pre-line",
  },
  sideBar: {
    position: "sticky",
    top: "24px",
  },
  infoCard: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "24px",
    marginBottom: "20px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
    border: "1px solid #e8ecf1",
  },
  infoHeading: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#1e293b",
    margin: "0 0 20px",
    paddingBottom: "14px",
    borderBottom: "1px solid #e8ecf1",
  },
  infoList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  infoItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
    padding: "12px 0",
    borderBottom: "1px solid #f1f5f9",
  },
  infoIconWrap: {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    backgroundColor: "#e6f7fc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  infoIcon: {
    color: "#009BD4",
    fontSize: "14px",
  },
  infoContent: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    flex: 1,
    minWidth: 0,
  },
  infoLabel: {
    fontSize: "12px",
    fontWeight: "500",
    color: "#94a3b8",
    textTransform: "uppercase",
    letterSpacing: "0.4px",
  },
  infoValue: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#334155",
  },
  skillsCard: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
    border: "1px solid #e8ecf1",
  },
  skillsHeading: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#1e293b",
    margin: "0 0 16px",
    paddingBottom: "14px",
    borderBottom: "1px solid #e8ecf1",
  },
  tagCloud: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  skillTag: {
    display: "inline-block",
    padding: "7px 14px",
    fontSize: "13px",
    fontWeight: "500",
    color: "#009BD4",
    backgroundColor: "#e6f7fc",
    border: "1px solid #b3e5f5",
    borderRadius: "6px",
    textDecoration: "none",
    transition: "all 0.2s ease",
  },
  loadingOverlay: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "400px",
    gap: "16px",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "3px solid #e8ecf1",
    borderTopColor: "#009BD4",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },
  loadingText: {
    fontSize: "15px",
    fontWeight: "500",
    color: "#64748b",
  },
}

export default JobDetails
