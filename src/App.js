// import "./App.css";
import React from "react";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AdminPostJob from "./components/AdminPanel/AdminPostJob.js";
import JobListing from "./components/Job/JobListing.js";
import JobDetails from "./components/Job/JobDetails.js";
import ManageJobs from "./components/AdminPanel/ManageJobs.js";
import AdminEditJob from "./components/AdminPanel/AdminEditJob.js";
import Login from "./components/Authentication/Login.js";
import JobApplicationForm from "./components/Job/JobApplicationForm.js";
import RegistrationForm from "./components/Job/RegistrationForm.js";
import ProtectedRoute from "./components/middleware/ProtectedRoute.js";
import { AuthProvider } from "./components/middleware/AuthContext.js";
import NotFound from "./components/NotFound.js";
import BeAwareModal from './components/static/BeAwareModal.js'
import './App.css';


// Services components
const VisaService = React.lazy(() =>
  import("./components/Services/VisaService.js")
);
const Authentication = React.lazy(() =>
  import("./components/Services/Authentication.js")
);
const MedicalCenters = React.lazy(() =>
  import("./components/Services/MedicalCenters.js")
);
const SkillsTestCenter = React.lazy(() =>
  import("./components/Services/SkillsTestCenter.js")
);
const FlightBooking = React.lazy(() =>
  import("./components/Services/FlightBooking.js")
);
const ForeignExchange = React.lazy(() =>
  import("./components/Services/ForeignExchange.js")
);
const GCCIndustries = React.lazy(() =>
  import("./components/Services/GCCIndustries.js")
);

// Industries component
// const Industries = React.lazy(() => import("./components/Industries.js"));

// Process components
const RecruitmentProcedures = React.lazy(() =>
  import("./components/Processes/RecruitmentProcedures.js")
);
const OrganizationalChart = React.lazy(() =>
  import("./components/Processes/OrganizationalChart.js")
);
const OurNetwork = React.lazy(() =>
  import("./components/Processes/OurNetwork.js")
);
const Clientele = React.lazy(() =>
  import("./components/Processes/Clientele.js")
);

// Partners component
const Partners = React.lazy(() => import("./components/Partners.js"));

// Contact Us components
const ContactUs = React.lazy(() =>
  import("./components/Contacts/ContactUs.js")
);
const GrievanceForm = React.lazy(() =>
  import("./components/Contacts/GrievanceForm.js")
);

// Jobs components
const DubaiJobs = React.lazy(() => import("./components/Jobs/DubaiJobs.js"));
const SaudiJobs = React.lazy(() => import("./components/Jobs/SaudiJobs.js"));
const OmanJobs = React.lazy(() => import("./components/Jobs/OmanJobs.js"));
const QuatarJobs = React.lazy(() => import("./components/Jobs/QuatarJobs.js"));
const BahrainJobs = React.lazy(() =>
  import("./components/Jobs/BahrainJobs.js")
);
const KuwaitJobs = React.lazy(() => import("./components/Jobs/KuwaitJobs.js"));

