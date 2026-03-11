"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { SketchIllustration, type SketchType } from "@/components/ui/SketchIllustrations";

/* ── Why Us reasons with sketch types ──────────────────────────── */

const whyReasons: {
  title: string;
  description: string;
  sketchType: SketchType;
  tag: string;
  tagColor: string;
}[] = [
  {
    title: "Outcomes, not hours",
    description:
      "You pay for a finished working system — not a monthly retainer that keeps you dependent. The system runs whether we're involved or not.",
    sketchType: "target",
    tag: "DELIVERY",
    tagColor: "#34D399",
  },
  {
    title: "AI-native speed",
    description:
      "We ship in days, not months. Our workflows are built on AI tools so we move at a pace traditional agencies can't match.",
    sketchType: "lightning",
    tag: "SPEED",
    tagColor: "#4A7CFF",
  },
  {
    title: "Full ownership",
    description:
      "Everything we build is yours. Code, designs, accounts, credentials. No vendor lock-in, no proprietary platforms.",
    sketchType: "key",
    tag: "OWNERSHIP",
    tagColor: "#8B5CF6",
  },
  {
    title: "Toronto-focused",
    description:
      "We understand the Toronto service business landscape. Restaurants, studios, salons, gyms — we know what works.",
    sketchType: "cntower",
    tag: "LOCAL",
    tagColor: "#FB923C",
  },
];

/* ================================================================
   Why Us Section — Horizontal scroll-pinned layout
   Vertical scroll drives translateX on a horizontal card track.
   Now uses flat sketch-style cards matching the works page.
   ================================================================ */

export function CTABanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const cardCount = whyReasons.length;
  const GAP = 24;

  const handleScroll = useCallback(() => {
    if (!containerRef.current || !trackRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
    if (totalScroll <= 0) return;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / totalScroll));

    const cards =
      trackRef.current.querySelectorAll<HTMLElement>("[data-card]");
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
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section id="why-us" className="bg-navy" style={{ overflowX: "clip" }}>
      {/* Pinned horizontal scroll area */}
      <div
        ref={containerRef}
        style={{ height: `${(cardCount + 1) * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 z-[60] flex h-screen flex-col">
          {/* Header — fades out as cards scroll */}
          <div
            className="w-full px-6 pt-8 pb-4 md:pt-10 md:pb-6 lg:px-8 lg:pt-12"
            style={{
              opacity: Math.max(0, 1 - cardIndex * 2),
              transition: "opacity 0.3s ease-out",
              pointerEvents: cardIndex > 0.5 ? "none" : "auto",
            }}
          >
            <div className="mx-auto max-w-6xl">
              <div className="flex items-center gap-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40">
                  <span className="text-[13px] text-white/70">4</span>
                </div>
                <div className="h-px w-14 bg-white/40" />
                <span className="text-[15px] font-normal text-white/70">
                  Why us
                </span>
              </div>

              <h2 className="mt-6 max-w-3xl text-[1.75rem] font-medium leading-[1.18] tracking-[-0.02em] text-white sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
                Not a traditional agency.{" "}
                <span className="text-white/40">Here&apos;s why it matters.</span>
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/50">
                We&apos;re an AI-native studio built for speed, outcomes, and ownership.
              </p>
            </div>
          </div>

          {/* Card track */}
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
              {whyReasons.map((reason, i) => {
                const dist = Math.abs(i - cardIndex);
                const isActive = dist < 0.5;
                const proximity = Math.max(0, 1 - dist);

                // Scroll-driven transforms (no 3D — flat only)
                const scale = 0.95 + proximity * 0.05;
                const cardOpacity = isActive ? 1 : Math.max(0.4, 1 - dist * 0.4);

                return (
                  <div
                    key={reason.title}
                    data-card
                    className="relative w-[80vw] shrink-0 sm:w-[60vw] md:w-[45vw] lg:w-[38vw] max-w-[480px]"
                    style={{
                      opacity: cardOpacity,
                      transform: `scale(${scale})`,
                      transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
                      maxHeight: "calc(100vh - 180px)",
                    }}
                  >
                    {/* Sketch card — flex column so text is never clipped */}
                    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white">
                      {/* Sketch illustration — flexible height, shrinks to fit */}
                      <div className="relative flex min-h-0 flex-1 items-center justify-center bg-[#e8e9e0]">
                        <SketchIllustration
                          type={reason.sketchType}
                          className="h-full w-full p-10 opacity-80"
                        />
                      </div>

                      {/* Title row: name + colored tag — always visible */}
                      <div className="shrink-0 p-6 md:p-8">
                        <div className="flex items-center gap-3">
                          <h3 className="text-[1.1rem] font-semibold leading-tight tracking-[-0.01em] text-text-primary md:text-[1.25rem]">
                            {reason.title}
                          </h3>
                          <span
                            className="rounded-full px-2.5 py-[3px] text-[9px] font-semibold uppercase tracking-[0.05em] text-white"
                            style={{ backgroundColor: reason.tagColor }}
                          >
                            {reason.tag}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="mt-3 text-[14px] leading-relaxed text-text-secondary">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* Spacer so last card can center */}
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
