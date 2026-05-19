"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ImpactNumbers from "@/components/ImpactNumbers";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Activities from "@/components/Activities";
import ABCDReports from "@/components/ABCDReports";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="overflow-x-hidden">
        <Nav />
        <Hero />
        <ImpactNumbers />
        <About />
        <Projects />
        <Timeline />
        <Skills />
        <Activities />
        <ABCDReports />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
