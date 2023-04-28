import React, { useState, useContext, useEffect } from "react";

// Components
import NavMenuLinks from "../NavMenuLinks/NavMenuLinks";

// Context
import AboutMeContext from "../../context/AboutMeContext";
import ExperiencesContext from "../../context/ExperiencesContext";
import ContactMeContext from "../../context/ContactMeContext";

// Utils
import debounce from "../../utils/debounce";

export default function Navbar() {
  const [dynamicBackground, setDynamicBackground] = useState(false);

  const aboutMeRef = useContext(AboutMeContext);
  const experiencesRef = useContext(ExperiencesContext);
  const contactMeRef = useContext(ContactMeContext);

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
      }
      // If the user is on the contact me page, check to add the dynamic background
      else if (contactMeRef.current) {
        const contactMeTop = contactMeRef.current.getBoundingClientRect().top;

				console.log(contactMeTop);

        // If the navbar is overlapping the contact me section
        if (contactMeTop <= -40) {
          setDynamicBackground(true);
        }
        // If the navbar is not overlapping any section
        else {
          setDynamicBackground(false);
        }
      }
      // If the navbar is not overlapping any section
      else {
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
  }, [aboutMeRef, experiencesRef, contactMeRef]);

  return (
    <div className={`navbar ${dynamicBackground ? "overlaping" : ""}`.trim()}>
      <p className="logo">{`{.kb}`}</p>
      <div className="nav-menu">
        <NavMenuLinks />
      </div>
    </div>
  );
}
