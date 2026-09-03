import { useEffect, useState, type CSSProperties, type FormEvent } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react';
import { achievements } from '@/data/achievements';
import { experience } from '@/data/experience';
import { projectLinks, projects, type Project } from '@/data/projects';
import { skillGroups } from '@/data/skills';

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Thinking', href: '#thinking' },
  { label: 'Contact', href: '#contact' },
];

function scrollToSection(href: string, closeMenu?: () => void) {
  closeMenu?.();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}

function TerminalVisual() {
  return (
    <div className="terminal reveal" data-testid="visual-terminal">
      <div className="terminal-top">
        <div className="terminal-dots" aria-hidden="true"><i /><i /><i /></div>
        <span className="mono">vaishnavi/profile.ts</span>
        <span className="mono">● live</span>
      </div>
      <div className="terminal-body">
        <div className="code-line"><span className="line-no">01</span><span className="code"><span className="key">const</span> developer = {'{'}</span></div>
        <div className="code-line"><span className="line-no">02</span><span className="code">&nbsp;&nbsp;name: <span className="value">'Vaishnavi Gaikwad'</span>,</span></div>
        <div className="code-line"><span className="line-no">03</span><span className="code">&nbsp;&nbsp;focus: [</span></div>
        <div className="code-line"><span className="line-no">04</span><span className="code">&nbsp;&nbsp;&nbsp;&nbsp;<span className="value">'full-stack'</span>,</span></div>
        <div className="code-line"><span className="line-no">05</span><span className="code">&nbsp;&nbsp;&nbsp;&nbsp;<span className="value">'product'</span>,</span></div>
        <div className="code-line"><span className="line-no">06</span><span className="code">&nbsp;&nbsp;&nbsp;&nbsp;<span className="value">'problem-solving'</span>,</span></div>
        <div className="code-line"><span className="line-no">07</span><span className="code">&nbsp;&nbsp;],</span></div>
        <div className="code-line"><span className="line-no">08</span><span className="code">&nbsp;&nbsp;experience: <span className="value">'3+ years'</span>,</span></div>
        <div className="code-line"><span className="line-no">09</span><span className="code">&nbsp;&nbsp;approach: <span className="fn">ship</span>(<span className="value">'with intent'</span>),</span></div>
        <div className="code-line"><span className="line-no">10</span><span className="code">{'}'}<span className="terminal-cursor" aria-hidden="true" /></span></div>
        <div className="code-line" style={{ marginTop: 20 }}><span className="line-no">11</span><span className="code comment">// make it useful. then make it clear.</span></div>
      </div>
    </div>
  );
}