// Footer Pages components
const AreaofInterest = React.lazy(() =>
  import("./components/static/AreaOfInterest.js")
);
const AboutUs = React.lazy(() => import("./components/static/AboutUs.js"));
const TermsOfUse = React.lazy(() =>
  import("./components/static/TermsOfUse.js")
);
const LatestNews = React.lazy(() =>
  import("./components/static/LatestNews.js")
);
const PressRelease = React.lazy(() =>
  import("./components/static/PressRelease.js")
);
const Sitemap = React.lazy(() => import("./components/Sitemap.js"));
const BlogList = React.lazy(() => import("./components/Blog/BlogList.js"));
const GccWorkPermitProcessEmploymentVisa = React.lazy(() =>
  import("./components/Blog/GccWorkPermitProcessEmploymentVisa.js")
);
const AvoidGulfJobScams = React.lazy(() =>
  import("./components/Blog/AvoidGulfJobScams.js")
);
const SaudiSkillBasedWorkPermitSystem = React.lazy(() =>
  import("./components/Blog/SaudiSkillBasedWorkPermitSystem.js")
);
const ConnectingContinents = React.lazy(() =>
  import("./components/Blog/ConnectingContinents.js")
);
const EcrNonEcrPassports = React.lazy(() =>
  import("./components/Blog/EcrNonEcrPassports.js")
);
const KafalaSystem = React.lazy(() =>
  import("./components/Blog/KafalaSystem.js")
);
const EconomicDiversificationGCC = React.lazy(() =>
  import("./components/Blog/EconomicDiversificationGCC.js")
);
const ApostilleAttestation = React.lazy(() =>
  import("./components/Blog/ApostilleAttestation.js")
);
const HRDAttestationForGulfEmployment = React.lazy(() =>
  import("./components/Blog/HRDAttestationForGulfEmployment.js")
);
const WaqalaSystemInSaudiArabia = React.lazy(() =>
  import("./components/Blog/WaqalaSystemInSaudiArabia.js")
);
const SaudiLabourLawGuide = React.lazy(() =>
  import("./components/Blog/SaudiLabourLawGuide.js")
);
const WageProtectionSystemGCC = React.lazy(() =>
  import("./components/Blog/WageProtectionSystemGCC.js")
);
const QiwaSaudiGuide = React.lazy(() =>
  import("./components/Blog/QiwaSaudiGuide.js")
);
const QatarVisaCentreGuide = React.lazy(() =>
  import("./components/Blog/QatarVisaCentreGuide.js")
);
const TradeTestingProgramSaudi = React.lazy(() =>
  import("./components/Blog/TradeTestingProgramSaudi.js")
);
const EthicalOverseasRecruitment = React.lazy(() =>
  import("./components/Blog/EthicalOverseasRecruitment.js")
);

const GamcaMedical = React.lazy(() =>
  import("./components/Blog/GamcaMedical.js")
);

// Articles

