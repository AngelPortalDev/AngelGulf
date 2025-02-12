import React, { useState,useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

const JobApplicationForm = ({ closeModal,job_Id  }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Your name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
      mobile: Yup.string().required("Mobile no is required"),
    message: Yup.string().required("Message is required"),
    resume: Yup.mixed().required("Resume is required"),  
  });
  

  const [resume, setResume] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: ".pdf,.doc,.docx",
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setResume(file);
        formik.setFieldValue("resume", file);  // Update Formik's resume value
      }
    },
    maxFiles: 1,
  });
  

  const formik = useFormik({
    initialValues: {
        name: "",
        email: "",
        message: "",
        mobile:"",
        job_id: job_Id,
        resume: null
    },
    validationSchema: validationSchema,

    onSubmit: async (values) => {

      if (!resume) {
        // Manually trigger validation if resume is not uploaded
        formik.setFieldError("resume", "Resume is required");
        return;
      }

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("mobile", values.mobile);
      formData.append("message", values.message);
      formData.append("job_id", values.job_id);

      if (resume) {
        formData.append("resume", resume);
      }
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}php/job_applied.php`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.data) {
          formik.resetForm();
          setResume(null);
          toast.success("Your application was submitted successfully!");
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to submit application. Please try again later.");
      }
     
    },
  });


  return (
    <div>
       <div className="modal" style={{ display: "block" }}>
       <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <form onSubmit={formik.handleSubmit}>
              <div className="modal-header mt-3">
                <h3 className="modal-title" id="sign_up_popupLabel-3">
                  Job Application
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={closeModal}
                />
              </div>
              <div className="modal-body p-3">
                <div className="twm-right-section-panel-wrap2">
                  {/* Filter Short By */}
                  <div className="twm-right-section-panel site-bg-primary">
                    {/* Basic Information */}
                    <div className="panel panel-default">
                      <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">
                          Apply For This Job
                        </h4>
                      </div>
                      <div className="panel-body wt-panel-body p-a20 ">
                        <div className="twm-tabs-style-1">
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                 <input type="hidden" value="2" name="job_id"/>
                              <div className="form-group">
                                <label>Your Name</label>
                                <div className="ls-inputicon-box">
                                   
                                  <input
                                    className="form-control"
                                    name="name"
                                    type="text"
                                    placeholder="Devid Smith"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                  />
                                  <i className="fs-input-icon fa fa-user " />
                                </div>
                                {formik.touched.name &&
                                formik.errors.name ? (
                                  <div className="text-danger">
                                    {formik.errors.name}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>Email Address</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    className="form-control"
                                    name="email"
                                    type="email"
                                    placeholder="Devid@example.com"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                  />
                                  <i className="fs-input-icon fas fa-at" />
                                </div>
                                {formik.touched.email &&
                                formik.errors.email ? (
                                  <div className="text-danger">
                                    {formik.errors.email}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>Mobile Number</label>
                                <input
                                  className="form-control"
                                  name="mobile"
                                  type="text"
                                  placeholder="1234567890"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.mobile}
                                />
                                {formik.touched.mobile && formik.errors.mobile ? (
                                  <div className="text-danger">{formik.errors.mobile}</div>
                                ) : null}
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label>Message</label>
                                <textarea
                                  className="form-control"
                                  rows={3}
                                  name="message"
                                  placeholder="Message sent to the employer"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.message}
                                />
                                {formik.touched.message &&
                                formik.errors.message ? (
                                  <div className="text-danger">
                                    {formik.errors.message}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
  <div className="form-group">
    <label>Upload Resume</label>
    <div
      {...getRootProps()}
      className="dropzone border-dashed p-3 text-center position-relative"
    >
      <input {...getInputProps()} name="upload_resume" accept=".pdf, .doc, .docx" />
      <p
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          cursor: "pointer",
        }}
      >
        Drag & Drop your resume here or click to upload
      </p>
    </div>
    {resume && (
      <div className="mt-2">
        <strong>Selected file:</strong> {resume.name}
      </div>
    )}
    {!resume && formik.touched.resume && formik.errors.resume && (
      <div className="text-danger">
        {formik.errors.resume}
      </div>
    )}
  </div>
</div>

                            <div className="col-xl-12 col-lg-12 col-md-12">
                              <div className="text-left">
                                <button type="submit" className="site-button">
                                  Send Application
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationForm;