import React from "react";
import MyAppl from "./MyAppl.js";
import logo from "./images/java.png";
import logo1 from "./images/ui.png";
import logo2 from "./images/angular.png";
import NoJob from "./NoJob.js";
import "../../CSS/totalCss/myApplParent.css";
import "../../CSS/totalCss/gp.css";
import Text from "./Text.js";
const MyApplParent = () => {
  return (
    <div className="block">
      <div className="parentBlock">
        <div className="block1">
          <MyAppl
            imageSrc={logo}
            heading="Sr.Java Developer"
            paragraph="Mumbai"
            para="Html,css,JS,React"
            post="3 days ago"
          />
          <MyAppl
            imageSrc={logo2}
            heading="Angular Developer "
            paragraph="Hyderabad"
            para="Html,css,Java,Nodejs"
            post="3 days ago"
          />
          <MyAppl
            imageSrc={logo1}
            heading="Jr. UI Developer"
            paragraph="Hyderabad"
            para="Html,css,Javascript"
            post="3 days ago"
          />
        </div>
        <div className="block2">
          <NoJob />
        </div>
      </div>
    </div>
  );
};

export default MyApplParent;
