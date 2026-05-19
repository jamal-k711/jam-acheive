export const heroStrings = [
  "6 projects. 6 months. Zero missed sprints.",
  "Built production apps used across Saudi Arabia.",
  "Flutter · React · Appwrite · Firebase · RTL/Arabic",
];

export const stats = [
  { target: 5, suffix: "+", label: "Production Projects Delivered" },
  { target: 300, suffix: "+", label: "Screens Designed & Redesigned" },
  { target: 45, suffix: "+", label: "Cloud Functions Deployed" },
  { target: 6, suffix: "", label: "Months of Continuous Delivery" },
  { target: 4, suffix: "", label: "HRMS Roles Built" },
  { target: 2, suffix: "", label: "App Store Launches" },
];

export const secondaryStats = [
  "6 Months Delivery", "2 App Store Launches", "100% RTL Coverage",
];

export const aboutBullets = [
  "95% API reduction in HRMS (124K+ → <5K requests)",
  "1,000+ localization keys — full Arabic RTL coverage",
  "TestFlight builds for both Tallu apps shipped",
];

export const techStack = [
  "Flutter", "React", "TypeScript", "Appwrite", "Firebase", "Figma",
  "Next.js", "Dart", "Node.js", "Tailwind CSS",
];

export const timelineEntries = [
  {
    month: "Dec 2025",
    title: "HRMS: Built from Scratch",
    body: "Architected and shipped the full HRMS platform — a React + TypeScript + Appwrite enterprise system with clock-in/out attendance, multi-stage leave management, role-based dashboards for 4 user types, performance analytics, and a company hierarchy visualizer.",
    metrics: ["95% API Reduction", "4 User Roles", "24 DB Tables"],
  },
  {
    month: "Jan 2026",
    title: "United Force + Tallu Onboarding",
    body: "Designed and delivered the complete United Force B2B landing page — brand-consistent, with catalog browse, quote request, and WhatsApp CTA. Onboarded onto the Tallu platform: Auth module, Transport/Equipment maps, optimized Materials and Cart/Checkout.",
    metrics: ["B2B Landing Page", "Auth Module", "Cart Optimization"],
  },
  {
    month: "Feb 2026",
    title: "Tallu Consumer: Full UI Redesign",
    body: "Redesigned the entire Tallu Consumer App from the ground up — all Auth screens, Custom Fluid Clipper Bottom Navigation, Checkout & Order Success, Machinery, Location Picker, Request lifecycle, Delivery Tracking, Return/Extension flows, Cart, and Profile screens.",
    metrics: ["100+ Screens", "Full Redesign", "iOS & Android"],
  },
  {
    month: "Mar 2026",
    title: "Provider Redesign + Backend Migration",
    body: "Redesigned the complete Tallu Provider App — Onboarding, Auth, KYC, Dashboard, all Inventory modules, Service tracking flows, Profile, Security, Earnings, and Orders. Executed full backend migration from Appwrite Cloud to self-hosted server.",
    metrics: ["100+ Screens", "Backend Migration", "Auth/DB Sync"],
  },
  {
    month: "Apr 2026",
    title: "Wallet + Reports + RTL + Live GPS",
    body: "Built the Commission Wallet system from scratch with dynamic rates, cloud functions, transaction history, and top-up requests. Launched the Reports Module across both apps and Admin Panel. Implemented 1,000+ EN/AR localization keys with full RTL. Two-phase Live GPS Tracking.",
    metrics: ["Commission Wallet", "1,000+ Locale Keys", "Live GPS"],
  },
  {
    month: "May 2026",
    title: "Firebase Notifications + Qaider",
    body: "Wired the complete Firebase FCM push notification system with deep-link routing across both apps. Replaced email password recovery with Firebase Phone OTP. Added Remember-me session persistence. Onboarded onto Qaider — performed full architecture audit.",
    metrics: ["FCM + Deep Links", "Phone OTP", "Architecture Audit"],
  },
];

