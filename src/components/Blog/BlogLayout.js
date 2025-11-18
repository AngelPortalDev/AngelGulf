import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { BLOG_POSTS } from "./blogConfig";

const joinKeywords = (keywords) => {
  if (!keywords) return "";
  if (Array.isArray(keywords)) {
    return keywords.join(", ");
  }
  return keywords;
};

const BlogLayout = ({
  title,
  eyebrow,
  subtitle,
  intro,
  hero,
  metaHighlights = [],
  breadcrumbItems = [],
  metaTitle,
  metaDescription,
  metaKeywords,
  metaRobots = "index, follow",
  canonicalUrl,
  children,
}) => {
  const location = useLocation();

  const computedBreadcrumbs = [
    { label: "Home", to: "/" },
    { label: "Blogs", to: "/blogs" },
    ...breadcrumbItems,
  ];

  const keywordsContent = joinKeywords(metaKeywords);

  const currentPath = location.pathname;

  const relatedBlogs = React.useMemo(() => {
    const others = BLOG_POSTS.filter((post) => post.to !== currentPath);
    return others.slice(0, 3);
  }, [currentPath]);

  return (
    <div>
      <Helmet>
        <title>{metaTitle || `${title} | Angel Gulf Jobs`}</title>
        {metaDescription && (
          <meta name="description" content={metaDescription} />
        )}
        {keywordsContent && (
          <meta name="keywords" content={keywordsContent} />
        )}
        <meta name="robots" content={metaRobots} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>

      <div className="page-content bloglayout">
        {/* HEADER */}
        <div
          className="position-relative py-5 bloglayout-header"
          style={{
            background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
            borderBottom: "1px solid rgba(0, 155, 212, 0.1)"
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">

                <div className="text-center mb-4">
                  {eyebrow && (
                    <p className="bloglayout-eyebrow text-uppercase fw-semibold mb-2">
                      {eyebrow}
                    </p>
                  )}
                  <h1
                    className="display-4 fw-bold mb-3 bloglayout-title"
                    style={{
                      color: "#0f172a",
                      fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                      lineHeight: "1.2"
                    }}
                  >
                    {title}
                  </h1>
                  {subtitle && (
                    <p className="bloglayout-subtitle text-muted mb-0">
                      {subtitle}
                    </p>
                  )}
                </div>

                {/* Breadcrumb */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center mb-0 bg-transparent bloglayout-breadcrumb">
                    {computedBreadcrumbs.map((crumb, index) => (
                      <li
                        key={`${crumb.label}-${index}`}
                        className={`breadcrumb-item ${!crumb.to ? 'active' : ''}`}
                        style={{ fontSize: "0.95rem" }}
                      >
                        {crumb.to ? (
                          <NavLink
                            to={crumb.to}
                            className="text-decoration-none"
                            style={{ color: "#009bd4", fontWeight: 500 }}
                          >
                            {crumb.label}
                          </NavLink>
                        ) : (
                          <span style={{ color: "#64748b" }}>{crumb.label}</span>
                        )}
                      </li>
                    ))}
                  </ol>
                </nav>

              </div>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="py-5 bloglayout-body">
          <div className="container">
            {intro && (
              <div className="row justify-content-center mb-4">
                <div className="col-lg-8 text-center">
                  <p className="bloglayout-intro lead mb-0">{intro}</p>
                </div>
              </div>
            )}

            {hero && (
              <div className="row justify-content-center mb-5">
                <div className="col-lg-10">
                  <div className="bloglayout-hero">{hero}</div>
                </div>
              </div>
            )}

            {metaHighlights.length > 0 && (
              <div className="row justify-content-center mb-5">
                <div className="col-lg-10">
                  <div className="bloglayout-meta-grid">
                    {metaHighlights.map((meta) => (
                      <div className="bloglayout-meta-card" key={`${meta.label}-${meta.value}`}>
                        <span className="bloglayout-meta-label">{meta.label}</span>
                        <span className="bloglayout-meta-value">{meta.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="bloglayout-article shadow-sm">
                  <article
                    className="blog-detail-content bloglayout-reading"
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: "1.8",
                      color: "#334155"
                    }}
                  >
                    {children}
                  </article>
                </div>
              </div>
            </div>

            {relatedBlogs.length > 0 && (
              <div className="row justify-content-center mt-5">
                <div className="col-lg-10">
                  <section className="bloglayout-related">
                    <h2 className="h4 fw-bold mb-3 bloglayout-related-title">More from Angel Gulf Jobs</h2>
                    <p className="bloglayout-related-subtitle mb-4">
                      Explore more guidance, insights, and safety tips for your Gulf job journey.
                    </p>
                    <div className="row g-3">
                      {relatedBlogs.map((blog) => (
                        <div className="col-md-4" key={blog.to}>
                          <NavLink
                            to={blog.to}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none bloglayout-related-link d-block h-100"
                          >
                            <div className="bloglayout-related-card h-100">
                              <p className="bloglayout-related-category mb-1">{blog.category}</p>
                              <h3 className="bloglayout-related-heading">{blog.title}</h3>
                              <p className="bloglayout-related-meta mb-0">{blog.readingTime} • Updated {blog.updatedOn}</p>
                            </div>
                          </NavLink>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* -------------- INTERNAL STYLES (UI ONLY) -------------- */}
      <style>{`
        .bloglayout {
          background: #f8fafc;
        }

        .bloglayout-body {
          background: #f8fafc;
        }

        .bloglayout-article {
          background: #ffffff;
          border-radius: 24px;
          padding: clamp(1.5rem, 3vw, 2.8rem);
          border: 1px solid rgba(15, 23, 42, 0.06);
        }

        .bloglayout-article.shadow-sm {
          box-shadow: 0 24px 55px rgba(15, 23, 42, 0.08);
        }

        @media (max-width: 768px) {
          .bloglayout-article {
            border-radius: 18px;
            padding: 1.5rem;
          }
        }

        /* Header */
        .bloglayout-title {
          margin-bottom: 0.75rem !important;
        }

        .bloglayout-eyebrow {
          letter-spacing: 0.15em;
          font-size: 0.85rem;
          color: #009bd4;
        }

        .bloglayout-subtitle {
          font-size: 1.05rem;
          color: #475569;
        }

        .bloglayout-intro {
          color: #475569;
          line-height: 1.7;
        }

        /* Breadcrumb separator */
        .breadcrumb-item + .breadcrumb-item::before {
          content: "›";
          color: #94a3b8;
          font-size: 1.1rem;
          padding-right: 2px;
        }

        /* Reading column improvements */
        .bloglayout-reading {
          max-width: 760px;
          margin: 0 auto;
          padding: 0 0.2rem;
        }

        .bloglayout-reading p {
          margin-bottom: 1.3rem;
        }

        .bloglayout-reading h2,
        .bloglayout-reading h3,
        .bloglayout-reading h4 {
          margin-top: 2.3rem;
          margin-bottom: 1rem;
          color: #0f172a;
          font-weight: 700;
        }

        .bloglayout-reading ul,
        .bloglayout-reading ol {
          margin-bottom: 1.6rem;
        }

        .bloglayout-reading img {
          border-radius: 18px;
          margin: 1.8rem 0;
          width: 100%;
          height: auto;
        }

        .bloglayout-reading section {
          margin-bottom: 2.5rem;
        }

        .bloglayout-reading section + section {
          border-top: 1px solid #e2e8f0;
          padding-top: 2.5rem;
        }

        .bloglayout-reading strong {
          color: #0f172a;
        }

        .bloglayout-reading blockquote {
          background: #f0f9ff;
          border-radius: 16px;
          border-left: 4px solid #009bd4;
          padding: 1.2rem 1.5rem;
          font-style: italic;
        }

        .bloglayout-hero {
          background: #ffffff;
          border-radius: 24px;
          padding: clamp(1rem, 2vw, 1.6rem);
          border: 1px solid rgba(15, 23, 42, 0.08);
        }

        .bloglayout-hero figure,
        .bloglayout-hero img {
          width: 100%;
        }

        .bloglayout-hero figure {
          margin: 0;
          text-align: center;
        }

        .bloglayout-hero img {
          border-radius: 20px;
          object-fit: cover;
        }

        .bloglayout-hero figcaption {
          margin-top: 1rem;
          color: #64748b;
          font-size: 0.95rem;
        }

        .bloglayout-meta-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
        }

        .bloglayout-meta-card {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 18px;
          padding: 1.2rem 1.4rem;
        }

        .bloglayout-meta-label {
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.75rem;
          color: #94a3b8;
          font-weight: 600;
          display: block;
          margin-bottom: 0.35rem;
        }

        .bloglayout-meta-value {
          color: #0f172a;
          font-weight: 600;
          font-size: 1rem;
        }

        .bloglayout-keypoints {
          list-style: none;
          padding-left: 0;
          margin-bottom: 0;
          display: grid;
          gap: 1rem;
        }

        .bloglayout-keypoints li {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 18px;
          padding: 1rem 1.25rem 1rem 1.2rem;
          position: relative;
        }

        .bloglayout-keypoints li::before {
          content: "";
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: linear-gradient(135deg, #009bd4, #0284c7);
          position: absolute;
          left: 0.65rem;
          top: 1.35rem;
        }

        .bloglayout-keypoints p {
          margin-bottom: 0.25rem;
        }

        .bloglayout-related {
          margin-top: 3rem;
        }

        .bloglayout-related-title {
          color: #0f172a;
        }

        .bloglayout-related-subtitle {
          color: #64748b;
          font-size: 0.98rem;
        }

        .bloglayout-related-card {
          border-radius: 16px;
          border: 1px solid rgba(15,23,42,0.08);
          padding: 1rem 1.1rem;
          background: #ffffff;
          transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
        }

        .bloglayout-related-link:hover .bloglayout-related-card {
          box-shadow: 0 14px 30px rgba(15,23,42,0.12);
          transform: translateY(-3px);
          border-color: rgba(0,155,212,0.6);
        }

        .bloglayout-related-category {
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.72rem;
          color: #0ea5e9;
          margin-bottom: 0.2rem;
        }

        .bloglayout-related-heading {
          font-size: 0.98rem;
          color: #0f172a;
          margin-bottom: 0.4rem;
        }

        .bloglayout-related-meta {
          font-size: 0.8rem;
          color: #64748b;
        }

        @media (max-width: 991px) {
          .bloglayout-title {
            font-size: clamp(1.6rem, 5vw, 2.2rem);
          }

          .bloglayout-subtitle,
          .bloglayout-intro,
          .bloglayout-reading {
            font-size: 1rem;
          }

          .bloglayout-article {
            padding: 2rem;
          }

          .bloglayout-reading section {
            margin-bottom: 2rem;
          }

          .bloglayout-reading section + section {
            padding-top: 2rem;
          }
        }

        @media (max-width: 768px) {
          .bloglayout-article {
            padding: 1.6rem;
          }

          .bloglayout-hero {
            padding: 1rem;
          }

          .bloglayout-reading {
            font-size: 0.98rem;
          }

          .bloglayout-reading h2,
          .bloglayout-reading h3,
          .bloglayout-reading h4 {
            margin-top: 1.8rem;
          }

          .bloglayout-reading p,
          .bloglayout-reading ul,
          .bloglayout-reading ol {
            margin-bottom: 1rem;
          }
        }

        @media (max-width: 576px) {
          .bloglayout-title {
            font-size: 1.8rem;
          }

          .bloglayout-article {
            padding: 1.4rem;
            border-radius: 16px;
          }

          .bloglayout-reading {
            font-size: 0.95rem;
          }

          .bloglayout-meta-grid,
          .bloglayout-keypoints {
            gap: 0.75rem;
          }

          .bloglayout-reading section,
          .bloglayout-reading section + section {
            margin-bottom: 1.6rem;
            padding-top: 1.6rem;
          }

          .bloglayout-reading section:first-of-type {
            margin-top: 0.5rem;
          }
        }

      `}</style>
    </div>
  );
};

export default BlogLayout;
