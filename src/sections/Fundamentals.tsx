import { type CSSProperties } from "react";
import { ExternalLink } from "lucide-react";

import { projectLinks } from "@/data/projects";

const topics = [
  { label: "arrays & strings", bar: "78%" },
  { label: "hashing & sorting", bar: "64%" },
  { label: "algorithms", bar: "88%" },
];

export function Fundamentals() {
  return (
    <section aria-labelledby="dsa-title">
      <div className="container">
        <div className="dsa-block reveal">
          <div>
            <div className="eyebrow">06 / fundamentals</div>
            <h3 id="dsa-title">Always sharpening the fundamentals.</h3>
            <p>
              <strong>100+ DSA Problems Solved</strong> in Java across arrays,
              strings, hashing, sorting, binary search, two pointers, recursion,
              and algorithms.
            </p>
            <a
              className="text-link"
              href={projectLinks.leetcode}
              target="_blank"
              rel="noreferrer"
              style={{ marginTop: 26 }}
              data-testid="link-leetcode"
            >
              View LeetCode <ExternalLink size={13} />
            </a>
          </div>
          <div className="dsa-bars" aria-label="Problem solving topics">
            {topics.map((topic) => (
              <div className="bar-row" key={topic.label}>
                <span>{topic.label}</span>
                <div className="bar">
                  <i style={{ "--bar": topic.bar } as CSSProperties} />
                </div>
                <b>practice</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
