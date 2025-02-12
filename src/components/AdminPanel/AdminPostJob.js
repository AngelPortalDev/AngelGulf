import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AdminPostJob = () => {
  const [countryList, setCountryList] = useState([]);
  const navigate = useNavigate();


  const fetchCountries = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}php/country_list.php`
      );
      setCountryList(res.data.country);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const [selectedImage, setSelectedImage] = React.useState(null);

  const validationSchema = Yup.object({
    job_title: Yup.string().required("Job Title is required"),
    company_name: Yup.string().required("Company name is required"),
    salary: Yup.string().required("Annual salary is required"),
    country_id: Yup.string().required("Country is required"),
    location_hiring: Yup.string().required("Job location is required"),
    skill_keyword: Yup.string().required("Skills are required"),
    job_education: Yup.string().required("Education is required"),
    // gender: Yup.string().required("Functional area is required"),
    job_description: Yup.string().required("Job description is required"),
    experience: Yup.string().required("Experience is required"),
    company_logo: Yup.mixed().nullable()
  });

  const formik = useFormik({
    initialValues: {
      job_title: "",
      company_name: "",
      salary: "",
      country_id: "",
      location_hiring: "",
      skill_keyword: "",
      job_education: "",
      // gender: "",
      job_description: "",
      experience: "",
      company_logo: null
      // company_logo: selectedImage,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("job_title", values.job_title);
      formData.append("company_name", values.company_name);
      formData.append("salary", values.salary);
      formData.append("country_id", values.country_id);
      formData.append("location_hiring", values.location_hiring);
      formData.append("skill_keyword", values.skill_keyword);
      formData.append("job_education", values.job_education);
      // formData.append("gender", values.gender);
      formData.append("job_description", values.job_description);
      // formData.append("company_logo", values.company_logo);
      formData.append("experience", values.experience);


      if (values.company_logo) {
        formData.append("company_logo", values.company_logo);
      }

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}php/jobpost.php`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.data) {
          formik.resetForm();
          toast.success("Your Job Post successfully!");
          setTimeout(() => {
            navigate("/managejobs");
          }, 2000);
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to Job Post. Please try again later.");
      }
    },
  });


   useEffect(() => {
      // Check if the token exists
      const token = sessionStorage.getItem("token");
      if (!token) {
        navigate("/login");
        // alert("Token Not found. Please try again")
      }
    }, []);

  return (
    <div>
      <div className="page-content">
        {/* <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{
            backgroundImage: "url(images/banner/1.jpg)",
            height: "300px",
          }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
        </div> */}
        <div
          className="section-full p-t120  p-b90 site-bg-white bg-cover twm-ac-fresher-wrap"
          style={{ backgroundImage: "url(images/background/pattern.jpg)" }}
        >
          <span className="twm-section-bg-img">
            <img src="images/reg-bg2.png" alt="" />
          </span>
      
          <div className="container">
           
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8 col-md-12">
              <div className="d-flex justify-content-end">
              <button className="btn btn-primary mb-3" onClick={() => window.history.back()}>Back</button>
            </div>
                <div className="twm-right-section-panel-wrap2">
                  <div className="twm-right-section-panel site-bg-primary">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="panel panel-default">
                        <div className="panel-heading wt-panel-heading p-a20">
                          <h4 className="panel-tittle m-a0 mb-3 text-center fs-3">Post a job</h4>
                          <div className="d-flex align-item-center">
                            <div className="form-group">
                              <div className="dashboard-profile-pic">
                                <div className="dashboard-profile-photo">
                                  <img
                                    src={
                                      selectedImage ||
                                      "images/jobs-company/pic1.jpg"
                                    }
                                    alt="Company Logo"
                                  />
                                  <div className="upload-btn-wrapper">
                                    <div id="upload-image-grid" />
                                    <button className="site-button button-sm">
                                      Upload Photo
                                    </button>
                                    <input
                                      type="file"
                                      name="company_logo"
                                      id="file-uploader"
                                      accept=".jpg, .jpeg, .png"
                                      onChange={(event) => {
                                        const file =
                                          event.currentTarget.files[0];
                                        formik.setFieldValue(
                                          "company_logo",
                                          file || null
                                        );
                                        setSelectedImage(file ? URL.createObjectURL(file) : null);
                                      }}
                                    />
                                  </div>
                                </div>
                                {formik.touched.company_logo &&
                                  formik.errors.company_logo && (
                                    <div
                                      className="error-message"
                                      style={{ color: "red" }}
                                    >
                                      {formik.errors.company_logo}
                                    </div>
                                  )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="panel-body wt-panel-body p-a20">
                          <div className="twm-tabs-style-1">
                            <div className="row">
                              <div className="col-xl-6 col-lg-6 col-md-12">
                                <div className="form-group">
                                  <label>Job Title*</label>
                                  <div className="ls-inputicon-box">
                                    <input
                                      className="form-control"
                                      name="job_title"
                                      type="text"
                                      placeholder="Your Job Title"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.job_title}
                                    />
                                    <i className="fs-input-icon fa fa-address-card" />
                                  </div>
                                  {formik.touched.job_title &&
                                    formik.errors.job_title && (
                                      <div className="text-danger">
                                        {formik.errors.job_title}
                                      </div>
                                    )}
                                </div>
                              </div>

                              <div className="col-xl-6 col-lg-6 col-md-12">
                                <div className="form-group">
                                  <label>Company Name*</label>
                                  <div className="ls-inputicon-box">
                                    <input
                                      className="form-control"
                                      name="company_name"
                                      type="text"
                                      placeholder="Enter Company Name"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.company_name}
                                    />
                                    <i className="fs-input-icon fas fa-building" />
                                  </div>
                                  {formik.touched.company_name &&
                                    formik.errors.company_name && (
                                      <div className="text-danger">
                                        {formik.errors.company_name}
                                      </div>
                                    )}
                                </div>
                              </div>

                              <div className="col-xl-6 col-lg-6 col-md-12">
                                <div className="form-group">
                                  <label>Annual Salary*</label>
                                  <div className="ls-inputicon-box">
                                    <input
                                      className="form-control"
                                      name="salary"
                                      type="text"
                                      placeholder="Your Annual Salary"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.salary}
                                    />
                                    {/* <i className="fs-input-icon fa fa-dollar-sign" /> */}
                                  </div>
                                  {formik.touched.salary &&
                                    formik.errors.salary && (
                                      <div className="text-danger">
                                        {formik.errors.salary}
                                      </div>
                                    )}
                                </div>
                              </div>

                              <div className="col-xl-6 col-lg-6 col-md-12">
                                <div className="form-group">
                                  <label>country *</label>
                                  <div className="ls-inputicon-box">
                                    <select
                                      className="form-select form-control"
                                      name="country_id"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.id}
                                    >
                                      <option value="">
                                        Select Country
                                      </option>
                                      {countryList.length > 0 ? (
                                        countryList.map((country) => (
                                          <option
                                            key={country.id}
                                            value={country.id}
                                          >
                                            {country.name}
                                          </option>
                                        ))
                                      ) : (
                                        <option value="">
                                          Loading countries...
                                        </option>
                                      )}
                                    </select>
                                    <i className="fs-input-icon fa fa-globe" />
                                  </div>
                                  {formik.touched.country_id &&
                                    formik.errors.country_id && (
                                      <div className="text-danger">
                                        {formik.errors.country_id}
                                      </div>
                                    )}
                                </div>
                              </div>

                              <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Job Location*</label>
                                  <div className="ls-inputicon-box">
                                    <input
                                      className="form-control"
                                      name="location_hiring"
                                      type="text"
                                      placeholder="Enter Hiring Location"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.location_hiring}
                                    />
                                    <i className="fs-input-icon fa fa-globe-americas" />
                                  </div>
                                  {formik.touched.location_hiring &&
                                    formik.errors.location_hiring && (
                                      <div className="text-danger">
                                        {formik.errors.location_hiring}
                                      </div>
                                    )}
                                </div>
                              </div>

                              <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Skills*</label>
                                  <div className="ls-inputicon-box">
                                    <input
                                      className="form-control"
                                      name="skill_keyword"
                                      type="text"
                                      placeholder="Programming, sales, accounting"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.skill_keyword}
                                    />
                                    <i className="fs-input-icon fas fa-asterisk" />
                                  </div>
                                  {formik.touched.skill_keyword &&
                                    formik.errors.skill_keyword && (
                                      <div className="text-danger">
                                        {formik.errors.skill_keyword}
                                      </div>
                                    )}
                                </div>
                              </div>

                              <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Education*</label>
                                  <div className="ls-inputicon-box">
                                    <input
                                      className="form-control"
                                      name="job_education"
                                      type="text"
                                      placeholder="Enter Required Education"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.job_education}
                                    />
                                    <i className="fs-input-icon fa fa-job_education" />
                                  </div>
                                  {formik.touched.job_education &&
                                    formik.errors.job_education && (
                                      <div className="text-danger">
                                        {formik.errors.job_education}
                                      </div>
                                    )}
                                </div>
                              </div>

                              <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Experience*</label>
                                  <div className="ls-inputicon-box">
                                    <input
                                      className="form-control"
                                      name="experience"
                                      type="text"
                                      placeholder="Enter Experience"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.experience}
                                    />
                                    <i className="fs-input-icon fa fa-job_education" />
                                  </div>
                                  {formik.touched.experience &&
                                    formik.errors.experience && (
                                      <div className="text-danger">
                                        {formik.errors.experience}
                                      </div>
                                    )}
                                </div>
                              </div>

                              <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Job Description*</label>
                                  <div className="ls-inputicon-box input_fields_custom">
                                    <textarea
                                      className="form-control"
                                      name="job_description"
                                      rows={4}
                                      placeholder="Select the role that you work in"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.job_description}
                                    />
                                    <i className="fs-input-icon fa fa-user" />
                                  </div>
                                  {formik.touched.job_description &&
                                    formik.errors.job_description && (
                                      <div className="text-danger">
                                        {formik.errors.job_description}
                                      </div>
                                    )}
                                </div>
                              </div>

                              <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="text-left">
                                  <button type="submit" className="site-button">
                                    Submit
                                  </button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPostJob;
