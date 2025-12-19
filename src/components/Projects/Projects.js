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
          Mes plus <strong className="blue">GROS Projets</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques-uns de mes plus gros projets dans lequel j'ai travaillé et qu'ils sont
          <br>
          </br>
          soit finalisé ou encore en <strong className="blue">Working Progress !</strong>
          <br>
          </br>
          J'en suis très fier :D
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Paranoia 💉"
              description="Un jeu sur Roblox que je suis en train de créer avec un ami à moi"
              ghLink="https://github.com/jajoudev/connect-four-game"
              demoLink="https://jajoudev.github.io/connect-four-game/"
            />
          </Col>
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
              title="Jeu Trouvé Le Chiffre secret"
              description="Un jeu où le but c'est de trouver un nombre entre 1 et 10 généré aléatoirement avec un nombre d'essaies limités"
              ghLink="https://github.com/jajoudev/secret-number"
            />
          </Col>
          <h1 className="project-heading">
            Mes <strong className="blue">autres Projets</strong>
          </h1>
          <p style={{ color: "white" }}>
            Mes petits projets :D
          </p>
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
              description="Une page de profil fait pour un ami à moi avec ses réseaux comme un Linktr.ee"
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
