import React from "react";
import "../CSS/totalOnecss/Advert.css";
import ImageWithInfo from "../TotalOne/ImageWithInfo";
const Advert = () => {
  return (
    <div className="asideForm">
      <div className="adv-one">
        <button className="adv-btn">Elevate Your Work</button>
      </div>
      <div className="adv-two">
        <h1 className="adv-head1">LEARN.GROW.SUCCEED</h1>
        <h1 className="adv-head2">Bring Your Ideas.</h1>
        <h1 className="adv-head3">Discover Your Potential.</h1>
      </div>
      <div className="adv-three">
        <ImageWithInfo />
      </div>
    </div>
  );
};

export default Advert;
