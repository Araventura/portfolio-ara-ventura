import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__socials">
          <Link className="header__link">LI</Link>
          <Link className="header__link">GIT</Link>
          <Link className="header__link">EM</Link>
        </div>
        <div className="header__line"></div>
      </div>
      <div className="header__right">
        <p className="header__year">AV ©/2024</p>
      </div>
    </div>
  );
}

export default Header;
