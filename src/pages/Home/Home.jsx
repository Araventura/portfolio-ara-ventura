import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="home__top">
        <h2 className="home__title">Ara Ventura</h2>
        <h4 className="home__description">
          Software Engineer / WordPress Developer
        </h4>
        <h4 className="home__open">
          Currently open for collaborations and freelancing
        </h4>
      </div>
      <div className="home__bottom">
        <h3 className="home__bottom-text">WORK</h3>
        <h3 className="home__bottom-text">ABOUT</h3>
        <h3 className="home__bottom-text">CONTACT</h3>
      </div>
    </div>
  );
}

export default Home;
