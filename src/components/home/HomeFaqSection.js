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
                                    What documents are required for a Saudi work visa?
                                </button>
                                <div
                                    id="faq2"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#homeFaqAccordion"
                                >
                                    <div className="accordion-body">
                                        A Saudi work visa requires a passport, employment contract, medical report, experience certificates, PCC, and attested documents.
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
                                    Is Emigration Clearance mandatory for individuals seeking employment in Gulf countries?
                                </button>
                                <div
                                    id="faq3"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#homeFaqAccordion"
                                >
                                    <div className="accordion-body">
                                        Emigration Clearance is required only for ECR passport holders applying for Gulf employment.
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
                                    What is certificate attestation and why is it required?
                                </button>
                                <div
                                    id="faq4"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#homeFaqAccordion"
                                >
                                    <div className="accordion-body">
                                        Certificate attestation is the process of verifying the authenticity of documents by authorized government bodies. It's required to validate educational and professional credentials for Gulf employment.
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
                                    How does Angel Gulf Jobs ensure safe recruitment?
                                </button>
                                <div
                                    id="faq5"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#homeFaqAccordion"
                                >
                                    <div className="accordion-body">
                                        Angel Gulf Jobs is registered with the Government of India, Ministry of Labour, and listed on the eMigrate portal. We verify all employers and job offers to ensure genuine opportunities and transparent recruitment processes.
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