const UAEOnlineLaw = React.lazy(() =>
  import("./components/Articles/UAEOnlineLaw.js")
);
const RetirementAgeUpdate = React.lazy(() =>
  import("./components/Articles/RetirementAgeUpdate.js")
);
const JobSeekerAlert = React.lazy(() =>
  import("./components/Articles/JobSeekerAlert.js")
);
const NakheelHotelAnnouncement = React.lazy(() =>
  import("./components/Articles/NakheelHotelAnnouncement.js")
);
const KuwaitDeportationUpdate = React.lazy(() =>
  import("./components/Articles/KuwaitDeportationUpdate.js")
);
const SharjahBudgetJobOpportunities = React.lazy(() =>
  import("./components/Articles/SharjahBudgetJobOpportunities.js")
);
const QatarJobOpportunities = React.lazy(() =>
  import("./components/Articles/QatarJobOpportunities.js")
);
const DohaJobOpportunities = React.lazy(() =>
  import("./components/Articles/DohaJobOpportunities.js")
);
const OmanJobOpportunities = React.lazy(() =>
  import("./components/Articles/OmanJobOpportunities.js")
);
const MuscatJobOpportunities = React.lazy(() =>
  import("./components/Articles/MuscatJobOpportunities.js")
);
const SaudiArabiaJobOpportunities = React.lazy(() =>
  import("./components/Articles/SaudiArabiaJobOpportunities.js")
);
const RiyadhJobOpportunities = React.lazy(() =>
  import("./components/Articles/RiyadhJobOpportunities.js")
);
const UAEJobOpportunities = React.lazy(() =>
  import("./components/Articles/UAEJobOpportunities.js")
);
const ManamaJobOpportunities = React.lazy(() =>
  import("./components/Articles/ManamaJobOpportunities.js")
);
const DubaiJobOpportunities = React.lazy(() =>
  import("./components/Articles/DubaiJobOpportunities.js")
);
const AbuDhabiJobOpportunities = React.lazy(() =>
  import("./components/Articles/AbuDhabiJobOpportunities.js")
);
const IndianRupeeVsDh1Opportunities = React.lazy(() =>
  import("./components/Articles/IndianRupeeVsDh1Opportunities.js")
);
const AlFuttaimChalhoubDeal = React.lazy(() =>
  import("./components/Articles/AlFuttaimChalhoubDeal.js")
);
const DubaiPhoneDrivingPenalty = React.lazy(() =>
  import("./components/Articles/DubaiPhoneDrivingPenalty.js")
);
const UAEEmploymentAssaultPolicy = React.lazy(() =>
  import("./components/Articles/UAEEmploymentAssaultPolicy.js")
);
const DubaiPedestrianIncident = React.lazy(() =>
  import("./components/Articles/DubaiPedestrianIncident.js")
);
const BarclaysJobCuts = React.lazy(() =>
  import("./components/Articles/BarclaysJobCuts.js")
);
const EmiratesIDImpact = React.lazy(() =>
  import("./components/Articles/EmiratesIDImpact.js")
);
const UAEJobOpportunitiesNew = React.lazy(() =>
  import("./components/Articles/UAEJobOpportunitiesNew.js")
);
const DubaiChamberNewFirms = React.lazy(() =>
  import("./components/Articles/DubaiChamberNewFirms.js")
);
const UAECentralBankJobs = React.lazy(() =>
  import("./components/Articles/UAECentralBankJobs.js")
);
const UALabourLawResignation = React.lazy(() =>
  import("./components/Articles/UALabourLawResignation.js")
);
const EmiratesIDLifeTime = React.lazy(() =>
  import("./components/Articles/EmiratesIDLifeTime.js")
);
const RAKBankJobCuts = React.lazy(() =>
  import("./components/Articles/RAKBankJobCuts.js")
);
const UAEJobHuntDafzaLinkedIn = React.lazy(() =>
  import("./components/Articles/UAEJobHuntDafzaLinkedIn.js")
);
const NRIRupeeAlert = React.lazy(() =>
  import("./components/Articles/NRIRupeeAlert.js")
);
const UAEApprovedLanguages = React.lazy(() =>
  import("./components/Articles/UAEApprovedLanguages.js")
);
const GulfJobsExpatsExperience = React.lazy(() =>
  import("./components/Articles/GulfJobsExpatsExperience.js")
);
const SharjahGovtJobLawAmendment = React.lazy(() =>
  import("./components/Articles/SharjahGovtJobLawAmendment.js")
);
const UaeLabourLawChanges = React.lazy(() =>
  import("./components/Articles/UaeLabourLawChanges.js")
);
const DrivingLicenceExchangeDubai = React.lazy(() =>
  import("./components/Articles/DrivingLicenceExchangeDubai.js")
);
const GulfJobOpportunities = React.lazy(() =>
  import("./components/Articles/GulfJobOpportunities.js")
);
const UaeJobMarketOutlook = React.lazy(() =>
  import("./components/Articles/UaeJobMarketOutlook.js")
);
const HospitalityJobOpenings = React.lazy(() =>
  import("./components/Articles/HospitalityJobOpenings.js")
);
const JobTerminationRisks = React.lazy(() =>
  import("./components/Articles/JobTerminationRisks.js")
);
const GulfJobInterviews = React.lazy(() =>
  import("./components/Articles/GulfJobInterviews.js")
);
const DubaiComingJobOpportunities = React.lazy(() =>
  import("./components/Articles/DubaiComingJobOpportunities.js")
);
const UAEJobTrends2016 = React.lazy(() =>
  import("./components/Articles/UAEJobTrends2016.js")
);
const HRSkillsForUAE = React.lazy(() =>
  import("./components/Articles/HRSkillsForUAE.js")
);
const LabourLawDuesSettlement = React.lazy(() =>
  import("./components/Articles/LabourLawDuesSettlement.js")
);
const LabourRuleNativeLanguage = React.lazy(() =>
  import("./components/Articles/LabourRuleNativeLanguage.js")
);
const LuluGroupExpansion = React.lazy(() =>
  import("./components/Articles/LuluGroupExpansion.js")
);
const DubaiParksJobShortlist = React.lazy(() =>
  import("./components/Articles/DubaiParksJobShortlist.js")
);
const LabourLawWorkBanCancellation = React.lazy(() =>
  import("./components/Articles/LabourLawWorkBanCancellation.js")
);

