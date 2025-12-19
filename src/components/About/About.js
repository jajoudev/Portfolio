import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import JajouAbout from "../../Assets/jajou_about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ paddingBottom: "20px"}}>
                À propos de <strong className="blue">moi</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={JajouAbout} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading">
            Les <strong className="blue">technologies</strong> que <strong className="blue">j'utilise</strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="blue">Les outils</strong> que <strong className="blue">j'utilise</strong>
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
