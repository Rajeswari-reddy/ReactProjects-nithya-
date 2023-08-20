import React from "react";
import op from "../images/op.jpeg";
import "../CSS/totalOnecss/totalTwo.css";
const Corporatelife = () => {
  return (
    <div className="corporate">
      <div className="image-content-container5">
        <div className="content-container5">
          <h5 className="cl-h5">Corporate Life</h5>
          <div className="point">
            <i className="fa fa-angle-double-right"></i>
            <p>Give a make over to corporate profile</p>
          </div>
          <div className="point">
            <i className="fa fa-angle-double-right"></i>
            <p>Screen and video capture software enable users</p>
          </div>
          <div className="point">
            <i className="fa fa-angle-double-right"></i>
            <p>Choose High Corporate Profile to create user</p>
          </div>
        </div>
        <div className="image-container5">
          <img src={op} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default Corporatelife;
