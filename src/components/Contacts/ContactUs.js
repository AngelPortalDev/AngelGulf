import React,{useState,useEffect} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import ContactUsImage from '../../assets/images/NewImages/contact-us.jpg';
import axios from 'axios';
import Select from 'react-select';


// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name should be at least 3 characters long")
    .required("Name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  country_code: Yup.string().required("Country code is required"),
  phone: Yup.string()
    .max(15, "Phone number should not exceed 15 digits")
    .required("Phone number is required"),
  enquiry_type: Yup.string().required("Enquiry type is required"),
  message: Yup.string(),
});

const ContactUs = () => {

    const [loading, setLoading] = useState(false);

  // Use Formik for form management
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country_code:"",
      phone: "",
      enquiry_type: "",
      message: "",
    },
    validationSchema,
    onSubmit: async(values) => {
      setLoading(true);
      const recaptchaToken = window.grecaptcha.getResponse();
    
      if (!recaptchaToken) {
        toast.error("Please complete the reCAPTCHA verification.", { hideProgressBar: true });
        setLoading(false);
        return;
      }
      // Handle form submission
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("country_code", values.country_code);
      formData.append("phone", values.phone);
      formData.append("enquiry_type", values.enquiry_type);
      formData.append("message", values.message);
      formData.append("g-recaptcha-response", recaptchaToken);

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}php/contact.php`,
          formData,
        );
        if (response.data) {
          formik.resetForm();
          window.grecaptcha.reset(); 
          toast.success("Thank you for reaching out! Our team will contact you shortly.", { autoClose: 1500, hideProgressBar:true });
        }
      } catch (err) {
        toast.error("Failed to Contact. Please try again later.",{hideProgressBar:true});
      }finally {
        setLoading(false);
      }
    },
  });

  const [countryList, setCountryList] = useState([]);

  const fetchCountries = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}php/country_master.php`
      );
      console.log("country List",res);
      setCountryList(res.data.country);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // Only fetch countries; reCAPTCHA v2 will auto-render via the script in public/index.html
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
      <ToastContainer />
      <Helmet>
        <title>Gulf Recruitment Agency, Job Consultancy for Gulf Countries</title>
        <meta
          name="keywords"
          content="Gulf Recruitment Agency, Job Consultancy for Gulf Countries, contact us, email us, enquiry, query, more information, Angel Gulf Jobs customer service"
        />
        <meta
          name="description"
          content="As the best Gulf Recruitment Agency feel free to contact us for more information. People looking for Job Consultancy for Gulf Countries can contact us and we will help you."
        />
        <link rel="canonical" href="https://www.angelgulfjobs.com/contact-us" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* CONTENT START */}
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: `url(${ContactUsImage})` }}>
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">Contact Us</h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>Contact Us</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}

        {/* CONTACT FORM */}
        <div className="section-full twm-contact-one">
          <div className="section-content">
            <div className="container">
              {/* CONTACT FORM */}
              <div className="contact-one-inner">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="contact-form-outer">
                      {/* TITLE START */}
                      <div className="section-head left wt-small-separator-outer">
                        <h2 className="wt-title blueuText">Send Us Your Requirements</h2>
                        <p>Feel free to contact us and we will get back to you as soon as we can.</p>
                      </div>
                      {/* TITLE END */}
                      <form onSubmit={formik.handleSubmit} className="cons-contact-form">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-3">
                              <input
                                name="name"
                                type="text"
                                className="form-control"
                                placeholder="Name*"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.name && formik.errors.name ? (
                                <div className="text-danger">{formik.errors.name}</div>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-3">
                              <input
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder="Email*"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.email && formik.errors.email ? (
                                <div className="text-danger">{formik.errors.email}</div>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            {/* <div className="form-group mb-3">
                              <input
                                name="phone"
                                type="number"
                                className="form-control"
                                placeholder="Phone Number*"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.phone && formik.errors.phone ? (
                                <div className="text-danger">
                                  {formik.errors.phone}
                                </div>
                              ) : null}
                            </div> */}
                              {/* <div className="form-group">
                                <label>Mobile Number</label>
                                <div className="d-flex">
                                <select
                                  className="form-select form-control"
                                  name="country_code"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.country_code}
                                  style={{ width: "25%", height:'55px', padding:'20px',borderTopRightRadius:'0px', borderBottomRightRadius:'0px', borderRight:'1px solid rgb(234 234 234)'  }}
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
                                    name="phone"
                                    type="number"
                                    placeholder="1234567890"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                    style={{ width: "75%",borderTopLeftRadius:'0px', borderBottomLeftRadius:'0px' }}
                                  />
                                </div>
              
                                  {formik.touched.country_code && formik.errors.country_code && (
                                    <div className="text-danger mt-1">{formik.errors.country_code}</div>
                                  )}
                                  {formik.touched.phone && formik.errors.phone && (
                                    <div className="text-danger mt-1">{formik.errors.phone}</div>
                                  )}

                                  <small className="form-text text-muted">
                                    Mobile number should not be greater than 15 digits.
                                  </small>
                              </div> */}
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
                            name="phone"
                            type="number"
                            placeholder="1234567890"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
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
                        {formik.touched.phone && formik.errors.phone && (
                          <div className="text-danger">{formik.errors.phone}</div>
                        )}
                      </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group mb-3">
                              <select
                                className="form-select form-control"
                                name="enquiry_type"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.enquiry_type}
                              >
                                <option value="">Select an Option*</option>
                                <option value="Want to Hire a Candidate">Want to Hire a Candidate</option>
                                <option value="Looking for a Job">Looking for a Job</option>
                              </select>
                              {formik.touched.enquiry_type && formik.errors.enquiry_type ? (
                                <div className="text-danger">
                                  {formik.errors.enquiry_type}
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mb-3">
                              <textarea
                                name="message"
                                className="form-control"
                                rows={3}
                                placeholder="Remark"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mb-3">
                              <div
                                className="g-recaptcha"
                                data-sitekey="6LeAhhIrAAAAAN1mLRktx4e7nuoeQPIuP-DsC8FT"
                                data-theme="light"
                              ></div>
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

                  {/* CONTACT INFO */}
                  <div className="col-lg-6 col-md-12">
                    <div className="contact-info-wrap">
                      <div className="contact-info">
                        <div className="contact-info-section">
                          <div className="c-info-column">
                            <div className="c-info-icon">
                              <i className="fas fa-map-marker-alt" />
                            </div>
                            <h3 className="twm-title">Address:</h3>
                            <p>716, Master Mind 5, Near Lake View III Apt, Royal Palms, Aarey Colony, Goregaon East, Mumbai - 65</p>
                          </div>
                          {/* <div className="c-info-column">
                            <div className="c-info-icon custome-size">
                              <i className="fas fa-mobile-alt" />
                            </div>
                            <h3 className="twm-title">Phone</h3>
                            <p>
                              <a href="tel:+216-761-8331">+91-22 40115750</a>
                            </p>
                          </div> */}
                          <div className="c-info-column">
                            <div className="c-info-icon">
                              <i className="fas fa-envelope" />
                            </div>
                            <h3 className="twm-title">Email Id:</h3>
                            <p>
                              <a href="mailto:aashna@angelgulfjobs.com">
                                aashna@angelgulfjobs.com
                              </a>
                            </p>
                          </div>
                          <div className="c-info-column">
                            <div className="c-info-icon">
                            <i class="fa-brands fa-whatsapp"></i>
                            </div>
                            <h3 className="twm-title"> WhatsApp channel:</h3>
                            <p>
                              <a href="https://whatsapp.com/channel/0029Va9inuu6xCSXEKgRio1A" target='_blank' rel="noreferrer" style={{ color:'#009BD4', wordWrap:'break-word' }}>
                              Join our WhatsApp Channel
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="gmap-outline">
          <div className="google-map">
            <div style={{ width: '100%' }}>
              <iframe
                height={460}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7538.032726772921!2d72.884693!3d19.150761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b792c50a87b5%3A0xba96c8415c38d582!2sAngel%20Gulf%20Jobs%20%7C%20Gulf%20job%20consultancy%20in%20mumbai!5e0!3m2!1sen!2sin!4v1736517051235!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map showing location of Angel Gulf Jobs"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* CONTENT END */}
    </div>
  );
};

export default ContactUs;
