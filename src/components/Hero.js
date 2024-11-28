import React from "react";
import Spiderman from "./Spiderman";
import Moonknight from "./Moonknight";

function Hero() {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="slide-side col-12 col-sm-10 col-lg-6">
            <Spiderman />
          </div>
          <div className="slide-up col-lg-6">
            <h1
              style={{
                color: "#E23636",
                textShadow: "0px 0px 10px rgba(211, 47, 47, 0.9)",
              }}
              className="display-2 fw-bold lh-1 mb-3 poppins-bold"
            >
              Hey, I am
            </h1>
            <h1 className="display-3 fw-bold text-light lh-1 mb-3 poppins-bold">
              Ayush
            </h1>
            <p className="lead text-light poppins-bold">
              Your friendly neighbourhood developer!
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a
                className="shadow__btn text-decoration-none poppins-bold"
                href="#experience"
              >
                Experience
              </a>
              <a
                className="shadow__btn  text-decoration-none poppins-bold"
                href="#projects"
              >
                Projects
              </a>
            </div>
          </div>
        </div>
        <hr className="custom-divider" />
      </div>

      {/* Moonknight */}

      <div className="container col-xxl-8 px-4">
        <div className="row flex-lg-row-reverse align-items-center py-5">
          <div className="slide-up col-lg-6">
            <h1
              style={{
                color: "#E23636",
                textShadow: "0px 0px 10px rgba(211, 47, 47, 0.9)",
              }}
              className="display-3 fw-bold lh-1 mb-3 poppins-bold"
            >
              About me
            </h1>
            <p className=" text-light poppins-regular">
              Computer Science student at the University at Buffalo with
              experience in web development and research. Currently developing
              Vocal Lens, an app for detecting language impairments. I’ve also
              built CRUD projects like Pehcharm, a full-stack BookStore app and
              Invest Smart, a cryptocurrency tracking tool. Skilled in Java,
              Python, C, JavaScript, React, and Node.js. Active in campus life
              as a Student Assistant at CASet and Social Media Manager for Quant
              Club and Honors College.
            </p>
            <p
              style={{ color: "rgb(117, 190, 249)" }}
              className="poppins-regular"
            >
              Like Moon Knight, I Adapt to Any Challenge – Bringing Light to the
              Darkest Bugs.
            </p>
          </div>
          <div className="slide-side col-12 col-sm-10 col-lg-6">
            <Moonknight />
          </div>
        </div>
        <hr className="custom-divider" />
      </div>
    </>
  );
}

export default Hero;