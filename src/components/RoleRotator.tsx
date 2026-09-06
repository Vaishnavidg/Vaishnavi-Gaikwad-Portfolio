import { useEffect, useRef, useState } from "react";

import { roles } from "@/data/roles";

const TYPING_MS = 65;
const DELETING_MS = 30;
const HOLD_MS = 1600;

const longestRole = roles.reduce((a, b) => (b.length >= a.length ? b : a), "");

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Types each role in, holds, deletes, moves to the next — looping forever. */
export function RoleRotator() {
  const reduceMotion = useRef(prefersReducedMotion()).current;
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(reduceMotion ? roles[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    const full = roles[index];

    if (!deleting && text === full) {
      const timer = setTimeout(() => setDeleting(true), HOLD_MS);
      return () => clearTimeout(timer);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((current) => (current + 1) % roles.length);
      return;
    }

    const timer = setTimeout(
      () => {
        setText((current) =>
          deleting
            ? full.slice(0, current.length - 1)
            : full.slice(0, current.length + 1),
        );
      },
      deleting ? DELETING_MS : TYPING_MS,
    );
    return () => clearTimeout(timer);
  }, [text, deleting, index, reduceMotion]);

  return (
    <span className="role-rotator" aria-label={roles.join(", ")}>
      {/* Invisible sizer reserves the width of the longest role so nothing
          around it shifts while the text types and deletes. */}
      <span className="role-sizer" aria-hidden="true">
        {longestRole}
      </span>
      <span className="role-text" aria-hidden="true">
        {text || "​"}
        {!reduceMotion && <span className="role-caret" />}
      </span>
    </span>
  );
}
