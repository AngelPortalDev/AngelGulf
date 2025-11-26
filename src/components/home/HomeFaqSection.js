import React from "react";

const HomeFaqSection = () => {
    return (
        <section className="home-section home-section--muted">
            <div className="container">
                <div className="home-section-title">
                    <h2 className="home-section-heading">Frequently Asked Questions</h2>
                    <p style={{ color: "#5f6a7c", maxWidth: "680px", margin: "0 auto" }}>
                        Find answers to common questions about Gulf job opportunities, visa processes, and recruitment services.
                    </p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="accordion home-faq-accordion" id="homeFaqAccordion">

                            {/* FAQ 1 */}
                            <div className="accordion-item">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq1"
                                    aria-expanded="false"
                                >
                                    How can Indian nationals apply for a Gulf work visa?
                                </button>
                                <div
                                    id="faq1"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#homeFaqAccordion"
                                >
                                    <div className="accordion-body">
                                        Indians can apply for a Gulf work visa by securing a valid job offer and completing the visa process through a verified recruitment agency like Angel Gulf Jobs.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 2 */}
                            <div className="accordion-item">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq2"
                                    aria-expanded="false"
                                >
                                    Why choose Angel Gulf Jobs as your trusted overseas job consultants?
                                </button>
                                <div
                                    id="faq2"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#homeFaqAccordion"
                                >
                                    <div className="accordion-body">
                                        Angel Gulf Jobs is registered with the Government of India, Ministry of Labour, and listed on the eMigrate portal. We verify all employers and job offers to ensure genuine opportunities and transparent recruitment processes.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 3 */}
                            <div className="accordion-item">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq3"
                                    aria-expanded="false"
                                >
                                    Do Angel Gulf Jobs assist Gulf employers with urgent or bulk manpower requirements?
                                </button>
                                <div
                                    id="faq3"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#homeFaqAccordion"
                                >
                                    <div className="accordion-body">
                                        Yes, our Gulf manpower consultancy supports urgent hiring, bulk recruitment, and specialised manpower sourcing.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 4 */}
                            <div className="accordion-item">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq4"
                                    aria-expanded="false"
                                >
                                    Does Angel Gulf Jobs offer recruitment for both skilled and unskilled workers?
                                </button>
                                <div
                                    id="faq4"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#homeFaqAccordion"
                                >
                                    <div className="accordion-body">
                                        Yes, we recruit skilled, semi-skilled, and unskilled workers across multiple industries as a full-service manpower consultancy for the Gulf regions.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 5 */}
                            <div className="accordion-item">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq5"
                                    aria-expanded="false"
                                >
                                    Which industries does Angel Gulf Jobs, as a Gulf recruitment agency, specialise in?
                                </button>
                                <div
                                    id="faq5"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#homeFaqAccordion"
                                >
                                    <div className="accordion-body">
                                        Our Gulf recruitment agency covers engineering, construction, hospitality, healthcare, IT, and skilled trades.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 6 */}
                            <div className="accordion-item">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq6"
                                    aria-expanded="false"
                                >
                                    Does Angel Gulf Jobs operate as a manpower consultancy for Gulf countries?
                                </button>
                                <div
                                    id="faq6"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#homeFaqAccordion"
                                >
                                    <div className="accordion-body">
                                        Yes, we are a trusted manpower consultancy for the Gulf regions, including Saudi Arabia, UAE, Qatar, Oman, Bahrain, and Kuwait.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 7 */}
                            <div className="accordion-item">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq7"
                                    aria-expanded="false"
                                >
                                    Can Angel Gulf Jobs help with documentation and visa processing?
                                </button>
                                <div
                                    id="faq7"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#homeFaqAccordion"
                                >
                                    <div className="accordion-body">
                                        Yes, we guide applicants through documentation, medicals, visa stamping, emigration clearance guidance and travel procedures.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeFaqSection;
