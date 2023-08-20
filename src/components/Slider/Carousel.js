import React from "react";
import Card from "./Card";
import task from "../images/task1.png";
import "./carousel.css";
import ReadMore from "./ReadMore";

const Carousel = () => {
  const getBox = () => {
    return document.querySelector(".carouselContainer");
  };

  const prev = () => {
    const box = getBox();
    const width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  const next = () => {
    const box = getBox();
    const width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };
  return (
    <div className="carousel">
      <div className="prev" onClick={prev}>
        <i
          className="fa fa-angle-double-left"
          style={{ fontSize: "50px", color: "royalBlue" }}
        ></i>
      </div>
      <div className="carouselContainer">
        <div className="carouselItem">
          <div className="list">
            <Card
              imgSrc={task}
              title="Resume Highlighter"
              para="Grab the attention of the employers"
            />
          </div>
        </div>
        <div className="carouselItem">
          <div className="list">
            <Card
              imgSrc={task}
              title="CarrerUp Skills"
              para="Speed up your job search with carrer skills"
            />
          </div>
        </div>
        <div className="carouselItem">
          <div className="list">
            <Card
              imgSrc={task}
              title="Create CV"
              para="Professionally Written CV by us"
            />
          </div>
        </div>
        <div className="carouselItem">
          <div className="list">
            <Card
              imgSrc={task}
              title="Coursera"
              para="Better get the chances of being shortlisted"
            />
          </div>
        </div>
        <div className="carouselItem">
          <div className="list">
            <Card
              imgSrc={task}
              title="Learning Point"
              para="Here you will experience great courses"
            />
          </div>
        </div>
        <div className="carouselItem">
          <div className="list">
            <Card
              imgSrc={task}
              title="Job Guidance"
              para="We offer wide range of job opportunities."
            />
          </div>
        </div>
      </div>
      <div className="next" onClick={next}>
        <i
          className="fa fa-angle-double-right"
          style={{ fontSize: "50px", color: "royalBlue" }}
        ></i>
      </div>
    </div>
  );
};

export default Carousel;