function Navigation({ light, onTheme, onResume }: { light: boolean; onTheme: () => void; onResume: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Vaishnavi Gaikwad home" data-testid="link-home">
          <span className="brand-mark">VG</span><span>Vaishnavi Gaikwad</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {navigation.map((item) => <a href={item.href} key={item.href} data-testid={`link-nav-${item.label.toLowerCase()}`}>{item.label}</a>)}
        </nav>
        <div className="nav-actions">
          <a className="nav-social" href={projectLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={14} /></a>
          <a className="nav-social" href={projectLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={14} /></a>
          <button className="icon-btn" onClick={onTheme} aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'} data-testid="button-theme-toggle">
            {light ? <Moon size={15} /> : <Sun size={15} />}
          </button>
          <button className="button" onClick={onResume} data-testid="button-nav-resume">Resume <Download size={14} /></button>
          <button className="menu-btn" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>
      {menuOpen && <nav className="mobile-menu" aria-label="Mobile navigation">{navigation.map((item) => <a href={item.href} key={item.href} onClick={closeMenu} data-testid={`link-mobile-${item.label.toLowerCase()}`}>{item.label}</a>)}</nav>}
    </header>
  );
}

function SectionHeading({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return <div className="section-head reveal"><div><div className="eyebrow">{eyebrow}</div><h2 className="section-title">{title}</h2></div>{note && <p className="section-note">{note}</p>}</div>;
}

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <article className="modal" role="dialog" aria-modal="true" aria-labelledby="case-study-title" data-testid={`modal-project-${project.id}`}>
        <div className="modal-header">
          <div><div className="eyebrow">{project.eyebrow}</div><h2 id="case-study-title">{project.title}</h2></div>
          <button className="icon-btn" onClick={onClose} aria-label="Close case study" data-testid="button-close-case-study"><X size={16} /></button>
        </div>
        <p className="modal-copy">{project.detail}</p>
        <div className="modal-section"><h3>Problem</h3><p>{project.problem}</p></div>
        <div className="modal-section"><h3>Solution</h3><p>{project.solution}</p></div>
        <div className="modal-section"><h3>Key features</h3><ul className="modal-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
        <div className="modal-section"><h3>Role</h3><p>{project.role}</p></div>
        <div className="modal-section"><h3>Outcome</h3><p>{project.outcome}</p></div>
        <div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
        {project.href !== '#' && <a className="text-link" href={project.href} target="_blank" rel="noreferrer" style={{ marginTop: 24 }} data-testid={`link-project-${project.id}`}>Open link <ExternalLink size={13} /></a>}
      </article>
    </div>
  );
}

function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const update = (field: keyof typeof values, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
    setSubmitted(false);
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = 'Please add your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Please add a valid email.';
    if (values.message.trim().length < 12) next.message = 'A little more context helps.';
    setErrors(next);
    if (!Object.keys(next).length) setSubmitted(true);
  };
  return (
    <form onSubmit={submit} noValidate data-testid="form-contact">
      <div className="form-grid">
        <div className="field"><label htmlFor="name">Name</label><input id="name" value={values.name} onChange={(event) => update('name', event.target.value)} placeholder="Your name" data-testid="input-contact-name" aria-invalid={Boolean(errors.name)} />{errors.name && <span className="error-text">{errors.name}</span>}</div>
        <div className="field"><label htmlFor="email">Email</label><input id="email" type="email" value={values.email} onChange={(event) => update('email', event.target.value)} placeholder="you@company.com" data-testid="input-contact-email" aria-invalid={Boolean(errors.email)} />{errors.email && <span className="error-text">{errors.email}</span>}</div>
        <div className="field full"><label htmlFor="message">What are you building?</label><textarea id="message" value={values.message} onChange={(event) => update('message', event.target.value)} placeholder="A product, a problem, or a role worth talking about..." data-testid="input-contact-message" aria-invalid={Boolean(errors.message)} />{errors.message && <span className="error-text">{errors.message}</span>}</div>
      </div>
      <button className="button" type="submit" style={{ marginTop: 20 }} data-testid="button-submit-contact">Send message <ArrowUpRight size={14} /></button>
      {submitted && <div className="form-status" role="status" data-testid="status-contact-success"><Check size={14} style={{ verticalAlign: -2, marginRight: 6 }} />Thanks. Your message is ready to send.</div>}
    </form>
  );
}

