import React, { useState, useEffect, useCallback, useId, useRef } from "react";

// Images
import brandlive from "../../assets/images/brandlive_logo.png";

// Icons
import { IoClose } from "react-icons/io5";

export default function Experiences() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [overlayActive, setOverlayActive] = useState(false);

  // Dialog accessibility
  const titleId = useId();
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  const experienceList = [
    {
      title: "Lead Custom Web Developer",
      subtitle: "March 2021 - September 2026",
      description:
        "Lead custom Web Developer at Brandlive responsible for creating new features, developing custom components, fixing UI bugs, accessibility compliance, and building custom virtual events.",
      fullDescription: (
        <>
          <p>
            Head of the Custom Web Development team responsible for creating new features, developing custom components, fixing UI bugs, accessibility
            compliance, and building custom virtual events.
          </p>
          <p style={{ paddingLeft: "2rem" }}>Tech used: Javascript, HTML, SCSS, React.js, Lighthouse, and custom built DOM manipulation Javascript library</p>
          <br></br>
          <p>
            Work with the Customer Satisfaction department for client facing communications and resolutions. Includes project scoping, problem solving, sales
            calls, and project demos.
          </p>
          <p style={{ paddingLeft: "2rem" }}>Tech used: Google Meets, Jira, Figma, Slack, Adobe products, and the Brandlive events and streams platform</p>
          <br></br>
          <p>Work with integrations team to set up analytics</p>
          <p style={{ paddingLeft: "2rem" }}>Tech used: Tray.ai, Javascript, and my custom built DOM manipulation library</p>
          <p style={{ paddingLeft: "2rem" }}>Analytics used: Google (GA4, GTM), LinkedIn, Facebook, Adobe, and more</p>
          <br></br>
          <p>Work with integrations team to connect CRMs</p>
          <p style={{ paddingLeft: "2rem" }}>
            Tech used: Tray.ai, Javascript, proprietary tools within the Brandlive platform, React.js, and my custom built DOM manipulation library
          </p>
          <p style={{ paddingLeft: "2rem" }}>CRMs used: Salesforce, Marketo, Adobe</p>
          <br></br>
          <p>Maintain the home website using Framer with a focus on accessibility and SEO</p>
          <p style={{ paddingLeft: "2rem" }}>
            Tech used: Framer, HTML, Google Search Console for site indexing, and Lighthouse for reports on accessibility and SEO
          </p>
        </>
      ),
      headerImage: brandlive,
    },
  ];

  const handleCloseOverlay = useCallback(() => {
    setOverlayActive(!overlayActive);
  }, [overlayActive]);

  const handleExperienceCardClick = (index, trigger) => {
    setActiveExperience(index);
    triggerRef.current = trigger;

    // open overlay if not already open
    if (!overlayActive) {
      handleCloseOverlay();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!overlayActive) return;

      if (e.key === "Escape") {
        handleCloseOverlay();
      }

      // keep keyboard focus inside the open dialog
      if (e.key === "Tab") {
        const focusable = dialogRef.current.querySelectorAll('button, [tabindex="0"]');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!dialogRef.current.contains(document.activeElement)) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleCloseOverlay, overlayActive]);

  // move focus into the dialog when it opens, and back to its Read More button when it closes
  useEffect(() => {
    if (overlayActive) {
      closeButtonRef.current.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [overlayActive]);

  return (
    <section className="experience">
      <h2 className="experience__title">{"{Experience}"}</h2>
      <div className="experience__container">
        {/* Experience Cards */}
        {experienceList.map((experience, index) => (
          <div key={index} className="experience__item">
            <div className="experience__item__image-wrapper">
              <img src={experience.headerImage} alt={experience.title} className="experience__item__image" loading="lazy" />
            </div>
            <div className="experience__item__content">
              <h3 className="experience__item__title">{experience.title}</h3>
              <p className="experience__item__subtitle">{experience.subtitle}</p>
              <p className="experience__item__description">{experience.description}</p>
              <button className="experience__item__read-more" onClick={(e) => handleExperienceCardClick(index, e.currentTarget)}>
                <span>Read More</span>
              </button>
            </div>
          </div>
        ))}

        {/* Overlay */}
        {/* inert hides the closed overlay from keyboard and screen readers, since clip-path only hides it visually */}
        <div className={`experience__overlay ${overlayActive ? "active" : ""}`.trim()} inert={!overlayActive}>
          <div className="experience__overlay__content" role="dialog" aria-modal="true" aria-labelledby={titleId} ref={dialogRef}>
            <button className="experience__overlay__exit" onClick={handleCloseOverlay} aria-label="Close" ref={closeButtonRef}>
              <IoClose aria-hidden="true" />
            </button>
            <div className="experience__overlay__header">
              <img
                src={experienceList[activeExperience].headerImage}
                alt={experienceList[activeExperience].title}
                className="experience__overlay__header__image"
                loading="lazy"
              />
              <h3 className="experience__overlay__title" id={titleId}>
                {experienceList[activeExperience].title}
              </h3>
            </div>
            {/* focusable so keyboard users can scroll long descriptions */}
            <div className="experience__overlay__description" tabIndex={0}>
              <div className="experience__overlay__description__text">{experienceList[activeExperience].fullDescription}</div>
              {experienceList[activeExperience].image && (
                <div className="experience__overlay__image">
                  <img src={experienceList[activeExperience].image} alt={experienceList[activeExperience].alt} loading="lazy" />
                </div>
              )}
            </div>
          </div>
          <div className="experience__overlay__background" onClick={handleCloseOverlay}></div>
        </div>
      </div>
    </section>
  );
}
