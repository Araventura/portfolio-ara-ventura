import React from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/left-arrow.png";
import Form from "../Form/Form";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__wrapper">
        <h1 className="contact__title">Hello.</h1>
      </div>
      <div className="contact__form-wrapper">
        <Form />
      </div>
    </div>
  );
}

export default Contact;