export const skillCategories = [
  {
    name: "Mobile",
    items: ["Flutter", "Dart", "iOS (Xcode)", "Android", "ARB / Localization", "RTL Design", "GPS Tracking"],
    mastery: { Flutter: 5, Dart: 4, "iOS (Xcode)": 3, Android: 4, "ARB / Localization": 5, "RTL Design": 5, "GPS Tracking": 4 },
  },
  {
    name: "Backend & Cloud",
    items: ["Appwrite", "Firebase", "FCM / APNs", "Cloud Functions", "REST APIs", "Real-time", "Appwrite Storage"],
    mastery: { Appwrite: 5, Firebase: 4, "FCM / APNs": 4, "Cloud Functions": 4, "REST APIs": 4, "Real-time": 4, "Appwrite Storage": 3 },
  },
  {
    name: "Web & Frontend",
    items: ["React", "TypeScript", "Next.js", "HTML / CSS / JS", "Neon DB + Prisma", "Vercel Serverless", "Tailwind CSS"],
    mastery: { React: 4, TypeScript: 4, "Next.js": 4, "HTML / CSS / JS": 5, "Neon DB + Prisma": 3, "Vercel Serverless": 3, "Tailwind CSS": 5 },
  },
  {
    name: "Tools & Process",
    items: ["Git / GitHub", "Android Studio", "Xcode", "Figma", "Google Play Console", "TestFlight", "Jira"],
    mastery: { "Git / GitHub": 4, "Android Studio": 4, Xcode: 3, Figma: 4, "Google Play Console": 3, TestFlight: 4, Jira: 3 },
  },
];

export const skillTabs = ["All", "Mobile", "Backend", "Web", "Tools"] as const;

export const skillCategoryMap: Record<string, string[]> = {
  All: ["Flutter", "Dart", "iOS (Xcode)", "Android", "ARB / Localization", "RTL Design", "GPS Tracking",
        "Appwrite", "Firebase", "FCM / APNs", "Cloud Functions", "REST APIs", "Real-time", "Appwrite Storage",
        "React", "TypeScript", "Next.js", "HTML / CSS / JS", "Neon DB + Prisma", "Vercel Serverless", "Tailwind CSS",
        "Git / GitHub", "Android Studio", "Xcode", "Figma", "Google Play Console", "TestFlight", "Jira"],
  Mobile: ["Flutter", "Dart", "iOS (Xcode)", "Android", "ARB / Localization", "RTL Design", "GPS Tracking"],
  Backend: ["Appwrite", "Firebase", "FCM / APNs", "Cloud Functions", "REST APIs", "Real-time", "Appwrite Storage"],
  Web: ["React", "TypeScript", "Next.js", "HTML / CSS / JS", "Neon DB + Prisma", "Vercel Serverless", "Tailwind CSS"],
  Tools: ["Git / GitHub", "Android Studio", "Xcode", "Figma", "Google Play Console", "TestFlight", "Jira"],
};

export const activities = [
  {
    date: "April 2026",
    title: "Eid Celebrations",
    body: "Participated in the company's Eid Mubarak event — a celebration of culture, team unity, and employee appreciation organized by SFD.",
    url: "https://www.linkedin.com/posts/speedforceagency_eidmubarak-teamculture-employeeappreciation-activity-7435715827263258624-RWZC",
  },
  {
    date: "March 2026",
    title: "Ramadan Iftar",
    body: "Joined the team Iftar gathering — a moment of reflection, connection, and community during the holy month of Ramadan.",
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
    body: "Participated in the farewell event organized by SFD — contributing to a culture of recognition, warmth, and team appreciation.",
    url: "https://www.linkedin.com/posts/speedforceagency_farewell-teamappreciation-uiux-activity-7449443788563066880-kr1G",
  },
];

export const abcdSprints = [
  {
    label: "Sprint — HRMS Architecture",
    achievement: "Built full HRMS — attendance, leave, performance, role-based auth, enterprise dashboards, 95% API reduction",
    benefit: "Secure, scalable HR platform with strict data access controls",
    concern: "Bundle size and lazy loading initially needed optimization",
  },
  {
    label: "Sprint — United Force + Tallu Onboarding",
    achievement: "Shipped United Force landing page; built Tallu Auth, Maps, Cart, and Inventory foundations",
    benefit: "Strong B2B web presence delivered; Tallu development unblocked",
    concern: "Git authorization and token issues during initial onboarding",
  },
  {
    label: "Sprint — Backend Migration",
    achievement: "Migrated Appwrite Cloud to self-hosted server; resolved Auth/DB sync; added 58 DB attributes; deployed cloud functions",
    benefit: "Full system independence restored with robust data integrity",
    concern: "Managing intermittent sync during final stabilization phase",
  },
  {
    label: "Sprint — Commission Wallet & Reports",
    achievement: "Built wallet system from scratch; launched Reports module across both apps and Admin Panel; RTL/localization",
    benefit: "Automated financial tracking; transparent issue management; native Arabic UX",
    concern: "Ensuring 4th nav tab doesn't crowd UI on smaller screens",
  },
  {
    label: "Sprint — Auth & Notification Routing",
    achievement: "Firebase phone OTP recovery; deep-link routing for 30+ notification types; killed duplicate banners",
    benefit: "Streamlined recovery, no crashes from killed-app taps, zero spam",
    concern: "Firebase SMS OTP quota limits across regional telecom providers",
  },
];

