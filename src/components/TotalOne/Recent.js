import React from "react";
import MyAppl from "../JobApplicants/Total/MyAppl.js";
import logo from "../images/java.png";
import logo1 from "../images/ui.png";
import logo2 from "../images/angular.png";
import SaveAppl from "./SaveAppl.js";

const Recent = () => {
  return (
    <div>
      <div className="blocked">
        <SaveAppl
          imageSrc={logo}
          heading="Sr.Java Developer"
          paragraph="Mumbai"
          para="Html,css,Javascript,React"
          post="3 days ago"
        />
        <SaveAppl
          imageSrc={logo2}
          heading="Angular Developer "
          paragraph="Hyderabad"
          para="Html,css,Javascript,Angular"
          post="3 days ago"
        />
        <SaveAppl
          imageSrc={logo1}
          heading="Jr. UI Developer"
          paragraph="Hyderabad"
          para="Html,css,Javascript,Angular"
          post="3 days ago"
        />
      </div>
    </div>
  );
};

export default Recent;
