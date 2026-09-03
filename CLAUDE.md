# CLAUDE.md --- Vaishnavi Gaikwad Portfolio

## Goal

Build a premium, modern, recruiter-focused portfolio for **Vaishnavi
Gaikwad**, a Full Stack Web Developer with 3+ years of professional
experience.

Core message: \> **Building scalable products, not just writing code.**

The site should feel like a combination of a premium SaaS product,
modern software-engineer portfolio, personal brand, and technical
case-study site --- never like a generic AI-generated portfolio.

## Tech Stack

-   React + TypeScript + Vite
-   Tailwind CSS
-   Framer Motion
-   Lucide React
-   Use clean component-based architecture and minimal dependencies.
-   Fully responsive: desktop, tablet, mobile.

## Design

Use a **premium dark-first UI**, inspired by Vercel, Linear, Raycast,
and high-end SaaS sites.

Use: - Deep dark backgrounds - Strong typography and hierarchy - Subtle
borders and gradients - Minimal glow - Large whitespace - Clean cards -
Smooth, restrained animations

Avoid: - Cartoon developer illustrations - Stock photos - Excessive
gradients/glassmorphism - Huge animations - Generic "Hello World" hero
sections - Fake statistics, testimonials, awards, or metrics

## Navigation

Sticky navbar: - Home, About, Experience, Projects, Skills,
Achievements, Contact - GitHub, LinkedIn, Resume, theme toggle - Mobile:
animated hamburger menu - Slight blur/transparency on scroll

## Main Sections

### Hero

-   **VAISHNAVI GAIKWAD**
-   Heading: **Building scalable products, not just writing code.**
-   Supporting text: Full Stack Developer with 3+ years of experience
    building production-ready web applications, APIs and user-focused
    digital products.
-   Technologies: React, Next.js, Node.js, TypeScript, MongoDB
-   CTAs: View My Work, Download Resume
-   Links: GitHub, LinkedIn, Email
-   Include an elegant interactive terminal showing `whoami`, stack, and
    status.

### Proof / Stats

Only use provided facts: - **3+** Years Experience - **100+** DSA
Problems - **Full Stack** Frontend + Backend - **Production** Real-world
Applications

### About

Present a concise professional introduction and interests: - Product
building - Engineering problem solving - Learning technologies -
DSA/problem solving - Frontend + backend development - Web3/blockchain
exploration

### Experience

Use a polished vertical timeline.

**Full Stack Web Developer** - React, Next.js, Node.js, NestJS,
TypeScript, MongoDB - REST APIs, API integration, schema design - Code
reviews, legacy-module refactoring, Agile development - Focus on real
engineering responsibilities and achievement-oriented wording. - Do not
invent metrics.

**Full Stack Web Developer Intern --- Codekul Pvt Ltd** - June 2021 --
August 2021 - ReactJS, Java, Spring Boot - Include frontend development
and backend/API exposure.

### Featured Projects

Projects are a major focus. Each card should support: - Visual - Name
and description - Problem / solution - Key features - Technologies -
Contribution - GitHub / live demo - View Case Study

Use a dedicated page or polished full-screen modal.

**ServCare --- Waste Management Platform** - Waste pickup platform -
Services: E-waste, Plastic, Textile, Used Cooking Oil - Cities: Pune,
Mumbai, Ahmedabad - Features include scheduling, requests, rescheduling,
cancellation, certificates, rewards, coupons, categories and
redemption. - Contribution: React frontend, Node.js APIs, MongoDB, UI
design system, API integration, feature development, backend
integration - Live: https://servcare.com/ - GitHub:
https://github.com/Vaishnavidg/servcare-ai-assistant

**Blockchain / Web3** Technologies: - Solidity, ERC-3643, Hardhat,
Foundry, Wagmi, Viem, Web3.js Projects/work: - ERC3643 Playground - Watr
ecosystem - TrustPool - NFT Minter

Include a subtle architecture visualization:
`Frontend → Wallet → Web3 Library → Smart Contract → Blockchain`

**Additional Project** Create an editable reusable project card. Store
project content in `src/data/projects.ts`.

### Skills

Group skills rather than showing a giant list.

**Frontend:** React.js, Next.js, TypeScript, JavaScript, Tailwind CSS,
Material UI, Vite, shadcn/ui

**Backend:** Node.js, NestJS, Express.js, REST APIs

**Databases:** MongoDB, SQL, PostgreSQL

