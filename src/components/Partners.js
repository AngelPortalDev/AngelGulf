import React, { useEffect, useState } from "react";
import duabiImage from "./../assets/images/existing_partners/duabi.jpg";
import saudiCompany from "./../assets/images/existing_partners/saudi-company.jpg";
import saudyDynamic from "./../assets/images/existing_partners/saudi-dynamic.jpg";
import saudiSecuirity from "./../assets/images/existing_partners/saudi-security.jpg";
import saudiImage from "./../assets/images/existing_partners/saudi.jpg";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify/unstyled";
import Axios from "axios";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name should be at least 3 characters long")
    .required("Name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  company_name: Yup.string().required("Company name is required"),
  mobile_no: Yup.string().required("Mobile number is required"),
  designation: Yup.string(),
  country_id: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  msg: Yup.string(),
});

const Partners = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      company_name: "",
      mobile_no: "",
      designation: "",
      country_id: "",
      city: "",
      msg: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      // Handle form submission
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("mobile_no", values.mobile_no);
      formData.append("msg", values.msg);
      formData.append("company_name", values.company_name);
      formData.append("designation", values.designation);
      formData.append("country_id", values.country_id);
      formData.append("city", values.city);

      try {
        const response = await Axios.post(
          `${process.env.REACT_APP_API_BASE_URL}php/patnerus.php`,
          formData
        );
        if (response.data) {
          formik.resetForm();
          toast.success("Form Submitted Successfully");
        }
      } catch (err) {
        toast.error("Failed to submit form. Please try again later.");
      }
    },
  });

  const [countryList, setCountryList] = useState([]);

  const fetchCountries = async () => {
    try {
      const res = await Axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/php/country_list.php`
      );
      setCountryList(res.data.country);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Partner With us</title>
        <meta
          name="description"
          content="Angel Gulf Jobs is a leading employment agency in the Gulf region, providing professional and flexible opportunities for job seekers."
        />
        <meta
          name="keywords"
          content="employment agency, gulf region, job search, work opportunities, gulf jobs"
        />
        <meta name="author" content="Angel Gulf Jobs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://www.angelgulfjobs.com/partner-with-us"
        />
      </Helmet>
      <div className="container mb-3">
        <h4 className="twm-s-title text-center blueuText">Partner With Us</h4>
        <p>
          We would be happier to work as Partners. If you loved our work culture
          and services and want to be partner with us. Then Contact us without
          any hesitation. We serve our Partners with utmost care and Precision
          and make them feel as our family.
        </p>
        <div>
          <div className="contact-form-outer">
            <ToastContainer />
            <form className="cons-contact-form" onSubmit={formik.handleSubmit}>
              <div className="row">
                {/* Name Field */}
                <div className="col-lg-6 col-md-6">
                  <div className="form-group mb-3">
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Enter Name *"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="text-danger">{formik.errors.name}</div>
                    )}
                  </div>
                </div>

                {/* Company Name Field */}
                <div className="col-lg-6 col-md-6">
                  <div className="form-group mb-3">
                    <input
                      name="company_name"
                      type="text"
                      className="form-control"
                      placeholder="Enter Company Name *"
                      value={formik.values.company_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.company_name &&
                      formik.errors.company_name && (
                        <div className="text-danger">
                          {formik.errors.company_name}
                        </div>
                      )}
                  </div>
                </div>

                {/* Designation Field */}
                <div className="col-lg-6 col-md-6">
                  <div className="form-group mb-3">
                    <input
                      name="designation"
                      type="text"
                      className="form-control"
                      placeholder="Enter Designation "
                      value={formik.values.designation}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.designation &&
                      formik.errors.designation && (
                        <div className="text-danger">
                          {formik.errors.designation}
                        </div>
                      )}
                  </div>
                </div>

                {/* Email Field */}
                <div className="col-lg-6 col-md-6">
                  <div className="form-group mb-3">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter Email *"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="text-danger">{formik.errors.email}</div>
                    )}
                  </div>
                </div>

                {/* Mobile Number Field */}
                <div className="col-lg-6 col-md-6">
                  <div className="form-group mb-3">
                    <input
                      name="mobile_no"
                      type="text"
                      className="form-control"
                      placeholder="Enter Phone Number *"
                      value={formik.values.mobile_no}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.mobile_no && formik.errors.mobile_no && (
                      <div className="text-danger">
                        {formik.errors.mobile_no}
                      </div>
                    )}
                  </div>
                </div>

                {/* Country Select Field */}
                <div className="col-lg-6 col-md-6">
                  <div className="form-group mb-3">
                    <select
                      className="form-select form-control"
                      name="country_id"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.country_id}
                    >
                      <option value="">Select Country</option>
                      {countryList.length > 0 ? (
                        countryList.map((country) => (
                          <option key={country.id} value={country.id}>
                            {country.country_name}
                          </option>
                        ))
                      ) : (
                        <option value="">Loading countries...</option>
                      )}
                    </select>
                    {formik.touched.country_id && formik.errors.country_id && (
                      <div className="text-danger">
                        {formik.errors.country_id}
                      </div>
                    )}
                  </div>
                </div>

                {/* City Field */}
                <div className="col-lg-6 col-md-6">
                  <div className="form-group mb-3">
                    <input
                      name="city"
                      type="text"
                      className="form-control"
                      placeholder="Enter City *"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.city && formik.errors.city && (
                      <div className="text-danger">{formik.errors.city}</div>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="col-lg-6 col-md-6">
                  <div className="form-group mb-3">
                    <input
                      name="msg"
                      type="text"
                      className="form-control"
                      placeholder="Enter Message"
                      value={formik.values.msg}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.msg && formik.errors.msg && (
                      <div className="text-danger">{formik.errors.msg}</div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-md-12">
                  <button type="submit" className="site-button">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <h4 className="twm-s-title text-center blueuText">
            Existing Partners
          </h4>
        </div>
      </div>
      <div className="container mb-4 mt-4">
        <div className="row">
          <div className="col-3 mt-2">
            <img
              src={duabiImage}
              className="img-fluid"
              alt="not found"
              data-bs-toggle="modal"
              href="#saved-jobs-view"
              style={{ border: "1px solid gray" }}
            />
          </div>
          <div className="col-3 mt-2">
            <img
              src={saudiImage}
              className="img-fluid"
              alt="not found"
              data-bs-toggle="modal"
              href="#saudi-saved-jobs-view"
              style={{ border: "1px solid gray" }}
            />
          </div>
          <div className="col-3 mt-2">
            <img
              src={saudiSecuirity}
              className="img-fluid"
              alt="not found"
              data-bs-toggle="modal"
              href="#demad-letter-jobs-view"
              style={{ border: "1px solid gray" }}
            />
          </div>
          <div className="col-3 mt-2">
            <img
              src={saudiCompany}
              className="img-fluid"
              alt="not found"
              data-bs-toggle="modal"
              href="#saudi-company-saved-jobs-view"
              style={{ border: "1px solid gray" }}
            />
          </div>
          <div className="col-3 mt-2">
            <img
              src={saudyDynamic}
              className="img-fluid"
              alt="not found"
              data-bs-toggle="modal"
              href="#saudi-dynamic-saved-jobs-view"
              style={{ border: "1px solid gray" }}
            />
          </div>
        </div>
      </div>
      {/* Dubai Modal */}
      <div
        className="modal fade twm-saved-jobs-view"
        id="saved-jobs-view"
        aria-hidden="true"
        aria-labelledby="sign_up_popupLabel-3"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h3 className="modal-title" id="sign_up_popupLabel-3">
                  Al Walid
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <img src={duabiImage} className="img-fluid" alt="not found" />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="site-button"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Saudi Arebia Modal */}

      <div
        className="modal fade twm-saved-jobs-view"
        id="saudi-saved-jobs-view"
        aria-hidden="true"
        aria-labelledby="sign_up_popupLabel-3"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h3 className="modal-title" id="sign_up_popupLabel-3">
                  Raissyon Trading & Contracting
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <img src={saudiImage} className="img-fluid" alt="not found" />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="site-button"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Saudi Demand Letter */}

      <div
        className="modal fade twm-saved-jobs-view"
        id="demad-letter-jobs-view"
        aria-hidden="true"
        aria-labelledby="sign_up_popupLabel-3"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h3 className="modal-title" id="sign_up_popupLabel-3">
                  Rasid Security
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <img
                  src={saudiSecuirity}
                  className="img-fluid"
                  alt="not found"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="site-button"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Saudi Company */}

      <div
        className="modal fade twm-saved-jobs-view"
        id="saudi-company-saved-jobs-view"
        aria-hidden="true"
        aria-labelledby="sign_up_popupLabel-3"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h3 className="modal-title" id="sign_up_popupLabel-3">
                  Rasid Security
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <img src={saudiCompany} className="img-fluid" alt="not found" />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="site-button"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Saudi Dynamic */}

      <div
        className="modal fade twm-saved-jobs-view"
        id="saudi-dynamic-saved-jobs-view"
        aria-hidden="true"
        aria-labelledby="sign_up_popupLabel-3"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h3 className="modal-title" id="sign_up_popupLabel-3">
                  Rasid Security
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <img src={saudiCompany} className="img-fluid" alt="not found" />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="site-button"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
