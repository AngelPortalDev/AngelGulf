import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const joinKeywords = (keywords) => {
  if (!keywords) return "";
  if (Array.isArray(keywords)) {
    return keywords.join(", ");
  }
  return keywords;
};

const BlogLayout = ({
  title,
  breadcrumbItems = [],
  metaTitle,
  metaDescription,
  metaKeywords,
  metaRobots = "index, follow",
  canonicalUrl,
  children,
}) => {
  const computedBreadcrumbs = [
    { label: "Home", to: "/" },
    { label: "Blogs", to: "/blogs" },
    ...breadcrumbItems,
  ];

  const keywordsContent = joinKeywords(metaKeywords);

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

      <div className="page-content">
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
        <div className="py-5 bg-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
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
        </div>
      </div>

      {/* -------------- INTERNAL STYLES (UI ONLY) -------------- */}
      <style>{`
        /* Title styling */
        .bloglayout-title {
          margin-bottom: 0.75rem !important;
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
        }

      `}</style>
    </div>
  );
};

export default BlogLayout;
