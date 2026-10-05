import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Components
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dynamicBackground, setDynamicBackground] = useState(false);

  const { hash } = useLocation();

  // Add dynamic background class to navbar
  useEffect(() => {
    // if user has scrolled more than (100vh - scroll bar height), enable dynamic background
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollLimit = window.innerHeight / 2;

      if (scrollPosition > scrollLimit) {
        setDynamicBackground(true);
      } else {
        setDynamicBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (hash === "#contact-info") {
      document.querySelector(".contact-info").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      document.body.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <div className={`navbar ${dynamicBackground ? "overlaping" : ""}`.trim()}>
      <Link to="/" className="logo-link">
        <p className="logo">{`{kb}`}</p>
      </Link>
      <div className="nav-menu">
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
            <Link to="/#contact-info" className="mobile-menu-links">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
