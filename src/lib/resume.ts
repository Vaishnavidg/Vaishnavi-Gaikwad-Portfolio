export function openResume() {
  window.open(
    `${import.meta.env.BASE_URL}resume.pdf`,
    "_blank",
    "noopener,noreferrer",
  );
}
