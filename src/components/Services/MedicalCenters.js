/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import medicalAddImg from '../../assets/images/backgroundImages/gamce-medical-centers.jpg';
import medicalAddImg2 from "../../assets/images/GCC-medical-test.png";
import medicalAddImg from '../../assets/images/NewImages/medicalCenter.avif';


import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const mumbaiCenters = [
  {
    name: "A to Z Diagnostic Centre",
    address:
      "1st Floor, Harchandrai House 81, Queens Road, Marine Lines (E), Mumbai – India",
  },
  {
    name: "Al Amal Diagnostic Centre",
    address:
      "Kanakia Zillion,A wing, 101/102, 1st, floor, BKC Annex, Junction of CST Road, & LBS Marg, Kurla, Mumbai – India",
  },
  {
    name: "Al-Salaam Diagnostics",
    address:
      "Commercial Premises No.01, first Floor, ‘C’ Wing, Greenstone Heritage, Opp. Haj House, M.R.A. Road, Mumbai – India",
  },
  {
    name: "Ashwini Clinic",
    address:
      "1st Floor, Bhupesh Gupta Bhawan, 85, Sayani Road, Leningrad Chowk, Prabhadevi, Mumbai-400025. India",
  },
  {
    name: "Bahrainwala’s Super Speciality Clinic",
    address:
      "Hermes House 2nd Floor,B-3 Mama Paramanand Marg, Opera House,Near Charni Rd Station. Mumbai 4000 004 INDIA,Mumbai,India",
  },
  {
    name: "Bhatia Medical Centre",
    address:
      "7, Geeta A. Ground Floor, Ramabai Pandit Road, Gamdevi, Mumbai – 400 007, India.",
  },
  {
    name: "Chouhan Clinic",
    address: "OFFICE NO.13 ,FIRUZ ARA,GROUND FLOOR ,M.K.ROAD",
  },
  {
    name: "Clinical Diagnostic Centre",
    address:
      "First Floor, Mahila Vikas Mandal Building, Plot 1, Jagannath Bhosale Road Near Mantralaya, Nariman Point Mumbai 400-021, India.",
  },
  {
    name: "Dr. Alva’s Clinic",
    address:
      "DTC Building, Sitaram Mill Compound, N.M.Joshi Marg, near HP Petrol Pump, Next to HDFC Bank,",
  },
  {
    name: "Dr. Padaria’s Medical Consultancy Services",
    address:
      "1st floor, Elegant Building, Next to Mumbai Central Railway Station, Dr.A.N.Nair Road Mumbai 400011",
  },
  {
    name: "Dr. Qureshi Medical Checkup Centre",
    address:
      "Mercury Apartments, Commercial Premises, 183/191 Maulana Azad Road (Duncan Road), In between Nagpada Junction and Two tank, Mumbai – 400008,Mumbai,India",
  },
  {
    name: "Fulara Medicare Clinic",
    address:
      "G-B/2, Gold Coin, B Block, Ground Floor, Opp. Sobo Shopping Centre, Tardeo, Mumbai – 400034 (India)",
  },
  {
    name: "Gulshan Medicare – Mumbai",
    address: "107/109, Embassy Centre, Nariman Point, Mumbai, India",
  },
  {
    name: "K. N. Diagnostic Centre Pvt. Ltd.",
    address:
      "1/1, Unity House, 8, Mama Parmanand Marg, Above State Bank of India, Opera House, Mumbai-400004, India",
  },
  {
    name: "Kaifak Medicare",
    address:
      "Office no. 4/18, Tulsiani Chambers, Ground floor, 212 – Free Press Journal Marg, Nariman Point, Mumbai- 400 021, Mumbai, India",
  },
  {
    name: "Medicare Diagnostic Centre",
    address:
      "Kanakia Zillion Phase II, F Wing, 119, First Floor, L.B.S. Road, Next to Kurla Bus Depot, Kurla West, Mumbai 400 070, India",
  },
  {
    name: "Modern Diagnostics",
    address:
      "103-A, Crystal Residency, 65A Dockyard Road, Next to Mazgaon Garden, Near Dockyard Road Rly Stn (W), Mazgaon, Mumbai 400010, INDIA",
  },
  {
    name: "Mohammadi Health Care Systems",
    address: "Moon Building, 1st FLoor, 798 Mori Road Mahim (W), Bombay 400016.",
  },
  {
    name: "Shastari Medical Centre",
    address:
      "Shop No. 5/6, Ground Floor, Shivam Centrium, Opp. Kalpita Enclave, Koldongri, Andheri Sahar Road, Andheri (E), Mumbai- India.",
  },
  {
    name: "Zaff Jay Medical Services",
    address:
      "1st Floor, CJ Plaza Building, Apsara Complex, Dr Dadasaheb Bhadkamkar Marg, Grant Road (East), Mumbai 400007, Maharashtra, India",
  },
];

