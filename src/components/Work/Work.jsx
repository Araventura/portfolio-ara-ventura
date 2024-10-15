import React from "react";
import "./Work.scss";
import videos from "../../videos/videos.json";

function Work() {
  console.log(videos);
  return (
    <div className="work">
      <h4 className="work__title">WORK</h4>
      <p className="work__description">
        This is a showcase of my work. The world is constantly evolving and so
        am I. I'm still learning and gaining new skills everyday
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
    </div>
  );
}

export default Work;
