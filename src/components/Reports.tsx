import { useEffect, useRef, useCallback } from "react";

const sprints = [
  {
    label: "Sprint — HRMS Architecture",
    achievement: "Built full HRMS — attendance, leave, performance, role-based auth, enterprise dashboards, 95% API reduction",
    benefit: "Secure, scalable HR platform with strict data access controls",
    concern: "Bundle size and lazy loading initially needed optimization",
  },
  {
    label: "Sprint — United Force + Tallu Onboarding",
    achievement: "Shipped United Force landing page; built Tallu Auth, Maps, Cart, and Inventory foundations",
    benefit: "Strong B2B web presence delivered; Tallu development unblocked",
    concern: "Git authorization and token issues during initial onboarding",
  },
  {
    label: "Sprint — Backend Migration",
    achievement: "Migrated Appwrite Cloud to self-hosted server; resolved Auth/DB sync; added 58 DB attributes; deployed cloud functions",
    benefit: "Full system independence restored with robust data integrity",
    concern: "Managing intermittent sync during final stabilization phase",
  },
  {
    label: "Sprint — Commission Wallet & Reports Module",
    achievement: "Built wallet system from scratch; launched Reports module across both apps and Admin Panel; RTL/localization",
    benefit: "Automated financial tracking; transparent issue management; native Arabic UX",
    concern: "Ensuring 4th nav tab doesn't crowd UI on smaller screens",
  },
  {
    label: "Sprint — Auth & Notification Routing",
    achievement: "Firebase phone OTP recovery; deep-link routing for 30+ notification types; killed duplicate banners",
    benefit: "Streamlined recovery, no crashes from killed-app taps, zero spam",
    concern: "Firebase SMS OTP quota limits across regional telecom providers",
  },
];

export default function Reports() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const rafRef = useRef<number>(0);
  const speed = useRef(0.5);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const step = () => {
      if (!el) return;
      if (!pausedRef.current) {
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        } else {
          el.scrollLeft += speed.current;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    pausedRef.current = true;
    const el = scrollRef.current;
    const card = e.currentTarget;
    if (el && card) {
      const containerRect = el.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const offset = card.offsetLeft - (containerRect.width / 2 - cardRect.width / 2);
      el.scrollTo({ left: offset, behavior: "smooth" });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    pausedRef.current = false;
  }, []);

  return (
    <section id="reports" className="py-16 md:py-[100px]" style={{ background: "var(--color-navy-mid)" }}>
      <div className="max-w-[1140px] mx-auto px-5">
        <p className="font-display font-semibold text-[11px] text-orange uppercase tracking-widest mb-3 animate-on-scroll">STRUCTURED DELIVERY</p>
        <h2 className="font-display font-bold text-[32px] md:text-[48px] leading-tight mb-3 animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
          Every sprint tracked. Every outcome documented.
        </h2>
        <p className="text-muted font-body text-sm xs:text-[15px] leading-relaxed max-w-[720px] mb-8 animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
          Throughout my tenure, I maintained detailed ABCD Work Reports &mdash; a structured
          format tracking Achievements, Benefits delivered, Concerns flagged, and the next
          steps planned. This reflects not just technical output, but disciplined, accountable
          delivery week after week.
        </p>
        <div className="relative animate-on-scroll" style={{ transitionDelay: "0.3s" }}>
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto overflow-y-visible hide-scrollbar scroll-fade-left py-4"
          >
            {[...sprints, ...sprints].map((s, i) => (
              <div
                key={`${s.label}-${i}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="min-w-[260px] xs:min-w-[280px] md:min-w-[320px] p-4 xs:p-5 md:p-8 rounded-card border border-divider flex-shrink-0 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:border-orange/40 group relative overflow-hidden"
                style={{
                  background: "var(--color-navy-light)",
                }}
              >
                <div className="progress-line" />
                <p className="font-display font-bold text-[11px] text-orange uppercase tracking-widest mb-3.5">{s.label}</p>
                <p className="font-display font-semibold text-[15px] leading-relaxed mb-2.5">{s.achievement}</p>
                <p className="text-muted font-body text-[13px] leading-relaxed mb-3">{s.benefit}</p>
                <p className="text-orange/60 font-body text-[13px] leading-relaxed italic">{s.concern}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
