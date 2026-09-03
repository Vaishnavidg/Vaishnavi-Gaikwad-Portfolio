export function scrollToSection(href: string, onDone?: () => void) {
  onDone?.();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}
