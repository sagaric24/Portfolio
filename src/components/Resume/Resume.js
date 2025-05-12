import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// ... other imports

function Resume() {
  return (
    <Container fluid className="resume-section wanted-poster">
      <Particle />
      <Container>
        <h1 className="bounty-name">
          <span className="first-bracket">{"{"}</span>
          My Resume
          <span className="last-bracket">{"}"}</span>
        </h1>
        
        {/* Rest of your resume page content */}
        {/* ... */}
      </Container>
    </Container>
  );
}

export default Resume;