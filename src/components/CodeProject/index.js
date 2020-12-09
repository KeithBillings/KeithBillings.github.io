import React from "react";

// Bootstrap Components
import {
  Col,
  Card,
  Button,
  Accordion,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function CodeProject({
  projectTitle,
  projectDescription,
  deploymentLink,
  image,
  repositoryLink,
}) {
  return (
    <Col data-aos="fade-up">
      <Accordion>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Accordion.Toggle
              className="onHoverTextToBlue onHoverPointer"
              as={Card.Title}
              eventKey="0"
            >
              {
                <OverlayTrigger
                  key={"bottom"}
                  placement={"bottom"}
                  overlay={
                    <Tooltip id={`tooltip1`}>Click to learn more</Tooltip>
                  }
                >
                  <Card.Title>{projectTitle}</Card.Title>
                </OverlayTrigger>
              }
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{projectDescription}</Card.Body>
            </Accordion.Collapse>
            <Button href={deploymentLink} variant="link">
              Deployment
            </Button>
            <Button href={repositoryLink} variant="link">
              GitHub Repository
            </Button>
          </Card.Body>
        </Card>
      </Accordion>
    </Col>
  );
}

export default CodeProject;
