import React from "react";
import "../CSS/ImageWithInfo.css";
import girl from "../images/read.jpg";
const ImageWithInfo = () => {
  return (
    <div className="image-container">
      <div className="background-image">
        <img src={girl} alt="Your Image" />
      </div>
      <div className=" image-button">
        <h1 style={{ color: "#000" }}>
          Diversity Drive @<span style={{ color: "#0000FF" }}>Cognizant</span>
        </h1>
        <button className="apply-btn">Apply Now</button>
      </div>
    </div>
  );
};

export default ImageWithInfo;
