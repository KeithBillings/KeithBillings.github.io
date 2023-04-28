import React from "react";
import { Link } from "react-router-dom";

export default function ContactMe() {
  return (
    <div className="contact-me">
      <h1 className="contact-me__title">Contact Me</h1>
      <p className="contact-me__description">If you have any questions or would like to get in touch, please feel free to reach out through any of the following methods:</p>
      <ul className="contact-me__list">
        <li>
          <strong>Email:</strong> <a href="mailto:keithbillingsbusiness@gmail.com">keithbillingsbusiness@gmail.com</a>
        </li>
        <li>
          <strong>LinkedIn:</strong>
          <a href="https://www.linkedin.com/in/keithbillings/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/keithbillings/
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>
          <a href="https://github.com/keithbillings" target="_blank" rel="noopener noreferrer">
            github.com/keithbillings
          </a>
        </li>
      </ul>
      {/* Contact Me form with Nodemailer */}
      <form className="contact-me__form">
        <div className="contact-me__form__group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="First Last" />
        </div>
        <div className="contact-me__form__group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="example@example.com" />
        </div>
        <div className="contact-me__form__group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <div className="contact-me__form__buttons">
          <button type="submit">Send</button>
          <Link to="/">Back to Home</Link>
        </div>
      </form>
      <br />
    </div>
  );
}
