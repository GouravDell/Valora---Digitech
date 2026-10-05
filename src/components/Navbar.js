import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="navbar">
            <div className="container nav-wrapper">

                <a href="#home" className="brand" onClick={closeMenu}>
                    <div className="brand-logo">
                        <span>SM</span>
                        <i></i>
                    </div>

                    <div className="brand-name">
                        <strong>SM Infutive</strong>
                        <small>Technology</small>
                    </div>
                </a>

                <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <a href="#home" onClick={closeMenu}>Home</a>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#services" onClick={closeMenu}>Services</a>
                    <a href="#process" onClick={closeMenu}>Process</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                </nav>
                <a href="tel:+917277999994" className="nav-phone">
                    📞 +91 7277999994
                </a>
                <a href="tel:+919079753631" className="nav-phone">
                    📞 +91 90797 53631
                </a>




                <a href="#contact" className="nav-cta">
                    Let's Talk <span>↗</span>
                </a>

                <button
                    className="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
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