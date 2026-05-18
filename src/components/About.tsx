export default function About() {
  return (
    <section id="about" className="py-16 md:py-[100px]" style={{ background: "var(--color-navy)" }}>
      <div className="max-w-[1140px] mx-auto px-5">
        <p className="font-display font-semibold text-[11px] text-orange uppercase tracking-widest mb-3 animate-on-scroll">
          WHO I AM
        </p>
        <h2 className="font-display font-bold text-[32px] md:text-[48px] leading-tight mb-10 animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
          A builder who ships. Every sprint, every week.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
            <p className="text-sm xs:text-[15px] md:text-base leading-relaxed text-muted font-body mb-5">
              I joined SPEEDFORCE DIGITAL as an AI Engineer and grew rapidly into a
              full-stack mobile and web contributor &mdash; owning everything from
              enterprise HR system architecture to pixel-perfect Flutter app redesigns,
              Arabic RTL localization, live GPS tracking, and cloud function deployment.
            </p>
            <p className="text-sm xs:text-[15px] md:text-base leading-relaxed text-muted font-body mb-5">
              My work spans six deployment-ready projects delivered across web and
              mobile platforms &mdash; each one shipped, tested, and deployed. I don&rsquo;t
              just write code; I take ownership of the full delivery cycle from first
              commit to App Store submission.
            </p>
            <ul className="list-none mt-4 space-y-2">
              {[
                "Tallu Consumer App — iOS & Android (Flutter)",
                "Tallu Provider/Supplier App — iOS & Android (Flutter)",
                "Tallu Admin Panel — Dashboard (React + TypeScript)",
                "HRMS — Full-stack HR platform (React + TypeScript + Appwrite)",
                "United Force — Saudi Arabia B2B landing page",
                "Qaider App — Onboarding, architecture audit & redesign",
              ].map((item) => (
                <li
                  key={item}
                  className="text-xs xs:text-sm md:text-base text-muted font-body pl-5 relative before:absolute before:left-0 before:top-[8px] before:w-2 before:h-2 before:rounded-full before:bg-orange"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Code card */}
          <div
            className="animate-on-scroll p-5 xs:p-6 md:p-8 rounded-card border border-divider overflow-x-auto font-mono text-[11px] xs:text-xs leading-loose"
            style={{
              background: "var(--color-navy-light)",
              color: "var(--color-text-muted)",
              transitionDelay: "0.3s",
            }}
          >
            <span className="italic" style={{ color: "#5A6F84" }}>// HRMS — Real-time Performance Engine</span><br />
            <span className="text-orange">class</span> <span style={{ color: "#7EC8E3" }}>PerformanceService</span> {'{'}<br />
            &nbsp;&nbsp;<span className="text-orange">Future</span>&lt;<span className="text-orange">void</span>&gt; recalculate(<span className="text-orange">String</span> employeeId) <span className="text-orange">async</span> {'{'}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange">final</span> attendance = <span className="text-orange">await</span> _fetchAttendance(employeeId);<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange">final</span> tasks = <span className="text-orange">await</span> _fetchTasks(employeeId);<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange">final</span> score = _computeScore(attendance, tasks);<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange">await</span> _updateMetrics(employeeId, score);<br />
            &nbsp;&nbsp;{'}'}<br />
            {'}'}
          </div>
        </div>
      </div>
    </section>
  );
}
