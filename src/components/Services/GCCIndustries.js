import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import industriesBanner from "../../assets/images/backgroundImages/Industries-showcase.jpg";
import saudiIndustryImg from "../../assets/images/Saudi-Arabia-GDP-by-Main-Activities.png";
import uaeIndustryImg from "../../assets/images/UAE-GDP-by-Main-Activities.png";
import qatarIndustryImg from "../../assets/images/Qatar-GDP-by-Main-Activities.png";
import kuwaitIndustryImg from "../../assets/images/Kuwait-GDP-by-Main-Activities.png";
import omanIndustryImg from "../../assets/images/Oman-GDP-by-MainActivities.png";
import bahrainIndustryImg from "../../assets/images/Bahrain-GDP-by-Main-Activities.png";
import futureIndustryImg from "../../assets/images/angel-gulf-jobs-future.png";

const firstCountryGroup = [
  {
    country: "Saudi Arabia",
    industries:
      "Petrochemicals, Ammonia, Industrial Gases, Sodium Hydroxide, Cement, Fertiliser, Plastics, Metals, Ship Repair, Aircraft Repair, Construction.",
  },
  {
    country: "Qatar",
    industries:
      "Chemicals, Petrochemicals, Plastics, Glass, Furniture & Decor, Food & Beverage, Electronics, Steel, Ship Building & Repair.",
  },
  {
    country: "Kuwait",
    industries:
      "Chemicals & Petrochemicals, Fabricated Metal Products, Non-Metallic Mineral Products, Furniture & decoration, Cement, Shipbuilding, Food Processing, Construction materials.",
  },
];

const secondCountryGroup = [
  {
    country: "UAE",
    industries:
      "Chemicals & Petrochemicals, Precious & Semi-Precious Stones, Construction, Fabricated Plastics, Heavy Industries, Machinery, Electrical Appliances, Renewable Energy equipment.",
  },
  {
    country: "Oman",
    industries:
      "Chemicals & Petrochemicals, Fertilisers, Cement, Marble, Gypsum, Building Products, Minerals, Food & Beverage.",
  },
  {
    country: "Bahrain",
    industries:
      "Chemicals & Petrochemicals, Plastics, Engineering, Aluminiu Furniture & Decor.",
  },
];

const metaTitle = "Overview of GCC Industries | Angel Gulf Jobs";
const metaDescription =
  "Overview of GCC industries, Angel Gulf Jobs' expertise, and country-wise manpower demand shaping Gulf jobs for Indians.";
const keywords =
  "GulfjobsforIndians, jobsinGCCcountries, overseas manpower agency, overseas recruitment agency, International recruitment agency, GCC Industries";

