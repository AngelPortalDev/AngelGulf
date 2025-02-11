// NotFound.js
import React from "react";
import notFoundImg from '../assets/images/error-404.png';

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
        <img src={notFoundImg} alt="Not Found" style={{ width: "300px" }} />
      <br />
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
    </div>
  );
};

export default NotFound;
