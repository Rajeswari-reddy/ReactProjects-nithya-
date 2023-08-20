import React from "react";
import "../CSS/totalCss/aside.css";

const JobHits = ({ Number, heading }) => {
  return (
    <div className="content-container4">
      <h4>{Number}</h4>
      <p>{heading}</p>
    </div>
  );
};

export default JobHits;
