import React from "react";
import "../CSS/totalCss/aside.css";
import logo5 from "../images/google.png";
const Google = () => {
  return (
    <div className="google-sec">
      <div className="image-content-container3">
        <div className="image-container3">
          <img src={logo5} alt="Image" />
        </div>
        <div className="content-container3">
          <h4>Rajeswari </h4>
          <p>Front End Developer- ReactJS</p>
          <p>Google Inc</p>
        </div>
      </div>
    </div>
  );
};

export default Google;
