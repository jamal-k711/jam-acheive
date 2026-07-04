import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ABCDReports() {
  return (
    <section id="reports" className="py-20 md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <span className="section-label">DOCUMENTED DELIVERY</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-bold text-[36px] md:text-[52px] leading-tight text-primary mb-4">
            Every sprint. On record.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-secondary font-body text-base leading-relaxed max-w-[640px] mb-10">
            Weekly ABCD reports — Achievement, Benefit, Concern, Do Next — maintained every sprint across all 7 projects.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="px-4 py-2 rounded-full border border-[var(--border)] text-secondary font-mono text-xs font-medium">
              20+ Sprint Reports
            </span>
            <span className="text-muted font-mono text-xs">·</span>
            <span className="px-4 py-2 rounded-full border border-[var(--border)] text-secondary font-mono text-xs font-medium">
              7 Projects
            </span>
            <span className="text-muted font-mono text-xs">·</span>
            <span className="px-4 py-2 rounded-full border border-[var(--border)] text-secondary font-mono text-xs font-medium">
              Dec 2025 – Present
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
