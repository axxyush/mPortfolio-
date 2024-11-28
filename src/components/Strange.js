import React from "react";
import drRing from "../images/drRing.png";
import drS from "../images/drS.png";

function Strange() {
  return (
    <div className="position-relative dr-image">
      <img
        className="img-fluid position-absolute spiderman-image"
        style={{ animation: "spin infinite 15s linear", height: "300px" }}
        src={drRing}
        alt="spidey"
      />
      <img
        className="img-fluid position-absolute spiderman-image spideysense"
        src={drS}
        style={{
          height: "300px",
        }}
        alt="spideysense"
      />
    </div>
  );
}

export default Strange;
