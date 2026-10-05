const services = [
  {
    number: "01",
    icon: "⌘",
    title: "Web Development",
    description:
      "We create fast, scalable and responsive websites and web applications tailored to your business requirements.",
    technologies: "React • Angular • Node.js • Python",
  },
  {
    number: "02",
    icon: "✦",
    title: "UI/UX Design",
    description:
      "We design clean, intuitive and engaging digital experiences that make products easy and enjoyable to use.",
    technologies: "UX Research • UI Design • Prototyping",
  },
  {
    number: "03",
    icon: "▣",
    title: "Mobile App Development",
    description:
      "We build reliable and user-friendly mobile applications focused on performance, usability and scalability.",
    technologies: "Android • iOS • Cross Platform",
  },
];

function Services() {
  return (
    <section className="section services-section" id="services">

      <div className="container">

        <div className="section-heading">

          <div>
            <div className="section-tag">
              OUR SERVICES
            </div>

            <h2>
              Digital solutions
              <span> built to grow.</span>
            </h2>
          </div>

          <p>
            From concept to deployment, we help businesses build
            technology products that create real impact.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service) => (
            <article className="service-card" key={service.title}>

              <div className="service-top">
                <span>{service.number}</span>

                <div className="service-icon">
                  {service.icon}
                </div>
              </div>

              <h3>{service.title}</h3>

              <p>
                {service.description}
              </p>

              <div className="service-tech">
                {service.technologies}
              </div>

              <a href="#contact">
                Discuss your project <span>↗</span>
              </a>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;