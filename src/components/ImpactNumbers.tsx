"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats, secondaryStats } from "@/lib/data";

export default function ImpactNumbers() {
  return (
    <section
      id="stats"
      className="py-20 md:py-[120px] relative"
      style={{ background: "var(--bg-surface)" }}
    >
      {/* Separator line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--red), transparent)" }} />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Primary stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          {stats.slice(0, 4).map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.1}>
              <div className="text-center group">
                <span className="font-mono text-[11px] font-medium text-muted uppercase tracking-[0.15em] block mb-2">
                  {s.label}
                </span>
                <div className="relative inline-block">
                  <AnimatedCounter
                    target={s.target}
                    suffix={s.suffix}
                    className="font-display font-black text-5xl xs:text-6xl md:text-7xl text-red leading-none"
                  />
                  {/* Animated bar that fills */}
                  <div className="h-[3px] bg-red/20 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-red rounded-full animate-glow-pulse" style={{ width: "100%" }} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Secondary pills */}
        <ScrollReveal delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {secondaryStats.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full border border-indigo/20 text-secondary font-mono text-xs font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
