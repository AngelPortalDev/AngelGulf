import React from "react";
import { NavLink } from "react-router-dom";
import { BLOG_POSTS } from "../Blog/blogConfig";
import FakeJobImg from '../../assets/images/blogs/fake-job-scam.png';
import BgImge from "../../assets/images/blogs/connection-contitent-blog-img.png";
import EcrNonEcrImgr from "../../assets/images/blogs/ecr-non-ecr-bg.png";
import KafalaImg from "../../assets/images/blogs/kafala.png";
import EconomicDiversificationGCCImg from "../../assets/images/blogs/Economic-Diversification-in-GCC-Countries.png";
import ApostilleAttestationImg from "../../assets/images/blogs/Apostille-Attestation-blog-list.png";
import saudiSkilledBasedWorkPermitImg from "../../assets/images/blogs/Saudi-skill-based-work-permit-visa.png";
import GccWorkPermitImg from "../../assets/images/blogs/National-plans-by-GCC-countries.png";
import GccWorkPermitVisaImg from'../../assets/images/blogs/GCC-work-permit-visa.png';

const imageMap = {
    fakeJob: FakeJobImg,
    gccWorkPermit: GccWorkPermitImg,
    connectingContinents: BgImge,
    ecrNonEcr: EcrNonEcrImgr,
    kafala: KafalaImg,
    economicDiversificationGCC: EconomicDiversificationGCCImg,
    apostilleAttestation: ApostilleAttestationImg,
    saudiSkillBasedWorkPermit: saudiSkilledBasedWorkPermitImg,
    gccWorkPermitVisa: GccWorkPermitVisaImg,
};

// Get first 3 blog posts
const featuredBlogs = BLOG_POSTS.slice(0, 3).map((post) => ({
    ...post,
    image: imageMap[post.imageKey] || FakeJobImg,
}));

const HomeBlogSection = () => {
    return (
        <section className="home-section">
            <div className="container">
                <div className="home-section-title">
                    <h2 className="home-section-heading">Insights & Updates</h2>
                </div>

                <div className="row g-4 justify-content-center mb-4">
                    {featuredBlogs.map((blog) => (
                        <div className="col-lg-4 col-md-6" key={blog.to}>
                            <NavLink
                                to={blog.to}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="d-block h-100 text-decoration-none home-blog-card-link"
                            >
                                <div className="home-blog-card h-100 d-flex flex-column">
                                    <div className="home-blog-card-image-wrapper">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="home-blog-card-image"
                                        />
                                        <div className="home-blog-card-image-overlay" />
                                    </div>

                                    <div className="card-body d-flex flex-column p-4">
                                        <span className="home-blog-card-category">{blog.category}</span>
                                        <h3 className="home-blog-card-title">{blog.title}</h3>

                                        <p className="home-blog-card-description flex-grow-1">
                                            {blog.description}
                                        </p>

                                        <div className="home-blog-card-meta">
                                            <span>{blog.readingTime}</span>
                                            <span>Updated {blog.updatedOn}</span>
                                        </div>

                                        <div className="d-flex align-items-center mt-auto home-blog-readmore-wrapper">
                                            <span className="home-blog-readmore-text">
                                                Read Article
                                                <svg
                                                    className="ms-2 home-blog-readmore-icon"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M3 8H13M13 8L9 4M13 8L9 12"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>

                {/* View All Blogs Button */}
                <div className="text-center mt-5">
                    <NavLink to="/blogs" className="home-blog-view-all-btn">
                        View All Blogs
                        <svg
                            className="ms-2"
                            width="18"
                            height="18"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <path
                                d="M3 8H13M13 8L9 4M13 8L9 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default HomeBlogSection;
