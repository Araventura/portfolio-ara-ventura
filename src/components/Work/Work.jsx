import React from "react";
import "./Work.scss";

function Work() {
  return (
    <div className="work">
      <h4>WORK</h4>
      <p>
        This is a showcase of my work. The world is constantly evolving and so
        am I. I'm still learning and gaining new skills everyday
      </p>
      <div className="cards">
        <div className="card">
          <img src="" alt="" className="thumbnail" />
          <video src=""></video>
          <div className="card-info">
            <p>Card Title</p>
            <p>Card Month/Year</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
