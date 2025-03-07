import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";
import profileImg from "../../assets/images/profile.jpg";
import skillsData from "../../data/skills.json";
function About() {
  return (
    <div className="about">
      <div className="about__text-top">
        <div>
          <h1 className="about__title">About</h1>
          <div className="about__top-wrapper">
            <div className="about__wrapper">
              <img className="about__image" src={profileImg} alt="" />
            </div>
            <div className="about__bottom-wrapper">
              <h2 className="about__subtitle">
                Nice to see you, I'm Ara. A Junior Software Engineer who
                specializes in React, Express, MySQL and JavaScript.
              </h2>
              <div className="about__tech-backdrop">
                <h4 className="about__tech-emoji">🏆</h4>
                <h3 className="about__tech">
                  Most recent achievement: Certification in Artificial
                  Intelligence (AIC™) Nov 2024
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__text-bottom">
        <div>
          <div className="about__skills">
            <h3 className="about__skills-title">Skills & Technologies</h3>
            <div className="about__skills-grid">
              {skillsData.map((i) => {
                return (
                  <h4 key={i.key} className="about__skills-tech">
                    ✓ {i.name}
                  </h4>
                );
              })}
            </div>
          </div>
          <Link to={"/contact"}>
            <button className="about__button">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
