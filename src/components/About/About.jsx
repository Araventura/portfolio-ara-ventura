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
          <div className="about__wrapper">
            <img className="about__image" src={profileImg} alt="" />
          </div>
          <h2 className="about__subtitle">
            Nice to see you, I'm Ara. A Junior Software Engineer who specializes
            in React, Express, MySQL and JavaScript.
          </h2>
        </div>
      </div>
      <div className="about__text-bottom">
        <div>
          <div className="about__tech-backdrop">
            <h4 className="about__tech-emoji">🏆</h4>
            <h3 className="about__tech">
              Most recent achievement: Certification in Artificial Intelligence
              (AIC™) Nov 2024
            </h3>
          </div>
          <div className="about__skills">
            <h3 className="about__skills-title">Skills & Technologies</h3>
            {skillsData.map((i) => {
              return (
                <h4 key={i.key} className="about__skills-tech">
                  ✓ {i.name}
                </h4>
              );
            })}
          </div>

          <p className="about__text">
            After dedicating over six years to the dental field, I realized that
            while I enjoyed the precision and problem-solving in dentistry, my
            true curiosity had always been rooted in technology. I’ve always
            been fascinated by logic, critical thinking, and the art of finding
            solutions—elements that naturally led me to explore the world of
            software engineering.
          </p>

          <p className="about__text">
            What started as a curiosity quickly became a passion, especially
            when I discovered the thrill of debugging. There’s something deeply
            satisfying about tracing the problem, untangling the code, and
            watching things come to life. I also found myself drawn to the
            aesthetics of front-end development, where styling and visual design
            meet functional code—giving me a chance to blend creativity with
            logic.
          </p>

          <p className="about__text">
            But my love for coding didn’t stop at the front-end. Once I delved
            into the backend, I realized how much I enjoyed the intricacies of
            building the structure that powers applications. Now, I’m equally
            passionate about both, constantly learning and expanding my skill
            set. Whether it’s refining a user interface or solving complex
            backend challenges, I’m driven by the opportunity to learn something
            new every day and contribute to innovative solutions.
          </p>

          <p className="about__text">
            I bring a meticulous eye for detail and a passion for crafting
            beautiful and efficient solutions. My journey has just begun, and
            I’m excited to see where this path takes me.
          </p>

          <Link to={"/contact"}>
            <button>Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
