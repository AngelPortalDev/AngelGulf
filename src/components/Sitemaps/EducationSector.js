<<<<<<< HEAD
import React from "react";
import { NavLink } from "react-router-dom";
import educationImg from "../../assets/images/sitemap/Education-&-Training-Sector.jpg";
import teachingStaffImg from "../../assets/images/sitemap/education/education-&-training-sector-teaching-staff.jpg";
import projectManagerImg from "../../assets/images/sitemap/education/education-&-training-sector-project-manager.jpg";
import trainingAnalystImg from "../../assets/images/sitemap/education/education-&-training-sector-training-analyst.jpg";
import taskAnalystImg from "../../assets/images/sitemap/education/education-&-training-sector-task-analyst.jpg";
import curriculumDesignerImg from "../../assets/images/sitemap/education/education-&-training-sector-curriculum-designer.jpg";
import contentDeveloperImg from "../../assets/images/sitemap/education/education-&-training-sector-content-developer.jpg";
import assessmentStrategyImg from "../../assets/images/sitemap/education/education-&-training-sector-assessment-strategy.jpg";
import changeMngtStaffImg from "../../assets/images/sitemap/education/education-&-training-sector-change-mngt-staff.jpg";
import collegeFacultyImg from "../../assets/images/sitemap/education/education-&-training-sector-college-faculty.jpg";
import collegeDeanImg from "../../assets/images/sitemap/education/education-&-training-sector-college-dean.jpg";
import eleSchoolTeacherImg from "../../assets/images/sitemap/education/education-&-training-sector-ele-school-teacher.jpg";
import highSchoolTeacherImg from "../../assets/images/sitemap/education/education-&-training-sector-high-school-teacher.jpg";
import juniorSchoolTeacherImg from "../../assets/images/sitemap/education/education-&-training-sector-junior-school-teacher.jpg";
import middleSchoolTeacherImg from "../../assets/images/sitemap/education/education-&-training-sector-middle-school-teacher.jpg";
import professorImg from "../../assets/images/sitemap/education/education-&-training-sector-professor.jpg";
import schoolAdministratorImg from "../../assets/images/sitemap/education/education-&-training-sector-school-administrator.jpg";
import studentServicesImg from "../../assets/images/sitemap/education/education-&-training-sector-student-services.jpg";
import substituteTeacherImg from "../../assets/images/sitemap/education/education-&-training-sector-substitute-teacher.jpg";
import CarouselItems from "../common/CarouselItems";
import { Helmet } from "react-helmet";

