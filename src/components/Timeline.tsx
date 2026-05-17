const entries = [
  {
    month: "Dec 2025",
    title: "HRMS: Built from Scratch",
    body: "Architected and shipped the full HRMS platform — a React + TypeScript + Appwrite enterprise system with clock-in/out attendance, multi-stage leave management (Employee → Team Lead → HR), role-based dashboards for 4 user types, performance analytics with decimal precision, and a company hierarchy visualizer with smooth animations. Optimized the system to reduce API calls by 95% (from 124K+ requests by fixing a critical memory leak), migrated the database to Neon with Prisma (24 tables), and deployed the entire platform to Vercel serverless.",
  },
  {
    month: "Jan 2026",
    title: "United Force Landing Page + Tallu Onboarding",
    body: "Designed and delivered the complete United Force B2B industrial landing page — brand-consistent, with catalog browse, quote request, and WhatsApp CTA. Simultaneously onboarded onto the Tallu platform: built the Auth module with Country Code Picker, fixed Transport/Equipment tab logic and maps, optimized the Materials tab and Cart/Checkout state management, and unified Order UI to a receipt-style layout.",
  },
  {
    month: "Feb 2026",
    title: "Tallu Consumer App: Full UI Redesign",
    body: "Redesigned the entire Tallu Consumer App from the ground up — Auth screens, Custom Fluid Clipper Bottom Navigation, Checkout & Order Success, Machinery, Location Picker, Request lifecycle screens (Pending → Completed), Delivery Tracking, Return/Extension flows, Cart, Work in Progress, and all Profile/Account/Security screens including Active Sessions and Login History.",
  },
  {
    month: "Mar 2026",
    title: "Tallu Provider App Redesign + Backend Migration",
    body: "Redesigned the complete Tallu Provider App — Onboarding, Auth, KYC, Dashboard, Bottom Navigation, all Inventory modules (Equipment, Transport, Materials), Service tracking flows, Profile, Security, Earnings, and Orders. Simultaneously executed a full backend migration from Appwrite Cloud to a self-hosted server — resolving Auth/DB sync conflicts, restoring all category assets, deploying cloud functions, and adding 58 missing backend attributes.",
  },
  {
    month: "Apr 2026",
    title: "Commission Wallet + Reports + RTL + Live GPS",
    body: "Built the Commission Wallet system from scratch (dynamic rates, cloud functions for validation/acceptance/refund, transaction history, top-up request flow). Launched the Reports Module across both apps and the Admin Panel. Implemented 1,000+ EN/AR localization keys with full RTL layout support (custom RTLBackButton, directional layouts, icon flipping). Implemented two-phase Live GPS Tracking for Transport and Roadside Assistance. Added the Nearby Machinery map with Private Request flow.",
  },
  {
    month: "May 2026",
    title: "Firebase Notifications + Phone OTP + TestFlight + Qaider",
    body: "Wired the complete Firebase FCM push notification system with deep-link routing across both apps. Replaced email password recovery with Firebase Phone OTP. Added Remember-me session persistence. Fixed 30+ notification routing bugs (duplicate banners, killed-app crashes, spam loops). Submitted Tallu Consumer and Provider TestFlight builds to the App Store. Onboarded onto Qaider — performed full architecture audit of 370+ Dart files and delivered redesign roadmaps.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 md:py-[100px]" style={{ background: "var(--color-navy)" }}>
      <div className="max-w-[1140px] mx-auto px-5">
        <p className="font-display font-semibold text-[11px] text-orange uppercase tracking-widest mb-3 animate-on-scroll">MY JOURNEY</p>
        <h2 className="font-display font-bold text-[32px] md:text-[48px] leading-tight mb-10 animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
          6 months. 5 projects. Consistent delivery.
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2" style={{ background: "var(--color-divider)" }} />

          {entries.map((e, i) => (
            <div
              key={e.month}
              className="grid grid-cols-1 md:grid-cols-[1fr_60px_1fr] items-start mb-6 xs:mb-8 md:mb-12 relative pl-8 md:pl-0 animate-on-scroll"
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
            >
              {/* Desktop spacer */}
              <div className="hidden md:block" />

              {/* Desktop dot */}
              <div className="hidden md:block w-4 h-4 rounded-full bg-orange border-3 border-navy shadow-[0_0_0_4px_rgba(255,122,26,0.25)] mx-auto mt-5 relative z-10" />

              {/* Mobile dot + line */}
              <div className="absolute left-0 top-[22px] w-3 h-3 rounded-full bg-orange border-2 border-navy shadow-[0_0_0_3px_rgba(255,122,26,0.25)] md:hidden" />

              <div
                className="p-4 xs:p-5 md:p-7 rounded-card border border-divider transition-all duration-300 hover:border-orange/40 hover:scale-[1.02] hover:-translate-y-1 group relative overflow-hidden"
                style={{
                  background: "var(--color-navy-light)",
                  gridColumn: i % 2 === 0 ? "3" : "1",
                }}
              >
                <div className="progress-line" />
                <p className="font-display font-bold text-[12px] text-orange uppercase tracking-widest mb-2">{e.month}</p>
                <h3 className="font-display font-bold text-lg leading-tight mb-2.5">{e.title}</h3>
                <p className="text-muted font-body text-sm leading-relaxed">{e.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
