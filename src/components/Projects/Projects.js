import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import connect_four from "../../Assets/Projects/connect-four.png"
import ticket_js from "../../Assets/Projects/ticket-js.png"
import secret_number from "../../Assets/Projects/secret-number.png"
import blackaerod_profile from "../../Assets/Projects/blackaerod-profile.png"

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
              imgPath={connect_four}
              isBlog={false}
              title="Puissance 4"
              description="Vous vous ennuyez ? Tester mon projet qui est un jeu que tout le monde connait qui s'appelle le Puissance 4 où le but c'est d'aligner 4 jetons de sa couleur pour gagner la partie, jouer à deux ou avec un CPU"
              ghLink="https://github.com/jajoudev/connect-four-game"
              demoLink="https://jajoudev.github.io/connect-four-game/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={secret_number}
              isBlog={false}
              title="Jeu Chiffre secret (Bug)"
              description="Un jeu où le but c'est de trouver un nombre entre 1 et 10 généré aléatoirement avec un nombre d'essaies limités"
              ghLink="https://github.com/jajoudev/secret-number"
              demoLink="https://secret-number-game-rm9sm2ocr-jajoudevs-projects.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticket_js}
              isBlog={false}
              title="Ticket JS"
              description="Juste un simple projet permettant de créer un ticket avec une date de création, un image ajouté, une adresse email, votre nom, votre nom github"
              ghLink="https://github.com/jajoudev/tickets-jsdom"
              demoLink="https://tickets-jsdom-bvdggzw1j-jajoudevs-projects.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blackaerod_profile}
              isBlog={false}
              title="Blackaerod's Profile Page"
              description="Juste un simple projet permettant de créer un ticket avec une date de création, un image ajouté, une adresse email, votre nom, votre nom github"
              ghLink="https://github.com/jajoudev/blackaerod-profile"
              demoLink="https://blackaerod-profile.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
