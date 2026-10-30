import React, { useState, useEffect, useCallback, useId, useRef } from "react";

// Images
import oregonLogo from "../../assets/images/oregon_logo.png";
import goldsmithsLogo from "../../assets/images/goldsmiths_logo.png";
import bootcampCert from "../../assets/images/University of Oregon Coding Bootcamp Certificate of Completion.jpg";

// Icons
import { IoClose } from "react-icons/io5";

export default function Education() {
  const [activeEducation, setActiveEducation] = useState(0);
  const [overlayActive, setOverlayActive] = useState(false);

  // Dialog accessibility
  const titleId = useId();
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  const educationList = [
    {
      title: "University of Oregon Coding Bootcamp",
      description:
        "Attended University of Oregon and learned the MERN stack, other web technologies. Gained a certification of completion for full stack web development.",
      fullDescription: (
        <p>
          During my time at the University of Oregon Coding Bootcamp, I received comprehensive training in Full Stack Web Development, specializing in the MERN
          stack (MongoDB, Express, React, and Node.js). In addition to core technologies, I gained education with supplemental tools such as HTML, SCSS,
          JavaScript, and TypeScript. Through a series of hands-on projects, I developed strong problem-solving skills, honed my ability to work effectively
          with a team, and learned how to plan sprints, use Jira and Figma, and maintain clear communication. Upon completion of the program, I was awarded a
          certificate, which recognized my proficiency in Full Stack Web Development and prepared me for a successful career in the industry.
        </p>
      ),
      headerImage: oregonLogo,
      image: bootcampCert,
      alt: "University of Oregon Coding Bootcamp Certificate of Completion",
    },
    {
      title: "University of London - Goldsmiths",
      description: "Attended University of London - Goldsmiths learning the fundamentals of computer science and pursuing a BSc in Computer Science.",
      fullDescription:
        "Attended University of London - Goldsmiths learning the fundamentals of computer science and pursuing a BSc in Computer Science. Learned about algorithms, data structures, and the mathematics behind computer science. Learned about the history of computer science and the impact it has has on the world.",
      headerImage: goldsmithsLogo,
    },
  ];

  const handleCloseOverlay = useCallback(() => {
    setOverlayActive(!overlayActive);
  }, [overlayActive]);

  const handleEducationCardClick = (index, trigger) => {
    setActiveEducation(index);
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
    <section className="education">
      <h2 className="education__title">{"{Education}"}</h2>
      <div className="education__container">
        {/* Education Cards */}
        {educationList.map((education, index) => (
          <div key={index} className="education__item">
            <div className="education__item__image-wrapper">
              <img src={education.headerImage} alt={education.title} className="education__item__image" loading="lazy" />
            </div>
            <div className="education__item__content">
              <h3 className="education__item__title">{education.title}</h3>
              <p className="education__item__subtitle">{education.subtitle}</p>
              <p className="education__item__description">{education.description}</p>
              <button className="education__item__read-more" onClick={(e) => handleEducationCardClick(index, e.currentTarget)}>
                <span>Read More</span>
              </button>
            </div>
          </div>
        ))}

        {/* Overlay */}
        {/* inert hides the closed overlay from keyboard and screen readers, since clip-path only hides it visually */}
        <div className={`education__overlay ${overlayActive ? "active" : ""}`.trim()} inert={!overlayActive}>
          <div className="education__overlay__content" role="dialog" aria-modal="true" aria-labelledby={titleId} ref={dialogRef}>
            <button className="education__overlay__exit" onClick={handleCloseOverlay} aria-label="Close" ref={closeButtonRef}>
              <IoClose aria-hidden="true" />
            </button>
            <div className="education__overlay__header">
              <img
                src={educationList[activeEducation].headerImage}
                alt={educationList[activeEducation].title}
                className="education__overlay__header__image"
                loading="lazy"
              />
              <h3 className="education__overlay__title" id={titleId}>
                {educationList[activeEducation].title}
              </h3>
            </div>
            {/* focusable so keyboard users can scroll long descriptions */}
            <div className="education__overlay__description" tabIndex={0}>
              <div className="education__overlay__description__text">{educationList[activeEducation].fullDescription}</div>
              {educationList[activeEducation].image && (
                <div className="education__overlay__image">
                  <img src={educationList[activeEducation].image} alt={educationList[activeEducation].alt} loading="lazy" />
                </div>
              )}
            </div>
          </div>
          <div className="education__overlay__background" onClick={handleCloseOverlay}></div>
        </div>
      </div>
    </section>
  );
}
