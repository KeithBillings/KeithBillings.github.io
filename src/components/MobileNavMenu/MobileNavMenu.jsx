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

  return (
    <div className="mobile-nav-menu">
      <HamburgerMenu callback={handleMobileMenuToggle} activeToggle={mobileMenuToggle} />
      <OptionalComponent condition={mobileMenuToggle}>
        <div className="mobile-nav-menu__links">
          <NavMenuLinks />
        </div>
      </OptionalComponent>
    </div>
  );
}
