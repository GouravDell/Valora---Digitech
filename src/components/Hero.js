function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="container hero-grid">

        <div className="hero-content">

          <div className="hero-badge">
            <span></span>
            Technology • Design • Innovation
          </div>

          <h1>
            We Build
            <span> Digital</span>
            Experiences That Matter.
          </h1>

          <p>
            SM Infutive Technology helps businesses turn ideas into
            powerful digital products through modern web development,
            beautiful UI/UX design and scalable mobile applications.
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
              <span>SM</span>
              <span>IT</span>
              <span>+</span>
            </div>

            <div>
              <strong>Building digital solutions</strong>
              <small>Designed for modern businesses</small>
            </div>

          </div>

        </div>

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

              <span>sm-infutive.app</span>
            </div>

            <div className="dashboard-body">

              <div className="dashboard-sidebar">
                <div className="sidebar-logo">SM</div>

                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="dashboard-content">

                <div className="dashboard-heading">
                  <div>
                    <small>WELCOME BACK</small>
                    <h3>Digital Growth</h3>
                  </div>

                  <div className="dashboard-avatar">
                    SM
                  </div>
                </div>

                <div className="mini-cards">

                  <div>
                    <small>Projects</small>
                    <strong>50+</strong>
                  </div>

                  <div>
                    <small>Growth</small>
                    <strong>84%</strong>
                  </div>

                  <div>
                    <small>Clients</small>
                    <strong>30+</strong>
                  </div>

                </div>

                <div className="chart-card">

                  <div className="chart-header">
                    <span>Performance</span>
                    <strong>+84.6%</strong>
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

          <div className="floating-card floating-project">
            <div className="floating-check">✓</div>

            <div>
              <strong>Project Delivered</strong>
              <small>Successfully completed</small>
            </div>
          </div>

          <div className="floating-card floating-growth">
            <strong>99.9%</strong>
            <small>Performance</small>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;