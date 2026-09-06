export type SkillGroup = {
  label: string;
  items: string[];
};

export type SkillCategory = {
  number: string;
  category: string;
  /** Flat list — use this OR `groups`, not both. */
  technologies?: string[];
  /** Labelled sub-lists, e.g. Frontend / Backend. */
  groups?: SkillGroup[];
};

/**
 * Ordered by recruiter priority. Only the technologies that are actually used
 * belong here — add or remove entries, don't pad the lists.
 */
export const skillCategories: SkillCategory[] = [
  {
    number: "01",
    category: "Languages",
    technologies: ["Java", "JavaScript", "TypeScript", "Solidity"],
  },
  {
    number: "02",
    category: "Frontend",
    technologies: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    number: "03",
    category: "Backend",
    technologies: [
      "Node.js",
      "NestJS",
      "Spring Boot",
      "REST APIs",
      "Web APIs",
      "Third-party service integration",
    ],
  },
  {
    number: "04",
    category: "Databases",
    technologies: ["MongoDB", "SQL", "Relational databases"],
  },
  {
    number: "05",
    category: "AI-Enabled Application Development",
    technologies: [
      "OpenAI API",
      "Prompt Engineering",
      "AI-assisted development",
      "Cursor AI",
      "Claude",
    ],
  },
  {
    number: "06",
    category: "Cloud & DevOps",
    technologies: ["Git", "GitHub", "GitHub Actions", "CI/CD"],
  },
  {
    number: "07",
    category: "Engineering Practices",
    technologies: [
      "Agile / Scrum",
      "Requirement analysis",
      "Design reviews",
      "Peer code reviews",
      "Bug tracking",
      "Change tracking",
      "Cross-functional collaboration",
      "Stakeholder collaboration",
    ],
  },
  {
    number: "08",
    category: "Data Structures & Algorithms",
    technologies: [
      "Arrays",
      "Strings",
      "Hashing",
      "Sorting",
      "Binary Search",
      "Two Pointers",
      "Recursion",
      "Algorithms",
      "OOP",
    ],
  },
];
