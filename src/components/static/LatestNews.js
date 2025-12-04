import React, { useState } from "react";
import latestArticleImg from "../../assets/images/backgroundImages/banner-articles.jpg";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const NEWS_GROUPS = [
  {
    id: "december-2025",
    label: "December 2025",
    metaLabel: "Latest headline",
    items: [
      {
        id: "saudi-iqama-reforms-2025",
        to: "/saudi-iqama-reforms-2025",
        title: "Saudi Iqama Reforms 2025: New Skill-Based Work Permit System Explained",
      },
    ],
  },
  {
    id: "november-2025",
    label: "November 2025",
    metaLabel: "News headlines",
    items: [
      {
        id: "saudi-skill-based-work-permit-system-2025",
        to: "/saudi-skill-based-work-permit-system",
        title: "Saudi Skill-Based Work Permit System",
      },
      {
        id: "uae-digital-work-permit-system-2025",
        to: "/uae-digital-work-permit-system",
        title: "UAE Digital Work Permit System",
      },
    ],
  },
  {
    id: "march-2016",
    label: "March 2016",
    metaLabel: "News headlines",
    items: [
      {
        id: "pay-hike-or-keeping-your-job",
        to: "/pay-hike-or-keeping-your-job",
        title: "Pay hike or keeping your job? What your priority should be",
      },
      {
        id: "indian-budget-spoils-uae-expat-remitters-party",
        to: "/indian-budget-spoils-uae-expat-remitters-party",
        title:
          "Indian Budget Euphoria Spoils UAE Expat Remitters' Party As Rupee Rallies",
      },
      {
        id: "uae-signs-defence-deals",
        to: "/uae-signs-defence-deals",
        title: "UAE Signs Defence Deals Worth Dh767m On UMEX Opening Day",
      },
      {
        id: "centerpoint-to-add-25-outlets-in-2016",
        to: "/centerpoint-to-add-25-outlets-in-2016",
        title: "Centrepoint To Add 25 Outlets This Year, Recruit 2,500 Staff",
      },
    ],
  },
];

const LatestNews = () => {
  const [selectedGroupId, setSelectedGroupId] = useState("all");

  const groupsToShow =
    selectedGroupId === "all"
      ? NEWS_GROUPS
      : NEWS_GROUPS.filter((group) => group.id === selectedGroupId);

  return (
    <div>
      <Helmet>
        <title>Latest Gulf Employment News, Gulf News Jobs  | Angel Gulf Jobs</title>
        <meta
          name="keywords"
          content="Gulf News Jobs, Latest Gulf Employment News, latest gulf news, gulf employment news, current news"
        />
        <meta
          name="description"
          content="Get daily updates on guld news about jobs. Read latest news and articles covering wide range of latest gulf employment news on our website."
        />
        <link rel="canonical" href="https://www.angelgulfjobs.com/latest-gulf-news" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${latestArticleImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">
                    Latest Gulf Employment News
                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>Latest Gulf Employment News</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}

        <div className="section-full p-t30 p-b50 bg-white">
          <div className="container">
            <div className="section-content">
              <div className="latest-news-wrapper">
                <div className="latest-news-header">
                  <span className="latest-news-eyebrow">Latest News</span>
                  <h2 className="latest-news-title">Recent Gulf Employment Updates</h2>
                  <p className="latest-news-subtitle">
                    Browse key news that affects Gulf employment. Select any headline below to read the full article in a new tab.
                  </p>
                </div>

                <div className="latest-news-filters" aria-label="Filter news by month and year">
                  <button
                    type="button"
                    className={
                      selectedGroupId === "all"
                        ? "latest-news-filter latest-news-filter-active"
                        : "latest-news-filter"
                    }
                    onClick={() => setSelectedGroupId("all")}
                  >
                    All
                  </button>
                  {NEWS_GROUPS.map((group) => (
                    <button
                      type="button"
                      key={group.id}
                      className={
                        selectedGroupId === group.id
                          ? "latest-news-filter latest-news-filter-active"
                          : "latest-news-filter"
                      }
                      onClick={() => setSelectedGroupId(group.id)}
                    >
                      {group.label}
                    </button>
                  ))}
                </div>

                {groupsToShow.map((group) => (
                  <section key={group.id} className="latest-news-section">
                    <header className="latest-news-section-header">
                      <h3 className="latest-news-section-title">{group.label}</h3>
                      <span className="latest-news-section-label">
                        {group.metaLabel || "News headlines"}
                      </span>
                    </header>

                    <div className="latest-news-list">
                      {group.items.map((item) => (
                        <article key={item.id} className="latest-news-item">
                          <NavLink
                            to={item.to}
                            target="_blank"
                            className="latest-news-link"
                          >
                            <h4 className="latest-news-item-title">{item.title}</h4>
                            <span className="latest-news-item-meta">
                              Opens full article in a new tab
                            </span>
                          </NavLink>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CONTENT END */}

      <style>{`
        .latest-news-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }

        .latest-news-header {
          text-align: left;
          margin-bottom: 2.5rem;
        }

        .latest-news-eyebrow {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 999px;
          background: rgba(0, 155, 212, 0.08);
          color: #0284c7;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .latest-news-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.5rem;
        }

        .latest-news-subtitle {
          color: #64748b;
          max-width: 620px;
          font-size: 0.98rem;
          line-height: 1.7;
        }

        .latest-news-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .latest-news-filter {
          border-radius: 999px;
          border: 1px solid rgba(148, 163, 184, 0.7);
          background: #ffffff;
          color: #0f172a;
          font-size: 0.85rem;
          padding: 0.35rem 0.9rem;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }

        .latest-news-filter-active {
          background: #009bd4;
          border-color: #009bd4;
          color: #ffffff;
        }

        .latest-news-section {
          background: #f8fafc;
          border-radius: 18px;
          padding: 1.75rem 1.5rem 1.5rem;
          border: 1px solid rgba(148, 163, 184, 0.4);
          margin-bottom: 1.25rem;
        }

        .latest-news-section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          gap: 0.75rem;
        }

        .latest-news-section-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        .latest-news-section-label {
          font-size: 0.85rem;
          color: #64748b;
        }

        .latest-news-list {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .latest-news-item {
          background: #ffffff;
          border-radius: 12px;
          padding: 0.85rem 1rem;
          border: 1px solid rgba(148, 163, 184, 0.35);
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
        }

        .latest-news-link {
          display: block;
          text-decoration: none;
        }

        .latest-news-item-title {
          font-size: 0.98rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 0.25rem 0;
        }

        .latest-news-item-meta {
          font-size: 0.8rem;
          color: #64748b;
        }

        .latest-news-item:hover {
          background: #eff6ff;
          border-color: #009bd4;
          transform: translateY(-1px);
        }

        .latest-news-item:hover .latest-news-item-title {
          color: #009bd4;
        }

        @media (max-width: 767px) {
          .latest-news-section {
            padding: 1.35rem 1.1rem 1.1rem;
          }

          .latest-news-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LatestNews;
