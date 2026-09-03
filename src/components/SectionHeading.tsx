export function SectionHeading({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="section-head reveal">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="section-title">{title}</h2>
      </div>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}
