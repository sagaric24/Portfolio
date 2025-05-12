import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="type-wrapper">
      <span className="type-constant">Data </span>
      <span className="type-changing">
        <Typewriter
          options={{
            strings: ["Analyst", "  Scientist", "  Engineer"],
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