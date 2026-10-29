import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Components
import NavMenuLinks from "../NavMenuLinks/NavMenuLinks";
import OptionalComponent from "../OptionalComponent/OptionalComponent";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function MobileNavMenu() {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
  const hamburgerRef = useRef(null);
  const { key } = useLocation();

  // toggle mobile menu
  const handleMobileMenuToggle = () => {
    setMobileMenuToggle(!mobileMenuToggle);
  };

  // close the menu after any navigation, including links to the current page
  useEffect(() => {
    setMobileMenuToggle(false);
  }, [key]);

  // Escape closes the menu and returns focus to the hamburger button
  const handleKeyDown = (e) => {
    if (e.key === "Escape" && mobileMenuToggle) {
      setMobileMenuToggle(false);
      hamburgerRef.current.focus();
    }
  };

  // close the menu when keyboard focus moves to something outside it
  // relatedTarget is null for clicks on non-focusable areas like the backdrop, which has its own click handler
  const handleBlur = (e) => {
    if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) {
      setMobileMenuToggle(false);
    }
  };

  const MobileNavCloseOverlay = () => {
    return <div onClick={handleMobileMenuToggle} className="mobile-nav-menu__close-overlay"></div>;
  };

  return (
    <div className="mobile-nav-menu" onKeyDown={handleKeyDown} onBlur={handleBlur}>
      <HamburgerMenu ref={hamburgerRef} callback={handleMobileMenuToggle} activeToggle={mobileMenuToggle} />
      <OptionalComponent condition={mobileMenuToggle}>
        <NavMenuLinks />
        <MobileNavCloseOverlay />
      </OptionalComponent>
    </div>
  );
}
