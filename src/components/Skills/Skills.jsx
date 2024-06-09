import React, { useState, useContext } from "react";
import { FaReact, FaNode, FaFigma, FaGithub, FaHtml5, FaPython } from "react-icons/fa";
import { IoLogoJavascript, IoLogoSass } from "react-icons/io";
import { SiNextdotjs, SiMongodb, SiJira } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";

// Context
import { WindowSize } from "../../context/WindowSizeContext";
import OptionalComponent from "../OptionalComponent/OptionalComponent";

function Skills() {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const { isMobile } = useContext(WindowSize);

  // calculate helper function
  function calculateYearsDiff(date) {
    // input the start date
    const startDate = new Date(date);

    // get the current date
    const currentDate = new Date();

    // get the difference between the dates
    const difference = currentDate.getTime() - startDate.getTime();

    // calculate the time in years, rounding
    const years = Math.round(difference / (1000 * 60 * 60 * 24 * 365));

		return years;
  }

  const skillsList = [
    {
      name: "React",
      icon: <FaReact />,
      description: `${calculateYearsDiff("October 2020")} years experience`,
    },
    {
      name: "Javascript",
      icon: <IoLogoJavascript />,
      description: `${calculateYearsDiff("October 2020")} years experience`,
    },
    {
      name: "CSS/SCSS",
      icon: <IoLogoSass />,
      description: `${calculateYearsDiff("October 2020")} years experience`,
    },
    {
      name: "NodeJS",
      icon: <FaNode />,
      description: `${calculateYearsDiff("October 2020")} years experience`,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
      description: `${calculateYearsDiff("March 2021")} years experience`,
    },
    {
      name: "NextJS",
      icon: <SiNextdotjs />,
      description: `${calculateYearsDiff("Jan 29, 2021")} years experience`,
    },
    {
      name: "Github/Git",
      icon: <FaGithub />,
      description: `${calculateYearsDiff("October 2020")} years experience`,
    },
    {
      name: "Typescript",
      icon: <TbBrandTypescript />,
      description: `${calculateYearsDiff("March 2021")} years experience`,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      description: "1 years experience", // I started learning but stopped
    },
    {
      name: "HTML",
      icon: <FaHtml5 />,
      description: `${calculateYearsDiff("October 2020")} years experience`,
    },
    {
      name: "Jira",
      icon: <SiJira />,
      description: `${calculateYearsDiff("March 2021")} years experience`,
    },
    {
      name: "Python",
      icon: <FaPython />,
      description: "1 years experience",
    },
  ];

  return (
    <section className="skills">
      <h2 className="skills__title">Skills</h2>
      <div className="skills__grid">
        {skillsList.slice(0, isMobile ? (showAllSkills ? skillsList.length : 5) : skillsList.length).map((skill, index) => (
          <div key={index} className="skills__card">
            <div className="skills__icon">{skill.icon}</div>
            <div className={`skills__overlay ${index % 2 ? "left" : "right"}`.trim()}>
              <p className="skills__name">{skill.name}</p>
              <p className="skills__description">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
      <OptionalComponent condition={isMobile}>
        <button className="skills__button" onClick={() => setShowAllSkills(!showAllSkills)}>
          <span>{showAllSkills ? "Show Less" : "Show More"}</span>
        </button>
      </OptionalComponent>
    </section>
  );
}

export default Skills;
