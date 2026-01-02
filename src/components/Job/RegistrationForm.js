import React, { useState,useEffect } from "react";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from 'react-select';
import { Helmet } from "react-helmet-async";


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


  const countryOptions = countryList.map(country => ({
    value: country.country_code,
    label: `${country.country_code} - ${country.country_name}`,
  }));


  return (
    <>
     <Helmet>
        <title>Candidate Registration | Start Your Gulf Career | Angel Gulf Jobs</title>
        <link rel="canonical" href="https://www.angelgulfjobs.com/registration" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index, follow" />
      </Helmet>
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
                            name="whatsup_no"
                            type="number"
                            placeholder="Whatsapp Number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.whatsup_no}
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
                            <option value="BFSI">BFSI</option>
                            <option value="Banking">Banking</option>
                            <option value="Broking">Broking</option>
                            <option value="Financial Services">Financial Services</option>
                            <option value="FinTech">FinTech</option>
                            <option value="Insurance">Insurance</option>
                            <option value="Investment Banking">Investment Banking</option>
                            <option value="Venture Capital">Venture Capital</option>
                            <option value="Private Equity">Private Equity</option>
                            <option value="MFI">MFI (Micro Finance)</option>
                            <option value="NBFC">NBFC (Non Banking Financial Services)</option>
                            <option value="BPM">BPM</option>
                            <option value="BPO">BPO / Call Center</option>
                            <option value="KPO">KPO / Analytics</option>
                            <option value="Consumer">Consumer, Retail & Hospitality</option>
                            <option value="Consumer Durables">Consumer Durables / Electronics</option>
                            <option value="Cotton">Cotton / Cotton Mill</option>
                            <option value="FMCG">FMCG / F&B</option>
                            <option value="Food Processing">Food Processing</option>
                            <option value="Furnishings">Furnishings / Sanitaryware / Electricals</option>
                            <option value="Gems">Gems / Jewellery</option>
                            <option value="Gifts">Gifts / Toys / Stationary</option>
                            <option value="Hospitality">Hospitality</option>
                            <option value="Hotel">Hotel / Restaurant</option>
                            <option value="Leather">Leather</option>
                            <option value="Personal Care">Personal Care / Beauty</option>
                            <option value="Retail">Retail</option>
                            <option value="Sculpture">Sculpture / Craft</option>
                            <option value="Sports">Sports / Fitness</option>
                            <option value="Textile">Textile / Garments / Fashion</option>
                            <option value="Travel">Travel / Tourism</option>
                            <option value="Education">Education</option>
                            <option value="Education Training">Education / Training</option>
                            <option value="E-Learning">E-Learning</option>
                            <option value="Healthcare">Healthcare & Life Sciences</option>
                            <option value="Medical">Medical / Healthcare</option>
                            <option value="Pharma">Pharma / Biotech</option>
                            <option value="Veterinary">Veterinary Science / Pet Care</option>
                            <option value="Infrastructure">Infrastructure, Transport & Real Estate</option>
                            <option value="Aviation">Aviation / Airline</option>
                            <option value="Engineering">Engineering / Construction</option>
                            <option value="Environment">Environment / Waste Management</option>
                            <option value="Industrial Design">Industrial Design</option>
                            <option value="Logistics">Logistics / Courier / Transportation</option>
                            <option value="Oil & Gas">Oil & Gas / Petroleum</option>
                            <option value="Power">Power / Energy</option>
                            <option value="Railways">Railways</option>
                            <option value="Real Estate">Real Estate</option>
                            <option value="Shipping">Shipping</option>
                            <option value="Urban Transport">Urban Transport</option>
                            <option value="IT Services">IT Services & Consulting</option>
                            <option value="Manufacturing">Manufacturing & Production</option>
                            <option value="Auto Components">Auto Components</option>
                            <option value="Automation">Automation</option>
                            <option value="Automobile">Automobile / Auto Ancillaries</option>
                            <option value="Cement">Cement / Building Material</option>
                            <option value="Chemical">Chemical / Plastic / Rubber / Glass</option>
                            <option value="Defence">Defence & Aerospace</option>
                            <option value="Fertilizers">Fertilizers / Pesticides</option>
                            <option value="Metal">Metal / Iron / Steel</option>
                            <option value="Mining">Mining</option>
                            <option value="Paint">Paint</option>
                            <option value="Paper">Paper / Wood</option>
                            <option value="Printing">Printing / Packaging</option>
                            <option value="Media">Media, Entertainment & Telecom</option>
                            <option value="Advertising">Advertising / MR / PR / Events</option>
                            <option value="Animation">Animation</option>
                            <option value="Gaming">Gaming</option>
                            <option value="Media Dotcom">Media / Dotcom / Entertainment</option>
                            <option value="Telecom">Telecom / ISP</option>
                            <option value="Agriculture">Agriculture / Dairy</option>
                            <option value="Astrology">Astrology</option>
                            <option value="Export-Import">Export-Import / Trading</option>
                            <option value="Government">Government Department</option>
                            <option value="Merchant Navy">Merchant Navy</option>
                            <option value="Military">Military / Police / Arms & Ammunition</option>
                            <option value="NGO">NGO / Social Work</option>
                            <option value="Unskilled Labor">Unskilled Labor / Domestic Help</option>
                            <option value="Matrimony">Matrimony</option>
                            <option value="Fresher">Fresher (No Industry)</option>
                            <option value="Politics">Politics</option>
                            <option value="Quality Certification">Quality Certification</option>
                            <option value="Religion">Religion / Spirituality</option>
                            <option value="Professional Services">Professional Services</option>
                            <option value="Accounting">Accounting & Auditing</option>
                            <option value="Architecture">Architecture / Interior Design</option>
                            <option value="Facility Management">Facility management</option>
                            <option value="HVAC">Heat ventilation Air conditioning</option>
                            <option value="Legal">Legal</option>
                            <option value="Management Consulting">Management Consulting / Strategy</option>
                            <option value="Recruitment Services">Recruitment Services</option>
                            <option value="Security">Security / Detective Services</option>
                            <option value="Emerging Technologies">Emerging Technologies</option>
                            <option value="Internet">Internet / E-Commerce</option>
                            <option value="IT Hardware">IT - Hardware / Networking</option>
                            <option value="Semiconductors">Semiconductors</option>
                            <option value="Software Product">Software Product</option>
                            <option value="Staffing">Staffing</option>
                            <option value="Conglomerate">Conglomerate</option>
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
                        Once you add our Whatsapp Number to your contact list, please fill out the form above so that we can add your Name and Mobile number to our Whatsapp Broadcast list.
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
    </>
   
  );
};

export default RegistrationForm;
