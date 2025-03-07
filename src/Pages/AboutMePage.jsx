import mochi from "../assets/images/mochi.png";
import keith3 from "../assets/images/keith3.png";
import bmw from "../assets/images/bmw.png";

// about me page
export default function AboutMePage() {
  return (
    <div className="about-me-page">
      <h1 className="about-me-page__title">{"{About_Me}"}</h1>

      <div className="about-me-page__content">
        <div className="about-me-page__description">
          <p>
            I am a highly motivated front-end specialist who enjoys building all sorts of things. From modern websites that look stunning, to utilitarian web
            tools, or even mutating data and connecting APIs. My adaptability and enthusiasm for learning new skills make me a standout developer. I believe it
            comes from my rich background in many different fields, including blue collar construction and building maintenance, customer service, bartending,
            and fire fighting.
          </p>
          <p>
            Outside of work, I'm dedicated to personal growth through fitness, diet, and education. As a lifelong athlete, I bring discipline and confidence to
            everything I do. I'm also a passionate foodie and love home cooking, which keeps my creativity and curiosity well fed. I love diving into random
            rabbit holes and learning new skills, often surprising my friends with the latest interesting thing I've picked up. For me, life is about constant
            improvement, both for myself and the world around me.
          </p>
          <p>
            In my free time, I enjoy reading, video games, staying fit, and spending time with friends and family. I'm also a proud cat dad to a wild little
            girl named Mochi, who I found in the jungles of Hawaii. She is my whole heart and soul in a crazy black ball of energy. Lastly, my greatest passion
            is cars. I grew up on Top Gear and Speed Racer, and I am a lifelong Formula 1 fan. Every weekend I go to Cars and Coffee with my dad, the man
            responsible for my love of cars. One day I hope to combine my passion for cars with my skills in web development or computer science.
          </p>
        </div>

        <div className="about-me-page__images">
          <div className="image">
            <img src={keith3} alt="Keith" />
          </div>
          <div className="image">
            <img src={mochi} alt="Mochi" />
          </div>
          <div className="image">
            <img src={bmw} alt="BMW" />
          </div>
        </div>
      </div>
    </div>
  );
}
