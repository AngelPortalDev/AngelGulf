import React from "react";
import BlogLayout from "./BlogLayout";
import HeroImg from "../../assets/images/blogs/kafala.png";
import InlineImg1 from "../../assets/images/blogs/abuse-within-kafala-system.png";
import InlineImg2 from "../../assets/images/blogs/reforms-to-the-kafala-system.png";

const SEO_KEYWORDS = [
  "kafala system",
  "kafala system in Saudi Arabia",
  "Saudi kafala system",
  "what is the kafala system",
];

const KafalaSystem = () => {
  return (
    <BlogLayout
      title="The Kafala System: From Control to Reform in Saudi Arabia"
      subtitle="Understanding how a historic sponsorship system shaped migrant lives across the Gulf—and what its abolition in Saudi Arabia means for Indian workers."
      eyebrow="Labour rights & policy"
      intro="For decades, the Kafala system governed nearly every aspect of migrant workers' lives in the Gulf. Today, as Saudi Arabia abolishes the system, a new chapter is opening for millions of workers, including Indians seeking safe and legal overseas employment."
      hero={(
        <figure className="text-center mb-0">
          <img
            src={HeroImg}
            alt="Illustration representing migrant workers and labour reforms in the Gulf"
            className="img-fluid rounded-4 shadow"
            style={{ maxHeight: "460px", objectFit: "cover" }}
          />
          <figcaption className="mt-3 text-muted fst-italic hero-caption">
            Labour reforms in the Gulf are reshaping how migrant workers live, work, and move—especially in Saudi Arabia.
          </figcaption>
        </figure>
      )}
      metaHighlights={[
        { label: "Category", value: "Labour Rights & Policy" },
        { label: "Reading time", value: "8 mins" },
        { label: "Updated", value: "Nov 2025" },
      ]}
      metaTitle="The Kafala System in Saudi Arabia | From Sponsorship to Labour Reform"
      metaDescription="Learn what the Kafala system is, how it shaped migrant workers' lives in Saudi Arabia and the Gulf, and what its abolition under Vision 2030 means for Indian workers seeking safe, legal overseas employment."
      metaKeywords={SEO_KEYWORDS}
      breadcrumbItems={[
        {
          label: "The Kafala System",
        },
      ]}
      canonicalUrl="https://www.angelgulfjobs.com/blogs/kafala-system-saudi-arabia"
    >
      {/* ORIGINS & OVERVIEW */}
      <section className="blog-section mb-5">
        <h2 className="h3 fw-bold section-title-blue">The Kafala System</h2>

        <p>
          Recently, Saudi Arabia has abolished the Kafala system. For years, this framework shaped almost every aspect of
          migrant life—from the moment a worker arrived in the country to the terms on which they could leave. As the Gulf
          region begins to reform this system, it is important to ask: What exactly was the Kafala system, how did it
          operate, and what lessons does it leave behind?
        </p>

        <h3 className="h4 fw-bold section-title-dark mt-4">What Is the Kafala System?</h3>

        <p>
          The Kafala system is a sponsorship-based employment setup that governs the relationship between foreign workers
          and their local sponsor or <em>kafeel</em>, usually the employer. Under this structure, a worker's legal residency
          and right to work are tied directly to the sponsor. The sponsor controls job changes, permission to travel, and
          even visa renewals or cancellations.
        </p>

        <p>
          If workers leave their jobs without the sponsor's permission, they can face imprisonment, deportation, or the loss
          of legal status—even when leaving because of harassment, non-payment of wages, or unsafe working conditions. For
          decades, this system operated across the Gulf Cooperation Council (GCC) countries of Bahrain, Kuwait, Oman,
          Qatar, Saudi Arabia, and the UAE, as well as in Jordan and Lebanon.
        </p>
      </section>

      {/* HISTORICAL BACKGROUND */}
      <section className="blog-section mb-5">
        <h2 className="h3 fw-bold section-title-blue">How Did the Kafala System Begin?</h2>

        <p>
          The Kafala system grew out of older concepts of guardianship and responsibility in Arab societies. In the early
          20th century, states adapted these ideas to manage the recruitment of foreign labour in sectors such as pearl
          diving, trade, and early infrastructure projects.
        </p>

        <p>
          When oil was discovered and production expanded in the 1950s, labour demand across the Gulf rose dramatically.
          Sponsors, or <em>kafeels</em>, were given responsibility for recruiting workers, overseeing their stay, and
          arranging for their return home once contracts ended. In theory, this offered a protective mechanism for workers
          unfamiliar with local laws and customs.
        </p>

        <p>
          In practice, weak oversight turned the Kafala system into a structure of dependency and control. During the 1970s
          oil boom, GCC countries began hiring large numbers of workers from India, Bangladesh, Nepal, the Philippines, and
          other labour‑sending countries. After the Gulf War, migration increased further. Today, migrants make up a
          significant share of the population in many Gulf states, with Saudi Arabia alone hosting millions of foreign
          workers, including an estimated 2.6 million Indians.
        </p>
      </section>

      {/* SAUDI ARABIA CONTEXT */}
      <section className="blog-section mb-5">
        <h2 className="h3 fw-bold section-title-blue">The Kafala System in Saudi Arabia: A Legacy of Sponsorship</h2>

        <p>
          For decades, the Saudi version of the Kafala system gave employers sweeping authority over foreign workers.
          Sponsors managed recruitment, controlled workers' residency documents, and often decided where and how workers
          lived—sometimes in overcrowded camps or, in the case of domestic workers, inside private homes.
        </p>

        <p>
          Because the system historically fell under the Ministry of Interior instead of the Ministry of Labour, migrant
          workers were excluded from many standard labour protections. They could not form unions, had limited access to
          justice, and often struggled to report abuse or unpaid wages.
        </p>

        <p>
          Over time, the Kafala system became closely associated with forced labour, debt bondage, and restricted mobility.
          In many cases, employers confiscated passports, delayed or withheld salaries, and required exit permits or exit
          visas before workers could change jobs or leave the country. International organisations, including the
          International Labour Organisation and human rights bodies, repeatedly criticised the system as a form of modern
          slavery.
        </p>
      </section>

      {/* WORKERS UNDER THE SYSTEM + IMAGE 1 */}
      <section className="blog-section mb-5">
        <h2 className="h3 fw-bold section-title-blue">Workers Under the Kafala System</h2>

        <p>
          The Kafala system affected almost all categories of migrant workers across the Gulf. Construction workers,
          nurses, cleaners, hospitality staff, drivers, and even many white‑collar professionals found their legal status
          tied to a single employer.
        </p>

        <p>
          Despite the hardships, millions continued to migrate because wages in Gulf countries offered a lifeline for
          families back home. In 2019, Saudi Arabia, Kuwait, and the UAE were among the world's
          {" "}
          <a
            href="https://worldmigrationreport.iom.int/what-we-do/world-migration-report-2024-chapter-2/international-remittances#:~:text=High%2Dincome%20countries%20are%20almost,2022%20World%20Bank%20data%20release"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#009bd4", fontWeight: 600 }}
          >
            top remittance‑sending nations
          </a>
          , collectively sending billions of dollars to households across India, Nepal, Bangladesh, and other
          labour‑sending countries.
        </p>

        <figure className="my-4 text-center">
          <img
            src={InlineImg1}
            alt="Conceptual illustration about risks and abuses faced by migrant workers under restrictive labour systems"
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxWidth: "720px" }}
          />
          <figcaption className="mt-2 text-muted" style={{ fontSize: "0.95rem" }}>
            Migrant workers have long faced risks such as restricted mobility, wage delays, and dependence on a single
            employer.
          </figcaption>
        </figure>
      </section>

      {/* CRITICISM & NEED FOR REFORM */}
      <section className="blog-section mb-5">
        <h2 className="h3 fw-bold section-title-blue">Why the Kafala System Was Criticised</h2>

        <p>
          Critics argued that the Kafala framework was outdated and unjust. By giving employers disproportionate power over
          visas, job changes, and day‑to‑day freedoms, it created conditions where exploitation could go unreported and
          unpunished. Workers who spoke up risked losing their legal status or being sent home.
        </p>

        <p>
          Economists also pointed out that such tight control over labour limited innovation and mobility in the job market.
          When workers cannot switch employers freely, it becomes harder for businesses to attract and retain the right
          skills—and harder for workers to grow their careers.
        </p>

        <p>
          In Saudi Arabia, the Kafala system increasingly clashed with the goals of Vision 2030, which aims to build a
          diversified, knowledge‑based economy. Reforming this system became not only a moral responsibility but also an
          economic necessity to create a fair, efficient, and future‑ready labour market.
        </p>
      </section>

      {/* REFORMS + IMAGE 2 */}
      <section className="blog-section mb-5">
        <h2 className="h3 fw-bold section-title-blue">Dawn of Reform: Saudi Arabia Abolishes the Kafala System</h2>

        <p>
          In 2025, a historic shift took place. Under Crown Prince Mohammed bin Salman's Vision 2030 agenda, Saudi Arabia
          formally abolished the traditional Kafala system and moved towards a modern, contract‑based employment framework
          aligned with international labour standards.
        </p>

        <figure className="my-4 text-center">
          <img
            src={InlineImg2}
            alt="Visual representation of reforms to sponsorship and labour rules in Gulf countries"
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxWidth: "720px" }}
          />
          <figcaption className="mt-2 text-muted" style={{ fontSize: "0.95rem" }}>
            New labour reforms in Saudi Arabia aim to give workers clearer contracts, greater mobility, and stronger
            protections.
          </figcaption>
        </figure>

        <p>
          Under the new reforms, foreign workers can switch employers more freely after their contracts end, leave the
          country without needing an exit visa, and file complaints directly with the Ministry of Human Resources and
          Social Development.
        </p>

        <p>
          These changes do more than update a law on paper—they redefine how migrant labour functions in Saudi Arabia. The
          reforms also send an important signal to the wider Middle East, encouraging neighbouring GCC countries to
          strengthen their labour protections and move away from restrictive sponsorship practices.
        </p>
      </section>

      {/* IMPACT ON INDIAN WORKERS */}
      <section className="blog-section mb-5">
        <h2 className="h3 fw-bold section-title-blue">A New Era for Indian Workers</h2>

        <p>
          For Indian job seekers, the end of the Kafala system in Saudi Arabia promises more freedom, safety, and dignity at
          work. In practical terms, the reforms are expected to support:
        </p>

        <ul>
          <li>
            <strong>Job mobility</strong>: the ability to move between employers according to clear rules, without fear of
            being trapped in abusive situations.
          </li>
          <li>
            <strong>Legal protection</strong>: greater access to labour courts, dispute‑resolution mechanisms, and official
            channels to report violations.
          </li>
          <li>
            <strong>Financial security</strong>: more transparent, timely payment of wages, supported by digital systems and
            wage‑protection tools.
          </li>
          <li>
            <strong>Basic rights</strong>: the right to hold personal documents such as passports and to travel in line with
            contract terms and national law.
          </li>
        </ul>

        <p>
          At the same time, meaningful change takes time. Some employers may continue old habits, and not every process will
          improve overnight. That is why awareness, vigilance, and choosing verified recruitment partners remain essential
          for anyone planning a Gulf career.
        </p>
      </section>

      {/* CONCLUSION & CTA */}
      <section className="blog-section mb-5">
        <h2 className="h3 fw-bold section-title-blue">Closing the Circle: From Chains to Choices</h2>

        <p>
          The story of the Kafala system is ultimately a story of transformation—from control and dependency to greater
          empowerment and choice. For decades, workers from India and other countries helped build the Gulf's modern
          skylines while often sacrificing their own freedom and security. Now, that balance is starting to shift.
        </p>

        <p>
          The end of the traditional Kafala system in Saudi Arabia marks an important milestone, but its real legacy will be
          measured by how well future systems protect workers' rights, support fair recruitment, and enable dignified,
          long‑term careers abroad.
        </p>

        <p>
          At Angel Gulf Jobs, we welcome these reforms while continuing to educate, empower, and connect Indian
          professionals with verified Gulf employers. Our mission is to make overseas employment transparent, lawful, and
          truly life‑changing.
        </p>

        <div className="cta-box mb-0 p-4 p-md-5 rounded-4 mt-4">
          <div className="d-flex flex-wrap align-items-center mb-4 gap-3 cta-header">
            <div className="cta-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="white" />
              </svg>
            </div>
            <h2 className="h3 fw-bold mb-0 cta-title">Start Your Gulf Journey the Right Way</h2>
          </div>

          <p className="cta-text">
            Looking for a safe and verified path to your Gulf career? Angel Gulf Jobs offers government‑approved
            recruitment, visa guidance, and post‑placement support—so your overseas job journey stays transparent, legal,
            and rewarding.
          </p>

          <p className="cta-text mb-0">
            Apply now at
            {" "}
            <a
              href="/registration"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: 700, color: "#0c4a6e", textDecoration: "underline" }}
            >
              Angel Gulf Jobs
            </a>
            {" "}
            and step confidently into a new era of Gulf employment.
          </p>
        </div>
      </section>

      {/* INTERNAL STYLE BLOCK — UI ONLY */}
      <style>{`
        .hero-caption { font-size: 0.95rem; }
        .blog-section { margin-bottom: clamp(2rem, 4vw, 4rem); }
        .blog-section:last-of-type { margin-bottom: 0; }
        .blog-section p { margin-bottom: 1.2rem; line-height: 1.75; }
        .blog-section ul,
        .blog-section ol { padding-left: 1.25rem; }
        .blog-section li { line-height: 1.7; margin-bottom: 0.4rem; }
        .section-title-blue { color: #009bd4; margin-bottom: 1.5rem; }
        .section-title-dark { color: #0f172a; margin-bottom: 0.85rem; }

        .cta-box {
          background: linear-gradient(135deg, #edf6ff 0%, #dff1ff 100%);
          border: 1px solid rgba(0,155,212,0.2);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);
        }

        .cta-icon-wrapper {
          width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #009bd4 0%, #0284c7 100%);
          display: inline-flex; align-items: center; justify-content: center; margin-right: 1rem;
        }

        .cta-title { color: #0c4a6e; }
        .cta-text { color: #0c4a6e; line-height: 1.75; }

        @media (max-width: 767px) {
          .bloglayout-reading section + section { padding-top: 2rem; }
          .cta-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .cta-box { padding: 1.8rem; }
        }

        @media (max-width: 575px) {
          .hero-caption { font-size: 0.9rem; }
          .cta-box { text-align: left; }
          .cta-text { font-size: 0.95rem; }
        }
      `}</style>
    </BlogLayout>
  );
};

export default KafalaSystem;
