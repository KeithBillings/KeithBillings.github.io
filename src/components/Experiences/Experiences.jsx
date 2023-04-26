import React, { useState, useContext } from "react";

// Images
import brandlive from "../../assets/images/brandlive_logo.png";
import oregonLogo from "../../assets/images/oregon_logo.png";

// Icons
import { IoClose } from "react-icons/io5";

// Context
import ExperiencesContext from "../../context/ExperiencesContext";

export default function Experiences() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [overlayActive, setOverlayActive] = useState(false);

  const experiencesRef = useContext(ExperiencesContext);

  const experienceList = [
    {
      title: "Web Developer",
      description: "I am currently working as a Web Developer at a startup called Brandlive. I am working on the custom dev team, and I am responsible for building and maintaining the frontend features and events.",
      fullDescription:
        "I am currently working as a Web Developer at a startup called Brandlive. I am working on the custom dev team, and I am responsible for building and maintaining the frontend features and events. Front end specialist. Part of the custom development team, and one of the platform dev teams. Creates new features, fixes UI bugs, and builds entire custom events. Works on the streaming platform, integrates metrics, APIs, widgets, custom components, and more. Work has been seen by millions across the globe. Currently in a leadership position, leads projects, teaches, and reviews code, along with normal day to day duties.",
      image: brandlive,
    },
    {
      title: "School",
      description: "I am attended Universiy of Oregon Coding Bootcamp. I learned the MERN stack and other web technologies.",
      fullDescription:
        "During my time at the University of Oregon Coding Bootcamp, I received comprehensive training in Full Stack Web Development, specializing in the MERN stack (MongoDB, Express, React, and Node.js). In addition to core technologies, I gained experience with supplemental tools such as HTML, SCSS, JavaScript, and TypeScript. Through a series of hands-on projects, I developed strong problem-solving skills, honed my ability to work effectively with a team, and learned how to plan sprints, use Jira and Figma, and maintain clear communication. Upon completion of the program, I was awarded a certificate, which recognized my proficiency in Full Stack Web Development and prepared me for a successful career in the industry.",
      image: oregonLogo,
    },
  ];

  const handleCloseOverlay = () => {
    setOverlayActive(!overlayActive);
  };

  const handleExperienceCardClick = (e) => {
    setActiveExperience(e.target.dataset.index);

    // open overlay if not already open
    if (!overlayActive) {
      handleCloseOverlay();
    }
  };

  return (
    <section className="experiences" ref={experiencesRef}>
      <h2 className="experiences__title">My Experience</h2>
      <div className="experiences__container">
        {/* Experience Cards */}
        {experienceList.map((experience, index) => (
          <div key={index} className="experience__item">
            <div className="experience__image-wrapper">
              <img src={experience.image} alt={experience.title} className="experience__image" />
            </div>
            <div className="experience__content">
              <h3 className="experience__title">{experience.title}</h3>
              <p className="experience__description">{experience.description}</p>
              <button data-index={index} className="experience__read-more" target="_blank" rel="noopener noreferrer" onClick={handleExperienceCardClick}>
                <span>Read More</span>
              </button>
            </div>
          </div>
        ))}

        {/* Overlay */}
        <div className={`experience__overlay ${overlayActive ? "active" : ""}`.trim()}>
          {/* exit button */}
          <button className="experience__overlay__exit" onClick={handleCloseOverlay}>
            <IoClose />
          </button>
          <div className="experience__overlay__content">
            <div className="experience__overlay__header">
              <img src={experienceList[activeExperience].image} alt={experienceList[activeExperience].title} className="experience__overlay__image" />
              <h3 className="experience__overlay__title">{experienceList[activeExperience].title}</h3>
            </div>
            <p className="experience__overlay__description">{experienceList[activeExperience].fullDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
