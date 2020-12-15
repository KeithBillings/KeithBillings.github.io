import React from "react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Jumbotron, Container } from "react-bootstrap";

// local images
import headerBackgroundImage from "../images/DSC_1143.jpg";

// local components
import BlogCard from "../components/BlogCard";

// Initializing the Animate on Scroll functionality
AOS.init();

function Blog({smallWindowTextShadow}) {
  return (
    <>
      {/* Header and splash */}
      <Row id="blog">
        <Col
          style={{
            textShadow: `${smallWindowTextShadow}`,
          }}
        >
          <Jumbotron
            style={{
              animation: "fadeIn ease 2s",
              backgroundImage: `url(${headerBackgroundImage})`,
            }}
          >
            <div
              className="onHoverTextToBlue"
              style={{
                paddingTop: "5%",
              }}
            >
              Keith Billings Blog
            </div>
          </Jumbotron>
        </Col>
      </Row>
      {/* Blog Cards */}
      <Container
        style={{
          padding: "5% 10% 0% 10%",
        }}
      >
        <Row>
          <Col>
            <BlogCard
              date={"December 9th, 2020"}
              title={"Creating a Single Page Application on GitHub Pages"}
              body={`I ran across an interesting problem creating this blog: GitHub Pages does not natively support Single Page Applications (SPAs). 
              \n
              I use React for my projects, and in the past I have used react-router-dom. This allows me to navigate to other pages, rendering different elements as I go. When hosted on a server that allows for multiple routes, this is seemless. However, on GitHub Pages, the sever only allows for one route, is not controlled by the webpage developer, and does not allowing multiple routes. This becomes a problem. So I decided to make a switch.
              \n
              Changing my webpage to use React hooks becomes the favorable option. Instead of the navbar links using anchor tags and pathing to a different domain path, I instead made the links change a React state. Since the links are on the NavBar, my custom component, I named the state NavState, and each link changes the state to the respective name that is clicked on. When the state is changed, a conditonal element in the app will read the state, and change the rendered element based on said state! 
              \n
              This seemed like such an elegant solution and I am happy with my results. Not only did I get around the GitHub pages insufficiency, but using React state actually speeds up the webpage load times! Without the react-router-dom refreshing the page and rerendering unchanged elements, the page navigates smoothly and comfortably. 
              \n
              And most of all, this solution allows for SPAs on GitHub pages.`}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <BlogCard
              date={"December 8, 2020"}
              title={"My First Blog Post!"}
              body={`Today I thought it would be great to add a blog page to my website to log my journey into my new career! It has been a rollercoaster thus far, but I have excitement for the future. 
              \n
              I am now 6 weeks into my job search after the graduation of my coding bootcamp, and so far have applied to 53 places for about 60ish different coding jobs. I started off by scouring the job boards on LinkedIn, Glassdoor, and many others to no avail. It is still early in the search phase, and with COVID cases higher than ever, and the holiday season coming up, there is not much response from many places. 
              \n
              Although job boards have not been much help, I have had the opportunity to do a bit of networking. Everyone I have been fortunate enough to be in contact with has been so gracious and helpful. They are genuinely doing their best to help me out, and have given me good advice! It is very reassuring to know that this industry is filled with good people, all looking out for each other and trying to make the world a better place. 
              \n
              While I have been job hunting, I continue to hone my skills. I have begun a React course on Udemy to further my React skills and add on Redux, GraphQL, Stripe, and Firebase! I really have grown to love front end development.`}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Blog;
