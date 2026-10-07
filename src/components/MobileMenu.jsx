import { useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="mobile-menu">
      <button
        className="menu-button"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {isOpen && (
        <div className="mobile-menu-links">
          <a href="/">Home</a>
          <a href="/learning">Learning</a>
          <a href="/blog">Blog</a>
          <a href="/about">About</a>
          <ThemeToggle />
        </div>
      )}
    </div> 
  );
}