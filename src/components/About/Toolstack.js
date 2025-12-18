import { Col, Row } from "react-bootstrap";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import opera from "../../Assets/TechIcons/Opera.svg";
import github_desktop from "../../Assets/TechIcons/Github-Desktop.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={opera} alt="Opera" className="tech-icon-images" />
        <div className="tech-icons-text">Opera</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={github_desktop} alt="github_desktop" className="tech-icon-images" />
        <div className="tech-icons-text">Github Desktop</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
