// Components
import { Link } from "react-router-dom";

export default function NavMenuLinks() {
  return (
    <ul className="nav-menu-links">
      <li className="nav-menu-links__item">
        <Link to="/" className="mobile-menu-links">
          Home
        </Link>
      </li>
      <li className="nav-menu-links__item">
        <Link to="/about" className="mobile-menu-links">
          About Me
        </Link>
      </li>
      <li className="nav-menu-links__item">
        <Link to="/contact" className="mobile-menu-links">
          Contact Me
        </Link>
      </li>
    </ul>
  );
}
