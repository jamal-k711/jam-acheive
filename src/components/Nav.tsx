"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#timeline", label: "Timeline" },
  { href: "#skills", label: "Skills" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollY } = useScroll();
  const navBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(8, 9, 12, 0)", "rgba(8, 9, 12, 0.85)"]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-120px 0px 0px 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 w-full z-50 py-4"
        style={{
          background: navBg,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-display font-extrabold text-2xl text-red select-none">
            JA
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-sm font-body font-medium tracking-wide transition-colors duration-250 ${
                  activeSection === l.href.slice(1)
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {l.label}
                {activeSection === l.href.slice(1) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-red"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <a
              href="#reports"
              className="px-5 py-2 rounded-full border border-red text-red text-sm font-body font-medium hover:bg-red hover:text-white transition-all duration-300"
            >
              Sprint Reports
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex md:hidden text-white p-1"
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-[var(--bg-base)] md:hidden"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="flex flex-col gap-8 text-center"
          >
            {links.map((l) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-2xl font-display font-semibold text-primary hover:text-red transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#reports"
              onClick={() => setMenuOpen(false)}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-4 px-6 py-3 rounded-full border border-red text-red text-base font-body font-medium"
            >
              Sprint Reports
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
