import React, { useState, useEffect } from "react";

// Components
import { Link } from "react-router-dom";
import OptionalComponent from "../OptionalComponent/OptionalComponent";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

  const showButton = () => {
    if (window.innerWidth < 768) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  };

  // toggle mobile menu
  const handleMobileMenuToggle = () => {
    setMobileMenuToggle(!mobileMenuToggle);
  };

  // show button on resize
  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
  }, []);

  return (
    <div className="navbar">
      <OptionalComponent condition={mobileMenu}>
        <HamburgerMenu callback={handleMobileMenuToggle} className={"mobile-menu-icon"} activeToggle={mobileMenuToggle} />
        <OptionalComponent condition={mobileMenuToggle}>
          <div className="mobile-menu">
            <ul className="mobile-menu-items">
              <li className="mobile-menu-item">
                <Link to="/" className="mobile-menu-links">
                  Home
                </Link>
              </li>
              <li className="mobile-menu-item">
                <Link to="/about" className="mobile-menu-links">
                  About Me
                </Link>
              </li>
              <li className="mobile-menu-item">
                <Link to="/contact" className="mobile-menu-links">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </OptionalComponent>
      </OptionalComponent>
    </div>
  );
}
