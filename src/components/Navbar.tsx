import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "../data/resume";
import { useActiveSection } from "../hooks/useActiveSection";
import { Magnetic } from "./ui/Magnetic";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("top")}
          className="font-display font-semibold tracking-tight text-lg text-[var(--color-text)]"
          aria-label="Back to top"
        >
          PRASAD<span className="text-[var(--color-cyan)]">.</span>MK
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="relative px-4 py-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-4 right-4 -bottom-[1px] h-[2px] bg-[var(--color-cyan)] rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <span className="flex items-center gap-2 font-mono text-xs text-[var(--color-muted)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-green)] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-green)]" />
            </span>
            Available for opportunities
          </span>
          <Magnetic strength={0.3}>
            <a
              href={profile.resumeFile}
              download
              className="flex items-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2 text-sm text-[var(--color-text)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition-colors"
              data-cursor-hover
            >
              <Download size={14} /> Resume
            </a>
          </Magnetic>
        </div>

        <button
          className="md:hidden text-[var(--color-text)]"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass border-t border-[var(--color-line)] overflow-hidden"
          >
            <div className="flex flex-col px-5 py-4 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left py-3 text-sm font-mono ${
                    active === link.id ? "text-[var(--color-cyan)]" : "text-[var(--color-muted)]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={profile.resumeFile}
                download
                className="mt-2 flex items-center justify-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-3 text-sm text-[var(--color-text)]"
              >
                <Download size={14} /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
