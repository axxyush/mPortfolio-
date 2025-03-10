import React from "react";
import grootBody from "../images/grootbody.png"; // Main Groot body
import grootHand from "../images/groothand.png"; // Waving Groot hand

function Groot() {
  return (
    <div
      className="position-relative groot-component"
      style={{
        height: "200px", // Adjust container height
        width: "200px", // Adjust container width
      }}
    >
      {/* Groot Body */}
      <img
        className="img-fluid position-absolute groot-body"
        src={grootBody}
        alt="Groot Body"
        style={{
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      />
      {/* Groot Hand */}
      <img
        className="img-fluid position-absolute groot-hand"
        src={grootHand}
        alt="Groot Hand"
        style={{
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          animation: "waveHand 2s infinite ease-in-out",
        }}
      />
    </div>
  );
}

export default Groot;
