import React from "react";
import grivience from "../../assets/images/grievance.jpg";
import { Helmet } from "react-helmet";

const GrievanceForm = () => {
  return (
    <div>
      <Helmet>
        <title>Grievance Form | Dubai Work Permit Visa, Dubai Working Visa Processing Time</title>
        <meta name="keywords" content="Grievance Form, Dubai Work Permit Visa, Dubai Working Visa Processing Time, Dubai Grievance Form"/>
        <meta name="description" content="Dubai Work Permit Visa, Dubai Working Visa Processing Time, Dubai Grievance Form"/>
        <meta name="robots" content="index, follow"/>
        <meta name="author" content="Webmax"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <link rel="canonical" href="https://www.angelgulfjobs.com/grievance-form"/> 
      </Helmet>
      <div className="section-content">
        <div className="container">
          {/* CONTACT FORM*/}
          <div className="contact-one-inner">
            <h4 className="twm-s-title text-center blueuText">Grievance Form</h4>

            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div className="contact-form-outer">
                  {/* TITLE START*/}
                  <div className="section-head left wt-small-separator-outer"></div>
                  {/* TITLE END*/}
                  <form
                    className="cons-contact-form"
                    method="post"
                    action="https://thewebmax.org/jobzilla/form-handler2.php"
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-3">
                          <input
                            name="username"
                            type="text"
                            required
                            className="form-control"
                            placeholder="Name of the Candidate"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-3">
                          <input
                            name="email"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Contact Number"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-3">
                          <input
                            name="phone"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-3">
                          <input
                            name="company"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Company Recruited"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-3">
                          <select
                            class="form-select form-control"
                            aria-label="Default select example"
                          >
                            <option selected>Country Recruited</option>
                            <option value="1">Qatar</option>
                            <option value="2">UAE</option>
                            <option value="3">Saudi Arabia</option>
                            <option value="3">Oman</option>
                            <option value="3">Bahrain</option>
                            <option value="3">Kuwait</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input
                            name="subject"
                            type="text"
                            className="form-control"
                            required
                            placeholder="City Recruited"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mb-3">
                          <textarea
                            name="message"
                            className="form-control"
                            rows={5}
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button type="submit" className="site-button">
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="contact-info-wrap ">
                  <img
                    src={grivience}
                    className="img-fluid"
                    alt="not found"
                    style={{ border: "10px solid #3498db" }}
                  />
                </div>
              </div>
            </div>
            <div className="p-3 text-white mt-3 mb-4" style={{ background: "#3498db" }}>
              <p>
                If any Candidate / Emigrant facing any Compliant / Grievances
                with its foreign employer, shall contact Angel Gulf Jobs on the
                below mentioned Email ID and Contact Number along with all the
                details and contact Number of the candidate:
              </p>
              <p>Email:<a href="mailto:info@angelgulfjobs.com" className="text-white">info@angelgulfjobs.com</a></p>
              <p>Contact: <a href="tel: +91-22 40115750" className="text-white"> +91-22 40115750</a></p>
              <p>The Redressal team shall get in touch with the candidate / emigrant within 24 hours/ 1 working day in order to understand in detail the matter.</p>
              <p>Angel Gulf Jobs will ensure in co-ordination with the foreign employer the grievance is resolved at the earliest.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default GrievanceForm;
