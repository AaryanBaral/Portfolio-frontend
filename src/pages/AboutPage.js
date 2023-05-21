import React from "react";
import image from "../my.jpeg";
import "../styles/AboutPage.css";

export default function AboutPage() {
  return (
    <>
      <div className="about-body">
        <div className="image">
          <img src={image} alt="my" />
        </div>
        <div className="about-body">
          <h1 className="name">Aaryan Baral</h1>
          <h2 className="title">- Full Stack Developer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
            assumenda dolor quasi exercitationem rem aperiam consectetur, ipsum
            mollitia vitae culpa expedita aliquam modi, saepe a minus. Velit
            quasi ab fuga consequatur nisi!
          </p>
        </div>
      </div>
    </>
  );
}
