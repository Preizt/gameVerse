import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

 

const About = () => {
  return (
    <>
    <Header/>/

<div className="about-container" style={{marginTop:"-120px"}}>
      <div className="content-wrapper">

        {/* Header Section */}
        <div className="section-header" style={{marginTop:"100px"}}>
          <h1>About <span>Game Verse</span></h1>
          <p>Your ultimate destination for gaming excellence.</p>
        </div>

        {/* Mission Section */}
        <div className="section-mission">
          <h2>Our Mission</h2>
          <p>
            At <strong>Game Verse</strong>, we are dedicated to providing gamers with the best products,
            unbeatable deals, and a seamless shopping experience. Whether you’re a casual player
            or a competitive pro, we’ve got your back.
          </p>
        </div>

        {/* Team Section */}
        <div className="section-team">
          <h2 className="text">Meet Our Team</h2>
          <div className="team-grid">

            {/* Team Member 1 */}
            <div className="team-card">
              <img src="https://www.alphajwc.com/wp-content/uploads/2023/04/portrait-cheerful-attractive-handsome-businessman-holding-hands-with-confident-face-looking-camera-standing-grey-background.jpg" alt="Alex Ryder" />
              <div className="card-info">
                <h3>Alex Ryder</h3>
                <p>Founder & CEO</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="team-card">
              <img src="https://cdn.prod.website-files.com/6747a904f3d32af863e1ab99/674e27e38d6b61bf76ac8078_Picture1%202.webp" alt="Lara Smith" />
              <div className="card-info">
                <h3>Lara Smith</h3>
                <p>Creative Director</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="team-card">
              <img src="https://vivahr.com/wp-content/uploads/2024/02/sales-and-marketing-manager-job-description-template.jpg" alt="Jake Connor" />
              <div className="card-info">
                <h3>Jake Connor</h3>
                <p>Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="section-why">
          <h2>Why Choose Us?</h2>
          <div className="why-cards">

            <div className="why-card">
              <h3>🔥 Exclusive Deals</h3>
              <p>Get access to limited-time discounts and early releases.</p>
            </div>

            <div className="why-card">
              <h3>🎮 Premium Products</h3>
              <p>We only offer high-quality, genuine gaming products.</p>
            </div>

            <div className="why-card">
              <h3>⚡ 24/7 Support</h3>
              <p>Our dedicated support team is here whenever you need us.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <h2>Ready to Power Up?</h2>
          <p>Explore our store and unlock a new level of gaming.</p>
          <Link to="" className="cta-button">Shop Now</Link>
        </div>

      </div>
    </div>

    <Footer/>
    
    </>
    
  );
};

export default About;
