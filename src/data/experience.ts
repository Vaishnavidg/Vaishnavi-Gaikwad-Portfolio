import codekulLogo from "@/assets/Codekul_logo.jpeg";
import impactilityLogo from "@/assets/impactility_logo.jpeg";
import techAlchemyLogo from "@/assets/tech_alchemy_ltd_logo.jpeg";

export type Experience = {
  period: string;
  role: string;
  company: string;
  location: string;
  logo: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    period: "Feb 2024 – Present",
    role: "Full Stack Engineer",
    company: "Impactility",
    location: "Pune, Maharashtra",
    logo: impactilityLogo,
    highlights: [
      "Design, build, deploy, and improve full-stack features for ServCare, a citizen-facing sustainability platform — owning delivery end-to-end across a Java/Node.js back-end, MongoDB and SQL data layer, and React.js front-end.",
      "Translate business requirements into technical designs and implementation plans, building RESTful API endpoints and integrating backend services while partnering directly with product stakeholders to identify pain points and define solutions.",
      "Improved application performance and reliability by redesigning MongoDB schema and indexing strategy, reducing average query response time by ~40% on high-traffic endpoints.",
      "Perform peer code reviews each sprint and track bugs/changes through the team's issue-management workflow, giving feedback on style, correctness, testability, and efficiency to uphold engineering standards.",
      "Led design and rollout of a reusable UI component library, reducing new-feature development time by ~25% and improving consistency across the platform.",
      "Adapt priorities and collaborate cross-functionally within 2-week Agile sprints, delivering 3–5 features per quarter and supporting release readiness through CI/CD (GitHub Actions).",
    ],
  },
  {
    period: "Sep 2023 – Jan 2024",
    role: "Software Engineer",
    company: "Tech Alchemy",
    location: "Pune, India",
    logo: techAlchemyLogo,
    highlights: [
      "Built full-stack React.js modules integrating blockchain APIs, partnering with back-end engineers to define and validate API contracts for seamless integration.",
      "Refactored legacy components into a shared, reusable library, reducing duplicate code and easing long-term maintenance.",
      "Participated in peer code reviews and Agile sprint ceremonies, contributing to team-wide adoption of front-end best practices.",
    ],
  },
  {
    period: "Jun 2023 – Aug 2023",
    role: "Software Engineer Intern",
    company: "Tech Alchemy",
    location: "Pune, India",
    logo: techAlchemyLogo,
    highlights: [
      "Built responsive front-end applications (React.js, TypeScript) and integrated REST APIs under senior engineer guidance within an Agile sprint cycle.",
    ],
  },
  {
    period: "Jun 2021 – Aug 2021",
    role: "Java Full Stack Developer Intern",
    company: "Codekul Pvt Ltd",
    location: "Pune, India",
    logo: codekulLogo,
    highlights: [
      "Developed a full-stack service-marketplace platform, building front-end components (React.js, HTML5, CSS) and back-end REST APIs (Java, Spring Boot).",
      "Collaborated with the development team to implement and test application features.",
    ],
  },
];
