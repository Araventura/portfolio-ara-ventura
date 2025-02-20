import React from "react";
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
        <div
          className="home__wrapper"
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-easing="ease-in-sine"
          data-aos-delay="100"
          data-aos-once
        >
          <h4 className="home__description">Full Stack Web Development</h4>
          <h4 className="home__description">Vancouver, BC</h4>
        </div>
      </div>
      <div className="home__scroll">
        <Link className="home__scroll-link">
          <img className="home__scroll-arrow " src={arrow} alt="arrow" />
        </Link>
      </div>
      <div className="home__bottom">
        <Link to={"/about"} className="home__bottom-text">
          ABOUT
        </Link>
        <div className="home__botton-about">
          <div>
            <h3 className="home__subtitle">
              Hello, I'm Ara. I'm so grateful to have you here.
            </h3>
          </div>
          <div>
            <h4 className="home__description">
              I'm a motivated and detail-oriented Junior Software Engineer with
              a passion for developing efficient and user-friendly applications.
            </h4>
          </div>
          <Link to={"/about"} className="home__description-more">
            More about me →
          </Link>
        </div>
        <Link to={"/work"} className="home__bottom-text">
          WORK
        </Link>
        <div className="home__bottom-wrapper">
          <h3 className="home__subtitle">
            Swipe to see some of the projects I've built.
          </h3>
          <Projects />
          <Link to={"/work"} className="home__description-more">
            More Projects →
          </Link>
        </div>
        <Link to={"/contact"} className="home__bottom-text">
          CONTACT
        </Link>
        <Form />
      </div>
    </div>
  );
}

export default Home;
