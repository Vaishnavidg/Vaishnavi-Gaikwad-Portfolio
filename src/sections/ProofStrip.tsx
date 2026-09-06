const stats = [
  { value: "3+", label: "Years of experience", testid: "stat-experience" },
  { value: "150+", label: "DSA problems solved", testid: "stat-dsa" },
  {
    value: "10+",
    label: "Technologies across the stack",
    testid: "stat-stack",
  },
  {
    value: "3",
    label: "Domains — web, blockchain, AI",
    testid: "stat-domains",
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
