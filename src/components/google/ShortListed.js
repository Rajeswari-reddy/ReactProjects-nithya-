import React from "react";
import JobHits from "./JobHits";
import "../CSS/totalCss/aside.css";
const ShortListed = () => {
  return (
    <div className="shortList">
      <JobHits Number={32} heading="Job Hits" />
      <JobHits Number={18} heading="Short Listed" />
    </div>
  );
};

export default ShortListed;
