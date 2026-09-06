import { useEffect } from "react";
import { ExternalLink, X } from "lucide-react";

import type { Project } from "@/data/projects";

export function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        data-testid={`modal-project-${project.id}`}
      >
        <div className="modal-header">
          <div>
            <div className="eyebrow">{project.eyebrow}</div>
            <h2 id="case-study-title">{project.title}</h2>
          </div>
          <button
            className="icon-btn"
            onClick={onClose}
            aria-label="Close case study"
            data-testid="button-close-case-study"
          >
            <X size={16} />
          </button>
        </div>
        <p className="modal-copy">{project.detail}</p>
        <div className="modal-section">
          <h3>Problem</h3>
          <p>{project.problem}</p>
        </div>
        <div className="modal-section">
          <h3>Solution</h3>
          <p>{project.solution}</p>
        </div>
        <div className="modal-section">
          <h3>Key features</h3>
          <ul className="modal-list">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="modal-section">
          <h3>Role</h3>
          <p>{project.role}</p>
        </div>
        <div className="modal-section">
          <h3>Outcome</h3>
          <p>{project.outcome}</p>
        </div>
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        {project.href !== "#" && (
          <a
            className="text-link"
            href={project.href}
            target="_blank"
            rel="noreferrer"
            style={{ marginTop: 24 }}
            data-testid={`link-project-${project.id}`}
          >
            Open link <ExternalLink size={13} />
          </a>
        )}
      </article>
    </div>
  );
}
