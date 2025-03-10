import React from "react";
import bhs from "../images/BHS_logo.png";
import ub from "../images/UB_logo.png";
import Strange from "./Strange";

function Education() {
  const educationDetails = [
    {
      id: 1,
      institution: "University at Buffalo",
      gpa: "3.7/4.0",
      graduationYear: "Fall 2026",
      degree: "Bachelor's of Science",
      logo: ub,
      description: `I am actively involved in various academic and extracurricular activities at the University at Buffalo. As a Research Assistant with UB ESC, I contribute to ongoing research projects, while also serving as a Social Media Intern for UB Honors and a Student Assistant at CASet. My dedication and hard work were recognized with a spot on the Dean’s List for both Spring 2024 and Fall 2024.`,
    },
    {
      id: 2,
      institution: "Boys' High School & College",
      gpa: "82%",
      graduationYear: "March 2023",
      degree: "High School",
      logo: bhs,
      description: `I was a part of the school band winning multiple inter-school competitions. I was also a part of the Naval NCC as a cadet where I completed NCC "A" certification and led/trained many troops.`,
    },
  ];

  return (
    <div className="container py-5 d-flex flex-column align-items-center">
      <h1
        style={{
          color: "#8C52FF",
          textShadow: "0px 0px 10px rgba(140, 82, 255, 0.9)",
        }}
        className="slide-up text-center mb-5 display-3 fw-bold lh-1 poppins-bold"
      >
        Education
      </h1>

      <div className="row justify-content-center">
        {educationDetails.map((edu) => (
          <div
            className="slide-side col-lg-5 col-md-6 col-sm-12 m-3"
            key={edu.id}
          >
            <div className="education-card">
              <div className="card-header">
                <h2 className="institution-title poppins-bold">
                  {edu.institution}
                </h2>
                <img
                  className="institution-logo"
                  src={edu.logo}
                  alt={edu.institution}
                />
              </div>
              <div className="card-body">
                <p className="poppins-regular">
                  <b className="poppins-bold">GPA:</b> {edu.gpa}
                </p>
                <p className="poppins-regular">
                  <b className="poppins-bold">Graduation Year:</b>{" "}
                  {edu.graduationYear}
                </p>
                <p className="poppins-regular">
                  <b className="poppins-bold">Degree:</b> {edu.degree}
                </p>
                <p className="description poppins-regular">
                  <b className="poppins-bold">Description:</b> {edu.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="col-12 col-sm-10 col-lg-6 dr-strange-image-container ">
        <Strange />
      </div>
    </div>
  );
}

export default Education;
