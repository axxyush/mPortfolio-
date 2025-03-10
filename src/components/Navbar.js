import React from "react";
import Heart from "./Heart";

function Navbar() {
  return (
    <>
      <nav
        style={{ backgroundColor: "black" }}
        className="navbar fixed-top navbar-expand-lg navbar-dark "
      >
        <div className="container-fluid d-flex align-items-center">
          <div className="d-flex align-items-center">
            <Heart style={{ height: "100%", objectFit: "contain" }} />
            <a className="navbar-brand poppins-bold nav-text" href="/">
              Srivastava
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Add spacing to bring links slightly to the left */}
            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <a
                  className="nav-link nav-text active poppins-bold"
                  aria-current="page"
                  href="https://pehcharm.vercel.app/axxyush/blogs"
                >
                  Blogs
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link text-decoration-none nav-text active poppins-bold"
                  aria-current="page"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item mx-3 poppins-bold">
                <a
                  className="nav-link nav-text active"
                  aria-current="page"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
