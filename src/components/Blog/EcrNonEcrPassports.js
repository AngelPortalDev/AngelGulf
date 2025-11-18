import React from "react";
import BlogLayout from "./BlogLayout";
import heroImg from "../../assets/images/blogs/ecr-non-ecr-bg.png";
import sectionImg from "../../assets/images/blogs/Difference-between-ECR-and -ECNR-Passports.png";
import StepsImg from "../../assets/images/blogs/points-to-remember-before-travelling.png";

const SEO_KEYWORDS = [
  "ECR passport",
  "ECNR passport",
  "difference between ECR and ECNR",
  "emigration clearance",
  "eMigrate portal",
  "Gulf job visa",
  "Indian passport ECR ECNR",
  "Emigration Check Required countries",
  "ECNR eligibility",
  "Indian workers abroad",
  "Protector of Emigrants",
  "Pravasi Bharatiya Bima Yojana",
  "Angel Gulf Jobs",
  "Gulf employment visa from India",
  "working in UAE",
  "jobs in Saudi Arabia",
  "Qatar jobs for Indians",
  "Oman employment clearance",
  "Kuwait jobs",
  "Bahrain job opportunities",
];

const EcrNonEcrPassports = () => {
  return (
    <BlogLayout
      title="ECR and Non-ECR Passports: What Indian Gulf Jobseekers Must Know"
      subtitle="Understand whether your passport needs emigration clearance before you travel for work to Gulf countries."
      eyebrow="Compliance & documentation"
      intro="Knowing whether your passport is ECR (Emigration Check Required) or ECNR (Emigration Check Not Required) is critical before you accept a Gulf job offer and travel overseas."
      hero={(
        <figure className="text-center mb-0">
          <img
            src={heroImg}
            alt="Difference between ECR and ECNR passports"
            className="img-fluid rounded-4 shadow"
            style={{ maxHeight: "460px", objectFit: "cover" }}
          />
          <figcaption className="mt-3 text-muted fst-italic hero-caption">
            Difference between ECR and ECNR passports for Indian jobseekers planning Gulf employment.
          </figcaption>
        </figure>
      )}
      metaHighlights={[
        { label: "Category", value: "Compliance & Documentation" },
        { label: "Reading time", value: "7 mins" },
        { label: "Updated", value: "Nov 2025" },
      ]}
      metaTitle="ECR vs ECNR Passport | Difference Between ECR and Non-ECR Passports"
      metaDescription="Learn the difference between ECR and ECNR passports, who needs emigration clearance, and how Indian jobseekers can safely travel for Gulf employment using the eMigrate portal."
      metaKeywords={SEO_KEYWORDS}
      breadcrumbItems={[
        {
          label: "ECR and Non-ECR passports",
        },
      ]}
      canonicalUrl="https://www.angelgulfjobs.com/blogs/ecr-and-non-ecr-passports"
    >
      {/* INTRO & OVERVIEW */}
      <section className="blog-section mb-5">
        <h2 className="h3 fw-bold section-title-blue">
          Difference Between ECR (Emigration Check Required) and ECNR (Emigration Check Not Required) Passports
        </h2>

        <p>
          When applying for a Gulf employment visa from India, one of the most important things to understand is your passport
          category: ECR (Emigration Check Required) or ECNR (Emigration Check Not Required).
        </p>

        <p>
          Your passport type determines if you need to get emigration clearance before travelling abroad for work, especially to
          Gulf countries like the UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain.
        </p>

        <figure className="my-4 text-center">
          <img
            src={sectionImg}
            alt="Difference between ECR and ECNR Passports"
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxWidth: "720px" }}
          />
          <figcaption className="mt-2 text-muted" style={{ fontSize: "0.95rem" }}>
            Difference between ECR and ECNR passports.
          </figcaption>
        </figure>
      </section>

      {/* ECR PASSPORT EXPLAINED */}
      <section className="blog-section mb-5">
        <h2 className="h3 fw-bold section-title-blue">What Is an ECR (Emigration Check Required) Passport?</h2>

        <p>
          The Emigration Act, 1983, regulates the migration of Indian workers, whether skilled, semi-skilled, unskilled, and
          certain notified professionals, such as nurses, to 18 specified countries, including all the Gulf nations.
        </p>

        <p>
          If your passport has an "Emigration Check Required" (ECR) stamp, you must obtain emigration clearance from the Protector
          of Emigrants (POE) before leaving India for employment in any of these countries.
        </p>

        <p>
          This system protects workers with lower education levels or limited awareness from exploitation abroad.
        </p>

        <h3 className="h5 fw-bold section-title-dark mt-4">Who Gets an ECR Passport</h3>

        <p>You will usually have an ECR passport if:</p>

        <ul>
          <li>You have not passed the 10th standard (matriculation).</li>
          <li>
            You are an unskilled or semi-skilled worker (labourer, housemaid, helper, cleaner, driver, etc.).
          </li>
          <li>
            You belong to any category of work notified by the Ministry of External Affairs (MEA) as requiring emigration
            clearance, such as nurses going to specific Gulf countries.
          </li>
        </ul>

        <p>If you fall into any of these categories, your passport will have an ECR endorsement.</p>
      </section>

      {/* WHAT TO DO BEFORE TRAVELLING WITH ECR PASSPORT */}
      <section className="blog-section mb-5">
        <h2 className="h3 fw-bold section-title-blue">What You Must Do Before Travelling with an ECR Passport</h2>

        <figure className="my-4 text-center">
          <img
            src={StepsImg}
            alt="Points to remember before travelling with an ECR passport"
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxWidth: "720px" }}
          />
          <figcaption className="mt-2 text-muted" style={{ fontSize: "0.95rem" }}>
            Points to remember before travelling with an ECR passport.
          </figcaption>
        </figure>

        <p>
          If you hold an ECR passport and plan to work in any Gulf country, you must complete these steps before departure:
        </p>

        <ul>
          <li>Register and apply for emigration clearance through the official eMigrate Portal.</li>
          <li>
            Obtain approval from the Protector of Emigrants (POE) after your job offer and employer are verified.
          </li>
          <li>
            Purchase Pravasi Bharatiya Bima Yojana (PBBY) insurance, which is a mandatory travel and work insurance scheme for
            Indian workers abroad.
          </li>
        </ul>

        <p>
          Without this clearance, you will not be permitted to board your flight from Indian airports for employment purposes.
          The Bureau of Immigration is authorised to stop ECR passport holders from travelling to ECR-listed countries (including
          all GCC nations) without POE clearance.
        </p>

        <h3 className="h5 fw-bold section-title-dark mt-4">List of the 18 Countries Where Emigration Check Is Required</h3>

        <ul>
          <li>Afghanistan</li>
          <li>Bahrain</li>
          <li>Indonesia</li>
          <li>Iraq</li>
          <li>Jordan</li>
          <li>Kingdom of Saudi Arabia</li>
          <li>Kuwait</li>
          <li>Lebanon</li>
          <li>Libya</li>
          <li>Malaysia</li>
          <li>Oman</li>
          <li>Qatar</li>
          <li>South Sudan</li>
          <li>Sudan</li>
          <li>Syria</li>
          <li>Thailand</li>
          <li>United Arab Emirates</li>
          <li>Yemen</li>
        </ul>
      </section>

      {/* ECNR PASSPORT EXPLAINED */}
      <section className="blog-section mb-5">
        <h2 className="h3 fw-bold section-title-blue">What Is an ECNR (Emigration Check Not Required) Passport?</h2>

        <p>
          An ECNR passport means you do not need emigration clearance to travel abroad for employment, education, or tourism.
          You can freely work in any Gulf country without POE approval.
        </p>

        <h3 className="h5 fw-bold section-title-dark mt-4">Who Gets an ECNR (Non-ECR) Passport</h3>

        <p>You automatically qualify for an ECNR passport if you meet any one of the following criteria:</p>

        <ul>
          <li>Passed 10th standard or higher (SSLC, HSC, diploma, or degree holder).</li>
          <li>Professional or technical qualification holder (doctor, engineer, nurse, teacher, etc.).</li>
          <li>Income-tax payer with a valid PAN or ITR proof.</li>
          <li>Government or public sector employee, or dependent/spouse/child of such an employee.</li>
          <li>Worked abroad for over 3 years (in one or multiple periods).</li>
          <li>Minor (below 18 years) or senior citizen (above 50 years).</li>
        </ul>

        <p>
          Note: Even if you are qualified for ECNR, some professions, like nursing, may still require emigration clearance under
          specific Ministry of External Affairs (MEA) notifications.
        </p>
      </section>

      {/* HOW TO CHECK YOUR PASSPORT TYPE */}
      <section className="blog-section mb-5">
        <h2 className="h3 fw-bold section-title-blue">How to Check if Your Passport Is ECR or ECNR</h2>

        <p>You can identify your passport type easily:</p>

        <ul>
          <li>Old passport booklets: If there is no ECR stamp on page 3, it is non-ECR (ECNR).</li>
          <li>
            New passport booklets: "Emigration Check Required" is printed above the Father/Legal Guardian field on the last page.
          </li>
        </ul>

        <p>If there is no mention or stamp at all, your passport is ECNR (Non-ECR).</p>

        <p>
          <strong>Pro Tip for Gulf Jobseekers:</strong> If you hold an ECR passport, always apply for jobs abroad through a
          registered recruiting agent or a verified employer, such as Angel Gulf Jobs, listed on the eMigrate Portal. This ensures
          your employment contract, wages, and working conditions are officially approved and you are protected under the Emigration
          Act, 1983.
        </p>
      </section>

      {/* FAQ SECTION */}
      <section className="blog-section mb-5">
        <h2 className="h3 fw-bold section-title-blue">FAQs</h2>

        <div className="accordion accordion-flush blog-faq" id="ecrFaqAccordion">
          <div className="accordion-item blog-faq-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed fw-semibold blog-faq-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#ecrFaqOne"
              >
                1. What is an ECR Passport?
              </button>
            </h3>
            <div id="ecrFaqOne" className="accordion-collapse collapse" data-bs-parent="#ecrFaqAccordion">
              <div className="accordion-body blog-faq-body">
                It is a passport type requiring emigration clearance before leaving India for employment in 18 ECR-listed
                countries, including all Gulf nations.
              </div>
            </div>
          </div>

          <div className="accordion-item blog-faq-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed fw-semibold blog-faq-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#ecrFaqTwo"
              >
                2. Who is eligible for a non-ECR Passport?
              </button>
            </h3>
            <div id="ecrFaqTwo" className="accordion-collapse collapse" data-bs-parent="#ecrFaqAccordion">
              <div className="accordion-body blog-faq-body">
                Anyone who has passed Class 10 or qualifies as a professional, taxpayer, government staff, overseas
                worker (3+ years), minor, or senior citizen (50+).
              </div>
            </div>
          </div>

          <div className="accordion-item blog-faq-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed fw-semibold blog-faq-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#ecrFaqThree"
              >
                3. Are ECR passport holders stopped at Indian airports?
              </button>
            </h3>
            <div id="ecrFaqThree" className="accordion-collapse collapse" data-bs-parent="#ecrFaqAccordion">
              <div className="accordion-body blog-faq-body">
                Yes, ECR passport holders without emigration clearance for ECR countries can be stopped by Immigration
                Officers.
              </div>
            </div>
          </div>

          <div className="accordion-item blog-faq-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed fw-semibold blog-faq-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#ecrFaqFour"
              >
                4. How can I convert my ECR passport to a non-ECR (ECNR) passport?
              </button>
            </h3>
            <div id="ecrFaqFour" className="accordion-collapse collapse" data-bs-parent="#ecrFaqAccordion">
              <div className="accordion-body blog-faq-body">
                If you now qualify for ECNR (for example, as a 10th-pass candidate or taxpayer), apply for a reissued
                passport via a Passport Seva Kendra (PSK) in India or VFS Centre abroad.
              </div>
            </div>
          </div>

          <div className="accordion-item blog-faq-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed fw-semibold blog-faq-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#ecrFaqFive"
              >
                5. Why is understanding ECR vs ECNR so important for Gulf jobseekers?
              </button>
            </h3>
            <div id="ecrFaqFive" className="accordion-collapse collapse" data-bs-parent="#ecrFaqAccordion">
              <div className="accordion-body blog-faq-body">
                Understanding your ECR versus ECNR passport status ensures a smooth, legal, and safe transition to your
                dream Gulf job. Always follow official emigration procedures to avoid travel issues and stay compliant with
                the Emigration Act, 1983.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-box mb-5 p-4 p-md-5 rounded-4">
        <div className="d-flex flex-wrap align-items-center mb-4 gap-3 cta-header">
          <div className="cta-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="white" />
            </svg>
          </div>
          <h2 className="h3 fw-bold mb-0 cta-title">Find Your Dream Gulf Job with Angel Gulf Jobs</h2>
        </div>

        <p className="cta-text">
          Looking for verified Gulf job opportunities? Explore Angel Gulf Jobs – India's trusted platform connecting
          skilled professionals with top Gulf employers. Browse verified openings, get document support, and apply safely through
          registered recruiters.
        </p>

        <p className="cta-text mb-4">
          👉 Visit
          {" "}
          <a
            href="/registration"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 700, color: "#0c4a6e", textDecoration: "underline" }}
          >
            Angel Gulf Jobs
          </a>
          {" "}
          now to start your overseas career journey today!
        </p>
      </section>

      {/* INTERNAL STYLE BLOCK — UI ONLY */}
      <style>{`
        .hero-caption { font-size: 0.95rem; }
        .intro-text { color: #1e293b; font-size: 1.1rem; line-height: 1.8; }
        .blog-section { margin-bottom: clamp(2rem, 4vw, 4rem); }
        .blog-section:last-of-type { margin-bottom: 0; }
        .blog-section p { margin-bottom: 1.2rem; line-height: 1.75; }
        .blog-section ul,
        .blog-section ol { padding-left: 1.25rem; }
        .blog-section li { line-height: 1.7; margin-bottom: 0.4rem; }
        .section-title-blue { color: #009bd4; margin-bottom: 1.5rem; }
        .section-title-dark { color: #0f172a; margin-bottom: 0.85rem; }

        .blog-faq {
          border-radius: 22px;
          border: 1px solid rgba(0,155,212,0.25);
          background: #f4fbff;
        }

        .blog-faq-item + .blog-faq-item {
          border-top: 1px solid rgba(0,155,212,0.15);
        }

        .blog-faq-button {
          background: transparent;
          color: #0f172a;
          font-size: 1.02rem;
          padding: 1.2rem 1.35rem;
          border-radius: 0;
          box-shadow: none;
        }

        .blog-faq-button:focus {
          box-shadow: none;
        }

        .blog-faq-button:not(.collapsed) {
          background: rgba(0,155,212,0.08);
          color: #0b3c5d;
        }

        .blog-faq-button::after {
          filter: invert(33%) sepia(98%) saturate(708%) hue-rotate(159deg) brightness(94%) contrast(92%);
        }

        .blog-faq-body {
          padding: 1.1rem 1.35rem 1.4rem;
          color: #475569;
          line-height: 1.7;
          background: #ffffff;
        }
      `}</style>
    </BlogLayout>
  );
};

export default EcrNonEcrPassports;