**Blockchain:** Solidity, Hardhat, Foundry, Web3.js, Wagmi, Viem,
ERC-3643

**Tools:** Git, GitHub, Postman, VS Code

Use interactive cards with short usage descriptions on hover.

### Engineering Philosophy

Four cards: 1. **Build for users** --- Good engineering starts with
understanding the problem. 2. **Keep systems maintainable** --- Readable
code, reusable components and clean architecture matter. 3. **Own
features end-to-end** --- Work across UI, APIs, databases and
integrations. 4. **Keep learning** --- Improve through DSA, new
technologies and hands-on projects.

### DSA

-   Heading: **Always sharpening the fundamentals.**
-   **100+ DSA Problems Solved**
-   Java
-   Topics: Arrays, Strings, Hashing, Sorting, Binary Search, Two
    Pointers, Recursion, Algorithms
-   Include a LeetCode button.
-   Do not fabricate LeetCode statistics.
-   Store editable values in `src/data/achievements.ts`.

### Achievements

Use only known facts: - 3+ years professional experience - 100+ DSA
problems solved - Full Stack development experience - Production API
development - React/Node.js development - Blockchain/Web3 experience

### Resume

CTA: **Want the complete picture?** "Download my resume for a detailed
overview of my experience, projects and technical skills."

Use placeholder: `/public/resume.pdf`

### Contact

Heading: **Let's build something meaningful.**

Include: - Email Me - LinkedIn - GitHub - Form: Name, Email, Message -
Proper validation - No backend initially; keep structure ready for an
email/backend service.

### Footer

-   Vaishnavi Gaikwad
-   Full Stack Developer \| Product Builder \| Problem Solver
-   GitHub, LinkedIn, Email
-   Copyright

## Animation & Interaction

Use Framer Motion sparingly: - Hero entrance - Scroll reveal -
Project/skill hover - Timeline animation - Button hover - Modal
transitions - Number counter

Premium details: - Desktop cursor glow - Project cards subtly follow
cursor - Featured-project animated border - Terminal typing effect -
Smooth scrolling - Active navigation indicator - Technology hover
descriptions - Case-study modal - Theme toggle

Disable expensive cursor effects on mobile and respect
`prefers-reduced-motion`.

## Architecture

Keep content separate from UI.

``` text
src/
  components/
    Navbar.tsx
    Hero.tsx
    Stats.tsx
    About.tsx
    Experience.tsx
    Projects.tsx
    ProjectCard.tsx
    ProjectModal.tsx
    Skills.tsx
    Achievements.tsx
    DSASection.tsx
    Philosophy.tsx
    ResumeCTA.tsx
    Contact.tsx
    Footer.tsx
  data/
    projects.ts
    experience.ts
    skills.ts
    achievements.ts
  pages/
    Home.tsx
  App.tsx
```

Projects, experience, skills, achievements, and social links must be
editable without rewriting UI components.

## Accessibility & SEO

-   Semantic HTML
-   Keyboard navigation
-   Visible focus states
-   ARIA labels where needed
-   Alt text
-   Good contrast
-   Reduced-motion support

SEO: - Title: `Vaishnavi Gaikwad | Full Stack Developer` - Meta
description:
`Portfolio of Vaishnavi Gaikwad, a Full Stack Developer specializing in React, Next.js, Node.js, TypeScript and modern web technologies.` -
Open Graph metadata - Semantic headings

## Data Integrity --- Critical

**Never invent information.**

Do not fabricate: - Companies - Job titles - Salary - Users/revenue -
Performance metrics - Awards/certifications - Project metrics -
Technologies - Responsibilities

If information is missing, use an **editable placeholder**.

## Performance

Optimize for: - Fast loading - Minimal dependencies - Lazy-loaded
images - Efficient animations - Responsive layout - Strong Lighthouse
scores

## Final QA

Before considering the site complete, verify: - Desktop / tablet /
mobile layouts - Navigation and theme toggle - All buttons and links -
Project case-study modal - Resume - GitHub / LinkedIn / Email - Contact
validation - Keyboard navigation - Animations - No horizontal overflow -
No console errors - No TypeScript errors - No broken imports

Run the project and fix all errors before completion.

## Most Important Principle

The portfolio must look **personally designed by a real software
engineer**, not generated from an AI template.

Within the first 10 seconds, a recruiter should understand: 1. Who
Vaishnavi is 2. What she builds 3. What she has worked on 4. Her
technology stack 5. Evidence of problem-solving 6. How to contact her
