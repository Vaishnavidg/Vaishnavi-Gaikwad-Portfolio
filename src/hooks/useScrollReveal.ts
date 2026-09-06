import { useEffect } from "react";

/**
 * Adds `.visible` to every `.reveal` element as it scrolls into view.
 * Keeps watching the DOM so elements added later (route changes, HMR, lazy
 * content) still get revealed instead of staying stuck at opacity 0.
 */
export function useScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );

    const scan = () => {
      document.querySelectorAll(".reveal:not(.visible)").forEach((element) => {
        if (reduceMotion) element.classList.add("visible");
        else observer.observe(element);
      });
    };

    scan();
    const mutationObserver = new MutationObserver(scan);
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
