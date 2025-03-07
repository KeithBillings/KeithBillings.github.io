import React, { useContext } from "react";

export default function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">{"{About}"}</h2>
      <div className="about-me__content">
        <div className="about-me__description">
          <p>
            I'm a front-end specialist with a passion for building modern, user-friendly web experiences. With expertise in React and a diverse background in
            fields like construction, firefighting, and customer service, I bring adaptability, problem-solving skills, and a strong work ethic to every
            project. When I'm not coding, you'll find me staying active, exploring new tech, or geeking out over cars and Formula 1.
          </p>
        </div>
        <div className="about-me__image"></div>
      </div>
    </section>
  );
}
