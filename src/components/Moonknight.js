import React from "react";
import moonknight from "../images/moon knight.png";
import mooneyes from "../images/moon_eyes.png";

function Moonknight() {
  return (
    <div
      className="position-relative"
      style={{
        height: "500px",
        width: "100%",
        overflow: "hidden",
        right: "50px",
      }}
    >
      <img
        className="img-fluid position-absolute moonknight-image"
        style={{
          objectFit: "contain",
          height: "100%",
          width: "100%",
        }}
        src={moonknight}
        alt="moonknight"
      />
      <img
        className="img-fluid position-absolute moonknight-image moonknight-eyes"
        style={{
          objectFit: "contain",
          height: "100%",
          width: "100%",
        }}
        src={mooneyes}
        alt="mooneyes"
      />
    </div>
  );
}

export default Moonknight;
