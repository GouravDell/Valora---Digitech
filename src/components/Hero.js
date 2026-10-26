
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="container hero-grid">
        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span></span>
            Technology • Innovation • Growth
          </div>

          <h1>
            We Build
            <span> Digital</span>
            Experiences That Matter.
          </h1>

          <p>
            Valora Digitech IT Solutions helps businesses transform
            ideas into powerful digital experiences through modern
            web development, custom software, AI-powered solutions,
            and scalable applications.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="primary-btn">
              Start a Project
              <span>→</span>
            </a>

            <a href="#services" className="secondary-btn">
              Explore Services
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-avatars">
              <span>VD</span>
              <span>IT</span>
              <span>AI</span>
            </div>

            <div>
              <strong>Technology That Moves You Forward</strong>
              <small>
                Smart digital solutions for modern businesses
              </small>
            </div>
          </div>
        </div>

        {/* Hero Dashboard Visual */}
        <div className="hero-visual">
          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>

          <div className="hero-main-card">
            <div className="dashboard-top">
              <div className="window-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <span>Valora-digitech.app</span>
            </div>

            <div className="dashboard-body">
              <div className="dashboard-sidebar">
                <div className="sidebar-logo">VD</div>

                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="dashboard-content">
                <div className="dashboard-heading">
                  <div>
                    <small>WELCOME TO Valora</small>
                    <h3>Digital Innovation</h3>
                  </div>

                  <div className="dashboard-avatar">VD</div>
                </div>

                <div className="mini-cards">
                  <div>
                    <small>Solutions</small>
                    <strong>Web</strong>
                  </div>

                  <div>
                    <small>Technology</small>
                    <strong>AI</strong>
                  </div>

                  <div>
                    <small>Development</small>
                    <strong>IT</strong>
                  </div>
                </div>

                <div className="chart-card">
                  <div className="chart-header">
                    <span>Digital Transformation</span>
                    <strong>Let's Grow ↗</strong>
                  </div>

                  <div className="chart">
                    <span style={{ height: "28%" }}></span>
                    <span style={{ height: "40%" }}></span>
                    <span style={{ height: "34%" }}></span>
                    <span style={{ height: "55%" }}></span>
                    <span style={{ height: "48%" }}></span>
                    <span style={{ height: "67%" }}></span>
                    <span style={{ height: "62%" }}></span>
                    <span style={{ height: "80%" }}></span>
                    <span style={{ height: "75%" }}></span>
                    <span style={{ height: "94%" }}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Project Card */}
          <div className="floating-card floating-project">
            <div className="floating-check">✓</div>

            <div>
              <strong>Ideas Into Reality</strong>
              <small>Built around your business needs</small>
            </div>
          </div>

          {/* Floating Technology Card */}
          <div className="floating-card floating-growth">
            <strong>Web + AI</strong>
            <small>Digital Solutions</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;