"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";

const strings = [
  "Built production apps used across Saudi Arabia.",
  "6 Projects. 6 Months. Zero missed sprints.",
  "Flutter \u00B7 React \u00B7 Appwrite \u00B7 Firebase \u00B7 RTL/Arabic",
];

export default function Hero() {
  const [text, setText] = useState("");
  const strIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const imageRef = useRef<HTMLDivElement>(null);

  // Typewriter
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    function step() {
      const current = strings[strIndex.current];
      if (!isDeleting.current) {
        charIndex.current++;
        setText(current.substring(0, charIndex.current));
        if (charIndex.current === current.length) {
          timer = setTimeout(() => { isDeleting.current = true; step(); }, 2000);
          return;
        }
        timer = setTimeout(step, 40);
      } else {
        charIndex.current--;
        setText(current.substring(0, charIndex.current));
        if (charIndex.current === 0) {
          isDeleting.current = false;
          strIndex.current = (strIndex.current + 1) % strings.length;
          timer = setTimeout(step, 300);
          return;
        }
        timer = setTimeout(step, 20);
      }
    }
    timer = setTimeout(step, 100);
    return () => clearTimeout(timer);
  }, []);

  // Mouse-driven 3D parallax for profile image
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const rotateY = useTransform(springX, [0, 1], [12, -12]);
  const rotateX = useTransform(springY, [0, 1], [-12, 12]);
  const translateX = useTransform(springX, [0, 1], [-8, 8]);
  const translateY = useTransform(springY, [0, 1], [-8, 8]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-[72px]"
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Orange accent line */}
      <div
        className="absolute bottom-24 right-6 sm:right-8 w-[100px] sm:w-[200px] h-[2px] opacity-30 pointer-events-none"
        style={{
          background: "var(--color-orange)",
          transform: "rotate(-15deg)",
        }}
      />

      <div className="w-full relative z-10 px-5 md:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 xs:gap-8 lg:gap-10 max-w-[1140px] mx-auto">
          {/* Left: Text content */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-5 py-2 rounded-pill bg-orange-dim text-orange text-xs font-body font-semibold mb-5 tracking-wide"
              suppressHydrationWarning
            >
              AI Engineer / Flutter Developer @ SPEEDFORCE DIGITAL
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-[26px] xs:text-[30px] sm:text-[34px] md:text-[40px] lg:text-[48px] xl:text-[52px] 2xl:text-[56px] leading-[1.1] mb-4"
              suppressHydrationWarning
            >
              Amir Jamal Ali Khan
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-muted font-body min-h-[60px] md:min-h-[52px] mb-8"
              suppressHydrationWarning
            >
              <span>{text}</span>
              <span
                className="text-orange"
                style={{ animation: "blink 0.7s step-end infinite" }}
              >
                |
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
              suppressHydrationWarning
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange text-white rounded-pill font-body font-semibold text-sm transition-all hover:shadow-lg hover:shadow-orange/30 hover:-translate-y-0.5"
              >
                View My Work
                <ArrowDown size={16} />
              </a>
              <a
                href="#reports"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-white border border-[var(--color-border)] rounded-pill font-body font-semibold text-sm transition-all hover:border-orange hover:-translate-y-0.5"
              >
                View ABCD Reports
                <FileText size={16} />
              </a>
            </motion.div>
          </div>

          {/* Right: 3D Animated profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex items-center justify-center"
            suppressHydrationWarning
          >
            <div
              ref={imageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-[200px] h-[200px] xs:w-[240px] xs:h-[240px] sm:w-[270px] sm:h-[270px] md:w-[310px] md:h-[310px] lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px] 2xl:w-[440px] 2xl:h-[440px]"
              style={{ perspective: "800px" }}
            >
              {/* Glow aura layers */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-orange/10 blur-3xl"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.08, 0.15, 0.08],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                suppressHydrationWarning
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange/5 via-transparent to-orange/5 blur-xl" />

              {/* Floating particles */}
              <motion.div
                className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-orange/40"
                animate={{ y: [-8, 8, -8], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                suppressHydrationWarning
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-2.5 h-2.5 rounded-full bg-orange/30"
                animate={{ y: [0, -12, 0], opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                suppressHydrationWarning
              />
              <motion.div
                className="absolute top-1/4 -right-8 w-3.5 h-3.5 rounded-full bg-orange/20"
                animate={{ y: [-6, 10, -6], opacity: [0.15, 0.5, 0.15] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                suppressHydrationWarning
              />
              <motion.div
                className="absolute bottom-1/4 -left-8 w-3.5 h-3.5 rounded-full bg-orange/25"
                animate={{ y: [4, -8, 4], opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                suppressHydrationWarning
              />

              {/* 3D Image container with mouse-driven tilt */}
              <motion.div
                className="w-full h-full"
                style={{
                  rotateX,
                  rotateY,
                  translateX,
                  translateY,
                  transformStyle: "preserve-3d",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                suppressHydrationWarning
              >
                <div className="w-full h-full rounded-full overflow-hidden outline outline-[3px] outline-orange shadow-[0_0_30px_rgba(255,122,26,0.3)] p-1">
                  <motion.img
                    src="/assets/profile_no_bg.png"
                    alt="Amir Jamal Ali Khan"
                    className="w-full h-full object-cover rounded-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    suppressHydrationWarning
                  />
                </div>
              </motion.div>

              {/* Reflective shine overlay */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08) 0%, transparent 60%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        style={{ animation: "bounceArrow 2s ease infinite" }}
        suppressHydrationWarning
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}
