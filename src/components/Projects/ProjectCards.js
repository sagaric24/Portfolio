import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Import specific icons instead of from 'all'
import { FaGithub } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="project-card-top">
        <div className="project-icon-container">
          {props.icon}
        </div>
        {props.imgPath && (
          <Card.Img 
            variant="top" 
            src={props.imgPath} 
            alt="project image" 
            className="project-image"
          />
        )}
      </div>
      
      <Card.Body>
        <Card.Title className="project-title">{props.title}</Card.Title>
        <Card.Subtitle className="project-subtitle">{props.subtitle}</Card.Subtitle>
        
        <div className="tech-stack-box">
          <div className="tech-stack-label">Tech Stack:</div>
          <div className="tech-stack-items normal-font">{props.techStack}</div>
        </div>
        
        <Card.Text className="project-description normal-font">
          {props.description}
        </Card.Text>
        
        <div className="project-links">
          {props.ghLink && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              className="github-button"
            >
              <FaGithub /> &nbsp;GitHub
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;