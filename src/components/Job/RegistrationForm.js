import React, { useState,useEffect } from "react";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { get } from "jquery";

const RegistrationForm = () => {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    terms: Yup.boolean().oneOf([true], "You must accept the Terms and conditions"),
    whatsup_no: Yup.string()
      .required("Whatsapp number is required")
      .max(15, "Whatsapp number cannot be more than 15 digits"),
    country_code: Yup.string().required("You must select the country code"),
    full_name: Yup.string().required("Full name is required"),
    category: Yup.string().required("Industry is required"),
    position: Yup.string().required("Position is required"),
    position_Name: Yup.string().required("Position name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    current_location: Yup.string().required("Current location is required"),
    gulf_exp: Yup.number().min(0, "Must be positive").required("Gulf experience is required"),
    india_exp: Yup.number().min(0, "Must be positive").required("India experience is required"),
    resume: Yup.mixed()
      .required("Resume is required")
      .test("fileSize", "File size should not exceed 2MB", (value) => {
        return value && value.size <= 2 * 1024 * 1024;
      }),
  });

  const formik = useFormik({
    initialValues: {
      terms: false,
      whatsup_no: "",
      country_code:'',
      full_name: "",
      category: "",
      position: "",
      position_Name: "",
      email: "",
      current_location: "",
      gulf_exp: "",
      india_exp: "",
      resume: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      if (!resume) {
        formik.setFieldError("resume", "Resume is required");
        return;
      }
      console.log("values",values)
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });
      // formData.append("resume", resume);
      // console.log("formData",formData);
      try {
          const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}php/registration.php`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        // console.log("response", response);

          if (!response.data.success) {
            toast.error(response.data.message || "Submission failed.", { hideProgressBar: true });
            setLoading(false);
            return;
          }
        
          toast.success("Form submitted successfully!",{hideProgressBar:true});
          formik.resetForm();
          setResume(null);
      } catch (error) {
        toast.error("Submission failed. Try again.",{hideProgressBar:true});
      } finally {
        setLoading(false);
      }
    },
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [], "application/msword": [], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [] },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file && file.size <= 2 * 1024 * 1024) {
        setResume(file);
        formik.setFieldValue("resume", file);
      } else {
        toast.error("File size must be under 2MB",{hideProgressBar: true});
      }
    },
    maxFiles: 1,
  });


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
      toast.error("Submission failed. Try again.",{hideProgressBar:true});
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const [positionList, setPositionList] = useState([]);

  const fetchPositions = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}php/position.php`
      );
      let getAllPositions = res.data.position;
      getAllPositions.map((position)=>position.name);
      setPositionList(getAllPositions);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPositions();
  }, []);



  return (
    <form onSubmit={formik.handleSubmit}>
      <ToastContainer />
      <div className="modal-header mt-3 d-flex mx-auto" style={{ maxWidth: "900px" }}>
        <h3 className="modal-title" id="sign_up_popupLabel-3">
          CANDIDATE REGISTRATION FORM
        </h3>
      </div>
      <div className="modal-body p-3 d-flex mx-auto" style={{ maxWidth: "900px" }}>
        <div className="twm-right-section-panel-wrap2">
          <div className="twm-right-section-panel site-bg-primary">
            <div className="panel panel-default">
              <div className="panel-heading wt-panel-heading p-a20">
                <h4 className="panel-title m-a0">Registration</h4>
              </div>
              <div className="panel-body wt-panel-body p-a20">
                <div className="twm-tabs-style-1">
                  <div className="row">
                    {/* Full Name */}
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Full Name</label>
                        <input
                          className="form-control"
                          name="full_name"
                          type="text"
                          placeholder="Full Name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.full_name}
                        />
                        {formik.touched.full_name && formik.errors.full_name && <div className="text-danger">{formik.errors.full_name}</div>}
                      </div>
                    </div>

                    {/* WhatsApp Number */}
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Whatsapp Number</label>
                        <div className="d-flex">
                        <select
                                  className="form-select form-control"
                                  name="country_code"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.country_code}
                                  style={{ width: "25%", height:'60px', padding:'20px',borderTopLeftRadius:'10px', borderBottomLeftRadius:'10px', borderRight:'1px solid rgb(234 234 234)'  }}
                                >
                                  <option value="">Select Country Code</option>
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
                          name="whatsup_no"
                          type="number"
                          placeholder="Whatsapp Number"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.whatsup_no}
                          style={{ width: "75%",borderTopLeftRadius:'0px', borderBottomLeftRadius:'0px' }}
                        />
                        </div>
                        {formik.touched.country_code && formik.errors.country_code && (
                            <div className="text-danger mt-1">{formik.errors.country_code}</div>
                        )}
                        {formik.touched.whatsup_no && formik.errors.whatsup_no && (
                          <div className="text-danger">{formik.errors.whatsup_no}</div>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          className="form-control"
                          name="email"
                          type="text"
                          placeholder="Email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email && <div className="text-danger">{formik.errors.email}</div>}
                      </div>
                    </div>

                    {/* Category */}
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Industry</label>
                        <select 
                        className="form-control form-select"
                        name="category"
                        // type="text"
                        placeholder="Industry"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.category}
                        style={{ height:'60px', borderRadius:'10px', padding:'20px', borderRight:'1px solid rgb(234 234 234)'  }}
                        >
                            <option value="">Select an Option</option>
                            <option value="Civil">Civil</option>
                            <option value="Mechanical">Mechanical</option>
                            <option value="Electrical">Electrical</option>
                            <option value="Instrumentation">Instrumentation</option>
                            <option value="IT">IT</option>
                            <option value="Admin/HR">Admin/HR</option>
                            <option value="Safety">Safety</option>
                            <option value="Project/Planning/Staff">Project/Planning/Staff</option>
                            <option value="Design">Design</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Hospitality">Hospitality</option>
                            <option value="Security">Security</option>
                            <option value="Logistics">Logistics</option>
                            <option value="Operators/Drivers">Operators/Drivers</option>
                            <option value="Other">Other</option>
                        </select>
                        {formik.touched.category && formik.errors.category && (
                          <div className="text-danger">{formik.errors.category}</div>
                        )}
                      </div>
                    </div>

                    {/* Position */}
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Position</label>
                        <select
                          className="form-select form-control"
                          name="position"
                          onChange={(e) => {
                            const selectedValue = JSON.parse(e.target.value);
                            formik.setFieldValue("position", selectedValue.id); 
                            formik.setFieldValue("position_Name", selectedValue.name);
                          }}
                          onBlur={formik.handleBlur}
                          value={JSON.stringify({ id: formik.values.position, name: formik.values.position_Name })}
                          style={{ height: "60px", borderRadius: "10px", padding: "20px", borderRight: "1px solid rgb(234 234 234)" }}
                        >
                          <option value="">Select Position</option>
                          {positionList.length > 0 ? (
                            positionList.map((position) => (
                              <option key={position.id} value={JSON.stringify({ id: position.id, name: position.name })}>
                                {position.name}
                              </option>
                            ))
                          ) : (
                            <option value="">Loading positions...</option>
                          )}
                        </select>

                        {/* <input
                          className="form-control"
                          name="positionfrhtn"
                          type="text"
                          placeholder="Position"
                        //   onChange={formik.handleChange}
                        //   onBlur={formik.handleBlur}
                        //   value={formik.values.position}
                        /> */}
                        {formik.touched.position && formik.errors.position && (
                          <div className="text-danger">{formik.errors.position}</div>
                        )}
                      </div>
                    </div>

                    {/* Current Location */}
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Current Location</label>
                        <input
                          className="form-control"
                          name="current_location"
                          type="text"
                          placeholder="Current Location"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.current_location}
                        />
                        {formik.touched.current_location && formik.errors.current_location && (
                          <div className="text-danger">{formik.errors.current_location}</div>
                        )}
                      </div>
                    </div>

                    {/* Gulf Experience */}
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Gulf Experience (in years)</label>
                        <input
                          className="form-control"
                          name="gulf_exp"
                          type="number"
                          placeholder="Gulf Experience"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.gulf_exp}
                        />
                        {formik.touched.gulf_exp && formik.errors.gulf_exp && (
                          <div className="text-danger">{formik.errors.gulf_exp}</div>
                        )}
                      </div>
                    </div>

                    {/* India Experience */}
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>India Experience (in years)</label>
                        <input
                          className="form-control"
                          name="india_exp"
                          type="number"
                          placeholder="India Experience"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.india_exp}
                        />
                        {formik.touched.india_exp && formik.errors.india_exp && (
                          <div className="text-danger">{formik.errors.india_exp}</div>
                        )}
                      </div>
                    </div>

                    {/* Upload Resume */}
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Upload Resume</label>
                        <div {...getRootProps()} className="dropzone border-dashed p-3 text-center position-relative">
                          <input {...getInputProps()} name="resume" accept=".pdf, .doc, .docx" type="file" />
                          <p 
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                cursor: "pointer",
                              }}
                          >Drag & Drop your resume here or click to upload</p>
                        </div>
                        {resume && (
                            <p className="mt-2 text-success">
                                Selected File: {resume.name}
                            </p>
                            )}
                        {formik.touched.resume && formik.errors.resume && (
                          <div className="text-danger">{formik.errors.resume}</div>
                        )}
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="checkbox"
                          name="terms"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          checked={formik.values.terms}
                        />
                        <label>
                          <p className="ms-2 mb-0">
                          I agree to the Terms and Conditions
                          </p>
                        </label>
                        {/* WhatsApp Instruction */}
                        <p className="mt-2 mb-1" style={{ fontSize:'13px' }}>
                        Please click on the below link to save our Official Whatsapp Number to your contact list:
                        <br />
                        <a href="https://wa.me/9967307972" target="_blank" rel="noopener noreferrer" className="text-primary">
                            https://wa.me/9967307972
                        </a>
                        </p>
                        
                        <p className="mt-2 mb-1" style={{ fontSize:'13px' }}>
                        Once you add our Whatsapp Number to your contact list, please fill out the form below so that we can add your Name and Mobile number to our Whatsapp Broadcast list.
                        </p>
                        {formik.touched.terms && formik.errors.terms && (
                            <div className="text-danger">{formik.errors.terms}</div>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <button type="submit" className="site-button" disabled={loading}>
                        {loading ? "Submitting..." : "Send Application"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </form>
  );
};

export default RegistrationForm;
