import React from "react";
import pehcharm_vd from "../images/Pehcharm_vid.mp4";
import wall_e_vid from "../images/wall_e_vid.MP4";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Wall-E",
      site: "https://wall-e-one.vercel.app",
      repo: "https://github.com/axxyush/WallE",
      techStack: ["ESP32", "C++", "React.js", "Solidworks", "3D Printing"],
      duration: "Dec. 2024 – Jan. 2025",
      description: [
        "Engineered a WiFi and Bluetooth-controlled robot using ESP32 and React web interface for real-time motion control, achieving 98% command execution accuracy. Designed and 3D-printed custom parts, improving structural durability and motor efficiency by 30%. Implemented Bluetooth connection, reducing setup time by 80% and enhancing user accessibility.",
      ],
      video: wall_e_vid,
      videoType: "video/mp4",
    },
    {
      id: 2,
      title: "Pehcharm",
      site: "https://pehcharm.vercel.app",
      repo: "https://github.com/axxyush/pehcharm",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "GitHub API"],
      duration: "July 2024 – Aug. 2024",
      description: [
        "Launched a secure CRUD web app for generating portfolio websites, with Real Experience Score of 97.",
        "Utilized Node and REST APIs to interact with records in MongoDB and GitHub, enabling visualization with React showing over 10 insights of a user’s data.",
        "Created interactive and responsive designs, leading to a 50% increase in user engagement with 100+ users.",
      ],
      video: pehcharm_vd,
      videoType: "video/mp4",
    },
  ];

  return (
    <>
      <div id="projects" className="container py-5">
        <h1
          style={{
            color: "#E23636",
            textShadow: "0px 0px 10px rgba(211, 47, 47, 0.9)",
          }}
          className="slide-up text-center mb-5 display-3 fw-bold lh-1 mb-3 poppins-bold"
        >
          Projects
        </h1>

        <div className="slide-up row g-4">
          {projects.map((project) => (
            <div key={project.id} className="container-repo">
              <div
                className="box slide-up p-3"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                {/* Left side - Project Details */}
                <div
                  className="project-details"
                  style={{ flex: "1", paddingRight: "1rem" }}
                >
                  <span className="title hoverRed my-4 text-wrap poppins-bold">
                    {project.title}
                  </span>
                  <div>
                    <p className="my-2 poppins-regular">
                      <b
                        style={{ color: "rgb(117, 190, 249)" }}
                        className="poppins-bold"
                      >
                        Description:{" "}
                      </b>
                      {project.description}
                    </p>
                    <span className="my-2 poppins-bold">Duration: </span>
                    <span className="poppins-regular">{project.duration}</span>
                  </div>

                  <div className="d-flex flex-row mt-3">
                    <a
                      href={project.site}
                      className="viewrepo poppins-regular text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Site
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        height="15px"
                        width="15px"
                        className="icon"
                      >
                        <path
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeMiterlimit={10}
                          strokeWidth="1.5"
                          stroke="#ffffff"
                          d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                        />
                      </svg>
                    </a>
                    <a
                      href={project.repo}
                      className="viewrepo poppins-regular text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        height="15px"
                        width="15px"
                        className="icon"
                      >
                        <path
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeMiterlimit={10}
                          strokeWidth="1.5"
                          stroke="#ffffff"
                          d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <video width="320" height="240" controls muted>
                  <source src={project.video} type={project.videoType} />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </div>
        <hr className="custom-divider" />
      </div>
    </>
  );
}

export default Projects;
