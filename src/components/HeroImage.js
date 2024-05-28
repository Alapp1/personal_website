import "./HeroImageStyles.css"

import React from 'react'
import img1 from "../assets/img1.jpg"
import {Link} from "react-router-dom";

const HeroImage = () => {
  return (
    <div className = "hero">
        <div className = "mask">
            <img className = "into-img"
                src = {img1} alt = "img1" />
        </div>
        <div className = "content">
            <p> Aiden Lapp </p>
            <h1> Computer Science Student</h1>
            <div>
                <Link to="/project" className= "btn">Projects
                </Link>
                <Link to="/contact" className= "btn-light">Contact
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage