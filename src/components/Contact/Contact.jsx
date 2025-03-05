import React from "react";
import "./Contact.scss";
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
