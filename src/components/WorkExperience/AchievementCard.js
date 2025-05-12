import React, { useState } from "react";

function AchievementCard(props) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className={`journey-marker achievement-marker ${props.position} ${expanded ? 'expanded' : ''}`} id={props.id}>
      <div 
        className="marker-icon achievement" 
        onClick={() => setExpanded(!expanded)}
      >
        {props.isIcon ? props.iconImage : <img src={props.iconImage} alt={props.title} className="icon-image" />}
      </div>
      
      <div className={`marker-content achievement-content ${expanded ? 'show' : ''}`}>
        <h3>{props.title}</h3>
        <p className="normal-font">{props.description}</p>
      </div>
    </div>
  );
}

export default AchievementCard;