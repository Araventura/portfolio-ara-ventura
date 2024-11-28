import React from "react";
import "./Work.scss";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/left-arrow.png";
import videos from "../../videos/videos.json";
import aiOne from "../../assets/images/ai-1.png";
import aiTwo from "../../assets/images/ai-2.png";
import aiThree from "../../assets/images/ai-3.png";
import aiFour from "../../assets/images/ai-4.png";
import aiFive from "../../assets/images/ai-5.png";
import aiSix from "../../assets/images/ai-6.png";

function Work() {
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

      <div
        id="carouselExampleIndicators"
        className="carousel slide photo__carousel"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={aiOne} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={aiTwo} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={aiThree} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={aiFour} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={aiFive} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={aiSix} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="cards">
        {videos.map((project) => (
          <div key={project.id} className="card">
            <div className="card__video">
              <img src="" alt="" className="thumbnail" />
              <iframe
                className="video"
                src={project.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
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
