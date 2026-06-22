import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const [cabinetBoldData, geistData, geistMonoData] = await Promise.all([
    fetch("https://fonts.cdnfonts.com/s/103809/CabinetGrotesk-Bold.woff").then(
      (r) => r.arrayBuffer()
    ),
    fetch("https://fonts.cdnfonts.com/s/113733/Geist-Regular.woff").then(
      (r) => r.arrayBuffer()
    ),
    fetch("https://fonts.cdnfonts.com/s/113733/GeistMono-Regular.woff").then(
      (r) => r.arrayBuffer()
    ),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#08090C",
          fontFamily: "Cabinet Grotesk",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(230, 57, 70, 0.15) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <span
            style={{
              fontSize: 120,
              fontWeight: 800,
              color: "#E63946",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            JA
          </span>
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#F0F2F7",
              marginTop: 16,
              letterSpacing: "-0.01em",
            }}
          >
            AMIR JAMAL ALI KHAN
          </span>
          <span
            style={{
              fontSize: 22,
              color: "#8892A4",
              marginTop: 8,
              fontFamily: "Geist",
            }}
          >
            AI Engineer / Flutter Developer — SpeedForce Digital
          </span>
          <div
            style={{
              width: 200,
              height: 3,
              background: "linear-gradient(90deg, #E63946 0%, #6366F1 100%)",
              marginTop: 24,
              borderRadius: 2,
            }}
          />
          <span
            style={{
              fontSize: 20,
              color: "#6366F1",
              marginTop: 20,
              fontFamily: "Geist Mono",
            }}
          >
            6 Projects . 6 Months . Zero Missed Sprints
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Cabinet Grotesk", data: cabinetBoldData, weight: 700 },
        { name: "Geist", data: geistData, weight: 400 },
        { name: "Geist Mono", data: geistMonoData, weight: 400 },
      ],
    }
  );
}
