import React, { useState,useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Select from 'react-select';

const JobApplicationForm = ({ job_Id = null }) => {
  const [loading, setLoading] = useState(false);

  const { jobId } = useParams();
  const actualJobId = jobId === "general" ? "0" : jobId || "0";

  const validationSchema = Yup.object({
    name: Yup.string().required("Your name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    country_code: Yup.string().required("Country code is required"),
    mobile: Yup.string()
      .required("Mobile no is required")
      .max(15, "Mobile number cannot be more than 15 digits"),
    // message: Yup.string().required("Message is required"),
    resume: Yup.mixed()
      .required("Resume is required")
      .test("fileSize", "Resume must be less than 2MB", (value) => {
        return value && value.size <= 2 * 1024 * 1024;
      }),
  });

  const [resume, setResume] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [],
      "application/msword": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [],
    },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        if (file.size > 2 * 1024 * 1024) {
          toast.error("Resume file size should not exceed 2MB",{ autoClose: 1000,hideProgressBar: true });
          return;
        }
        setResume(file);
        formik.setFieldValue("resume", file);
      }
    },
    maxFiles: 1,
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      // message: "",
      country_code:"",
      mobile: "",
      job_id: actualJobId,
      resume: null,
    },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      // console.log("Submitting with job_id:", values.job_id);
      setLoading(true);
      if (!resume) {
        // Manually trigger validation if resume is not uploaded
        formik.setFieldError("resume", "Resume is required");
        return;
      }

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("country_code", values.country_code);
      formData.append("mobile", values.mobile);
      // formData.append("message", values.message);
      formData.append("job_id", values.job_id);

      if (resume) {
        formData.append("resume", resume);
      }
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}php/job_applied.php`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "Cache-Control": "no-cache, no-store, must-revalidate",
              Pragma: "no-cache",
              Expires: "0",
            },
          }
        );
        if (response.data.success === false) {
          toast.error(response.data.message, { autoClose: 1500,hideProgressBar: true });
          setLoading(false);
          return;
        }
        if (response.data) {
          formik.resetForm();
          setResume(null);
          toast.success("Your application was submitted successfully!",{ autoClose: 1500, hideProgressBar: true });
          // setTimeout(() => {
          //   closeModal();
          // }, 2000);
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to submit application. Please try again later.",{hideProgressBar:true});
      } finally {
        setLoading(false);
      }
    },
  });
 
  // fetch Country

  const [countryList, setCountryList] = useState([]);

  const fetchCountries = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}php/country_master.php`
      );
      // console.log("country List",res);
      setCountryList(res.data.country);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);


  const countryOptions = countryList.map(country => ({
    value: country.country_code,
    label: `${country.country_code} - ${country.country_name}`,
  }));

  return (
    <div>
      {loading && (
        <div className="loading-overlay">
          <div className="loading-text">Loading...</div>
        </div>
      )}
      <div className="container">
      <form onSubmit={formik.handleSubmit} >
              <div className="modal-header mt-3 d-flex mx-auto" style={{ maxWidth:'900px' }}>
                <h3 className="modal-title" id="sign_up_popupLabel-3">
                  Job Application
                </h3>
              </div>
              <div className="modal-body p-3 d-flex mx-auto" style={{ maxWidth:'900px' }}>
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
                              <input type="hidden" value="2" name="job_id" />
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
                                {formik.touched.name && formik.errors.name ? (
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
                                {formik.touched.email && formik.errors.email ? (
                                  <div className="text-danger">
                                    {formik.errors.email}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            {/* <div className="col-xl-12 col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>Mobile Number</label>
                                <div className="d-flex">
                                <select
                                  className="form-select form-control"
                                  name="country_code"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.country_code}
                                  style={{ width: "25%", height:'60px', padding:'20px',borderTopLeftRadius:'10px', borderBottomLeftRadius:'10px', borderRight:'1px solid rgb(234 234 234)'  }}
                                >
                                  <option value="">Select Country</option>
                                  {countryList.length > 0 ? (
                                    countryList.map((country) => (
                                      <option key={country.id} value={country.country_code}>
                                         {country.country_code} - {country.country_name}
                                      </option>
                                    ))
                                  ) : (
                                    <option value="">Loading countries...</option>
                                  )}
                                </select>
                                  <input
                                    className="form-control"
                                    name="mobile"
                                    type="number"
                                    placeholder="1234567890"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.mobile}
                                    style={{ width: "75%",borderTopLeftRadius:'0px', borderBottomLeftRadius:'0px' }}
                                  />
                                </div>
                          
                                  {formik.touched.country_code && formik.errors.country_code && (
                                    <div className="text-danger mt-1">{formik.errors.country_code}</div>
                                  )}
                                  {formik.touched.mobile && formik.errors.mobile && (
                                    <div className="text-danger mt-1">{formik.errors.mobile}</div>
                                  )}

                                  <small className="form-text text-muted">
                                    Mobile number should not be greater than 15 digits.
                                  </small>
                              </div>
                            </div> */}

<div className="col-xl-12 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Mobile Number</label>
                        <div className="d-flex flex-wrap flex-column flex-md-row seachContainer">
                          {/* Use react-select for searchable dropdown */}
                          <Select
                            name="country_code"
                            options={countryOptions}
                            onChange={(selectedOption) =>
                              formik.setFieldValue('country_code', selectedOption ? selectedOption.value : '')
                            }
                            onBlur={formik.handleBlur}
                            value={
                              countryOptions.find(
                                (option) => option.value === formik.values.country_code
                              ) || ''
                            }
                            placeholder="Select Country Code"
                            styles={{
                              control: (provided) => ({
                                ...provided,
                                height: '60px',
                                // padding: '0 15px', // Adjust padding for more control over width
                                borderTopLeftRadius: '10px',
                                borderBottomLeftRadius: '10px',
                                // borderRight: '1px solid rgb(234, 234, 234)',
                                backgroundColor:"#f1f6fe",
                                border:0,
                                flex: 1, // Makes sure this takes up the available space
                              }),
                            }}
                          />
                          <input
                            className="form-control"
                            name="mobile"
                            type="number"
                            placeholder="1234567890"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.mobile}
                            style={{
                              borderTopLeftRadius: '0px',
                              borderBottomLeftRadius: '0px',
                              flex: 2, // This takes up more space compared to the dropdown
                              height: '60px', // Ensure the height matches the dropdown for consistency
                            }}
                          />
                        </div>
                        {formik.touched.country_code && formik.errors.country_code && (
                          <div className="text-danger mt-1">{formik.errors.country_code}</div>
                        )}
                        {formik.touched.mobile && formik.errors.mobile && (
                          <div className="text-danger">{formik.errors.mobile}</div>
                        )}
                      </div>
                     </div>

                            {/* <div className="col-md-12">
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
                            </div> */}
                            <div className="col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>Upload Resume</label>
                                <div
                                  {...getRootProps()}
                                  className="dropzone border-dashed p-3 text-center position-relative"
                                >
                                  <input
                                    {...getInputProps()}
                                    name="upload_resume"
                                    accept=".pdf, .doc, .docx"
                                  />
                                  <p
                                    style={{
                                      position: "absolute",
                                      top: "50%",
                                      left: "50%",
                                      transform: "translate(-50%, -50%)",
                                      cursor: "pointer",
                                    }}
                                  >
                                    Drag & Drop your resume here or click to
                                    upload
                                  </p>
                                </div>
                                <small class="form-text text-muted">Resume should not more that 2 MB.</small>
                                {resume && (
                                  <div className="mt-2">
                                    <strong>Selected file:</strong>{" "}
                                    {resume.name}
                                  </div>
                                )}
                                {!resume &&
                                  formik.touched.resume &&
                                  formik.errors.resume && (
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
  );
};

export default JobApplicationForm;
