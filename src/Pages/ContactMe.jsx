import React, { useEffect, useState, useContext } from "react";

// Import React Router
import { Link } from "react-router-dom";

// Import Axios
import axios from "axios";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSending, setEmailSending] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [sendButton, setSendButton] = useState("Send");
  const [emailErrorMessage, setEmailErrorMessage] = useState(false);

  const devMode = false; // Set to true to simulate successful email send

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailSending(true);

    // Check if we should simulate a successful POST request
    if (devMode) {
      setTimeout(() => {
        console.log("Simulating successful email send.");
        setEmailSending(false);
        setEmailSuccess(true);
      }, 1000);
      return;
    }

    try {
      const response = await axios.post("https://keithbillings-api.herokuapp.com/send-email", {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        setEmailSending(false);
        setEmailSuccess(true);
        setEmailErrorMessage(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setEmailSending(false);
      setEmailSuccess(false);
      setEmailErrorMessage(true);
    }
  };

  useEffect(() => {
    if (emailSending) {
      setSendButton("Sending...");
    } else if (emailSuccess) {
      setSendButton("Sent!");
    } else {
      setSendButton("Send");
    }
  }, [emailSending, emailSuccess]);

  return (
    <div className="contact-me">
      <h1 className="contact-me__title">Contact Me</h1>
      <p className="contact-me__description">
        If you have any questions or would like to get in touch, please feel free to reach out through any of the following methods:
      </p>
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
          <div className="contact-me__form__buttons__submit-button">
            <button type="submit">{sendButton}</button>
            {emailErrorMessage && <span className="error-message">There was a problem sending the email.</span>}
          </div>
          <Link to="/">Back to Home</Link>
        </div>
      </form>
      <br />
    </div>
  );
}
