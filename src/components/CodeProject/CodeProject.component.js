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
  imageAlt,
}) {
  return (
    <Col data-aos="fade-up">
      <Accordion>
        <Card>
          <Accordion.Toggle
            className="onHoverTextToBlue onHoverPointer"
            as={Card.Title}
            eventKey="0"
          >
            {
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={<Tooltip id={`tooltip1`}>Click to learn more</Tooltip>}
              >
                <div>
                  <Card.Img
                    variant="top"
                    src={image}
                    alt={imageAlt}
                    style={{ marginBottom: "1rem" }}
                  />
                  <Card.Title style={{ marginBottom: "0" }}>
                    {projectTitle}
                  </Card.Title>
                </div>
              </OverlayTrigger>
            }
          </Accordion.Toggle>
          <Card.Body style={{ paddingTop: "0" }}>
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
