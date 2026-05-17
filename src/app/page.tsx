"use client";

import { useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Activities from "@/components/Activities";
import Reports from "@/components/Reports";
import Footer from "@/components/Footer";

export default function Home() {
  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Smooth scroll
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const href = (anchor as HTMLAnchorElement).getAttribute("href");
        if (!href) return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Timeline />
      <Skills />
      <Activities />
      <Reports />
      <Footer />
    </main>
  );
}
