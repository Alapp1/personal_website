import "./FooterStyles.css"

import React from 'react'
import { FaLinkedin, FaMailBulk } from "react-icons/fa"
const Footer = () => {
  return (
    <div>className = "footer"  
        <div className= "footer-container">
            <div className= "left">
                <div className="email">
                   <h4><FaMailBulk size = {20} style={{color: "#fff", marginRight: "2rem" }} />
                    adlapp@ncsu.edu
                   </h4>
                   <h4> <FaLinkedin size = {20} style={{color: "#fff", marginRight: "2rem" }} /></h4>
                </div>
            </div>
            <div className= "right">

              <h4>
                  About Me
              </h4>
              <p>
                I am an undergraduate computer science student at North Carolina State Univeristy 
              </p>
              <div className = "social"> 
                   
                
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
