import React from "react";
import Saved from "./Saved";
import Recent from "./Recent";
import "../CSS/totalOnecss/saveResearch.css";
const SaveResearch = () => {
  return (
    <div className="saveRecent">
      <div className="half">
        <div className="save">
          <Saved />
        </div>
        <div className="recent">
          <Recent />
        </div>
      </div>
    </div>
  );
};

export default SaveResearch;
