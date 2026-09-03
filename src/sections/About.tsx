import { SectionHeading } from "@/components/SectionHeading";

const principles = [
  [
    "01",
    "Start with the why",
    "Understand the problem before reaching for the familiar solution.",
  ],
  [
    "02",
    "Make complexity legible",
    "Good architecture gives the next person a clear place to stand.",
  ],
  [
    "03",
    "Ship, then sharpen",
    "Move with purpose. Learn from the real thing. Improve it.",
  ],
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          eyebrow="02 / context"
          title="The person behind the pull request."
          note="A little context goes a long way. Here is the short version."
        />
        <div className="about-grid">
          <div className="about-profile reveal">
            <div className="portrait-frame" aria-label="Portrait placeholder">
              <div className="portrait-placeholder">
                <span className="portrait-initials">VG</span>
                <span className="portrait-note">Portrait coming soon</span>
              </div>
              <span className="portrait-caption">
                Replace with <code>public/profile.jpg</code>
              </span>
            </div>
          </div>
          <div className="reveal">
            <p className="about-lede">
              I’m Vaishnavi Gaikwad, a Full Stack Web Developer focused on
              building reliable, user-friendly and scalable web applications.
            </p>
            <p className="about-copy">
              I enjoy working across the stack — from creating intuitive React
              interfaces to designing APIs, database models and backend
              services.
            </p>
            <p className="about-copy">
              I enjoy building products, solving engineering problems, learning
              new technologies, practicing DSA, working across frontend and
              backend, and exploring Web3/blockchain technologies.
            </p>
          </div>
          <div className="principles reveal">
            {principles.map(([number, title, text]) => (
              <div className="principle" key={number}>
                <span className="principle-num">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
