import React from "react";
import "./Work.scss";
import { Link } from "react-router-dom";
import "../../pages/Home/Home.scss";
import projects from "../../data/work.json";

import DentashiftImg from "../../assets/images/dentashift.png";
import InsockImg from "../../assets/images/mobile-tablet.png";
import PurelyImg from "../../assets/images/purelyChic.png";
import BandsiteImg from "../../assets/images/bandsite.png";
import CoffeeshopImg from "../../assets/images/coffeeshop.png";

//Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

function Work() {
  const projects = [
    {
      id: 1,
      image: DentashiftImg,
      title: "Denta Shift - Practice",
      technologies: "React, Node.js, Express, MySQL",
      description:
        "A web application where dentists can find dental professionals based on their offices needs.",
    },

    {
      id: 2,
      image: InsockImg,
      title: "Instock - Practice",
      technologies: "MySQL, Knex.js, Jira, JavaScrip, React",
      description:
        "A web application where the customer can manage their Warehouses and Inventory.",
    },

    {
      id: 3,
      image: PurelyImg,
      title: "Purely Chic - Practice",
      technologies: "Vite, Sass, React.js, Node.js, Axios, Express.js, CORS",
      description:
        "A web application where users can find beauty products that are eco-friendly.",
    },

    {
      id: 4,
      image: BandsiteImg,
      title: "BandSite - Practice",
      technologies: "HTML, JavaScript, Axios, Sass",
      description:
        "A website built for a a band, where they can publish their next tour dates and their fans can leave their comments in a built-in forum.",
    },

    {
      id: 5,
      image: CoffeeshopImg,
      title: "Coffee Shop - Practice",
      technologies: "HTML, Sass, BEM naming conventions ",
      description:
        "A website built for a coffee shop, highlighting their menu and producs.",
    },
  ];

  return (
    <div className="work">
      <div className="work__wrapper-top">
        <h2 className="work__title">WORK</h2>
        <p className="work__description">
          This is a showcase of my latest projects. Swipe to see them. Enjoy!
        </p>
      </div>

      {/* -Swiper- */}
      <div className="work__wrapper-top">
        <ul className="work__list">
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
                <li key={project.id} className="work__list-item">
                  <img
                    className="work__bottom-wrapper__img"
                    src={project.image}
                    alt="A mobile and tablet simulation"
                  />
                  <div className="work__list-wrapper">
                    <h3 className="work__list-title">{project.title}</h3>
                    <h4 className="work__list-description">
                      {project.technologies}
                    </h4>
                    <h4 className="work__list-description">
                      {project.description}
                    </h4>
                  </div>
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
        <div className="work__wrapper">
          <Link to={"/contact"}>
            <button className="work__button">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Work;
