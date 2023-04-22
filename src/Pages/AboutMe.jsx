import React from "react";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hello! I am Keith Billings, a highly motivated front-end specialist with a passion for creating exceptional web experiences. Based in Beaverton, Oregon, I have honed my expertise in React and other web technologies through professional
        experience at companies like Brandlive. My adaptability and enthusiasm for learning new skills make me a standout developer, especially when working with React. I am also proficient in HTML, CSS, JavaScript, and other web technologies.
      </p>
      <p>
        Outside of my professional pursuits, I am dedicated to personal growth and assisting others in reaching their full potential. With a positive attitude and strong leadership skills, I am committed to cultivating a collaborative and inclusive
        environment for both my colleagues and clients. My genuine interest in staying updated with the latest advancements in web development ensures that I am always equipped to provide the best solutions. In my free time, I am obsessed with cars,
        I am a lifelong Formula 1 fan, reading educational and fascinating books, and spending time with my family. I am also a fan of the Portland Trail Blazers.
      </p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
}