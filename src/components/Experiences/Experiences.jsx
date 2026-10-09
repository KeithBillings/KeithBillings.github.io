import React, { useState, useEffect, useCallback } from "react";

// Images
import brandlive from "../../assets/images/brandlive_logo.png";
import oregonLogo from "../../assets/images/oregon_logo.png";
import goldsmithsLogo from "../../assets/images/goldsmiths_logo.png";
import bootcampCert from "../../assets/images/University of Oregon Coding Bootcamp Certificate of Completion.jpg";

// Icons
import { IoClose } from "react-icons/io5";

export default function Experiences() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [overlayActive, setOverlayActive] = useState(false);

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

  const handleExperienceCardClick = (e) => {
    setActiveExperience(e.target.dataset.index);

    // open overlay if not already open
    if (!overlayActive) {
      handleCloseOverlay();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlayActive) {
        handleCloseOverlay();
      }
    });
  }, [handleCloseOverlay, overlayActive]);

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
              <button data-index={index} className="experience__item__read-more" target="_blank" rel="noopener noreferrer" onClick={handleExperienceCardClick}>
                <span>Read More</span>
              </button>
            </div>
          </div>
        ))}

        {/* Overlay */}
        <div className={`experience__overlay ${overlayActive ? "active" : ""}`.trim()}>
          <div className="experience__overlay__content">
            <button className="experience__overlay__exit" onClick={handleCloseOverlay}>
              <IoClose />
            </button>
            <div className="experience__overlay__header">
              <img
                src={experienceList[activeExperience].headerImage}
                alt={experienceList[activeExperience].title}
                className="experience__overlay__header__image"
                loading="lazy"
              />
              <h3 className="experience__overlay__title">{experienceList[activeExperience].title}</h3>
            </div>
            <div className="experience__overlay__description">
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
