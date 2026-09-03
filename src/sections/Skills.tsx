import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { projectLinks } from "@/data/projects";
import { dsaCategory, skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <SectionHeading
          eyebrow="05 / technical skills"
          title="Tools behind the build."
          note="Skills and technologies I use to build products across the stack."
        />

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <article
              className="skill-card reveal"
              key={cat.number}
              data-testid={`skill-card-${cat.number}`}
            >
              <div className="skill-card-head">
                <div className="skill-card-titleline">
                  <span className="skill-card-num" aria-hidden="true">
                    {cat.number}
                  </span>
                  <h3 className="skill-card-title">{cat.category}</h3>
                </div>
              </div>

              <div className="skill-card-body">
                {cat.groups
                  ? cat.groups.map((group) => (
                      <div className="skill-badge-group" key={group.label}>
                        <span className="skill-badge-group-label">
                          {group.label}
                        </span>
                        <ul className="skill-badges" aria-label={group.label}>
                          {group.items.map((tech) => (
                            <li className="skill-badge" key={tech}>
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  : cat.technologies && (
                      <ul className="skill-badges" aria-label="Technologies">
                        {cat.technologies.map((tech) => (
                          <li className="skill-badge" key={tech}>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    )}
              </div>
            </article>
          ))}

          <article
            className="skill-card skill-card-dsa reveal"
            data-testid="skill-card-dsa"
          >
            <div className="skill-card-head">
              <div className="skill-card-titleline">
                <span className="skill-card-num" aria-hidden="true">
                  {dsaCategory.number}
                </span>
                <h3 className="skill-card-title">{dsaCategory.category}</h3>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
