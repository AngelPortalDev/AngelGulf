import React, { useState, useEffect } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";

const JobAppliedList = () => {
  const [candidateList, setCandidateList] = useState([]);
  const [jobList, setJobList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); 

  const fetchCandidates = async () => {
    try {
      const response = await Axios.get(
        `${process.env.REACT_APP_API_BASE_URL}php/jobapplied_list.php`
      );
      setCandidateList(response.data.jobs.sort((a, b) => b.id - a.id));

    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  const fetchJobList = async()=>{
    try {
      const response = await Axios.get(
        `${process.env.REACT_APP_API_BASE_URL}php/joblist.php`
      );
      setJobList(response.data.jobs);

    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  }

  useEffect(() => {
    fetchCandidates();
    fetchJobList();
  }, []);

  const getJobTitle = (jobId) => {
    const job = jobList.find((job) => job.id === jobId);
    // console.log("getJobTitle",job);
    return job ? job.job_title : "Job title not available";
  };

  // Logic to calculate the index of candidates to display
  const indexOfLastCandidate = currentPage * itemsPerPage;
  const indexOfFirstCandidate = indexOfLastCandidate - itemsPerPage;
  const currentCandidates = candidateList.slice(
    indexOfFirstCandidate,
    indexOfLastCandidate
  );

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleResumeDownload = (resumeFileName) => {
    const fullResumeUrl = `${process.env.REACT_APP_API_BASE_URL}php/uploads/resume/${resumeFileName}`;  
    const link = document.createElement("a");
    link.href = fullResumeUrl;
    link.download = resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="table-responsive">
        <table className="table twm-table table-striped table-borderless">
          <thead>
            <tr>
              <th>No</th>
              <th>Candidate Name</th>
              <th>Email Address</th>
              <th>Mobile No</th>
              <th>Applied Job</th>
              <th className="text-center">Resume</th>
            </tr>
          </thead>
          <tbody>
            {currentCandidates.map((candidate, index) => (
              <tr key={index}>
                <td className="order-id text-primary">
                  {indexOfFirstCandidate + index + 1}
                </td>
                <td>{candidate.name}</td>
                <td>
                  <a
                    href={`mailto:${candidate.email}`}
                    className="text-primary"
                  >
                    {candidate.email}
                  </a>
                </td>
                <td>
                  {!candidate.mobile ? (
                    "Mobile no not available"
                  ) : (
                    <a
                      href={`tel:${candidate.mobile}`}
                      className="text-primary"
                    >
                      {" "}
                      {candidate.mobile}{" "}
                    </a>
                  )}
                </td>
                <td>{getJobTitle(candidate.job_id)}</td>
                <td>
                  {candidate.upload_resume ? (
                    <button
                      onClick={() =>
                        handleResumeDownload(candidate.upload_resume)
                      }
                      className="btn btn-link"
                    >
                      Download Resume
                    </button>
                  ) : (
                    "Resume Not Available"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
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
            {[...Array(Math.ceil(candidateList.length / itemsPerPage))].map(
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
                    Math.ceil(candidateList.length / itemsPerPage) &&
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
  );
};

export default JobAppliedList;
