import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import FakeJobImg from '../../assets/images/blogs/fake-job-scam.png'
import BgImge from "../../assets/images/blogs/connection-contitent-blog-img.png";
import EcrNonEcrImgr from "../../assets/images/blogs/ecr-non-ecr-bg.png";
import KafalaImg from "../../assets/images/blogs/kafala.png";
import { BLOG_POSTS } from "./blogConfig";
import EconomicDiversificationGCCImg from "../../assets/images/blogs/Economic-Diversification-in-GCC-Countries.png";
import ApostilleAttestationImg from "../../assets/images/blogs/Apostille-Attestation-blog-list.png";
import hrdAttestation from "../../assets/images/blogs/HRD-Attestation.png";
import WaqalaImg from "../../assets/images/blogs/Waqala-System-bg.png";
import SaudiLabourLawImg from "../../assets/images/blogs/saudi-labour-law-bg.png";
import WageProtectionSystemGCCImg from "../../assets/images/blogs/Wage-Protection-System-bg.png";
import QiwaSystem from "../../assets/images/blogs/qiwa-bg.jpg";
import QatarVisaCentreImg from "../../assets/images/blogs/Qatar-visa-centre-bg.png";
import TradeTestingProgramImg from "../../assets/images/blogs/Trade-Testing-Program.png";
import EthicalRecruitmentImg from "../../assets/images/blogs/Ethical-Overseas-Recruitment-bg.png";
import saudiSkilledBasedWorkPermitImg from "../../assets/images/blogs/Saudi-skill-based-work-permit-visa.png";
import GccWorkPermitImg from "../../assets/images/blogs/National-plans-by-GCC-countries.png";
import GccWorkPermitVisaImg from '../../assets/images/blogs/GCC-work-permit-visa.png';
import GamcaMedicalImg from "../../assets/images/blogs/GAMCA-Medical-bg.png";
import AverageSalaryGccImg from "../../assets/images/blogs/GCC-salary.png";


const imageMap = {
  fakeJob: FakeJobImg,
  gccWorkPermit: GccWorkPermitImg,
  connectingContinents: BgImge,
  ecrNonEcr: EcrNonEcrImgr,
  kafala: KafalaImg,
  economicDiversificationGCC: EconomicDiversificationGCCImg,
  apostilleAttestation: ApostilleAttestationImg,
  hrdAttestation: hrdAttestation,
  waqalaSystem: WaqalaImg,
  saudiLabourLaw: SaudiLabourLawImg,
  wpsGCC: WageProtectionSystemGCCImg,
  qiwaSystem: QiwaSystem,
  qatarVisaCentre: QatarVisaCentreImg,
  tradeTestingSaudi: TradeTestingProgramImg,
  ethicalRecruitment: EthicalRecruitmentImg,
  saudiSkillBasedWorkPermit: saudiSkilledBasedWorkPermitImg,
  gccWorkPermitVisa: GccWorkPermitVisaImg,
  gamcaHealthChecks: GamcaMedicalImg,
  averageSalaryGcc: AverageSalaryGccImg,

};

const blogs = BLOG_POSTS.map((post) => ({
  ...post,
  image: imageMap[post.imageKey] || FakeJobImg,
}));

