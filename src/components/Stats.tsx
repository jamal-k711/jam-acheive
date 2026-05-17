"use client";

import { useEffect } from "react";
import { useCounters } from "@/hooks/useCounters";
import { animateCounter } from "@/hooks/useCounters";

const stats = [
  { target: 5, suffix: "+", label: "Production Projects Delivered" },
  { target: 300, suffix: "+", label: "Screens Designed & Redesigned" },
  { target: 45, suffix: "+", label: "Cloud Functions Deployed" },
  { target: 6, suffix: "", label: "Months of Continuous Delivery" },
  { target: 4, suffix: "", label: "HRMS Roles Built" },
  { target: 2, suffix: "", label: "App Store Launches" },
];

export default function Stats() {
  const { ref, started } = useCounters();

  useEffect(() => {
    if (!started) return;
    const els = document.querySelectorAll<HTMLElement>(".stat-number");
    els.forEach((el) => {
      const target = parseInt(el.dataset.target || "0", 10);
      const suffix = el.dataset.suffix || "";
      animateCounter(el, target, 1800, suffix);
    });
  }, [started]);

  return (
    <section id="stats" className="py-16 md:py-[100px]" style={{ background: "var(--color-navy-mid)" }}>
      <div className="max-w-[1140px] mx-auto px-5" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="stat-card animate-on-scroll group cursor-pointer"
              style={{
                padding: "24px 12px",
                background: "var(--color-navy-light)",
                border: "1px solid var(--color-divider)",
                borderRadius: "var(--radius-card)",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div className="progress-line" />
              <span className="block font-display font-extrabold text-[28px] xs:text-[32px] sm:text-[36px] md:text-[56px] leading-none text-orange mb-2 stat-number transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,122,26,0.5)]" data-target={s.target} data-suffix={s.suffix}>
                0{s.suffix}
              </span>
              <span className="block font-body font-medium text-xs md:text-sm text-muted uppercase tracking-widest leading-tight transition-colors duration-300 group-hover:text-orange">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
