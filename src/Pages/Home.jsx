import { useEffect } from "react";

// Components
import AboutMe from "../components/AboutMe/AboutMe";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Experiences from "../components/Experiences/Experiences";
import Companies from "../components/Companies/Companies";
import ContactInfo from "../components/ContactInfo/ContactInfo";

export default function Home(props) {
  // Props
  const { scrollTo } = props;

  // Scroll to about section
  useEffect(() => {
    if (scrollTo === "about") {
      document.querySelector(".about-me").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [scrollTo]);

  return (
    <div className="home">
      <Hero />
      <div className="about-and-skills">
        <AboutMe />
        <Skills />
      </div>
      <Experiences />
      <Companies />
      <ContactInfo />
    </div>
  );
}
