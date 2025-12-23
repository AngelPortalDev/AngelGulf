import React from "react";
import BlogLayout from "./BlogLayout";
import BgImge from '../../assets/images/blogs/GCC-salary.png'; // Using this for Hero
import BlueCollarImg from '../../assets/images/blogs/Blue-collar-worker-Average-Salary.png'; // Fallback for Blue Collar from blogs folder
import WhiteCollarImg from '../../assets/images/blogs/White-collar-workers-Average-Salary.png'; // Fallback for White Collar from blogs folder
import SalaryStructureImg from '../../assets/images/blogs/Salary-Structure.png'; // For Salary Structure

const SEO_KEYWORDS = [
    "GCC Countries",
    "white collar workers",
    "blue-collar workers",
    "Average salary",
    "GCC Nations",
    "blue-collar salary",
    "white collar salary",
    "Salary in Kuwait",
    "Salary in Saudi Arabia",
    "Salary in Qatar",
    "Salary in Oman",
    "Salary in UAE",
    "Salary in Bahrain",
    "Jobs in Gulf"
];

const AverageSalaryGCC = () => {
    return (
        <BlogLayout
            title="The Average Salary in GCC Countries"
            subtitle=""
            eyebrow=""
            intro=""
            hero={(
                <figure className="text-center mb-0">
                    <img
                        src={BgImge}
                        alt="The Average Salary in GCC Countries"
                        className="img-fluid rounded-4 shadow"
                        style={{ maxHeight: "460px", objectFit: "cover" }}
                    />

                </figure>
            )}
            metaHighlights={[
                { label: "Category", value: "Salary Guide" },
                { label: "Reading time", value: "8 mins" },
                { label: "Updated", value: "Oct 2025" },
            ]}
            metaTitle="The Average Salary in GCC Countries"
            metaDescription="Discover the 2025 average salary trends in GCC countries for blue-collar and white-collar workers. Compare salaries in UAE, Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain. Angel Gulf Jobs, your trusted Gulf job consultancy, offers verified jobs, salary guidance, and end-to-end support for working in the Gulf."
            metaKeywords={SEO_KEYWORDS}
            breadcrumbItems={[
                {
                    label: "The Average Salary in GCC Countries",
                },
            ]}
            canonicalUrl="https://www.angelgulfjobs.com/blogs/average-salary-gcc-countries"
        >

            {/* INTRO */}
            <section className="blog-section mb-5">
                <p className="lead fw-normal intro-text">
                    A 2025 Salary Guide by Angel Gulf Jobs, Your Trusted Gulf Job Consultancy for jobs in Gulf.
                </p>
                <p className="lead fw-normal intro-text">
                    If you’re planning to work in the Gulf, one of the first things you want to know is “How much will I earn?”
                </p>
                <p>
                    At Angel Gulf Jobs, as a leading manpower consultancy for jobs in Gulf, we help thousands of blue-collar workers and white-collar workers every year secure high-quality jobs in the GCC Nations of UAE, Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain.
                </p>

                <p>
                    This blog gives you a clear, realistic, and updated picture of average salary for blue-collar workers and white-collar workers across Gulf countries and the salary structure of GCC Countries.
                </p>
            </section>

            {/* WHY SALARY AWARENESS MATTERS */}
            <section className="blog-section mb-5">
                <h2 className="h3 fw-bold section-title-blue">Why Salary Awareness for White-collar workers and Blue-collar workers Matters in GCC Countries?</h2>

                <p>
                    Whether you're a blue-collar worker, such as welder, driver, nurse, engineer, or accountant, or a White-collar worker, such as an IT professional, knowing GCC salary trends and salary structure helps you to:
                </p>

                <ul className="list-unstyled ms-0 green-tick-list">
                    <li><span className="green-icon">✓</span> Negotiate your salary confidently in GCC Countries</li>
                    <li><span className="green-icon">✓</span> Choose the right country among the GCC Countries</li>
                    <li><span className="green-icon">✓</span> Understand the full benefits and salary structure for jobs in the Gulf, such as accommodation, food, transport, medical, and visa.</li>
                    <li><span className="green-icon">✓</span> Plan long-term career growth in GCC Countries.</li>
                </ul>

                <p>
                    At Angel Gulf Jobs, as licensed Gulf Job consultants, we ensure candidates know exactly what to expect before they accept any role.
                </p>
            </section>

            {/* IMAGE: Blue-collar worker */}
            <div className="text-center my-5">
                <img
                    src={BlueCollarImg}
                    alt="Blue-collar worker | Average Salary"
                    className="img-fluid rounded-4 shadow-sm"
                    style={{ maxWidth: "720px" }}
                />
            </div>

            {/* 1. UAE */}
            <section className="blog-section mb-5">
                <h2 className="h3 fw-bold section-title-blue">1. Salary in United Arab Emirates (UAE)</h2>

                <p>
                    The United Arab Emirates (UAE) offers competitive salary packages across a wide range of blue-collar and White-collar industries, attracting job seekers from India for Jobs in Gulf. To help candidates understand what salary to expect, we’ve outlined the typical salary ranges across key roles and sectors below:
                </p>

                <h3 className="h4 fw-bold section-title-dark mt-4">Average salary in UAE for Blue-Collar Salary Range</h3>
                <ul className="list-unstyled ms-0 mb-4">
                    <li><strong>Helpers / Cleaners:</strong> AED 1000 – 1,500</li>
                    <li><strong>Drivers:</strong> AED 1,800 – 3000</li>
                    <li><strong>Electricians / Plumbers:</strong> AED 2000 – 2,500</li>
                    <li><strong>Technicians / Mechanics:</strong> AED 2,000 – 3,500</li>
                    <li><strong>Construction Workers:</strong> AED 1,200 – 1600</li>
                </ul>
                <p className="fst-italic">Many companies provide free accommodation + transport + medical + visa + overtime.</p>

                <h3 className="h4 fw-bold section-title-dark mt-4">Average salary in UAE for White-Collar Salary Range</h3>
                <ul className="list-unstyled ms-0 mb-4">
                    <li><strong>Administrators / Coordinators:</strong> AED 4,000 – 8,000</li>
                    <li><strong>Accountants:</strong> AED 5,000 – 12,000</li>
                    <li><strong>Engineers:</strong> AED 8,000 – 20,000</li>
                    <li><strong>Nurses:</strong> AED 6,000 – 12,000</li>
                    <li><strong>IT Professionals:</strong> AED 8,000 – 25,000</li>
                </ul>
                <p>Angel Gulf Jobs, as a leading Overseas Job Consultancy, regularly recruits for both categories in the UAE through verified employers.</p>
            </section>

            {/* 2. SAUDI ARABIA */}
            <section className="blog-section mb-5">
                <h2 className="h3 fw-bold section-title-blue">2. Salary in Saudi Arabia</h2>

                <p>
                    Saudi Arabia continues to attract a global workforce with its strong economy, tax-free income, and large-scale development under Vision 2030. To give job seekers a clear understanding of earning potential, we’ve outlined the typical salary ranges across key roles and industries below.
                </p>

                <h3 className="h4 fw-bold section-title-dark mt-4">Average Salary in Saudi Arabia for Blue-Collar Workers</h3>
                <ul className="list-unstyled ms-0 mb-4">
                    <li><strong>Labour / Helper:</strong> SAR 1300 – 1600+OT</li>
                    <li><strong>Drivers:</strong> SAR 1,700 – 2,500</li>
                    <li><strong>Technicians (HVAC, Electrical, Mechanical):</strong> SAR 1,800 – 3,000</li>
                    <li><strong>Construction Workers:</strong> SAR 1,200 – 2,000</li>
                    <li><strong>Factory Workers:</strong> SAR 1,000 – 1,600</li>
                </ul>
                <p className="fst-italic">Most roles include accommodation, food or allowance, medical, and transportation.</p>

                <h3 className="h4 fw-bold section-title-dark mt-4">Average Salary in Saudi Arabia for White-Collar Workers</h3>
                <ul className="list-unstyled ms-0 mb-4">
                    <li><strong>Office Staff / Clerks:</strong> SAR 3,000 – 6,000</li>
                    <li><strong>Engineers (Civil/Mechanical/Electrical):</strong> SAR 7,000 – 15,000</li>
                    <li><strong>Nurses / Healthcare Staff:</strong> SAR 5,000 – 12,000</li>
                    <li><strong>Finance & Accounting:</strong> SAR 6,000 – 14,000</li>
                    <li><strong>IT / Cybersecurity:</strong> SAR 7,000 – 25,000</li>
                </ul>
                <p>Saudi Arabia is growing rapidly due to Saudi Vision 2030, and we at Angel Gulf Jobs, as one of the Gulf’s leading and most trusted manpower consultancy, connect ambitious job seekers to top-tier Gulf job opportunities across the region’s most iconic mega-projects.</p>
            </section>

            {/* 3. QATAR */}
            <section className="blog-section mb-5">
                <h2 className="h3 fw-bold section-title-blue">3. Salary in Qatar</h2>

                <p>
                    Qatar is a leading employment destination for job seekers looking for Jobs in Gulf, offering tax-free income and strong demand for jobs in construction, jobs in healthcare, engineering, and IT sectors. The average salary in Qatar varies by role and skill level, with many positions including benefits such as accommodation, transport, and food allowances.
                </p>

                <h3 className="h4 fw-bold section-title-dark mt-4">Average Salary in Qatar for Blue-Collar Workers</h3>
                <ul className="list-unstyled ms-0 mb-4">
                    <li><strong>Helpers / Labour:</strong> QAR 900 – 1,200</li>
                    <li><strong>Drivers:</strong> QAR 1,800 – 2,500</li>
                    <li><strong>Technicians:</strong> QAR 1,800 – 3,000</li>
                    <li><strong>Construction Workers:</strong> QAR 1,200 – 1,800</li>
                    <li><strong>Warehouse & Packing Staff:</strong> QAR 1,000 – 1,600</li>
                </ul>
                <p className="fst-italic">Packages often include food/allowance, accommodation, and transport.</p>

                <h3 className="h4 fw-bold section-title-dark mt-4">Average Salary in Qatar for White-Collar Workers</h3>
                <ul className="list-unstyled ms-0 mb-4">
                    <li><strong>Office Assistants:</strong> QAR 3,000 – 6,000</li>
                    <li><strong>Accountants:</strong> QAR 5,000 – 10,000</li>
                    <li><strong>Engineers:</strong> QAR 8,000 – 18,000</li>
                    <li><strong>Nurses:</strong> QAR 7,000 – 12,000</li>
                    <li><strong>IT / Telecom:</strong> QAR 8,000 – 20,000</li>
                </ul>
                <p>We, at Angel Gulf Jobs, position ourselves as a leading Overseas Job consultancy and support job seekers, looking for jobs in Qatar for its high-demand sectors like construction, oil & gas, and hospitality.</p>
            </section>

            {/* IMAGE: White-collar workers */}
            <div className="text-center my-5">
                <img
                    src={WhiteCollarImg}
                    alt="White-collar workers | Average Salary"
                    className="img-fluid rounded-4 shadow-sm"
                    style={{ maxWidth: "720px" }}
                />
            </div>

            {/* 4. KUWAIT */}
            <section className="blog-section mb-5">
                <h2 className="h3 fw-bold section-title-blue">4. Salary in Kuwait</h2>

                <p>
                    Kuwait offers competitive, tax-free salaries and continues to attract expatriate talent from India for jobs in construction, jobs in healthcare, engineering, and IT sectors. The average salary in Kuwait differs by job role and experience level, with the ranges below highlighting typical earnings for both blue-collar workers and white-collar workers.
                </p>

                <h3 className="h4 fw-bold section-title-dark mt-4">Average Salary in Kuwait for Blue-Collar Workers</h3>
                <ul className="list-unstyled ms-0 mb-4">
                    <li><strong>Labour:</strong> KD 80 – 150</li>
                    <li><strong>Drivers:</strong> KD 150 – 250</li>
                    <li><strong>Technicians:</strong> KD 140 – 250</li>
                    <li><strong>Construction Workers:</strong> KD 100 – 180</li>
                    <li><strong>Mechanics:</strong> KD 150 – 250</li>
                </ul>

                <h3 className="h4 fw-bold section-title-dark mt-4">Average Salary in Kuwait for White-Collar Workers</h3>
                <ul className="list-unstyled ms-0 mb-4">
                    <li><strong>Office Admin:</strong> KD 250 – 450</li>
                    <li><strong>Accountants:</strong> KD 300 – 60</li>
                    <li><strong>Nurses:</strong> KD 400 – 800</li>
                    <li><strong>Engineers:</strong> KD 400 – 900</li>
                    <li><strong>IT / Systems:</strong> KD 450 – 1,000</li>
                </ul>
                <p>Kuwait is known for good earnings relative to the cost of living. We, at Angel Gulf Jobs, as a licensed Gulf job consultancy, frequently recruit job seekers for both blue-collar and white-collar Job roles for jobs in Kuwait.</p>
            </section>

            {/* 5. OMAN */}
            <section className="blog-section mb-5">
                <h2 className="h3 fw-bold section-title-blue">5. Salary in Oman</h2>

                <p>
                    Oman’s salary landscape reflects a balanced labour market focused on infrastructure development, public services, and skilled expatriate roles. The average salary in Oman differs significantly between skilled workers and semi-skilled job roles, as outlined below across key occupations.
                </p>

                <h3 className="h4 fw-bold section-title-dark mt-4">Average Salary in Oman for Blue-Collar Workers</h3>
                <ul className="list-unstyled ms-0 mb-4">
                    <li><strong>Helpers:</strong> OMR 90 – 130</li>
                    <li><strong>Drivers:</strong> OMR 150 – 250</li>
                    <li><strong>Technicians:</strong> OMR 150 – 300</li>
                    <li><strong>Construction Workers:</strong> OMR 100 – 140</li>
                    <li><strong>Welders / Fitters:</strong> OMR 150 – 280</li>
                </ul>

                <h3 className="h4 fw-bold section-title-dark mt-4">Average Salary in Oman for White-Collar Workers</h3>
                <ul className="list-unstyled ms-0 mb-4">
                    <li><strong>Administrators:</strong> OMR 250 – 500</li>
                    <li><strong>Accountants:</strong> OMR 300 – 700</li>
                    <li><strong>Engineers:</strong> OMR 400 – 900</li>
                    <li><strong>IT Professionals:</strong> OMR 400 – 1,200</li>
                    <li><strong>Nurses:</strong> OMR 350 – 700</li>
                </ul>
                <p>Oman offers a peaceful lifestyle and strong work stability. At Angel Gulf Jobs, as a licensed overseas job consultancy, we support placements for jobs in Oman and key industrial zones. We also guide candidates with accurate salary expectations for both blue-collar and white-collar roles, based on the ranges specified above.</p>
            </section>

            {/* 6. BAHRAIN */}
            <section className="blog-section mb-5">
                <h2 className="h3 fw-bold section-title-blue">6. Salary in Bahrain</h2>

                <p>
                    Bahrain offers a cost-balanced salary structure compared to other Gulf countries, making it attractive for job seekers looking for jobs in Bahrain in finance,jobs in healthcare, engineering, and IT, as well as service and jobs in construction roles. The average salary in Bahrain varies by job category, with the ranges below showing typical pay for various job roles.
                </p>

                <h3 className="h4 fw-bold section-title-dark mt-4">Average Salary in Bahrain for Blue-Collar Workers</h3>
                <ul className="list-unstyled ms-0 mb-4">
                    <li><strong>Labourers:</strong> BHD 90 – 130</li>
                    <li><strong>Drivers:</strong> BHD 140 – 220</li>
                    <li><strong>Technicians:</strong> BHD 150 – 250</li>
                    <li><strong>Housekeeping/Service Staff:</strong> BHD 100 – 150</li>
                    <li><strong>Construction Workers:</strong> BHD 90 – 140</li>
                </ul>

                <h3 className="h4 fw-bold section-title-dark mt-4">Average Salary in Bahrain for White-Collar Workers</h3>
                <ul className="list-unstyled ms-0 mb-4">
                    <li><strong>Admin & Office Staff:</strong> BHD 250 – 350</li>
                    <li><strong>Accountants:</strong> BHD 300 – 700</li>
                    <li><strong>Engineers:</strong> BHD 400 – 900</li>
                    <li><strong>Nurses:</strong> BHD 350 – 650</li>
                    <li><strong>IT & Telecom:</strong> BHD 400 – 1,000</li>
                </ul>
                <p>Bahrain remains one of the most expat-friendly markets for jobs in Bahrain, and Angel Gulf Jobs, as a leading overseas job consultancy for Gulf supplies talent across hospitality, construction, and logistics.</p>
            </section>

            {/* IMAGE: Salary Structure */}
            <div className="text-center my-5">
                <img
                    src={SalaryStructureImg}
                    alt="Salary Structure"
                    className="img-fluid rounded-4 shadow-sm"
                    style={{ maxWidth: "720px" }}
                />
            </div>

            {/* WHAT AFFECTS YOUR SALARY */}
            <section className="blog-section mb-5">
                <h2 className="h3 fw-bold section-title-blue">What Affects Your Salary in the Gulf?</h2>
                <p>
                    Your salary in the Gulf is influenced by a combination of professional, economic, and employer-related factors. Understanding these key elements helps you better evaluate job offers and overall earning potential across Gulf countries.
                </p>

                <ul className="list-unstyled ms-0 simple-check-list">
                    <li className="d-flex align-items-start mb-3">
                        <span className="me-2 text-success fw-bold" style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>✓</span>
                        <div>
                            <strong>Your Skill Level:</strong> If you are a Certified, licensed, or highly experienced worker, you will generally earn higher salaries, especially in technical and specialised roles.
                        </div>
                    </li>
                    <li className="d-flex align-items-start mb-3">
                        <span className="me-2 text-success fw-bold" style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>✓</span>
                        <div>
                            <strong>Country Demand:</strong> Nations like Saudi Arabia and the UAE will offer you higher pay due to rapid development, mega-projects, and growing sectoral demand.
                        </div>
                    </li>
                    <li className="d-flex align-items-start mb-3">
                        <span className="me-2 text-success fw-bold" style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>✓</span>
                        <div>
                            <strong>Benefits Included:</strong> Accommodation, food allowance, transportation, medical insurance, and overtime significantly impact your total earnings, even if the base salary seems moderate.
                        </div>
                    </li>
                    <li className="d-flex align-items-start mb-3">
                        <span className="me-2 text-success fw-bold" style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>✓</span>
                        <div>
                            <strong>Industry Type:</strong> Sectors such as Oil & Gas, Healthcare, Construction, IT, and Hospitality typically offer the highest hiring activity and competitive pay.
                        </div>
                    </li>
                    <li className="d-flex align-items-start mb-3">
                        <span className="me-2 text-success fw-bold" style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>✓</span>
                        <div>
                            <strong>Company Type & Size:</strong> Large multinational organisations, government entities, and leading contractors will usually provide you with better salary packages and stronger benefits compared to small or mid-sized private companies.
                        </div>
                    </li>
                </ul>
            </section>

            {/* HOW ANGEL GULF JOBS HELPS */}
            <section className="blog-section mb-5">
                <h2 className="h3 fw-bold section-title-blue">How Angel Gulf Jobs Helps Blue-Collar Workers & White-Collar Workers</h2>

                <ul className="list-unstyled ms-0">
                    <li className="mb-2 d-flex align-items-center">
                        <span className="me-2 text-primary" style={{ fontSize: '1.5rem', lineHeight: 0 }}>•</span> 100% Verified Gulf Job Openings
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                        <span className="me-2 text-primary" style={{ fontSize: '1.5rem', lineHeight: 0 }}>•</span> Salary Guidance Before Interview
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                        <span className="me-2 text-primary" style={{ fontSize: '1.5rem', lineHeight: 0 }}>•</span> Visa, Medical, and Flight Ticket Support
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                        <span className="me-2 text-primary" style={{ fontSize: '1.5rem', lineHeight: 0 }}>•</span> Document Processing
                    </li>
                </ul>
                <p className="fw-bold mt-4" style={{ color: "#009bd4" }}>
                    Jobs in UAE | Jobs in Saudi | Jobs in Qatar | Jobs in Kuwait | Jobs in Bahrain | Jobs in Oman
                </p>

                <p>
                    We, at Angel Gulf Jobs, as a leading overseas Job consultancy for Gulf, are trusted by thousands of workers and professionals who find their dream jobs in the Gulf through our reliable support.
                </p>
            </section>

            {/* CTA BOX */}
            <section className="cta-box mb-5 p-4 p-md-5 rounded-4">
                <div className="d-flex flex-wrap align-items-center mb-4 gap-3 cta-header">
                    <div className="cta-icon-wrapper">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="white" />
                        </svg>
                    </div>
                    <h2 className="h3 fw-bold mb-0 cta-title">Ready to Work in the Gulf?</h2>
                </div>

                <p className="cta-text">
                    Whether you are a blue-collar worker looking for a stable income or a white-collar worker aiming for career growth, the Gulf offers incredible opportunities.
                </p>

                <ul className="list-unstyled ms-0 mb-4 cta-list">
                    <li className="cta-list-item">
                        <span className="green-icon">👉</span>
                        <span>Apply through Angel Gulf Jobs: Register for jobs in Gulf</span>
                    </li>
                    <li className="cta-list-item">
                        <span className="green-icon">👉</span>
                        <span>Get guidance, verified jobs, and end-to-end support</span>
                    </li>
                    <li className="cta-list-item">
                        <span className="green-icon">👉</span>
                        <span>Start your Gulf journey today!</span>
                    </li>
                </ul>

                <p className="cta-bottom fw-bold"><a href="/registration" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>Click here to Register</a></p>
            </section>

            <p className="text-muted small">Source: <a href="https://www.hays.ae/salary-guide" target="_blank" rel="noreferrer" className="text-decoration-none text-muted">https://www.hays.ae/salary-guide</a></p>

            {/* INTERNAL STYLE BLOCK — UI ONLY (no logic changes) -- COPIED FROM TEMPLATE */}
            <style>{`
        .hero-caption { font-size: 0.95rem; }
        .intro-text { color: #1e293b; font-size: 1.15rem; line-height: 1.8; }
        .blog-section { margin-bottom: clamp(2rem, 4vw, 4rem); }
        .blog-section:last-of-type { margin-bottom: 0; }
        .blog-section p { margin-bottom: 1.2rem; line-height: 1.75; }
        .blog-section ul,
        .blog-section ol { padding-left: 0; }
        .blog-section li { line-height: 1.7; }
        .section-title-blue { color: #009bd4; margin-bottom: 1.5rem; }
        .section-title-dark { color: #0f172a; margin-bottom: 1.5rem; }

        .red-flag-list li, .green-tick-list li, .amber-list li {
          display: flex; align-items: flex-start; gap: 12px; margin-bottom: 0.9rem;
        }

        .flag-icon, .green-icon, .amber-icon {
          width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center;
          font-size: 0.75rem; font-weight: bold; border-radius: 50%; flex-shrink: 0;
          transition: transform 0.25s ease;
        }

        .flag-icon { background: #fee2e2; color: #dc2626; }
        .green-icon { background: #dcfce7; color: #16a34a; }
        .amber-icon { background: #fef3c7; color: #d97706; }

        .alert-tips {
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
          border-radius: 12px; padding: 1.5rem; display: flex; gap: 1rem; align-items: flex-start;
        }

        .alert-icon { margin-top: 2px; }
        .tip-text { color: #0c4a6e; }

        .counter-list li { position: relative; padding-left: 48px; margin-bottom: 1.5rem; }
        .counter { position: absolute; left: 0; top: 2px; width: 32px; height: 32px; border-radius: 50%;
          background: linear-gradient(135deg, #009bd4, #0284c7); color: #fff; display: inline-flex; align-items: center;
          justify-content: center; font-weight: bold;
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
        .cta-bottom { color: #0b3c5d; }

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

        /* Responsive tweaks */
        @media (max-width: 991px) {
          .intro-text { font-size: 1.08rem; }
          .blog-section { margin-bottom: 2.5rem; }
        }

        @media (max-width: 767px) {
          .bloglayout-reading section + section { padding-top: 2rem; }
          .alert-tips { flex-direction: column; text-align: left; }
          .counter-list li { padding-left: 40px; }
          .counter { top: 4px; width: 32px; height: 32px; }
          .cta-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .cta-box { padding: 1.8rem; }
          .cta-list-item { align-items: flex-start; }
          .blog-faq-button { font-size: 0.98rem; padding: 1rem; }
        }

        @media (max-width: 575px) {
          .hero-caption { font-size: 0.9rem; }
          .cta-list-item { flex-direction: column; gap: 8px; }
          .counter-list li { padding-left: 34px; }
          .counter { width: 28px; height: 28px; font-size: 0.85rem; }
          .cta-box { text-align: left; }
          .cta-text { font-size: 0.95rem; }
          .blog-faq-button { font-size: 0.95rem; padding: 0.95rem 1rem; }

          .flag-icon,
          .green-icon,
          .amber-icon {
            display: none;
          }

          .red-flag-list li,
          .green-tick-list li,
          .amber-list li,
          .cta-list-item {
            position: relative;
            padding-left: 18px;
          }

          .red-flag-list li::before,
          .amber-list li::before,
          .green-tick-list li::before,
          .cta-list-item::before {
            content: "";
            width: 8px;
            height: 8px;
            border-radius: 999px;
            position: absolute;
            top: 0.55rem;
            left: 0;
          }

          .red-flag-list li::before { background: #dc2626; }
          .amber-list li::before { background: #d97706; }
          .green-tick-list li::before,
          .cta-list-item::before { background: #16a34a; }
        }
      `}</style>
        </BlogLayout>
    );
};

export default AverageSalaryGCC;
