import React from "react";
import "./Work.scss";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/left-arrow.png";
import videos from "../../videos/videos.json";

function Work() {
  console.log(videos);
  return (
    <div className="work">
      <Link to={"/"} className="back">
        <img src={Arrow} alt="left arrow" /> back
      </Link>
      <h2 className="work__title">WORK</h2>
      <p className="work__description">
        This is a showcase of my work. The world is constantly evolving and so
        am I. I'm still learning and gaining new skills everyday.
      </p>
      <div className="cards">
        <div className="card">
          <img src="" alt="" className="thumbnail" />
          <video src=""></video>
          <div className="card-info">
            <h4 className="card__title">Card Title</h4>
            <p className="card__year">Card Month/Year</p>
            <p className="card__description">Card Description</p>
          </div>
        </div>
      </div>
      <Link to={"/contact"}>
        <button>Contact Me</button>
      </Link>
    </div>
  );
}

export default Work;
