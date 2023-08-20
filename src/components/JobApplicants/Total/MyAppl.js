import React from "react";
import "../../CSS/totalCss/myAppl.css";
import "../../CSS/totalCss/gp.css";
const MyAppl = ({ imageSrc, heading, paragraph, para, post }) => {
  return (
    <div className="image-content-container">
      <div className="image-container">
        <img src={imageSrc} alt="Image" style={{ height: "40px" }} />
      </div>
      <div className="content-container">
        <h2>{heading}</h2>
        <p>Location:{paragraph}</p>
        <p>Skills:{para}</p>
        <p className="para">Posted:{post}</p>
      </div>
    </div>
  );
};

export default MyAppl;
