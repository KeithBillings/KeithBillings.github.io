import React from "react";
// import { Route, BrowserRouter as Router } from "react-router-dom";

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

function Blog() {
  return (
    <>
      {/* Header and splash */}
      <Row>
        <Col>
          <Jumbotron
            style={{
              padding: "9%",
              animation: "fadeIn ease 2s",
              background: `url(${headerBackgroundImage})`,
              backgroundPosition: "50% 60%",
            }}
            fluid={true}
          >
            <div
              className="onHoverTextToBlue"
              style={{
                fontSize: "4rem",
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
          padding: "0% 10% 0% 10%",
        }}
      >
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
        <Row>
          <Col>
            <BlogCard
              date={"December 9th, 2020"}
              title={"Creating a Single Page Application on GitHub Pages"}
              body={`I ran across an interesting problem creating this blog: GitHub Pages does not natively support Single Page Applictions (SPAs). 
              \n
              I use React for my projects, and therefore I also use react-router-dom. Going to my website: keithbillings.com the page is loaded correctly, but when routed to keithbillings.com/blog, I get a 404! I asked myself why. It worked in development, but it does not work on gh-pages. Strange.
              \n
              Doing some research I found that when the GitHub Pages servers load up a website, it serves it as “/” . When there is a fresh page load for a url like “example.com/foo”, where “/foo” is a frontend route, the GitHub Pages server returns 404 because it knows nothing of “/foo”.`}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Blog;
