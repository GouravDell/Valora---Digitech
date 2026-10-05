const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
  },
  {
    value: "30+",
    label: "Happy Clients",
  },
  {
    value: "5+",
    label: "Years Experience",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
  },
];

function Stats() {
  return (
    <section className="stats-section">

      <div className="container stats-grid">

        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Stats;