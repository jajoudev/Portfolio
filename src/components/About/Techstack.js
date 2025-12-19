import { Col, Row } from "react-bootstrap";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Lua from "../../Assets/TechIcons/Lua.svg"
import CSS from "../../Assets/TechIcons/CSS.svg"
import HTML from "../../Assets/TechIcons/HTML.svg"
import MySQL from "../../Assets/TechIcons/MySQL.png"
import PHP from "../../Assets/TechIcons/PHP.svg"
import Bootstrap from "../../Assets/TechIcons/Bootstrap.png"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img className="w-28px" src={HTML} alt="html" />
        <div className="tech-icons-text">HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="w-28px" src={CSS} alt="css" />
        <div className="tech-icons-text">CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="w-28px" src={PHP} alt="PHP" />
        <div className="tech-icons-text">PHP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="w-28px" src={MySQL} alt="MySQL" />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="w-28px" src={Bootstrap} alt="boostrap" />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="w-28px" src={Lua} alt="lua" />
        <div className="tech-icons-text">Lua</div>
      </Col>
    </Row>
  );
}

export default Techstack;
