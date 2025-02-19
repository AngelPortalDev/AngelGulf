import React, { useState } from "react";
import grivience from "../../assets/images/grievance.jpg";
import { Helmet } from "react-helmet";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast,ToastContainer } from "react-toastify";
import Axios from "axios";

const validationSchema = Yup.object({
  username: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required").max(15,'Phone number should not exceed 15 digits'),
  company: Yup.string().required("Company name is required"),
  city: Yup.string().required("City is required"),
  message: Yup.string().required("Message is required"),
  country: Yup.string().required("Country is required"),
});

const GrievanceForm = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    username: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    message: "",
    country: "",
  };

  const handleSubmit = async (values, { setSubmitting,resetForm  }) => {
    setLoading(true);
    try {
      const response = await Axios.post(
        `${process.env.REACT_APP_API_BASE_URL}php/grievances.php`,
        values,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      );
      if (response.data.success) {
        toast.success("Form Submitted Successfully", { autoClose: 1500 });
        resetForm();
      } else {
        toast.error("Failed to submit form. Please try again later.", { autoClose: 1500 });
      }
    } catch (err) {
      toast.error("Failed to submit form. Please try again later.", { autoClose: 1500 });
    } finally {
      setLoading(false);
      setSubmitting(false); 
    }
  };
  

  return (
    <div>
      <ToastContainer/>
      {loading && (
        <div className="loading-overlay">
          <div className="loading-text">Loading...</div>
        </div>
      )}
      <Helmet>
        <title>
          Grievance Form | Dubai Work Permit Visa, Dubai Working Visa Processing
          Time
        </title>
        <meta
          name="keywords"
          content="Grievance Form, Dubai Work Permit Visa, Dubai Working Visa Processing Time, Dubai Grievance Form"
        />
        <meta
          name="description"
          content="Dubai Work Permit Visa, Dubai Working Visa Processing Time, Dubai Grievance Form"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Webmax" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="canonical"
          href="https://www.angelgulfjobs.com/grievance-form"
        />
      </Helmet>
      <div className="section-content">
        <div className="container">
          {/* CONTACT FORM*/}
          <div className="contact-one-inner">
            <h4 className="twm-s-title text-center blueuText">
              Grievance Form
            </h4>

            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div className="contact-form-outer">
                  {/* TITLE START*/}
                  <div className="section-head left wt-small-separator-outer"></div>
                  {/* TITLE END*/}
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ setFieldValue }) => (
                      <Form className="cons-contact-form mb-3">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-3">
                              <Field
                                name="username"
                                type="text"
                                className="form-control"
                                placeholder="Name of the Candidate"
                              />
                              <ErrorMessage
                                name="username"
                                component="div"
                                className="error-message text-danger"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-3">
                              <Field
                                name="email"
                                type="text"
                                className="form-control"
                                placeholder="Email of the Candidate"
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="error-message text-danger"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-3">
                              <Field
                                name="phone"
                                type="number"
                                className="form-control"
                                placeholder="Phone Number "
                              />
                              <ErrorMessage
                                name="phone"
                                component="div"
                                className="error-message text-danger"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-3">
                              <Field
                                name="company"
                                type="text"
                                className="form-control"
                                placeholder="Company Recruited"
                              />
                              <ErrorMessage
                                name="company"
                                component="div"
                                className="error-message text-danger"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-3">
                              <Field
                                as="select"
                                name="country"
                                className="form-select form-control"
                              >
                                <option value="">Select Country</option>
                                <option value="Qatar">Qatar</option>
                                <option value="UAE">UAE</option>
                                <option value="Saudi Arabia">
                                  Saudi Arabia
                                </option>
                                <option value="Oman">Oman</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Kuwait">Kuwait</option>
                              </Field>
                              <ErrorMessage
                                name="country"
                                component="div"
                                className="error-message text-danger"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-0">
                              <Field
                                name="city"
                                type="text"
                                className="form-control"
                                placeholder="City Recruited"
                              />
                              <ErrorMessage
                                name="city"
                                component="div"
                                className="error-message text-danger"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mb-3">
                              <Field
                                as="textarea"
                                name="message"
                                className="form-control"
                                rows={5}
                                placeholder="Message"
                              />
                              <ErrorMessage
                                name="message"
                                component="div"
                                className="error-message text-danger"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                          <button type="submit" className="site-button">
  Send
</button>

                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
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
            <div
              className="p-3 text-white mt-3 mb-4"
              style={{ background: "#3498db" }}
            >
              <p>
                If any Candidate / Emigrant facing any Compliant / Grievances
                with its foreign employer, shall contact Angel Gulf Jobs on the
                below mentioned Email ID and Contact Number along with all the
                details and contact Number of the candidate:
              </p>
              <p>
                Email:
                <a href="mailto:info@angelgulfjobs.com" className="text-white">
                  info@angelgulfjobs.com
                </a>
              </p>
              <p>
                Contact:{" "}
                <a href="tel: +91-22 40115750" className="text-white">
                  {" "}
                  +91-22 40115750
                </a>
              </p>
              <p>
                The Redressal team shall get in touch with the candidate /
                emigrant within 24 hours/ 1 working day in order to understand
                in detail the matter.
              </p>
              <p>
                Angel Gulf Jobs will ensure in co-ordination with the foreign
                employer the grievance is resolved at the earliest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrievanceForm;
