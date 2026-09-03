import { Download } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { projectLinks } from "@/data/projects";
import { openResume } from "@/lib/resume";

export function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <div className="eyebrow">08 / next move</div>
          <h2 id="contact-title" className="section-title">
            Have a good problem?
          </h2>
          <p>
            I'm interested in thoughtful teams, meaningful products, and the
            kind of engineering work that rewards care. If that sounds like your
            world, say hello.
          </p>
          <div className="socials">
            <a
              href={projectLinks.github}
              target="_blank"
              rel="noreferrer"
              data-testid="link-github"
            >
              GitHub
            </a>
            <a
              href={projectLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              data-testid="link-linkedin"
            >
              LinkedIn
            </a>
            <a href={projectLinks.email} data-testid="link-email">
              Email
            </a>
          </div>
          <button
            className="text-link"
            onClick={openResume}
            style={{
              marginTop: 25,
              border: 0,
              background: "transparent",
              padding: 0,
            }}
            data-testid="button-contact-resume"
          >
            Download resume <Download size={13} />
          </button>
        </div>
        <div className="reveal">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
