"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { activities } from "@/lib/data";

const cardVariants = (i: number) => ({
  hidden: { y: -40, rotate: i % 2 === 0 ? -2 : 2, opacity: 0 },
  visible: {
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 150, damping: 20, delay: i * 0.1 },
  },
});

export default function Activities() {
  return (
    <section
      id="activities"
      className="py-20 md:py-[120px]"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <span className="section-label">BEYOND THE CODE</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-bold text-[36px] md:text-[52px] leading-tight text-primary mb-12">
            A team player, not just a developer.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((e, i) => (
            <motion.div
              key={e.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants(i)}
            >
              <div
                className="p-8 rounded-card border border-[var(--border)] relative overflow-hidden group transition-all duration-300 hover:border-red/30"
                style={{
                  background: "linear-gradient(135deg, rgba(230, 57, 70, 0.05), rgba(99, 102, 241, 0.03))",
                }}
              >
                {/* Gradient background */}
                <div
                  className="absolute inset-0 opacity-[0.08] pointer-events-none"
                  style={{
                    background: "var(--gradient-brand)",
                  }}
                />

                <div className="relative z-10">
                  <span className="font-mono font-medium text-[11px] text-red uppercase tracking-widest block mb-2">
                    {e.date}
                  </span>
                  <h3 className="font-display font-semibold text-2xl text-primary mb-2">{e.title}</h3>
                  <p className="text-secondary font-body text-sm leading-relaxed mb-4">{e.body}</p>
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-red font-body font-semibold text-xs hover:gap-2.5 transition-all"
                  >
                    View on LinkedIn
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
