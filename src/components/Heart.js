import React from "react";
import heartout from "../images/heart_out.png";
import heartin from "../images/heart_in.png";
import A from "../images/A.png";

function Heart() {
  return (
    <div
      className="position-relative d-inline-block"
      style={{
        height: "120px",
        width: "120px",
      }}
    >
      <img
        className="position-absolute heartout"
        style={{
          height: "100%",
          width: "100%",
          objectFit: "contain",
        }}
        src={heartout}
        alt="heart outer"
      />
      <img
        className="position-absolute heartin"
        style={{
          height: "100%",
          width: "100%",
          objectFit: "contain",
        }}
        src={heartin}
        alt="heart inner"
      />
      <img
        className="position-absolute"
        style={{
          height: "30px",
          width: "30px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        src={A}
        alt="A in heart"
      />
    </div>
  );
}

export default Heart;
