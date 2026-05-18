import { ArrowRight } from "lucide-react";

const featurePill = (f: string) => (
  <span
    key={f}
    className="inline-block px-3 py-0.5 mx-0.5 my-0.5 rounded-pill bg-orange-dim text-orange font-body font-semibold text-[11px] leading-relaxed"
  >
    {f}
  </span>
);

const statPill = (s: string) => (
  <span key={s} className="px-3.5 py-1.5 rounded-pill bg-orange-dim font-body font-semibold text-xs">
    {s}
  </span>
);

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-[100px]" style={{ background: "var(--color-navy-mid)" }}>
      <div className="max-w-[1140px] mx-auto px-5">
        <p className="font-display font-semibold text-[11px] text-orange uppercase tracking-widest mb-3 animate-on-scroll">WHAT I BUILT</p>
        <h2 className="font-display font-bold text-[32px] md:text-[48px] leading-tight mb-10 animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
          6 projects. Real users. Shipped.
        </h2>

          {/* Tallu Consumer */}
        <ProjectCardLarge
          delay={0.2}
          reversed={false}
          image={
            <img
              src="https://tallu.speedforcehosting.com/_next/image?url=%2FHome%20screens%2FMockup.png&w=3840&q=75"
              alt="Tallu Consumer App"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          }
          tag="Flutter · iOS & Android"
          title="Tallu Consumer App"
          subhead="On-demand marketplace for Saudi Arabia"
          desc="Built the complete consumer-facing mobile app — enabling users across Saudi Arabia to book construction machinery, freight transport, and 24/7 roadside assistance. Includes live GPS tracking, real-time offer negotiation, full Arabic/RTL UI, push notification routing, KYC flows, reports etc."
          features={["Live GPS Tracking", "RTL/Arabic", "FCM Notifications", "Interactive Sheets", "Real-time Offers", "Complaint Reports", "1,000+ Locale Keys", "Appwrite Real-time"]}
          stats={["100+ Screens", "iOS & Android", "TestFlight Released"]}
        />

        {/* Tallu Provider */}
        <ProjectCardLarge
          delay={0.3}
          reversed={true}
          image={
            <img
              src="https://tallu.speedforcehosting.com/_next/image?url=%2FHome%20screens%2FMockup.png&w=3840&q=75"
              alt="Tallu Provider App"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          }
          tag="Flutter · iOS & Android"
          title="Tallu Provider App"
          subhead="Supplier-side app for verified service providers"
          desc="Built the full provider-facing mobile app — from two-step KYC submission and complete profile flow to live job tracking, machinery and vehicle management, commission wallet with top-up requests, custom vehicle types, nearby machinery map with private request flow, and targeted push notifications based on provider inventory."
          features={["Commission Wallet", "Live GPS", "KYC Verification", "Custom Vehicle Types", "Nearby Machinery Map", "Private Requests", "RTL Support", "TestFlight Released"]}
          stats={["100+ Screens", "7 Cloud Functions", "Appwrite Real-time"]}
        />

        {/* Tallu Admin Panel */}
        <ProjectCardLarge
          delay={0.35}
          reversed={false}
          image={
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              alt="Tallu Admin Panel"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          }
          tag="React · TypeScript · Appwrite"
          title="Tallu Admin Panel"
          subhead="Centralized operations dashboard for the Tallu platform"
          desc="Enhanced & Maintained the complete admin control panel for the Tallu ecosystem — a feature-rich dashboard enabling platform-wide user management, service verification, order tracking, content moderation, and real-time analytics. Integrated with the same Appwrite backend powering both Consumer and Provider apps for seamless data consistency across the entire Tallu platform."
          features={["User Management", "Order Tracking", "Service Verification", "Content Moderation", "Real-time Analytics", "Appwrite Backend", "Reports Management", "Role-Based Access"]}
          stats={["Full Dashboard", "Cross-App Integration"]}
          link={{ href: "https://tallu-admin.speedforcehosting.com/dashboard", label: "View Dashboard" }}
        />

        {/* Small cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <ProjectCardSmall
            delay={0.1}
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
            tag="React · TypeScript · Appwrite"
            title="HRMS System"
            subhead="Enterprise HR platform built from scratch"
            desc="Architected and built a full Human Resource Management System — covering employee attendance with clock-in/out and break tracking, multi-stage leave management (Employee → Team Lead → HR), role-based dashboards for 4 user types, performance analytics, and strict governance."
            features={["Role-Based Auth", "Attendance Tracking", "Leave Governance", "Performance Analytics", "Enterprise Dashboards", "95% API Reduction"]}
            stats={["4 User Roles", "24 DB Tables", "95% API Reduction"]}
            link={{ href: "https://hrms.speedforcehosting.com/", label: "View Live" }}
          />

          <ProjectCardSmall
            delay={0.2}
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
            tag="Web · HTML/CSS/JS"
            title="United Force"
            subhead="Saudi Arabia B2B industrial landing page"
            desc="Designed and developed the complete United Force landing page — a Saudi Arabia–based B2B industrial services website. Built with a consistent brand design system, catalog browse flow, quote request form, and WhatsApp contact integration. Delivered with optimized loading performance, full testing, version control, and documentation."
            features={["Design System", "Lead Generation", "WhatsApp CTA", "Catalog Form", "Performance Optimized", "SEO Ready"]}
            link={{ href: "https://unitedforce.sa/", label: "View Live" }}
          />

          <ProjectCardSmall
            delay={0.3}
            image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
            tag="Flutter · In Progress"
            title="Qaider App"
            subhead="Google Business Profile management"
            desc="Recently onboarded onto the Qaider project — a Google Business Profile management platform built in Flutter (370+ Dart files, 45 cloud functions). Performed a full architecture audit identifying critical technical debt, delivered two complete redesign roadmaps (Figma MCP and manual), and shipped immediate UI fixes."
            features={["Architecture Audit", "Redesign Roadmap", "UI/UX Fixes", "370+ Dart Files", "45 Cloud Functions", "In Progress"]}
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCardLarge({
  delay,
  reversed,
  image,
  tag,
  title,
  subhead,
  desc,
  features,
  stats,
  link,
}: {
  delay: number;
  reversed: boolean;
  image: React.ReactNode;
  tag: string;
  title: string;
  subhead: string;
  desc: string;
  features: string[];
  stats: string[];
  link?: { href: string; label: string };
}) {
  const content = (
    <div className="project-content">
      <span className="inline-block px-3 py-0.5 rounded-pill bg-orange-dim text-orange font-body font-semibold text-[11px] leading-relaxed mb-3">
        {tag}
      </span>
      <h3 className="font-display font-bold text-lg xs:text-[22px] md:text-[28px] leading-tight mb-1.5">{title}</h3>
      <p className="text-orange font-body font-medium text-[15px] mb-4">{subhead}</p>
      <p className="text-muted font-body text-sm leading-relaxed mb-4">{desc}</p>
      <div className="mb-4">{features.map(featurePill)}</div>
      <div className="flex flex-wrap gap-4 mb-4">
        {stats.map(statPill)}
      </div>
      {link && (
        <a
          href={link.href}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1.5 text-orange font-body font-semibold text-xs transition-all hover:gap-2.5"
        >
          {link.label}
          <ArrowRight size={14} />
        </a>
      )}
    </div>
  );

  const img = <div className="rounded-2xl overflow-hidden aspect-[16/10]">{image}</div>;

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-15 p-5 xs:p-6 sm:p-8 lg:p-15 rounded-3xl border border-divider mb-6 lg:mb-8 transition-all duration-300 hover:border-orange/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,122,26,0.1)] animate-on-scroll group relative overflow-hidden"
      style={{
        background: "var(--color-navy-light)",
        transitionDelay: `${delay}s`,
        direction: reversed ? "rtl" : "ltr",
      }}
    >
      <div className="progress-line" />
      {reversed ? (
        <>
          <div style={{ direction: "ltr" }}>{content}</div>
          <div style={{ direction: "ltr" }}>{img}</div>
        </>
      ) : (
        <>
          <div>{img}</div>
          <div>{content}</div>
        </>
      )}
    </div>
  );
}

function ProjectCardSmall({
  delay,
  image,
  tag,
  title,
  subhead,
  desc,
  features,
  stats,
  link,
}: {
  delay: number;
  image: string;
  tag: string;
  title: string;
  subhead: string;
  desc: string;
  features: string[];
  stats?: string[];
  link?: { href: string; label: string };
}) {
  return (
    <div
      className="p-5 xs:p-6 md:p-9 rounded-card border border-divider transition-all duration-300 hover:border-orange/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,122,26,0.1)] animate-on-scroll group relative overflow-hidden"
      style={{
        background: "var(--color-navy-light)",
        transitionDelay: `${delay}s`,
      }}
    >
      <div className="progress-line" />
      <div className="w-full h-40 rounded-xl overflow-hidden mb-4" style={{ background: "var(--color-navy-mid)" }}>
        <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <span className="inline-block px-3 py-0.5 rounded-pill bg-orange-dim text-orange font-body font-semibold text-[11px] leading-relaxed mb-3">
        {tag}
      </span>
      <h3 className="font-display font-bold text-xl leading-tight mb-1">{title}</h3>
      <p className="text-orange font-body font-medium text-sm mb-3">{subhead}</p>
      <p className="text-muted font-body text-[13px] leading-relaxed mb-4">{desc}</p>
      <div className="mb-3">{features.map(featurePill)}</div>
      {stats && (
        <div className="flex flex-wrap gap-3 mb-3">
          {stats.map(statPill)}
        </div>
      )}
      {link && (
        <a
          href={link.href}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1.5 text-orange font-body font-semibold text-xs transition-all hover:gap-2.5"
        >
          {link.label}
          <ArrowRight size={14} />
        </a>
      )}
    </div>
  );
}
