
import { useState } from "react";
import ValoraLogo from "../assets/valora.svg";
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="navbar">
            <div className="container nav-wrapper">
                {/* Company Logo and Brand */}
                <a
                    href="#home"
                    className="brand"
                    onClick={closeMenu}
                    aria-label="Valora Digitech IT Solutions home"
                >
                    <img
                        src={ValoraLogo}
                        alt="Valora Digitech IT Solutions"
                        className="brand-logo-img"
                    />

                    <div className="brand-name">
                        <strong>Valora</strong>
                        <small>Digitech IT Solutions</small>
                    </div>
                </a>

                {/* Navigation */}
                <nav
                    className={`nav-links ${menuOpen ? "active" : ""}`}
                    id="main-navigation"
                >
                    <a href="#home" onClick={closeMenu}>Home</a>
                    <a href="#about" onClick={closeMenu}>About Us</a>
                    <a href="#services" onClick={closeMenu}>Services</a>
                    <a href="#process" onClick={closeMenu}>Our Process</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                </nav>

                {/* Contact Numbers */}
                <div className="nav-contacts">
                      <a href="tel:+919079753631" className="nav-phone">
                        📞 +91 90797 53631
                    </a>
                    <a href="tel:+917277999994" className="nav-phone">
                        📞 +91 72779 99994
                    </a>

                  
                </div>

                {/* Call to Action */}
                <a
                    href="#contact"
                    className="nav-cta"
                    onClick={closeMenu}
                >
                    Let's Talk <span>↗</span>
                </a>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className={`menu-button ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                    aria-expanded={menuOpen}
                    aria-controls="main-navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}

export default Navbar;