const stats = [
  { value: "3+", label: "years building", testid: "stat-experience" },
  { value: "100+", label: "DSA problems", testid: "stat-dsa" },
  { value: "Full Stack", label: "frontend + backend", testid: "stat-stack" },
  {
    value: "Production",
    label: "real-world applications",
    testid: "stat-production",
  },
];

export function ProofStrip() {
  return (
    <div className="proof-strip">
      <div className="container proof-grid">
        {stats.map((stat) => (
          <div
            className="proof-item reveal"
            key={stat.testid}
            data-testid={stat.testid}
          >
            <span className="proof-value">{stat.value}</span>
            <span className="proof-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
