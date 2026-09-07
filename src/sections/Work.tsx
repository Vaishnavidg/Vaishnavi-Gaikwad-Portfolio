import { Fragment, useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronRight, Github } from "lucide-react";

import { CaseStudyModal } from "@/components/CaseStudyModal";
import { SectionHeading } from "@/components/SectionHeading";
import { projects, type Project } from "@/data/projects";

const architectureFlow = [
  { label: "Interface", note: "clarity first" },
  { label: "Wallet", note: "user control" },
  { label: "Contract", note: "trust layer" },
  { label: "Service", note: "orchestration" },
  { label: "Data", note: "useful state" },
];

const VISIBLE_COUNT = 4;

export function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, VISIBLE_COUNT);
  const hasMore = projects.length > VISIBLE_COUNT;

  return (
    <section
      id="work"
      className="projects-section"
      aria-labelledby="work-title"
    >
      <div className="container">
        <SectionHeading
          eyebrow="04 / selected work"
          title="Proof, not promises."
          note="A selection of work and working directions. Open a card for the deeper cut."
        />
        <div className="project-grid">
          {visibleProjects.map((project, index) => {
            const hasLiveLink = project.href.startsWith("http");
            return (
              <article
                className={
                  index === 0
                    ? "project-card featured reveal"
                    : "project-card reveal"
                }
                key={project.id}
                data-testid={`card-project-${project.id}`}
              >
                <div className="project-card-top">
                  <div className="project-card-heading">
                    <span className="eyebrow">
                      {project.index} / {project.eyebrow}
                    </span>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title} repository on GitHub`}
                        data-testid={`link-github-${project.id}`}
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {hasLiveLink && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title} live site`}
                        data-testid={`link-live-${project.id}`}
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-highlights">
                  <span className="project-highlights-label">Key features</span>
                  <ul className="project-feature-list">
                    {project.features.slice(0, 4).map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <p className="project-role">
                  <strong>Role — </strong>
                  {project.role}
                </p>

                <div className="project-meta">
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    className="arrow-link"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Open ${project.title} case study`}
                    data-testid={`button-open-project-${project.id}`}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {hasMore && (
          <button
            type="button"
            className="show-more-btn"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
            data-testid="button-toggle-projects"
          >
            {showAll ? "Show less" : `Show more (${projects.length - VISIBLE_COUNT})`}
            <ChevronDown
              size={14}
              className={showAll ? "show-more-icon open" : "show-more-icon"}
              aria-hidden="true"
            />
          </button>
        )}
      </div>
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
