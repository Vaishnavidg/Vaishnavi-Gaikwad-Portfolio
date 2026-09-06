import { Fragment, useState } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";

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

export function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          {projects.map((project, index) => (
            <article
              className="project-card reveal"
              key={project.id}
              data-testid={`card-project-${project.id}`}
            >
              <div>
                <span className="project-index">
                  {project.index} / {index === 0 ? "case study" : "direction"}
                </span>
                <div className="eyebrow" style={{ marginTop: 25 }}>
                  {project.eyebrow}
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
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
                  <ChevronRight size={20} />
                </button>
              </div>
            </article>
          ))}
        </div>
        <div
          className="architecture reveal"
          aria-labelledby="architecture-title"
        >
          <div className="arch-top">
            <div>
              <div className="eyebrow">Architecture / a way of thinking</div>
              <h3 id="architecture-title">Keep the user journey in focus.</h3>
            </div>
            <p>
              Web3 architecture visualization — replace the labels with the
              approved implementation details.
            </p>
          </div>
          <div className="arch-flow" aria-label="Web3 architecture flow">
            {architectureFlow.map((node, index) => (
              <Fragment key={node.label}>
                {index > 0 && (
                  <div className="arch-arrow">
                    <ArrowUpRight size={17} />
                  </div>
                )}
                <div className="arch-node">
                  <strong>{node.label}</strong>
                  <small>{node.note}</small>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
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
