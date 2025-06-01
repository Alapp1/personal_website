import "./AboutContentStyles.css";
import React from "react";
import Java from "../assets/Java1.jpg";
import CPic from "../assets/CPic.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Languages</h1>
        <ul>
          <li>Python</li>
          <li>C/C++</li>
          <li>x86 Assembly</li>
          <li>Java</li>
        </ul>
        <h1>CourseWork</h1>
        <ul>
          <li>Computer Security</li>
          <li>Internet Protocols</li>
          <li>Cryptography</li>
          <li>Operating Systems</li>
        </ul>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Java} className="img" alt="img" />
          </div>
          <div className="img-stack bottom">
            <img src={CPic} className="img" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
