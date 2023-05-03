import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <Link to="/privacy-policy" className="footer__privacy-policy">Privacy Policy</Link>
        <p>&copy; {new Date().getFullYear()} Keith Billings. All rights reserved.</p>
      </div>
    </footer>
  );
}
