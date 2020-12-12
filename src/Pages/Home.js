import React, { useEffect, useState } from "react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Jumbotron } from "react-bootstrap";

// local
import "../App.css";
import firstImage from "../images/DSC_1398.jpg";
import secondImage from "../images/DSC_1143.jpg";
import thirdImage from "../images/DSC_0893.jpg";
import imgKeith1 from "../images/me.jpg";
import imgKeith2 from "../images/me2.jpg";
import imgKeith3 from "../images/me3.jpg";
import employeeDirectoryImage from "../images/thumbs/employeeDirectory.jpg";
import partyPlannerImage from "../images/thumbs/PartyPlanner.png";
import aboutYourBirthdayImage from "../images/thumbs/BirthdayApp.png";
import weatherAppImage from "../images/thumbs/WeatherApp.png";
import keithResume from "../images/Resume.pdf";
import CodeProject from "../components/CodeProject";
import advocateImage from "../images/advotecate.png";

// Initializing the Animate on Scroll functionality
AOS.init();

function Home() {
  const [index, setIndex] = useState(0);

  const backgroundImages = [firstImage, secondImage, thirdImage];
  const imgKeith = [imgKeith1, imgKeith2, imgKeith3];

  function cycleImages() {
    if (index === 2) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      cycleImages();
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <>
      {/* Splash and Header */}
      <Row>
        <Col>
          <Jumbotron
            style={{
              animation: "fadeIn ease 2s",
              background: `url(${backgroundImages[index]})`,
            }}
          >
            <div className="onHoverTextToBlue">Keith Billings</div>
            <div className="jumbotronSecondary">FULL STACK DEVELOPER</div>
          </Jumbotron>
        </Col>
      </Row>
      {/* Body */}
      <Row id="about" className="padding">
        <Col data-aos="fade-up">
          <h2>About Me</h2>
          <br></br>
          <p className="openSans" data-aos="fade-up">
            I am a Full Stack Web Developer with skills in Javascript, React,
            Mongo, HTML, CSS, Node, Express, MySQL, Sequelize, Bootstrap, and
            more! I am motivated by a creative environment, an empowering
            workplace, and building and working with teams. My goal is to be a
            part of an innovative group that does high quality work and utilizes
            my strengths.
          </p>
          <p className="openSans" data-aos="fade-up">
            My strength in teamwork and leadership come from volunteer
            firefighting and working as a maintenance engineer. I can use those
            transferable skills in my next career path. Building applications in
            groups prepared me for cross collaboration and version control.
          </p>
        </Col>
      </Row>
      <Row>
        <Col id="codingPortfolio">
          <br></br>
        </Col>
      </Row>
      <Row className="padding">
        <Col data-aos="fade-up">
          <h2>Coding Portfolio</h2>
        </Col>
      </Row>
      <Row className="padding">
        <CodeProject
          projectTitle={"adVOTEcate"}
          projectDescription={
            "This was our final group project of our bootcamp. This app is your advocate to your voting needs! We aim to provide users easily accesible information to check if they are registered to vote, learn how to register if they are not, search where the nearest ballot drop boxes are, and set reminders!"
          }
          deploymentLink={"https://advotecate.herokuapp.com/"}
          repositoryLink={"https://github.com/KeithBillings/adVOTEcate"}
          image={advocateImage}
          imageAlt={"screenshot of advotecate front page"}
        />
      </Row>
      <Row className="padding">
        <CodeProject
          projectTitle={"Employee Directory"}
          projectDescription={
            "This is a React app that maps over data and creates a stylized, sortable, and filterable table."
          }
          deploymentLink={"https://employee-directory-kmb.herokuapp.com/"}
          repositoryLink={"https://github.com/KeithBillings/Employee-Directory"}
          image={employeeDirectoryImage}
          imageAlt={"screenshot of employee directory page"}
        />
        <CodeProject
          data-aos="fade-up"
          projectTitle={"Party Planning Committee"}
          projectDescription={
            "This is my second major group project. It was a joint effort between myself, Max Edmonds, Brian Soldani, and Alex Shafer. This project was our first fully full-stack project. I learned a lot about saving information on a database, using the db to serve different pages, how to create working routers, and using homemade APIs. I learned about backend the most on this project. I also noticed by observing my classmates that my front end CSS and styling skills are also something I have room to grow on. My backend and logic skills are really coming along, and I am proud of that, but to be a proper full stack developer you need to be well rounded in all areas!"
          }
          deploymentLink={"https://partyplanningcommittee.herokuapp.com/"}
          repositoryLink={"https://github.com/KeithBillings/Party-Planner"}
          image={partyPlannerImage}
          imageAlt={"screenshot of party planning committee front page"}
        />
      </Row>
      <Row className="padding">
        <CodeProject
          projectTitle={"About Your Birthday App"}
          projectDescription={
            "This was our first major class project involving teams. The class was divided into groups of 3-4 members and we were allowed to research and come up with our own project to work on. Since this was our first team assignment, and our first self directed project, our team quickly decided that the project must be something fun and entertaining. It didn't take much time to focus on a topic that everyone could relate to: Birthdays! We learned how to use external APIs like NASA, birthday facts, number facts, zoidac, and more!"
          }
          deploymentLink={
            "https://keithbillings.github.io/About-Your-Birthday/"
          }
          repositoryLink={
            "https://github.com/KeithBillings/About-Your-Birthday"
          }
          image={aboutYourBirthdayImage}
          imageAlt={"screenshot of about your birthday app front page"}
        />
        <CodeProject
          projectTitle={"Weather App"}
          projectDescription={
            "On this homework assignment I was tasked with creating a weather dashboard. It is stylish and minimal. It has a rotating background of seasonal images, and a sleek design. Enter the city query in the text input box and it will return current live weather data, and a 5 day forecast. The site also logs your search history. When you first visit the site, you can click on one of your past searches and it will search that city again. This uses AJAX calls to a weather API to GET current weather information."
          }
          deploymentLink={"https://keithbillings.github.io/Weather-Dashboard/"}
          repositoryLink={"https://github.com/KeithBillings/Weather-Dashboard"}
          image={weatherAppImage}
          imageAlt={"screenshot of keith billings weather app"}
        />
      </Row>
      {/* Contact Info */}
      <Row className="padding">
        <Col id="contact" data-aos="fade-up">
          <h2>Contact Me</h2>
          <br></br>
          <div
            className="openSans"
            data-aos="fade-up"
            style={{
              paddingBottom: "2rem",
            }}
          >
            <p>I am currently available for work</p>
            <p>
              Email:{" "}
              <a
                style={{
                  fontWeight: "600",
                }}
                href="mailto:keithbillingsbusiness@gmail.com"
              >
                {" "}
                keithbillingsbusiness@gmail.com{" "}
              </a>
            </p>
            <p>
              Phone Number:{" "}
              <a
                style={{
                  fontWeight: "600",
                }}
                href="tel:5037099897"
              >
                {" "}
                (503) 709-9897{" "}
              </a>
            </p>
            <a style={{ fontWeight: 600 }} href={`${keithResume}`} download>
              Download my resume (PDF)
            </a>
          </div>
        </Col>
        <Col>
          <img src={`${imgKeith[index]}`} id="imgKeith" alt="Keith Billings" />
        </Col>
      </Row>
    </>
  );
}

export default Home;
