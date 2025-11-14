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
  {
    title: "Test blog",
    description:
      "testing blog",
    to: "/blogs/test-blog",
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
        <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundColor: "#f3f7fd" }}>
      
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h1 className="wt-title darkblueTxt mb-0" style={{ fontSize: "2.2rem" }}>
                    Blogs
                  </h1>
                </div>
              </div>
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>Blogs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section-full p-t50 p-b80 bg-white">
          <div className="container">
            <div className="section-head center wt-small-separator-outer">
              <div className="wt-small-separator site-text-primary" />
              <h2 className="wt-title blueuText">Latest from Angel Gulf Jobs</h2>
              <p className="mb-0" style={{ color: "#4b5563" }}>
                Discover expert tips, scam alerts, and success stories designed to support your Gulf job journey.
              </p>
            </div>

            <div className="row g-4">
              {blogs.map((blog) => (
                <div className="col-lg-4 col-md-6" key={blog.to}>
                  <NavLink
                    to={blog.to}
                    className="d-block h-100"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="card h-100 border-0 shadow-sm enhanced-card"
                      style={{
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        background: "#f9fbff",
                        borderRadius: "18px",
                      }}
                    >
                      <div
                        className="position-relative overflow-hidden"
                        style={{ borderRadius: "18px 18px 0 0", maxHeight: "220px" }}
                      >
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="img-fluid w-100"
                          style={{ height: "220px", objectFit: "cover" }}
                        />
                      </div>
                      <div
                        style={{
                          height: "1px",
                          background: "linear-gradient(90deg, rgba(0,155,212,0.15), rgba(15,23,42,0.08))",
                        }}
                      />
                      <div className="card-body d-flex flex-column" style={{ padding: "1.5rem" }}>
                        <h3 className="mb-3" style={{ color: "#0f172a", fontSize: "1.25rem", lineHeight: 1.45 }}>
                        {/* <h3 className="mb-3" style={{ color: "#009BD4", fontSize: "1.25rem", lineHeight: 1.45 }}> */}
                          {blog.title}
                        </h3>
                        <p className="mb-4" style={{ color: "#4b5563", lineHeight: 1.7 }}>
                          {blog.description}
                        </p>
                        <span
                          className="mt-auto fw-semibold"
                          // style={{ color: "#009bd4", letterSpacing: "0.02em" }}
                          style={{ color: "#0f172a", letterSpacing: "0.02em" }}
                        >
                          Read more →
                        </span>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
