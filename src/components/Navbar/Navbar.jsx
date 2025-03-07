import React, { useState, useContext, useEffect } from "react";

// Components
import NavMenuLinks from "../NavMenuLinks/NavMenuLinks";

export default function Navbar() {
  const [dynamicBackground, setDynamicBackground] = useState(false);

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

  return (
    <div className={`navbar ${dynamicBackground ? "overlaping" : ""}`.trim()}>
      <p className="logo">{`{kb}`}</p>
      <div className="nav-menu">
        <NavMenuLinks />
      </div>
    </div>
  );
}
