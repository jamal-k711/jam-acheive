"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { skillCategories, skillTabs, skillCategoryMap } from "@/lib/data";

function MasteryDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`w-[6px] h-[6px] rounded-full transition-colors duration-300 ${
            i < level ? "bg-red" : "bg-[var(--border)]"
          }`}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const filtered = skillCategoryMap[activeTab] || [];

  // Get mastery for each skill (flatten from categories)
  const masteryMap: Record<string, number> = {};
  skillCategories.forEach((cat) => {
    Object.entries(cat.mastery).forEach(([name, level]) => {
      masteryMap[name] = level;
    });
  });

  return (
    <section id="skills" className="py-20 md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <span className="section-label">TECHNICAL BREADTH</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-bold text-[36px] md:text-[52px] leading-tight text-primary mb-12">
            From pixel to production.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Mastery grid */}
          <ScrollReveal delay={0.2} direction="left">
            <div>
              <p className="text-muted font-mono text-[10px] uppercase tracking-widest mb-4">
                Proficiency
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skillCategories.map((cat) => (
                  <div key={cat.name}>
                    <p className="text-primary font-display font-semibold text-xs uppercase tracking-wider mb-3 text-muted">
                      {cat.name}
                    </p>
                    <div className="space-y-2.5">
                      {cat.items.map((skill) => (
                        <div key={skill} className="flex items-center justify-between group">
                          <span className="text-secondary font-body text-xs font-medium group-hover:text-primary transition-colors">
                            {skill}
                          </span>
                          <MasteryDots level={masteryMap[skill] || 3} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Filter pills with animation */}
          <ScrollReveal delay={0.2} direction="right">
            <div>
              {/* Filter tabs */}
              <div className="flex items-center gap-2 mb-6">
                {skillTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-red text-white"
                        : "text-secondary border border-[var(--border)] hover:border-red/30 hover:text-primary"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Animated skill pills */}
              <div className="flex flex-wrap gap-2 min-h-[120px]">
                <AnimatePresence mode="popLayout">
                  {filtered.map((skill) => (
                    <motion.span
                      key={skill}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="px-4 py-2 rounded-full border border-[var(--border)] text-secondary font-body text-xs font-medium hover:border-red/40 hover:text-primary hover:shadow-[0_0_12px_var(--red-glow)] transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
