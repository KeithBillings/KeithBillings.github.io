import React, { useState } from "react";

// Import React Router
import { Link } from "react-router-dom";

// Import Axios
import axios from "axios";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://keithbillings-api.herokuapp.com/send-email", {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        alert("Email sent successfully!");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email");
    }
  };

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
      <form className="contact-me__form" onSubmit={handleSubmit}>
        <div className="contact-me__form__group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="First Last" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="contact-me__form__group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="example@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="contact-me__form__group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
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
