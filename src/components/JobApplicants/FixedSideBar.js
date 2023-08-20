import React from "react";
import "./text.css";

const FixedSidebar = () => {
  return (
    <div className="fixed-sidebar">
      <button
        style={{
          width: "100px",
          height: "40px",
          backgroundColor: "#B1D4E0",
          color: "black",
          fontSize: "20px",
        }}
      >
        Snagit
      </button>
    </div>
  );
};

export default FixedSidebar;
