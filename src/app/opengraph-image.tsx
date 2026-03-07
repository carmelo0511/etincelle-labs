import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Etincelle — AI Ops Studio, Toronto";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f1f2ea",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative vertical bars */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            opacity: 0.06,
          }}
        >
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 6,
                height: 200 + Math.sin(i * 0.5) * 120,
                backgroundColor: "#1a1a19",
                borderRadius: 3,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            position: "relative",
          }}
        >
          {/* Logo dot */}
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              backgroundColor: "#1a1a19",
            }}
          />

          {/* Brand name */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "#1a1a19",
              textTransform: "uppercase" as const,
            }}
          >
            Etincelle
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 24,
              color: "#686963",
              letterSpacing: "0.04em",
            }}
          >
            AI Ops Studio — Toronto
          </div>

          {/* Colored dots */}
          <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
            {["#FB923C", "#EF4444", "#34D399", "#8B5CF6", "#4A7CFF"].map(
              (c) => (
                <div
                  key={c}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: c,
                  }}
                />
              )
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            display: "flex",
          }}
        >
          <div style={{ flex: 1, backgroundColor: "#FB923C" }} />
          <div style={{ flex: 1, backgroundColor: "#EF4444" }} />
          <div style={{ flex: 1, backgroundColor: "#34D399" }} />
          <div style={{ flex: 1, backgroundColor: "#8B5CF6" }} />
          <div style={{ flex: 1, backgroundColor: "#4A7CFF" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
