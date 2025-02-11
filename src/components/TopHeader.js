<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const TopHeader = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Handle scroll event
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true); // Hide top bar after scrolling down more than 50px
//       } else if (window.scrollY < 30) {
//         setIsScrolled(false); // Show top bar again when within 30px of the top
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

  return (
    <div>
  <div className="topbar d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
      </div>
      <div className="social-links d-none d-md-flex align-items-center">
        <a href="#" className="twitter"><i className="bi bi-twitter-x" /></a>
        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
      </div>
    </div>
  </div>
</div>

  );
};

export default TopHeader;
=======
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const TopHeader = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Handle scroll event
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true); // Hide top bar after scrolling down more than 50px
//       } else if (window.scrollY < 30) {
//         setIsScrolled(false); // Show top bar again when within 30px of the top
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

  return (
    <div>
  <div className="topbar d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
      </div>
      <div className="social-links d-none d-md-flex align-items-center">
        <a href="#" className="twitter"><i className="bi bi-twitter-x" /></a>
        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
      </div>
    </div>
  </div>
</div>

  );
};

export default TopHeader;
>>>>>>> 576083a43a265cea2d0cde471ab1fc556cb1d182
