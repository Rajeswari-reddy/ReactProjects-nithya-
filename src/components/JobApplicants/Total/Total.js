import React from "react";
import Text from "./Text";
import "../../CSS/totalCss/total.css";
import MyApplParent from "./MyApplParent.js";
import Advertise from "./Advertise";
import Aside from "./Aside";
const Total = () => {
  return (
    <div className="total">
      <div className="aside1">
        <Aside />
      </div>
      <div className="aside2">
        <Text />
        <MyApplParent />
        <Advertise />
      </div>
    </div>
  );
};

export default Total;
