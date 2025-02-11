<<<<<<< HEAD
import React from "react";
import { NavLink } from "react-router-dom";
import medicalImg from "../../assets/images/sitemap/Medical-&-Pharmaceutical-Industry.jpg";
import doctorsImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-doctors.jpg";
import nursesImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-nurses.jpg";
import pharmacistsImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-pharmacists.jpg";
import physiciansImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-physicians.jpg";
import surgeonsImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-surgeons.jpg";
import medicalRepresentativesImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-medical-representatives.jpg";
import paraMedicalStaffImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-para-medical-staff.jpg";
import labAssistantsImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-lab-assistants-jobs-in-gulflab-assistants.jpg";
import professorsImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-professors.jpg";
import researchAssociatesImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-research-associates.jpg";
import specialistDoctorsImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-specialist-doctors.jpg";
import anaesthesiologistImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-anaesthesiologist.jpg";
import biologicalScientistsImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-biological-scientists.jpg";
import medicalTranscriptionsImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-medical-transcriptions.jpg";
import bloodBankSpecialistsImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-blood-bank-specialists.jpg";
import healthInfTechniciansImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-health-inf-technicians.jpg";
import cardioTechniciansImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-cardio-technicians.jpg";
import medicalSocialWorkerImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-medical-social-worker.jpg";
import physicalTherapistsImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-physical-therapists.jpg";
import salesRepresentativesImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-sales-representatives.jpg";
import CarouselItems from "../common/CarouselItems";
import { Helmet } from "react-helmet";

