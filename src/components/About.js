
function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="section-tag">
          WHO WE ARE
        </div>

        <div className="about-content">
          <h2>
            Turning ideas into
            <span> meaningful digital solutions.</span>
          </h2>

          <p>
            At Valora Digitech IT Solutions, we believe technology
            should simplify business challenges, improve user
            experiences, and help organizations achieve their goals.
          </p>

          <p>
            We focus on modern web development, custom software,
            responsive applications, and AI-powered solutions
            designed to support business needs and future growth.
          </p>

          <div className="about-points">
            <div>
              <span>01</span>
              <strong>Business Focused</strong>
              <small>
                Digital solutions aligned with your business goals.
              </small>
            </div>

            <div>
              <span>02</span>
              <strong>Modern Technology</strong>
              <small>
                Thoughtful development using modern technologies
                and best practices.
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;