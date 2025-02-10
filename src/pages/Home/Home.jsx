import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/av-logo.png";
import arrow from "../../assets/icons/left-arrow.png";
import workImage from "../../assets/images/mobile-tablet.png";

function Home() {
  return (
    <div className="home">
      <div className="home__top">
        <div className="home__container">
          <Link to={"/home"}>
            <img
              className="home__container-logo"
              src={logo}
              alt="Ara Ventura's logo"
            />
          </Link>
        </div>
        <h4 className="home__description">Full Stack Web Development</h4>
        <h4 className="home__description">Vancouver, BC</h4>
      </div>
      <div className="home__scroll">
        <Link className="home__scroll-link">
          <img className="home__scroll-arrow " src={arrow} alt="arrow" />
        </Link>
      </div>
      <div className="home__bottom">
        <Link to={"/work"} className="home__bottom-text">
          WORK
        </Link>
        <div className="home__bottom-img">
          <img src="" alt="" />
        </div>
        <Link to={"/about"} className="home__bottom-text">
          ABOUT
        </Link>
        <Link to={"/contact"} className="home__bottom-text">
          CONTACT
        </Link>
      </div>
    </div>
  );
}

export default Home;
