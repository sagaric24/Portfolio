import React, { useState } from "react";
import { FaMapPin } from "react-icons/fa";

function EducationCard(props) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className={`journey-marker education-marker ${props.position} ${expanded ? 'expanded' : ''}`} id={props.id}>
      <div 
        className="marker-icon education" 
        onClick={() => setExpanded(!expanded)}
      >
        {props.isIcon ? props.iconImage : <img src={props.iconImage} alt={props.school} className="icon-image" />}
      </div>
      
      <div className={`marker-content ${expanded ? 'show' : ''}`}>
        <h3>{props.school}</h3>
        <p>{props.degree}</p>
        <p className="duration">{props.duration}</p>
        <p className="location">
          <FaMapPin /> {props.location}
        </p>
        {props.details && (
          <div className="education-details">
            <p className="normal-font">{props.details}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EducationCard;