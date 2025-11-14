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
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundColor: "#f3f7fd" }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h1 className="wt-title darkblueTxt mb-0" style={{ fontSize: "2.2rem" }}>
                    {title}
                  </h1>
                </div>
              </div>
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  {computedBreadcrumbs.map((crumb, index) => (
                    <li key={`${crumb.label}-${index}`}>
                      {crumb.to ? <NavLink to={crumb.to}>{crumb.label}</NavLink> : crumb.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section-full p-t40 p-b80 bg-white">
          <div className="container">
            <article className="blog-detail-content mx-auto" style={{ maxWidth: "900px" }}>
              {children}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
