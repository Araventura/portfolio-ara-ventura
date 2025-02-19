import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/av-logo.png";
import arrow from "../../assets/icons/left-arrow.png";
import Projects from "../../components/Projects/Projects.jsx";

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
        <Link to={"/about"} className="home__bottom-text">
          ABOUT
        </Link>
        <div className="home__botton-about">
          <h3 className="home__subtitle">
            Hello, I'm Ara. I'm so grateful to have you here.
          </h3>
          <h4 className="home__description">
            I'm a motivated and detail-oriented Junior Software Engineer with a
            passion for developing efficient and user-friendly applications.
          </h4>
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
        <h3 className="home__email">Email me:</h3>
        <h4 className="home__email-me">ara.venturafitch@gmail.com</h4>
        <h4 className="home__reach">
          I can be reached by Email, LinkedIn or send me a message here - I'd
          love to connect with you!
        </h4>
        <form action="" className="form">
          <div className="form__container">
            <span className="form__title">Contact Details</span>
            <input
              className="form__input"
              type="text"
              placeholder="*Full Name"
              required
            />
            <input
              className="form__input"
              type="email"
              placeholder="*Email"
              required
            />
            <input
              className="form__input"
              type="text"
              placeholder="Company (optional)"
            />
          </div>
          <span className="form__title">Message</span>
          <textarea
            className="form__textarea"
            placeholder="*Tell me about yourself!"
            required
          ></textarea>
          <button className="form__button" type="submit">
            Send →
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
