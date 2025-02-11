<<<<<<< HEAD
import React from "react";
import constructionImg from "../../assets/images/sitemap/construction.jpg";
import { NavLink } from "react-router-dom";
import CarouselItems from "../common/CarouselItems";
import img1 from "../../assets/images/sitemap/constructions/Mason_Plaster1.jpg";
import img2 from "../../assets/images/sitemap/constructions/Tiles_Mason.jpg";
import img3 from "../../assets/images/sitemap/constructions/Mason_all.jpg";
import img4 from "../../assets/images/sitemap/constructions/Tiles_Marble_Mason.jpg";
import img5 from "../../assets/images/sitemap/constructions/Plumber.jpg";
import img6 from "../../assets/images/sitemap/constructions/Shuttering_Carpenter.jpg";
import img7 from "../../assets/images/sitemap/constructions/R_C_C_Fitter.jpg";
import img8 from "../../assets/images/sitemap/constructions/Wall_Painter.jpg";
import img9 from "../../assets/images/sitemap/constructions/Wall_Spray_Painter.jpg";
import img10 from "../../assets/images/sitemap/constructions/Plaster_Of_Paris.jpg";
import img11 from "../../assets/images/sitemap/constructions/Gypsum_Board_Fixure.jpg";
import img12 from "../../assets/images/sitemap/constructions/Marble_Fixutre.jpg";
import img13 from "../../assets/images/sitemap/constructions/Marble_Cutter_&_Grinder.jpg";
import img14 from "../../assets/images/sitemap/constructions/Wall_Painter_Designer.jpg";
import img15 from "../../assets/images/sitemap/constructions/Wall_Painter_Designer_Texture.jpg";
import img16 from "../../assets/images/sitemap/constructions/Marble_Cutter.jpg";
import img17 from "../../assets/images/sitemap/constructions/Scaffolder.jpg";
import img18 from "../../assets/images/sitemap/constructions/Steel_Fixers.jpg";
import img19 from "../../assets/images/sitemap/constructions/Construction_Supervisors.jpg";
import img20 from "../../assets/images/sitemap/constructions/Constructio_Managers.jpg";
import { Helmet } from "react-helmet";