// News components
const UAEDigitalWorkPermitSystem = React.lazy(() =>
  import("./components/News/UAEDigitalWorkPermitSystem.js")
);
const SaudiIqamaReforms2025 = React.lazy(() =>
  import("./components/News/SaudiIqamaReforms2025.js")
);
const UAELabourDisputeIndex2024 = React.lazy(() =>
  import("./components/News/UAELabourDisputeIndex2024.js")
);
const UAEAIRevolution = React.lazy(() =>
  import("./components/News/UAEAIRevolution.js")
);
const UAELabourViolations = React.lazy(() =>
  import("./components/News/UAELabourViolations.js")
);
const SaudiIndianWorkersHiring = React.lazy(() =>
  import("./components/News/SaudiIndianWorkersHiring.js")
);
const GulfConstructionJobs = React.lazy(() =>
  import("./components/News/GulfConstructionJobs.js")
);
const QiwaPlatformSaudiJobs = React.lazy(() =>
  import("./components/News/QiwaPlatformSaudiJobs.js")
);

// Sitemap components
const ConstructionIndustry = React.lazy(() =>
  import("./components/Sitemaps/ConstructionIndustry.js")
);
const OilAndGasIndustry = React.lazy(() =>
  import("./components/Sitemaps/OilAndGasIndustry.js")
);
const PowerPlant = React.lazy(() =>
  import("./components/Sitemaps/PowerPlant.js")
);
const CivilEngineeringJob = React.lazy(() =>
  import("./components/Sitemaps/CivilEngineeringJob.js")
);
const AutomotiveJob = React.lazy(() =>
  import("./components/Sitemaps/AutomotiveJob.js")
);
const ShippingJob = React.lazy(() =>
  import("./components/Sitemaps/ShippingJob.js")
);
const ACTechnicianJob = React.lazy(() =>
  import("./components/Sitemaps/ACTechnicianJob.js")
);
const HospitalityJobs = React.lazy(() =>
  import("./components/Sitemaps/HospitalityJobs.js")
);
const AviationJob = React.lazy(() =>
  import("./components/Sitemaps/AviationJob.js")
);
const BankSector = React.lazy(() =>
  import("./components/Sitemaps/BankSector.js")
);
const TelecomIndustry = React.lazy(() =>
  import("./components/Sitemaps/TelecomIndustry.js")
);
const GarmentIndustry = React.lazy(() =>
  import("./components/Sitemaps/GarmentIndustry.js")
);
const EducationSector = React.lazy(() =>
  import("./components/Sitemaps/EducationSector.js")
);
const MedicineCompany = React.lazy(() =>
  import("./components/Sitemaps/MedicineCompany.js")
);
const MarketingJobs = React.lazy(() =>
  import("./components/Sitemaps/MarketingJobs.js")
);
const PrintingTechnologist = React.lazy(() =>
  import("./components/Sitemaps/PrintingTechnologist.js")
);
const SecurityJobs = React.lazy(() =>
  import("./components/Sitemaps/SecurityJobs.js")
);
const TravelJobs = React.lazy(() =>
  import("./components/Sitemaps/TravelJobs.js")
);
const ITIndustry = React.lazy(() =>
  import("./components/Sitemaps/ITIndustry.js")
);
const MedicalIndustry = React.lazy(() =>
  import("./components/Sitemaps/MedicalIndustry.js")
);
const RetailJob = React.lazy(() =>
  import("./components/Sitemaps/RetailJob.js")
);
const ShoppingMalls = React.lazy(() =>
  import("./components/Sitemaps/ShoppingMalls.js")
);

// Press Release components
const GulfJobPortalLaunch = React.lazy(() =>
  import("./components/PressRelease/GulfJobPortalLaunch.js")
);

// Admin Post Job

//  hide Header and footer for this pages

function LocationAwareHeader() {
  const location = useLocation();

  const excludedPaths = [
    "/addjob",
    "/managejobs",
    "/login",
    /^\/edit-job\/\d+/,
  ];
  const isExcludedPath = excludedPaths.some((path) => {
    if (typeof path === "string") {
      return location.pathname.startsWith(path);
    }
    if (path instanceof RegExp) {
      return path.test(location.pathname);
    }
    return false;
  });

  return !isExcludedPath ? <Header /> : null;
}


