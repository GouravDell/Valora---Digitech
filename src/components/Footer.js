function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div className="footer-brand">

          <a href="#home" className="brand">

            <div className="brand-logo">
              <span>SM</span>
              <i></i>
            </div>

            <div className="brand-name">
              <strong>SM Infutive</strong>
              <small>Technology</small>
            </div>

          </a>

          <p>
            Building modern digital experiences that help
            businesses innovate, grow and succeed.
          </p>

        </div>

        <div className="footer-column">

          <h4>Company</h4>

          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-column">

          <h4>Services</h4>

          <a href="#services">Web Development</a>
          <a href="#services">UI/UX Design</a>
          <a href="#services">Mobile App Development</a>

        </div>

        <div className="footer-column">

          <h4>Get in touch</h4>

          <a href="mailto:infutive@sm.com">
            infutive@sm.com
          </a>
          <a href="tel:+919079753631">+91 90797 53631 </a>

          <span>Technology & Digital Solutions</span>

        </div>

      </div>

      <div className="container footer-bottom">

        <span>
          © 2026 SM Infutive Technology. All rights reserved.
        </span>

        <div>
          <a href="#home">Privacy</a>
          <a href="#home">Terms</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;