import React from "react";

export default function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">{"{About}"}</h2>
      <div className="about-me__content">
        <div className="about-me__description">
          <p>
            Web developer with over 5 years of experience. Attended University of Oregon and University of London. Proficient in React.js, HTML, CSS and SCSS,
            Javascript, Typescript, Node.js, Figma, Next.js, and other web technologies. Gained leadership experience while at Brandlive as the head of the
            custom development team. Worked with many Fortune 100 brands, communicated often directly with clients, and received accolades for building a
            Javascript library similar to jQuery.
          </p>
        </div>
        <div className="about-me__image"></div>
      </div>
    </section>
  );
}
