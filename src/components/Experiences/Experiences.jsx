import React, { useState, useContext } from "react";

// Images
import brandlive from "../../assets/images/brandlive_logo.png";
import oregonLogo from "../../assets/images/oregon_logo.png";
import goldsmithsLogo from "../../assets/images/goldsmiths_logo.png";

// Icons
import { IoClose } from "react-icons/io5";

export default function Experiences() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [overlayActive, setOverlayActive] = useState(false);

  const experienceList = [
    {
      title: "Web Developer",
      description:
        "I am currently working as a Web Developer at a startup called Brandlive. I am working on the custom dev team, and I am responsible for building and maintaining the front-end features and events.",
      fullDescription:
        "I am currently working as a Web Developer at a startup called Brandlive. I am working on the custom dev team, and I am responsible for building and maintaining the front-end features and events. Front-end specialist. Part of the custom development team, and one of the platform dev teams. Creates new features, fixes UI bugs, and builds entire custom events. Works on the streaming platform, integrates metrics, APIs, widgets, custom components, and more. Work has been seen by millions across the globe. Currently in a leadership position, leads projects, teaches, and reviews code, along with normal day to day duties.",
      image: brandlive,
    },
    {
      title: "University of Oregon Coding Bootcamp",
      description:
        "I attended University of Oregon where I learned the MERN stack, other web technologies, and gained a certification of completetion for full stack web development.",
      fullDescription:
        "During my time at the University of Oregon Coding Bootcamp, I received comprehensive training in Full Stack Web Development, specializing in the MERN stack (MongoDB, Express, React, and Node.js). In addition to core technologies, I gained experience with supplemental tools such as HTML, SCSS, JavaScript, and TypeScript. Through a series of hands-on projects, I developed strong problem-solving skills, honed my ability to work effectively with a team, and learned how to plan sprints, use Jira and Figma, and maintain clear communication. Upon completion of the program, I was awarded a certificate, which recognized my proficiency in Full Stack Web Development and prepared me for a successful career in the industry.",
      image: oregonLogo,
    },
    {
      title: "University of London - Goldsmiths",
      description:
        "I currently attend University of London - Goldsmiths where I am learning the fundamentals of computer science and persuing a BSc in Computer Science.",
      fullDescription:
        "I am currently attending University of London - Goldsmiths where I am learning the fundamentals of computer science and persuing a BSc in Computer Science. I am learning about algorithms, data structures, and the mathematics behind computer science. I am also learning about the history of computer science and the impact it has has on the world.",
      image: goldsmithsLogo,
    },
  ];

  const handleCloseOverlay = () => {
    console.log("toggling overlay");
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
    <section className="experiences">
      <h2 className="experiences__title">My Experience and Education</h2>
      <div className="experiences__container">
        {/* Experience Cards */}
        {experienceList.map((experience, index) => (
          <div key={index} className="experience__item">
            <div className="experience__image-wrapper">
              <img src={experience.image} alt={experience.title} className="experience__image" loading="lazy" />
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
          <div className="experience__overlay__content">
            <button className="experience__overlay__exit" onClick={handleCloseOverlay}>
              <IoClose />
            </button>
            <div className="experience__overlay__header">
              <img
                src={experienceList[activeExperience].image}
                alt={experienceList[activeExperience].title}
                className="experience__overlay__image"
                loading="lazy"
              />
              <h3 className="experience__overlay__title">{experienceList[activeExperience].title}</h3>
            </div>
            <p className="experience__overlay__description">{experienceList[activeExperience].fullDescription}</p>
          </div>
          <div className="experience__overlay__background" onClick={handleCloseOverlay}></div>
        </div>
      </div>
    </section>
  );
}
