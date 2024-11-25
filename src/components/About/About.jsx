import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="about__text-top">
        <div>
          <h1 className="about__title">About</h1>
          <h2 className="about__subtitle">
            I'm Ara. A software engineer, maker and problem solver.
          </h2>
        </div>
      </div>
      <div className="about__text-bottom">
        <div>
          <h3 className="about__tech news">
            Exciting news! I recently earned a certification in Artificial
            Intelligence (AIC™), where I learned how to solve complex problems
            with AI tools.
          </h3>

          <h4 className="about__tech">
            HTML / CSS / SCSS / Sass / JavaScript / Node / React / Express /
            MySQL / Agile Development / DOM / API / Web APIs / AI APIs & Plugins
            / User Authentication / OAuth / Heroku / GitHub / Jest / REST APIs /
            Node.js / Figma / Git / GitHub / LLMs / NLP Techniques / Prompt
            Engineering / WordPress
          </h4>

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
