import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          eyebrow="03 / trajectory"
          title="A practice in motion."
          note="The role titles are simple. The work underneath is not."
        />
        <div className="timeline">
          {experience.map((item) => (
            <article
              className="timeline-item reveal"
              key={`${item.period}-${item.role}`}
              data-testid={`experience-${item.role.toLowerCase().replaceAll(" ", "-")}`}
            >
              <div className="timeline-date">{item.period}</div>
              <h3>{item.role}</h3>
              <div className="timeline-place">{item.organization}</div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