const MedicalIndustry = () => {
    const images = [
        doctorsImg, nursesImg, pharmacistsImg, physiciansImg, surgeonsImg, 
        medicalRepresentativesImg, paraMedicalStaffImg, labAssistantsImg, 
        professorsImg, researchAssociatesImg, specialistDoctorsImg, 
        anaesthesiologistImg, biologicalScientistsImg, medicalTranscriptionsImg, 
        bloodBankSpecialistsImg, healthInfTechniciansImg, cardioTechniciansImg, 
        medicalSocialWorkerImg, physicalTherapistsImg, salesRepresentativesImg
    ];

    const titles = [
        "Doctors", "Nurses", "Pharmacists", "Physicians", "Surgeons", 
        "Medical Representatives", "Para Medical Staff", "Lab Assistants", 
        "Professors", "Research Associates", "Specialist Doctors", "Anaesthesiologist", 
        "Biological Scientists", "Medical Transcriptions", "Blood Bank Specialists", 
        "Health Inf Technicians", "Cardio Technicians", "Medical Social Worker", 
        "Physical Therapists", "Sales Representatives"
    ];

    const altTexts = [
        "Highest Paying Medical Jobs", "Anesthesiologist Jobs in Gulf", "Pharmacists Jobs In Gulf", 
        "Physicians Jobs In Gulf", "Surgeons Jobs In Gulf", "Medical Representatives Jobs In Gulf", 
        "Para Medical Staff Jobs In Gulf", "Lab Assistants Jobs In Gulf", "Professors Jobs In Gulf", 
        "Research Associates Jobs In Gulf", "Specialist Doctors Jobs In Gulf", "Anaesthesiologist Jobs In Gulf", 
        "Biological Scientists Jobs In Gulf", "Medical Transcriptions Jobs In Gulf", 
        "Blood Bank Specialists Jobs In Gulf", "Health Inf Technicians Jobs In Gulf", 
        "Cardio Technicians Jobs In Gulf", "Medical Social Worker Jobs In Gulf", 
        "Physical Therapists Jobs In Gulf", "Sales Representatives Jobs In Gulf"
    ];

  return (
    <div>
      <Helmet>
      <title>Highest Paying Medical Jobs, Anesthesiologist Jobs in Gulf</title>
<meta name="keywords" content="Highest Paying Medical Jobs, Anesthesiologist Jobs in Gulf, medical jobs, doctor jobs"/>
<meta name="description" content="Find and get to know about highest paying medical jobs at Angel Gulf Jobs. Duties & Responsibilities for anesthesiologist jobs in gulf countries."/>
<link rel="canonical" href="https://www.angelgulfjobs.com/medical-industry"/>
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${medicalImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">
                  Highest Paying Medical Jobs

                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Highest Paying Medical Jobs
                  </li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}
        <div>
          <div className="section-full p-t30 p-b50 bg-white">
            <div className="container">
              <div className="section-content">
                <div className="row">
                  <div>
                    <h4>
                    Industries We Serve

                    </h4>
                    <p>
                    Angel Gulf Jobs is a full-service overseas manpower agency promoted by highly experienced professionals having worked across different sectors in the Gulf region. The exposure derived by promoters in their work life across different sectors has helped them to provide services across a wide range of industries. As far as Gulf region is concerned, Angel Gulf Jobs serves all the top sectors including construction, oil & gas, hospitality, banking, shipping and more. Find and get to know about highest paying medical jobs at Angel Gulf Jobs. Duties & Responsibilities for anesthesiologist jobs in gulf countries. Above all, the biggest strength of Angel Gulf Jobs lies in its database of candidates which is spread across different work categories making it possible to serve almost all the important industries across entire Gulf & other regions.



                    </p>
                    
                  </div>
                  {/* Carousel in col-lg-3 */}
                  <div className="col-lg-6 col-md-12">
                    <div className="carousel-wrapper p-3">
                      <div className="carouselbackground">
                        <h5 className="text-center fw-semibold text-white py-2 px-1">
                        Here is a listing of major job categories in the medical
                        industry that we recruit for
                        </h5>
                      </div>

                      <CarouselItems
                        images={images}
                        titles={titles}
                        altTexts={altTexts}
                      />
                      {/*  */}
                    </div>
                  </div>
                  {/* Empty col-lg-9 */}
                  <div className="col-lg-6 col-md-12">
                    {/* This section is empty for now */}
                    <h4 className="mt-3 mt-md-0">
                    Medical Industry

                    </h4>
                    <p>
                    With increasing population in the GCC states, spending in private and public hospitals in the UAE will hit $12.5 billion in 2020, the second highest in the Gulf Cooperation Council (GCC) countries, according to consultants. As per the estimates from the Ministry of Health data in 2012, the market size for health care delivery services in the GCC will jump from $37 billion in 2012 to $56 billion in about six years. The health care market in Saudi Arabia will remain the biggest at $28.7 billion by 2020, while Kuwait’s inpatient and outpatient treatment expenditures ($6.9 billion) will be the third highest in the region, followed by Oman ($3.8 billion) and Qatar (2.7 billion).

                    </p>
                    
                  </div>
                  <p className="mt-2">
                  The ever increasing pressure on the healthcare industry in GCC states is generating tremendous demand for qualified doctors, nurses & other medical staff. The sourcing that has been done from the local market proves to be insufficient and the demand has been met usually through countries like India, Pakistan, UK & so on. The hospitals & medical centres are more concerned about the quality of the staff and are very generous in providing the best of salary packages, accommodation and other facilities. There are many agencies helping to bridge this gap however not all are well equipped to handle the requirements from the healthcare industry effectively.



                  </p>

                  <p>
                  We, at Angel Gulf Jobs are fully equipped to provide the best of qualified & trained medical professionals (doctors, nurses & other medical staff) within the stipulated time limits. We primarily source candidates through our own comprehensive job portal equipped with a large size updated database of medical professionals. We also make the best use of our external contacts to source the required candidates. In short, we, at Angel Gulf Jobs act as a trustworthy referral agent and enable the clients throughout the Gulf region to have an access to the best of medical talent across different technologies and job functions.



                  </p>
                
                 
                  <p>
                  Hospitals & medical centers in Gulf may send in their enquiry for our medical recruitment services  <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>
                  

                  <p>
                    As far as job seekers are concerned we take utmost care that
                    we only keep the latest jobs in the security industry in our
                    database and help them with the most rewarding career in the
                    industry. Job seekers may register with us for FREE
                    <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalIndustry;
=======
import React from "react";
import { NavLink } from "react-router-dom";
import medicalImg from "../../assets/images/sitemap/Medical-&-Pharmaceutical-Industry.jpg";
import doctorsImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-doctors.jpg";
import nursesImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-nurses.jpg";
import pharmacistsImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-pharmacists.jpg";
import physiciansImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-physicians.jpg";
import surgeonsImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-surgeons.jpg";
import medicalRepresentativesImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-medical-representatives.jpg";
import paraMedicalStaffImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-para-medical-staff.jpg";
import labAssistantsImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-lab-assistants-jobs-in-gulflab-assistants.jpg";
import professorsImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-professors.jpg";
import researchAssociatesImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-research-associates.jpg";
import specialistDoctorsImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-specialist-doctors.jpg";
import anaesthesiologistImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-anaesthesiologist.jpg";
import biologicalScientistsImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-biological-scientists.jpg";
import medicalTranscriptionsImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-medical-transcriptions.jpg";
import bloodBankSpecialistsImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-blood-bank-specialists.jpg";
import healthInfTechniciansImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-health-inf-technicians.jpg";
import cardioTechniciansImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-cardio-technicians.jpg";
import medicalSocialWorkerImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-medical-social-worker.jpg";
import physicalTherapistsImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-physical-therapists.jpg";
import salesRepresentativesImg from "../../assets/images/sitemap/medical/medical-&-pharmaceutical-industry-sales-representatives.jpg";
import CarouselItems from "../common/CarouselItems";
import { Helmet } from "react-helmet";

const MedicalIndustry = () => {
    const images = [
        doctorsImg, nursesImg, pharmacistsImg, physiciansImg, surgeonsImg, 
        medicalRepresentativesImg, paraMedicalStaffImg, labAssistantsImg, 
        professorsImg, researchAssociatesImg, specialistDoctorsImg, 
        anaesthesiologistImg, biologicalScientistsImg, medicalTranscriptionsImg, 
        bloodBankSpecialistsImg, healthInfTechniciansImg, cardioTechniciansImg, 
        medicalSocialWorkerImg, physicalTherapistsImg, salesRepresentativesImg
    ];

    const titles = [
        "Doctors", "Nurses", "Pharmacists", "Physicians", "Surgeons", 
        "Medical Representatives", "Para Medical Staff", "Lab Assistants", 
        "Professors", "Research Associates", "Specialist Doctors", "Anaesthesiologist", 
        "Biological Scientists", "Medical Transcriptions", "Blood Bank Specialists", 
        "Health Inf Technicians", "Cardio Technicians", "Medical Social Worker", 
        "Physical Therapists", "Sales Representatives"
    ];

    const altTexts = [
        "Highest Paying Medical Jobs", "Anesthesiologist Jobs in Gulf", "Pharmacists Jobs In Gulf", 
        "Physicians Jobs In Gulf", "Surgeons Jobs In Gulf", "Medical Representatives Jobs In Gulf", 
        "Para Medical Staff Jobs In Gulf", "Lab Assistants Jobs In Gulf", "Professors Jobs In Gulf", 
        "Research Associates Jobs In Gulf", "Specialist Doctors Jobs In Gulf", "Anaesthesiologist Jobs In Gulf", 
        "Biological Scientists Jobs In Gulf", "Medical Transcriptions Jobs In Gulf", 
        "Blood Bank Specialists Jobs In Gulf", "Health Inf Technicians Jobs In Gulf", 
        "Cardio Technicians Jobs In Gulf", "Medical Social Worker Jobs In Gulf", 
        "Physical Therapists Jobs In Gulf", "Sales Representatives Jobs In Gulf"
    ];

  return (
    <div>
      <Helmet>
      <title>Highest Paying Medical Jobs, Anesthesiologist Jobs in Gulf</title>
<meta name="keywords" content="Highest Paying Medical Jobs, Anesthesiologist Jobs in Gulf, medical jobs, doctor jobs"/>
<meta name="description" content="Find and get to know about highest paying medical jobs at Angel Gulf Jobs. Duties & Responsibilities for anesthesiologist jobs in gulf countries."/>
<link rel="canonical" href="https://www.angelgulfjobs.com/medical-industry"/>
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${medicalImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">
                  Highest Paying Medical Jobs

                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Highest Paying Medical Jobs
                  </li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}
        <div>
          <div className="section-full p-t30 p-b50 bg-white">
            <div className="container">
              <div className="section-content">
                <div className="row">
                  <div>
                    <h4>
                    Industries We Serve

                    </h4>
                    <p>
                    Angel Gulf Jobs is a full-service overseas manpower agency promoted by highly experienced professionals having worked across different sectors in the Gulf region. The exposure derived by promoters in their work life across different sectors has helped them to provide services across a wide range of industries. As far as Gulf region is concerned, Angel Gulf Jobs serves all the top sectors including construction, oil & gas, hospitality, banking, shipping and more. Find and get to know about highest paying medical jobs at Angel Gulf Jobs. Duties & Responsibilities for anesthesiologist jobs in gulf countries. Above all, the biggest strength of Angel Gulf Jobs lies in its database of candidates which is spread across different work categories making it possible to serve almost all the important industries across entire Gulf & other regions.



                    </p>
                    
                  </div>
                  {/* Carousel in col-lg-3 */}
                  <div className="col-lg-6 col-md-12">
                    <div className="carousel-wrapper p-3">
                      <div className="carouselbackground">
                        <h5 className="text-center fw-semibold text-white py-2 px-1">
                        Here is a listing of major job categories in the medical
                        industry that we recruit for
                        </h5>
                      </div>

                      <CarouselItems
                        images={images}
                        titles={titles}
                        altTexts={altTexts}
                      />
                      {/*  */}
                    </div>
                  </div>
                  {/* Empty col-lg-9 */}
                  <div className="col-lg-6 col-md-12">
                    {/* This section is empty for now */}
                    <h4 className="mt-3 mt-md-0">
                    Medical Industry

                    </h4>
                    <p>
                    With increasing population in the GCC states, spending in private and public hospitals in the UAE will hit $12.5 billion in 2020, the second highest in the Gulf Cooperation Council (GCC) countries, according to consultants. As per the estimates from the Ministry of Health data in 2012, the market size for health care delivery services in the GCC will jump from $37 billion in 2012 to $56 billion in about six years. The health care market in Saudi Arabia will remain the biggest at $28.7 billion by 2020, while Kuwait’s inpatient and outpatient treatment expenditures ($6.9 billion) will be the third highest in the region, followed by Oman ($3.8 billion) and Qatar (2.7 billion).

                    </p>
                    
                  </div>
                  <p className="mt-2">
                  The ever increasing pressure on the healthcare industry in GCC states is generating tremendous demand for qualified doctors, nurses & other medical staff. The sourcing that has been done from the local market proves to be insufficient and the demand has been met usually through countries like India, Pakistan, UK & so on. The hospitals & medical centres are more concerned about the quality of the staff and are very generous in providing the best of salary packages, accommodation and other facilities. There are many agencies helping to bridge this gap however not all are well equipped to handle the requirements from the healthcare industry effectively.



                  </p>

                  <p>
                  We, at Angel Gulf Jobs are fully equipped to provide the best of qualified & trained medical professionals (doctors, nurses & other medical staff) within the stipulated time limits. We primarily source candidates through our own comprehensive job portal equipped with a large size updated database of medical professionals. We also make the best use of our external contacts to source the required candidates. In short, we, at Angel Gulf Jobs act as a trustworthy referral agent and enable the clients throughout the Gulf region to have an access to the best of medical talent across different technologies and job functions.



                  </p>
                
                 
                  <p>
                  Hospitals & medical centers in Gulf may send in their enquiry for our medical recruitment services  <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>
                  

                  <p>
                    As far as job seekers are concerned we take utmost care that
                    we only keep the latest jobs in the security industry in our
                    database and help them with the most rewarding career in the
                    industry. Job seekers may register with us for FREE
                    <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalIndustry;
>>>>>>> 576083a43a265cea2d0cde471ab1fc556cb1d182
