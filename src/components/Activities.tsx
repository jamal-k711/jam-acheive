import { ExternalLink } from "lucide-react";

const events = [
  {
    date: "April 2026",
    title: "Eid Celebrations",
    body: "Participated in the company&rsquo;s Eid Mubarak event &mdash; a celebration of culture, team unity, and employee appreciation organized by SFD.",
    url: "https://www.linkedin.com/posts/speedforceagency_eidmubarak-teamculture-employeeappreciation-activity-7435715827263258624-RWZC",
  },
  {
    date: "March 2026",
    title: "Ramadan Iftar",
    body: "Joined the team Iftar gathering &mdash; a moment of reflection, connection, and community during the holy month of Ramadan.",
    url: "https://www.linkedin.com/posts/speedforceagency_ramadan-teamculture-iftaarmoments-activity-7437765241750470656-yqFV",
  },
  {
    date: "March 2026",
    title: "Soft Skills Training",
    body: "Attended a structured soft skills training session organized by HR, focused on workplace habits and professional team development.",
    url: "https://www.linkedin.com/posts/speedforceagency_softskills-workplacehabits-teamdevelopment-activity-7442925828369334272-NPMi",
  },
  {
    date: "April 2026",
    title: "Team Farewell Event",
    body: "Participated in the farewell event organized by SFD &mdash; contributing to a culture of recognition, warmth, and team appreciation.",
    url: "https://www.linkedin.com/posts/speedforceagency_farewell-teamappreciation-uiux-activity-7449443788563066880-kr1G",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-16 md:py-[100px]" style={{ background: "var(--color-navy)" }}>
      <div className="max-w-[1140px] mx-auto px-5">
        <p className="font-display font-semibold text-[11px] text-orange uppercase tracking-widest mb-3 animate-on-scroll">BEYOND THE CODE</p>
        <h2 className="font-display font-bold text-[32px] md:text-[48px] leading-tight mb-10 animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
          A team player, not just a developer.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {events.map((e, i) => (
            <div
              key={e.title}
              className="p-5 xs:p-6 md:p-9 rounded-card border border-divider relative overflow-hidden animate-on-scroll group transition-all duration-300 hover:border-orange/40 hover:scale-[1.02] hover:-translate-y-1"
              style={{
                background: "var(--color-navy-light)",
                transitionDelay: `${0.15 + i * 0.1}s`,
              }}
            >
              <div className="progress-line" />
              {/* Background overlay */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: "url('https://speedforce.agency/logo.avif')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "var(--color-card-overlay)",
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                <p className="font-body font-semibold text-[11px] text-orange uppercase tracking-widest mb-2.5">{e.date}</p>
                <h3 className="font-display font-bold text-lg leading-tight mb-2.5">{e.title}</h3>
                <p
                  className="text-muted font-body text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: e.body }}
                />
                <a
                  href={e.url}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 text-orange font-body font-semibold text-xs mt-3.5 transition-all hover:gap-2.5"
                >
                  View on LinkedIn
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
