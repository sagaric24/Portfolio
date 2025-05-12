import React, { useState } from "react";
import { FaMapPin } from "react-icons/fa";

function ExperienceCard(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`journey-marker experience-marker ${props.position} ${expanded ? 'expanded' : ''}`} id={props.id}>
      <div 
        className="marker-icon" 
        onClick={() => setExpanded(!expanded)}
      >
        {props.isIcon ? props.iconImage : <img src={props.iconImage} alt={props.company} className="icon-image" />}
      </div>

      <div className={`marker-content experience-card ${expanded ? 'show' : ''}`}>
        <div className="card-header">
          <h3>{props.company}</h3>
          <h4>{props.title}</h4>
          {props.subtitle && <h5>{props.subtitle}</h5>}
        </div>
        
        <div className="card-body">
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
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;