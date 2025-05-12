import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { FaMapPin } from "react-icons/fa";

function ExperienceCard(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`experience-marker ${expanded ? 'expanded' : ''}`} id={props.id}>
      <div 
        className="marker-icon" 
        onClick={() => setExpanded(!expanded)}
      >
        {props.icon}
      </div>

      <Card className={`marker-content experience-card ${expanded ? 'show' : ''}`}>
        <Card.Header>
          <h3>{props.company}</h3>
          <h4>{props.title}</h4>
          {props.subtitle && <h5>{props.subtitle}</h5>}
        </Card.Header>
        
        <Card.Body>
          <div className="card-metadata">
            <p className="duration">
              <strong>{props.duration}</strong>
            </p>
            <p className="location">
              <FaMapPin /> {props.location}
            </p>
          </div>

          <div className="experience-details">
            <ul>
              {props.description.map((bullet, index) => (
                <li key={index} className="normal-font">{bullet}</li>
              ))}
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ExperienceCard;