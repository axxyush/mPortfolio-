import React from "react";
import spideysense from "../images/spideysense.png";
import spidey from "../images/spidey.png";

function Spiderman() {
  return (
    <div
      className="position-relative"
      style={{
        height: "500px",
      }}
    >
      <img
        className="img-fluid position-absolute spiderman-image"
        src={spidey}
        alt="spidey"
      />
      <img
        className="img-fluid position-absolute spiderman-image spideysense"
        src={spideysense}
        alt="spideysense"
      />
    </div>
  );
}

export default Spiderman;