const BlogList = () => {
  return (
    <div>
      <Helmet>
        <title>Angel Gulf Jobs Blogs | Insights & Updates</title>
        <meta
          name="description"
          content="Explore Angel Gulf Jobs blogs for recruitment updates, overseas job tips, and company insights."
        />
        <meta
          name="keywords"
          content="Angel Gulf blogs, Gulf job insights, overseas recruitment tips, Angel Gulf Jobs updates"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.angelgulfjobs.com/blogs" />
      </Helmet>

      <div className="page-content bloglayout">

        {/* HEADER */}
        <div className="position-relative py-5 bloglayout-header">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">

                <div className="row justify-content-center mb-5">
                  <div className="col-lg-8 text-center">

                    <div className="blog-badge">Latest insights</div>

                    <h2 className="section-title">Latest from Angel Gulf Jobs</h2>

                    <p className="section-subtitle">
                      Discover expert tips, scam alerts, and success stories designed to support your Gulf job journey.
                    </p>

                  </div>
                </div>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center mb-0 bg-transparent bloglayout-breadcrumb">
                    <li className="breadcrumb-item">
                      <NavLink to="/" className="text-decoration-none" style={{ color: "#009bd4", fontWeight: 500 }}>
                        Home
                      </NavLink>
                    </li>
                    <li className="breadcrumb-item active" style={{ color: "#64748b" }}>
                      Blogs
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* BLOG LIST BODY */}
        <div className="py-5 bloglayout-body">
          <div className="container">
            {/* BLOG CARDS */}
            <div className="row g-4 justify-content-center">
              {blogs.map((blog) => (
                <div className="col-lg-4 col-md-6" key={blog.to}>
                  <NavLink
                    to={blog.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-block h-100 text-decoration-none blog-card-link"
                  >
                    <div className="blog-card h-100 d-flex flex-column">

                      <div className="blog-card-image-wrapper">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="blog-card-image"
                        />
                        <div className="blog-card-image-overlay" />
                      </div>

                      <div className="card-body d-flex flex-column p-4">
                        <span className="blog-card-category">{blog.category}</span>
                        <h3 className="blog-card-title">{blog.title}</h3>
                        <p className="blog-card-description">{blog.description}</p>

                        <div className="blog-card-meta">
                          <span>{blog.readingTime}</span>
                          <span>Updated {blog.updatedOn}</span>
                        </div>

                        <div className="d-flex align-items-center mt-auto readmore-wrapper">
                          <span className="readmore-text">
                            Read Article
                            <svg
                              className="ms-2 readmore-icon"
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
          </div>
        </div>
      </div>

      {/* INTERNAL STYLES */}
      <style>{`
        .bloglayout-title {
          color: #0f172a;
          font-size: clamp(2rem, 5vw, 3rem);
        }

        .bloglayout-header {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border-bottom: 1px solid rgba(0, 155, 212, 0.1);
        }

        .bloglayout-body {
          background: #f8fafc;
        }

        .breadcrumb-item + .breadcrumb-item::before {
          content: "›";
          color: #94a3b8;
          font-size: 1.1rem;
        }

        .blog-badge {
          display: inline-block;
          padding: 6px 18px;
          border-radius: 50px;
          background: linear-gradient(135deg, #009bd4 0%, #0284c7 100%);
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
        }

        .section-title {
          color: #0f172a;
          font-weight: 700;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          margin-bottom: 0.75rem;
        }

        .section-subtitle {
          color: #64748b;
          font-size: 1.05rem;
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .blog-card {
          background: #ffffff;
          border-radius: 20px;
          transition: all 0.24s ease;
          border: 1px solid rgba(15, 23, 42, 0.08);
          overflow: hidden;
          box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
        }

        .blog-card-image-wrapper {
          height: 220px;
          position: relative;
          overflow: hidden;
        }

        .blog-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.45s ease;
        }

        .blog-card-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.05) 100%);
        }

        .blog-card-category {
          display: inline-flex;
          align-items: center;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #0284c7;
          background: rgba(2, 132, 199, 0.08);
          border-radius: 999px;
          padding: 0.35rem 0.8rem;
          margin-bottom: 0.75rem;
        }

        .blog-card-title {
          color: #0f172a;
          font-size: 1.18rem;
          font-weight: 700;
          line-height: 1.35;
          margin-bottom: 0.75rem;
        }

        .blog-card-description {
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.65;
        }

        .blog-card-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem 1.4rem;
          font-size: 0.85rem;
          color: #475569;
          margin-bottom: 1rem;
        }

        .blog-card-meta span {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .blog-card-meta span::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(15, 23, 42, 0.18);
        }

        .readmore-text {
          color: #009bd4;
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 0.3px;
          display: flex;
          align-items: center;
          transition: color 0.3s ease;
        }

        .blog-card-link:hover .blog-card {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
        }

        .blog-card-link:hover .blog-card-image {
          transform: scale(1.06);
        }

        .readmore-icon {
          transition: transform 0.3s ease;
        }

        .blog-card-link:hover .readmore-icon {
          transform: translateX(4px);
        }

        @media (max-width: 991px) {
          .blog-card-image-wrapper {
            height: 200px;
          }
        }

        @media (max-width: 576px) {
          .blog-layout-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogList;
