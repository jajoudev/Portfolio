import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {/* <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="blue">Jahel</span>{" "}
            from <span className="blue">France</span>.
            <br />
            I’m currently working as a{" "}
            <span className="blue">Web Developer</span> 
            at{" "}
            <span className="purple">Juspay</span>.
            <br />I hold an Integrated M.Sc. (IMSc) in{" "}
            <span className="purple">Mathematics and Computing</span> from{" "}
            <span className="purple">BIT Mesra</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p> */}

          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer aux jeux vidéos 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Créer du contenu sur Youtube et Twitch 🎥
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager 🌍 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Parler c'est déjà commencer à guérir"{" "}
          </p>
          <footer className="blockquote-footer">Jahel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
