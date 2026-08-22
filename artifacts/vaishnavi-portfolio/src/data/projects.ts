export type Project = {
  id: string;
  index: string;
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  tags: string[];
  detail: string;
  role: string;
  outcome: string;
  href: string;
  github?: string;
};

export const projectLinks = {
  github: 'https://github.com/Vaishnavidg',
  linkedin: 'https://www.linkedin.com/in/your-handle',
  email: 'mailto:hello@example.com',
  liveWebsite: 'https://servcare.com/',
  leetcode: 'https://leetcode.com/your-handle',
};

export const projects: Project[] = [
  {
    id: 'servcare',
    index: '01',
    title: 'ServCare',
    eyebrow: 'Featured case study · waste management platform',
    summary: 'A digital waste-management platform that enables users to schedule and manage waste pickup services.',
    problem: 'Waste pickup journeys can be fragmented across categories, addresses, schedules, and follow-up requests.',
    solution: 'Built a clear service flow for selecting materials, choosing an address, scheduling a pickup, and tracking each request through completion.',
    features: ['Address selection', 'Pickup scheduling', 'Request details', 'Rescheduling', 'Pickup certificates', 'Reward points', 'Coupons', 'Redemption flow'],
    tags: ['React', 'Node.js', 'MongoDB'],
    detail: 'ServCare supports e-waste, plastic, textile, and used cooking oil pickup across Pune, Mumbai, and Ahmedabad. The product brings scheduling, request history, certificates, rewards, and redemption into one focused experience.',
    role: 'React frontend · Node.js APIs · MongoDB · UI design system · API integration',
    outcome: 'A production-oriented workflow for creating, managing, rescheduling, and completing waste pickup requests.',
    href: projectLinks.liveWebsite,
    github: 'https://github.com/Vaishnavidg/servcare-ai-assistant',
  },
  {
    id: 'web3-architecture',
    index: '02',
    title: 'Blockchain / Web3',
    eyebrow: 'Dedicated project group · systems thinking',
    summary: 'Hands-on work across ERC-3643, Watr ecosystem, TrustPool, NFT Minter, and wallet-connected product flows.',
    problem: 'Web3 products need to make the path from interface to wallet, contract, and blockchain understandable.',
    solution: 'Explore user-facing blockchain systems across smart contracts, wallet connections, and frontend libraries.',
    features: ['ERC3643 Playground', 'Watr ecosystem', 'TrustPool', 'NFT Minter', 'Wallet flows', 'Smart contract integration'],
    tags: ['Solidity', 'Hardhat', 'Foundry', 'Wagmi', 'Viem'],
    detail: 'Web3 work across Solidity, ERC-3643, Hardhat, Foundry, Wagmi, Viem, and Web3.js. Replace this editable summary with the approved case-study details for each implementation.',
    role: 'Frontend · wallet integration · smart contract ecosystem',
    outcome: 'A growing body of blockchain work grounded in clear user flows and verifiable system boundaries.',
    href: projectLinks.github,
  },
  {
    id: 'problem-solving',
    index: '03',
    title: 'Add your next project',
    eyebrow: 'Editable project slot',
    summary: 'Use this reusable card for the next case study, product experiment, or engineering write-up.',
    problem: 'Replace this placeholder with the problem the project set out to solve.',
    solution: 'Replace this placeholder with the approach, decisions, and implementation you owned.',
    features: ['Problem', 'Solution', 'Key features', 'Contribution', 'Technologies'],
    tags: ['Add tech', 'Add domain'],
    detail: 'This card is intentionally ready for your next project. Add one object to src/data/projects.ts and the card plus case-study modal will update automatically.',
    role: 'Add your contribution here.',
    outcome: 'Add the outcome, learning, or link here.',
    href: projectLinks.leetcode,
  },
];