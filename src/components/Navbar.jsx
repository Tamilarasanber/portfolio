import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className={`border-b transition-colors duration-300 ${
          scrolled || menuOpen
            ? "border-indigo-100 bg-white/80 shadow-[0_10px_40px_-24px_rgba(79,70,229,0.45)] backdrop-blur-xl"
            : "border-transparent bg-white/40 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-sm font-bold text-white shadow-lg shadow-indigo-200">
              TB
            </span>
            <span className="font-display text-lg font-bold tracking-tight">Tamilarasan</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="hidden rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700 md:inline-flex"
          >
            View Work
          </motion.a>

          <button
            className="grid h-10 w-10 place-items-center rounded-xl border border-gray-200 bg-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-4 w-5">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="absolute top-0 left-0 block h-0.5 w-5 origin-center bg-gray-900"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="absolute top-[7px] left-0 block h-0.5 w-5 bg-gray-900"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="absolute top-[14px] left-0 block h-0.5 w-5 origin-center bg-gray-900"
              />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-indigo-100 bg-white md:hidden"
            >
              <ul className="flex flex-col gap-1 px-4 py-3">
                {links.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <a
                      className="block rounded-xl px-3 py-2.5 text-gray-800 hover:bg-indigo-50"
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
