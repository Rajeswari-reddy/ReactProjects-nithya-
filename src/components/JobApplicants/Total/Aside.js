import React from "react";

import Google from "../../google/Google";

import ShortListed from "../../google/ShortListed";

import Profile from "../../google/Profile";
import "../../CSS/totalCss/aside.css";
const Aside = () => {
  return (
    <div className="aside">
      <div className="sec-1">
        <Google />
      </div>
      <div className="sec-2">
        <ShortListed />
      </div>

      <div className="sec-3">
        <Profile />
      </div>
    </div>
  );
};

export default Aside;
