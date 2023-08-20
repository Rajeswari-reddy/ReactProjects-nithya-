import React from "react";

import logo4 from "./images/meet.png";
import "../../CSS/totalCss/advertise.css";
const Advertise = () => {
  return (
    <div className="advertised">
      <div className="image-content-container2">
        <div className="image-container2">
          <img src={logo4} alt="Image" />
        </div>
        <div className="content-container2">
          <h2>What it feels like to have 48% more interview calls?</h2>
          <p>To get 5x more recruiter views on your profile</p>
          <button className="btn">Ask Here</button>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