const sectionTitleStyle = { fontSize: "1.45rem", fontWeight: 600, lineHeight: 1.35 };
const altImageStyle = {
  width: "100%",
  height: "auto",
  objectFit: "contain",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(15, 23, 42, 0.12)",
};
const tableHeaderCellStyle = { backgroundColor: "#f8fafc", fontWeight: 600, textAlign: "left" };
const splitIndustries = (text) =>
  text
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const renderIndustriesTable = (countries) => (
  <table className="table table-bordered align-middle">
    <thead>
      <tr>
        <th style={{ width: "22%", ...tableHeaderCellStyle }}>Main Industries, by Country</th>
        {countries.map((item) => (
          <th key={`${item.country}-head`} style={tableHeaderCellStyle}>
            {item.country}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="fw-semibold">Main Industries</td>
        {countries.map((item) => (
          <td key={`${item.country}-industries`}>
            <ul className="mb-0 ps-3">
              {splitIndustries(item.industries).map((industry) => (
                <li key={`${item.country}-${industry}`}>{industry}</li>
              ))}
            </ul>
          </td>
        ))}
      </tr>
    </tbody>
  </table>
);

const GCCIndustries = () => (
  <div>
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href="https://www.angelgulfjobs.com/gcc-industries" />
      <meta name="revisit-after" content="7 days" />
      <meta name="robots" content="index, follow" />
    </Helmet>

    <div className="page-content">
      <div
        className="wt-bnr-inr overlay-wraper bg-center"
        style={{ backgroundImage: `url(${industriesBanner})` }}
      >
        <div className="overlay-main site-bg-white opacity-01" />
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name background-heading p-3">
                <h1 className="wt-title darkblueTxt" style={{ fontSize: "2.25rem" }}>
                  Overview of GCC Industries
                </h1>
              </div>
            </div>
            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>Overview of GCC Industries</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section-full p-t30 p-b50 bg-white">
        <div className="container">
          <div className="section-content">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10 col-md-12">
                <section className="mb-5">
                  <h2 className="twm-s-title mb-3" style={sectionTitleStyle}>
                    Overview of GCC Industries
                  </h2>
                  <p>
                    Angel Gulf Jobs is a full-service overseas manpower agency promoted by highly experienced professionals who have worked across different sectors in the Gulf region. The exposure gained by our promoters through years of work across multiple industries enables us to provide end-to-end recruitment services across all GCC industries.
                  </p>
                  <p>
                    As a leading overseas recruitment agency and international recruitment agency, we specialise in connecting skilled Indian professionals with top employers in Gulf jobs for Indians across major jobs in GCC countries. Our recruitment solutions cover all major sectors of construction, oil & gas, hospitality, banking, and shipping, with a strong focus on technical and blue-collar manpower.
                  </p>
                  <p>
                    Our biggest strength lies in our extensive candidate database and talent pools, which help us successfully find the right talent and ensure a cultural fit between employers and employees. This enables us to create long-term opportunities for Indian professionals while ensuring top-notch recruitment and a smooth transition into their overseas careers.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="twm-s-title mb-3" style={sectionTitleStyle}>
                    The Role of Industrialisation in GCC Growth
                  </h2>
                  <p>
                    Industrialisation has been a key driver of economic growth across the Gulf Cooperation Council (GCC), including Saudi Arabia, Kuwait, the UAE, Qatar, Bahrain, and Oman.
                  </p>
                  <p>
                    According to the
                    {' '}
                    <a
                      href="https://www.weforum.org/stories/2025/04/gulf-countries-golden-schemes/#:~:text=The%20International%20Monetary%20Fund%20%28IMF,both%20in%20business%20and%20tourism."
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary fw-semibold"
                    >
                      International Monetary Fund
                    </a>
                    {' '}
                    (IMF), the GCC economies are projected to grow at an average rate of 3.5% in 2025 and 4.2% in 2026, outpacing the global average of 3.3%. To sustain this impressive growth, it is essential to maintain a steady inflow of trained manpower across all sectors.
                  </p>
                  <p>
                    At Angel Gulf Jobs, our role as a trusted recruitment agency and overseas manpower provider is to ensure that every growing industry in the Gulf has access to qualified and reliable manpower from India. Our recruitment consulting expertise helps employers optimise their hiring process, save valuable time and resources, and maintain long-term workforce stability.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="twm-s-title mb-3" style={sectionTitleStyle}>
                    GCC Industries: In detail
                  </h2>
                  <p>
                    The Gulf region has rapidly evolved into a global industrial hub, driven by visionary national programmes like
                    {' '}
                    <a
                      href="https://www.vision2030.gov.sa/media/rc0b5oy1/saudi_vision203.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary fw-semibold"
                    >
                      Saudi Vision 2030
                    </a>
                    ,
                    {' '}
                    <a
                      href="https://moiat.gov.ae/-/media/site/moiat/media-kit/operation-300bn-media-kit-en.ashx"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary fw-semibold"
                    >
                      the UAE’s Operation 300bn
                    </a>
                    ,
                    {' '}
                    <a
                      href="https://www.oman2040.om/?lang=en"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary fw-semibold"
                    >
                      Oman Vision 2040
                    </a>
                    , and
                    {' '}
                    <a
                      href="https://www.gco.gov.qa/en/state-of-qatar/qatar-national-vision-2030/our-story/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary fw-semibold"
                    >
                      Qatar National Vision 2030
                    </a>
                    .
                  </p>
                  <p>
                    In recent years, Gulf countries have diversified their economies beyond oil and gas revenues. Massive investments in manufacturing, renewable energy, logistics, mining, and technology-driven sectors are reshaping GCC industries into a sustainable, knowledge-based ecosystem. According to the Gulf Research Centre’s
                    {' '}
                    <a
                      href="https://www.grc.net/documents/660d3493edc9aGCCIndustrialSectorOutlook2.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary fw-semibold"
                    >
                      GCC Industrial Sector Outlook
                    </a>
                    , the non-oil sector now contributes up to 60 % of GDP in some member states.
                  </p>
                  <p>
                    Through Angel Gulf Jobs, Indian professionals can access verified and rewarding jobs in GCC countries, helping them build successful overseas careers while meeting the region’s growing industrial needs.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="twm-s-title mb-3" style={sectionTitleStyle}>
                    Main industries, by country
                  </h2>
                  <div className="table-responsive mb-4">
                    {renderIndustriesTable(firstCountryGroup)}
                  </div>
                  <div className="table-responsive">
                    {renderIndustriesTable(secondCountryGroup)}
                  </div>
                </section>

                <section className="mb-5">
                  <h2 className="twm-s-title mb-3" style={sectionTitleStyle}>
                    Industry in Saudi Arabia – Vision 2030
                  </h2>
                  <p>
                    Saudi Arabia’s Vision 2030 is reshaping the labour market. Mega projects like NEOM, The Red Sea Project, and Qiddiya are generating high demand for foreign engineers, project managers, technicians, and skilled tradespeople. In addition to professional roles, there’s a strong demand for blue-collar workers, such as masons, plumbers, mechanics, and industrial technicians, who contribute to construction, manufacturing, and maintenance work.
                  </p>
                  <p>
                    Why Overseas Labour Matters: Saudi Arabia’s industrial expansion depends on international expertise, from engineers designing petrochemical plants to workers constructing massive steel structures on-site.
                  </p>
                  
                  <div className="text-center mb-4">
                    <img
                      src={saudiIndustryImg}
                      alt="Saudi Arabia GDP by Main Activities"
                      style={altImageStyle}
                    />
                  </div>
                  <p>
                    Source:
                    {' '}
                    <a
                      href="https://www.grc.net/documents/660d3493edc9aGCCIndustrialSectorOutlook2.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary fw-semibold"
                    >
                      GCC Industrial Sector Outlook
                    </a>
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="twm-s-title mb-3" style={sectionTitleStyle}>
                    Industry in the United Arab Emirates
                  </h2>
                  <p>
                    The UAE remains the top destination for expatriate workers in the Gulf. Under Operation 300bn, it plans to make industry a major contributor to GDP by 2031. The UAE’s rapid growth has opened thousands of positions for technicians, safety officers, AI specialists, and automation engineers.
                  </p>
                  <p>
                    Blue-collar workers, including construction labourers, electricians, drivers, and machine operators, are vital for Dubai and Abu Dhabi’s continuous infrastructure growth. The country also offers stable employment for manufacturing and maintenance workers in its free zones and industrial cities such as Jebel Ali and KIZAD.
                  </p>
                  <p>
                    Why Overseas manpower matters: The UAE’s modern skylines and ports would not exist without millions of migrant workers placed through reliable overseas recruitment agencies like Angel Gulf Jobs.
                  </p>
                  
                  <div className="text-center mb-4">
                    <img src={uaeIndustryImg} alt="UAE GDP by Main Activities" style={altImageStyle} />
                  </div>
                  <p>
                    Source:
                    {' '}
                    <a
                      href="https://www.grc.net/documents/660d3493edc9aGCCIndustrialSectorOutlook2.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary fw-semibold"
                    >
                      GCC Industrial Sector Outlook
                    </a>
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="twm-s-title mb-3" style={sectionTitleStyle}>
                    Industry in Qatar
                  </h2>
                  <p>
                    After hosting the FIFA World Cup 2022, Qatar continues to invest in energy, infrastructure and logistics. This results in continuous demand for civil engineers, mechanical technicians, electricians, logistics managers, and hospitality professionals.
                  </p>
                  <p>
                    The ship repair and steel industries hire thousands of welders, machinists, and safety assistants from overseas, while the energy and petrochemical sectors remain top employers of chemical engineers and industrial safety specialists.
                  </p>
                  <p>
                    Why Overseas Labour Matters: With nearly 85% of Qatar’s workforce being expatriate, the country’s industrial and construction success heavily relies on international recruitment agencies like Angel Gulf Jobs to supply well-trained manpower.
                  </p>
                  
                  <div className="text-center mb-4">
                    <img src={qatarIndustryImg} alt="Qatar GDP by Main Activities" style={altImageStyle} />
                  </div>
                  <p>
                    Source:
                    {' '}
                    <a
                      href="https://www.grc.net/documents/660d3493edc9aGCCIndustrialSectorOutlook2.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary fw-semibold"
                    >
                      GCC Industrial Sector Outlook
                    </a>
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="twm-s-title mb-3" style={sectionTitleStyle}>
                    Industry in Kuwait
                  </h2>
                  <p>
                    Kuwait’s economy continues to depend on oil refining, construction materials, and heavy industries. Massive public infrastructure projects create continuous opportunities for civil engineers, project supervisors, and skilled tradespeople. The construction and refinery sectors require blue-collar workers such as pipefitters, welders, riggers, scaffolders, and machine operators. Meanwhile, the service and healthcare sectors employ large numbers of Indian nurses, technicians, and teachers.
                  </p>
                  <p>
                    Why Overseas Labour Matters: Expatriates make up the majority of Kuwait’s industrial workforce. Our international recruitment expertise at Angel Gulf Jobs ensures that employers can find the right talent efficiently and ensure a smooth transition for new hires.
                  </p>
                  
                  <div className="text-center mb-4">
                    <img src={kuwaitIndustryImg} alt="Kuwait GDP by Main Activities" style={altImageStyle} />
                  </div>
                  <p>
                    Source:
                    {' '}
                    <a
                      href="https://www.grc.net/documents/660d3493edc9aGCCIndustrialSectorOutlook2.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary fw-semibold"
                    >
                      GCC Industrial Sector Outlook
                    </a>
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="twm-s-title mb-3" style={sectionTitleStyle}>
                    Industry in Oman – Industrialising through Vision 2040
                  </h2>
                  <p>
                    Oman’s Vision 2040 is driving diversification across energy, mining, manufacturing, and logistics. The industrial base, including cement, marble, and fertiliser production, relies heavily on foreign welders, drivers, and plant operators. Emerging sectors such as renewable energy and solar power are also creating opportunities for technicians and installers.
                  </p>
                  <p>
                    Why Overseas Labour Matters: Oman’s industrial balance between local and foreign labour highlights its reliance on recruitment services and executive search expertise to secure the best top talent for industrial growth.
                  </p>
                  
                  <div className="text-center mb-4">
                    <img src={omanIndustryImg} alt="Oman GDP by Main Activities" style={altImageStyle} />
                  </div>
                  <p>
                    Source:
                    {' '}
                    <a
                      href="https://www.grc.net/documents/660d3493edc9aGCCIndustrialSectorOutlook2.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary fw-semibold"
                    >
                      GCC Industrial Sector Outlook
                    </a>
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="twm-s-title mb-3" style={sectionTitleStyle}>
                    Industry in Bahrain
                  </h2>
                  <p>
                    Bahrain stands out as a financial and industrial hub, with thriving aluminium, plastics, and engineering sectors. Its industries rely on machinists, electricians, fabrication technicians, and maintenance crews from abroad. Bahrain has a small population and liberal economy, yet it remains a preferred destination for Indian and South Asian workers seeking stable industrial employment.
                  </p>
                  <p>
                    Why Overseas Labour Matters: Bahrain’s manufacturing success reflects the skill and dedication of its international workforce, supported by trusted overseas recruitment agencies like Angel Gulf Jobs.
                  </p>
                  
                  <div className="text-center mb-4">
                    <img src={bahrainIndustryImg} alt="Bahrain GDP by Main Activities" style={altImageStyle} />
                  </div>
                  <p>
                    Source:
                    {' '}
                    <a
                      href="https://www.grc.net/documents/660d3493edc9aGCCIndustrialSectorOutlook2.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary fw-semibold"
                    >
                      GCC Industrial Sector Outlook
                    </a>
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="twm-s-title mb-3" style={sectionTitleStyle}>
                    The Future of GCC Industries
                  </h2>
                  <p>
                    Massive infrastructure investments, sustainability initiatives, and the adoption of smart technologies are redefining the Gulf’s economic landscape. For Indian job seekers, this is the ideal time to explore secure, long-term Gulf jobs for Indians through a trusted international recruitment agency that truly understands industry knowledge and hiring talent.
                  </p>
                 
                  <div className="text-center mb-4">
                    <img src={futureIndustryImg} alt="Angel Gulf Jobs" style={altImageStyle} />
                  </div>
                  <section className="cta-box mb-4 p-4 p-md-5 rounded-4 text-center text-md-start">
                    <p className="cta-label mb-3">🌐 Ready to Work in the Gulf?</p>
                    <p className="cta-text mb-3">
                      At Angel Gulf Jobs, we connect both skilled professionals and blue-collar talent with trusted employers across the GCC. Whether you are an engineer, supervisor, electrician, welder, or driver, our overseas recruitment agency helps you find verified opportunities in Saudi Arabia, the UAE, Qatar, Kuwait, Oman, and Bahrain.
                    </p>
                    <p className="cta-text mb-0">
                      Angel Gulf Jobs — your partner for genuine jobs in GCC countries, trusted overseas recruitment, and international recruitment services for the future.
                    </p>
                  </section>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>{`
      .cta-box {
        background: #e5f2ff;
        border: 1px solid rgba(0, 155, 212, 0.25);
      }

      .cta-label {
        font-size: 1.1rem;
        font-weight: 700;
        color: #0c4a6e;
      }

      .cta-text {
        color: #0f172a;
        line-height: 1.8;
      }
    `}</style>
  </div>
);

export default GCCIndustries;
