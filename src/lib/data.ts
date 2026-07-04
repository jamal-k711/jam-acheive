export const heroStrings = [
  "7 months. 7 projects. Zero missed sprints.",
  "Built production apps used across Saudi Arabia.",
  "Flutter · React · Appwrite · Firebase · RTL/Arabic",
];

export const stats = [
  { target: 7, suffix: "+", label: "Production Projects Delivered" },
  { target: 300, suffix: "+", label: "Screens Designed & Redesigned" },
  { target: 12, suffix: "+", label: "Microservices Deployed" },
  { target: 7, suffix: "", label: "Months of Continuous Delivery" },
  { target: 4, suffix: "", label: "HRMS Roles Built" },
  { target: 2, suffix: "", label: "App Store Launches" },
];

export const secondaryStats = [
  "Full-Stack Delivery", "Cross-Platform Apps", "Bilingual Apps", "100% RTL Coverage",
];

export const aboutBullets = [
  "95% API reduction in HRMS (124K+ → <5K requests)",
  "1,000+ localization keys — full Arabic RTL coverage",
  "CI/CD pipeline for dual-app TestFlight releases",
];

export const techStack = [
  "Flutter", "React", "TypeScript", "Appwrite", "Firebase", "Figma",
  "Next.js", "Dart", "Node.js", "Tailwind CSS",
];

export const timelineEntries = [
  {
    month: "Dec 2025",
    title: "HRMS: Enterprise HR from Zero",
    body: "Built a full enterprise HR platform — attendance tracking, multi-stage leave approval, performance analytics, and role-based dashboards for four user types.",
    metrics: ["95% API Reduction", "4 User Roles", "24 DB Tables"],
  },
  {
    month: "Jan 2026",
    title: "United Force + Tallu Kickoff",
    body: "Delivered the United Force B2B industrial landing page end-to-end, then onboarded onto the Tallu platform — building the Auth module and unifying the cart and order experience.",
    metrics: ["B2B Landing Page", "Auth Module", "Cart Redesign"],
  },
  {
    month: "Feb 2026",
    title: "Tallu Consumer: Full Redesign",
    body: "Redesigned the entire Tallu Consumer App — Auth, custom bottom navigation, checkout, machinery and location flows, request lifecycle, delivery tracking, and dark theme across iOS and Android.",
    metrics: ["100+ Screens", "iOS & Android", "Dark Mode"],
  },
  {
    month: "Mar 2026",
    title: "Tallu Provider + Backend Migration",
    body: "Redesigned the complete Provider App — onboarding, KYC, dashboard, all inventory modules, and earnings. Migrated the backend from Appwrite Cloud to a self-hosted server.",
    metrics: ["Provider App", "Self-Hosted Backend", "58 DB Attributes"],
  },
  {
    month: "Apr 2026",
    title: "Wallet, RTL & Live Tracking",
    body: "Built the Commission Wallet with dynamic cloud functions, shipped 1,000+ EN/AR localization keys with full RTL support, and implemented two-phase live GPS tracking.",
    metrics: ["Commission Wallet", "1,000+ Locale Keys", "Live GPS"],
  },
  {
    month: "May 2026",
    title: "Qaider: Architecture & Redesign",
    body: "Performed a full architecture audit across 370+ files, eliminated 5,070+ analyzer errors, centralized 2,500+ hardcoded color references, and completed a multi-phase UI redesign.",
    metrics: ["370 Files Audited", "Zero Analyzer Errors", "Full Redesign"],
  },
  {
    month: "Jun 2026",
    title: "ECS Workforce: Full Stack in a Sprint",
    body: "Scaffolded the complete ECS Workforce system — Flutter app with GPS geofencing and Saudi labor law leave engine, NestJS backend with 11 DB migrations, and a bilingual shadcn admin dashboard.",
    metrics: ["Flutter + NestJS", "GPS Geofencing", "Bilingual RTL/LTR"],
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
    items: ["Git / GitHub", "Android Studio", "Xcode", "Figma", "Google Play Console", "Jira"],
    mastery: { "Git / GitHub": 4, "Android Studio": 4, Xcode: 3, Figma: 4, "Google Play Console": 3, Jira: 3 },
  },
];

export const skillTabs = ["All", "Mobile", "Backend", "Web", "Tools"] as const;

