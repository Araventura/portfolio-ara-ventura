import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__socials">
          <Link
            to="https://www.linkedin.com/in/ara-ventura/"
            className="header__link"
          >
            LI
          </Link>
          <Link to="https://github.com/Araventura" className="header__link">
            GIT
          </Link>
          <Link
            onClick={() => {
              window.location = `mailto:araventura-contact@gmail.com`;
            }}
            className="header__link"
          >
            EM
          </Link>
        </div>
        <div className="header__line"></div>
      </div>
      <div className="header__right">
        <Link to={"/"} className="header__year">
          AV ©/2024
        </Link>
      </div>
    </div>
  );
}

export default Header;
