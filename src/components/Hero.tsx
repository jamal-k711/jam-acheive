"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import ParticleMesh from "@/components/three/ParticleMesh";

const heroLines = [
  "7 months. 7 projects. Zero missed sprints.",
  "End-to-end product delivery — design, build, ship, iterate.",
  "Flutter · Next.js · React.js · Firebase · Appwrite",
];

const nameChars = "AMIR JAMAL\nALI KHAN".split("");

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % heroLines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <ParticleMesh />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />

      {/* Gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="relative z-10 text-center px-6 max-w-[900px] mx-auto">
        <ScrollReveal delay={0.1}>
          <span className="inline-block px-4 py-1.5 rounded-full border border-indigo/30 text-indigo font-mono text-[11px] font-medium tracking-wider">
            AI Engineer / Flutter Developer @ SpeedForce Digital
          </span>
        </ScrollReveal>

        {/* Name with staggered letter reveal */}
        <motion.h1
          className="font-display font-black text-[48px] xs:text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-[0.9] mt-6 text-white select-none"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.03 } },
          }}
        >
          {nameChars.map((char, i) => (
            <motion.span
              key={`${char}-${i}`}
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { type: "spring", damping: 20, stiffness: 200 },
                },
              }}
              className={char === "\n" ? "block" : "inline-block"}
              style={char === "\n" ? { display: "block" } : undefined}
            >
              {char === "\n" ? "" : char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Cycling tagline */}
        <div className="h-8 mt-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={lineIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-secondary font-body text-base md:text-lg"
            >
              {heroLines[lineIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <MagneticButton href="#projects">
            <span className="inline-flex items-center gap-2 px-8 py-3.5 bg-red text-white rounded-full font-body font-semibold text-sm hover:shadow-lg hover:shadow-red/30 transition-all">
              View Projects
              <ArrowDown size={16} />
            </span>
          </MagneticButton>
          <MagneticButton href="#reports">
            <span className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-primary border border-[var(--glass-border)] rounded-full font-body font-semibold text-sm hover:border-red hover:text-red transition-all">
              Sprint Reports
            </span>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        style={{ animation: "bounceArrow 2s ease infinite" }}
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
