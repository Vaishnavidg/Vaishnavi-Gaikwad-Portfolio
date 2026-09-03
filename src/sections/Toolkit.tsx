import { Github } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { projectLinks } from "@/data/projects";
import { skillGroups } from "@/data/skills";

export function Toolkit() {
  return (
    <section id="thinking" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          eyebrow="05 / toolkit"
          title="The tools are only half the story."
          note="Hover a capability for the principle behind it. Update the labels as the work evolves."
        />
        <div className="skills-layout">
          <div className="skills-intro reveal">
            <p>
              Technologies change. The habit of asking better questions travels.
            </p>
            <a
              className="text-link"
              href={projectLinks.github}
              target="_blank"
              rel="noreferrer"
              data-testid="link-github-toolkit"
            >
              See the code <Github size={14} />
            </a>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group reveal" key={group.category}>
                <h3>{group.category}</h3>
                <div className="skill-chips">
                  {group.skills.map((skill) => (
                    <div
                      className="skill-chip"
                      key={skill.name}
                      tabIndex={0}
                      data-testid={`skill-${skill.name.toLowerCase().replaceAll(" ", "-")}`}
                    >
                      {skill.name}
                      <span>{skill.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
