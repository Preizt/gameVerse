import React from "react"
import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {
  return (
    <>
    <Header/>
     <div className="contact-container" style={{marginTop:"-92px"}}>
      <div className="contact-content">

        {/* Heading */}
        <div style={{marginTop:"100px"}}>
        <h1 className="contact-title">Contact <span>Game Verse</span></h1>
        </div>
        <p className="contact-description">
          Have questions or need support? Reach out to us!
        </p>

        <div className="contact-info">

          {/* Email */}
          <div className="contact-card">
            <i className="fas fa-envelope"></i>
            <h3>Email Us</h3>
            <p>support@gameverse.com</p>
          </div>

          {/* Phone */}
          <div className="contact-card">
            <i className="fas fa-phone"></i>
            <h3>Call Us</h3>
            <p>+91 6754 6900 763</p>
          </div>

          {/* Location */}
          <div className="contact-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Visit Us</h3>
            <p>123 Gamer Street, Kerala, India</p>
          </div>

        </div>
      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default Contact;
