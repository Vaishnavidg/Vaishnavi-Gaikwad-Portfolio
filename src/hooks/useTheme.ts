import { useEffect, useState } from "react";

/** Light/dark toggle, persisted to localStorage and reflected on <html>. */
export function useTheme() {
  const [light, setLight] = useState(
    () => localStorage.getItem("vg-theme") === "light",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
    localStorage.setItem("vg-theme", light ? "light" : "dark");
  }, [light]);

  return { light, toggle: () => setLight((value) => !value) };
}
