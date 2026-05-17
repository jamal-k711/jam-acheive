import {
  Smartphone, Code, Apple, Languages, AlignLeft, MapPin, Server, Zap, Bell,
  Cloud, Link, Radio, HardDrive, Globe, FileText, Layout, Database, Palette,
  GitBranch, Terminal, Monitor, PenTool, PlayCircle, Trello,
} from "lucide-react";

const categories = [
  {
    name: "Mobile",
    icon: Smartphone,
    skills: [
      { icon: Smartphone, label: "Flutter" },
      { icon: Code, label: "Dart" },
      { icon: Apple, label: "iOS (Xcode)" },
      { icon: Smartphone, label: "Android" },
      { icon: Languages, label: "ARB / Localization" },
      { icon: AlignLeft, label: "RTL Design" },
      { icon: MapPin, label: "GPS Tracking" },
    ],
  },
  {
    name: "Backend & Cloud",
    icon: Server,
    skills: [
      { icon: Server, label: "Appwrite" },
      { icon: Zap, label: "Firebase" },
      { icon: Bell, label: "FCM / APNs" },
      { icon: Cloud, label: "Cloud Functions" },
      { icon: Link, label: "REST APIs" },
      { icon: Radio, label: "Real-time Subscriptions" },
      { icon: HardDrive, label: "Appwrite Storage" },
    ],
  },
  {
    name: "Web & Frontend",
    icon: Globe,
    skills: [
      { icon: Code, label: "React" },
      { icon: FileText, label: "TypeScript" },
      { icon: Globe, label: "Next.js" },
      { icon: Layout, label: "HTML / CSS / JS" },
      { icon: Database, label: "Neon DB + Prisma" },
      { icon: Cloud, label: "Vercel Serverless" },
      { icon: Palette, label: "Tailwind CSS" },
    ],
  },
  {
    name: "Tools & Process",
    icon: GitBranch,
    skills: [
      { icon: GitBranch, label: "Git / GitHub" },
      { icon: Terminal, label: "Android Studio" },
      { icon: Monitor, label: "Xcode" },
      { icon: PenTool, label: "Figma" },
      { icon: PlayCircle, label: "Google Play Console" },
      { icon: Smartphone, label: "TestFlight / App Store" },
      { icon: Trello, label: "Jira" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-[100px]" style={{ background: "var(--color-navy-mid)" }}>
      <div className="max-w-[1140px] mx-auto px-5">
        <p className="font-display font-semibold text-[11px] text-orange uppercase tracking-widest mb-3 animate-on-scroll">TECHNICAL BREADTH</p>
        <h2 className="font-display font-bold text-[32px] md:text-[48px] leading-tight mb-10 animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
          From pixel to production.
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 lg:gap-6">
          {categories.map((cat, ci) => (
            <div
              key={cat.name}
              className="animate-on-scroll"
              style={{ transitionDelay: `${0.15 + ci * 0.1}s` }}
            >
              <h4
                className="font-display font-semibold text-sm uppercase tracking-wider pb-3 mb-4"
                style={{
                  color: "var(--color-white)",
                  borderBottom: "1px solid var(--color-divider)",
                }}
              >
                {cat.name}
              </h4>
              {cat.skills.map((s) => (
                <span
                  key={s.label}
                  className="inline-flex items-center gap-1.5 px-4 py-2 m-1 border border-divider rounded-pill font-body font-medium text-xs text-muted transition-all hover:bg-orange-dim hover:border-orange hover:text-orange cursor-default"
                >
                  <s.icon size={14} strokeWidth={1.5} />
                  {s.label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
