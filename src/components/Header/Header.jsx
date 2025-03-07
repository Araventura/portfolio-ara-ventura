import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import linkedinImg from "../../assets/icons/linkedin.svg";
import githubImg from "../../assets/icons/github.svg";
import emailImg from "../../assets/icons/mail.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__socials">
          <Link
            to="https://www.linkedin.com/in/ara-ventura/"
            className="header__link"
          >
            <img
              className="header__logo"
              src={linkedinImg}
              alt="LinkedIn logo"
            />
          </Link>
          <Link to="https://github.com/Araventura" className="header__link">
            <img className="header__logo" src={githubImg} alt="GitHub logo" />
          </Link>
          <Link to={"/contact"} className="header__link">
            <img className="header__logo" src={emailImg} alt="" />
          </Link>
        </div>
      </div>
      <div className="header__right">
        <Link to={"/"} className="header__home">
          HOME
        </Link>
      </div>
    </div>
  );
}

export default Header;
