import React, { useState, useContext, useEffect } from "react";

// Components
import { Link } from "react-router-dom";
import OptionalComponent from "../OptionalComponent/OptionalComponent";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

// Context
import { WindowSize } from "../../context/WindowSizeContext";
import AboutMeContext from "../../context/AboutMeContext";
import ExperiencesContext from "../../context/ExperiencesContext";

// Utils
import debounce from "../../utils/debounce";

export default function Navbar() {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
  const [dynamicBackground, setDynamicBackground] = useState(false);

  // Context
  const { isMobile } = useContext(WindowSize);

  const aboutMeRef = useContext(AboutMeContext);
  const experiencesRef = useContext(ExperiencesContext);

  // toggle mobile menu
  const handleMobileMenuToggle = () => {
    setMobileMenuToggle(!mobileMenuToggle);
  };

  function NavMenuLinks() {
    return (
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
    );
  }

  function MobileMenu() {
    return (
      <>
        <HamburgerMenu callback={handleMobileMenuToggle} className={"mobile-menu-icon"} activeToggle={mobileMenuToggle} />
        <OptionalComponent condition={mobileMenuToggle}>
          <div className="nav-menu--mobile">
            <NavMenuLinks />
          </div>
        </OptionalComponent>
      </>
    );
  }

  function DesktopMenu() {
    return (
      <div className="nav-menu">
        <NavMenuLinks />
      </div>
    );
  }

  // Add dynamic background class to navbar
  useEffect(() => {
    const handleScroll = () => {
      // If the user is on the about page, check to add the dynamic background
      if (aboutMeRef.current && experiencesRef.current) {
        const aboutMeTop = aboutMeRef.current.getBoundingClientRect().top;
        const experiencesTop = experiencesRef.current.getBoundingClientRect().top;

        // If the navbar is overlapping the about me section
        if (aboutMeTop <= 0 && aboutMeTop >= -aboutMeRef.current.getBoundingClientRect().height) {
          setDynamicBackground(true);
        }
        // If the navbar is overlapping the experience section
        else if (experiencesTop <= 0 && experiencesTop >= -experiencesRef.current.getBoundingClientRect().height) {
          setDynamicBackground(true);
        }
        // If the navbar is not overlapping any section
        else {
          setDynamicBackground(false);
        }
      } else {
        setDynamicBackground(false);
      }
    };

    // Debounce the scroll event
    const debouncedHandleScroll = debounce(handleScroll, 50);

    // Add event listener
    window.addEventListener("scroll", debouncedHandleScroll);

    // Clean up on unmount
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [aboutMeRef, experiencesRef]);

  return (
    <div className={`navbar ${dynamicBackground ? "overlaping" : ""}`.trim()}>
      <p className="logo">{`{.kb}`}</p>
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </div>
  );
}
