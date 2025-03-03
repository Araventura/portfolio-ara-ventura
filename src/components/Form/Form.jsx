import React, { useRef, useState } from "react";
import "./Form.scss";

function Form(props) {
  const formRef = useRef(null); // to access the form data inside function
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    setSubmitted(true); //update button state

    try {
      await fetch("https://formsubmit.co/0e706ee04cceae7ea4a9c0e58955e215", {
        method: "POST",
        body: formData,
      });
      formRef.current.reset(); //reset form fiels after submission
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      setTimeout(() => setSubmitted(false), 4000);
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className={`contact-form ${props.hideContact ? "hidden" : ""}`}>
      <h3 className="home__email">Email me:</h3>
      <h4 className="home__email-me">ara.venturafitch@gmail.com</h4>
      <h4 className="home__reach">
        I can be reached by Email, LinkedIn or send me a message here - I'd love
        to connect with you!
      </h4>
      <form ref={formRef} onSubmit={handleSubmit} className="form" id="form">
        <div className="form__container">
          <span className="form__title">Contact Details</span>

          <input
            type="hidden"
            name="_subject"
            value="AV Portfolio - New Submission"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for your message! I'll get back to you soon. Ara."
          />
          <input
            className="form__input"
            type="text"
            name="name"
            placeholder="*Full Name"
            required
          />
          <input
            className="form__input"
            type="email"
            name="email"
            placeholder="*Email"
            required
          />
          <input
            className="form__input"
            type="text"
            name="company"
            placeholder="Company (optional)"
          />
        </div>
        <span className="form__title">Message</span>
        <textarea
          className="form__textarea"
          name="message"
          placeholder="*Tell me about yourself!"
          required
        ></textarea>
        <button
          className={`form__button ${submitted ? "submitted" : ""}`}
          type="submit"
          disabled={submitted}
        >
          {submitted ? "Sent!" : "Send →"}
        </button>
      </form>
    </div>
  );
}

export default Form;
