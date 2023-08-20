import React from "react";
import MyAppl from "./MyAppl";
import logo3 from "./images/search.jpg";
import "../../CSS/totalCss/nojob.css";
import "../../CSS/totalCss/gp.css";
const NoJob = () => {
  return (
    <div className="image-content-container1">
      <div className="image-container1">
        <img src={logo3} alt="Image" style={{ height: "190px" }} />
      </div>
      <div className="content-container1">
        <p>This Job Posting Has No Applications</p>
      </div>
    </div>
  );
};

export default NoJob;
