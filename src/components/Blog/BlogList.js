import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import FakeJobImg from '../../assets/images/blogs/fake-job-scam.png'

const blogs = [
  {
    title: "Avoid Gulf Job Scams & Choose Legit Gulf Job Agencies",
    description:
      "Spot fake Gulf job offers, know the red flags, and learn how verified agencies like Angel Gulf Jobs keep your job search safe.",
    to: "/blogs/avoid-gulf-job-scams",
    image: FakeJobImg,
  },
];

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

      <div className="page-content">

        {/* HEADER */}
        <div
          className="position-relative py-5"
          style={{
            background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
            // background: "linear-gradient(135deg, #F3F7FD 0%, #F3F7FD 100%)",
            borderBottom: "1px solid rgba(0, 155, 212, 0.1)"
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h1
                  className="display-4 fw-bold mb-3"
                  style={{
                    color: "#0f172a",
                    fontSize: "clamp(2rem, 5vw, 3rem)"
                  }}
                >
                  Blogs
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center mb-0 bg-transparent">
                    <li className="breadcrumb-item">
                      <NavLink
                        to="/"
                        className="text-decoration-none"
                        style={{ color: "#009bd4", fontWeight: 500 }}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li
                      className="breadcrumb-item active"
                      style={{ color: "#64748b" }}
                    >
                      Blogs
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* BLOG LIST BODY */}
        <div className="py-5 bg-white">
          <div className="container">

            {/* SECTION TITLE */}
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">

                <div className="blog-badge">
                  LATEST INSIGHTS
                </div>

                <h2 className="section-title">
                  Latest from Angel Gulf Jobs
                </h2>

                <p className="section-subtitle">
                  Discover expert tips, scam alerts, and success stories designed to support your Gulf job journey.
                </p>

              </div>
            </div>

            {/* BLOG CARDS */}
            <div className="row g-4">
              {blogs.map((blog) => (
                <div className="col-lg-4 col-md-6" key={blog.to}>
                  <NavLink
                    to={blog.to}
                    className="d-block h-100 text-decoration-none blog-card-link"
                  >
                    <div className="blog-card h-100">
                      
                      <div className="blog-card-image-wrapper">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="blog-card-image"
                        />
                        <div className="blog-card-image-overlay"></div>
                      </div>

                      <div className="card-body d-flex flex-column p-4">
                        <h3 className="blog-card-title">{blog.title}</h3>

                        <p className="blog-card-description flex-grow-1">
                          {blog.description}
                        </p>

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
          border-radius: 18px;
          transition: all 0.28s ease;
          border: 1px solid rgba(0,0,0,0.05);
          overflow: hidden;
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

        .blog-card-title {
          color: #0f172a;
          font-size: 1.22rem;
          font-weight: 700;
          line-height: 1.35;
          margin-bottom: 0.75rem;
        }

        .blog-card-description {
          color: #64748b;
          font-size: 0.97rem;
          line-height: 1.6;
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
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.14);
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

        .breadcrumb-item + .breadcrumb-item::before {
          content: "›";
          color: #94a3b8;
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  );
};

export default BlogList;
