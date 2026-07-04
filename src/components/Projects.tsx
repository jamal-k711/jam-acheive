"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
            7 projects. Real users. Shipped.
          </h2>
        </ScrollReveal>

        {/* Featured card — Qaider (full-width, side-by-side) */}
        {projects.featured.slice(0, 1).map((p) => (
          <ScrollReveal key={p.id} delay={0.2}>
            <GlowCard className="mb-8 p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-2">
                  <div className="rounded-2xl overflow-hidden aspect-[16/11] bg-[var(--bg-elevated)]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={800}
                      height={550}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="section-label mb-4 block">Featured Project</span>
                  <span className="text-muted font-mono text-[11px] mb-2">{p.number} / {p.tag}</span>
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-primary mb-2">{p.title}</h3>
                  <p className="text-red font-body text-sm font-medium mb-4">{p.subhead}</p>
                  <p className="text-secondary font-body text-sm leading-relaxed mb-5">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.features.map((f) => (
                      <FeaturePill key={f} label={f} />
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          </ScrollReveal>
        ))}

        {/* Two-column featured cards — Tallu Consumer + Supplier */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          {projects.featured.slice(1, 3).map((p) => (
            <motion.div
              key={p.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 120 } },
              }}
            >
              <GlowCard className="p-0 h-full">
                <div className="p-2">
                  <div className="rounded-2xl overflow-hidden aspect-[16/11] bg-[var(--bg-elevated)]">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <span className="text-muted font-mono text-[11px] mb-2 block">{p.number} / {p.tag}</span>
                  <h3 className="font-display font-bold text-2xl text-primary mb-2">{p.title}</h3>
                  <p className="text-red font-body text-sm font-medium mb-3">{p.subhead}</p>
                  <p className="text-secondary font-body text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.features.map((f) => (
                      <FeaturePill key={f} label={f} />
                    ))}
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Compact cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
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

                <div className="flex flex-wrap gap-2">
                  {p.features.map((f) => (
                    <FeaturePill key={f} label={f} />
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
