"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import CodeWindow from "@/components/ui/CodeWindow";
import { aboutBullets, techStack } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <span className="section-label">WHO I AM</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-bold text-[36px] md:text-[52px] leading-tight text-primary mb-12">
            A builder who ships.
            <br />
            Every sprint, every week.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left column */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.2}>
              <p className="text-secondary font-body text-base md:text-lg leading-relaxed mb-6">
                I joined SPEEDFORCE DIGITAL as an AI Engineer and grew rapidly into a
                full-stack mobile and web contributor &mdash; owning everything from
                enterprise HR system architecture to pixel-perfect Flutter app redesigns,
                Arabic RTL localization, live GPS tracking, and cloud function deployment.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="space-y-3 mb-8">
                {aboutBullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-red mt-1 flex-shrink-0">→</span>
                    <span className="text-primary font-body text-sm md:text-base">{b}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 rounded-full bg-red-dim text-red font-mono text-xs font-medium border border-red/20">
                  Flutter Expert
                </span>
                <span className="px-4 py-2 rounded-full bg-indigo-dim text-indigo font-mono text-xs font-medium border border-indigo/20">
                  Full-Stack Mobile & Web
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column: Code window */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.35} direction="right">
              <CodeWindow />
            </ScrollReveal>
          </div>
        </div>

        {/* Tech stack marquee */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 pt-8 border-t border-[var(--border)]">
            <p className="text-muted font-mono text-[10px] uppercase tracking-widest mb-4 text-center">
              Technologies I work with
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-[var(--bg-surface)] border border-[var(--border)] text-secondary font-body text-xs font-medium hover:border-red/30 hover:text-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