const GarmentIndustry = () => {
    const images = [
        teachingStaffImg, projectManagerImg, trainingAnalystImg, taskAnalystImg, curriculumDesignerImg, 
        contentDeveloperImg, assessmentStrategyImg, changeMngtStaffImg, collegeFacultyImg, collegeDeanImg, 
        eleSchoolTeacherImg, highSchoolTeacherImg, juniorSchoolTeacherImg, middleSchoolTeacherImg, 
        professorImg, schoolAdministratorImg, studentServicesImg, substituteTeacherImg
    ];

    const titles = [
        "Teaching Staff", "Project Manager", "Training Analyst", "Task Analyst", "Curriculum Designer", 
        "Content Developer", "Assessment Strategy", "Change Mngt staff", "College Faculty", "College Dean", 
        "Ele School Teacher", "High School Teacher", "Junior School Teacher", "Middle School Teacher", 
        "Professor", "School Administrator", "Student Services", "Substitute Teacher"
    ];

    const altTexts = [
        "Teacher Jobs in Gulf Countries", "Teacher Jobs in Gulf", "Training Analyst Jobs In Gulf", 
        "Task Analyst Jobs In Gulf", "Curriculum Designer Jobs In Gulf", "Content Developer Jobs In Gulf", 
        "Assessment Strategy Jobs In Gulf", "Change Mngt Staff Jobs In Gulf", "College Faculty Jobs In Gulf", 
        "College Dean Jobs In Gulf", "Ele School Teacher Jobs In Gulf", "High School Teacher Jobs In Gulf", 
        "Junior School Teacher Jobs In Gulf", "Middle School Teacher Jobs In Gulf", "Professor Jobs In Gulf", 
        "School Administrator Jobs In Gulf", "Student Services Jobs In Gulf", "Substitute Teacher Jobs In Gulf"
    ];


  return (
    <div>
      <Helmet>
      <title>Teacher Jobs in Gulf Countries, Teacher Jobs in Gulf  | Angel Gulf Jobs</title>
<meta name="keywords" content="Teacher Jobs in Gulf Countries, Teacher Jobs in Gulf, online teaching jobs in gulf countries, education industry, training jobs, jobs in Dubai, jobs in Abu Dhabi, jobs in Oman, jobs in Gulf"/>
<meta name="description" content="Are you education trainer and looking for teacher jobs in gulf  countries. You are in the right place! Apply for latest teacher jobs in gulf and other abroad countries."/>
<link rel="canonical" href="https://www.angelgulfjobs.com/education-training-sector"/>
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${educationImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">
                  Teacher Jobs in Gulf Countries


                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Teacher Jobs in Gulf Countries


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
                    <h4>Industries We Serve

                    </h4>
                    <p>
                    Angel Gulf Jobs is a full-service overseas manpower agency promoted by highly experienced professionals having worked across different sectors in the Gulf region. Are you education trainer and looking for teacher jobs in gulf countries. You are in the right place! Apply for latest teacher jobs in gulf and other abroad countries. The exposure derived by promoters in their work life across different sectors has helped them to provide services across a wide range of industries. As far as Gulf region is concerned, Angel Gulf Jobs serves all the top sectors including construction, oil & gas, hospitality, banking, shipping and more. Above all, the biggest strength of Angel Gulf Jobs lies in its database of candidates which is spread across different work categories making it possible to serve almost all the important industries across entire Gulf & other regions.




                    </p>
                   
                  </div>
                  {/* Carousel in col-lg-3 */}
                  <div className="col-lg-6 col-md-12">
                    <div className="carousel-wrapper p-3">
                      <div className="carouselbackground">
                        <h5 className="text-center fw-semibold text-white py-2 px-1">
                        Here is a listing of major job categories in the
Education & Training industry that we recruit for:
                        </h5>
                      </div>

                      <CarouselItems
                        images={images}
                        titles={titles}
                        altTexts={altTexts}
                      />
                      {/*  */}
                    </div>
                  </div>
                  {/* Empty col-lg-9 */}
                  <div className="col-lg-6 col-md-12">
                    {/* This section is empty for now */}
                    <h4 className="mt-3 mt-md-0">
                    Education & Training Sector

                    </h4>
                    <p>
                    GCC economies are growing at a rapid pace resulting into huge migration of people from all over the world. This has created enormous demand for education & training across different sectors. Education and training are the two very basic pillars responsible for the growth of an individual. Knowledge once acquired creates the very foundation however a person who doesn’t try to upgrade the knowledge would one day find him or her as an obsolete commodity. The need to constantly upgrade the skills has also created into huge demand for the training industry across different categories including technical, information technology, management skills, soft skills, language learning and more.


</p>

                    <p>
                    The growth of oil & gas, power sector, civil industry, telecom, shipping and more has attracted families from all over the world to the GCC economies. This has created huge demand for educational institutions right from play schools to degree colleges, engineering, management, medical, nursing and more resulting into large number of education training jobs through the Gulf region.


                    </p>
                  </div>
                
                  <p className="mt-2">
                  The GCC countries and MNCs are investing heavily into the fast growing education industry to meet the demands. The industry is also turning into a good parallel business option for private institutions offering international accredited qualifications and management programs. Many international schools, management colleges, engineering, medical and more have been setup across in the GCC states.



                  </p>
               
                  <p>
                  Due to the growing demand the education and training sector is creating huge continuous requirement for trained teaching and training staff at all the levels across different education training industry job functions. We at Angel Gulf Jobs are fully geared to provide the best of qualified, well-trained and talented teaching & training work force to the educational institutions and training establishments even at shorter notice. We primarily source candidates through our own comprehensive job portal equipped with a large size updated database of candidates. We also make the best use of our external contacts to source the required candidates. In short, we, at Angel Gulf Jobs act as trustworthy referral agent and enable the clients throughout the Gulf region to have an access to the best talented education & training work force.





                  </p>
                  <p>
                  Education Training establishments in Gulf may send in their enquiry for our recruitment services  <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>

                

                  <p>
                  As far as job seekers are concerned we take utmost care that we only keep latest education jobs, training jobs in our database and help them with the most rewarding career in the education training industry. Job seekers may register with us for FREE
                    <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
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

export default GarmentIndustry;
=======
import React from "react";
import { NavLink } from "react-router-dom";
import educationImg from "../../assets/images/sitemap/Education-&-Training-Sector.jpg";
import teachingStaffImg from "../../assets/images/sitemap/education/education-&-training-sector-teaching-staff.jpg";
import projectManagerImg from "../../assets/images/sitemap/education/education-&-training-sector-project-manager.jpg";
import trainingAnalystImg from "../../assets/images/sitemap/education/education-&-training-sector-training-analyst.jpg";
import taskAnalystImg from "../../assets/images/sitemap/education/education-&-training-sector-task-analyst.jpg";
import curriculumDesignerImg from "../../assets/images/sitemap/education/education-&-training-sector-curriculum-designer.jpg";
import contentDeveloperImg from "../../assets/images/sitemap/education/education-&-training-sector-content-developer.jpg";
import assessmentStrategyImg from "../../assets/images/sitemap/education/education-&-training-sector-assessment-strategy.jpg";
import changeMngtStaffImg from "../../assets/images/sitemap/education/education-&-training-sector-change-mngt-staff.jpg";
import collegeFacultyImg from "../../assets/images/sitemap/education/education-&-training-sector-college-faculty.jpg";
import collegeDeanImg from "../../assets/images/sitemap/education/education-&-training-sector-college-dean.jpg";
import eleSchoolTeacherImg from "../../assets/images/sitemap/education/education-&-training-sector-ele-school-teacher.jpg";
import highSchoolTeacherImg from "../../assets/images/sitemap/education/education-&-training-sector-high-school-teacher.jpg";
import juniorSchoolTeacherImg from "../../assets/images/sitemap/education/education-&-training-sector-junior-school-teacher.jpg";
import middleSchoolTeacherImg from "../../assets/images/sitemap/education/education-&-training-sector-middle-school-teacher.jpg";
import professorImg from "../../assets/images/sitemap/education/education-&-training-sector-professor.jpg";
import schoolAdministratorImg from "../../assets/images/sitemap/education/education-&-training-sector-school-administrator.jpg";
import studentServicesImg from "../../assets/images/sitemap/education/education-&-training-sector-student-services.jpg";
import substituteTeacherImg from "../../assets/images/sitemap/education/education-&-training-sector-substitute-teacher.jpg";
import CarouselItems from "../common/CarouselItems";
import { Helmet } from "react-helmet";

const GarmentIndustry = () => {
    const images = [
        teachingStaffImg, projectManagerImg, trainingAnalystImg, taskAnalystImg, curriculumDesignerImg, 
        contentDeveloperImg, assessmentStrategyImg, changeMngtStaffImg, collegeFacultyImg, collegeDeanImg, 
        eleSchoolTeacherImg, highSchoolTeacherImg, juniorSchoolTeacherImg, middleSchoolTeacherImg, 
        professorImg, schoolAdministratorImg, studentServicesImg, substituteTeacherImg
    ];

    const titles = [
        "Teaching Staff", "Project Manager", "Training Analyst", "Task Analyst", "Curriculum Designer", 
        "Content Developer", "Assessment Strategy", "Change Mngt staff", "College Faculty", "College Dean", 
        "Ele School Teacher", "High School Teacher", "Junior School Teacher", "Middle School Teacher", 
        "Professor", "School Administrator", "Student Services", "Substitute Teacher"
    ];

    const altTexts = [
        "Teacher Jobs in Gulf Countries", "Teacher Jobs in Gulf", "Training Analyst Jobs In Gulf", 
        "Task Analyst Jobs In Gulf", "Curriculum Designer Jobs In Gulf", "Content Developer Jobs In Gulf", 
        "Assessment Strategy Jobs In Gulf", "Change Mngt Staff Jobs In Gulf", "College Faculty Jobs In Gulf", 
        "College Dean Jobs In Gulf", "Ele School Teacher Jobs In Gulf", "High School Teacher Jobs In Gulf", 
        "Junior School Teacher Jobs In Gulf", "Middle School Teacher Jobs In Gulf", "Professor Jobs In Gulf", 
        "School Administrator Jobs In Gulf", "Student Services Jobs In Gulf", "Substitute Teacher Jobs In Gulf"
    ];


  return (
    <div>
      <Helmet>
      <title>Teacher Jobs in Gulf Countries, Teacher Jobs in Gulf  | Angel Gulf Jobs</title>
<meta name="keywords" content="Teacher Jobs in Gulf Countries, Teacher Jobs in Gulf, online teaching jobs in gulf countries, education industry, training jobs, jobs in Dubai, jobs in Abu Dhabi, jobs in Oman, jobs in Gulf"/>
<meta name="description" content="Are you education trainer and looking for teacher jobs in gulf  countries. You are in the right place! Apply for latest teacher jobs in gulf and other abroad countries."/>
<link rel="canonical" href="https://www.angelgulfjobs.com/education-training-sector"/>
<meta name="revisit-after" content="7 days"/>
<meta name="robots" content="index, follow"/>
      </Helmet>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: `url(${educationImg})` }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name background-heading p-3">
                  <h2 className="wt-title darkblueTxt">
                  Teacher Jobs in Gulf Countries


                  </h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2 invisible">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Teacher Jobs in Gulf Countries


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
                    <h4>Industries We Serve

                    </h4>
                    <p>
                    Angel Gulf Jobs is a full-service overseas manpower agency promoted by highly experienced professionals having worked across different sectors in the Gulf region. Are you education trainer and looking for teacher jobs in gulf countries. You are in the right place! Apply for latest teacher jobs in gulf and other abroad countries. The exposure derived by promoters in their work life across different sectors has helped them to provide services across a wide range of industries. As far as Gulf region is concerned, Angel Gulf Jobs serves all the top sectors including construction, oil & gas, hospitality, banking, shipping and more. Above all, the biggest strength of Angel Gulf Jobs lies in its database of candidates which is spread across different work categories making it possible to serve almost all the important industries across entire Gulf & other regions.




                    </p>
                   
                  </div>
                  {/* Carousel in col-lg-3 */}
                  <div className="col-lg-6 col-md-12">
                    <div className="carousel-wrapper p-3">
                      <div className="carouselbackground">
                        <h5 className="text-center fw-semibold text-white py-2 px-1">
                        Here is a listing of major job categories in the
Education & Training industry that we recruit for:
                        </h5>
                      </div>

                      <CarouselItems
                        images={images}
                        titles={titles}
                        altTexts={altTexts}
                      />
                      {/*  */}
                    </div>
                  </div>
                  {/* Empty col-lg-9 */}
                  <div className="col-lg-6 col-md-12">
                    {/* This section is empty for now */}
                    <h4 className="mt-3 mt-md-0">
                    Education & Training Sector

                    </h4>
                    <p>
                    GCC economies are growing at a rapid pace resulting into huge migration of people from all over the world. This has created enormous demand for education & training across different sectors. Education and training are the two very basic pillars responsible for the growth of an individual. Knowledge once acquired creates the very foundation however a person who doesn’t try to upgrade the knowledge would one day find him or her as an obsolete commodity. The need to constantly upgrade the skills has also created into huge demand for the training industry across different categories including technical, information technology, management skills, soft skills, language learning and more.


</p>

                    <p>
                    The growth of oil & gas, power sector, civil industry, telecom, shipping and more has attracted families from all over the world to the GCC economies. This has created huge demand for educational institutions right from play schools to degree colleges, engineering, management, medical, nursing and more resulting into large number of education training jobs through the Gulf region.


                    </p>
                  </div>
                
                  <p className="mt-2">
                  The GCC countries and MNCs are investing heavily into the fast growing education industry to meet the demands. The industry is also turning into a good parallel business option for private institutions offering international accredited qualifications and management programs. Many international schools, management colleges, engineering, medical and more have been setup across in the GCC states.



                  </p>
               
                  <p>
                  Due to the growing demand the education and training sector is creating huge continuous requirement for trained teaching and training staff at all the levels across different education training industry job functions. We at Angel Gulf Jobs are fully geared to provide the best of qualified, well-trained and talented teaching & training work force to the educational institutions and training establishments even at shorter notice. We primarily source candidates through our own comprehensive job portal equipped with a large size updated database of candidates. We also make the best use of our external contacts to source the required candidates. In short, we, at Angel Gulf Jobs act as trustworthy referral agent and enable the clients throughout the Gulf region to have an access to the best talented education & training work force.





                  </p>
                  <p>
                  Education Training establishments in Gulf may send in their enquiry for our recruitment services  <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
                  </p>

                

                  <p>
                  As far as job seekers are concerned we take utmost care that we only keep latest education jobs, training jobs in our database and help them with the most rewarding career in the education training industry. Job seekers may register with us for FREE
                    <NavLink to="/contact-us" className="textlinkstyle">
                      &nbsp; Click here{" "}
                    </NavLink>
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

export default GarmentIndustry;
>>>>>>> 576083a43a265cea2d0cde471ab1fc556cb1d182
