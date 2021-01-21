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
import BlogCard from "../components/BlogCard/BlogCard.component";

// data
import BlogData from "../data/blog.data";

// Initializing the Animate on Scroll functionality
AOS.init();

function Blog({ smallWindowTextShadow }) {
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
        {BlogData.map(({ date, title, body }, index) => {
          return <BlogCard key={index} date={date} title={title} body={body} />;
        })}
      </Container>
    </>
  );
}

export default Blog;
