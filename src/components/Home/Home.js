import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import myImg from "../../Assets/avatar.png"; // Make sure you have your profile image here

function Home() {
  return (
    <section>
      <Container fluid className="home-section wanted-poster" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="home-row">
            {/* Left side - Profile Card */}
            <Col md={5} className="profile-card-container">
              <div className="profile-card">
                <div className="wanted-border">
                  <div className="profile-image-container">
                    <img src={myImg} alt="profile" className="profile-img" />
                  </div>
                </div>
                
                <h1 className="profile-name">Sagari Chandrashekar</h1>
                
                <div className="typewriter-container">
                  <Type />
                </div>
                
                {/* Moved social icons here and centered them */}
                <div className="profile-social-centered">
                  <a href="https://github.com/sagaric24" className="social-icon" target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/sagaric/" className="social-icon" target="_blank" rel="noreferrer">
                    <FaLinkedinIn />
                  </a>
                  <a href="mailto:sagaric24@gmail.com" className="social-icon">
                    <HiOutlineMail />
                  </a>
                </div>
              </div>
            </Col>

            {/* Right side - Information */}
            <Col md={7} className="home-header">
              <h1 className="bounty-name">
                Full-Stack Data Burrito 🌯
              </h1>
              
              <p className="home-description">
                I'm a data analyst, scientist, and engineer rolled into one — basically a data burrito.
I clean up messy datasets, build pipelines that don't cry in production, and whip up dashboards, ML models, and GenAI tools that hopefully impress stakeholders and make teams go, "Oh wow, that's actually useful."
              </p>

              <div className="home-stats">
                <div className="stat-item">
                  <h2 className="stat-number">3+</h2>
                  <p className="stat-label">YEARS OF<br />EXPERIENCE</p>
                </div>
              </div>

              <div className="home-buttons">
                <a href="#contact" className="talk-btn">Let's Talk</a>
                <a href="#projects" className="work-btn">My Work →</a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;