export const skillCategoryMap: Record<string, string[]> = {
  All: ["Flutter", "Dart", "iOS (Xcode)", "Android", "ARB / Localization", "RTL Design", "GPS Tracking",
        "Appwrite", "Firebase", "FCM / APNs", "Cloud Functions", "REST APIs", "Real-time", "Appwrite Storage",
        "React", "TypeScript", "Next.js", "HTML / CSS / JS", "Neon DB + Prisma", "Vercel Serverless", "Tailwind CSS",
        "Git / GitHub", "Android Studio", "Xcode", "Figma", "Google Play Console", "Jira"],
  Mobile: ["Flutter", "Dart", "iOS (Xcode)", "Android", "ARB / Localization", "RTL Design", "GPS Tracking"],
  Backend: ["Appwrite", "Firebase", "FCM / APNs", "Cloud Functions", "REST APIs", "Real-time", "Appwrite Storage"],
  Web: ["React", "TypeScript", "Next.js", "HTML / CSS / JS", "Neon DB + Prisma", "Vercel Serverless", "Tailwind CSS"],
  Tools: ["Git / GitHub", "Android Studio", "Xcode", "Figma", "Google Play Console", "Jira"],
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
    doNext: "Finalize lazy loading with Suspense boundaries and code splitting",
  },
  {
    label: "Sprint — United Force + Tallu Onboarding",
    achievement: "Shipped United Force landing page; built Tallu Auth, Maps, Cart, and Inventory foundations",
    benefit: "Strong B2B web presence delivered; Tallu development unblocked",
    concern: "Git authorization and token issues during initial onboarding",
    doNext: "Configure Git credential helpers and team access tokens",
  },
  {
    label: "Sprint — Backend Migration",
    achievement: "Migrated Appwrite Cloud to self-hosted server; resolved Auth/DB sync; added 58 DB attributes; deployed cloud functions",
    benefit: "Full system independence restored with robust data integrity",
    concern: "Managing intermittent sync during final stabilization phase",
    doNext: "Implement health checks and automated sync monitoring dashboard",
  },
  {
    label: "Sprint — Commission Wallet & Reports",
    achievement: "Built wallet system from scratch; launched Reports module across both apps and Admin Panel; RTL/localization",
    benefit: "Automated financial tracking; transparent issue management; native Arabic UX",
    concern: "Ensuring 4th nav tab doesn't crowd UI on smaller screens",
    doNext: "Refactor bottom nav to support dynamic tab visibility per role",
  },
  {
    label: "Sprint — Auth & Notification Routing",
    achievement: "Firebase phone OTP recovery; deep-link routing for 30+ notification types; killed duplicate banners",
    benefit: "Streamlined recovery, no crashes from killed-app taps, zero spam",
    concern: "Firebase SMS OTP quota limits across regional telecom providers",
    doNext: "Integrate secondary SMS provider as fallback for OTP delivery",
  },
];

export const projects = {
  featured: [
    {
      id: "qaider",
      number: "01",
      tag: "Flutter · AI",
      title: "Qaider App",
      subhead: "AI-powered Google Business Profile manager",
      desc: "An AI-powered Google Business Profile manager — review replies in natural Arabic dialects, automated responses, performance insights, and loyalty rewards, all from one bilingual app.",
      features: ["AI Review Replies", "Najd/Hijaz Dialect Support", "Performance Insights", "Loyalty Rewards"],
      stats: ["45 Cloud Functions", "370+ Dart Files Audited"],
      image: "/projects/qaider/qaider-poster.png",
    },
    {
      id: "tallu-consumer",
      number: "02",
      tag: "Flutter · iOS & Android",
      title: "Tallu Consumer App",
      subhead: "Construction marketplace app",
      desc: "A marketplace for construction needs — find machinery, book transport, and get roadside help. Browse, compare, and track your orders in Arabic or English.",
      features: ["Machinery Marketplace", "Live Order Tracking", "Bilingual EN/AR", "Push Notifications"],
      stats: ["200+ Screens", "Full RTL", "TestFlight Live"],
      image: "https://tallu.speedforcehosting.com/_next/image?url=%2FHome%20screens%2FMockup.png&w=3840&q=75",
    },
    {
      id: "tallu-provider",
      number: "03",
      tag: "Flutter · iOS & Android",
      title: "Tallu Supplier App",
      subhead: "Vendor operations dashboard",
      desc: "An all-in-one app for service providers — list your machinery, respond to customer requests, track jobs, and manage your earnings.",
      features: ["Earnings Dashboard", "Job Management", "KYC Onboarding", "Commission Tracking"],
      stats: ["100+ Screens", "TestFlight Released", "Real-time Tracking"],
      image: "https://tallu.speedforcehosting.com/_next/image?url=%2FHome%20screens%2FMockup.png&w=3840&q=75",
    },
  ],
  compact: [
    {
      id: "tallu-admin",
      number: "04",
      tag: "React · TypeScript · Appwrite",
      title: "Tallu Admin Panel",
      subhead: "Centralized operations dashboard for the Tallu platform",
      desc: "The control panel for the entire Tallu platform — manage users, approve services, monitor activity, and see how the business is performing in real time.",
      features: ["Platform Oversight", "Content Moderation", "Real-time Insights", "Service Approval"],
      stats: ["Full Dashboard", "Cross-App Integration"],
      image: "https://tallu.speedforcehosting.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadmin-dashboard.png&w=3840&q=75",
    },
    {
      id: "hrms",
      number: "05",
      tag: "React · TypeScript · Appwrite",
      title: "HRMS System",
      subhead: "Enterprise HR platform built from scratch",
      desc: "A complete HR system for managing your team — track attendance, handle leave requests, review performance, and give each role the right level of access.",
      features: ["Employee Lifecycle", "Role-Based Access", "Performance Reviews", "Attendance System"],
      stats: ["4 User Roles", "24 DB Tables", "95% API Reduction"],
      highlight: "95% API Reduction",
    },
    {
      id: "united-force",
      number: "06",
      tag: "Web · HTML/CSS/JS",
      title: "United Force",
      subhead: "Saudi Arabia B2B industrial landing page",
      desc: "A product showcase website for industrial equipment — browse what's available, request a price quote, and connect with the team directly on WhatsApp.",
      features: ["Equipment Catalog", "Quote Request", "CTA Integration", "B2B Landing Page"],
    },
    {
      id: "ecs-workforce",
      number: "07",
      tag: "Flutter · NestJS · Next.js",
      title: "ECS Workforce",
      subhead: "Full-stack workforce management system for Saudi enterprises",
      desc: "A workforce management system for Saudi enterprises — GPS-geofenced check-in, bilingual leave management with Saudi labor law enforcement, and a full admin dashboard.",
      features: ["Flutter", "NestJS", "PostgreSQL", "Next.js", "Docker", "FCM", "Bilingual RTL/LTR"],
      stats: ["3 App Layers", "11 DB Migrations", "GPS Geofencing"],
    },
  ],
};
