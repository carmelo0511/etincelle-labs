"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

/* Round floats to 3 decimal places — prevents hydration mismatches
   from tiny floating-point differences between Node.js SSR and browser */
const R = (n: number) => Math.round(n * 1000) / 1000;

/* ---------- Dataset card data ---------- */
const datasets = [
  {
    name: "Converse",
    description:
      "Our flagship English dataset consists of channel-separated, natural two-speaker conversations spanning a wide range of topics.",
    icon: "converse",
    vizType: "waveform" as const,
  },
  {
    name: "Atlas",
    description:
      "A multilingual dataset spanning 15+ languages. It captures diverse accents and follows the same format as Converse.",
    icon: "globe",
    vizType: "map" as const,
  },
  {
    name: "Chorus",
    description:
      "Multi-speaker group conversations with 3–8 participants, designed for meeting transcription and speaker diarization systems.",
    icon: "chorus",
    vizType: "multi" as const,
  },
  {
    name: "Dialog",
    description:
      "Goal-oriented dialogue between agents and users, covering booking, support, and information-seeking use cases.",
    icon: "dialog",
    vizType: "dialog" as const,
  },
];

/* ---------- Waveform visualization (Converse) ---------- */
function WaveformViz() {
  const rows = [
    { offset: 0, width: 55, seed: 0 },
    { offset: 28, width: 60, seed: 1.7 },
    { offset: 5, width: 50, seed: 3.1 },
    { offset: 22, width: 62, seed: 4.8 },
  ];
  return (
    <div className="flex w-full flex-col gap-3 px-6 pb-8 pt-4">
      {rows.map((row, ri) => {
        const barCount = Math.floor(row.width * 1.8);
        return (
          <div
            key={ri}
            className="flex items-center gap-[1.5px] rounded-lg bg-cream-dark/60 px-3 py-2.5"
            style={{ marginLeft: `${row.offset}%`, width: `${row.width}%` }}
          >
            {Array.from({ length: barCount }, (_, i) => {
              const seed = R(Math.sin(i * 1.7 + row.seed * 3.1) * 0.5 + 0.5);
              return (
                <div
                  key={i}
                  className="shrink-0 rounded-full bg-text-primary/30"
                  style={{
                    width: "2px",
                    height: `${R(4 + seed * 18)}px`,
                    opacity: R(0.4 + seed * 0.5),
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

/* ---------- World map visualization (Atlas) ---------- */
function MapViz() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden px-6 pb-8 pt-4">
      <svg viewBox="0 0 360 180" className="h-auto w-full opacity-[0.15]" fill="none">
        <ellipse cx="90" cy="60" rx="40" ry="30" stroke="#686963" strokeWidth="0.8" strokeDasharray="2 2" />
        <ellipse cx="110" cy="120" rx="20" ry="35" stroke="#686963" strokeWidth="0.8" strokeDasharray="2 2" />
        <ellipse cx="180" cy="50" rx="22" ry="18" stroke="#686963" strokeWidth="0.8" strokeDasharray="2 2" />
        <ellipse cx="185" cy="100" rx="22" ry="32" stroke="#686963" strokeWidth="0.8" strokeDasharray="2 2" />
        <ellipse cx="255" cy="55" rx="50" ry="30" stroke="#686963" strokeWidth="0.8" strokeDasharray="2 2" />
        <ellipse cx="290" cy="130" rx="18" ry="12" stroke="#686963" strokeWidth="0.8" strokeDasharray="2 2" />
        {Array.from({ length: 120 }, (_, i) => {
          const x = R((Math.sin(i * 2.3 + 1.7) * 0.5 + 0.5) * 340 + 10);
          const y = R((Math.cos(i * 1.9 + 0.3) * 0.5 + 0.5) * 160 + 10);
          return (
            <circle key={i} cx={x} cy={y} r={R(0.8 + Math.sin(i * 3.7) * 0.4)} fill="#686963" opacity={R(0.25 + Math.sin(i * 1.1) * 0.15)} />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-5 gap-x-8 gap-y-3">
          {["EN", "ES", "ZH", "HI", "AR", "JA", "KO", "PT", "FR", "DE", "RU", "IT", "TR", "PL", "NL"].map(
            (lang, i) => (
              <span
                key={lang}
                className="text-[9px] font-medium tracking-wider text-text-secondary/60"
                style={{ opacity: R(0.3 + (Math.sin(i * 2.1) * 0.5 + 0.5) * 0.5) }}
              >
                {lang}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Multi-speaker visualization (Chorus) ---------- */
function MultiViz() {
  const speakers = [
    { y: 20, color: "#4A7CFF", width: 65 },
    { y: 35, color: "#EC4899", width: 50 },
    { y: 50, color: "#34D399", width: 72 },
    { y: 65, color: "#FB923C", width: 45 },
    { y: 80, color: "#8B5CF6", width: 58 },
  ];
  return (
    <div className="w-full px-6 pb-8 pt-4">
      <svg viewBox="0 0 300 100" className="h-auto w-full" fill="none">
        {speakers.map((s, si) => (
          <g key={si}>
            {Array.from({ length: Math.floor(s.width / 2) }, (_, i) => {
              const h = R(3 + Math.abs(Math.sin(i * 1.4 + si * 2.3)) * 12);
              return (
                <rect
                  key={i}
                  x={30 + i * 3.5}
                  y={R(s.y - h / 2)}
                  width="2"
                  height={h}
                  rx="1"
                  fill={s.color}
                  opacity={0.5}
                />
              );
            })}
            <circle cx={18} cy={s.y} r="5" fill={s.color} opacity={0.35} />
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ---------- Dialog flow visualization ---------- */
function DialogViz() {
  const exchanges = [
    { from: "user", text: "Book a table for 2", color: "#4A7CFF" },
    { from: "agent", text: "Which restaurant?", color: "#34D399" },
    { from: "user", text: "Downtown Bistro", color: "#4A7CFF" },
    { from: "agent", text: "Confirmed 7pm", color: "#34D399" },
  ];
  return (
    <div className="flex w-full flex-col gap-2.5 px-6 pb-8 pt-4">
      {exchanges.map((ex, i) => (
        <div
          key={i}
          className="flex items-center gap-2"
          style={{ marginLeft: ex.from === "agent" ? "24%" : "0" }}
        >
          <div
            className="h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: ex.color, opacity: 0.7 }}
          />
          <div className="flex items-center gap-[1.5px]">
            {Array.from({ length: 25 + i * 5 }, (_, j) => {
              const h = R(3 + Math.abs(Math.sin(j * 1.6 + i * 2.1)) * 14);
              return (
                <div
                  key={j}
                  className="shrink-0 rounded-full"
                  style={{
                    width: "2px",
                    height: `${R(h)}px`,
                    backgroundColor: ex.color,
                    opacity: 0.35,
                  }}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Card icons ---------- */
function CardIcon({ type }: { type: string }) {
  const cls = "text-text-primary";
  switch (type) {
    case "converse":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={cls}>
          <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <rect x="8" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "globe":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={cls}>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="currentColor" strokeWidth="1" />
          <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1" />
          <line x1="4" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="0.75" />
          <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="0.75" />
        </svg>
      );
    case "chorus":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={cls}>
          <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 13c0-1 1.5-2 3-2s3 1 3 2" stroke="currentColor" strokeWidth="1" />
          <path d="M13 13c0-1 1.5-2 3-2s3 1 3 2" stroke="currentColor" strokeWidth="1" />
        </svg>
      );
    case "dialog":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={cls}>
          <path d="M3 5h12v8H7l-4 3V5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M9 11h12v8h-4l-4 3V11z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

const vizComponents = {
  waveform: WaveformViz,
  map: MapViz,
  multi: MultiViz,
  dialog: DialogViz,
};

/* ================================================================
   Main Dataset Explorer — Horizontal scroll-pinned section
   Uses the same height-multiplier + sticky technique as ProcessSection.
   Scroll progress drives translateX on a horizontal card track.

   When the horizontal scroll is active, we add a data attribute to
   document.documentElement so the Navbar can hide itself.
   ================================================================ */

export function DatasetExplorerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const cardCount = datasets.length;
  const GAP = 24; // gap-6 = 24px

  const handleScroll = useCallback(() => {
    if (!containerRef.current || !trackRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
    if (totalScroll <= 0) return;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / totalScroll));

    // Get actual card widths from the DOM
    const cards = trackRef.current.querySelectorAll<HTMLElement>("[data-card]");
    if (cards.length === 0) return;

    const cardW = cards[0].offsetWidth;
    const step = cardW + GAP;
    const maxTranslate = step * (cardCount - 1);
    const tx = progress * maxTranslate;

    setTranslateX(tx);
    setCardIndex(progress * (cardCount - 1));

    const active = rect.top <= 0 && rect.bottom >= window.innerHeight;
    setIsScrolling(active);
  }, [cardCount]);

  // Toggle data attribute on html element for navbar to read
  useEffect(() => {
    if (isScrolling) {
      document.documentElement.setAttribute("data-lateral-scroll", "true");
    } else {
      document.documentElement.removeAttribute("data-lateral-scroll");
    }
    return () => {
      document.documentElement.removeAttribute("data-lateral-scroll");
    };
  }, [isScrolling]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  // Header fades out as the horizontal scroll begins (slower fade so text stays visible longer)
  const headerOpacity = Math.max(0, 1 - cardIndex * 1.5);

  return (
    <section className="bg-navy" style={{ overflowX: "clip" }}>
      {/* Pinned horizontal scroll area — header + cards */}
      <div
        ref={containerRef}
        style={{ height: `${(cardCount + 1) * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 z-[60] flex h-screen flex-col">
          {/* Header — absolutely positioned at top, stays visible */}
          <div
            className="w-full px-6 pt-10 pb-6 md:pt-14 md:pb-8 lg:px-8 lg:pt-16"
            style={{
              opacity: Math.max(0, 1 - cardIndex * 2),
              transition: "opacity 0.3s ease-out",
              pointerEvents: cardIndex > 0.5 ? "none" : "auto",
            }}
          >
            <div className="mx-auto max-w-6xl">
              <div className="flex items-center gap-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40">
                  <span className="text-[13px] text-white/70">3</span>
                </div>
                <div className="h-px w-14 bg-white/40" />
                <span className="text-[15px] font-normal text-white">
                  Featured Datasets
                </span>
              </div>

              <h2 className="mt-6 max-w-4xl font-serif text-[1.75rem] font-normal leading-[1.25] tracking-[-0.02em] text-white sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem]">
                A dataset suite designed for speech-to-speech, multilingual, and voice interaction systems
              </h2>
            </div>
          </div>

          {/* Card track — fills remaining space */}
          <div className="flex flex-1 items-center">
            <div
              ref={trackRef}
              className="flex px-6 lg:px-[max(32px,calc((100vw-1200px)/2))]"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(-${translateX}px)`,
              willChange: "transform",
            }}
          >
            {datasets.map((dataset, i) => {
              const Viz = vizComponents[dataset.vizType];
              const dist = Math.abs(i - cardIndex);
              const opacity = dist < 0.5 ? 1 : Math.max(0.3, 1 - dist * 0.4);

              return (
                <div
                  key={dataset.name}
                  data-card
                  className="aspect-square w-[75vw] shrink-0 md:w-[50vw] lg:w-[42vw] max-w-[520px]"
                  style={{
                    opacity,
                    transition: "opacity 0.25s ease-out",
                  }}
                >
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-cream">
                    <div className="px-8 pt-8 pb-4">
                      <div className="flex items-center gap-3">
                        <CardIcon type={dataset.icon} />
                        <h3 className="text-2xl font-medium tracking-[-0.01em] text-text-primary md:text-[1.75rem]">
                          {dataset.name}
                        </h3>
                      </div>
                      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-text-secondary">
                        {dataset.description}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end overflow-hidden">
                      <Viz />
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Spacer so last card doesn't sit at far left */}
            <div className="w-[30vw] shrink-0" />
          </div>
          </div>

        </div>

      </div>

      {/* Bottom spacer */}
      <div className="h-16 md:h-24" />
    </section>
  );
}
