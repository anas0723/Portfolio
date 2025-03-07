import React from "react";
import MetaBalls from "./MetaBalls";

const Source = () => {

  return (
    <div className="fixed inset-0  pointer-events-none  ">
      <MetaBalls
       
        color="#3fc1a3"
        cursorBallColor="#3fc1a3"
        cursorBallSize={1}
        ballCount={0}
        animationSize={25}
        enableMouseInteraction={true}
        enableTransparency={true}
        hoverSmoothness={0.07}
        clumpFactor={1}
        speed={false}
      />
    </div>
    
  );
};

export default Source;