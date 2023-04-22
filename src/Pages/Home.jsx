import keith from "../assets/images/keith.png";

export default function Home() {
  // use the useContext hook to access the WindowSize context

  // Title card for the home page. Has text on the left and an image on the right. The text will have a greeting, my name, and my title. The image will be a picture of me.
  function Hero() {
    return (
      <div className={"hero"}>
        <div className="hero-text">
          <h1 className="hero-text__greeting">Hello, World! I'm,</h1>
          <h1 className="hero-text__name">Keith Billings</h1>
          <h1 className="hero-text__title">Web developer</h1>
        </div>
        <div className="hero-image">
          <img src={keith} alt="Keith Billings" />
        </div>
      </div>
    );
  }

  return (
    <div className="home">
      <Hero />
    </div>
  );
}
