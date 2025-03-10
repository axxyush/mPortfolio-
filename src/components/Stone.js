import React, { useState } from "react";
// import time from "../images/time.png";
// import mind from "../images/mind.png";
// import soul from "../images/soul.png";
// import space from "../images/space.png";
// import power from "../images/power.png";
// import reality from "../images/reality.png";
import C from "../images/C.png";
import mongo from "../images/mongo.png";
import node from "../images/node.png";
import react from "../images/react.png";
import html from "../images/html.png";
import python from "../images/python.png";
import java from "../images/java.png";
import js from "../images/js.png";
import css from "../images/css.png";
import infinity from "../images/infinity.png";

function Stone() {
  const initialSkills = [
    { id: "c", src: C, alt: "C" },
    { id: "python", src: python, alt: "Python" },
    { id: "mongo", src: mongo, alt: "MongoDB" },
    { id: "css", src: css, alt: "CSS" },
    { id: "html", src: html, alt: "HTML" },
    { id: "react", src: react, alt: "React" },
    { id: "js", src: js, alt: "JavaScript" },
    { id: "java", src: java, alt: "Java" },
    { id: "node", src: node, alt: "Node.js" },
  ];
  const [skills, setSkills] = useState(initialSkills);
  const [isHalfVisible, setIsHalfVisible] = useState(false);
  const [snapping, setSnapping] = useState(false);

  const handleInfinityClick = () => {
    setSnapping(true);

    setTimeout(() => {
      setSnapping(false);

      if (isHalfVisible) {
        setSkills(initialSkills);
      } else {
        const half = Math.floor(initialSkills.length / 2);
        const hiddenIndices = new Set();

        while (hiddenIndices.size < half) {
          const randomIndex = Math.floor(Math.random() * initialSkills.length);
          hiddenIndices.add(randomIndex);
        }

        const updatedSkills = initialSkills.map((skill, index) => ({
          ...skill,
          hidden: hiddenIndices.has(index),
        }));

        setSkills(updatedSkills);
      }

      setIsHalfVisible(!isHalfVisible);
    }, 700);
  };

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="row justify-content-center align-items-center">
          <hr className="custom-divider" />
          <h1
            style={{
              color: "#E23636",
              textShadow: "0px 0px 10px rgba(211, 47, 47, 0.9)",
              marginTop: "50px",
            }}
            className="display-2 text-center fw-bold lh-1 mb-3 poppins-bold"
          >
            Skills
          </h1>
          <div
            style={{ marginTop: "50px", marginBottom: "50px" }}
            className="stone-container text-center"
          >
            {/* Map skills with fade-out effect and visibility toggling */}
            {skills.map((skill) => (
              <img
                key={skill.id}
                className={`stone spideysense mx-3 ${snapping ? "fade" : ""}`}
                src={skill.src}
                alt={skill.alt}
                style={{
                  visibility: skill.hidden ? "hidden" : "visible", // Visibility toggle
                  opacity: skill.hidden ? 0 : 1, // Optionally fade out when invisible
                }}
              />
            ))}
            <br />
            <img
              style={{ cursor: "pointer" }}
              className={`my-2 mx-5 ${snapping ? "snap" : ""} gauntlet`}
              src={infinity}
              alt="infinity"
              onClick={handleInfinityClick}
            />
            <p className="text-white poppins-regular">Click me!</p>
          </div>
          <hr className="custom-divider my-4" />
        </div>
      </div>
    </>
  );
}

export default Stone;
