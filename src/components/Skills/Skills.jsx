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

  const skillsList = [
    {
      name: "React",
      icon: <FaReact />,
      description: "4 years experience",
    },
    {
      name: "Javascript",
      icon: <IoLogoJavascript />,
      description: "4 years experience",
    },
    {
      name: "CSS/SCSS",
      icon: <IoLogoSass />,
      description: "4 years experience",
    },
    {
      name: "NodeJS",
      icon: <FaNode />,
      description: "3 years experience",
    },
    {
      name: "Figma",
      icon: <FaFigma />,
      description: "2 years experience",
    },
    {
      name: "NextJS",
      icon: <SiNextdotjs />,
      description: "2 years experience",
    },
    {
      name: "Github/Git",
      icon: <FaGithub />,
      description: "4 years experience",
    },
    {
      name: "Typescript",
      icon: <TbBrandTypescript />,
      description: "2 years experience",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      description: "1 years experience",
    },
    {
      name: "HTML",
      icon: <FaHtml5 />,
      description: "4 years experience",
    },
    {
      name: "Jira",
      icon: <SiJira />,
      description: "2 years experience",
    },
    {
      name: "Python",
      icon: <FaPython />,
      description: ">1 years experience. Just started learning!",
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
