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
  SiGooglecloud,
  SiApachekafka,
  SiRedis,
  SiDbt,
  SiFastapi,
  SiJira,
  SiMlflow,
  SiApacheairflow,
  SiLooker,
  SiOpenai,
  SiR,
  SiKeras,
  SiNumpy,
  SiPandas,
  SiJupyter,
  SiCplusplus,
  SiC,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaAws, FaCode, FaRobot, FaChartBar, FaDatabase } from "react-icons/fa";

function About() {
  return (
    <Container fluid className="about-section wanted-poster">
      <Particle />
      <Container>
  
        <Row style={{ justifyContent: "center", padding: "0px" }}>
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
          </Col>
        </Row>
        
        <h2 className="skill-heading">Programming Languages</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <DiPython />
            <p className="tech-name">Python</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiR />
            <p className="tech-name">R</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiMysql />
            <p className="tech-name">SQL</p>
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
          <Col xs={4} md={2} className="tech-icons">
            <SiKeras />
            <p className="tech-name">Keras</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <FaRobot />
            <p className="tech-name">Hugging Face</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiOpenai />
            <p className="tech-name">OpenAI API</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <FaRobot />
            <p className="tech-name">Langchain</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <FaDatabase />
            <p className="tech-name">FAISS</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <FaCode />
            <p className="tech-name">RAG</p>
          </Col>
        </Row>
        
        <h2 className="skill-heading">Data Engineering & Cloud</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <SiApachespark />
            <p className="tech-name">Spark</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiApachekafka />
            <p className="tech-name">Kafka</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiAmazonaws />
            <p className="tech-name">AWS</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiGooglecloud />
            <p className="tech-name">GCP</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
            <p className="tech-name">MongoDB</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiRedis />
            <p className="tech-name">Redis</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiDbt />
            <p className="tech-name">dbt</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiDocker />
            <p className="tech-name">Docker</p>
          </Col>
        </Row>

        <h2 className="skill-heading">Data Analysis & Visualization</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <SiMysql />
            <p className="tech-name">MySQL</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPostgresql />
            <p className="tech-name">PostgreSQL</p>
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
            <SiLooker />
            <p className="tech-name">Looker Studio</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <FaChartBar />
            <p className="tech-name">A/B Testing</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiNumpy />
            <p className="tech-name">NumPy</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPandas />
            <p className="tech-name">Pandas</p>
          </Col>
        </Row>

        <h2 className="skill-heading">Tools & Frameworks</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <DiGit />
            <p className="tech-name">Git</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiMlflow />
            <p className="tech-name">MLflow</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiApacheairflow />
            <p className="tech-name">Airflow</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;