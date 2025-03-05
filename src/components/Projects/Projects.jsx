import React, { useState } from "react";
import "./Projects.scss";
import workImage from "../../assets/images/mobile-tablet.png";
import dentaShiftImage from "../../assets/images/dentashift.png";
import purelyChic from "../../assets/images/purelyChic.png";
// Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

function Projects() {
  return (
    <div className="projects">
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
          <SwiperSlide>
            <li className="home__list-item">
              <img
                className="home__bottom-wrapper__img"
                src={workImage}
                alt="A mobile and tablet simulation"
              />
              <div className="home__list-wrapper">
                <h3 className="home__list-title">InStock - Practice </h3>
                <h4 className="home__list-description">
                  JavaScript, React, MySQL, Express, Rest APIs
                </h4>
                <h4 className="home__list-description">
                  A web application where the customer can manage Warehouses and
                  Inventory.
                </h4>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="home__list-item">
              <img
                className="home__bottom-wrapper__img"
                src={dentaShiftImage}
                alt="A mobile and tablet simulation"
              />
              <div className="home__list-wrapper">
                <h3 className="home__list-title">Denta Shift - Practice</h3>
                <h4 className="home__list-description">
                  JavaScript, React, MySQL, Express, Rest APIs
                </h4>
                <h4 className="home__list-description">
                  A web application where dentists can find a dental
                  professional based on their offices needs.
                </h4>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="home__list-item">
              <img
                className="home__bottom-wrapper__img"
                src={purelyChic}
                alt="A mobile and tablet simulation"
              />
              <div className="home__list-wrapper">
                <h3 className="home__list-title">Purely Chic - Practice</h3>
                <h4 className="home__list-description">
                  Vite, Sass, React.js, Axios, Node.js and CORS.
                </h4>
                <h4 className="home__list-description">
                  A web application where users can find beauty products that
                  are eco-friendly.
                </h4>
              </div>
            </li>
          </SwiperSlide>
        </Swiper>
      </ul>
    </div>
  );
}

export default Projects;
