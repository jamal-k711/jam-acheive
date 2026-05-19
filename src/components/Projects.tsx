"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlowCard from "@/components/ui/GlowCard";
import { projects } from "@/lib/data";

function FeaturePill({ label }: { label: string }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full bg-red-dim text-red font-mono text-[10px] font-medium leading-relaxed">
      {label}
    </span>
  );
}

function StatPill({ label }: { label: string }) {
  return (
    <span className="px-3 py-1.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] text-secondary font-mono text-xs font-medium">
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-[120px]"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <span className="section-label">WHAT I BUILT</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-bold text-[36px] md:text-[52px] leading-tight text-primary mb-12">
            6 projects. Real users. Shipped.
          </h2>
        </ScrollReveal>

        {/* Large featured cards */}
        {projects.featured.map((p, i) => (
          <ScrollReveal key={p.id} delay={0.2 + i * 0.1}>
            <GlowCard className="mb-8 p-0">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${i % 2 === 0 ? "" : "lg:direction-rtl"}`}
                style={i % 2 === 1 ? { direction: "rtl" } : undefined}>
                {/* Image */}
                <div className="p-2" style={i % 2 === 1 ? { direction: "ltr" } : undefined}>
                  <div className="rounded-2xl overflow-hidden aspect-[16/11] bg-[var(--bg-elevated)]">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center" style={i % 2 === 1 ? { direction: "ltr" } : undefined}>
                  <span className="text-muted font-mono text-[11px] mb-2">{p.number} / {p.tag}</span>
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-primary mb-2">{p.title}</h3>
                  <p className="text-red font-body text-sm font-medium mb-4">{p.subhead}</p>
                  <p className="text-secondary font-body text-sm leading-relaxed mb-5">{p.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.features.map((f) => (
                      <FeaturePill key={f} label={f} />
                    ))}
                  </div>

                  {/* Stat trio */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    {p.stats.map((s) => (
                      <StatPill key={s} label={s} />
                    ))}
                  </div>

                  {p.link && (
                    <a
                      href={p.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red font-body font-semibold text-sm hover:gap-3 transition-all"
                    >
                      {p.link.label}
                      <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </GlowCard>
          </ScrollReveal>
        ))}

        {/* Compact cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          {projects.compact.map((p) => (
            <motion.div
              key={p.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 120 } },
              }}
            >
              <GlowCard className="p-6 md:p-8 h-full flex flex-col">
                <span className="text-muted font-mono text-[11px] mb-2">{p.number} / {p.tag}</span>

                <h3 className="font-display font-bold text-xl text-primary mb-1">{p.title}</h3>
                <p className="text-red font-body text-sm font-medium mb-3">{p.subhead}</p>
                <p className="text-secondary font-body text-[13px] leading-relaxed mb-4 flex-1">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.features.slice(0, 3).map((f) => (
                    <FeaturePill key={f} label={f} />
                  ))}
                </div>

                {p.stats && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.stats.map((s) => (
                      <StatPill key={s} label={s} />
                    ))}
                  </div>
                )}

                {"highlight" in p && p.highlight && (
                  <div className="mt-auto pt-4 border-t border-[var(--border)]">
                    <span className="font-display font-bold text-lg text-red">{p.highlight}</span>
                  </div>
                )}

                {"link" in p && p.link && p.link.href && (
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-red font-body font-semibold text-xs mt-3 hover:gap-2.5 transition-all"
                  >
                    {p.link.label}
                    <ArrowRight size={12} />
                  </a>
                )}
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
