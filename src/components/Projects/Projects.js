import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Correctly import only the icons we need from specific packages
import { DiPython } from "react-icons/di";
import { SiTensorflow, SiApachekafka } from "react-icons/si";
import { FaRobot } from "react-icons/fa";

// Import SVG images directly
import dlPipelineImg from "../../Assets/dl-pipeline.svg";
import spotifyAnalysisImg from "../../Assets/spotify-analysis.svg";
import ragAssistantImg from "../../Assets/rag-assistant.svg";
import newsRecommenderImg from "../../Assets/news-recommender.svg";

function Projects() {
  return (
    <Container fluid className="project-section wanted-poster">
      <Particle />
      <Container>
        <h1 className="bounty-name">
          <span className="first-bracket">{"{"}</span>
          Projects
          <span className="last-bracket">{"}"}</span>
        </h1>
        <p className="project-description normal-font">
          Here are a few treasures I've discovered on my data journey. Each project represents 
          a unique challenge conquered through code, creativity, and the occasional all-nighter.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card-col">
            <ProjectCard
              imgPath={dlPipelineImg}
              icon={<SiTensorflow className="project-icon" />}
              title="End-to-End Deep Learning Pipeline"
              subtitle="Disease Classification"
              description="Built a deep learning model in TensorFlow achieving ~98% accuracy with automated version control using MLflow and DVC. Deployed via Docker-based CI/CD to AWS EC2, reducing deployment time to 6m 38s with robust, production-ready MLOps."
              techStack="TensorFlow | Keras | CNN | MLOps | CI/CD | Git | Flask | PyTorch"
              demoLink="#"
              ghLink="#"
            />
          </Col>

          <Col md={6} className="project-card-col">
            <ProjectCard
              imgPath={spotifyAnalysisImg}
              icon={<DiPython className="project-icon" />}
              title="Statistical Analysis of Spotify Streaming Data"
              subtitle="Music Data Analytics"
              description="Performed data wrangling and statistical testing to reduce inconsistencies by 30%, using Chi-square, and Shapiro-Wilk tests. Applied regression models to handle MNAR data, achieving R² of 0.95 to uncover key predictors of stream performance."
              techStack="R | SQL | t-test | Chi-square | Regression | Hypothesis Testing | Statistics"
              demoLink="#"
              ghLink="#"
            />
          </Col>

          <Col md={6} className="project-card-col">
            <ProjectCard
              imgPath={ragAssistantImg}
              icon={<FaRobot className="project-icon" />}
              title="RAG-Based Renewable Energy GenAI Assistant"
              subtitle="Intelligent Query Engine"
              description="Engineered a GenAI-based retrieval system using RAG and FAISS across 1,000+ datasets, increasing retrieval accuracy by 50%. Developed a scalable FastAPI backend, reducing API latency to under 200ms, supporting production-ready GenAI workflows."
              techStack="LLM | Langchain | FAISS | RAG | OpenAPI | Hugging Face | Prompt Engineering"
              demoLink="#"
              ghLink="#"
            />
          </Col>

          <Col md={6} className="project-card-col">
            <ProjectCard
              imgPath={newsRecommenderImg}
              icon={<SiApachekafka className="project-icon" />}
              title="Real-Time Big Data News Recommender System"
              subtitle="Real-Time Content Recommendations"
              description="Developed a real-time recommendation engine using Kafka for ingestion and Spark Streaming for dynamic content filtering. Designed Docker pipelines for sentiment analysis and user profiling, orchestrated with Airflow."
              techStack="Apache Kafka | Spark | MongoDB | Redis | Apache Airflow | PostgreSQL"
              demoLink="#"
              ghLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;