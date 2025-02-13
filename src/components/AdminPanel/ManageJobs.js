import React, { useEffect, useState } from "react";
import Axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import AdminEditJob from "./AdminEditJob";
import { useAuth } from "../middleware/AuthContext";
import JobAppliedList from "../Job/JobAppliedList";

const ManageJobs = () => {
  const [displayJobs, setDisplayJobs] = React.useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [job_Id, setJobId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // Define how many items to show per page

  const { isAuthenticated,logout } = useAuth();

  const [activeTab, setActiveTab] = useState("manageJobs");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const navigate = useNavigate();

  const displayAllJobs = async () => {
    try {
      const res = await Axios.get(
        `${process.env.REACT_APP_API_BASE_URL}php/joblist.php`
      );
      let jobs = res.data.jobs || [];
      // console.log("jobs",jobs);
      jobs.sort((a, b) => new Date(b.update_at) - new Date(a.update_at));
      setDisplayJobs(jobs);
    } catch (err) {
      console.error(err);
      setDisplayJobs([]);
    }
  };

  useEffect(() => {
    displayAllJobs();
  }, []);

  const openJobEditPage = (job_Id) => {
    if (job_Id) {
      setJobId(job_Id);
      navigate(`/edit-job/${job_Id}`);
    } else {
      console.error("Invalid job ID");
    }
  };

  // const deleteJob = async (job_id) => {
  //   const isConfirmed = window.confirm("Are you sure you want to delete this job?");

  //   if (isConfirmed) {
  //     try {
  //       const response = await Axios.post(
  //         `${process.env.REACT_APP_API_BASE_URL}php/delete.php`,
  //         { job_id },
  //         {
  //           headers: {
  //             'Content-Type': 'application/json',
  //           }
  //         }
  //       );
  //       console.log(response, "response deleted");

  //       if (response.data.success) {
  //         toast.success("Job deleted successfully!");
  //         setDisplayJobs(prevJobs => prevJobs.filter(job => job.id !== job_id));
  //       } else {
  //         toast.error("Failed to delete job. Please try again later.");
  //       }
  //     } catch (err) {
  //       console.error(err);
  //       toast.error("Failed to delete job. Please try again later.");
  //     }
  //   } else {
  //     console.log("Job deletion was canceled.");
  //   }
  // };

  useEffect(() => {
    // Check if the token exists
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
      // alert("Token Not found. Please try again");
    }
  }, [navigate]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      // alert("You are not authenticated. Please log in.");
    }
  }, [navigate, isAuthenticated]);

  const toggleJobStatus = async (job_id, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
  
    // console.log("currentStatus", currentStatus);
    // console.log("job_id", job_id);
  
    const isConfirmed = window.confirm(
      `Are you sure you want to mark this job as ${newStatus}?`
    );
  
    if (isConfirmed) {
      try {
        const response = await Axios.post(
          `${process.env.REACT_APP_API_BASE_URL}php/job_status_update.php`,
          { job_id, status: newStatus },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
  
        if (response.data.success) {
          // Show success toast message immediately
          toast.success(`Job marked as ${newStatus} successfully!`);
  
            setDisplayJobs((prevJobs) =>
              prevJobs.map((job) =>
                job.id === job_id
                  ? {
                      ...job,
                      is_deleted: newStatus === "Inactive" ? "Yes" : "No",
                    }
                  : job
              )
            );
        } else {
          toast.error("Failed to update job status. Please try again later.");
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to update job status. Please try again later.");
      }
    } else {
      console.log("Job status change was canceled.");
    }
  };
  

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(()=>{
    if(!isAuthenticated){
      navigate('/login');
      toast.warn("You are not authenticated. Please log in.");
    }
  },[navigate,isAuthenticated])


  const handleLogout = () => {
    toast.success("Logged out successfully!"); 
    setTimeout(() => {
      logout();
      navigate('/login');
    }, 2000);  
  }



    // Logic to calculate the index of candidates to display
    const indexOfLastCandidate = currentPage * itemsPerPage;
    const indexOfFirstCandidate = indexOfLastCandidate - itemsPerPage;
    const currentJobs = displayJobs.slice(
      indexOfFirstCandidate,
      indexOfLastCandidate
    );
  
    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    const gotoAddJob =()=>{
      navigate('/addjob');
    }
  

  return (
    <div>
      <div className="section-full p-t120  p-b90 site-bg-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-12 rightSidebar m-b30">
              <div className="side-bar-st-1">
                <div className="twm-candidate-profile-pic">
                  <img src="images/jobs-company/pic1.jpg" alt="" />
                  <div className="upload-btn-wrapper">
                    <div id="upload-image-grid" />
                    <button className="site-button button-sm">
                      Upload Photo
                    </button>
                    <input
                      type="file"
                      name="myfile"
                      id="file-uploader"
                      accept=".jpg, .jpeg, .png"
                    />
                  </div>
                </div>
                <div className="twm-mid-content text-center">
                  <NavLink to="#" className="twm-job-title">
                    <h4>Admin</h4>
                  </NavLink>
                  <p>IT Contractor</p>
                </div>
                <div className="twm-nav-list-1">
                  <ul>
                    <li>
                      <NavLink to="">
                        <i className="fa fa-user" /> Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="#"
                        onClick={() => handleTabChange("manageJobs")}
                      >
                        <i className="fa fa-suitcase" /> Manage Jobs
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="#"
                        onClick={() => handleTabChange("browsecandidate")}
                      >
                        <i className="fa fa-user-check" /> Browse Candidates
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#" onClick={handleLogout}>
                        <i className="fa fa-share-square" /> Logout
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-9 col-lg-8 col-md-12 m-b30">
              {/*Filter Short By*/}

              {activeTab === "manageJobs" && (
                <div className="twm-right-section-panel site-bg-gray">
                  <form>
                    {/*Basic Information*/}
                    <div className="panel panel-default">
                      <div className="panel-heading wt-panel-heading p-a20 d-flex justify-content-between">
                        <h4 className="panel-tittle m-a0">
                          <i className="fa fa-suitcase" />
                          Manage jobs
                        </h4>
                        <button className="btn btn-primary "  onClick={gotoAddJob}>
                            Add Job
                        </button>
                      </div>
                      <div className="panel-body wt-panel-body m-b30 ">
                        <div className="twm-D_table p-a20 table-responsive">
                          <table
                            id="jobs_bookmark_table"
                            className="table table-bordered twm-bookmark-list-wrap"
                          >
                            <thead>
                              <tr>
                                <th>Job Title</th>
                                <th>Company Name</th>
                                <th>Location</th>
                                <th>Salary</th>
                                <th>Date Posted</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {currentJobs.map((job, index) => {
                                if (!job.id) {
                                  console.warn(
                                    `Job ID is missing for job at index ${index}`
                                  );
                                }
                                return (
                                  <tr key={index}>
                                    <td>
                                      <div className="twm-bookmark-list">
                                        <div className="twm-mid-content">
                                          <NavLink
                                            to="#"
                                            className="twm-job-title"
                                          >
                                            <h4>{job.job_title}</h4>
                                            {/* <p className="twm-bookmark-address">
                                                    <i className="feather-map-pin" />
                                                    Sacramento, California
                                                  </p> */}
                                          </NavLink>
                                        </div>
                                      </div>
                                    </td>
                                    <td>{job.company_name}</td>
                                    <td>
                                      <div className="twm-jobs-category">
                                        <span className="twm-bg-green">
                                          {job.location_hiring}
                                        </span>
                                      </div>
                                    </td>
                                    <td>{job.salary}</td>
                                    <td>
                                      <span className="text-clr-green2">
                                        {new Date(
                                          job.update_at
                                        ).toLocaleDateString("en-GB", {
                                          day: "2-digit",
                                          month: "long",
                                          year: "numeric",
                                        })}
                                      </span>
                                    </td>
                                    <td>
                                      <div className="twm-table-controls">
                                        <ul className="list-unstyled gap-1">
                                          {/* <li>
                                            <button
                                              title="View profile"
                                              type="button"
                                              data-bs-toggle="tooltip"
                                              onClick={() => openModal(job.id)}
                                            >
                                              <span className="fa fa-eye" />
                                            </button>
                                          </li> */}

                                          <li className="d-flex justify-content-center">
                                            <button
                                              title="View/Edit"
                                              type="button"
                                              onClick={() =>
                                                openJobEditPage(job.id)
                                              }
                                            >
                                              <span className="fa fa-edit" />
                                            </button>
                                          </li>
                                          <li className="mt-1">
                                            <button
                                              title={
                                                job.is_deleted === "No"
                                                  ? "Mark Inactive"
                                                  : "Mark Active"
                                              }
                                              onClick={() =>
                                                toggleJobStatus(
                                                  job.id,
                                                  job.is_deleted === "No"
                                                    ? "Active"
                                                    : "Inactive"
                                                )
                                              }
                                              className={
                                                job.is_deleted === "No"
                                                  ? "btn btn-success"
                                                  : "btn btn-warning"
                                              }
                                            >
                                              {job.is_deleted === "No"
                                                ? "Active"
                                                : "Inactive"}
                                            </button>
                                          </li>
                                        </ul>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                       <div className="pagination-outer text-right">
                              <div className="pagination-style1">
                                <ul className="clearfix">
                                  {/* Previous Page */}
                                  <li className="prev">
                                    <NavLink
                                      to="#"
                                      onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                                    >
                                      <span>
                                        <i className="fa fa-angle-left" />
                                      </span>
                                    </NavLink>
                                  </li>
                      
                                  {/* Page Numbers */}
                                  {[...Array(Math.ceil(displayJobs.length / itemsPerPage))].map(
                                    (_, index) => (
                                      <li key={index}>
                                        <NavLink
                                          to="#"
                                          onClick={() => paginate(index + 1)}
                                          className={currentPage === index + 1 ? "active" : ""}
                                        >
                                          {index + 1}
                                        </NavLink>
                                      </li>
                                    )
                                  )}
                      
                                  {/* Next Page */}
                                  <li className="next">
                                    <NavLink
                                      to="#"
                                      onClick={() =>
                                        currentPage <
                                          Math.ceil(displayJobs.length / itemsPerPage) &&
                                        paginate(currentPage + 1)
                                      }
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
                  </form>

                  

                  {/*Modal*/}
                  {isModalOpen && (
                    <AdminEditJob onClose={closeModal} job_id={job_Id} />
                  )}
                </div>
              )}

              {activeTab === "browsecandidate" && (
                <div className="twm-right-section-panel candidate-save-job site-bg-gray">
                  {/*Filter Short By*/}
                  <div className="product-filter-wrap d-flex justify-content-between align-items-center">
                    <span className="woocommerce-result-count-left">
                      Applicant List
                    </span>
                  </div>
                  <JobAppliedList />
                </div>
              )}
            </div>

            <ToastContainer/>
          </div>
        
        </div>
      </div>
  
    </div>
  );
};

export default ManageJobs;
