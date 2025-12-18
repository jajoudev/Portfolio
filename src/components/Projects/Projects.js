import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ticket_js from "../../Assets/Projects/ticket-js.png"
import secret_number from "../../Assets/Projects/secret-number.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récents <strong className="blue">Projets</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques-uns de mes projets où j'ai travaillé
          <br>
          </br>
          et dans lequel j'en suis fier.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Puissance 4"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/jajoudev/connect-four-game"
              demoLink="https://jajoudev.github.io/connect-four-game/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ticket JS"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/jajoudev/tickets-jsdom"
              demoLink="https://tickets-jsdom-bvdggzw1j-jajoudevs-projects.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={secret_number}
              isBlog={false}
              title="Jeu Chiffre secret (Bug)"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/jajoudev/secret-number"
              demoLink="https://secret-number-game-rm9sm2ocr-jajoudevs-projects.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
