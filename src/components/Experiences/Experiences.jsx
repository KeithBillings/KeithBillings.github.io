import React from "react";

// Images
import brandlive from "../../assets/images/brandlive_logo.png";

export default function Experiences() {
  const experienceList = [
    {
      title: "Web Developer",
      description: "I am currently working as a Web Developer at a startup called Brandlive. I am working on the custom dev team, and I am responsible for building and maintaining the frontend features and events.",
      image: brandlive,
      link: "https://www.brandlive.com/",
    },
    {
      title: "Frontend Developer",
      description: "I worked as a Frontend Developer at Brandlive. I was responsible for building and maintaining the frontend of the Brandlive web app. I also worked on the frontend of the Brandlive Studio web app.",
      image: brandlive,
      link: "https://www.brandlive.com/",
    },
  ];

  return (
    <section className="experiences">
      <h2 className="experiences__title">My Experience</h2>
      <div className="experiences__container">
        {experienceList.map((experience, index) => (
          <div key={index} className="experience__item">
            <div className="experience__image-wrapper">
              <img src={experience.image} alt={experience.title} className="experience__image" />
            </div>
            <div className="experience__content">
              <h3 className="experience__title">{experience.title}</h3>
              <p className="experience__description">{experience.description}</p>
              <a href={experience.link} className="experience__read-more" target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
