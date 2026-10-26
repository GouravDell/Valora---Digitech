
import ValoraLogo from "../assets/valora.svg";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Company Branding */}
        <div className="footer-brand">
          <a href="#home" className="brand" aria-label="Valora home">
            <img
              src={ValoraLogo}
              alt="Valora Digitech IT Solutions Logo"
              className="brand-logo-img"
            />

            <div className="brand-name">
              <strong>Valora</strong>
              <small>Digitech IT Solutions</small>
            </div>
          </a>

          <p>
            Building modern digital experiences through web
            development, custom software, and AI-powered solutions
            that help businesses innovate and grow.
          </p>

          <div className="footer-tagline">
            Innovate. Build. Transform.
          </div>

          {/* Instagram Business Link */}
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/valora_digitech/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
              aria-label="Visit Valora on Instagram"
            >
              <FaInstagram size={20} />
              <span>Follow us on Instagram</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="footer-column">
          <h4>Company</h4>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#process">Our Process</a>
          <a href="#contact">Contact Us</a>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>Our Services</h4>
          <a href="#services">Web Development</a>
          <a href="#services">UI/UX Design</a>
          <a href="#services">Custom Software</a>
          <a href="#services">AI Solutions</a>
          <a href="#services">Mobile App Development</a>
        </div>

        {/* Contact Information */}
        <div className="footer-column">
          <h4>Get in Touch</h4>
          <a href="tel:+919079753631">+91 90797 53631</a>
          <a href="#contact">Send a Project Inquiry ↗</a>
          <span>Technology • Innovation • Growth</span>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Valora Digitech IT Solutions.
          All rights reserved.
        </span>

        <div className="footer-legal-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
