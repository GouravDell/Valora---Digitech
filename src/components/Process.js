
const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business goals, target audience, challenges, and project requirements to define the right solution.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "We create user-friendly designs and a clear technical roadmap tailored to your business needs.",
  },
  {
    number: "03",
    title: "Develop & Test",
    description:
      "We build responsive websites, custom software, and digital applications with a focus on quality, performance, and security.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy your solution and help maintain, improve, and scale it as your business grows.",
  },
];

function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="center-heading">
          <div className="section-tag">
            HOW WE WORK
          </div>

          <h2>
            From idea to
            <span> digital impact.</span>
          </h2>

          <p>
            At Valora Digitech IT Solutions, we follow a clear,
            collaborative process to transform your ideas into
            reliable digital solutions that support your business goals.
          </p>
        </div>

        <div className="process-grid">
          {process.map((item) => (
            <div className="process-item" key={item.number}>
              <span className="process-number">
                {item.number}
              </span>

              <div className="process-line"></div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;