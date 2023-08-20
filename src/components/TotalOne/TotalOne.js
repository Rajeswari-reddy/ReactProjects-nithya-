import React from "react";
import SaveResearch from "./SaveResearch";
import Advert from "./Advert";
import TotalTwo from "./TotalTwo";

import Carousel from "../Slider/Carousel";
import FixedSidebar from "../JobApplicants/FixedSideBar";
import "../CSS/totalOnecss/total1.css";
const TotalOne = () => {
  return (
    <div className="total1">
      <div className="aside3">
        <Advert />
      </div>
      <div className="aside4">
        <SaveResearch />
        <TotalTwo />
        <Carousel />
      </div>
    </div>
  );
};

export default TotalOne;
