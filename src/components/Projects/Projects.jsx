import React from "react";
import "./Projects.scss";
import { Link } from "react-router-dom";
import workImage from "../../assets/images/mobile-tablet.png";
import dentaShiftImage from "../../assets/images/dentashift.png";
import purelyChic from "../../assets/images/purelyChic.png";

function Projects() {
  return (
    <div className="uk-slider-container-offset" uk-slider>
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        tabIndex="-1"
      >
        <div className="home__list uk-slider-items uk-child-width-1-2@s uk-grid">
          <div className="home__list-item">
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img
                  className="home__bottom-wrapper__img"
                  src={workImage}
                  alt=""
                />
              </div>
              <div className="home__list-wrapper uk-card-body">
                <h3 className="home__list-title">InStock - Practice </h3>
                <h4 className="home__list-description">
                  JavaScript, React, MySQL, Express, Rest APIs
                </h4>
                <h4 className="home__list-description">
                  A web application where the customer can manage Warehouses and
                  Inventory.
                </h4>
              </div>
            </div>
          </div>
          <div className="home__list-item">
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img
                  className="home__bottom-wrapper__img"
                  src={dentaShiftImage}
                  alt=""
                />
              </div>
              <div className="home__list-wrapper uk-card-body">
                <h3 className="home__list-title">Denta Shift - Practice</h3>
                <h4 className="home__list-description">
                  JavaScript, React, MySQL, Express, Rest APIs
                </h4>
                <h4 className="home__list-description">
                  A web application where dentists can find a dental
                  professional based on their offices needs.
                </h4>
              </div>
            </div>
          </div>
          <div className="home__list-item">
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img
                  className="home__bottom-wrapper__img"
                  src={purelyChic}
                  alt=""
                />
              </div>
              <div className="home__list-wrapper uk-card-body">
                <h3 className="home__list-title">Purely Chic - Practice</h3>
                <h4 className="home__list-description">
                  Vite, Sass, React.js, Axios, Node.js and CORS.
                </h4>
                <h4 className="home__list-description">
                  A web application where users can find beauty products that
                  are eco-friendly.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href
          uk-slidenav-previous
          uk-slider-item="previous"
        ></a>
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href
          uk-slidenav-next
          uk-slider-item="next"
        ></a>
      </div>
      <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
    </div>
  );
}

export default Projects;
