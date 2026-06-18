import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

export const dynamic = "force-dynamic";

// Generated gradient cover image for blog posts (no external API).
// Usage: /api/og?title=Your%20Post%20Title&tag=Blog
export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const title = (searchParams.get("title") || "Blog").slice(0, 120);
  const tag = (searchParams.get("tag") || "Blog").slice(0, 24);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#08080a",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* top-right purple glow */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 640,
            height: 640,
            borderRadius: 9999,
            background: "radial-gradient(circle, #6366f1 0%, rgba(99,102,241,0) 65%)",
            opacity: 0.55,
          }}
        />
        {/* bottom-left cyan glow */}
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -100,
            width: 580,
            height: 580,
            borderRadius: 9999,
            background: "radial-gradient(circle, #06b6d4 0%, rgba(6,182,212,0) 65%)",
            opacity: 0.45,
          }}
        />
        {/* subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* tag pill */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(99,102,241,0.15)",
              border: "1px solid rgba(99,102,241,0.35)",
              borderRadius: 9999,
              padding: "8px 20px",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#a5b4fc",
            }}
          >
            {tag}
          </div>
        </div>

        {/* title */}
        <div
          style={{
            display: "flex",
            fontSize: title.length > 50 ? 56 : 68,
            lineHeight: 1.15,
            fontWeight: 800,
            letterSpacing: -2,
            color: "#f4f4f5",
            maxWidth: 960,
          }}
        >
          {title}
        </div>

        {/* author row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: 9999,
              background: "linear-gradient(135deg, #6366f1, #06b6d4)",
              fontSize: 18,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            RS
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <div style={{ display: "flex", fontSize: 20, fontWeight: 600, color: "#e4e4e7" }}>
              Rahul Singh
            </div>
            <div style={{ display: "flex", fontSize: 16, color: "#71717a" }}>
              rahul54.singhrathore@gmail.com
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
