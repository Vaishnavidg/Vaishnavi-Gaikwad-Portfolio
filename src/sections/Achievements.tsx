import { useState } from "react";
import {
  Award,
  ChevronDown,
  Cloud,
  Code2,
  ExternalLink,
  GraduationCap,
} from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { achievements } from "@/data/achievements";

const categoryIcons: Record<string, typeof Award> = {
  Technical: Award,
  "Cloud & Computing": Cloud,
  "Software Development": Code2,
  Programming: GraduationCap,
};

const VISIBLE_COUNT = 4;

export function Achievements() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? achievements : achievements.slice(0, VISIBLE_COUNT);
  const hasMore = achievements.length > VISIBLE_COUNT;

  return (
    <section id="achievements" aria-labelledby="achievements-title">
      <div className="container">
        <SectionHeading
          eyebrow="05 / Achievements"
          title="What I bring to the room."
          note="Not a list of inflated metrics. A few true signals."
        />
        <div className="achievements">
          {visible.map((achievement, index) => {
            const Icon = categoryIcons[achievement.category] ?? Award;
            const hasCertificate = Boolean(achievement.certificateUrl);
            return (
              <article
                className="achievement reveal"
                key={achievement.title}
                data-testid={`achievement-${index}`}
              >
                <div className="achievement-top">
                  <span className="achievement-icon" aria-hidden="true">
                    <Icon size={17} strokeWidth={1.6} />
                  </span>
                  <span className="achievement-category">
                    {achievement.category}
                  </span>
                </div>

                <h3>{achievement.title}</h3>

                <div className="achievement-meta">
                  <span className="achievement-issuer">
                    {achievement.issuer}
                  </span>
                  {achievement.issued && (
                    <>
                      <span className="achievement-dot" aria-hidden="true">
                        ·
                      </span>
                      <span className="achievement-issued">
                        {achievement.issued}
                      </span>
                    </>
                  )}
                </div>

                <p>{achievement.description}</p>

                {achievement.skills && achievement.skills.length > 0 && (
                  <div className="tag-list achievement-skills">
                    {achievement.skills.map((skill) => (
                      <span className="tag" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {hasCertificate && (
                  <a
                    className="achievement-link"
                    href={achievement.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-testid={`link-achievement-${index}`}
                  >
                    View <ExternalLink size={12} />
                  </a>
                )}
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
            data-testid="button-toggle-achievements"
          >
            {showAll
              ? "Show less"
              : `Show more (${achievements.length - VISIBLE_COUNT})`}
            <ChevronDown
              size={14}
              className={showAll ? "show-more-icon open" : "show-more-icon"}
              aria-hidden="true"
            />
          </button>
        )}
      </div>
    </section>
  );
}
