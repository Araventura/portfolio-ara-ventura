import React from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/left-arrow.png";
import Form from "../Form/Form";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact__title">Hello.</h1>
      <Form />
    </div>
  );
}

export default Contact;
