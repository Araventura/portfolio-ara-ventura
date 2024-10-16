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
        am I. I'm learning and gaining new skills everyday.
      </p>
      <div className="cards">
        {videos.map((project) => (
          <div key={project.id} className="card">
            <div className="card__video">
              <img src="" alt="" className="thumbnail" />
              <video src=""></video>
            </div>
            <div className="card-info">
              <h4 className="card__title">{project.title}</h4>
              <p className="card__year">{project.date}</p>
              <p className="card__description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to={"/contact"}>
        <button>Contact Me</button>
      </Link>
    </div>
  );
}

export default Work;
