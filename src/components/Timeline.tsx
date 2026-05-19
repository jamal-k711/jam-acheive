"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { timelineEntries } from "@/lib/data";

function TimelineDot() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
      className="relative z-10"
    >
      <div className="w-4 h-4 rounded-full bg-red shadow-[0_0_12px_rgba(230,57,70,0.5)]" />
      <div className="absolute inset-0 w-4 h-4 rounded-full bg-red/20 animate-ping" style={{ animationDuration: "2s" }} />
    </motion.div>
  );
}

function MetricPill({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 rounded-full bg-indigo-dim text-indigo font-mono text-[10px] font-medium border border-indigo/10">
      {label}
    </span>
  );
}

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  return (
    <section id="timeline" className="py-20 md:py-[120px] relative" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <span className="section-label">MY JOURNEY</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-bold text-[36px] md:text-[52px] leading-tight text-primary mb-16">
            6 months. 5 projects. Consistent delivery.
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Scroll-driven red line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-[var(--border)] overflow-hidden">
            <motion.div
              className="w-full bg-red origin-top"
              style={{ scaleY: lineHeight, height: "100%" }}
            />
          </div>

          {timelineEntries.map((e, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={e.month}
                className="grid grid-cols-1 md:grid-cols-[1fr_60px_1fr] items-start mb-10 md:mb-14 relative pl-8 md:pl-0"
              >
                {/* Desktop spacer */}
                <div className="hidden md:block" />

                {/* Desktop dot */}
                <div className="hidden md:flex justify-center">
                  <TimelineDot />
                </div>

                {/* Mobile dot */}
                <div className="absolute left-0 top-[22px] md:hidden">
                  <TimelineDot />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.15 }}
                  className="p-6 rounded-card border border-[var(--border)] hover:border-red/30 transition-all duration-300 bg-[var(--bg-surface)] group relative overflow-hidden"
                  style={{ gridColumn: isLeft ? "1" : "3" }}
                >
                  <div className="progress-line" />
                  <span className="font-mono font-medium text-[11px] text-red uppercase tracking-widest mb-2 block">
                    {e.month}
                  </span>
                  <h3 className="font-display font-bold text-lg text-primary mb-2">{e.title}</h3>
                  <p className="text-secondary font-body text-sm leading-relaxed mb-4">{e.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {e.metrics.map((m) => (
                      <MetricPill key={m} label={m} />
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
