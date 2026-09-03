export type SkillGroup = {
  category: string;
  skills: { name: string; description: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', description: 'Used to build reusable, responsive production interfaces.' },
      { name: 'Next.js', description: 'Used to build modern application experiences and routes.' },
      { name: 'TypeScript', description: 'Used to make application behavior easier to reason about.' },
      { name: 'JavaScript', description: 'Used across interactive product experiences and application logic.' },
      { name: 'Tailwind CSS', description: 'Used to create consistent responsive UI systems.' },
      { name: 'Material UI', description: 'Used for accessible, reusable interface patterns.' },
      { name: 'Vite', description: 'Used for fast modern frontend development.' },
      { name: 'shadcn/ui', description: 'Used to compose focused, reusable UI primitives.' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', description: 'Used for backend services, APIs, and application workflows.' },
      { name: 'NestJS', description: 'Used to structure maintainable backend modules.' },
      { name: 'Express.js', description: 'Used to build RESTful application services.' },
      { name: 'REST APIs', description: 'Used to support production application workflows.' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', description: 'Used to design and maintain schemas for product features.' },
      { name: 'SQL', description: 'Used to work with structured application data.' },
      { name: 'PostgreSQL', description: 'Used for relational data and backend workflows.' },
    ],
  },
  {
    category: 'Blockchain',
    skills: [
      { name: 'Solidity', description: 'Used to work with smart contract systems.' },
      { name: 'Hardhat', description: 'Used in smart contract development workflows.' },
      { name: 'Foundry', description: 'Used to explore and develop Solidity systems.' },
      { name: 'Web3.js', description: 'Used to connect product experiences with blockchain systems.' },
      { name: 'Wagmi', description: 'Used for wallet-aware React integrations.' },
      { name: 'Viem', description: 'Used for typed Ethereum interactions.' },
      { name: 'ERC-3643', description: 'Used to explore tokenized asset and identity standards.' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', description: 'Used for version control and collaborative development.' },
      { name: 'GitHub', description: 'Used to share code and track project work.' },
      { name: 'Postman', description: 'Used to inspect and validate API behavior.' },
      { name: 'VS Code', description: 'Used as a focused development environment.' },
    ],
  },
];