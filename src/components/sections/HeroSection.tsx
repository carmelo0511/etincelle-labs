"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

/* ── Bar-cluster spark visualization ─────────────────────────────────
   Compact, horizontally-dense bar composition inspired by David AI.
   Each group is an array of [x, y, h] tuples.  All bars share:
     width = 2.5, rx = 1.25, bottom-aligned to y = 160.
   Colors flow dark → warm → neutral → cool → dark → pink. */

type BarGroup = { color: string; bars: [number, number, number][] };

function barGroup(
  xStart: number,
  color: string,
  heights: number[],
): BarGroup {
  return {
    color,
    bars: heights.map((h, i) => [xStart + i * 4.5, 160 - h, h]),
  };
}

const groups: BarGroup[] = [
  // Far-left whisper
  barGroup(4, "#1a1a1a", [4, 9, 15, 7]),
  barGroup(22, "#E85A3A", [5, 14, 24, 34, 18, 8]),
  // Dark opening
  barGroup(50, "#1a1a1a", [12, 28, 48, 68, 85, 78, 58, 34, 16]),
  barGroup(92, "#2A2A28", [20, 42, 62, 80, 70, 48, 22]),
  // Warm — red
  barGroup(126, "#E85A3A", [28, 52, 82, 112, 138, 148, 130, 100, 62, 28]),
  // Warm — orange
  barGroup(172, "#F07C4A", [34, 68, 104, 136, 155, 148, 124, 86, 48, 20]),
  // Warm — amber
  barGroup(220, "#F5A623", [22, 50, 82, 116, 134, 120, 92, 56, 26]),
  // Warm — yellow
  barGroup(262, "#ECC94B", [18, 40, 66, 94, 112, 104, 82, 54, 28]),
  // Neutral — tan
  barGroup(304, "#C4B896", [14, 34, 56, 80, 96, 86, 64, 38, 16]),
  // Neutral — sage
  barGroup(346, "#8BA39C", [20, 46, 76, 106, 128, 136, 118, 84, 48, 20]),
  // Cool — steel
  barGroup(394, "#7B8EB0", [16, 40, 68, 100, 120, 108, 80, 46, 18]),
  // Cool — indigo
  barGroup(434, "#5B6DC7", [22, 50, 84, 118, 146, 155, 138, 104, 64, 28]),
  // Cool — blue
  barGroup(482, "#4A7CFF", [26, 56, 90, 122, 142, 132, 106, 68, 32]),
  // Dark closing
  barGroup(524, "#3A3A38", [20, 48, 80, 112, 128, 110, 78, 42, 18]),
  barGroup(566, "#6B6B66", [16, 38, 62, 84, 72, 48, 22]),
  barGroup(598, "#1a1a1a", [22, 48, 78, 108, 132, 140, 120, 86, 48, 20]),
  // Pink accent
  barGroup(646, "#D94F8C", [18, 44, 76, 108, 124, 102, 68, 32]),
  barGroup(684, "#E84F8C", [12, 30, 52, 40, 18, 6]),
  // Far-right fade
  barGroup(712, "#1a1a1a", [8, 18, 30, 16, 6]),
  barGroup(736, "#2A2A28", [4, 10, 6]),
];

/* Colors that cycle through the middle bar groups (indices 4–16).
   The rotation creates a flowing, continuously shifting palette. */
const middleColors = [
  "#E85A3A", "#F07C4A", "#F5A623", "#ECC94B", "#C4B896",
  "#8BA39C", "#7B8EB0", "#5B6DC7", "#4A7CFF", "#3A3A38",
  "#6B6B66", "#1a1a1a", "#D94F8C",
];

function HeroVisualization() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % middleColors.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      viewBox="0 0 755 160"
      fill="none"
      className="h-auto w-full"
      aria-label="Etincelle data visualization"
      role="img"
    >
      {groups.map((g, gi) => {
        const isMiddle = gi >= 4 && gi <= 16;
        const color = isMiddle
          ? middleColors[(gi - 4 + offset) % middleColors.length]
          : g.color;

        return g.bars.map(([x, y, h], bi) => (
          <rect
            key={`${gi}-${bi}`}
            x={x}
            y={y}
            width={2.5}
            height={h}
            rx={1.25}
            fill={color}
            style={isMiddle ? { transition: "fill 2s ease-in-out" } : undefined}
          />
        ));
      })}
    </svg>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-10 md:pb-12 md:pt-14 lg:px-8 lg:pb-14 lg:pt-16">
        {/* Hero spectrogram visualization */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="w-full"
        >
          <HeroVisualization />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className="mt-14 max-w-[900px] text-[2.5rem] font-normal leading-[1.3] tracking-[-0.03em] text-text-primary sm:text-[3rem] md:mt-20 md:text-[3.5rem] lg:text-[4.25rem]"
        >
          Your AI-powered{" "}
          <span className="font-serif italic">front office.</span>
          <br />
          Built in days.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.22}
          className="mt-6 max-w-lg text-[1.1rem] leading-relaxed text-text-secondary md:text-[1.2rem]"
        >
          We build AI agents tailored to your business — handling calls, reviews, bookings, and leads 24/7. Fixed setup. Monthly plans starting at $297.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="mt-10 flex flex-wrap items-center gap-4 md:mt-14"
        >
          <Button variant="primary" size="md" href="https://cal.com/bryan-nakache-vse3wk" target="_blank">
            Book a call
          </Button>
          <Button variant="outline" size="md" href="#process">
            See how it works
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
