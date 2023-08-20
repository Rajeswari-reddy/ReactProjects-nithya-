import React from "react";
import "./carousel.css";
import ReadMore from "./ReadMore";
const Card = ({ imgSrc, title, para }) => {
  return (
    <div>
      <div className="card" style={{ height: "400px" }}>
        <img
          className="card-img-top"
          src={imgSrc}
          alt="Card image cap"
          style={{
            height: "70px",
            width: "100px",
            marginLeft: "20px",
          }}
        />
        <div className="card-body" style={{ marginTop: "30px" }}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{para}</p>
        </div>
        <ReadMore />
      </div>
    </div>
  );
};

export default Card;
