import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home__top">
        <h1 className="home__title">ARA VENTURA</h1>
        <h4 className="home__description">
          Software Engineer with a special interest on AI / Full Stack Web
          Developer
        </h4>
        <h4 className="home__open">
          Currently open for collaborations and freelancing
        </h4>
        <Link to={"/chatbot"} className="home__chatbot">
          Check out my newest project! A chatbot integrated with OpenAI. ✨
        </Link>
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
