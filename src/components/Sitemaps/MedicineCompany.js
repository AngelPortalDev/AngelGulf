import React from "react";
import { NavLink } from "react-router-dom";
import educationImg from "../../assets/images/sitemap/Education-&-Training-Sector.jpg";
import doctorsImg from "../../assets/images/sitemap/medicin/medical-&-pharmaceutical-industry-doctors.jpg";
import nursesImg from "../../assets/images/sitemap/medicin/medical-&-pharmaceutical-industry-nurses.jpg";
import pharmacistsImg from "../../assets/images/sitemap/medicin/medical-&-pharmaceutical-pharmacists.jpg";
import physiciansImg from "../../assets/images/sitemap/medicin/medical-&-pharmaceutical-industry-physicians.jpg";
import surgeonsImg from "../../assets/images/sitemap/medicin/medical-&-pharmaceutical-industry-surgeons.jpg";
import medicalRepresentativesImg from "../../assets/images/sitemap/medicin/medical-&-pharmaceutical-industry-medical-representatives.jpg";
import paraMedicalStaffImg from "../../assets/images/sitemap/medicin/medical-&-pharmaceutical-industry-para-medical-staff.jpg";
import labAssistantsImg from "../../assets/images/sitemap/medicin/medical-&-pharmaceutical-lab-assistants-jobs-in-gulflab-assistants.jpg";
import professorsImg from "../../assets/images/sitemap/medicin/medical-&-pharmaceutical-industry-professors.jpg";
import researchAssociatesImg from "../../assets/images/sitemap/medicin/medical-&-pharmaceutical-industry-research-associates.jpg";
import specialistDoctorsImg from "../../assets/images/sitemap/medicin/medical-&-pharmaceutical-specialist-doctors.jpg";
import anaesthesiologistImg from "../../assets/images/sitemap/medicin/medical-&-pharmaceutical-industry-anaesthesiologist.jpg";
import biologicalScientistsImg from "../../assets/images/sitemap/medicin/medical-&-pharmaceutical-industry-biological-scientists.jpg";
import medicalTranscriptionsImg from "../../assets/images/sitemap/medicin/medical-&-pharmaceutical-medical-transcriptions.jpg";
import bloodBankSpecialistsImg from "../../assets/images/sitemap/medicin/medical-&-pharmaceutical-blood-bank-specialists.jpg";
import healthInfTechniciansImg from "../../assets/images/sitemap/medicin/medical-&-pharmaceutical-industry-health-inf-technicians.jpg";
import cardioTechniciansImg from "../../assets/images/sitemap/medicin/medical-&-pharmaceutical-industry-cardio-technicians.jpg";
import medicalSocialWorkerImg from "../../assets/images/sitemap/medicin/medical-&-pharmaceutical-industry-medical-social-worker.jpg";
import physicalTherapistsImg from "../../assets/images/sitemap/medicin/medical-&-pharmaceutical-industry-physical-therapists.jpg";
import salesRepresentativesImg from "../../assets/images/sitemap/medicin/medical-&-pharmaceutical-industry-sales-representatives.jpg";
import CarouselItems from "../common/CarouselItems";
import { Helmet } from "react-helmet";

