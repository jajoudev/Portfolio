import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Les jours où j'ai <strong className="blue">Codé</strong>
      </h1>
      <GitHubCalendar
        username="jajoudev"
        blockSize={30}
        blockMargin={10}
        color="#8A8AFF"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