export const projects = {
  featured: [
    {
      id: "tallu-consumer",
      number: "01",
      tag: "Flutter · iOS & Android",
      title: "Tallu Consumer App",
      subhead: "On-demand marketplace for Saudi Arabia",
      desc: "Built the complete consumer-facing mobile app — enabling users across Saudi Arabia to book construction machinery, freight transport, and 24/7 roadside assistance. Includes live GPS tracking, real-time offer negotiation, full Arabic/RTL UI, push notification routing, KYC flows, and reports.",
      features: ["Live GPS Tracking", "RTL/Arabic", "FCM Notifications", "Interactive Sheets", "Real-time Offers", "1,000+ Locale Keys"],
      stats: ["200+ Screens", "Full RTL", "TestFlight Live"],
      image: "https://tallu.speedforcehosting.com/_next/image?url=%2FHome%20screens%2FMockup.png&w=3840&q=75",
      link: { href: "https://tallu.speedforcehosting.com/", label: "View Landing Page →" },
    },
    {
      id: "tallu-provider",
      number: "02",
      tag: "Flutter · iOS & Android",
      title: "Tallu Provider App",
      subhead: "Supplier-side app for verified service providers",
      desc: "Built the full provider-facing mobile app — from two-step KYC submission and complete profile flow to live job tracking, machinery and vehicle management, commission wallet with top-up requests, and targeted push notifications based on provider inventory.",
      features: ["Commission Wallet", "Live GPS", "KYC Verification", "Custom Vehicle Types", "Private Requests", "RTL Support"],
      stats: ["100+ Screens", "7 Cloud Functions", "TestFlight Released"],
      image: "https://tallu.speedforcehosting.com/_next/image?url=%2FHome%20screens%2FMockup.png&w=3840&q=75",
      link: { href: "https://tallu.speedforcehosting.com/", label: "View Landing Page →" },
    },
    {
      id: "tallu-admin",
      number: "03",
      tag: "React · TypeScript · Appwrite",
      title: "Tallu Admin Panel",
      subhead: "Centralized operations dashboard for the Tallu platform",
      desc: "Enhanced & Maintained the complete admin control panel for the Tallu ecosystem — a feature-rich dashboard enabling platform-wide user management, service verification, order tracking, content moderation, and real-time analytics. Integrated with the same Appwrite backend powering both Consumer and Provider apps.",
      features: ["User Management", "Order Tracking", "Service Verification", "Content Moderation", "Real-time Analytics", "Reports Management", "Role-Based Access"],
      stats: ["Full Dashboard", "Cross-App Integration"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      link: { href: "https://tallu-admin.speedforcehosting.com/dashboard", label: "View Dashboard" },
    },
  ],
  compact: [
    {
      id: "hrms",
      number: "04",
      tag: "React · TypeScript · Appwrite",
      title: "HRMS System",
      subhead: "Enterprise HR platform built from scratch",
      desc: "Architected and built a full Human Resource Management System — attendance, leave management, role-based dashboards, performance analytics.",
      features: ["Role-Based Auth", "Attendance Tracking", "Leave Governance", "Performance Analytics", "95% API Reduction"],
      stats: ["4 User Roles", "24 DB Tables", "95% API Reduction"],
      highlight: "95% API Reduction",
    },
    {
      id: "united-force",
      number: "05",
      tag: "Web · HTML/CSS/JS",
      title: "United Force",
      subhead: "Saudi Arabia B2B industrial landing page",
      desc: "Designed and developed the complete United Force landing page with catalog browse, quote request form, and WhatsApp contact integration.",
      features: ["Design System", "Lead Generation", "WhatsApp CTA", "SEO Ready"],
      link: { href: "https://unitedforce.sa/", label: "View Live" },
    },
    {
      id: "qaider",
      number: "06",
      tag: "Flutter · In Progress",
      title: "Qaider App",
      subhead: "Google Business Profile management",
      desc: "Performed full architecture audit of 370+ Dart files, 45 cloud functions. Delivered redesign roadmaps and shipped immediate UI fixes.",
      features: ["Architecture Audit", "Redesign Roadmap", "UI/UX Fixes", "370+ Dart Files"],
      stats: ["45 Cloud Functions", "In Progress"],
    },
  ],
};
