import React, { useState, useEffect, useCallback } from "react";

// Images
import oregonLogo from "../../assets/images/oregon_logo.png";
import goldsmithsLogo from "../../assets/images/goldsmiths_logo.png";
import bootcampCert from "../../assets/images/University of Oregon Coding Bootcamp Certificate of Completion.jpg";

// Icons
import { IoClose } from "react-icons/io5";

export default function Education() {
  const [activeEducation, setActiveEducation] = useState(0);
  const [overlayActive, setOverlayActive] = useState(false);

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

  const handleEducationCardClick = (e) => {
    setActiveEducation(e.target.dataset.index);

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
              <button data-index={index} className="education__item__read-more" target="_blank" rel="noopener noreferrer" onClick={handleEducationCardClick}>
                <span>Read More</span>
              </button>
            </div>
          </div>
        ))}

        {/* Overlay */}
        <div className={`education__overlay ${overlayActive ? "active" : ""}`.trim()}>
          <div className="education__overlay__content">
            <button className="education__overlay__exit" onClick={handleCloseOverlay}>
              <IoClose />
            </button>
            <div className="education__overlay__header">
              <img
                src={educationList[activeEducation].headerImage}
                alt={educationList[activeEducation].title}
                className="education__overlay__header__image"
                loading="lazy"
              />
              <h3 className="education__overlay__title">{educationList[activeEducation].title}</h3>
            </div>
            <div className="education__overlay__description">
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
