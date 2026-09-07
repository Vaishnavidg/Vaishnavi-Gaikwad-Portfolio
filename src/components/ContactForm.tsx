import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";

const CONTACT_EMAIL = "vaishnavig3001@gmail.com";

// Set VITE_SHEET_WEBHOOK_URL (see .env.example / docs/google-sheet-webhook.md)
// to also log every submission as a row in a Google Sheet. Optional — the
// mailto flow below works with or without it.
const SHEET_WEBHOOK_URL = import.meta.env.VITE_SHEET_WEBHOOK_URL as
  | string
  | undefined;

function logToSheet(entry: { name: string; email: string; message: string }) {
  if (!SHEET_WEBHOOK_URL) return;
  // Apps Script web apps don't return CORS headers for a readable response,
  // so this is a fire-and-forget "no-cors" POST — we can't confirm delivery,
  // only that it was attempted, which is fine since mailto is the fallback.
  fetch(SHEET_WEBHOOK_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(entry),
  }).catch(() => {
    // Silently ignore — the message still goes out via mailto regardless.
  });
}

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof typeof values, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    setSubmitted(false);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Please add a valid email.";
    if (values.message.trim().length < 12)
      next.message = "A little more context helps.";
    setErrors(next);
    if (!Object.keys(next).length) {
      logToSheet(values);

      const subject = `Portfolio inquiry from ${values.name}`;
      const body = `${values.message}\n\n— ${values.name} (${values.email})`;
      const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      setSubmitted(true);
      window.location.href = mailtoHref;
    }
  };

  return (
    <form onSubmit={submit} noValidate data-testid="form-contact">
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder="Your name"
            data-testid="input-contact-name"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            placeholder="you@company.com"
            data-testid="input-contact-email"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        <div className="field full">
          <label htmlFor="message">What are you building?</label>
          <textarea
            id="message"
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            placeholder="A product, a problem, or a role worth talking about..."
            data-testid="input-contact-message"
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && (
            <span className="error-text">{errors.message}</span>
          )}
        </div>
      </div>
      <button
        className="button"
        type="submit"
        style={{ marginTop: 20 }}
        data-testid="button-submit-contact"
      >
        Send message <ArrowUpRight size={14} />
      </button>
      {submitted && (
        <div
          className="form-status"
          role="status"
          data-testid="status-contact-success"
        >
          <Check size={14} style={{ verticalAlign: -2, marginRight: 6 }} />
          Thanks — your email app should now be open with the message ready
          to send to {CONTACT_EMAIL}.
        </div>
      )}
    </form>
  );
}