function LocationAwareFooter() {
  const location = useLocation();
  const excludedPaths = [
    "/addjob",
    "/managejobs",
    "/login",
    /^\/edit-job\/\d+/,
  ];
  const isExcludedPath = excludedPaths.some((path) => {
    if (typeof path === "string") {
      return location.pathname.startsWith(path);
    }
    if (path instanceof RegExp) {
      return path.test(location.pathname);
    }
    return false;
  });
  return !isExcludedPath ? <Footer /> : null;
}

function App() {
  return (
    <Router>
      <div>
        <LocationAwareHeader />
        <AuthProvider>
          <Routes>
            {/* Home */}
            <Route exact path="/" element={<Home />} />

            {/* Services */}
            <Route exact path="/visa" element={<VisaService />} />
            <Route exact path="/authentication" element={<Authentication />} />
            <Route
              exact
              path="/gamca-medical-centre"
              element={<MedicalCenters />}
            />
            <Route
              exact
              path="/skill-test-centres"
              element={<SkillsTestCenter />}
            />
            <Route exact path="/flight-booking" element={<FlightBooking />} />
            <Route
              exact
              path="/foreign-exchange"
              element={<ForeignExchange />}
            />
            {/* Industries */}
            <Route exact path="/industries" element={<GCCIndustries />} />

            {/* Process */}
            <Route
              exact
              path="/recruitment-procedure"
              element={<RecruitmentProcedures />}
            />
            <Route
              exact
              path="/organizational-chart"
              element={<OrganizationalChart />}
            />
            <Route exact path="/our-network" element={<OurNetwork />} />
            <Route exact path="/clientele" element={<Clientele />} />

            {/* Partners */}
            <Route exact path="/partner-with-us" element={<Partners />} />

            {/* Contact Us */}
            <Route exact path="/contact-us" element={<ContactUs />} />
            <Route exact path="/grievance-form" element={<GrievanceForm />} />

            {/* Jobs */}
            <Route exact path="/jobs-in-uae" element={<DubaiJobs />} />
            <Route exact path="/jobs-in-saudi-arabia" element={<SaudiJobs />} />
            <Route exact path="/jobs-in-oman" element={<OmanJobs />} />
            <Route exact path="/jobs-in-qatar" element={<QuatarJobs />} />
            <Route exact path="/jobs-in-bahrain" element={<BahrainJobs />} />
            <Route exact path="/jobs-in-kuwait" element={<KuwaitJobs />} />

            {/* Modal */}

            <Route exact path="/BeAwareModal" element={<BeAwareModal />} />

            {/* Footer Pages */}

            <Route exact path="/articles" element={<AreaofInterest />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/terms-of-use" element={<TermsOfUse />} />
            <Route exact path="/latest-gulf-news" element={<LatestNews />} />
            <Route exact path="/press-release" element={<PressRelease />} />
            <Route exact path="/site-map" element={<Sitemap />} />
            <Route exact path="/blogs" element={<BlogList />} />

            {/* Blog routes*/}
            <Route
              exact
              path="/blogs/gcc-work-permit-process-for-employment-visa"
              element={<GccWorkPermitProcessEmploymentVisa />}
            />
            <Route
              exact
              path="/blogs/avoid-gulf-job-scams"
              element={<AvoidGulfJobScams />}
            />
            <Route
              exact
              path="/blogs/saudi-skill-based-work-permit-system"
              element={<SaudiSkillBasedWorkPermitSystem />}
            />
            <Route
              exact
              path="/blogs/connecting-continents-global-talent"
              element={<ConnectingContinents />}
            />
            <Route
              exact
              path="/blogs/ecr-and-non-ecr-passports"
              element={<EcrNonEcrPassports />}
            />
            <Route
              exact
              path="/blogs/kafala-system-saudi-arabia"
              element={<KafalaSystem />}
            />
            <Route
              exact
              path="/blogs/economic-diversification-gcc-countries"
              element={<EconomicDiversificationGCC />}
            />
            <Route
              exact
              path="/blogs/apostille-attestation-gulf-document-verification"
              element={<ApostilleAttestation />}
            />
            <Route
              exact
              path="/blogs/hrd-attestation-for-gulf-employment"
              element={<HRDAttestationForGulfEmployment />}
            />
            <Route
              exact
              path="/blogs/waqala-system-in-saudi-arabia"
              element={<WaqalaSystemInSaudiArabia />}
            />
            <Route
              exact
              path="/blogs/wage-protection-system-gcc-countries"
              element={<WageProtectionSystemGCC />}
            />
            <Route
              exact
              path="/blogs/understanding-qiwa-platform-guide-for-jobs-in-saudi"
              element={<QiwaSaudiGuide />}
            />
            <Route
              exact
              path="/blogs/saudi-arabia-labour-law-guide-2025"
              element={<SaudiLabourLawGuide />}
            />
            <Route
              exact
              path="/blogs/qatar-visa-centre-guide"
              element={<QatarVisaCentreGuide />}
            />
            <Route
              exact
              path="/blogs/trade-testing-program-of-saudi-arabia"
              element={<TradeTestingProgramSaudi />}
            />
            <Route
              exact
              path="/blogs/ethical-overseas-recruitment"
              element={<EthicalOverseasRecruitment />}
            />


            <Route
              exact
              path="/blogs/gamca-medical-health-checks"
              element={<GamcaMedical />}
            />

            {/* Articles */}

            <Route
              exact
              path="/uae-online-law-social-media"
              element={<UAEOnlineLaw />}
            />
            <Route
              exact
              path="/uae-retirement-age"
              element={<RetirementAgeUpdate />}
            />
            <Route
              exact
              path="/dubai-jobseeker-alert-top-questions-employers-ask"
              element={<JobSeekerAlert />}
            />
            <Route
              exact
              path="/nakheel-plans-new-hotel-at-dubais-ibn-battuta-mall"
              element={<NakheelHotelAnnouncement />}
            />
            <Route
              exact
              path="/kuwait-to-deport-1170-illegal-migrants"
              element={<KuwaitDeportationUpdate />}
            />
            <Route
              exact
              path="/dh20-3-billion-sharjah-budget-to-create-2500-jobs-2016"
              element={<SharjahBudgetJobOpportunities />}
            />
            <Route
              exact
              path="/jobs-in-qatar"
              element={<QatarJobOpportunities />}
            />
            <Route
              exact
              path="/jobs-in-doha"
              element={<DohaJobOpportunities />}
            />
            <Route
              exact
              path="/jobs-in-oman"
              element={<OmanJobOpportunities />}
            />
            <Route
              exact
              path="/jobs-in-muscat"
              element={<MuscatJobOpportunities />}
            />
            <Route
              exact
              path="/jobs-in-saudi-arabia"
              element={<SaudiArabiaJobOpportunities />}
            />
            <Route
              exact
              path="/jobs-in-riyadh"
              element={<RiyadhJobOpportunities />}
            />
            <Route
              exact
              path="/jobs-in-uae"
              element={<UAEJobOpportunities />}
            />
            <Route
              exact
              path="/jobs-in-manama"
              element={<ManamaJobOpportunities />}
            />
            <Route
              exact
              path="/jobs-in-dubai"
              element={<DubaiJobOpportunities />}
            />
            <Route
              exact
              path="/jobs-in-abu-dhabi"
              element={<AbuDhabiJobOpportunities />}
            />
            <Route exact path="/jobs-in-bahrain" element={<BahrainJobs />} />
            <Route
              exact
              path="/indian-rupee-18.56-vs-dh1"
              element={<IndianRupeeVsDh1Opportunities />}
            />
            <Route
              exact
              path="/alfuttiam-chalhoub-group-sign-deal"
              element={<AlFuttaimChalhoubDeal />}
            />
            <Route
              exact
              path="/phone-drivers-could-lose-car-for-one-month-dubai"
              element={<DubaiPhoneDrivingPenalty />}
            />
            <Route
              exact
              path="/employer-can-sack-worker-if-assaulted"
              element={<UAEEmploymentAssaultPolicy />}
            />
            <Route
              exact
              path="/dubai-pedestrian-felled-dh50k-snatched"
              element={<DubaiPedestrianIncident />}
            />
            <Route
              exact
              path="/barclays-slash-100s-of-jobs"
              element={<BarclaysJobCuts />}
            />
            <Route
              exact
              path="/emirates-id-bank-account-freeze"
              element={<EmiratesIDImpact />}
            />
            <Route
              exact
              path="/jobs-in-uae-2016"
              element={<UAEJobOpportunitiesNew />}
            />
            <Route
              exact
              path="/dubai-chambers-16k-new-firms-on-board"
              element={<DubaiChamberNewFirms />}
            />
            <Route
              exact
              path="/uae-central-bank-hiring-jobs-open-to-expats"
              element={<UAECentralBankJobs />}
            />
            <Route
              exact
              path="/uae-rules-when-resigning-your-job"
              element={<UALabourLawResignation />}
            />
            <Route
              exact
              path="/emirates-id-number-cannot-be-changed"
              element={<EmiratesIDLifeTime />}
            />
            <Route
              exact
              path="/rakbank-to-cut-250-jobs"
              element={<RAKBankJobCuts />}
            />
            <Route
              exact
              path="/uae-jobs-dafza-linkedin-tieup"
              element={<UAEJobHuntDafzaLinkedIn />}
            />
            <Route
              exact
              path="/nri-alert-rupee-exchange-rate-to-dirham"
              element={<NRIRupeeAlert />}
            />
            <Route
              exact
              path="/11-languages-approved-for-new-uae-labour-contracts"
              element={<UAEApprovedLanguages />}
            />
            <Route
              exact
              path="/gulf-jobs-life-experience"
              element={<GulfJobsExpatsExperience />}
            />
            <Route
              exact
              path="/govt-job-in-sharjah"
              element={<SharjahGovtJobLawAmendment />}
            />
            <Route
              exact
              path="/new-uae-labour-rules"
              element={<UaeLabourLawChanges />}
            />
            <Route
              exact
              path="/driving-licence-exchange-dubai"
              element={<DrivingLicenceExchangeDubai />}
            />
            <Route
              exact
              path="/gulf-jobs-gcc"
              element={<GulfJobOpportunities />}
            />
            <Route
              exact
              path="/good-times-uaejobs"
              element={<UaeJobMarketOutlook />}
            />
            <Route
              exact
              path="/hospitality-jobs-uae"
              element={<HospitalityJobOpenings />}
            />
            <Route
              exact
              path="/uae-labour-laws"
              element={<JobTerminationRisks />}
            />
            <Route
              exact
              path="/gulf-job-interviews"
              element={<GulfJobInterviews />}
            />
            <Route
              exact
              path="/new-jobs-dubai"
              element={<DubaiComingJobOpportunities />}
            />
            <Route
              exact
              path="/uae-jobsearch-trends2016"
              element={<UAEJobTrends2016 />}
            />
            <Route
              exact
              path="/hr-skills-hired-uae"
              element={<HRSkillsForUAE />}
            />
            <Route
              exact
              path="/court-firm-extra-pay"
              element={<LabourLawDuesSettlement />}
            />
            <Route
              exact
              path="/employment-contract-native-language"
              element={<LabourRuleNativeLanguage />}
            />
            <Route
              exact
              path="/lulu-to-open-10-hypermarkets-egypt"
              element={<LuluGroupExpansion />}
            />
            <Route
              exact
              path="/jobs-in-dubai-parks"
              element={<DubaiParksJobShortlist />}
            />
            <Route
              exact
              path="/uae-cancels-6-months-work-ban"
              element={<LabourLawWorkBanCancellation />}
            />

            {/* News */}

            <Route
              exact
              path="/uae-digital-work-permit-system"
              element={<UAEDigitalWorkPermitSystem />}
            />
            <Route
              exact
              path="/saudi-iqama-reforms-2025"
              element={<SaudiIqamaReforms2025 />}
            />
            <Route
              exact
              path="/uae-labour-dispute-index-2024"
              element={<UAELabourDisputeIndex2024 />}
            />
            <Route
              exact
              path="/uae-ai-revolution"
              element={<UAEAIRevolution />}
            />
            <Route
              exact
              path="/uae-labour-law-violations"
              element={<UAELabourViolations />}
            />
            <Route
              exact
              path="/qiwa-platform-jobs-in-saudi-arabia"
              element={<QiwaPlatformSaudiJobs />}
            />
            <Route
              exact
              path="/saudi-india-workers-hiring"
              element={<SaudiIndianWorkersHiring />}
            />
            <Route
              exact
              path="/gulf-construction-jobs"
              element={<GulfConstructionJobs />}
            />

            {/* Sitemap */}

            <Route
              exact
              path="/construction-industry"
              element={<ConstructionIndustry />}
            />
            <Route
              exact
              path="/oil-gas-industry"
              element={<OilAndGasIndustry />}
            />
            <Route
              exact
              path="/power-plant-industry"
              element={<PowerPlant />}
            />
            <Route
              exact
              path="/heavy-equipments-engineering-industry"
              element={<CivilEngineeringJob />}
            />
            <Route
              exact
              path="/automotive-industry"
              element={<AutomotiveJob />}
            />
            <Route
              exact
              path="/shipping-marine-industry"
              element={<ShippingJob />}
            />
            <Route
              exact
              path="/air-conditioning-industry"
              element={<ACTechnicianJob />}
            />
            <Route
              exact
              path="/hospitality-industry"
              element={<HospitalityJobs />}
            />
            <Route
              exact
              path="/aviation-airline-industry"
              element={<AviationJob />}
            />
            <Route
              exact
              path="/banking-finance-sector"
              element={<BankSector />}
            />
            <Route
              exact
              path="/telecom-industry"
              element={<TelecomIndustry />}
            />
            <Route
              exact
              path="/garments-fmcg-sector"
              element={<GarmentIndustry />}
            />
            <Route
              exact
              path="/education-training-sector"
              element={<EducationSector />}
            />
            <Route
              exact
              path="/medical-pharmaceutical-industry"
              element={<MedicineCompany />}
            />
            <Route
              exact
              path="/media-communication-advertising-industry"
              element={<MarketingJobs />}
            />
            <Route
              exact
              path="/printing-publishing-industry"
              element={<PrintingTechnologist />}
            />
            <Route exact path="/security-staffing" element={<SecurityJobs />} />
            <Route exact path="/travel-industry" element={<TravelJobs />} />
            <Route exact path="/it-industry" element={<ITIndustry />} />
            <Route
              exact
              path="/medical-industry"
              element={<MedicalIndustry />}
            />
            <Route exact path="/retail-jobs-gulf" element={<RetailJob />} />
            <Route
              exact
              path="/shopping-malls-in-dubai"
              element={<ShoppingMalls />}
            />

            {/* Press Release */}

            <Route
              exact
              path="/pr-gulf-portal-launch"
              element={<GulfJobPortalLaunch />}
            />

            {/* AdminPanel */}

            {/* <Route exact path="/addjob" element={<AdminPostJob />} />

                  <Route exact path="/job-list" element={<JobListing />} />
                  <Route path="/job-details/:jobId" element={<JobDetails />} />
                  <Route path="/edit-job/:job_id" element={<AdminEditJob />} />
                  <Route path="/managejobs" element={<ManageJobs />} /> */}



            {/* Admin Routes */}
            <Route
              path="/addjob"
              element={
                <ProtectedRoute>
                  <AdminPostJob />
                </ProtectedRoute>
              }
            />
            {/* <Route
              path="/job-list"
              element={
                <ProtectedRoute>
                  <JobListing />
                </ProtectedRoute>
              }
            /> */}
            {/* <Route
              path="/job-details/:jobId"
              element={
                <ProtectedRoute>
                  <JobDetails />
                </ProtectedRoute>
              }
            /> */}
            <Route
              path="/edit-job/:job_id"
              element={
                <ProtectedRoute>
                  <AdminEditJob />
                </ProtectedRoute>
              }
            />
            <Route
              path="/managejobs"
              element={
                <ProtectedRoute>
                  <ManageJobs />
                </ProtectedRoute>
              }
            />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/job-list" element={<JobListing />} />
            <Route path="/job-details/:jobId" element={<JobDetails />} />
            <Route path="/apply-job/:jobId" element={<JobApplicationForm />} />
            <Route path="/registration" element={<RegistrationForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>

        <LocationAwareFooter />
      </div>
    </Router>
  );
}

export default App;
