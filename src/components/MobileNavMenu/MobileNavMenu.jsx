import React, { useState } from "react";

// Components
import NavMenuLinks from "../NavMenuLinks/NavMenuLinks";
import OptionalComponent from "../OptionalComponent/OptionalComponent";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function MobileNavMenu() {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

  // toggle mobile menu
  const handleMobileMenuToggle = () => {
    setMobileMenuToggle(!mobileMenuToggle);
  };

  const MobileNavCloseOverlay = () => {
    return <div onClick={handleMobileMenuToggle} className="mobile-nav-menu__close-overlay"></div>;
  };

  return (
    <div className="mobile-nav-menu">
      <HamburgerMenu callback={handleMobileMenuToggle} activeToggle={mobileMenuToggle} />
      <OptionalComponent condition={mobileMenuToggle}>
        <NavMenuLinks />
        <MobileNavCloseOverlay />
      </OptionalComponent>
    </div>
  );
}
