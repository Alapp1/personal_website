import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage2 from "../components/HeroImage2";
import AboutContent from '../components/AboutContent';

const About = () => {
    return (
        <div>
        <Navbar />
        <HeroImage2 heading= "ABOUT." text = "I'm a Computer Science Student at North Carolina State University." />
        <AboutContent />
        <Footer />
        </div>
        
    )

}

export default About;