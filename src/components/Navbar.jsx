import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold">Portfolio</a>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-200 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          type="button"
        >
          {menuOpen ? (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16"/>
            </svg>
          )}
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          <li><a className="hover:text-indigo-600" href="#about">About</a></li>
          <li><a className="hover:text-indigo-600" href="#skills">Skills</a></li>
          <li><a className="hover:text-indigo-600" href="#projects">Projects</a></li>
          <li><a className="hover:text-indigo-600" href="#contact">Contact</a></li>
        </ul>
        <a
          className="hidden md:inline-flex px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
          href="#projects"
        >
          View Work
        </a>
      </div>
      {/* Mobile menu: slide down when open */}
      <div
        className={`md:hidden bg-white border-t transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-80" : "max-h-0"}`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          <li>
            <a className="block py-2 px-2 rounded hover:bg-indigo-50" href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a className="block py-2 px-2 rounded hover:bg-indigo-50" href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a className="block py-2 px-2 rounded hover:bg-indigo-50" href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a className="block py-2 px-2 rounded hover:bg-indigo-50" href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
