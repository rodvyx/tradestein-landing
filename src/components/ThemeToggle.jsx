import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }) {
  // Start undefined so it doesn't assume dark until localStorage is checked
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Sync theme class when the state changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // Smooth fade animation between themes
  useEffect(() => {
    document.documentElement.classList.add("theme-transition");
    const timeout = setTimeout(
      () => document.documentElement.classList.remove("theme-transition"),
      300
    );
    return () => clearTimeout(timeout);
  }, [isDark]);

  const toggle = () => setIsDark((prev) => !prev);

  return (
    <button
      onClick={toggle}
      className={`rounded-full border border-neon/70 p-2 hover:bg-neon hover:text-dark transition ${className}`}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
