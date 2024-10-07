import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div>
          <Link>LI</Link>
          <Link>GIT</Link>
          <Link>EM</Link>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="header__right">
        <p>©/2024</p>
      </div>
    </div>
  );
}

export default Header;
