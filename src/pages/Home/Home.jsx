import React from "react";
import { useState, useEffect } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/av-logo.png";
import arrow from "../../assets/icons/left-arrow.png";
import Projects from "../../components/Projects/Projects.jsx";
import Form from "../../components/Form/Form.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Home() {
  const [hideAbout, setHideAbout] = useState(true);
  const [hideWork, setHideWork] = useState(true);
  const [hideContact, setHideContact] = useState(true);

  const handleClick = (e) => {
    if (e.target.id == "about") {
      setHideAbout(!hideAbout);
    }

    if (e.target.id == "work") {
      setHideWork(!hideWork);
    }

    if (e.target.id == "contact") {
      setHideContact(!hideContact);
    }
  };

  return (
    <div className="home">
      <div className="home__top">
        <div
          className="home__container"
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-easing="ease-in-sine"
        >
          <Link to={"/home"}>
            <img
              className="home__container-logo"
              src={logo}
              alt="Ara Ventura's logo"
            />
          </Link>
        </div>
        <div className="home__description-wrapper">
          <h4 className="home__description">Full Stack Web Development</h4>
          <h4 className="home__description">Vancouver, BC</h4>
        </div>
      </div>
      <div className="home__bottom">
        <div className="home__link">
          <div id="about" onClick={handleClick} className="home__bottom-title">
            ABOUT
          </div>
        </div>
        <div className={`home__bottom-about ${hideAbout ? "hidden" : ""}`}>
          <h3 className="home__subtitle">
            Hello, I'm Ara. I'm so grateful to have you here.
          </h3>
          <h4 className="home__description">
            I'm a motivated and detail-oriented Junior Software Engineer with a
            passion for developing efficient and user-friendly applications.
          </h4>
          <Link className="home__description-more" to={"/about"}>
            More about me
            <div className="home__description__wrapper-arrow">
              <img className="home__description-arrow" src={arrow} alt="" />
            </div>
          </Link>
        </div>
        <div className="home__section">
          <div className="home__link">
            <div id="work" className="home__bottom-title" onClick={handleClick}>
              WORK
            </div>
          </div>
          <div className={`home__bottom-wrapper ${hideWork ? "hidden" : ""}`}>
            <h3 className="home__subtitle">
              Swipe to see some of the projects I've built.
            </h3>
            <Projects />
            <Link className="home__description-more" to={"/work"}>
              More Projects
              <div className="home__description__wrapper-arrow">
                <img className="home__description-arrow" src={arrow} alt="" />
              </div>
            </Link>
          </div>
        </div>
        <div id="contact" className="home__bottom-title" onClick={handleClick}>
          CONTACT
        </div>
        <Form className="" hideContact={hideContact} />
      </div>
    </div>
  );
}

export default Home;
