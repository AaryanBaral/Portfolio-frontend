import React from "react";
import "../styles/ContactPage.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactPage() {
  return (
    <>
      <div className="contact-main">
        <div className="contact-links">
          <h1>Contact Me</h1>
          <div className="contact-link">
            <div className="icon"><FontAwesomeIcon className="icon" icon="fa-solid fa-envelope" /></div>
            <div className="text">aryanbaral1100@gmail.com</div>
          </div>
          <div className="contact-link">
            <div className="icon"><FontAwesomeIcon className="icon" icon="fa-solid fa-phone-volume"  /></div>
            <div className="text">+977-9840251517</div>
          </div>
          <div className="contact-link">
            <div className="icon"><FontAwesomeIcon className="icon" icon="fa-solid fa-location-dot" /></div>
            <div className="text">Kapan marga, Bansbari, Kathmandu</div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" id="name" className="form-control" placeholder="Enter your full name." />
            </div>
            <div className="form-group">
              <input type="email" id="email" className="form-control"placeholder="Enter your email address"/>
            </div>
            <div className="form-group">
              <textarea id="message" className="form-control" placeholder="Enter your message."/>
            </div>
            <button type="submit" className="submit-btn btn">
              Submit Here
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
