import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/av-logo.png";

function Home() {
  return (
    <div className="home">
      <div className="home__top">
        <div className="home__logo-container">
          <Link to={"/home"}>
            <img class="home__logo" src={logo} alt="Ara Ventura's logo" />
          </Link>
        </div>
        <h4 className="home__description">Full Stack Web Development</h4>
        <h4 className="home__description">Vancouver, BC</h4>
      </div>
      <div className="home__bottom">
        <Link to={"/work"} className="home__bottom-text">
          WORK
        </Link>
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
