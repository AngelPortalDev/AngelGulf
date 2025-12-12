import React from "react";
import { NavLink } from "react-router-dom";
import BgImg from "../../assets/images/backgroundImages/banner-articles.jpg";
import heroImg from "../../assets/images/UAE-Labour-Law.png";
import labourLawImg from "../../assets/images/UAE-Labour-Law-1.png";
import complaintImg from "../../assets/images/labour-complaint-in-UAE.jpg";

const UAELabourViolations = () => {
  return (
    <div>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${BgImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h1 className="wt-title darkblueTxt">
                    UAE Labour Law: Reporting 13 Major Labour Violations
                  </h1>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>UAE Labour Law: 13 Major Violations</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}

        {/* ARTICLE BODY */}
        <div className="section-full p-t20 p-b40 bg-white">
          <div className="container">
            <div className="section-content">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-10 col-md-12">
                  <div className="cabdidate-de-info">
                    <figure className="my-4">
                      <img
                        src={heroImg}
                        alt="UAE labour protection initiatives"
                        className="img-fluid rounded-4 shadow-sm"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </figure>

                    <p className="article-intro">
                      The Ministry of Human Resources and Emiratisation (MoHRE) has officially outlined 13 types of labour market violations to help protect workers and ensure fair employment practices in the UAE. This initiative strengthens transparency, supports worker safety, and encourages community involvement in reporting improper labour practices.
                    </p>
                    <p>
                      At Angel Gulf Jobs, an overseas job consultant, we support ethical recruitment and help overseas workers understand their rights under UAE labour law. As a trusted UAE recruitment agency and overseas job consultant, we guide job seekers through safe, transparent, and compliant hiring practices.
                    </p>
                    <p>
                      Our mission, at Angel Gulf Jobs, a licensed manpower consultancy in Mumbai, is to help workers enter the UAE job market with confidence, clarity, and protection.
                    </p>

                    <h2 className="h4 mt-4 mb-3">Multiple Safe Channels for Reporting Labour Complaints</h2>
                    <p>
                      MoHRE in the UAE now offers quick, safe, and confidential reporting methods to file a labour complaint more easily for all workers. Complaints can be submitted through:
                    </p>
                    <ul>
                      <li>MoHRE Mobile App (Android &amp; iOS)</li>
                      <li>Official MoHRE Website</li>
                      <li>MoHRE Helpline: 600 590 000</li>
                    </ul>
                    <p>
                      Every complaint is handled confidentially and reviewed fairly. Workers no longer need to worry about job loss, pressure from employers, or the need for physical office visits. This supports the UAE’s commitment to worker protection, human rights, and transparent labour laws.
                    </p>

                    <h2 className="h4 mt-4 mb-3">13 Reportable Labour Violations Under UAE Labour Law</h2>
                    <figure className="my-4">
                      <img
                        src={labourLawImg}
                        alt="UAE Labour Law guidance"
                        className="img-fluid rounded-4 shadow-sm"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </figure>
                    <p>MoHRE has identified the following 13 key violations that workers and community members can report:</p>
                    <ol className="article-ordered-list">
                      <li>False Emiratisation (faking Emirati employment records)</li>
                      <li>Unsafe or overcrowded worker accommodation</li>
                      <li>Lack of occupational health and safety compliance</li>
                      <li>Breaches of the mid-day break or heat-stress protection policy</li>
                      <li>Forced labour or human trafficking</li>
                      <li>Failure to report workplace injuries</li>
                      <li>Illegal recruitment of domestic workers</li>
                      <li>Non-compliance with Emiratisation requirements</li>
                      <li>Workplace harassment, bullying, or discrimination</li>
                      <li>Unpaid end-of-service benefits</li>
                      <li>Overtime beyond the legal two-hour daily limit</li>
                      <li>Denial of annual leave or its cash allowance</li>
                      <li>Employment of illegal or unregistered workers</li>
                    </ol>
                    <p>
                      These violations affect the fairness, safety, and integrity of the UAE labour market. MoHRE encourages workers and community members to report any such issues immediately through official channels.
                    </p>

                    <h2 className="h4 mt-4 mb-3">Strict Penalties for Employers Violating UAE Labour Laws</h2>
                    <p>Employers who engage in these violations may face:</p>
                    <ul>
                      <li>Heavy fines</li>
                      <li>Suspension of business activities</li>
                      <li>Legal prosecution</li>
                      <li>Blacklisting from hiring workers</li>
                      <li>Increased labour inspections</li>
                    </ul>
                    <p>
                      These penalties ensure stronger compliance and promote a safer, more ethical work environment for all employees in the UAE.
                    </p>

                    <h2 className="h4 mt-4 mb-3">How to File a Labour Complaint in the UAE</h2>
                    <p>
                      Filing a labour complaint in the UAE is now fast, secure, and fully digital. Workers can report any issue, such as unpaid salaries, unsafe work conditions, contract violations, or harassment, directly to the Ministry of Human Resources and Emiratisation (MoHRE) through official channels.
                    </p>

                    <div className="article-numbered-list">
                      <div className="article-numbered-item">
                        <h3 className="h5 mb-2">1. File a Complaint Through the MoHRE App</h3>
                        <p>The MoHRE mobile app (available on both Android and iOS) is the easiest way to submit a complaint.</p>
                        <p>Steps to follow:</p>
                        <ul>
                          <li>Download the MoHRE App</li>
                          <li>Create or log in to your account</li>
                          <li>Select “Services” → “Register Labour Complaint”</li>
                          <li>Choose the type of complaint</li>
                          <li>Upload supporting documents (salary slips, contract, photos, etc.)</li>
                          <li>Submit and track your complaint in the app</li>
                        </ul>
                        <p>You will receive updates and notifications throughout the process.</p>
                      </div>

                      <div className="article-numbered-item">
                        <h3 className="h5 mb-2">2. Submit a Complaint on the MoHRE Website</h3>
                        <p>
                          Workers can also file a labour complaint directly through the official MoHRE website.
                        </p>
                        <p>Steps:</p>
                        <ul>
                          <li>Visit the MoHRE website</li>
                          <li>Go to the “Complaints” or “Labor Services” section</li>
                          <li>Select “Register Labour Complaint”</li>
                          <li>Fill in your personal and company details</li>
                          <li>Attach documents and submit the complaint</li>
                        </ul>
                        <p>This option is ideal for workers who prefer using a laptop or desktop.</p>
                      </div>
                    </div>

                    <figure className="my-4">
                      <img
                        src={complaintImg}
                        alt="Steps to file a labour complaint in the UAE"
                        className="img-fluid rounded-4 shadow-sm"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </figure>

                    <div className="article-numbered-list">
                      <div className="article-numbered-item">
                        <h3 className="h5 mb-2">3. Call the MoHRE Helpline</h3>
                        <p>If you want support in real-time, you can speak to a MoHRE representative.</p>
                        <p>MoHRE Helpline: 600 590 000</p>
                        <p>You can:</p>
                        <ul>
                          <li>File a complaint</li>
                          <li>Ask questions</li>
                          <li>Seek guidance on your labour rights</li>
                          <li>Get help in multiple languages</li>
                        </ul>
                      </div>
                    </div>

                    <h2 className="h4 mt-4 mb-3">Final Thoughts</h2>
                    <p>
                      The MoHRE labour complaint system marks a transformative step in overseas jobs in UAE worker protection and employer accountability. For Indian workers in the UAE and GCC, knowing the 13 reportable labour violations provides a sense of security, dignity, and empowerment.
                    </p>
                    <p>
                      This initiative not only reinforces fair work laws in the UAE but also supports the region’s broader goal of ethical employment and human rights advancement.
                    </p>

                    <h2 className="h4 mt-4 mb-3">Angel Gulf Jobs: Supporting Worker Rights in the UAE</h2>
                    <p>
                      At Angel Gulf Jobs, as a licensed recruiting agency, we guide overseas workers and job seekers who come to the UAE for safe and ethical employment. We fully support the UAE’s efforts to protect workers and ensure fairness in the labour market. If you need help understanding your rights, your contract, or the complaint process, our team is here to assist you.
                    </p>
                    <p>
                      👉 Stay informed. Stay protected. Angel Gulf Jobs continues to be your trusted overseas job consultant for UAE labour law updates, safe recruitment guidance, and legal awareness across the Gulf region.
                    </p>

                    <p>
                      <strong>Source:</strong>{" "}
                      <a
                        href="https://gulfnews.com/uae/government/know-your-rights-13-labour-violations-you-can-report-to-mohre-in-the-uae-1.500243325"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary"
                      >
                        https://gulfnews.com/uae/government/know-your-rights-13-labour-violations-you-can-report-to-mohre-in-the-uae-1.500243325
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ARTICLE BODY END */}
      </div>

      <style>{`
        .cabdidate-de-info {
          max-width: 760px;
          margin: 0 auto;
        }

        .cabdidate-de-info p {
          margin-bottom: 1rem;
          line-height: 1.75;
          color: #111827;
        }

        .cabdidate-de-info h2 {
          margin-top: 2.25rem;
          margin-bottom: 1rem;
          font-size: 1.3rem;
          font-weight: 700;
          color: #0f172a;
        }

        .article-intro {
          margin-top: 1.5rem;
          margin-bottom: 1.75rem;
          font-size: 1.05rem;
          line-height: 1.8;
          color: #1e293b;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 1.2rem;
        }

        .cabdidate-de-info ul {
          padding-left: 1.25rem;
          margin-bottom: 1.1rem;
        }

        .cabdidate-de-info li {
          line-height: 1.7;
          margin-bottom: 0.45rem;
        }

        .article-numbered-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .article-numbered-item {
          padding: 1.25rem;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 1rem;
          background: #f8fafc;
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);
        }

        .article-ordered-list {
          padding-left: 1.5rem;
          margin-bottom: 1.1rem;
        }

        .article-ordered-list li {
          margin-bottom: 0.45rem;
          line-height: 1.7;
        }

        @media (max-width: 767px) {
          .cabdidate-de-info h2 {
            font-size: 1.15rem;
          }
        }
      `}</style>
    </div>
  );
};

export default UAELabourViolations;