const GarmentIndustry = () => {
    const images = [
        doctorsImg, nursesImg, pharmacistsImg, physiciansImg, surgeonsImg, medicalRepresentativesImg, 
        paraMedicalStaffImg, labAssistantsImg, professorsImg, researchAssociatesImg, specialistDoctorsImg, 
        anaesthesiologistImg, biologicalScientistsImg, medicalTranscriptionsImg, bloodBankSpecialistsImg, 
        healthInfTechniciansImg, cardioTechniciansImg, medicalSocialWorkerImg, physicalTherapistsImg, 
        salesRepresentativesImg
    ];

    const titles = [
        "Doctors", "Nurses", "Pharmacists", "Physicians", "Surgeons", "Medical Representatives", 
        "Para Medical Staff", "Lab Assistants", "Professors", "Research Associates", "Specialist Doctors", 
        "Anaesthesiologist", "Biological Scientists", "Medical Transcriptions", "Blood Bank Specialists", 
        "Health Inf Technicians", "Cardio Technicians", "Medical Social Worker", "Physical Therapists", 
        "Sales Representatives"
    ];

    const altTexts = [
        "Job in Medicine Company", "Medicine Company Job Vacancy", "Medical Assistant Jobs", 
        "Physicians Jobs In Gulf", "Surgeons Jobs In Gulf", "Medical Representatives Jobs In Gulf", 
        "Para Medical Staff Jobs In Gulf", "Lab Assistants Jobs In Gulf", "Professors Jobs In Gulf", 
        "Research Associates Jobs In Gulf", "Specialist Doctors Jobs In Gulf", "Anaesthesiologist Jobs In Gulf", 
        "Biological Scientists Jobs In Gulf", "Medical Transcriptions Jobs In Gulf", "Blood Bank Specialists Jobs In Gulf", 
        "Health Inf Technicians Jobs In Gulf", "Cardio Technicians Jobs In Gulf", "Medical Social Worker Jobs In Gulf", 
        "Physical Therapists Jobs In Gulf", "Sales Representatives Jobs In Gulf"
    ];

  return (
    <div>
      <Helmet>
      <title>Job in Medicine Company, Medicine Company Job Vacancy, Medical Assistant Jobs</title>
<meta name="keywords" content="Job in Medicine Company, Medicine Company Job Vacancy Medical Assistant Jobs, medical industry, healthcare industry, pharmaceutical jobs, jobs in Dubai, jobs in Abu Dhabi, jobs in Oman, jobs in Gulf"/>
<meta name="description" content="Apply to latest Job in Medicine company in gulf and other abroad  countries. Find updated Medicine Company Job Vacancy in our database. Get hired for medical assistant jobs in gulf."/>
<link rel="canonical" href="https://www.angelgulfjobs.com/medical-pharmaceutical-industry"/>
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${educationImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">
                    Job in Medicine Company
                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Job in Medicine Company</li>
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
                      Find Medicine Company Job Vacancy Through Angel Gulf Jobs
                    </h4>
                    <p>
                      Angel Gulf Jobs is a professionally managed overseas
                      recruitment agency with years of work experience in the
                      field. We help aspirants find jobs that match their
                      profile and skills across sectors in the Gulf region. If
                      you are aspiring for a{" "}
                      <strong>job in medicine company</strong> in the Gulf
                      countries and have a degree and experience in the same
                      field, apply for the latest medical and pharmaceutical
                      jobs through us. You can use the platform to search latest
                      jobs in the industry and get complete guidance with regard
                      to the openings, like salary, location, skills required,
                      etc.
                    </p>
                  </div>
                  {/* Carousel in col-lg-3 */}
                  <div className="col-lg-6 col-md-12">
                    <div className="carousel-wrapper p-3">
                      <div className="carouselbackground">
                        <h5 className="text-center fw-semibold text-white py-2 px-1">
                          Here is a listing of major job categories in the
                          Medical & Pharmaceutical industry that we recruit for
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
                      Scope of Employment in the Medical and Pharmaceutical
                      Industry
                    </h4>
                    <p>
                      With the ageing and increasing population of the Gulf
                      Countries, along with the prevalence of lifestyle
                      diseases, the healthcare sector has enticed the attention
                      of authorities in the Gulf countries. All countries have
                      increased their healthcare budget. According to
                      statistics, the healthcare expenditure of the GCC is
                      expected to touch US$135.5 billion by 2027. Countries like
                      Oman, Saudi Arabia, Kuwait, Bahrain, and others are also
                      planning the expansion of their healthcare
                      infrastructure.Various National Transformation Plans
                      (NTPs) and policy programmes like the Saudi Vision 2030
                      and UAE Vision 2021 have outlined long-term government
                      strategies to advance the role of the private healthcare
                      sector and create additional capacity for their growing
                      markets. All these factors make the Gulf Countries a hot
                      destination for healthcare and medical assistant jobs. The
                      region has an unduly requirement of human resources for
                      jobs like nurses, laboratory technicians, pharmacists,
                      diseases specialists, etc.Coming to the perks and benefits
                      the industry gets, it is the highest among all lately. The
                      Gulf Countries have a high demand for nurses, lab
                      technicians, general practitioners, etc.
                    </p>
                  </div>
                  <h4 className="mt-2">
                    How to Get Healthcare Jobs in the Gulf Countries
                  </h4>
                  <p>
                    Not everyone is eligible for healthcare jobs in the Gulf
                    Countries. The countries have laid strict laws for the same.
                    To get a job, the person must have an in-depth knowledge of
                    the health and safety guidelines and procedures followed in
                    the Gulf Countries. In addition, a relevant degree in the
                    field is also a must thing.
                  </p>

                  <p>
                    Angel Gulf Jobs makes finding healthcare jobs in the Gulf
                    counties straightforward by bridging the gap between
                    recruiters and job seekers.To help recruiters, we have a
                    database to cater to their recruitment-related requirements.
                  </p>
                  <p>
                    For job seekers, we have a list of openings in the
                    healthcare sector in the Gulf region. We provide all these
                    services at no extra cost.
                  </p>
                  <p>
                    Angel Portal helps you find{" "}
                    <strong> medicine company job vacancy, </strong> medical
                    assistant job, technicians’ job and related jobs on the
                    angel portal. To apply for any of the jobs, send your
                    resume.
                  </p>

                  <p>
                    As far as job seekers are concerned we take utmost care that
                    we only keep latest medical, healthcare & pharmaceutical
                    jobs in our database and help them with the most rewarding
                    career in the industry. Job seekers may register with us for
                    FREE
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

export default GarmentIndustry;
