import {
  Binary,
  Braces,
  Cloud,
  Database,
  LayoutTemplate,
  Server,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { skillCategories } from "@/data/skills";

const categoryIcon: Record<string, LucideIcon> = {
  "01": Braces,
  "02": LayoutTemplate,
  "03": Server,
  "04": Database,
  "05": Sparkles,
  "06": Cloud,
  "07": Users,
  "08": Binary,
};

const areaCount = skillCategories.length;
const toolCount = skillCategories.reduce(
  (sum, cat) =>
    sum +
    (cat.technologies?.length ?? 0) +
    (cat.groups?.reduce(
      (groupSum, group) => groupSum + group.items.length,
      0
    ) ?? 0),
  0
);

export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <SectionHeading
          eyebrow="02 / technical skills"
          title="Tools behind the build."
          note="Skills and technologies I use to build products across the stack."
        />

        <p className="skills-meta reveal">
          <span>{areaCount}</span> focus areas
          <i aria-hidden="true">/</i>
          <span>{toolCount}</span> technologies &amp; practices
        </p>

        <div className="skills-grid">
          {skillCategories.map((cat) => {
            const Icon = categoryIcon[cat.number] ?? Braces;
            return (
              <article
                className="skill-card reveal"
                key={cat.number}
                data-testid={`skill-card-${cat.number}`}
              >
                <div className="skill-card-top">
                  <span className="skill-card-icon" aria-hidden="true">
                    <Icon size={14} strokeWidth={1.75} />
                  </span>
                  <h3 className="skill-card-title">{cat.category}</h3>
                  <span className="skill-card-num" aria-hidden="true">
                    {cat.number}
                  </span>
                </div>

                {cat.groups ? (
                  <div className="skill-groups">
                    {cat.groups.map((group) => (
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
                    ))}
                  </div>
                ) : (
                  cat.technologies && (
                    <ul className="skill-badges" aria-label="Technologies">
                      {cat.technologies.map((tech) => (
                        <li className="skill-badge" key={tech}>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
