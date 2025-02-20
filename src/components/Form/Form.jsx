import React from "react";
import "../Form/Form.scss";

function Form() {
  return (
    <div className="contact-form">
      <h3 className="home__email">Email me:</h3>
      <h4 className="home__email-me">ara.venturafitch@gmail.com</h4>
      <h4 className="home__reach">
        I can be reached by Email, LinkedIn or send me a message here - I'd love
        to connect with you!
      </h4>
      <form action="" className="form">
        <div className="form__container">
          <span className="form__title">Contact Details</span>
          <input
            className="form__input"
            type="text"
            placeholder="*Full Name"
            required
          />
          <input
            className="form__input"
            type="email"
            placeholder="*Email"
            required
          />
          <input
            className="form__input"
            type="text"
            placeholder="Company (optional)"
          />
        </div>
        <span className="form__title">Message</span>
        <textarea
          className="form__textarea"
          placeholder="*Tell me about yourself!"
          required
        ></textarea>
        <button className="form__button" type="submit">
          Send →
        </button>
      </form>
    </div>
  );
}

export default Form;