function App() {
  const [light, setLight] = useState(() => localStorage.getItem('vg-theme') === 'light');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  useEffect(() => {
    document.documentElement.classList.toggle('light', light);
    localStorage.setItem('vg-theme', light ? 'light' : 'dark');
  }, [light]);
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { elements.forEach((element) => element.classList.add('visible')); return; }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  const downloadResume = () => { window.open('/resume.pdf', '_blank', 'noopener,noreferrer'); };

  return (
    <div className="app-shell" id="top">
      <Navigation light={light} onTheme={() => setLight((value) => !value)} onResume={downloadResume} />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow">01 / introduction</div>
              <h1 id="hero-title">Building scalable products,<br /><em>not just writing code.</em></h1>
              <p>Full Stack Developer with 3+ years of experience building production-ready web applications, APIs and user-focused digital products with React, Next.js, Node.js, TypeScript, and MongoDB.</p>
              <div className="hero-ctas"><button className="button" onClick={() => scrollToSection('#work')} data-testid="button-explore-work">Explore my work <ArrowDownRight size={15} /></button><a className="text-link" href={projectLinks.email} data-testid="link-hero-email">Let's talk <ArrowUpRight size={14} /></a></div>
              <div className="availability"><span className="pulse" />Open to the right problem</div>
            </div>
            <TerminalVisual />
          </div>
        </section>

        <div className="proof-strip"><div className="container proof-grid">
          <div className="proof-item reveal" data-testid="stat-experience"><span className="proof-value">3+</span><span className="proof-label">years building</span></div>
          <div className="proof-item reveal" data-testid="stat-dsa"><span className="proof-value">100+</span><span className="proof-label">DSA problems</span></div>
          <div className="proof-item reveal" data-testid="stat-stack"><span className="proof-value">Full Stack</span><span className="proof-label">frontend + backend</span></div>
          <div className="proof-item reveal" data-testid="stat-production"><span className="proof-value">Production</span><span className="proof-label">real-world applications</span></div>
        </div></div>

        <section id="about" aria-labelledby="about-title"><div className="container">
          <SectionHeading eyebrow="02 / context" title="The person behind the pull request." note="A little context goes a long way. Here is the short version." />
          <div className="about-grid">
            <div className="about-profile reveal">
              <div className="portrait-frame" aria-label="Portrait placeholder">
                <div className="portrait-placeholder">
                  <span className="portrait-initials">VG</span>
                  <span className="portrait-note">Portrait coming soon</span>
                </div>
                <span className="portrait-caption">Replace with <code>public/profile.jpg</code></span>
              </div>
            </div>
            <div className="reveal"><p className="about-lede">I’m Vaishnavi Gaikwad, a Full Stack Web Developer focused on building reliable, user-friendly and scalable web applications.</p><p className="about-copy">I enjoy working across the stack — from creating intuitive React interfaces to designing APIs, database models and backend services.</p><p className="about-copy">I enjoy building products, solving engineering problems, learning new technologies, practicing DSA, working across frontend and backend, and exploring Web3/blockchain technologies.</p></div>
            <div className="principles reveal">{[['01', 'Start with the why', 'Understand the problem before reaching for the familiar solution.'], ['02', 'Make complexity legible', 'Good architecture gives the next person a clear place to stand.'], ['03', 'Ship, then sharpen', 'Move with purpose. Learn from the real thing. Improve it.']].map(([number, title, text]) => <div className="principle" key={number}><span className="principle-num">{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
          </div>
        </div></section>

        <section aria-labelledby="experience-title"><div className="container"><SectionHeading eyebrow="03 / trajectory" title="A practice in motion." note="The role titles are simple. The work underneath is not." /><div className="timeline">{experience.map((item) => <article className="timeline-item reveal" key={`${item.period}-${item.role}`} data-testid={`experience-${item.role.toLowerCase().replaceAll(' ', '-')}`}><div className="timeline-date">{item.period}</div><h3>{item.role}</h3><div className="timeline-place">{item.organization}</div><p>{item.description}</p></article>)}</div></div></section>

        <section id="work" className="projects-section" aria-labelledby="work-title"><div className="container"><SectionHeading eyebrow="04 / selected work" title="Proof, not promises." note="A selection of work and working directions. Open a card for the deeper cut." /><div className="project-grid">{projects.map((project, index) => <article className="project-card reveal" key={project.id} data-testid={`card-project-${project.id}`}><div><span className="project-index">{project.index} / {index === 0 ? 'case study' : 'direction'}</span><div className="eyebrow" style={{ marginTop: 25 }}>{project.eyebrow}</div><h3>{project.title}</h3><p>{project.summary}</p></div><div className="project-meta"><div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><button className="arrow-link" onClick={() => setSelectedProject(project)} aria-label={`Open ${project.title} case study`} data-testid={`button-open-project-${project.id}`}><ChevronRight size={20} /></button></div></article>)}</div>
          <div className="architecture reveal" aria-labelledby="architecture-title"><div className="arch-top"><div><div className="eyebrow">Architecture / a way of thinking</div><h3 id="architecture-title">Keep the user journey in focus.</h3></div><p>Web3 architecture visualization — replace the labels with the approved implementation details.</p></div><div className="arch-flow" aria-label="Web3 architecture flow"><div className="arch-node"><strong>Interface</strong><small>clarity first</small></div><div className="arch-arrow"><ArrowUpRight size={17} /></div><div className="arch-node"><strong>Wallet</strong><small>user control</small></div><div className="arch-arrow"><ArrowUpRight size={17} /></div><div className="arch-node"><strong>Contract</strong><small>trust layer</small></div><div className="arch-arrow"><ArrowUpRight size={17} /></div><div className="arch-node"><strong>Service</strong><small>orchestration</small></div><div className="arch-arrow"><ArrowUpRight size={17} /></div><div className="arch-node"><strong>Data</strong><small>useful state</small></div></div></div>
        </div></section>

        <section id="thinking" aria-labelledby="skills-title"><div className="container"><SectionHeading eyebrow="05 / toolkit" title="The tools are only half the story." note="Hover a capability for the principle behind it. Update the labels as the work evolves." /><div className="skills-layout"><div className="skills-intro reveal"><p>Technologies change. The habit of asking better questions travels.</p><a className="text-link" href={projectLinks.github} target="_blank" rel="noreferrer" data-testid="link-github-toolkit">See the code <Github size={14} /></a></div><div className="skill-groups">{skillGroups.map((group) => <div className="skill-group reveal" key={group.category}><h3>{group.category}</h3><div className="skill-chips">{group.skills.map((skill) => <div className="skill-chip" key={skill.name} tabIndex={0} data-testid={`skill-${skill.name.toLowerCase().replaceAll(' ', '-')}`}>{skill.name}<span>{skill.description}</span></div>)}</div></div>)}</div></div></div></section>

        <section aria-labelledby="dsa-title"><div className="container"><div className="dsa-block reveal"><div><div className="eyebrow">06 / fundamentals</div><h3 id="dsa-title">Always sharpening the fundamentals.</h3><p><strong>100+ DSA Problems Solved</strong> in Java across arrays, strings, hashing, sorting, binary search, two pointers, recursion, and algorithms.</p><a className="text-link" href={projectLinks.leetcode} target="_blank" rel="noreferrer" style={{ marginTop: 26 }} data-testid="link-leetcode">View LeetCode <ExternalLink size={13} /></a></div><div className="dsa-bars" aria-label="Problem solving topics"><div className="bar-row"><span>arrays & strings</span><div className="bar"><i style={{ '--bar': '78%' } as CSSProperties} /></div><b>practice</b></div><div className="bar-row"><span>hashing & sorting</span><div className="bar"><i style={{ '--bar': '64%' } as CSSProperties} /></div><b>practice</b></div><div className="bar-row"><span>algorithms</span><div className="bar"><i style={{ '--bar': '88%' } as CSSProperties} /></div><b>practice</b></div></div></div></div></section>

        <section aria-labelledby="achievements-title"><div className="container"><SectionHeading eyebrow="07 / signals" title="What I bring to the room." note="Not a list of inflated metrics. A few true signals." /><div className="achievements">{achievements.map((achievement) => <article className="achievement reveal" key={achievement.number} data-testid={`achievement-${achievement.number}`}><span>{achievement.number}</span><h3>{achievement.title}</h3><p>{achievement.description}</p></article>)}</div></div></section>

        <section id="contact" className="contact" aria-labelledby="contact-title"><div className="container contact-grid"><div className="contact-copy reveal"><div className="eyebrow">08 / next move</div><h2 id="contact-title" className="section-title">Have a good problem?</h2><p>I'm interested in thoughtful teams, meaningful products, and the kind of engineering work that rewards care. If that sounds like your world, say hello.</p><div className="socials"><a href={projectLinks.github} target="_blank" rel="noreferrer" data-testid="link-github">GitHub</a><a href={projectLinks.linkedin} target="_blank" rel="noreferrer" data-testid="link-linkedin">LinkedIn</a><a href={projectLinks.email} data-testid="link-email">Email</a></div><button className="text-link" onClick={downloadResume} style={{ marginTop: 25, border: 0, background: 'transparent', padding: 0 }} data-testid="button-contact-resume">Download resume <Download size={13} /></button></div><div className="reveal"><ContactForm /></div></div></section>
      </main>
      <footer><div className="container footer-inner"><span className="footer-mark">VG / portfolio</span><p>Designed, built, and still thinking about it.</p><a className="text-link" href="#top" data-testid="link-back-to-top">Back to top <ArrowUpRight size={13} /></a></div></footer>
      {selectedProject && <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}

export default App;