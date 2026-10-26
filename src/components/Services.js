
const services = [
  {
    number: "01",
    icon: "⌘",
    title: "Web Development",
    description:
      "We build modern, responsive, and high-performance websites and web applications tailored to your business goals.",
    technologies: "React • Angular • TypeScript • Node.js",
  },
  {
    number: "02",
    icon: "✦",
    title: "UI/UX Design",
    description:
      "We create intuitive, visually appealing user experiences that improve usability and help customers connect with your brand.",
    technologies: "UI Design • UX Research • Prototyping",
  },
  {
    number: "03",
    icon: "▣",
    title: "Mobile App Development",
    description:
      "We develop user-friendly mobile applications designed around performance, accessibility, and future scalability.",
    technologies: "Android • iOS • Cross-Platform",
  },
  {
    number: "04",
    icon: "⚙",
    title: "Custom Software Development",
    description:
      "We develop tailored software solutions that streamline business workflows, improve efficiency, and solve specific business challenges.",
    technologies: "Python • FastAPI • Node.js • REST APIs",
  },
  {
    number: "05",
    icon: "✧",
    title: "AI & Automation",
    description:
      "We help businesses explore AI-powered applications, intelligent chatbots, and workflow automation to simplify everyday tasks.",
    technologies: "Generative AI • LLMs • AI Integration",
  },
  {
    number: "06",
    icon: "☁",
    title: "Cloud & Deployment",
    description:
      "We help deploy and maintain applications with reliable hosting, streamlined delivery pipelines, and scalable cloud infrastructure.",
    technologies: "AWS • CI/CD • Docker • Deployment",
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
              <span> built for your growth.</span>
            </h2>
          </div>

          <p>
            At Valora Digitech IT Solutions, we turn business
            challenges into practical digital experiences through
            modern development, thoughtful design, and innovative
            technology.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article
              className="service-card"
              key={service.number}
            >
              <div className="service-top">
                <span>{service.number}</span>

                <div className="service-icon">
                  {service.icon}
                </div>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="service-tech">
                {service.technologies}
              </div>

              <a href="#contact">
                Discuss Your Project <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;