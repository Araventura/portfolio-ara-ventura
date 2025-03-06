import React from "react";
import "./Work.scss";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/left-arrow.png";
import "../../pages/Home/Home.scss";
import projects from "../../data/work.json";

//Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

function Work() {
  return (
    <div className="work">
      <Link to={"/"} className="back">
        <img className="back__arrow" src={Arrow} alt="left arrow" /> back
      </Link>
      <h2 className="work__title">WORK</h2>
      <p className="work__description">
        This is a showcase of my latest projects. Swipe to see them. Enjoy!
      </p>

      {/* -Swiper- */}
      <ul className="home__list">
        <Swiper
          spaceBetween={2}
          slidesPerView={1}
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="swiper"
        >
          {projects.map((project) => (
            <SwiperSlide>
              <li key={project.id} className="home__list-item">
                <img
                  className="home__bottom-wrapper__img"
                  src={project.image}
                  alt="A mobile and tablet simulation"
                />
                <div className="home__list-wrapper">
                  <h3 className="home__list-title">{project.title}</h3>
                  <h4 className="home__list-description">
                    {project.technologies}
                  </h4>
                  <h4 className="home__list-description">
                    {project.description}
                  </h4>
                </div>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
      <div>
        <Link to={"/contact"}>
          <button className="work__button">Contact Me</button>
        </Link>
      </div>
    </div>
  );
}

export default Work;
