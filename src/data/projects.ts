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
  github: "https://github.com/Vaishnavidg",
  linkedin: "https://www.linkedin.com/in/vaishnavidg/",
  email: "vaishnavig3001@gmail.com",
  servcareWebsite: "https://servcare.com/",
  leetcode: "https://leetcode.com/u/Vaishnavidg/",
  instagram: "https://www.instagram.com/vaishnavidg3001/?hl=en#",
};

export const projects: Project[] = [
  {
    id: "servcare",
    index: "01",
    title: "ServCare - Waste Management Platform",
    eyebrow: "Full-Stack Web Application",
    summary:
      "A digital waste-management platform that simplifies waste pickup by allowing users to select waste categories, schedule pickups, manage requests, and earn rewards.",
    problem:
      "Waste collection can involve fragmented processes for selecting waste types, managing addresses, scheduling pickups, and following up on service requests. Users need a simple way to manage the entire pickup journey from one platform.",
    solution:
      "Built an end-to-end waste pickup workflow that lets users select recyclable materials, choose or add pickup addresses, schedule services, manage existing requests, and access certificates and rewards after collection.",
    features: [
      "Waste category selection",
      "Address selection and management",
      "Pickup scheduling",
      "Pickup request management",
      "Request history",
      "Pickup rescheduling",
      "Pickup certificates",
      "Reward points",
      "Coupons and offers",
      "Rewards redemption"
    ], 
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "REST API",
      "Full-Stack",
      "Responsive UI"
    ], 
    detail:
      "ServCare is a waste-management platform focused on simplifying e-waste, plastic, textile, and used cooking oil collection. The application supports users across Pune, Mumbai, and Ahmedabad and brings waste selection, pickup scheduling, request management, certificates, rewards, coupons, and redemption into a single experience.",
    role:
      "Full-Stack Developer — worked across the React frontend, Node.js APIs, MongoDB data layer, responsive UI, API integration, service workflows, and user-facing experience.", 
    outcome:
      "Built a production-oriented service workflow that enables users to create, manage, reschedule, and track waste pickup requests while connecting service completion with certificates and reward-based engagement.", 
    href: projectLinks.servcareWebsite,
  },
  {
    id: "ajaia-docs",
    index: "02",
    title: "Ajaia Docs - Collaborative Document Editor",
    eyebrow: "Full-Stack Web Application",
  
    summary:
      "A lightweight collaborative document editor inspired by Google Docs, with rich-text editing, document sharing, persistent storage, and backend-enforced authorization.",
  
    problem:
      "Document editors need more than a rich-text interface; they must reliably persist documents, manage sharing, validate requests, and prevent unauthorized users from accessing or modifying content.",
  
    solution:
      "Built a full-stack document editor with persistent PostgreSQL storage, rich-text editing, document sharing, file import, autosave, and server-side authorization enforced across every document API.",
  
    features: [
      "Create, rename, edit, autosave, and reopen documents",
      "Rich-text editing with TipTap",
      "Bold, italic, underline, headings, and lists",
      "Import .txt and .md files",
      "Document sharing and unsharing",
      "Owned and Shared with me document views",
      "Backend-enforced document authorization",
      "Zod request validation",
      "Consistent API error handling",
      "PostgreSQL persistence",
      "Automated authorization tests with Vitest"
    ],
  
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "TipTap",
      "Zod",
      "Tailwind CSS",
      "Vitest",
      "Vercel"
    ],
  
    detail:
      "Built a timeboxed full-stack MVP using Next.js 15 App Router, React 19, TypeScript, Prisma 6, and PostgreSQL. API route handlers serve as the backend, while TipTap powers rich-text editing. The application implements document ownership and sharing through backend authorization, validates requests with Zod, sanitizes stored content, supports Markdown and text imports, and includes integration tests against PostgreSQL.",
  
    role:
      "Full-Stack Developer — designed and implemented the application architecture, Next.js frontend and API routes, Prisma/PostgreSQL data layer, document sharing and authorization model, rich-text editor, validation, testing, and Vercel deployment.",
  
    outcome:
      "Delivered a production-oriented MVP with persistent document storage, secure server-side access control, document sharing, rich-text editing, file import, automated testing, and cloud deployment.",
  
    href: "https://ajaia-doc-editor-smoky.vercel.app",
  
    github: "https://github.com/Vaishnavidg/ajaia-doc-editor"
  },
    {
      "id": "trustpool",
      "index": "03",
      "title": "TrustPool",
      "eyebrow": "Blockchain - Web3",
      "summary": "An ERC-3643 compliant token management platform built on the Monad Testnet for regulated and identity-verified token transfers.",
      "problem": "Regulated token transfers require identity verification, trusted claims, and compliance checks before users can hold or transfer security tokens.",
      "solution": "Built a decentralized platform connecting on-chain identities, verifiable claims, trusted issuers, compliance rules, and ERC-3643 token management.",
      "features": [
        "On-chain identity creation and registration",
        "KYC and AML claim management",
        "Trusted issuer verification",
        "Automated compliance checks for token transfers",
        "ERC-3643 token minting, burning, and transfers",
        "Separate Admin, Issuer, and User dashboards"
      ],
      "tags": [
        "React",
        "TypeScript",
        "Solidity",
        "ERC-3643",
        "Monad",
        "Wagmi",
        "Viem",
        "Tailwind CSS"
      ],
      "detail": "Developed a modular Web3 DApp using React 18 and TypeScript with Solidity 0.8.20 smart contracts deployed on the Monad Testnet. The platform integrates identity, claims, trusted issuers, compliance, and ERC-3643 token management.",
      "role": "Full-Stack & Blockchain Developer — worked across the React frontend, Web3 wallet integration, smart contract integration, role-based dashboards, identity and claims workflows, and token management.",
      "outcome": "Delivered an end-to-end prototype for compliant tokenization where only verified users with valid claims can hold and transfer regulated tokens.",
      "href": "#trustpool",
      "github": "https://github.com/Vaishnavidg/ERC3643_Trustpool"
    },
    {
      "id": "watr-ecosystem",
      "index": "04",
      "title": "WatrEcosystem",
      "eyebrow": "Blockchain - DeFi",
      "summary": "A decentralized Web3 platform combining Watr token transfers, custom ERC20 token management, NFT minting, and a vault-based financial system.",
      "problem": "Users often need separate interfaces to manage tokens, NFTs, and DeFi vaults, making blockchain interactions complex to manage from a single platform.",
      "solution": "Built an integrated Web3 dashboard providing a unified interface for token transfers, custom ERC20 creation, NFT minting, and vault-based asset management.",
      "features": [
        "Watr token transfers between Ethereum-compatible wallets",
        "Custom ERC20 token creation and management",
        "ERC20 token approval and transfers",
        "NFT minting with image, name, description, and token ID",
        "Vault creation and deployment",
        "Token deposits and redemption through vaults",
        "Watr Vault Shares (WVS) management and transfers"
      ],
      "tags": [
        "React",
        "Solidity",
        "Wagmi",
        "Viem",
        "ERC20",
        "NFT",
        "DeFi",
        "ShadCN",
        "Tailwind CSS"
      ],
      "detail": "Developed a decentralized application integrating Solidity smart contracts for ERC20 tokens, NFT minting, and vault functionality with a React frontend. Used Wagmi and Viem for blockchain interactions and ShadCN with Tailwind CSS for the responsive interface.",
      "role": "Full-Stack & Blockchain Developer — worked on the React frontend, smart contract integration, wallet interactions, token management, NFT minting, and vault-based financial workflows.",
      "outcome": "Delivered a unified Web3 dashboard allowing users to manage tokens, mint NFTs, and interact with a vault-based financial system through a single interface.",
      "href": "#watr-ecosystem",
      "github": "https://github.com/Vaishnavidg/watr-ecosystem-dashboard"
    },
    {
      "id": "chat-app",
      "index": "05",
      "title": "ChatApp",
      "eyebrow": "Mobile Application",
      "summary": "A mobile chat application built with React Native and Firebase for communication between individuals and communities.",
      "problem": "People need a simple and accessible platform to communicate in real time through individual conversations and community-based discussions.",
      "solution": "Built a mobile chat application using React Native with Firebase as the backend to support communication between users and communities.",
      "features": [
        "Real-time one-to-one communication",
        "Community-based conversations",
        "Mobile-first chat interface",
        "Firebase backend integration",
        "Cross-platform React Native application"
      ],
      "tags": [
        "React Native",
        "Firebase",
        "Mobile Development",
        "Real-Time Chat"
      ],
      "detail": "Developed a mobile chat application using React Native with Firebase as the backend, providing an interface for users to communicate individually or within communities.",
      "role": "Mobile Application Developer — worked on the React Native application, chat interface, Firebase integration, and communication workflows.",
      "outcome": "Built a functional mobile communication platform for conversations between users and within communities.",
      "href": "#chat-app",
      "github": "https://github.com/Vaishnavidg/ChatApp"
    },
    {
      "id": "job-search-app",
      "index": "06",
      "title": "JobSearch App",
      "eyebrow": "Mobile Application",
      "summary": "A mobile job search application that helps users discover and filter employment opportunities based on their preferences.",
      "problem": "Finding relevant job opportunities can be time-consuming when users have to search through listings that do not match their preferred employment type or location.",
      "solution": "Built a mobile application that allows users to filter jobs by employment type, discover popular and nearby opportunities, and view detailed job information before applying.",
      "features": [
        "Job search and filtering",
        "Part-time, full-time, and contractor opportunities",
        "Popular jobs discovery",
        "Nearby jobs discovery",
        "Job details, qualifications, and requirements",
        "Apply to jobs",
        "Save jobs as favourites",
        "API-based job data fetching"
      ],
      "tags": [
        "React Native",
        "REST API",
        "API Integration",
        "Mobile Development"
      ],
      "detail": "Developed a React Native mobile application that fetches job data through APIs and provides users with search, filtering, job discovery, detailed job information, application, and favourite functionality.",
      "role": "Mobile Application Developer — worked on the React Native interface, API integration, job search and filtering flows, job details, and user interaction features.",
      "outcome": "Built a user-friendly mobile job discovery experience that helps users find, evaluate, save, and apply for relevant employment opportunities.",
      "href": "#job-search-app",
      "github": "https://github.com/Vaishnavidg/JobSearch_App"
    }
  ]