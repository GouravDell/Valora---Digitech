const features = [
  "Modern and scalable architecture",
  "Responsive across all devices",
  "Performance-focused development",
  "Secure development practices",
  "Clean and maintainable code",
  "Continuous support and improvement",
];

function WhyUs() {
  return (
    <section className="section why-section">

      <div className="container why-grid">

        <div className="technology-visual">

          <div className="tech-ring ring-one"></div>
          <div className="tech-ring ring-two"></div>

          <div className="tech-center">
            <span>SM</span>
            <small>TECHNOLOGY</small>
          </div>

          <div className="tech-pill pill-react">React</div>
          <div className="tech-pill pill-ui">UI/UX</div>
          <div className="tech-pill pill-web">WEB</div>
          <div className="tech-pill pill-app">APP</div>

        </div>

        <div className="why-content">

          <div className="section-tag">
            WHY CHOOSE US
          </div>

          <h2>
            We don't just build software.
            <span> We build solutions.</span>
          </h2>

          <p>
            Our goal is simple — understand your business, solve the
            right problem and build a product that can grow with you.
          </p>

          <div className="feature-list">

            {features.map((feature) => (
              <div className="feature-item" key={feature}>
                <span>✓</span>
                {feature}
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyUs;