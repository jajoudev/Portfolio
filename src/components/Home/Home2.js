import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import jajou_bubble_tea from "../../Assets/jajou_bubble_tea.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Ma petite <span className="blue biography"> biographie </span>
            </h1>
            <p className="home-about-body">
              Je m’appelle Jahel, je suis
              <i>
                <b className="blue">
                  {" "}
                  développeur full stack.{" "}
                </b>
              </i>
              Je suis actuellement à la fin de ma deuxième année à Eden School, une école digitale et numérique située à Paris, où j’ai développé des bases dans
              <i>
                <b className="blue">
                  {" "}
                  le développement web.{" "}
                </b>
              </i>
              <br />
              <br />
              Au cours de ma formation, j’ai acquis des compétences en
              <i>
                <b className="blue">
                  {" "}
                  HTML, CSS, JavaScript, ReactJS, TailwindCSS, NodeJS, PHP, MySQL et en Accessibilité. {" "}
                </b>
              </i>

              Ces technologies m’ont permis de comprendre comment fonctionne une application, de l’interface utilisateur jusqu’à
              <i>
                <b className="blue">
                  {" "}
                  la gestion des données. {" "}
                </b>
              </i>

              <br />
              <br />
              Je me suis aussi intéressé à d’autres langages comme
              <i>
                <b className="blue">
                  {" "}
                  le LuaU, {" "}
                </b>
              </i>
              une variante du Lua utilisée dans
              <i>
                <b className="blue">
                  {" "}
                  Roblox Studio{" "}
                </b>
              </i>
              , un moteur de jeu permettant de créer des expériences interactives. Je travaille actuellement sur un projet de jeu appelé
              <i>
                <b className="blue">
                  {" "}
                  “Paranoia”{" "}
                </b>
              </i>
              , développé en collaboration avec un ami.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={jajou_bubble_tea} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
