import React from "react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Bootstrap components
import { Row, Col } from "react-bootstrap";

// Initializing the Animate on Scroll functionality
AOS.init();

function BlogCard({ date, title, body }, key) {
  return (
    <>
      <Row>
        <Col>
          <h6>{date}</h6>
          <h2>{title}</h2>
        </Col>
      </Row>
      <Row>
        <Col className="openSans">
          {body.split("\n").map((i) => {
            return <p>{i}</p>;
          })}
        </Col>
      </Row>
      <hr
        style={{
          width: "75%",
          borderWidth: "3px",
          borderColor: "darkgray",
        }}
      />
    </>
  );
}

export default BlogCard;