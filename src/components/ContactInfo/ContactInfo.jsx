// Import React Router
import { Link } from "react-router-dom";

// Import React Icons
import { MdArrowForwardIos } from "react-icons/md";

export default function ContactInfo(params) {
  return (
    <section className="contact-info">
      <h2 className="contact-info__title">Contact Info</h2>
      <div className="contact-info__content">
        <div className="contact-info__content__item">
          <p className="contact-info__description">If you have any questions or would like to get in touch, please feel free to reach out through any of the following methods:</p>
          <ul className="contact-info__list">
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
        </div>
        <div className="contact-info__content__item">
          <p className="contact-info__description align-text-right">Or you can use the form to send me an email directly</p>
          <div className="contact-info__button">
            <Link to="/contact">Send Email</Link>
            <MdArrowForwardIos />
          </div>
        </div>
      </div>
    </section>
  );
}
