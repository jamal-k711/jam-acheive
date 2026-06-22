import type { Metadata } from "next";
import "./globals.css";
import CursorGlow from "@/components/ui/CursorGlow";

export const metadata: Metadata = {
  title: "Amir Jamal Ali Khan — Achievement Portfolio",
  description:
    "AI Engineer & Flutter Developer @ SpeedForce Digital. 6 projects. 6 months. Zero missed sprints.",
  openGraph: {
    title: "Amir Jamal Ali Khan — Achievement Portfolio",
    description:
      "AI Engineer & Flutter Developer @ SpeedForce Digital. 6 projects. 6 months. Zero missed sprints.",
    images: [{ url: "/og", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
