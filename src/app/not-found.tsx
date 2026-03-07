import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif",
          backgroundColor: "#f1f2ea",
          color: "#1a1a19",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <main
          style={{
            textAlign: "center",
            padding: "2rem",
            maxWidth: "480px",
          }}
        >
          {/* Logo dot */}
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#1a1a19",
              margin: "0 auto 2rem",
            }}
          />

          {/* 404 numeral */}
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#9c9e94",
              marginBottom: "1rem",
            }}
          >
            404 — Page not found
          </p>

          {/* Message */}
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginTop: 0,
              marginBottom: "1.5rem",
              fontFamily: "Georgia, serif",
            }}
          >
            This page doesn&apos;t exist yet.
          </h1>

          <p
            style={{
              fontSize: "1rem",
              color: "#686963",
              lineHeight: 1.6,
              marginBottom: "2rem",
            }}
          >
            The page you&apos;re looking for may have moved or hasn&apos;t been
            built yet. Let&apos;s get you back on track.
          </p>

          {/* Back home link */}
          <Link
            href="/"
            style={{
              display: "inline-block",
              padding: "0.75rem 2rem",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#f1f2ea",
              backgroundColor: "#1a1a19",
              borderRadius: "9999px",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
          >
            Back to home
          </Link>
        </main>
      </body>
    </html>
  );
}
