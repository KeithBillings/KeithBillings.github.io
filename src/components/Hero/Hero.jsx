import { useRef, useEffect } from "react";

// Images
import portlandWebp from "../../assets/images/portland.webp";
import keithWebp from "../../assets/images/keith2.webp";

export default function Hero() {
  // Refs
  const greeting = useRef(null);
  const title = useRef(null);

  // Greeting and title animation
  useEffect(() => {
    // Greeting animation
    const greetingText = "Hello, World! I am:";
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
      setTimeout(
        () => {
          if (!title.current) {
            return;
          }
          title.current.innerHTML += titleText[i];
        },
        80 * i + 1440,
      ); // add 1440ms delay to start after greeting animation
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__text">
          {/* Screen readers get the full text; the typing animation is hidden from them so it isn't read mid-type */}
          <p className="hero__greeting">
            <span className="visually-hidden">Hello, World! I am:</span>
            <span ref={greeting} aria-hidden="true">
              Hello, World! I am:
            </span>
          </p>
          <h1 className="hero__name">Keith Billings</h1>
          <p className="hero__title">
            <span className="visually-hidden">Web developer</span>
            <span ref={title} aria-hidden="true">
              Web developer
            </span>
          </p>
        </div>
        <div className="hero__image">
          <picture>
            <img src={keithWebp} alt="Keith Billings" />
          </picture>
        </div>
      </div>
      <div className="hero__background-image">
        <picture>
          <img src={portlandWebp} alt="Portland Map" />
        </picture>
      </div>
    </section>
  );
}
