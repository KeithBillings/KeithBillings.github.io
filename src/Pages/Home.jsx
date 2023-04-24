import { useRef, useEffect } from "react";

// Components
import AboutMe from "../components/AboutMe/AboutMe";

// Images
import keith from "../assets/images/IMG_0944.png";

export default function Home(props) {
  // Refs
  const greeting = useRef(null);
  const title = useRef(null);

	// Props
  const { scrollTo } = props;

	// Greeting and title animation
  useEffect(() => {
    // Greeting animation
    const greetingText = "Hello, World! I'm,";
    // Clear greeting
    greeting.current.innerHTML = "";

    // Loop through each letter in greetingText
    for (let i = 0; i < greetingText.length; i++) {
      setTimeout(() => {
        if (!greeting.current) {
          return;
        }
        greeting.current.innerHTML += greetingText[i];
      }, 80 * i);
      // 80ms delay between each letter
      // total delay = 80 * greetingText.length = 80 * 18 = 1440ms
    }

    // Title animation
    const titleText = "Web developer";
    // Clear title
    title.current.innerHTML = "";
    // Loop through each letter in titleText
    for (let i = 0; i < titleText.length; i++) {
      setTimeout(() => {
        if (!title.current) {
          return;
        }
        title.current.innerHTML += titleText[i];
      }, 80 * i + 1440); // add 1440ms delay to start after greeting animation
    }
  }, []);

  // Scroll to about section
  useEffect(() => {
    if (scrollTo === "about") {
      document.querySelector(".about-me").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [scrollTo]);

  function Hero() {
    return (
      <div className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="hero-text__greeting" ref={greeting}>
              Hello, World! I'm,
            </h1>
            <h1 className="hero-text__name">Keith Billings</h1>
            <h1 className="hero-text__title" ref={title}>
              Web developer
            </h1>
          </div>
          <div className="hero-image">
            <img src={keith} alt="Keith Billings" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="home">
      <Hero />
      <AboutMe />
    </div>
  );
}
