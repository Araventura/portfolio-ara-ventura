import React from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/left-arrow.png";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact__title">Hello.</h1>
      <h4 className="contact__subtitle">
        Are looking to collaborate or hire me? Get in touch.
      </h4>
      <p className="contact__email">
        Email:{" "}
        <Link
          onClick={() => {
            window.location = `mailto:araventura-contact@gmail.com`;
          }}
        >
          araventura.contact@gmail.com
        </Link>
      </p>
      <p className="contact__socials">
        On the Internet: <Link>LinkedIn</Link> / <Link>GitHub</Link>
      </p>
      <Link to={"/"} className="back">
        <img src={Arrow} alt="left arrow" /> back
      </Link>
    </div>
  );
}

export default Contact;
