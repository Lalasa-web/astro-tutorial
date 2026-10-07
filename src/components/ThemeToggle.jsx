import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setIsDark(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  function toggleTheme() {
    const newTheme = !isDark;

    setIsDark(newTheme);

    document.body.classList.toggle("dark-mode", newTheme);

    localStorage.setItem("theme", newTheme ? "dark" : "light");
  }

  return (
    <button onClick={toggleTheme}>
      {isDark ? "☀️ Day Mode" : "🌙 Night Mode"}
    </button>
  );
}