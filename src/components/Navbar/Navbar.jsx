import { useState, useContext } from "react";

// Components
import { Link } from "react-router-dom";
import OptionalComponent from "../OptionalComponent/OptionalComponent";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

// Context
import { WindowSize } from "../../context/WindowSizeContext";

export default function Navbar() {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

  // use the useContext hook to access the WindowSize context
  const { isMobile } = useContext(WindowSize);

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

  return (
    <div className="navbar">
      <p className="logo">{`{.kb}`}</p>
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </div>
  );
}