const infoCardClasses = "bg-white border rounded-3 shadow-sm p-4 p-md-5 mb-4";
const unorderedListStyle = { listStyleType: "disc" };
const orderedListStyle = { listStyleType: "decimal" };

const MedicalCenters = () => {
  return (
    <div>

  <Helmet>
    <title>GCC Medical Test (Wafid/GAMCA) for Employment Visa | Guide & Centres</title>
    <meta
      name="description"
      content="Complete guide to the GCC Wafid (GAMCA) medical test for employment visas. Learn booking steps, costs, required documents, validity, and approved centres in India."
    />
    <meta
      name="keywords"
      content="GCC medical test, Wafid medical test, GAMCA medical test, Wafid appointment India, Wafid Medical for GCC countries, GAMCA medical appointment Mumbai, Medical test for Gulf countries, Wafid medical certificate, GCC visa medical test, Wafid test validity period, GCC medical report online"
    />
    <link rel="canonical" href="https://www.angelgulfjobs.com/gamca-medical-centre" />
    <meta name="revisit-after" content="7 days" />
    <meta name="robots" content="index, follow" />
  </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${medicalAddImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">GCC Medical Test for Employment Visa</h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <NavLink to='/'>Home</NavLink>
                  </li>
                  <li>GCC Medical Test for Employment Visa</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}
        {/* Employer Detail START */}
        <div className="section-full  p-t30 p-b50 bg-white">
          <div className="container">
            <div className="section-content">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-10 col-md-12">
                  {/* Candidate detail START */}
                  <div className="cabdidate-de-info">
                    <section className={infoCardClasses}>
                      <p>
                        Angel Gulf Job, a licensed recruitment agency for Gulf countries, assists with Gulf job placement, visa documentation, and Wafid medical guidance, ensuring that every candidate meets GCC medical test requirements.
                      </p>
                      <p>
                        If you are planning to work or reside in a Gulf nation such as Saudi Arabia, UAE, Kuwait, Oman, Qatar, or Bahrain, one of the first and most crucial steps is scheduling your Wafid medical test (formerly known as the GAMCA medical test). This process is mandatory for anyone applying for a GCC employment visa and must be completed only at medical centres approved by Wafid (GAMCA).
                      </p>
                      <p>
                        The GCC medical test is an official medical examination required by the Gulf Cooperation Council (GCC) countries to ensure that foreign nationals are medically fit before obtaining a work visa or family visa. It screens applicants for infectious diseases and other health conditions to protect public health in the region.
                      </p>
                      <p>
                        Wafid (formerly known as the GAMCA medical test) is the official online health screening platform created by the Gulf Health Council (GHC). It helps expatriates going to GCC nations for employment, residency, or family visas to complete their medical exams smoothly before departure. For Qatar, medicals and biometrics are completed at the Qatar Visa Centre (QVC) in India.
                      </p>
                      <p>
                        In India, applicants often use Wafid India (wafidindia.com) to book an appointment for the required pre-departure medical tests.
                      </p>
                      <p>
                        For details on Qatar Visa Centre (QVC), visit: 
                        <a
                          href="https://www.qatarvisacenter.com/"
                          className="text-primary fw-semibold"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Qatar Visa Centre (QVC)
                        </a>
                      </p>
                    </section>
                    <section className={infoCardClasses}>
                      <h3 className="twm-s-title mb-3">1. Why is the Wafid (GAMCA) India Medical Test mandatory for GCC Countries?</h3>
                      <p>
                        All GCC governments require foreign nationals applying for a GCC employment visa to undergo a Gulf Health Council-approved medical examination.
                      </p>
                      <p className="mb-2">The Wafid medical test for Gulf countries ensures:</p>
                      <ul className="ps-4 mb-3" style={unorderedListStyle}>
                        <li className="mb-1">Authenticity and digital verification of medical reports</li>
                        <li className="mb-1">Early detection of infectious diseases such as HIV, Hepatitis, Tuberculosis (TB), and high blood pressure</li>
                        <li className="mb-1">Protection of the host country’s public health</li>
                        <li className="mb-1">Faster and more efficient visa processing for Gulf Cooperation Council (GCC) countries</li>
                      </ul>
                      <p>Without an approved Wafid or GAMCA medical report, your GCC visa application may be delayed or rejected.</p>
                    </section>
                    <section className={infoCardClasses}>
                      <h3 className="twm-s-title mb-3">2. How to book a Wafid medical for GCC countries in India?</h3>
                      <p>
                        Booking a Wafid appointment in India for your GCC medical test is simple and completely online. Follow these steps:
                      </p>
                      <ol className="ps-4 mb-3" style={orderedListStyle}>
                        <li className="mb-1">
                          Visit the Official Indian Website: 
                          <a
                            href="https://wafidindia.com"
                            className="text-primary fw-semibold"
                            target="_blank"
                            rel="noreferrer"
                          >
                            wafidindia.com
                          </a>
                        </li>
                        <li className="mb-1">Click on ‘Book Medical Appointment’</li>
                        <li className="mb-1">Select your country (India) and enter your passport details.</li>
                        <li className="mb-1">Choose your Visa Type: Employment, Residency, or Family.</li>
                        <li className="mb-1">Pay the non-refundable fees through online payment</li>
                        <li className="mb-1">Automatic Centre Assignment: The system will assign you a Gulf Health Council-approved medical centre (for example, in Mumbai, Delhi, or Hyderabad)</li>
                        <li className="mb-1">Print Your Slip: Download and print your appointment confirmation slip (Wafid slip). Bring this with you to your medical appointment.</li>
                      </ol>
                      <div className="my-4">
                        <img
                          src={medicalAddImg2}
                          alt="GCC medical test illustration"
                          className="img-fluid w-100 rounded-4 shadow-sm"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      
                      <p>
                        Angel Gulf Jobs provides a list of approved Wafid/GAMCA centres in Mumbai. We aim to help candidates select verified facilities for their GCC medical test or pre-departure medical.
                      </p>
                    </section>
                    <section className={infoCardClasses}>
                      <h3 className="twm-s-title mb-3">3. What documents are required for the Wafid Medical test?</h3>
                      <p>When attending your Wafid medical test for GCC work visa, bring the following documents:</p>
                      <ol className="ps-4 mb-3" style={orderedListStyle}>
                        <li className="mb-2">Original Passport: Must be valid for at least 6 months</li>
                        <li className="mb-2">
                          Passport-Size Photograph
                          <ul className="ps-4 mt-2" style={unorderedListStyle}>
                            <li className="mb-1">A recent, coloured passport-size photo</li>
                            <li className="mb-1">Used for health test documentation</li>
                          </ul>
                        </li>
                        <li className="mb-2">
                          Full Medical History: Applicants may be asked to present their past medical reports or provide a detailed medical history.
                        </li>
                        <li className="mb-2">
                          Original Visa Copy
                          <ul className="ps-4 mt-2" style={unorderedListStyle}>
                            <li className="mb-1">Required for verification by the medical centre</li>
                            <li className="mb-1">In some cases, an employment visa or application slip may be needed.</li>
                          </ul>
                        </li>
                        <li className="mb-2">
                          GAMCA / Wafid Medical Slip
                          <ul className="ps-4 mt-2" style={unorderedListStyle}>
                            <li className="mb-1">You must book your medical test online</li>
                            <li className="mb-1">After booking, print the medical slip and carry it to the centre</li>
                          </ul>
                        </li>
                      </ol>
                      <p>
                        Tip from Angel Gulf Job: Arrive 30 minutes early, carry extra photocopies, and ensure that your passport number matches on all documents to avoid administrative delays.
                      </p>
                    </section>
                    <section className={infoCardClasses}>
                      <h3 className="twm-s-title mb-3">4. What are the GCC visa Medical Tests included in the Wafid examination?</h3>
                      <p>
                        The Wafid medical panel for the Gulf Cooperation Council (GCC) countries includes standard medical tests approved by the Gulf Health Council. These medical exams are designed to determine whether you are medically fit for employment or residence in the GCC and for travelling to GCC countries.
                      </p>
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Type of Test</th>
                              <th>Purpose</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Chest X-ray</td>
                              <td>Detects Tuberculosis (TB)</td>
                            </tr>
                            <tr>
                              <td>Blood Tests</td>
                              <td>Screens for HIV, Hepatitis B & C, Syphilis, Malaria</td>
                            </tr>
                            <tr>
                              <td>Urine Test</td>
                              <td>Checks general health and drug traces</td>
                            </tr>
                            <tr>
                              <td>Physical Exam</td>
                              <td>Confirms overall medical fitness and identifies underlying medical conditions</td>
                            </tr>
                            <tr>
                              <td>Pregnancy Test (for women)</td>
                              <td>Ensures safety and compliance with employment categories</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p>
                        Results are usually available within 2–5 working days and are uploaded automatically to the GCC Embassy Portal of the destination country for visa verification. You can also download your GCC medical report online.
                      </p>
                    </section>
                    <section className={infoCardClasses}>
                      <h3 className="twm-s-title mb-3">5. What is the Wafid Medical Certificate Validity period and the Re-Examination process?</h3>
                      <p>A Wafid test validity period is generally valid for 60-90 days (about 3 months) from the date of issue.</p>
                      <p>
                        If your Wafid medical report shows “UNFIT”, you may reapply after medical recovery, following the Gulf Health Council’s official re-examination policy.
                      </p>
                      <p>
                        Always double-check that your updated Wafid report has been uploaded correctly in the system. It prevents mismatched data during embassy or employer verification.
                      </p>
                    </section>
                    <section className={infoCardClasses}>
                      <h3 className="twm-s-title mb-3">6. What is the total Cost for the GAMCA / Wafid Medical Test for Gulf Countries</h3>
                      <p>Total Cost of GAMCA (Wafid) Medical Test</p>
                      <ol className="ps-4 mb-3" style={orderedListStyle}>
                        <li className="mb-3">
                          GAMCA / Wafid Registration Fees
                          <ul className="ps-4 mt-2" style={unorderedListStyle}>
                            <li className="mb-1">Registration fees start from ₹1,600</li>
                            <li className="mb-1">This amount usually includes 2% tax and service charges</li>
                          </ul>
                        </li>
                        <li className="mb-3">
                          Medical Examination Fees
                          <ul className="ps-4 mt-2" style={unorderedListStyle}>
                            <li className="mb-1">Medical test fees start from ₹5,500</li>
                            <li className="mb-1">Costs vary depending on the country, medical centre, and additional tests required</li>
                          </ul>
                        </li>
                        <li className="mb-3">
                          Total Estimated Cost
                          <ul className="ps-4 mt-2" style={unorderedListStyle}>
                            <li className="mb-1">When you combine both:</li>
                            <li className="mb-1">₹1,600 (registration fees)</li>
                            <li className="mb-1">₹5,500 or more (medical test fees)</li>
                            <li className="mb-1">The total cost of the GAMCA medical test is generally ₹7,500 or more.</li>
                          </ul>
                        </li>
                      </ol>
                      <p>⚠ Important Notes</p>
                      <p>Fees and document requirements vary by country</p>
                      <p>Charges may differ based on the medical centre, country, or any additional tests required.</p>
                      <p>Always check the official Wafid (formerly GAMCA) website when booking your appointment.</p>
                      <p>Only visit authorised medical centres approved by Gulf countries.</p>
                      <p>Make sure your documents are accurate to avoid delays in processing your medical clearance.</p>
                      <p>Source: Wafid Fees structure</p>
                    </section>
                    <section className={infoCardClasses}>
                      <h3 className="twm-s-title mb-3">Important Notes for GCC Applicants</h3>
                      <p>
                        Pre-arrival vs Post-arrival: Some GCC countries, including Saudi Arabia, the UAE, and Kuwait, rely on pre-arrival WAFID medical exams conducted before travel. Others, such as Qatar, Oman, and Bahrain, require both pre-departure and post-arrival medical checks to confirm health status and health issues after entry.
                      </p>
                      <p>
                        Job-category add-ons: Certain professions, especially in healthcare, food handling, and childcare, may require additional medical tests specific to each country, beyond the standard WAFID examination panel.
                      </p>
                      <p>
                        Centre Verification: Only Wafid-accredited centres are accepted by GCC embassies for medical slip generation. Avoid local or unregistered clinics claiming to be “GAMCA-approved,” as their reports are not valid for GCC visas.
                      </p>
                      <p>
                        To know more about the post-arrival medical test, visit: 
                        <a
                          href="https://www.qatarvisacenter.com/"
                          className="text-primary fw-semibold"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Qatar Visa Centre (QVC)
                        </a>
                      </p>
                      <p>
                        Scheduling your Wafid India medical appointment is the first step toward obtaining a Gulf work visa and a smooth relocation process. This GCC Medical test is your official gateway to employment in GCC countries.
                      </p>
                      <p>
                        By applying through overseas recruitment agencies like Angel Gulf Job, you ensure that every stage, from Wafid appointment booking to visa stamping and deployment, is handled professionally and accurately.
                      </p>
                    </section>
                    <section className={`${infoCardClasses} bg-light`}>
                      <h2 className="text-center mt-2 mb-4 blueuText">
                        GAMCA Medical Appointment in Mumbai: Approved Centres
                      </h2>
                      <div className="row">
                        {mumbaiCenters.map((center, index) => (
                          <div
                            className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4"
                            key={`${center.name}-${index}`}
                          >
                            <div className="p-4 h-100 bg-white border rounded-4 shadow-sm">
                              <p className="fw-semibold mb-2">{center.name}</p>
                              <p className="mb-0 text-muted">
                                {center.address.split("\n").map((line, lineIndex, lines) => (
                                  <React.Fragment key={`${center.name}-${lineIndex}`}>
                                    {line}
                                    {lineIndex < lines.length - 1 && <br />}
                                  </React.Fragment>
                                ))}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p>
                        Source: 
                        <a
                          href="https://wafidindia.com/wafid-approved-medical-centers-in-mumbai/"
                          className="text-primary fw-semibold"
                          target="_blank"
                          rel="noreferrer"
                        >
                          https://wafidindia.com/wafid-approved-medical-centers-in-mumbai/
                        </a>
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Employer Detail END */}
      </div>
      {/* CONTENT END */}
    </div>
  );
};

export default MedicalCenters;
