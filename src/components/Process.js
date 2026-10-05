const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, users and project requirements.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create the experience and technical architecture.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Our team builds, tests and continuously improves the product.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We deploy your product and provide ongoing support.",
  },
];

function Process() {
  return (
    <section className="section process-section" id="process">

      <div className="container">

        <div className="center-heading">

          <div className="section-tag">
            OUR PROCESS
          </div>

          <h2>
            From idea to
            <span> impact.</span>
          </h2>

          <p>
            A transparent process designed to transform your idea
            into a successful digital product.
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