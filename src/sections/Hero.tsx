import {
  ArrowUpRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import { projectLinks } from "@/data/projects";
import { HeroPortrait } from "@/components/HeroPortrait";
import { LeetCodeIcon } from "@/components/LeetCodeIcon";
import { RoleRotator } from "@/components/RoleRotator";
import { TerminalVisual } from "@/components/TerminalVisual";
import { scrollToSection } from "@/lib/scroll";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-lead">
          <div className="eyebrow">01 / introduction</div>
          <HeroPortrait />
          <div className="hero-copy reveal">
            <h1 id="hero-title" className="hero-title">
              <span className="hero-title-lead">I build as a</span>
              <span className="hero-title-role">
                <RoleRotator />
              </span>
            </h1>
            <p className="about-lede">
              I’m Vaishnavi Gaikwad — 3+ years shipping production web apps and
              APIs, with hands-on blockchain / Web3 work and a growing focus on
              AI-powered products. I start with the problem, not the stack.
            </p>
            <div className="hero-stack" aria-label="Core stack">
              <a
                className="nav-social"
                href={projectLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                className="nav-social"
                href={projectLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                className="nav-social"
                href={projectLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
              >
                <LeetCodeIcon size={22} />
              </a>
              <a
                className="nav-social"
                href={projectLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                className="nav-social"
                href={projectLinks.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
            <div className="hero-ctas">
              <button
                className="button"
                onClick={() => scrollToSection("#work")}
                data-testid="button-explore-work"
              >
                Explore my work <ArrowUpRight size={15} />
              </button>
              <button
                className="button ghost"
                onClick={() => scrollToSection("#contact")}
                data-testid="button-hero-contact"
              >
                Let's talk <ArrowUpRight size={14} />
              </button>
            </div>
            {/* <div className="availability">
              <span className="pulse" />
              Open to the right problem
            </div> */}
          </div>
        </div>
        <TerminalVisual />
      </div>
    </section>
  );
}
