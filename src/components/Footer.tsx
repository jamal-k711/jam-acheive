export default function Footer() {
  return (
    <footer
      className="py-15 pb-10 text-center border-t border-divider"
      id="footer"
    >
      <div className="max-w-[1140px] mx-auto px-5">
        <div className="w-14 h-14 rounded-full bg-orange flex items-center justify-center text-white font-display font-bold text-[22px] mx-auto mb-4 border-2 border-orange">
          JA
        </div>
        <p className="font-display font-bold text-lg xs:text-[22px] leading-tight mb-1.5">Amir Jamal Ali Khan</p>
        <p className="text-muted font-body text-sm mb-6">
          AI Engineer / Flutter Developer &mdash; SPEEDFORCE DIGITAL
        </p>
        <div className="w-[60px] h-px mx-auto mb-6" style={{ background: "var(--color-divider)" }} />
        <p className="font-display font-semibold text-[15px] text-orange mb-2">
          Built with discipline. Delivered with care.
        </p>
        <p className="text-muted font-body text-[13px]">
          December 2025 &ndash; May 2026
        </p>
      </div>
    </footer>
  );
}
