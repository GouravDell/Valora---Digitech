
const features = [
  "Modern and scalable application architecture",
  "Responsive websites for all devices",
  "Performance-focused development",
  "Security-conscious coding practices",
  "Clean, maintainable, and reusable code",
  "Ongoing support and continuous improvement",
];

function WhyUs() {
  return (
    <section className="section why-section" id="why-us">
      <div className="container why-grid">
        <div className="technology-visual">
          <div className="tech-ring ring-one"></div>
          <div className="tech-ring ring-two"></div>

          <div className="tech-center">
            <span>VD</span>
            <small>TECHNOLOGY</small>
          </div>

          <div className="tech-pill pill-react">React</div>
          <div className="tech-pill pill-ui">UI/UX</div>
          <div className="tech-pill pill-web">WEB</div>
          <div className="tech-pill pill-app">AI</div>
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
            At Valora Digitech IT Solutions, we focus on
            understanding your business goals and creating
            practical digital solutions that deliver value,
            improve user experiences, and support future growth.
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