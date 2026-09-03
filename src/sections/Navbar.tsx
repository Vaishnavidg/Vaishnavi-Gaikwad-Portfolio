import { useState } from "react";
import { Download, Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";

import { navigation } from "@/data/navigation";
import { projectLinks } from "@/data/projects";
import { openResume } from "@/lib/resume";

export function Navbar({
  light,
  onToggleTheme,
}: {
  light: boolean;
  onToggleTheme: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <a
          href="#top"
          className="brand"
          aria-label="Vaishnavi Gaikwad home"
          data-testid="link-home"
        >
          <span className="brand-mark">VG</span>
          <span>Vaishnavi Gaikwad</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              href={item.href}
              key={item.href}
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a
            className="nav-social"
            href={projectLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={14} />
          </a>
          <a
            className="nav-social"
            href={projectLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={14} />
          </a>
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={
              light ? "Switch to dark theme" : "Switch to light theme"
            }
            data-testid="button-theme-toggle"
          >
            {light ? <Moon size={15} /> : <Sun size={15} />}
          </button>
          <button
            className="button"
            onClick={openResume}
            data-testid="button-nav-resume"
          >
            Resume <Download size={14} />
          </button>
          <button
            className="menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a
              href={item.href}
              key={item.href}
              onClick={closeMenu}
              data-testid={`link-mobile-${item.label.toLowerCase()}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
