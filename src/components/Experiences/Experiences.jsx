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
    {
      title: "University of Oregon Coding Bootcamp",
      description:
        "Attended University of Oregon and learned the MERN stack, other web technologies. Gained a certification of completion for full stack web development.",
      fullDescription: (
        <p>
          During my time at the University of Oregon Coding Bootcamp, I received comprehensive training in Full Stack Web Development, specializing in the MERN
          stack (MongoDB, Express, React, and Node.js). In addition to core technologies, I gained experience with supplemental tools such as HTML, SCSS,
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
    <section className="experiences">
      <h2 className="experiences__title">{"{Experience_and_Education}"}</h2>
      <div className="experiences__container">
        {/* Experience Cards */}
        {experienceList.map((experience, index) => (
          <div key={index} className="experience__item">
            <div className="experience__image-wrapper">
              <img src={experience.headerImage} alt={experience.title} className="experience__image" loading="lazy" />
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
