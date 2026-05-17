"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#timeline", label: "Timeline" },
  { href: "#skills", label: "Skills" },
  { href: "#activities", label: "Activities" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-120px 0px 0px 0px" }
    );

    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 border-b border-divider transition-all duration-300 ${
          scrolled ? "py-3.5" : "py-4"
        }`}
        style={{
          background: "rgba(13, 27, 42, 0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="max-w-[1140px] mx-auto px-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-orange flex items-center justify-center text-white font-display font-bold text-sm border-2 border-orange">
              JA
            </div>
          </div>

          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-xs font-body font-medium tracking-wide transition-colors duration-250 ${
                  activeSection === l.href.slice(1)
                    ? "text-orange"
                    : "text-muted hover:text-orange"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white p-1"
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-navy md:hidden">
          <div className="flex flex-col gap-6 md:gap-8 text-center px-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-xl xs:text-2xl font-display font-semibold text-white hover:text-orange transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
