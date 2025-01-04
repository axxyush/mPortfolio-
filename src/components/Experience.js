import React from "react";
import loki from "../images/loki.png";

function Experience() {
  return (
    <div id="experience" className="container py-5 ">
      <h1
        style={{
          textShadow: "0px 0px 10px rgba(29, 185, 84, 0.9)",
          color: "#1DB954",
        }}
        className="slide-side text-center mb-5 display-3 fw-bold lh-1 poppins-bold"
      >
        Experience
      </h1>
      <div className="timeline-cap">
        <img src={loki} alt="Loki" className="loki-image" />
      </div>
      <div className="slide-up timeline">
        {/* Undergraduate Research Assistant */}
        <div className="timeline-item">
          <div className="timeline-content loki-card">
            <h2 className="timeline-title poppins-bold">Student Assistant</h2>
            <p className="location poppins-bold">
              CAS Educational Technology, University at Buffalo
            </p>
            <p className="duration poppins-bold">July 2024 – Present</p>
            <p>
              • Streamlined the organization of 200+ IT assets, improving
              inventory accuracy by 25% through effective tracking and
              categorization.
            </p>
            <p>
              • Coordinated the recovery and secure disposal of 50+ devices
              across campuses, ensuring 100% compliance with UB security
              policies.
            </p>
            <p>
              • Developed 5+ inventory process guides, enhancing operational
              efficiency and reducing processing time by 30%.
            </p>
          </div>
        </div>
        {/* CASet Student Assistant */}
        <div className="timeline-item">
          <div className="timeline-content loki-card">
            <h2 className="timeline-title poppins-bold">
              Undergraduate Research Assistant
            </h2>
            <p className="location poppins-bold">
              Embedded Sensing and Computing Group, University at Buffalo
            </p>
            <p className="duration poppins-bold">July 2024 – Present</p>
            <p>
              • Collaborated with a team to build VocalLens, detecting language
              impairments in children.
            </p>
            <p>• Led web development, improving user experience by 30%.</p>
            <p>
              • Developed AuspexMedix and 2 other websites for the UB ESC
              Research Team.
            </p>
          </div>
        </div>
        {/* Social Media Intern */}

        <div className="timeline-item ">
          <div className="timeline-content loki-card">
            <h2 className="timeline-title poppins-bold">Social Media Intern</h2>
            <p className="location poppins-bold">
              Honors College, University at Buffalo
            </p>
            <p className="duration poppins-bold">Aug 2024 – Present</p>
            <p>
              • Worked with a team of 3 on strategies to increase social media
              presence for the UB’s Honors College
            </p>
            <p>
              • Created content posts that increased engagement of Honors
              College by 45%.
            </p>
            <p>
              • Worked on projects to help the Honors Staff with various events
              and office duties.
            </p>
          </div>
        </div>

        {/* Student Leader */}

        <div className="timeline-item ">
          <div className="timeline-content loki-card">
            <h2 className="timeline-title poppins-bold">Student Leader</h2>
            <p className="location poppins-bold">Campus Dining & Shops</p>
            <p className="duration poppins-bold">Jan 2024 – Nov 2024</p>
            <p>
              • Trained 30+ employees and maintained stellar customer service.
            </p>
            <p>• Ensured smooth operations with teams of 5–7 members daily.</p>
            <p>• Provided exceptional service to 200+ customers daily.</p>
          </div>
        </div>
      </div>

      <hr className="custom-divider" />
    </div>
  );
}

export default Experience;
