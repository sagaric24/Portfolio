import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="type-wrapper">
      {/* Add space directly to the "Data" text */}
      <span className="type-constant">Data&nbsp;&nbsp;</span>
      <span className="type-changing">
        <Typewriter
          options={{
            strings: ["Analyst", "Scientist", "Engineer"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 80,
          }}
        />
      </span>
    </div>
  );
}

export default Type;