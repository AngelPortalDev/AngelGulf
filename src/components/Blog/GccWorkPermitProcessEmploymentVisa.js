import React from "react";
import BlogLayout from "./BlogLayout";

import HeroImg from "../../assets/images/blogs/GCC-work-permit-visa.png";
import UaeImg from "../../assets/images/blogs/Work-Visa-process-in-UAE.png";
import SaudiImg from "../../assets/images/blogs/Saudi-Arabia-work-permit.png";
import QatarImg from "../../assets/images/blogs/Qatar-work-visa-process.png";
import OmanImg from "../../assets/images/blogs/Oman-employment-visa-process.png";
import BahrainImg from "../../assets/images/blogs/Work-Visa-in-Bahrain.png";
import KuwaitImg from "../../assets/images/blogs/Kuwait-work-permit-process.png";

const SEO_KEYWORDS = [
  "GCC work permit process",
  "Gulf work visa guide",
  "Gulf employment visa",
  "work permit in Gulf countries",
  "work visa process in UAE",
  "Saudi Arabia work permit",
  "Qatar work visa process",
  "Oman employment visa",
  "Bahrain work permit application",
  "Kuwait work permit process",
];

const GccWorkPermitProcessEmploymentVisa = () => {
  return (
    <BlogLayout
      title="GCC work permit process for employment visa"
      subtitle=""
      eyebrow=""
      intro=""
      hero={(
        <figure className="text-center mb-0">
          <img
            src={HeroImg}
            alt="GCC work permit and employment visa process overview"
            className="img-fluid rounded-4 shadow"
            style={{ maxHeight: "460px", objectFit: "cover" }}
          />
          <figcaption className="mt-3 text-muted fst-italic hero-caption">
            A practical overview of how work permits and employment visas typically flow across GCC countries.
          </figcaption>
        </figure>
      )}
      metaHighlights={[
        { label: "Category", value: "Visa Process" },
        { label: "Reading time", value: "10 mins" },
        { label: "Updated", value: "Dec 2025" },
      ]}
      metaTitle="GCC work permit process for employment visa"
      metaDescription="Complete guide to GCC work permit and employment visa processes across UAE, Saudi Arabia, Qatar, Oman, Bahrain, and Kuwait. Learn steps, requirements, and employer duties."
      metaKeywords={SEO_KEYWORDS}
      breadcrumbItems={[
        {
          label: "GCC Work Permit Process",
        },
      ]}
      canonicalUrl="https://www.angelgulfjobs.com/blogs/gcc-work-permit-process-for-employment-visa"
    >
      {/* INTRO */}
      <section className="blog-section mb-5">
        <p className="lead fw-normal intro-text">
          Working in the Gulf Cooperation Council (GCC) countries requires an understanding of work permits in Gulf countries.
          From employer registration to residence visa issuance, every step of the Gulf employment visa ensures legal and
          compliant employment for foreign workers. Here’s a simplified Gulf work visa guide to how GCC work permits are processed across the UAE, Saudi Arabia, Qatar,
          Oman, Bahrain, and Kuwait, helping both employers and professionals navigate the system confidently.
        </p>

        <p>
       
        </p>
      </section>

      {/* UAE */}
      <section className="blog-section mb-5">
        <h2 className="h3 fw-bold section-title-blue">Work Visa process in UAE</h2>
        <p>
          The Ministry of Human Resources and Emiratisation (MOHRE) in the UAE has multiple types of visa and 13 types of work
          permits. To know more, read: <a href="https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/job-offers-and-work-permits-and-contracts/work-permits" target="_blank" rel="noreferrer">Types of work permits in the UAE</a>.
        </p>

        <ol className="list-unstyled ms-0 counter-list">
          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">1</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Employer Registration</strong>
              <ul className="plain-list">
                <li>Employer registers with the Ministry of Human Resources and Emiratisation (MOHRE).</li>
                <li>Must hold a valid trade licence from the Department of Economic Development (DED) or a free zone authority.</li>
                <li>Registration authorises the company to hire and sponsor foreign workers.</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">2</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Work Permit Application (Labour Approval)</strong>
              <ul className="plain-list">
                <li>Employer applies for a Work Permit through MOHRE.</li>
                <li>Required essential documents: employee’s passport copy and passport-sized photographs; job offer and employment contract; educational or professional certificates (if required).</li>
                <li>Once approved, MOHRE issues an Employment Entry Permit (temporary visa).</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">3</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Entry into the UAE</strong>
              <ul className="plain-list">
                <li>Employee enters the UAE using the Employment Entry Permit.</li>
                <li>Validity: 60 days.</li>
                <li>During this period, the employer completes medical and residency formalities.</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">4</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Medical Examination & Emirates ID</strong>
              <ul className="plain-list">
                <li>Employee undergoes a medical test at an authorised centre.</li>
                <li>Emirates ID registration (fingerprinting & biometrics) through the Federal Authority for Identity and Citizenship (ICP).</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">5</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Residence Visa Issuance</strong>
              <ul className="plain-list">
                <li>The employer applies for a Residence Visa via the GDRFA (General Directorate of Residency and Foreigners Affairs).</li>
                <li>Once approved, the visa is stamped in the employee’s passport and linked to the Emirates ID.</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-0 position-relative ps-5">
            <span className="counter">6</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Renewal & Employer Responsibilities</strong>
              <ul className="plain-list">
                <li>Work Permit and Residence Visa validity: 2 years (1 year in some free zones).</li>
                <li>Employer must renew documents before expiry and follow UAE labour laws on wages, insurance, and end-of-service benefits.</li>
              </ul>
            </div>
          </li>
        </ol>

        <div className="text-center my-5">
          <img
            src={UaeImg}
            alt="Work visa process in the UAE"
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxWidth: "720px" }}
          />
        </div>
      </section>

      {/* SAUDI */}
      <section className="blog-section mb-5">
        <h2 className="h3 fw-bold section-title-blue">Saudi Arabia work permit and visa process</h2>

        <ol className="list-unstyled ms-0 counter-list">
          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">1</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Employer Registration</strong>
              <ul className="plain-list">
                <li>Employer registers with the Ministry of Human Resources and Social Development (MHRSD).</li>
                <li>Must have active accounts with Qiwa (digital labour platform) and GOSI (social insurance).</li>
                <li>This registration authorises the company to legally hire and sponsor foreign workers.</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">2</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Block Visa Approval</strong>
              <ul className="plain-list">
                <li>Employer applies for a Block Visa from the MHRSD. A block visa is a quota that allows a company to recruit a set number of foreign nationals rather than individual workers.</li>
                <li>This defines the number of foreign employees allowed, their job titles, and nationalities.</li>
                <li>Once approved, the company can begin individual worker visa applications.</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">3</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Visa Authorisation (MOFA)</strong>
              <ul className="plain-list">
                <li>Employer obtains a Visa Authorisation Number from the Ministry of Foreign Affairs (MOFA).</li>
                <li>This number is sent electronically to the Saudi Embassy or Consulate in the worker’s home country.</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">4</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Employee’s Work Entry Visa Application</strong>
              <p className="mb-2">Employee applies for a Work Entry Visa using the authorisation number. Required essential documents include:</p>
              <ul className="plain-list">
                <li>Valid passport copy</li>
                <li>Employment contract</li>
                <li>Medical fitness certificate (from an approved clinic)</li>
                <li>Educational or professional certificates</li>
                <li>Once approved, the visa is stamped in the passport.</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">5</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Arrival in Saudi Arabia & Iqama Processing</strong>
              <ul className="plain-list">
                <li>Upon arrival, the employer arranges:</li>
                <li>Medical examination at an authorised centre.</li>
                <li>Biometric registration (fingerprints and photos) with Jawazat (General Directorate of Passports).</li>
                <li>Employer applies for the Iqama — the combined residence and work permit.</li>
                <li>For recent Iqama reforms, you can read: <a href="http://localhost:3000/saudi-iqama-reforms-2025" target="_blank" rel="noreferrer">Saudi Iqama reform 2025</a></li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-0 position-relative ps-5">
            <span className="counter">6</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Employer Responsibilities</strong>
              <ul className="plain-list">
                <li>Renew the Iqama annually.</li>
                <li>Maintain employee data in Qiwa and GOSI systems.</li>
                <li>Provide health insurance and comply with the Saudi Labour Law.</li>
              </ul>
            </div>
          </li>
        </ol>

        <div className="text-center my-5">
          <img
            src={SaudiImg}
            alt="Saudi Arabia work permit"
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxWidth: "720px" }}
          />
        </div>
      </section>

      {/* QATAR */}
      <section className="blog-section mb-5">
        <h2 className="h3 fw-bold section-title-blue">Qatar work visa process</h2>

        <ol className="list-unstyled ms-0 counter-list">
          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">1</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Employer Registration</strong>
              <ul className="plain-list">
                <li>Employer registers with the Ministry of Labour (MOL) in Qatar.</li>
                <li>Employer must hold Commercial Registration (CR), Computer Card, and Establishment ID.</li>
                <li>These allow the company to legally hire and sponsor foreign workers.</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">2</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Work Visa Approval (Employment Visa Quota)</strong>
              <ul className="plain-list">
                <li>Employer applies to the Ministry of Labour for approval to recruit foreign employees.</li>
                <li>The application includes job titles, nationalities, and the number of workers.</li>
                <li>Once approved, the employer is authorised to hire within the set quota.</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">3</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Visa Authorisation (Entry Visa for Employment)</strong>
              <ul className="plain-list">
                <li>Employer submits a work visa application via Hukoomi or the ADLSA system.</li>
                <li>The Ministry issues an entry visa authorisation number.</li>
                <li>An employee uses this number to apply for a Work Entry Visa at the Qatari embassy in their home country.</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">4</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Worker’s Entry into Qatar</strong>
              <ul className="plain-list">
                <li>Employee enters Qatar with the Work Entry Visa (valid for about 3 months).</li>
                <li>During this time, the employer completes all steps to convert it into a Work Residence Permit.</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-0 position-relative ps-5">
            <span className="counter">5</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Issuing the Work Residence Permit (RP)</strong>
              <ul className="plain-list">
                <li>After arrival, the employer completes:</li>
                <li>Medical examination.</li>
                <li>Biometric registration (fingerprints and photo).</li>
                <li>Work Residence Permit application through the Ministry of Interior (MOI).</li>
                <li>Once approved, the permit is printed on the employee’s Qatar ID (QID), allowing them to live and work legally in Qatar.</li>
              </ul>
            </div>
          </li>
        </ol>

        <div className="text-center my-5">
          <img
            src={QatarImg}
            alt="Qatar work visa process"
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxWidth: "720px" }}
          />
        </div>
      </section>

      {/* OMAN */}
      <section className="blog-section mb-5">
        <h2 className="h3 fw-bold section-title-blue">Oman employment visa process</h2>

        <ol className="list-unstyled ms-0 counter-list">
          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">1</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Employer Registration</strong>
              <ul className="plain-list">
                <li>Employer registers with the Ministry of Labour (MOL).</li>
                <li>Employer must hold a valid Commercial Registration (CR).</li>
                <li>This registration allows the company to legally hire and sponsor foreign workers.</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">2</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Labour Clearance (Manpower Request)</strong>
              <ul className="plain-list">
                <li>The employer applies to the MOL for Labour Clearance, also known as a Manpower Request.</li>
                <li>The request includes job titles, nationalities, and qualifications of workers.</li>
                <li>Once approved, the employer receives a Labour Clearance Number to proceed with hiring.</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">3</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Employment Visa Application</strong>
              <ul className="plain-list">
                <li>Using the Labour Clearance Number, the employer applies for an Employment Entry Visa via the Royal Oman Police (ROP) eVisa system.</li>
                <li>Required documents: worker’s passport copy, medical certificate, attested educational or professional certificates.</li>
                <li>Once approved, the visa is issued for the employee’s entry into Oman.</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">4</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Employee Entry & Resident Card</strong>
              <ul className="plain-list">
                <li>The employee enters Oman using the Employment Entry Visa.</li>
                <li>After arrival: medical test at an authorised centre; biometric registration (fingerprints and photo); employer applies for a Resident Card (work + residence permit).</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-0 position-relative ps-5">
            <span className="counter">5</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Renewal & Compliance</strong>
              <ul className="plain-list">
                <li>The Resident Card (work permit) is typically valid for 2 years.</li>
                <li>The employer must renew it before expiry.</li>
                <li>Ensure compliance with Oman’s Labour Law — covering wages, insurance, and end-of-service benefits.</li>
              </ul>
            </div>
          </li>
        </ol>

        <div className="text-center my-5">
          <img
            src={OmanImg}
            alt="Oman employment visa process"
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxWidth: "720px" }}
          />
        </div>
      </section>

      {/* BAHRAIN */}
      <section className="blog-section mb-5">
        <h2 className="h3 fw-bold section-title-blue">Work Visa in Bahrain</h2>

        <ol className="list-unstyled ms-0 counter-list">
          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">1</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Employer Registration</strong>
              <ul className="plain-list">
                <li>Employer registers with the Labour Market Regulatory Authority (LMRA).</li>
                <li>The employer must have a valid Commercial Registration (CR) issued by the Ministry of Industry and Commerce (MOIC).</li>
                <li>This registration allows the company to legally hire and sponsor foreign employees.</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">2</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Bahrain Work Permit Application</strong>
              <ul className="plain-list">
                <li>Employer applies for a work permit through the LMRA online portal.</li>
                <li>Required documents include: employee’s passport copy; employment contract and job offer; medical certificate from an approved clinic.</li>
                <li>LMRA reviews the application to ensure compliance with Bahrainisation (local hiring) rules.</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">3</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Entry Visa Issuance</strong>
              <ul className="plain-list">
                <li>Once approved, the work permit and entry visa are issued automatically by the LMRA.</li>
                <li>The employee can travel to Bahrain using this visa.</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">4</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Arrival and ID Card</strong>
              <ul className="plain-list">
                <li>After arrival in Bahrain, the employee must complete: medical examination at an authorised centre; fingerprinting and biometric registration; receive the Central Population Registry (CPR) card (residence + work permit).</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-0 position-relative ps-5">
            <span className="counter">5</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Renewal & Employer Duties</strong>
              <ul className="plain-list">
                <li>The work permit is typically valid for two years.</li>
                <li>Employers must renew the permit before it expires and follow LMRA regulations on wages, housing, insurance, and labour law compliance.</li>
              </ul>
            </div>
          </li>
        </ol>

        <div className="text-center my-5">
          <img
            src={BahrainImg}
            alt="Work visa in Bahrain"
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxWidth: "720px" }}
          />
        </div>
      </section>

      {/* KUWAIT */}
      <section className="blog-section mb-5">
        <h2 className="h3 fw-bold section-title-blue">Kuwait work permit process</h2>

        <ol className="list-unstyled ms-0 counter-list">
          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">1</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Employer Registration</strong>
              <ul className="plain-list">
                <li>Employer registers with the Public Authority of Manpower (PAM).</li>
                <li>Must hold a valid Commercial Licence from the Ministry of Commerce and Industry (MOCI).</li>
                <li>This registration allows the company to legally hire and sponsor foreign employees.</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">2</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Work Permit Application (Labour Approval)</strong>
              <ul className="plain-list">
                <li>The employer applies to PAM for a Work Permit (also called a Labour Approval).</li>
                <li>The application includes: employee’s valid passport copy; job offer and employment contract; company licence and quota approval.</li>
                <li>Once approved, the employer receives a Work Permit Number.</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">3</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Visa Authorisation (Entry Visa)</strong>
              <ul className="plain-list">
                <li>Employer applies for a Work Entry Visa through the General Department of Residency Affairs under the Ministry of Interior.</li>
                <li>The visa authorisation is sent electronically to the Kuwaiti embassy in the employee’s home country.</li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-4 position-relative ps-5">
            <span className="counter">4</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Employee Entry & Residency Permit (Iqama)</strong>
              <ul className="plain-list">
                <li>Employee enters Kuwait using the Work Entry Visa.</li>
                <li>After arrival: medical examination at an authorised centre; fingerprinting and biometric registration</li>
                <li>
                  The employer then applies for a Residency Permit (Iqama), which is stamped in the passport and linked to the Civil ID.
                </li>
              </ul>
            </div>
          </li>

          <li className="d-flex align-items-start mb-0 position-relative ps-5">
            <span className="counter">5</span>
            <div>
              <strong style={{ color: "#0f172a" }}>Renewal & Employer Responsibilities</strong>
              <ul className="plain-list">
                <li>The Residency Permit (Iqama) must be renewed annually.</li>
                <li>The employer must comply with the Kuwait Labour Law regarding salary protection, health insurance, and end-of-service benefits.</li>
              </ul>
            </div>
          </li>
        </ol>

        <div className="text-center my-5">
          <img
            src={KuwaitImg}
            alt="Kuwait work permit process"
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxWidth: "720px" }}
          />
        </div>
      </section>

      {/* CTA BOX */}
      <section className="cta-box mb-0 p-4 p-md-5 rounded-4">
        <div className="d-flex flex-wrap align-items-center mb-4 gap-3 cta-header">
          <div className="cta-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="white" />
            </svg>
          </div>
          <h2 className="h3 fw-bold mb-0 cta-title">Looking to Work or Hire in the Gulf?</h2>
        </div>

        <p className="cta-text">
          Navigate the GCC’s evolving work permit systems with confidence. Angel Gulf Jobs connects skilled professionals and
          trusted employers across the UAE, Saudi Arabia, Qatar, Oman, Bahrain, and Kuwait.
        </p>

        <p className="cta-text mb-4" style={{ fontWeight: 700 }}>
         Visit
           {" "}
          <a
            href="https://www.angelgulfjobs.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0c4a6e", textDecoration: "underline" }}
          >
             AngelGulfJobs.com
          </a>
          {" "}
          and start your journey toward a secure, compliant, and rewarding career in the Gulf today.
        </p>

        <ul className="list-unstyled ms-0 mb-0 cta-list">
          <li className="cta-list-item">
            <span className="green-icon">✓</span>
            <span>Verified employers and genuine opportunities</span>
          </li>
          <li className="cta-list-item">
            <span className="green-icon">✓</span>
            <span>Guidance across visa processes and documentation</span>
          </li>
          <li className="cta-list-item">
            <span className="green-icon">✓</span>
            <span>Support for job seekers and hiring teams</span>
          </li>
        </ul>
      </section>

      {/* INTERNAL STYLE BLOCK — UI ONLY (no logic changes) */}
      <style>{`
        .hero-caption { font-size: 0.95rem; }
        .intro-text { color: #1e293b; font-size: 1.15rem; line-height: 1.8; }
        .blog-section { margin-bottom: clamp(2rem, 4vw, 4rem); }
        .blog-section:last-of-type { margin-bottom: 0; }
        .blog-section p { margin-bottom: 1.2rem; line-height: 1.75; }
        .blog-section ul,
        .blog-section ol { padding-left: 0; }
        .blog-section li { line-height: 1.6; }
        .plain-list { list-style: disc; margin: 0.15rem 0 0.65rem 0.85rem; padding: 0; }
        .plain-list li { margin-bottom: 0.28rem; }
        .section-title-blue { color: #009bd4; margin-bottom: 1.5rem; }
        .section-title-dark { color: #0f172a; margin-bottom: 1.5rem; }

        .counter-list li { position: relative; }
        .counter { position: absolute; left: 0; top: 2px; width: 32px; height: 32px; border-radius: 50%;
          background: linear-gradient(135deg, #009bd4, #0284c7); color: #fff; display: inline-flex; align-items: center;
          justify-content: center; font-weight: bold;
        }

        .green-icon {
          width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center;
          font-size: 0.75rem; font-weight: bold; border-radius: 50%; flex-shrink: 0;
          transition: transform 0.25s ease;
          background: #dcfce7; color: #16a34a;
        }

        .cta-box {
          background: linear-gradient(135deg, #edf6ff 0%, #dff1ff 100%);
          border: 1px solid rgba(0,155,212,0.2);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);
        }

        .cta-icon-wrapper {
          width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #009bd4 0%, #0284c7 100%);
          display: inline-flex; align-items: center; justify-content: center; margin-right: 1rem;
        }

        .cta-title { color: #0c4a6e; }
        .cta-text { color: #0c4a6e; line-height: 1.75; }

        .cta-list-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 0.85rem;
        }

        .cta-list-item span:last-child {
          color: #0c4a6e;
          flex: 1;
        }

        /* Responsive tweaks */
        @media (max-width: 991px) {
          .intro-text { font-size: 1.08rem; }
          .blog-section { margin-bottom: 2.5rem; }
        }

        @media (max-width: 767px) {
          .bloglayout-reading section + section { padding-top: 2rem; }
          .counter-list li { padding-left: 40px; }
          .counter { top: 4px; width: 32px; height: 32px; }
          .cta-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .cta-box { padding: 1.8rem; }
          .cta-list-item { align-items: flex-start; }
        }

        @media (max-width: 575px) {
          .hero-caption { font-size: 0.9rem; }
          .cta-list-item { flex-direction: column; gap: 8px; }
          .counter-list li { padding-left: 34px; }
          .counter { width: 28px; height: 28px; font-size: 0.85rem; }
          .cta-box { text-align: left; }
          .cta-text { font-size: 0.95rem; }

          .green-icon {
            display: none;
          }

          .cta-list-item {
            position: relative;
            padding-left: 18px;
          }

          .cta-list-item::before {
            content: "";
            width: 8px;
            height: 8px;
            border-radius: 999px;
            position: absolute;
            top: 0.55rem;
            left: 0;
            background: #16a34a;
          }
        }
      `}</style>
    </BlogLayout>
  );
};

export default GccWorkPermitProcessEmploymentVisa;