const ConstructionIndustry = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
  ];

  const titles = [
    "Mason (Plaster & Bricks)",
    "Tiles Mason (Wall & Floor)",
    "Mason (All Rounder)",
    "Tiles & Marble Mason",
    "Plumber",
    "Shuttering Carpenter",
    "R.C.C. Fitter",
    "Wall Painter",
    "Wall Spray Painter",
    "Plaster of Paris",
    "Gypsum Board Fixture",
    "Marble Fixture",
    "Marble Cutter & Grinder",
    "Wall Painter Designer",
    " Painter Designer (Texture)",
    "Marble Cutter",
    "Scaffolder",
    "Steel Fixers",
    "Construction Supervisors",
    "Construction Managers",
  ];

  const altTexts = [
    "Gulf Construction Company Jobs",
    "Civil Engineering Jobs in Gulf",
    "Mason_all Jobs In Gulf",
    "Tiles_Marble_Mason Jobs In Gulf",
    "Plumber Jobs In Gulf",
    "Shuttering_Carpenter Jobs In Gulf",
    "RCC Fitter Jobs In Gulf",
    "Wall_Painter Jobs In Gulf",
    "Wall_Spray_Painter Jobs In Gulf",
    "Plaster Of Paris Jobs In Gulf",
    "Gypsum_Board_Fixure Jobs In Gulf",
    "Marble Fixture Jobs In Gulf",
    "Marble_Cutter_&_Grinder Jobs In Gulf",
    "Wall Painter Designer Jobs In Gulf",
    "Wall Painter Designer Texture Jobs In Gulf",
    "Marble Cutter Jobs In Gulf",
    "Scaffolder Jobs In Gulf",
    "Steel Fixers Jobs In Gulf",
    "Construction Supervisors Jobs In Gulf",
    "Construction Managers Jobs In Gulf"
  ];

  return (
    <div>
      <Helmet>
      <title>Gulf Construction Company Jobs, Civil Engineering Jobs in Gulf</title>
<meta name="keywords" content="Gulf Construction Company Jobs, Civil Engineering Jobs in Gulf, Construction Industry Jobs, construction industry, construction jobs, civil jobs, jobs in Dubai, jobs in Abu Dhabi, jobs in Oman, jobs in Gulf"/>
<meta name="description" content="Search from database how much Gulf Construction Company Jobs vacancies we have listed in our database and apply for your perfect job. Apply for Civil Engineering Jobs in Gulf. "/>
<link rel="canonical" href="https://www.angelgulfjobs.com/construction-industry"/>
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${constructionImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">Gulf Construction Company Jobs
                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Gulf Construction Company Jobs
                  </li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}
        <div>
          <div className="section-full p-t30 p-b50 bg-white">
            <div className="container">
              <div className="section-content">
                <div className="row">
                  <div>
                    <h4>Industries We Serve</h4>
                    <p>
                      Angel Gulf Jobs is a full-service overseas manpower agency
                      promoted by highly experienced professionals having worked
                      across different sectors in the Gulf region. The exposure
                      derived by promoters in their work life across different
                      sectors has helped them to provide services across a wide
                      range of industries. As far as Gulf region is concerned,
                      Angel Gulf Jobs serves all the top sectors including
                      construction, oil & gas, hospitality, banking, shipping
                      and more. Search from database how much Gulf Construction
                      Company Jobs vacancies we have listed in our database and
                      apply for your perfect job. Apply for Civil Engineering
                      Jobs in Gulf. Above all, the biggest strength of Angel
                      Gulf Jobs lies in its database of candidates which is
                      spread across different work categories making it possible
                      to serve almost all the important industries across entire
                      Gulf & other regions.
                    </p>
                  </div>
                  {/* Carousel in col-lg-3 */}
                  <div className="col-lg-6 col-md-12">
                    <div className="carousel-wrapper p-3">
                      <div className="carouselbackground">
                        <h5 className="text-center fw-semibold text-white py-2 px-1">
                          Here is a listing of the job functions in the
                          construction industry we source candidate for
                        </h5>
                      </div>

                      {/* <div
                        id="carouselExampleCaptions"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        data-bs-interval="1000"
                      >
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          />
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                          />
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                          />
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={3}
                            aria-label="Slide 4"
                          />
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={4}
                            aria-label="Slide 5"
                          />
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={5}
                            aria-label="Slide 6"
                          />
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={6}
                            aria-label="Slide 7"
                          />
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={7}
                            aria-label="Slide 8"
                          />
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={8}
                            aria-label="Slide 9"
                          />
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              src="https://www.angelgulfjobs.com/images/Construction_Supervisors.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark text-white py-2 mb-3">
                              <h5 className="text-white mb-0">
                                First slide label
                              </h5>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://www.angelgulfjobs.com/images/Marble_Cutter_&_Grinder.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark py-2 mb-3 text-white">
                              <h5 className="text-white mb-0">
                                Second slide label
                              </h5>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://www.angelgulfjobs.com/images/Wall_Painter_Designer.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark py-2 mb-3 text-white">
                              <h5 className="text-white mb-0">
                                Third slide label
                              </h5>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://www.angelgulfjobs.com/images/Construction_Supervisors.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark text-white py-2 mb-3">
                              <h5 className="text-white mb-0">
                                Fourth slide label
                              </h5>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://www.angelgulfjobs.com/images/Marble_Cutter_&_Grinder.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark py-2 mb-3 text-white">
                              <h5 className="text-white mb-0">
                                Fifth slide label
                              </h5>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://www.angelgulfjobs.com/images/Wall_Painter_Designer.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark py-2 mb-3 text-white">
                              <h5 className="text-white mb-0">
                                Sixth slide label
                              </h5>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://www.angelgulfjobs.com/images/Construction_Supervisors.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark text-white py-2 mb-3">
                              <h5 className="text-white mb-0">
                                Seventh slide label
                              </h5>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://www.angelgulfjobs.com/images/Marble_Cutter_&_Grinder.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark py-2 mb-3 text-white">
                              <h5 className="text-white mb-0">
                                Eighth slide label
                              </h5>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://www.angelgulfjobs.com/images/Wall_Painter_Designer.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark py-2 mb-3 text-white">
                              <h5 className="text-white mb-0">
                                Ninth slide label
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div> */}

                      {/* Componnet */}

                      <CarouselItems images={images} titles={titles} altTexts={altTexts} />
                      {/*  */}
                    </div>
                  </div>
                  {/* Empty col-lg-9 */}
                  <div className="col-lg-6 col-md-12">
                    {/* This section is empty for now */}
                    <h4 className="mt-3 mt-md-0">Construction Industry</h4>
                    <p>
                      Construction industry is a very huge industry throughout
                      the Gulf region. There is tremendous demand from
                      industrial, commercial and the residential sector. Oil &
                      gas, power plants, heavy engineering, automotive,
                      hospitality industry & so on are being setup throughout
                      the Gulf. Already established industries are expanding and
                      modernizing them creating huge job opportunities in
                      construction & civil. Due to large scale industrialization
                      huge demand is also coming up from commercial &
                      residential sectors. A number of real estate companies
                      have come up creating widespread residential complexes,
                      malls, hotels, medical facilities and more. The Gulf
                      Cooperation Council (GCC) construction market will hit a
                      record of USD 144 billion in 2016, driven by mega-projects
                      like World Expo 2020 in Dubai and FIFA World Cup 2022 in
                      Qatar (Source Press Trust of India | Dubai April 8, 2015)
                      generating huge number of construction jobs, civil jobs in
                      the Gulf region.
                    </p>
                  </div>
                  <p>
                    There is huge demand for talented construction workforce
                    across all job functions including general construction,
                    supervisors, civil engineers, construction manager,
                    scaffolders, construction electricians and more. At certain
                    construction jobs, civil jobs experienced workforce is
                    required and at certain levels fresh candidates can be
                    placed. We at Angel Gulf Jobs are fully equipped to provide
                    the best of talented construction work force to the clients
                    even at shorter notice. We primarily source candidates
                    through our own comprehensive job portal equipped with a
                    large size updated database of candidates. We also make the
                    best use of our external contacts to source the required
                    candidates. In short, we, at Angel Gulf Jobs act as
                    trustworthy referral agent and enable the clients throughout
                    the Gulf region to have an access to the best talented
                    construction work force.
                  </p>
                  <p>
                    Construction companies in Gulf may send in their enquiry for
                    our recruitment services{" "}
                    <NavLink to="/contact-us" className="textlinkstyle">Click here </NavLink>
                  </p>
                  <p>
                    As far as job seekers are concerned we take utmost care that
                    we only keep latest construction jobs, civil jobs in our
                    database and help them with the most rewarding career in the
                    construction industry. Job seekers may register with us for
                    FREE Click here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionIndustry;
=======
import React from "react";
import constructionImg from "../../assets/images/sitemap/construction.jpg";
import { NavLink } from "react-router-dom";
import CarouselItems from "../common/CarouselItems";
import img1 from "../../assets/images/sitemap/constructions/Mason_Plaster1.jpg";
import img2 from "../../assets/images/sitemap/constructions/Tiles_Mason.jpg";
import img3 from "../../assets/images/sitemap/constructions/Mason_all.jpg";
import img4 from "../../assets/images/sitemap/constructions/Tiles_Marble_Mason.jpg";
import img5 from "../../assets/images/sitemap/constructions/Plumber.jpg";
import img6 from "../../assets/images/sitemap/constructions/Shuttering_Carpenter.jpg";
import img7 from "../../assets/images/sitemap/constructions/R_C_C_Fitter.jpg";
import img8 from "../../assets/images/sitemap/constructions/Wall_Painter.jpg";
import img9 from "../../assets/images/sitemap/constructions/Wall_Spray_Painter.jpg";
import img10 from "../../assets/images/sitemap/constructions/Plaster_Of_Paris.jpg";
import img11 from "../../assets/images/sitemap/constructions/Gypsum_Board_Fixure.jpg";
import img12 from "../../assets/images/sitemap/constructions/Marble_Fixutre.jpg";
import img13 from "../../assets/images/sitemap/constructions/Marble_Cutter_&_Grinder.jpg";
import img14 from "../../assets/images/sitemap/constructions/Wall_Painter_Designer.jpg";
import img15 from "../../assets/images/sitemap/constructions/Wall_Painter_Designer_Texture.jpg";
import img16 from "../../assets/images/sitemap/constructions/Marble_Cutter.jpg";
import img17 from "../../assets/images/sitemap/constructions/Scaffolder.jpg";
import img18 from "../../assets/images/sitemap/constructions/Steel_Fixers.jpg";
import img19 from "../../assets/images/sitemap/constructions/Construction_Supervisors.jpg";
import img20 from "../../assets/images/sitemap/constructions/Constructio_Managers.jpg";
import { Helmet } from "react-helmet";

const ConstructionIndustry = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
  ];

  const titles = [
    "Mason (Plaster & Bricks)",
    "Tiles Mason (Wall & Floor)",
    "Mason (All Rounder)",
    "Tiles & Marble Mason",
    "Plumber",
    "Shuttering Carpenter",
    "R.C.C. Fitter",
    "Wall Painter",
    "Wall Spray Painter",
    "Plaster of Paris",
    "Gypsum Board Fixture",
    "Marble Fixture",
    "Marble Cutter & Grinder",
    "Wall Painter Designer",
    " Painter Designer (Texture)",
    "Marble Cutter",
    "Scaffolder",
    "Steel Fixers",
    "Construction Supervisors",
    "Construction Managers",
  ];

  const altTexts = [
    "Gulf Construction Company Jobs",
    "Civil Engineering Jobs in Gulf",
    "Mason_all Jobs In Gulf",
    "Tiles_Marble_Mason Jobs In Gulf",
    "Plumber Jobs In Gulf",
    "Shuttering_Carpenter Jobs In Gulf",
    "RCC Fitter Jobs In Gulf",
    "Wall_Painter Jobs In Gulf",
    "Wall_Spray_Painter Jobs In Gulf",
    "Plaster Of Paris Jobs In Gulf",
    "Gypsum_Board_Fixure Jobs In Gulf",
    "Marble Fixture Jobs In Gulf",
    "Marble_Cutter_&_Grinder Jobs In Gulf",
    "Wall Painter Designer Jobs In Gulf",
    "Wall Painter Designer Texture Jobs In Gulf",
    "Marble Cutter Jobs In Gulf",
    "Scaffolder Jobs In Gulf",
    "Steel Fixers Jobs In Gulf",
    "Construction Supervisors Jobs In Gulf",
    "Construction Managers Jobs In Gulf"
  ];

  return (
    <div>
      <Helmet>
      <title>Gulf Construction Company Jobs, Civil Engineering Jobs in Gulf</title>
<meta name="keywords" content="Gulf Construction Company Jobs, Civil Engineering Jobs in Gulf, Construction Industry Jobs, construction industry, construction jobs, civil jobs, jobs in Dubai, jobs in Abu Dhabi, jobs in Oman, jobs in Gulf"/>
<meta name="description" content="Search from database how much Gulf Construction Company Jobs vacancies we have listed in our database and apply for your perfect job. Apply for Civil Engineering Jobs in Gulf. "/>
<link rel="canonical" href="https://www.angelgulfjobs.com/construction-industry"/>
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${constructionImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">Gulf Construction Company Jobs
                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Gulf Construction Company Jobs
                  </li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}
        <div>
          <div className="section-full p-t30 p-b50 bg-white">
            <div className="container">
              <div className="section-content">
                <div className="row">
                  <div>
                    <h4>Industries We Serve</h4>
                    <p>
                      Angel Gulf Jobs is a full-service overseas manpower agency
                      promoted by highly experienced professionals having worked
                      across different sectors in the Gulf region. The exposure
                      derived by promoters in their work life across different
                      sectors has helped them to provide services across a wide
                      range of industries. As far as Gulf region is concerned,
                      Angel Gulf Jobs serves all the top sectors including
                      construction, oil & gas, hospitality, banking, shipping
                      and more. Search from database how much Gulf Construction
                      Company Jobs vacancies we have listed in our database and
                      apply for your perfect job. Apply for Civil Engineering
                      Jobs in Gulf. Above all, the biggest strength of Angel
                      Gulf Jobs lies in its database of candidates which is
                      spread across different work categories making it possible
                      to serve almost all the important industries across entire
                      Gulf & other regions.
                    </p>
                  </div>
                  {/* Carousel in col-lg-3 */}
                  <div className="col-lg-6 col-md-12">
                    <div className="carousel-wrapper p-3">
                      <div className="carouselbackground">
                        <h5 className="text-center fw-semibold text-white py-2 px-1">
                          Here is a listing of the job functions in the
                          construction industry we source candidate for
                        </h5>
                      </div>

                      {/* <div
                        id="carouselExampleCaptions"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        data-bs-interval="1000"
                      >
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          />
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                          />
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                          />
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={3}
                            aria-label="Slide 4"
                          />
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={4}
                            aria-label="Slide 5"
                          />
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={5}
                            aria-label="Slide 6"
                          />
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={6}
                            aria-label="Slide 7"
                          />
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={7}
                            aria-label="Slide 8"
                          />
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={8}
                            aria-label="Slide 9"
                          />
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              src="https://www.angelgulfjobs.com/images/Construction_Supervisors.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark text-white py-2 mb-3">
                              <h5 className="text-white mb-0">
                                First slide label
                              </h5>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://www.angelgulfjobs.com/images/Marble_Cutter_&_Grinder.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark py-2 mb-3 text-white">
                              <h5 className="text-white mb-0">
                                Second slide label
                              </h5>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://www.angelgulfjobs.com/images/Wall_Painter_Designer.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark py-2 mb-3 text-white">
                              <h5 className="text-white mb-0">
                                Third slide label
                              </h5>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://www.angelgulfjobs.com/images/Construction_Supervisors.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark text-white py-2 mb-3">
                              <h5 className="text-white mb-0">
                                Fourth slide label
                              </h5>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://www.angelgulfjobs.com/images/Marble_Cutter_&_Grinder.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark py-2 mb-3 text-white">
                              <h5 className="text-white mb-0">
                                Fifth slide label
                              </h5>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://www.angelgulfjobs.com/images/Wall_Painter_Designer.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark py-2 mb-3 text-white">
                              <h5 className="text-white mb-0">
                                Sixth slide label
                              </h5>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://www.angelgulfjobs.com/images/Construction_Supervisors.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark text-white py-2 mb-3">
                              <h5 className="text-white mb-0">
                                Seventh slide label
                              </h5>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://www.angelgulfjobs.com/images/Marble_Cutter_&_Grinder.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark py-2 mb-3 text-white">
                              <h5 className="text-white mb-0">
                                Eighth slide label
                              </h5>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://www.angelgulfjobs.com/images/Wall_Painter_Designer.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark py-2 mb-3 text-white">
                              <h5 className="text-white mb-0">
                                Ninth slide label
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div> */}

                      {/* Componnet */}

                      <CarouselItems images={images} titles={titles} altTexts={altTexts} />
                      {/*  */}
                    </div>
                  </div>
                  {/* Empty col-lg-9 */}
                  <div className="col-lg-6 col-md-12">
                    {/* This section is empty for now */}
                    <h4 className="mt-3 mt-md-0">Construction Industry</h4>
                    <p>
                      Construction industry is a very huge industry throughout
                      the Gulf region. There is tremendous demand from
                      industrial, commercial and the residential sector. Oil &
                      gas, power plants, heavy engineering, automotive,
                      hospitality industry & so on are being setup throughout
                      the Gulf. Already established industries are expanding and
                      modernizing them creating huge job opportunities in
                      construction & civil. Due to large scale industrialization
                      huge demand is also coming up from commercial &
                      residential sectors. A number of real estate companies
                      have come up creating widespread residential complexes,
                      malls, hotels, medical facilities and more. The Gulf
                      Cooperation Council (GCC) construction market will hit a
                      record of USD 144 billion in 2016, driven by mega-projects
                      like World Expo 2020 in Dubai and FIFA World Cup 2022 in
                      Qatar (Source Press Trust of India | Dubai April 8, 2015)
                      generating huge number of construction jobs, civil jobs in
                      the Gulf region.
                    </p>
                  </div>
                  <p>
                    There is huge demand for talented construction workforce
                    across all job functions including general construction,
                    supervisors, civil engineers, construction manager,
                    scaffolders, construction electricians and more. At certain
                    construction jobs, civil jobs experienced workforce is
                    required and at certain levels fresh candidates can be
                    placed. We at Angel Gulf Jobs are fully equipped to provide
                    the best of talented construction work force to the clients
                    even at shorter notice. We primarily source candidates
                    through our own comprehensive job portal equipped with a
                    large size updated database of candidates. We also make the
                    best use of our external contacts to source the required
                    candidates. In short, we, at Angel Gulf Jobs act as
                    trustworthy referral agent and enable the clients throughout
                    the Gulf region to have an access to the best talented
                    construction work force.
                  </p>
                  <p>
                    Construction companies in Gulf may send in their enquiry for
                    our recruitment services{" "}
                    <NavLink to="/contact-us" className="textlinkstyle">Click here </NavLink>
                  </p>
                  <p>
                    As far as job seekers are concerned we take utmost care that
                    we only keep latest construction jobs, civil jobs in our
                    database and help them with the most rewarding career in the
                    construction industry. Job seekers may register with us for
                    FREE Click here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionIndustry;
>>>>>>> 576083a43a265cea2d0cde471ab1fc556cb1d182
