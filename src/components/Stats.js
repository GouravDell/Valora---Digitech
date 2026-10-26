
const stats = [
  {
    value: "01",
    label: "Client-First Approach",
  },
  {
    value: "02",
    label: "Modern Technologies",
  },
  {
    value: "03",
    label: "Quality-Focused Development",
  },
  {
    value: "04",
    label: "Continuous Improvement",
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