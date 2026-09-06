import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          eyebrow="03 / trajectory"
          title="A practice in motion."
          note="The role titles are simple. The work underneath is not."
        />

        <div className="experience-list reveal">
          {experience.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `xp-panel-${index}`;
            return (
              <div
                className={isOpen ? "xp-item open" : "xp-item"}
                key={`${item.company}-${item.period}`}
              >
                <button
                  type="button"
                  className="xp-head"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  data-testid={`experience-${index}`}
                >
                  <span className="xp-logo" aria-hidden="true">
                    <img src={item.logo} alt="" loading="lazy" />
                  </span>
                  <span className="xp-main">
                    <span className="xp-role">{item.role}</span>
                    <span className="xp-meta">
                      @{item.company} · {item.location}
                    </span>
                  </span>
                  <span className="xp-aside">
                    <span className="xp-period">{item.period}</span>
                    <ChevronDown
                      className="xp-chevron"
                      size={16}
                      aria-hidden="true"
                    />
                  </span>
                </button>

                <div className="xp-body" id={panelId} role="region">
                  <div className="xp-body-inner">
                    <ul className="xp-points">
                      {item.highlights.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
