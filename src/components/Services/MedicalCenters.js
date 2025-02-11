/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MedicalCenterAddress from "../common/MedicalCenterAddress.js";
// import medicalAddImg from '../../assets/images/backgroundImages/gamce-medical-centers.jpg';
import medicalAddImg from '../../assets/images/NewImages/medicalCenter.avif';


import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const MedicalCenters = () => {
  return (
    <div>

  <Helmet>
    <title>GAMCA Approved Medical Centre, Gulf Approved Medical Services Center </title>
    <meta name="keywords" content="GAMCA Approved Medical Centre, Gulf Approved Medical Services Center, Gamca Mumbai, medical centers, list of medical centers, medical center list" />
    <meta name="description" content="Find GAMCA Approved Medical Centre complete list on our website. People willing to work in GCC companies need to pass Gulf Approved Medical Services Center test." />
    <link rel="canonical" href="https://www.angelgulfjobs.com/gamca-medical-centre"/>
    <meta name="revisit-after" content="7 days"/>
    <meta name="robots" content="index, follow"/>
  </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${medicalAddImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">GAMCA Approved Medical Centre</h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <NavLink to='/'>Home</NavLink>
                  </li>
                  <li>GAMCA Approved Medical Centre</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}
        {/* Employer Detail START */}
        <div className="section-full  p-t30 p-b50 bg-white">
          <div className="container">
            <div className="section-content">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-10 col-md-12">
                  {/* Candidate detail START */}
                  <div className="cabdidate-de-info">
                    {/* <h4 className="twm-s-title">About Company</h4> */}
                    <p>
                      GAMCA stands for “GCC Approved Medical Centers
                      Association”. People willing to work in GCC countries need
                      to pass GAMCA medical test. There is a network of medical
                      centers across different countries approved by GAMCA for
                      conducting medical tests. These medical centers conduct
                      tests as per the prescribed process laid down by GAMCA.
                      The test includes (Physical test, mental test, eye test,
                      dental test, x-ray test, urine test, blood test and so
                      on). Find GAMCA Approved Medical Centre complete list on
                      our website. People willing to work in GCC companies need
                      to pass Gulf Approved Medical Services Center test. Once
                      you are declared unfit in GAMCA medical test then there is
                      no other way to get cleared. GCC Medical test is also
                      known as GAMCA medical test, both the tests are one & the
                      same. For GCC medical exam, you have to do the same
                      procedure as GAMCA medical exam. In India as well, many
                      GAMCA centers are available across different cities, here
                      is a listing of GAMCA medical centers across different
                      cities in India.
                    </p>
                    <div className="bg-light">
                      {/* <div className="container p-4 d-none">
                      Medical Center List In India:
                        <div className="row">
                          <div className="col-lg-3 col-md-6">
                            <div className="form-group mb-3">
                              <select
                                class="form-select form-control"
                                aria-label="Default select example"
                              >
                                <option selected>Select Country</option>
                                <option value="1">India</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="form-group mb-3">
                              <select
                                class="form-select form-control"
                                aria-label="Default select example"
                              >
                                <option selected>Select State</option>
                                <option value="1">Maharashtra</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="form-group mb-3">
                              <select
                                class="form-select form-control"
                                aria-label="Default select example"
                              >
                                <option selected>Select City</option>
                                <option value="1">Mumbai</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button className="btn btn-primary">Go</button>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div>
                      <h2 className="text-center mt-4 blueuText">
                        GAMCA Approved Medical Examination Centres in Mumbai
                      </h2>
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <MedicalCenterAddress
                            medicalName="FULARA MEDICHECK CENTRE"
                            doctorName="DR. NASIR Y. FULARA"
                            address="501 / 502, Doctor House,Opposite Jaslok Hospital, Peddar Road, Mumbai 400 026."
                            telephoneNo="23514123 / 23526293"
                            faxno="022 23874341"
                            emailid="fmcbom@hotmail.com"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <MedicalCenterAddress
                            medicalName="ZAFF JAY MEDICAL SER. (I) PVT. LTD"
                            doctorName="DR. JAYANT GUMASTE"
                            address="Orient Shopping Plaza, Room No. 7 & 8, 2nd Floor, M. S. Ali Road, Near Shalimar Theatre, Grant Road, Mumbai 400 007."
                            telephoneNo="23896100"
                            faxno="23892900"
                            emailid="jafjay@bom5.vsnl.net.in"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <MedicalCenterAddress
                            medicalName="A TO Z DIAGNOSTICS CENTRE"
                            doctorName="DR. M.A.PATANKAR"
                            address="90, C. R. B. Mansion Road, 1st Floor, Opp. Our Lady Of Dolours Church, Near Marine Lines, Mumbai 400 002."
                            telephoneNo="23514123 / 23526293"
                            faxno="22006524 / 22088263"
                            emailid="contact@patankaratoz.com,drmapatankar_mumbai@hotmail.com"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <MedicalCenterAddress
                            medicalName="KAIFAK MEDICARE"
                            doctorName="DR. M. K. E. MEMON"
                            address="214-A, Maker Chamber V, Jamna Bajaj Marg, Veer Nariman Point, Mumbai 400 021."
                            telephoneNo="22044385 / 2287355"
                            faxno="2288 1699"
                            emailid="khalil@bom3.vsnl.net.in"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <MedicalCenterAddress
                            medicalName="ALVA’S CLINIC"
                            doctorName="DR. M. S. ALVA"
                            address="543, 1st Floor, Umerbai Niwas, Opp Cement Godown, Bhakri – Adda, N. M. Joshi Marg, Byculla (West) Mumbai 400 011."
                            telephoneNo="22044385 / 2287355"
                            faxno="022 23874341"
                            phoneNo="23052473"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <MedicalCenterAddress
                            medicalName="MOHAMMADI HEALTHCARE SYSTEMS"
                            doctorName="DR. B.K.MISRA"
                            address="798, Moon Bldg, Mori Road, Mahim (West), Mumbai 400 016."
                            telephoneNo="24440888 / 24440786"
                            faxno="24448899"
                            emailid="drbkmisra@hotmail.com"
                          />
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <MedicalCenterAddress
                            medicalName="CHOUHAN CLINIC"
                            doctorName="DR. C. L. CHOUHAN"
                            address="101 / 105, L. R. T. Medical & Research Centre, 10th Floor, Opposite Cooperage Football Ground, Opp. P V M Gymkhana, Maharashi Karve Road, Mumbai 400 021."
                            telephoneNo="022 22823287 / 22845787"
                            faxno="022 2851344"
                            emailid="clchouhan@yahoo.com"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <MedicalCenterAddress
                            medicalName="AL-AMAL DIAGNOSTIC CENTER"
                            doctorName="DR. YOUSIF I. QABGEH"
                            address="77 / 1, RADHA MOHAN BLDG, ROAD NO. 7, NEAR KHAR SUBWAY (GOLIBAR), SANTACRUZ (EAST), MUMBAI 400 055."
                            telephoneNo="26114706 / 26133357"
                            faxno="6186331"
                            emailid="yqabageh@yahoo.co.in"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <MedicalCenterAddress
                            medicalName="GULSHAN MEDICARE"
                            doctorName="DR. B.K.MISRA"
                            address="39/43, Nishanpada Road, Noor Masjid Gali, Near Ajwa Sweets, Dongri, Mumbai 400 009"
                            telephoneNo="23514123 / 23526293"
                            faxno="022 23874341"
                            emailid="fmcbom@hotmail.com"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <MedicalCenterAddress
                            medicalName="MODERN DIAGNOSTICS"
                            doctorName="DR. ABDUL KARIM NAIK"
                            address="6, Merchant Bldg, Near Habib Hospital, Jail Road (East), Dongri, Mumbai 400 009."
                            telephoneNo="2373 1872/ 2371 8663.7"
                            faxno="022 2851344"
                            emailid="moderndiagnostics@vsnl.net"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <MedicalCenterAddress
                            medicalName="DR. QURESHI MEDICAL CHECK-UP CENTRE"
                            doctorName="DR. ISMAIL QURESHI"
                            address="91, Modi Street, Opp. G. P. O, Opp. Masjid,2nd Floor, Near V. T. Railway Station, Fort, Mumbai 400 001."
                            telephoneNo="22670755."
                            faxno="6186331"
                            emailid="Ismaeelqureshi@Rediffmail.Com"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <MedicalCenterAddress
                            medicalName="DR. H.S.BHATIA"
                            doctorName="DR. H.S.BHATIA"
                            address="5-a, Meghaji Bhavan, 1st Floor, Berrack Road, Above Cafe Cecil, Behind Metro Cinema, Mumbai 400 020."
                            telephoneNo="22004291 / 22009985.."
                            faxno="22007693."
                            emailid="hotchandbhatia@yahoo.co.in"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <MedicalCenterAddress
                            medicalName="DR. F.T.PADARIA"
                            doctorName="DR. F.T.PADARIA"
                            address="501 / 502, Doctor House,Opposite Jaslok Hospital, Peddar Road, Mumbai 400 026."
                            telephoneNo="23095458."
                            // faxno=""
                            emailid="spadaria@gmail.com"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <MedicalCenterAddress
                            medicalName="AL-SALAM DIAGNOSTICS"
                            doctorName="AL-SALAM DIAGNOSTICS"
                            address="9 / 15, Al-karim Manzil, Palton Road, Crawford Market, Mumbai 400 001."
                            telephoneNo="22679190 / 22670755."
                            faxno="22617386 / 22610505 / 22672939."
                            emailid="alsalaamdignostic@yahoo.com"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <MedicalCenterAddress
                            medicalName="DR. KEWAL JAIN"
                            doctorName="DR. NALINI KOTHARI"
                            address="487, Murad Mansion, 2nd Floor, Room No. 26, Near Marvadi Vidhyalaya School,Opera House, Mumbai – 400 004."
                            telephoneNo="022-23866782"
                            faxno="022 23874341"
                            emailid="drkewaljain@hotmail.com."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-light">
                      <div className="container p-3">
                        <p>
                          GAMCA (Gulf Approved Medical centers Association) is
                          an association created to provide medical examinations
                          to expatriates intending to join the Labor Market in
                          the GCC countries .This association has provided an
                          electronic platform through which the health results
                          are shared to all organizations of interest; all
                          electronically via their official website.
                        </p>
                        <p>
                          All short-listed candidates have to compulsorily
                          undergo a thorough medical. No chances are taken and
                          the physical suitability is never compromised. We
                          engage in arranging medical examination from GCC
                          Countries approved GAMCA medical centers and ask the
                          candidate to undertake the relevant tests to determine
                          appropriate physical health of every candidate.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Employer Detail END */}
      </div>
      {/* CONTENT END */}
    </div>
  );
};

export default MedicalCenters;
