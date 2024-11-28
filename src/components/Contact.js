import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Groot from "./Groot";

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_USER_ID"
      )
      .then(
        () => {
          alert("Email sent successfully!");
          formRef.current.reset();
        },
        () => {
          alert("Error sending email. Please try again.");
        }
      );
  };

  return (
    <div className="groot-container mx-auto">
      <div className="groot-header">
        <Groot />
        <h1 style={{ marginTop: "10px" }} className="groot-title">
          I am Groot!
        </h1>
      </div>
      <form ref={formRef} onSubmit={sendEmail} className="groot-form">
        <input
          className="groot-input"
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />
        <input
          className="groot-input"
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="groot-textarea"
          name="message"
          placeholder="Your Message"
          required
        ></textarea>
        <button className="groot-button" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
