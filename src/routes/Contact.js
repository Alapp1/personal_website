import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage2 from "../components/HeroImage2";
import Form from "../components/Form";


const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImage2 heading = "CONTACT."/>
            <Form />
            <Footer />
        </div>
    )

}

export default Contact;