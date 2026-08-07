import { ImageResponse } from "next/og";

export const alt = "Raka Pratama — Product Engineer (Frontend-First)";
export const contentType = "image/png";
export const dynamic = "force-static";
export const size = { height: 630, width: 1200 };

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "flex-start",
        background: "#0c0a09",
        color: "#fafaf9",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Inter, sans-serif",
        height: "100%",
        justifyContent: "center",
        padding: "72px 80px",
        width: "100%",
      }}
    >
      {/* Amber accent rule */}
      <div
        style={{
          background: "#fbbf24",
          borderRadius: 2,
          display: "flex",
          height: 6,
          marginBottom: 40,
          width: 72,
        }}
      />
      <div
        style={{
          color: "#fbbf24",
          display: "flex",
          fontFamily: "monospace",
          fontSize: 22,
          letterSpacing: "0.28em",
          marginBottom: 24,
          textTransform: "uppercase",
        }}
      >
        {"// product engineer — bandung, id"}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 84,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1.02,
        }}
      >
        Raka Pratama
      </div>
      <div
        style={{
          color: "#d6d3d1",
          display: "flex",
          fontSize: 36,
          marginTop: 20,
        }}
      >
        Frontend-first. Full-stack capable.
      </div>
      <div
        style={{
          color: "#a8a29e",
          display: "flex",
          fontFamily: "monospace",
          fontSize: 20,
          letterSpacing: "0.18em",
          marginTop: 56,
          textTransform: "uppercase",
        }}
      >
        React · Next.js · TypeScript · Node.js · PostgreSQL
      </div>
    </div>,
    {
      ...size,
    },
  );
}
