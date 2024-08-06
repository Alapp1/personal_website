import "./AboutContentStyles.css";
import React from 'react';
import {Link} from "react-router-dom";
import Java from "../assets/Java1.jpg";
import CPic from "../assets/CPic.png";


const AboutContent = () => {
  return (
    <div className = "about">
        <div className = "left">
            <h1>Skills/Relevant CourseWork</h1>
            <ul>
                <li>Java</li>
                <li>C</li>
                <li>Python</li>
                <li>Operating Systems</li>
                <li>Data Structures and Algorithms</li>
            </ul>
            <Link to="/contact">
                <button className = "btn-light">Contact</button>
            </Link>
        </div>
        <div className = "right">
            <div className = "img-container">
                <div className="img-stack top">
                    <img src={Java}
                    className="img"
                    alt="img"/>
                </div>
                <div className="img-stack bottom">
                    <img src={CPic}
                    className="img"
                    alt="img"/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutContent