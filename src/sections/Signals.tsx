import { SectionHeading } from "@/components/SectionHeading";
import { achievements } from "@/data/achievements";

export function Signals() {
  return (
    <section aria-labelledby="achievements-title">
      <div className="container">
        <SectionHeading
          eyebrow="06 / signals"
          title="What I bring to the room."
          note="Not a list of inflated metrics. A few true signals."
        />
        <div className="achievements">
          {achievements.map((achievement) => (
            <article
              className="achievement reveal"
              key={achievement.number}
              data-testid={`achievement-${achievement.number}`}
            >
              <span>{achievement.number}</span>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
