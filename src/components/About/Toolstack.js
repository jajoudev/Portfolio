import { Col, Row } from "react-bootstrap";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import opera from "../../Assets/TechIcons/Opera.svg";
import github_desktop from "../../Assets/TechIcons/Github-Desktop.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import FirefoxDev from "../../Assets/TechIcons/Firefox Developer.svg"
import FirefoxNightly from "../../Assets/TechIcons/Firefox Nightly.svg"
import Vercel from "../../Assets/TechIcons/Vercel.svg"
import Roblox from "../../Assets/TechIcons/Roblox.png"
import Replit from "../../Assets/TechIcons/Replit.svg"
import Notion from "../../Assets/TechIcons/Notion.png"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={opera} alt="Opera" className="tech-icon-images" />
        <div className="tech-icons-text">Opera</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="w-28px" src={FirefoxDev} alt="Firefox Developer" />
        <div className="tech-icons-text">Firefox Developer</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="w-28px" src={FirefoxNightly} alt="Firefox Nightly" />
        <div className="tech-icons-text">Firefox Nightly</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Notion} alt="notion" className="tech-icon-images w-28px" />
        <div className="tech-icons-text">Notion</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={github_desktop} alt="github_desktop" className="tech-icon-images" />
        <div className="tech-icons-text">Github Desktop</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="w-28px" src={Vercel} alt="Vercel" />
        <div className="tech-icons-text">Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="w-28px" src={Replit} alt="Replit" />
        <div className="tech-icons-text">Replit</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img className="w-28px" src={Roblox} alt="Roblox" />
        <div className="tech-icons-text">Roblox Studio</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
