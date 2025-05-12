import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiMysql,
  SiTableau,
  SiPowerbi,
  SiApachespark,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPostgresql,
  SiAmazonaws,
  SiDocker,
} from "react-icons/si";

function About() {
  return (
    <Container fluid className="about-section wanted-poster">
      <Particle />
      <Container>
  

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "20px",
            }}
          >
            <h1 className="about-heading">
              Professional <strong className="purple">Skillset </strong>
            </h1>
            {/* <p className="about-text">
              As a Data Professional, I specialize in transforming raw data into meaningful insights.
              My expertise spans across data analysis, visualization, machine learning, and data engineering.
              I am passionate about solving complex problems and delivering data-driven solutions.
            </p> */}
          </Col>
        </Row>
        
        <h2 className="skill-heading">Data Analysis & Visualization</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <DiPython />
            <p className="tech-name">Python</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiTableau />
            <p className="tech-name">Tableau</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPowerbi />
            <p className="tech-name">Power BI</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiMysql />
            <p className="tech-name">MySQL</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPostgresql />
            <p className="tech-name">PostgreSQL</p>
          </Col>
        </Row>

        <h2 className="skill-heading">Machine Learning & AI</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <SiScikitlearn />
            <p className="tech-name">Scikit-learn</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiTensorflow />
            <p className="tech-name">TensorFlow</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPytorch />
            <p className="tech-name">PyTorch</p>
          </Col>
        </Row>

        <h2 className="skill-heading">Data Engineering & Cloud</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
            <p className="tech-name">Node.js</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiApachespark />
            <p className="tech-name">Spark</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiAmazonaws />
            <p className="tech-name">AWS</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
            <p className="tech-name">MongoDB</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiDocker />
            <p className="tech-name">Docker</p>
          </Col>
        </Row>

        <h2 className="skill-heading">Programming & Tools</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
            <p className="tech-name">JavaScript</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiReact />
            <p className="tech-name">React</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiJava />
            <p className="tech-name">Java</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiGit />
            <p className="tech-name">Git</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;