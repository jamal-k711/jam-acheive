"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { abcdSprints } from "@/lib/data";

export default function ABCDReports() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="reports"
      className="py-20 md:py-[120px]"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <span className="section-label">STRUCTURED DELIVERY</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-bold text-[36px] md:text-[52px] leading-tight text-primary mb-3">
            Every sprint tracked. Every outcome documented.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-secondary font-body text-base leading-relaxed max-w-[720px] mb-10">
            Throughout my tenure, I maintained detailed ABCD Work Reports. This reflects
            not just technical output, but disciplined, accountable delivery week after week.
          </p>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap gap-2 mb-10 border-b border-[var(--border)] pb-4">
            {abcdSprints.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setActiveTab(i)}
                className={`relative px-4 py-2 text-xs font-mono font-medium transition-colors duration-300 ${
                  activeTab === i ? "text-primary" : "text-secondary hover:text-primary"
                }`}
              >
                {s.label}
                {activeTab === i && (
                  <motion.div
                    layoutId="abcd-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-red"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { key: "A", label: "Achievement", content: abcdSprints[activeTab].achievement, muted: false },
                { key: "B", label: "Benefit", content: abcdSprints[activeTab].benefit, muted: false },
                { key: "C", label: "Concern", content: abcdSprints[activeTab].concern, muted: true },
                { key: "D", label: "Do Next", content: abcdSprints[activeTab].doNext, muted: false },
              ].map((item) => (
                <div
                  key={item.key}
                  className="p-5 md:p-8 rounded-card border border-[var(--border)] bg-[var(--bg-surface)] relative overflow-hidden group hover:border-red/20 transition-colors"
                >
                  {/* Large letter background */}
                  <span
                    className="absolute -top-2 right-2 font-display font-black text-[120px] md:text-[160px] leading-none text-[var(--border)] select-none pointer-events-none"
                    style={{ lineHeight: "0.7" }}
                  >
                    {item.key}
                  </span>

                  <div className="relative z-10">
                    <span className="section-label block mb-2 md:mb-3">{item.label}</span>
                    <p className={`text-sm leading-relaxed font-body ${
                      item.muted ? "text-secondary italic" : "text-primary"
                    }`}>
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
