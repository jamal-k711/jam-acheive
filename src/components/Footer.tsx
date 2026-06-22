import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Footer() {
  return (
    <footer className="py-20 pb-12 text-center relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(230, 57, 70, 0.08) 0%, rgba(99, 102, 241, 0.04) 50%, transparent 70%)",
        }}
      />
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <ScrollReveal>
          <span className="font-display font-extrabold text-5xl text-gradient select-none">
            JA
          </span>

          <h2 className="font-display font-bold text-3xl mt-4 text-primary">
            Amir Jamal Ali Khan
          </h2>

          <p className="text-secondary font-body text-base mt-2">
            AI Engineer & Flutter Developer — SpeedForce Digital
          </p>

          <div className="w-[60px] h-px mx-auto my-6" style={{ background: "var(--gradient-brand)" }} />

          <p className="font-display font-semibold text-lg text-gradient">
            &ldquo;Built with discipline. Delivered with care.&rdquo;
          </p>

          <p className="text-muted font-mono text-sm mt-3">
            December 2025 – May 2026
          </p>

          <div className="flex items-center justify-center gap-6 mt-8">
            <a
              href="https://github.com/jamal-k711"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-red transition-colors text-sm font-body"
            >
              GitHub
            </a>
            <span className="text-muted">·</span>
            <a
              href="https://www.linkedin.com/in/jamal-k711/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-red transition-colors text-sm font-body"
            >
              LinkedIn
            </a>
            <span className="text-muted">·</span>
            <a
              href="#reports"
              className="text-secondary hover:text-red transition-colors text-sm font-body"
            >
              Sprint Reports
            </a>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
