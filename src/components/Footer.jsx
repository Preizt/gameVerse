import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <p
            style={{
              fontSize: "2.7rem",
              fontFamily: "Bangers",
              letterSpacing: "6px",
              color: "white",

              padding: "15px",
            }}
          >
            Game Verse
          </p>
          <p>Level up your gaming experience with Game Verse.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h5>Quick Links</h5>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h5>Contact Us</h5>
          <ul>
            <li>
              <i className="fas fa-envelope"></i> support@gameverse.com
            </li>
            <li>
              <i className="fas fa-phone"></i> +91 6754 6900 763
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> 123 Gamer Street,
              Kerala, India
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      {/* <div className="footer-bottom">
        <p>&copy; 2025 Game Verse. All rights reserved.</p>
      </div> */}
    </footer>
  );
};

export default Footer;
