import React from "react";

const SaveAppl = ({ imageSrc, heading, paragraph, para, post }) => {
  return (
    <div className="image-content-container6">
      <div className="image-container6">
        <img src={imageSrc} alt="Image" style={{ height: "40px" }} />
      </div>
      <div className="content-container6">
        <h2>{heading}</h2>
        <p>Location:{paragraph}</p>
        <p>Skills:{para}</p>
        <p className="para">Posted:{post}</p>
      </div>
    </div>
  );
};

export default SaveAppl;
